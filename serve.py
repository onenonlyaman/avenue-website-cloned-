#!/usr/bin/env python3
"""Local dev server for the captured site in this folder.

Same as `python -m http.server 8000`, with two differences:

1. It always serves THIS folder (the one holding this script), no matter
   where you run it from -- so you can never accidentally serve a backup copy.
2. HTML documents go out with `Cache-Control: no-store`, so the browser
   re-fetches index.html on every refresh instead of replaying a cached copy.
   Static assets (_next, css, js, images, seq/ frames, video) keep normal
   caching, so image sequences and animations load exactly as fast as before.

Usage:  python serve.py           -> http://localhost:8000/
        python serve.py 8080      -> http://localhost:8080/
"""

import functools
import http.server
import os
import sys
from urllib.parse import urlparse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class NoCacheHTMLHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        path = urlparse(self.path).path
        if path.endswith("/") or path.endswith((".html", ".htm")):
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()


class Server(http.server.ThreadingHTTPServer):
    # Left off deliberately: if port 8000 is already taken by another server,
    # fail loudly instead of quietly binding alongside it (Windows lets you).
    allow_reuse_address = False
    daemon_threads = True


if __name__ == "__main__":
    handler = functools.partial(NoCacheHTMLHandler, directory=ROOT)
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
        print("HTML is sent no-store; assets cached normally. Ctrl+C to stop.")
        httpd.serve_forever()
