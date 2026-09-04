import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { URL } from "url";

const SITE = "https://www.kinfra.in/";
const OUTPUT = path.resolve("./captured-assets");

function safePathFromUrl(urlString) {
  const url = new URL(urlString);

  // Next.js optimized images
  if (url.pathname === "/_next/image") {
    const source = url.searchParams.get("url");

    if (source) {
      return decodeURIComponent(source).replace(/^\/+/, "");
    }
  }

  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    return "index.html";
  }

  pathname = pathname.replace(/^\/+/, "");

  return pathname;
}

function ensureDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

const browser = await chromium.launch({
  headless: true
});

const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 900
  }
});

const saved = new Set();

page.on("response", async (response) => {
  try {
    const request = response.request();
    const url = response.url();

    // Only capture Kinfra's own files
    if (!url.startsWith("https://www.kinfra.in/")) {
      return;
    }

    // Ignore failed responses
    if (!response.ok()) {
      return;
    }

    const resourceType = request.resourceType();

    const allowedTypes = [
      "document",
      "stylesheet",
      "script",
      "image",
      "font",
      "media",
      "manifest",
      "texttrack"
    ];

    if (!allowedTypes.includes(resourceType)) {
      return;
    }

    const relativePath = safePathFromUrl(url);

    if (!relativePath || saved.has(relativePath)) {
      return;
    }

    saved.add(relativePath);

    const destination = path.join(OUTPUT, relativePath);

    ensureDirectory(destination);

    const body = await response.body();

    fs.writeFileSync(destination, body);

    console.log(
      `SAVED [${resourceType}] ${relativePath}`
    );

  } catch (error) {
    console.log("SKIPPED:", response.url());
  }
});

console.log("Opening Kinfra...");

await page.goto(SITE, {
  waitUntil: "domcontentloaded",
  timeout: 120000
});

console.log("Page loaded.");

await page.waitForTimeout(5000);

console.log("Scrolling page to load lazy assets...");

// Scroll slowly through the entire homepage
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let position = 0;

    const distance = 500;

    const timer = setInterval(() => {
      position += distance;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });

      if (position >= document.body.scrollHeight) {
        clearInterval(timer);
        setTimeout(resolve, 3000);
      }
    }, 500);
  });
});

console.log("Scrolling complete.");

await page.waitForTimeout(5000);

// Return to top
await page.evaluate(() => {
  window.scrollTo(0, 0);
});

await page.waitForTimeout(2000);

// Save final rendered HTML
const html = await page.content();

fs.mkdirSync(OUTPUT, { recursive: true });

fs.writeFileSync(
  path.join(OUTPUT, "index.html"),
  html,
  "utf8"
);

console.log("");
console.log("=================================");
console.log("CAPTURE COMPLETE");
console.log("=================================");
console.log(`Assets captured: ${saved.size}`);
console.log(`Output folder: ${OUTPUT}`);

await browser.close();