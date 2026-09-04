"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const TOTAL_FRAMES = 233;

const overlays = [
  {
    from: 0.02,
    to: 0.16,
    eyebrow: "Visionary Architecture",
    headline: "SOME BUILDINGS\nARE BUILT.",
  },
  {
    from: 0.24,
    to: 0.38,
    eyebrow: "Enduring Legacy",
    headline: "OTHERS ARE\nREMEMBERED.",
  },
  {
    from: 0.46,
    to: 0.62,
    eyebrow: "Nagpur, India",
    headline: "BUILDING THE ICONS\nOF TOMORROW.",
  },
  {
    from: 0.78,
    to: 0.96,
    eyebrow: "Kukreja Infrastructures",
    headline: "WELCOME\nHOME.",
    cta: true,
  },
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Preload frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/seq/d/${frameNum}.webp`;
      img.onload = () => {
        loaded++;
        if (loaded % 10 === 0 || loaded === TOTAL_FRAMES) {
          setLoadedCount(loaded);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Draw frame on canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate aspect ratio cover
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth = canvasWidth;
    let renderHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

    // Subtle dark gradient overlay on canvas for readability
    const gradient = ctx.createLinearGradient(0, canvasHeight * 0.5, 0, canvasHeight);
    gradient.addColorStop(0, "rgba(12, 10, 9, 0)");
    gradient.addColorStop(1, "rgba(12, 10, 9, 0.65)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

      setScrollProgress(progress);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(progress * TOTAL_FRAMES)
        );
        drawFrame(frameIndex);
      });
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollProgress * TOTAL_FRAMES)
      );
      drawFrame(frameIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="relative h-[420vh] bg-black">
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dynamic Overlays */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-start px-8 md:px-20 lg:px-28">
          {overlays.map((item, idx) => {
            const midpoint = (item.from + item.to) / 2;
            const halfSpan = (item.to - item.from) / 2;
            const dist = Math.abs(scrollProgress - midpoint);
            const opacity = Math.max(0, 1 - dist / halfSpan);

            if (opacity <= 0.01) return null;

            return (
              <div
                key={idx}
                style={{
                  opacity,
                  transform: `translateY(${(1 - opacity) * 25}px)`,
                }}
                className="max-w-3xl transition-transform duration-100 ease-out"
              >
                <div className="text-[11px] md:text-[13px] font-grotesk uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4">
                  {item.eyebrow}
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-grotesk font-normal uppercase leading-[0.95] tracking-tight text-white whitespace-pre-line drop-shadow-2xl">
                  {item.headline}
                </h1>

                {item.cta && (
                  <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
                    <Link
                      href="/the-one"
                      className="inline-flex items-center gap-3 bg-white px-8 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-brand-gold transition-colors duration-300 shadow-xl"
                    >
                      <span>Explore Flagship</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 backdrop-blur-sm"
                    >
                      <span>Schedule a Visit</span>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 right-8 md:right-16 flex items-center gap-3 text-white/50 text-[11px] font-grotesk uppercase tracking-[0.25em] transition-opacity duration-500 pointer-events-none ${
            scrollProgress > 0.85 ? "opacity-0" : "opacity-100"
          }`}
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
        </div>
      </div>
    </div>
  );
}
