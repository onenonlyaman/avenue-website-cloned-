#!/usr/bin/env python3
"""Enhanced local dev server for the captured site.

Features:
1. Serves the directory holding this script regardless of CWD.
2. Intercepts `/_next/image?url=...` and serves the local target file,
   fixing all Next.js optimized images.
3. Automatically resolves clean URLs (e.g. `/our-story` -> `/our-story.html`).
4. Avoids Windows socket resets and threading deadlocks.
5. Sends `Cache-Control: no-store` for HTML so refreshes are immediate.
"""

import functools
import http.server
import os
import sys
from urllib.parse import urlparse, parse_qs, unquote

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        path = urlparse(self.path).path
        if path.endswith("/") or path.endswith((".html", ".htm")):
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def translate_path(self, path):
        parsed = urlparse(path)
        clean_path = parsed.path

        # Handle Next.js image optimization endpoint: /_next/image?url=%2F...
        if clean_path == "/_next/image":
            qs = parse_qs(parsed.query)
            if "url" in qs and qs["url"]:
                target = unquote(qs["url"][0]).lstrip("/")
                full_path = os.path.normpath(os.path.join(ROOT, target))
                if full_path.startswith(ROOT) and os.path.isfile(full_path):
                    return full_path

        # Standard translation
        translated = super().translate_path(clean_path)

        # Clean URLs: if /our-story is requested and doesn't exist, check /our-story.html
        if not os.path.exists(translated) and os.path.isfile(translated + ".html"):
            return translated + ".html"

        return translated

    def address_string(self):
        # Avoid reverse DNS lookup delay on Windows
        return self.client_address[0]


class Server(http.server.ThreadingHTTPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    handler = functools.partial(CustomHTTPHandler, directory=ROOT)
    try:
        httpd = Server(("", PORT), handler)
    except OSError as exc:
        sys.exit(
            f"Could not bind port {PORT}: {exc}\n"
            f"Another server is probably still running. Stop it first "
            f"(Ctrl+C in its window, or: taskkill /F /IM python.exe)"
        )
    with httpd:
        print(f"Serving : {ROOT}")
        print(f"Open    : http://localhost:{PORT}/")
        print("HTML is sent no-store; Next images and clean URLs mapped. Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
