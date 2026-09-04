(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        1668: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 9969)), Promise.resolve().then(n.bind(n, 1116)), Promise.resolve().then(n.bind(n, 3135)), Promise.resolve().then(n.bind(n, 9912)), Promise.resolve().then(n.bind(n, 3672)), Promise.resolve().then(n.bind(n, 6499)), Promise.resolve().then(n.bind(n, 6771)), Promise.resolve().then(n.t.bind(n, 9324, 23)), Promise.resolve().then(n.bind(n, 3126)), Promise.resolve().then(n.t.bind(n, 5688, 23)), Promise.resolve().then(n.t.bind(n, 7051, 23)), Promise.resolve().then(n.t.bind(n, 7308, 23)), Promise.resolve().then(n.t.bind(n, 6502, 23)), Promise.resolve().then(n.t.bind(n, 6676, 23)), Promise.resolve().then(n.t.bind(n, 8068, 23))
        },
        9969: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => m
            });
            var r = n(5155),
                a = n(2115),
                s = n(6046),
                i = n(522);

            function o(e) {
                let {
                    isOpen: t,
                    onClose: n,
                    onSuccess: s,
                    mode: o = "enquiry"
                } = e, [l, c] = (0, a.useState)(!1);
                return ((0, a.useEffect)(() => {
                    if (!t) return;
                    let e = e => {
                        "Escape" === e.key && n()
                    };
                    window.addEventListener("keydown", e);
                    let r = document.body.style.overflow;
                    return document.body.style.overflow = "hidden", () => {
                        window.removeEventListener("keydown", e), document.body.style.overflow = r
                    }
                }, [t, n]), t) ? (0, r.jsxs)("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Enquiry",
                    className: "fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6",
                    children: [(0, r.jsx)("button", {
                        type: "button",
                        "aria-label": "Close",
                        onClick: n,
                        className: "absolute inset-0 cursor-default bg-[#14110c]/80 backdrop-blur-sm"
                    }), (0, r.jsxs)("div", {
                        className: "relative w-full max-w-lg border border-[#17140f]/10 bg-white p-7 shadow-[0_30px_80px_-30px_rgba(23,20,15,0.5)] sm:p-10",
                        children: [(0, r.jsx)("button", {
                            type: "button",
                            onClick: n,
                            "aria-label": "Close",
                            className: "absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center border border-[#17140f]/20 text-[#17140f]/55 transition-colors hover:border-[#b06a35] hover:text-[#17140f]",
                            children: (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                className: "text-lg leading-none",
                                children: "\xd7"
                            })
                        }), l ? (0, r.jsxs)("div", {
                            className: "py-6 text-center",
                            children: [(0, r.jsx)("p", {
                                className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b06a35]",
                                children: "Thank you"
                            }), (0, r.jsx)("h2", {
                                className: "mt-3 font-grotesk text-[24px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                children: "We have your details"
                            }), (0, r.jsx)("p", {
                                className: "mt-3 font-hanken text-[15px] leading-relaxed text-[#57534d]",
                                children: "Our team will call you shortly."
                            }), (0, r.jsx)("button", {
                                type: "button",
                                onClick: n,
                                className: "mt-7 cursor-pointer border border-[#17140f]/25 px-7 py-3 font-grotesk text-[11.5px] uppercase tracking-[0.16em] text-[#17140f] transition-colors hover:border-[#b06a35] hover:text-[#b06a35]",
                                children: "Keep browsing"
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("p", {
                                className: "font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#b06a35]",
                                children: "Kukreja Infrastructures"
                            }), (0, r.jsx)("h2", {
                                className: "mt-3 font-grotesk text-[28px] font-semibold uppercase leading-[1.05] tracking-tight text-[#17140f] sm:text-[34px]",
                                children: "brochure" === o ? "Get the brochure" : "Speak to our team"
                            }), (0, r.jsx)("p", {
                                className: "mb-6 mt-3.5 font-hanken text-[15.5px] leading-relaxed text-[#57534d]",
                                children: "brochure" === o ? "Share your details and we will send the brochure across." : "Leave your details and we will call you back about the right home for you."
                            }), (0, r.jsx)(i.default, {
                                enquiryType: "brochure" === o ? "brochure" : "enquiry",
                                buttonLabel: "brochure" === o ? "Send me the brochure" : "Submit Interest",
                                variant: "light",
                                onSuccess: () => {
                                    c(!0), null == s || s()
                                }
                            })]
                        })]
                    })]
                }) : null
            }
            let l = ["/paris-city", "/embassy-2", ...n(9301).pe.filter(e => e.soldOut).map(e => "/".concat(e.slug))],
                c = "kinfra_popup_shown",
                d = "modalLastShown",
                u = ["/"];

            function m() {
                let e = (0, s.usePathname)(),
                    t = "/" === e || l.some(t => null == e ? void 0 : e.startsWith(t)),
                    [n, i] = (0, a.useState)(!1),
                    [m, f] = (0, a.useState)(!1),
                    [h, g] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    if (g(!0), t || m || (() => {
                            try {
                                if ("1" === sessionStorage.getItem(c)) return !0;
                                let e = parseInt(localStorage.getItem(d) || "0", 10);
                                if (e && Date.now() - e < 864e5) return !0
                            } catch (e) {}
                            return !1
                        })()) return;
                    if (u.includes(null != e ? e : "")) try {
                        if (!localStorage.getItem("kinfra_cookie_consent")) return
                    } catch (e) {
                        return
                    }
                    let n = Date.now(),
                        r = !1,
                        a = () => {
                            if (!(r || Date.now() - n < 4e3) && !(window.scrollY < 1.4 * window.innerHeight)) {
                                r = !0;
                                try {
                                    sessionStorage.setItem(c, "1"), localStorage.setItem(d, Date.now().toString())
                                } catch (e) {}
                                i(!0)
                            }
                        };
                    return window.addEventListener("scroll", a, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", a)
                }, [t, m, e]);
                let p = () => {
                    try {
                        sessionStorage.setItem(c, "1"), localStorage.setItem(d, Date.now().toString())
                    } catch (e) {}
                };
                return !h || t ? null : (0, r.jsx)(o, {
                    isOpen: n,
                    onClose: () => {
                        i(!1), f(!0), p()
                    },
                    onSuccess: () => {
                        f(!0), p()
                    },
                    mode: "enquiry"
                })
            }
        },
        1116: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var r = n(5155),
                a = n(6584),
                s = n(6046),
                i = n(2115),
                o = n(5565);

            function l() {
                let e = (0, s.usePathname)();
                return (0, i.useEffect)(() => {
                    window.fbq && window.fbq("track", "PageView")
                }, [e]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {
                        id: "facebook-pixel",
                        strategy: "afterInteractive",
                        children: "\n          !function(f,b,e,v,n,t,s)\n          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n          n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n          n.queue=[];t=b.createElement(e);t.async=!0;\n          t.src=v;s=b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t,s)}(window, document,'script',\n          'https://connect.facebook.net/en_US/fbevents.js');\n          fbq('init', '1145747874241253');\n          fbq('track', 'PageView');\n        "
                    }), (0, r.jsx)("noscript", {
                        children: (0, r.jsx)(o.default, {
                            height: 1,
                            width: 1,
                            style: {
                                display: "none"
                            },
                            src: "https://www.facebook.com/tr?id=1145747874241253&ev=PageView&noscript=1",
                            alt: "",
                            unoptimized: !0
                        })
                    })]
                })
            }
        },
        3135: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(5155),
                a = n(6584);

            function s() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-17765770696",
                        strategy: "afterInteractive"
                    }), (0, r.jsx)(a.default, {
                        id: "google-tag",
                        strategy: "afterInteractive",
                        children: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'AW-17765770696');\n        "
                    })]
                })
            }
        },
        9912: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(5155),
                a = n(6584);

            function s() {
                return (0, r.jsx)(a.default, {
                    id: "google-tag-manager",
                    strategy: "afterInteractive",
                    children: "\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-PK98NVFM');\n      "
                })
            }
        },
        3672: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => f
            });
            var r = n(5155),
                a = n(2115),
                s = n(8173),
                i = n.n(s),
                o = n(6046),
                l = n(2653),
                c = n(5683),
                d = n(698);
            let u = ["/"],
                m = "kinfra_cookie_consent";

            function f() {
                let e = (0, o.usePathname)(),
                    t = (0, l.I)(),
                    [n, s] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    if (!u.includes(null != e ? e : "")) return;
                    try {
                        if (localStorage.getItem(m)) return
                    } catch (e) {
                        s(!0);
                        return
                    }
                    let t = () => {
                        window.scrollY < .6 * window.innerHeight || (window.removeEventListener("scroll", t), s(!0))
                    };
                    return window.addEventListener("scroll", t, {
                        passive: !0
                    }), t(), () => window.removeEventListener("scroll", t)
                }, [e]);
                let f = e => {
                    var t;
                    try {
                        localStorage.setItem(m, e)
                    } catch (e) {}
                    let n = "accepted" === e;
                    null === (t = window.dataLayer) || void 0 === t || t.push({
                        event: "cookie_consent",
                        consent: e,
                        ad_storage: n ? "granted" : "denied",
                        analytics_storage: n ? "granted" : "denied"
                    }), s(!1)
                };
                return (0, r.jsx)(c.N, {
                    children: n && (0, r.jsx)(d.P.div, {
                        className: "fixed inset-x-0 bottom-0 z-[130] w-full",
                        initial: t ? {
                            opacity: 0
                        } : {
                            opacity: 0,
                            y: 90
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: t ? {
                            opacity: 0
                        } : {
                            opacity: 0,
                            y: 70
                        },
                        transition: {
                            duration: .6,
                            ease: [.16, 1, .3, 1]
                        },
                        children: (0, r.jsx)("div", {
                            className: "border-t border-[#e6e2d9] bg-[#faf9f7]/97 shadow-[0_-14px_40px_-24px_rgba(23,20,15,0.35)] backdrop-blur-xl",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto flex max-w-[1640px] flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12 lg:px-16",
                                style: {
                                    paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))"
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: "max-w-3xl",
                                    children: [(0, r.jsx)("p", {
                                        className: "font-grotesk text-[clamp(0.89rem,1.27vw,1.15rem)] font-normal tracking-tight text-[#17140f]",
                                        children: "We use cookies to improve your experience"
                                    }), (0, r.jsxs)("p", {
                                        className: "mt-2 font-hanken text-[13.5px] leading-relaxed text-[#57534d]",
                                        children: ["By clicking “Accept All”, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts. Read our", " ", (0, r.jsx)(i(), {
                                            href: "/privacy",
                                            className: "font-medium text-[#b06a35] underline underline-offset-2 transition-colors hover:text-[#17140f]",
                                            children: "privacy policy"
                                        }), "."]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex shrink-0 flex-wrap items-center gap-3",
                                    children: [(0, r.jsx)(i(), {
                                        href: "/privacy",
                                        className: "px-2 py-2.5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.14em] text-[#57534d] transition-colors duration-300 hover:text-[#17140f]",
                                        children: "Cookie Settings"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => f("rejected"),
                                        className: "rounded-md border border-[#17140f]/30 px-5 py-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17140f] transition-colors duration-300 hover:border-[#17140f] hover:bg-[#17140f]/[0.04]",
                                        children: "Necessary Cookies"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => f("accepted"),
                                        className: "rounded-md bg-[#b06a35] px-6 py-3 font-grotesk text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_26px_-12px_rgba(176,106,53,0.85)] transition-colors duration-300 hover:bg-[#17140f]",
                                        children: "Accept All"
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        6499: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var r = n(2115),
                a = n(6046),
                s = n(7647);

            function i() {
                let e = (0, a.usePathname)();
                return (0, r.useEffect)(() => {
                    (0, s.Y)()
                }, [e]), null
            }
        },
        6771: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => o,
                LightboxProvider: () => l
            });
            var r = n(5155),
                a = n(2115),
                s = n(5565);
            let i = (0, a.createContext)(null);

            function o() {
                var e;
                return null !== (e = (0, a.useContext)(i)) && void 0 !== e ? e : {
                    open: () => {}
                }
            }

            function l(e) {
                var t;
                let {
                    children: n
                } = e, [o, l] = (0, a.useState)(null), [d, u] = (0, a.useState)(0), m = (0, a.useRef)(null), f = (0, a.useRef)(null), h = (0, a.useCallback)((e, t) => {
                    e.length && (l(e), u(Math.max(0, Math.min(e.length - 1, t))))
                }, []), g = (0, a.useCallback)(() => l(null), []), p = (0, a.useCallback)(e => u(t => o ? (t + e + o.length) % o.length : t), [o]);
                (0, a.useEffect)(() => {
                    var e;
                    if (!o) return;
                    let t = e => {
                        "Escape" === e.key && g(), "ArrowRight" === e.key && p(1), "ArrowLeft" === e.key && p(-1)
                    };
                    window.addEventListener("keydown", t);
                    let n = document.body.style.overflow;
                    document.body.style.overflow = "hidden";
                    let r = window.__lenis;
                    return null == r || r.stop(), null === (e = f.current) || void 0 === e || e.focus(), () => {
                        window.removeEventListener("keydown", t), document.body.style.overflow = n, null == r || r.start()
                    }
                }, [o, g, p]);
                let x = (0, a.useCallback)(() => {
                        g(), setTimeout(() => {
                            let e = document.getElementById("enquire");
                            if (!e) return;
                            let t = window.__lenis;
                            t ? t.scrollTo(e, {
                                offset: -80
                            }) : e.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }, 80)
                    }, [g]),
                    b = (0, a.useMemo)(() => ({
                        open: h
                    }), [h]),
                    y = null == o ? void 0 : o[d];
                return (0, r.jsxs)(i.Provider, {
                    value: b,
                    children: [n, o && y && (0, r.jsxs)("div", {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Gallery image",
                        className: "fixed inset-0 z-[200] flex flex-col bg-[#0b0a09]",
                        onTouchStart: e => {
                            m.current = e.touches[0].clientX
                        },
                        onTouchEnd: e => {
                            if (null === m.current) return;
                            let t = e.changedTouches[0].clientX - m.current;
                            Math.abs(t) > 45 && p(t < 0 ? 1 : -1), m.current = null
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "flex shrink-0 items-center justify-between px-5 py-4 md:px-8",
                            children: [(0, r.jsxs)("span", {
                                className: "font-grotesk text-[11px] uppercase tracking-[0.24em] text-white/55",
                                children: [d + 1, " / ", o.length]
                            }), (0, r.jsx)("button", {
                                ref: f,
                                type: "button",
                                onClick: g,
                                "aria-label": "Close",
                                className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10",
                                children: (0, r.jsx)("svg", {
                                    width: "17",
                                    height: "17",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.8",
                                    strokeLinecap: "round",
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)("path", {
                                        d: "M18 6 6 18M6 6l12 12"
                                    })
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "relative flex min-h-0 flex-1 items-center justify-center px-4 pb-2",
                            onClick: g,
                            children: [(0, r.jsx)("div", {
                                className: "relative h-full w-full max-w-[1400px]",
                                onClick: e => e.stopPropagation(),
                                children: (0, r.jsx)(s.default, {
                                    src: y.src,
                                    alt: null !== (t = y.alt) && void 0 !== t ? t : "",
                                    fill: !0,
                                    sizes: "100vw",
                                    className: "object-contain",
                                    priority: !0
                                }, y.src)
                            }), o.length > 1 && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(c, {
                                    side: "left",
                                    onClick: e => {
                                        e.stopPropagation(), p(-1)
                                    }
                                }), (0, r.jsx)(c, {
                                    side: "right",
                                    onClick: e => {
                                        e.stopPropagation(), p(1)
                                    }
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "shrink-0 px-5 pb-[max(1.1rem,env(safe-area-inset-bottom))] pt-3 text-center md:px-8",
                            children: (0, r.jsx)("button", {
                                type: "button",
                                onClick: x,
                                className: "inline-flex min-h-12 items-center justify-center rounded-full bg-[#e0a456] px-8 font-grotesk text-[13px] font-semibold uppercase tracking-[0.14em] text-[#17140f] transition-colors hover:bg-[#d0934a]",
                                children: "Book a Site Visit"
                            })
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    side: t,
                    onClick: n
                } = e;
                return (0, r.jsx)("button", {
                    type: "button",
                    onClick: n,
                    "aria-label": "left" === t ? "Previous image" : "Next image",
                    className: "absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 md:flex ".concat("left" === t ? "left-4" : "right-4"),
                    children: (0, r.jsx)("svg", {
                        width: "19",
                        height: "19",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": !0,
                        children: (0, r.jsx)("path", {
                            d: "left" === t ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"
                        })
                    })
                })
            }
        },
        9301: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vj: () => s,
                pe: () => r,
                vI: () => i
            });
            let r = [{
                    slug: "paris-city",
                    id: "1",
                    name: "Paris City",
                    locality: "Ishwar Nagar, Nandanvan",
                    category: "residential",
                    soldOut: !1,
                    standaloneLP: !0,
                    card: "/paris-city/card.webp"
                }, {
                    slug: "embassy-2",
                    id: "2",
                    name: "Kukreja Embassy II",
                    locality: "Byramji Town",
                    category: "residential",
                    soldOut: !1,
                    standaloneLP: !0,
                    card: "/embasy-2/main.webp"
                }, {
                    slug: "west-19",
                    id: "3",
                    name: "West 19",
                    locality: "Shankar Nagar",
                    category: "commercial",
                    soldOut: !1,
                    card: "/west-19/main.jpg"
                }, {
                    slug: "business-park",
                    id: "4",
                    name: "Kukreja Business Park",
                    locality: "MIHAN",
                    category: "commercial",
                    soldOut: !1,
                    card: "/kbp/kbp-2.webp"
                }, {
                    slug: "anandam-world-city",
                    id: "5",
                    name: "Kukreja Anandam World City",
                    locality: "Ganeshpeth",
                    category: "residential",
                    soldOut: !1,
                    card: "/dda/main.webp"
                }, {
                    slug: "kukreja-embassy",
                    id: "6",
                    name: "Kukreja Embassy",
                    locality: "Byramji Town",
                    category: "residential",
                    soldOut: !0,
                    card: "/embasy/cover.webp"
                }, {
                    slug: "infinity-east",
                    id: "7",
                    name: "Kukreja Infinity East",
                    locality: "South Wardhaman Nagar",
                    category: "residential",
                    soldOut: !1,
                    card: "/infinity-east/real-2.webp"
                }, {
                    slug: "the-one",
                    id: "8",
                    name: "The One",
                    locality: "Civil Lines",
                    category: "residential",
                    soldOut: !1,
                    card: "/the-one/main.webp"
                }, {
                    slug: "kukreja-infinity",
                    id: "9",
                    name: "Kukreja Infinity",
                    locality: "Civil Lines",
                    category: "residential",
                    soldOut: !0,
                    card: "/infinity/real.webp"
                }],
                a = e => r.find(t => t.id === e),
                s = e => r.find(t => t.slug === e),
                i = e => {
                    let t = a(e);
                    return t ? "/".concat(t.slug) : "/projects"
                }
        },
        9324: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [2533, 8838, 7970, 8173, 1836, 7531, 522, 8441, 1517, 7358], () => t(1668)), _N_E = e.O()
    }
]);