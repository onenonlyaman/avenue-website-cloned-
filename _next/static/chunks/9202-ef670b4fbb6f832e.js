"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9202], {
        9573: (e, t, n) => {
            n.d(t, {
                default: () => o
            });
            var r = n(5155),
                a = n(2115),
                l = n(5782),
                s = n(1478),
                i = n(5415);

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, a.useEffect)(() => {
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = new l.A({
                        lerp: .085,
                        smoothWheel: !0,
                        wheelMultiplier: 1,
                        touchMultiplier: 1.6
                    });
                    e.on("scroll", i.u.update);
                    let t = t => e.raf(1e3 * t);
                    return s.os.ticker.add(t), s.os.ticker.lagSmoothing(0), window.__lenis = e, () => {
                        s.os.ticker.remove(t), e.destroy(), delete window.__lenis
                    }
                }, []), (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }
            s.os.registerPlugin(i.u)
        },
        6771: (e, t, n) => {
            n.d(t, {
                $: () => i,
                LightboxProvider: () => o
            });
            var r = n(5155),
                a = n(2115),
                l = n(5565);
            let s = (0, a.createContext)(null);

            function i() {
                var e;
                return null !== (e = (0, a.useContext)(s)) && void 0 !== e ? e : {
                    open: () => {}
                }
            }

            function o(e) {
                var t;
                let {
                    children: n
                } = e, [i, o] = (0, a.useState)(null), [d, u] = (0, a.useState)(0), m = (0, a.useRef)(null), h = (0, a.useRef)(null), p = (0, a.useCallback)((e, t) => {
                    e.length && (o(e), u(Math.max(0, Math.min(e.length - 1, t))))
                }, []), f = (0, a.useCallback)(() => o(null), []), x = (0, a.useCallback)(e => u(t => i ? (t + e + i.length) % i.length : t), [i]);
                (0, a.useEffect)(() => {
                    var e;
                    if (!i) return;
                    let t = e => {
                        "Escape" === e.key && f(), "ArrowRight" === e.key && x(1), "ArrowLeft" === e.key && x(-1)
                    };
                    window.addEventListener("keydown", t);
                    let n = document.body.style.overflow;
                    document.body.style.overflow = "hidden";
                    let r = window.__lenis;
                    return null == r || r.stop(), null === (e = h.current) || void 0 === e || e.focus(), () => {
                        window.removeEventListener("keydown", t), document.body.style.overflow = n, null == r || r.start()
                    }
                }, [i, f, x]);
                let g = (0, a.useCallback)(() => {
                        f(), setTimeout(() => {
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
                    }, [f]),
                    b = (0, a.useMemo)(() => ({
                        open: p
                    }), [p]),
                    v = null == i ? void 0 : i[d];
                return (0, r.jsxs)(s.Provider, {
                    value: b,
                    children: [n, i && v && (0, r.jsxs)("div", {
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
                            Math.abs(t) > 45 && x(t < 0 ? 1 : -1), m.current = null
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "flex shrink-0 items-center justify-between px-5 py-4 md:px-8",
                            children: [(0, r.jsxs)("span", {
                                className: "font-grotesk text-[11px] uppercase tracking-[0.24em] text-white/55",
                                children: [d + 1, " / ", i.length]
                            }), (0, r.jsx)("button", {
                                ref: h,
                                type: "button",
                                onClick: f,
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
                            onClick: f,
                            children: [(0, r.jsx)("div", {
                                className: "relative h-full w-full max-w-[1400px]",
                                onClick: e => e.stopPropagation(),
                                children: (0, r.jsx)(l.default, {
                                    src: v.src,
                                    alt: null !== (t = v.alt) && void 0 !== t ? t : "",
                                    fill: !0,
                                    sizes: "100vw",
                                    className: "object-contain",
                                    priority: !0
                                }, v.src)
                            }), i.length > 1 && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(c, {
                                    side: "left",
                                    onClick: e => {
                                        e.stopPropagation(), x(-1)
                                    }
                                }), (0, r.jsx)(c, {
                                    side: "right",
                                    onClick: e => {
                                        e.stopPropagation(), x(1)
                                    }
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "shrink-0 px-5 pb-[max(1.1rem,env(safe-area-inset-bottom))] pt-3 text-center md:px-8",
                            children: (0, r.jsx)("button", {
                                type: "button",
                                onClick: g,
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
        5251: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n(5155),
                a = n(2115);

            function l(e) {
                let {
                    children: t,
                    paragraphs: n,
                    pClassName: l = "",
                    gapClassName: s = "mt-6",
                    className: i = "",
                    collapsedLines: o = 5,
                    fadeFrom: c = "from-white",
                    accentClassName: d = "text-[#b06a35]"
                } = e, u = (0, a.useRef)(null), [m, h] = (0, a.useState)(!1), [p, f] = (0, a.useState)(!1), [x, g] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    let e;
                    let t = u.current;
                    if (!t) return;
                    let n = () => {
                        let e = t.querySelector("p"),
                            n = getComputedStyle(null != e ? e : t),
                            r = parseFloat(n.lineHeight) || 1.6 * parseFloat(n.fontSize) || 26,
                            a = Math.round(r * o),
                            l = t.style.maxHeight;
                        t.style.maxHeight = "none";
                        let s = t.scrollHeight;
                        t.style.maxHeight = l, g(e => e === a ? e : a), f(e => e === s > a + r ? e : s > a + r)
                    };
                    n();
                    let r = () => {
                        clearTimeout(e), e = setTimeout(n, 150)
                    };
                    return window.addEventListener("resize", r), () => {
                        window.removeEventListener("resize", r), clearTimeout(e)
                    }
                }, []);
                let b = p && !m;
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [(0, r.jsxs)("div", {
                        ref: u,
                        className: "relative ".concat(b ? "overflow-hidden" : ""),
                        style: {
                            maxHeight: b ? "".concat(x, "px") : void 0
                        },
                        children: [null != t ? t : (null != n ? n : []).map((e, t) => (0, r.jsx)("p", {
                            className: "".concat(t ? s : "", " ").concat(l),
                            children: e
                        }, t)), b && (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ".concat(c, " to-transparent")
                        })]
                    }), p && (0, r.jsxs)("button", {
                        type: "button",
                        onClick: () => h(e => !e),
                        "aria-expanded": m,
                        className: "group mt-4 inline-flex cursor-pointer items-center gap-1.5 font-grotesk text-[12px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 hover:opacity-80 ".concat(d),
                        children: [m ? "Read less" : "Read more", (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: "text-[14px] leading-none transition-transform duration-300 ".concat(m ? "rotate-180" : "group-hover:translate-y-0.5"),
                            children: "↓"
                        })]
                    })]
                })
            }
        },
        1663: (e, t, n) => {
            n.d(t, {
                default: () => o
            });
            var r = n(5155),
                a = n(5565),
                l = n(3126),
                s = n(3580),
                i = n(9301);

            function o(e) {
                let {
                    current: t,
                    heading: n = "Related Projects.",
                    intro: o,
                    only: c,
                    includeSoldOut: d = !1,
                    limit: u = 3
                } = e, m = i.pe.find(e => e.slug === t), h = c ? c.map(e => i.pe.find(t => t.slug === e)).filter(e => !!e) : (() => {
                    let e = i.pe.filter(e => e.slug !== t && (d || !e.soldOut)),
                        n = m ? e.filter(e => e.category === m.category) : [],
                        r = e.filter(e => !n.includes(e));
                    return [...n, ...r].slice(0, u)
                })();
                return h.length ? (0, r.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: [(0, r.jsx)(s.RevealText, {
                            text: n,
                            className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        }), o && (0, r.jsx)(s.Reveal, {
                            delay: .1,
                            children: (0, r.jsx)("p", {
                                className: "mt-6 max-w-2xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                children: o
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: h.map((e, t) => (0, r.jsx)(s.Reveal, {
                                delay: Math.min(.07 * t, .3),
                                children: (0, r.jsxs)(l.Link, {
                                    href: "/".concat(e.slug),
                                    className: "group block",
                                    children: [(0, r.jsxs)("div", {
                                        className: "relative aspect-[16/9] overflow-hidden bg-white",
                                        children: [(0, r.jsx)(a.default, {
                                            src: e.card,
                                            alt: e.name,
                                            fill: !0,
                                            sizes: "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw",
                                            className: "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                                        }), e.soldOut && (0, r.jsx)("span", {
                                            className: "absolute left-4 top-4 bg-[#14110c]/85 px-3 py-1.5 font-grotesk text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm",
                                            children: "Sold out"
                                        })]
                                    }), (0, r.jsx)("h3", {
                                        className: "mt-5 font-grotesk text-[20px] font-semibold uppercase tracking-tight transition-colors duration-300 group-hover:text-[#b06a35]",
                                        children: e.name
                                    }), (0, r.jsx)("p", {
                                        className: "mt-1.5 font-grotesk text-[10.5px] uppercase tracking-[0.2em] text-[#17140f]/45",
                                        children: e.locality
                                    })]
                                })
                            }, e.slug))
                        }), (0, r.jsx)(s.Reveal, {
                            delay: .24,
                            children: (0, r.jsxs)(l.Link, {
                                href: "/projects",
                                className: "group mt-12 inline-flex min-h-11 items-center gap-3 border border-[#17140f]/25 px-7 py-3.5 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#17140f] transition-colors duration-300 hover:border-[#b06a35] hover:text-[#b06a35]",
                                children: ["All projects", (0, r.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→"
                                })]
                            })
                        })]
                    })
                }) : null
            }
        },
        1481: (e, t, n) => {
            n.d(t, {
                E7: () => o,
                GH: () => i,
                Tm: () => l,
                nF: () => s,
                nJ: () => a,
                y7: () => r
            });
            let r = "+91 78880 12200",
                a = "tel:+917888012200",
                l = "info@kinfra.in",
                s = "mailto:info@kinfra.in",
                i = "Kukreja House, Museum Road, Civil Lines, Nagpur 440026";

            function o(e) {
                return "https://wa.me/".concat("917888019900", "?text=").concat(encodeURIComponent(e ? "Hi, I'm interested in ".concat(e, ". Please share the details.") : "Hi, I'd like to know more about Kukreja Infrastructures projects."))
            }
        },
        2304: (e, t, n) => {
            n.d(t, {
                default: () => c
            });
            var r = n(5155),
                a = n(2115),
                l = n(5565),
                s = n(1478);
            let i = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                o = {
                    collapsed: "polygon(0% 46%, 100% 42%, 100% 54%, 0% 58%)",
                    initial: "polygon(0% 8%, 100% 0%, 100% 92%, 0% 100%)",
                    hover: "polygon(0% 0%, 100% 8%, 100% 100%, 0% 92%)"
                };

            function c(e) {
                let {
                    src: t,
                    alt: n,
                    aspect: c = "aspect-[16/9]",
                    objectPosition: d = "50% 38%",
                    priority: u = !1,
                    sizes: m = "(max-width:1024px) 100vw, 55vw"
                } = e, h = (0, a.useRef)(null), p = (0, a.useRef)(null), f = (0, a.useRef)(!1);
                return (0, a.useEffect)(() => {
                    let e = h.current;
                    if (!e) return;
                    if (i()) {
                        e.style.clipPath = o.initial;
                        return
                    }
                    let t = new IntersectionObserver(n => {
                        let [r] = n;
                        r.isIntersecting && !f.current && (f.current = !0, s.os.fromTo(e, {
                            clipPath: o.collapsed
                        }, {
                            clipPath: o.initial,
                            duration: 1.9,
                            ease: "expo.inOut"
                        }), s.os.fromTo(p.current, {
                            scale: 1.22
                        }, {
                            scale: 1.12,
                            duration: 2.2,
                            ease: "power2.out"
                        }), t.disconnect())
                    }, {
                        threshold: .2
                    });
                    return t.observe(e), () => t.disconnect()
                }, []), (0, r.jsxs)("div", {
                    ref: h,
                    onMouseEnter: () => {
                        i() || (s.os.killTweensOf(h.current), s.os.to(h.current, {
                            clipPath: o.hover,
                            duration: 1.3,
                            ease: "power2.inOut"
                        }))
                    },
                    onMouseLeave: () => {
                        i() || (s.os.killTweensOf(h.current), s.os.to(h.current, {
                            clipPath: o.initial,
                            duration: 1.3,
                            ease: "power2.inOut"
                        }), s.os.to(p.current, {
                            x: 0,
                            y: 0,
                            duration: 1.2,
                            ease: "power2.out"
                        }))
                    },
                    onMouseMove: e => {
                        if (i()) return;
                        let t = h.current;
                        if (!t) return;
                        let n = t.getBoundingClientRect(),
                            r = (e.clientX - n.left) / n.width - .5,
                            a = (e.clientY - n.top) / n.height - .5;
                        s.os.to(p.current, {
                            x: -(18 * r),
                            y: -(18 * a),
                            duration: 1,
                            ease: "power2.out"
                        })
                    },
                    className: "relative ".concat(c, " w-full overflow-hidden bg-[#141210]"),
                    style: {
                        clipPath: o.initial
                    },
                    children: [(0, r.jsx)("div", {
                        ref: p,
                        className: "absolute inset-0 will-change-transform",
                        style: {
                            transform: "scale(1.12)"
                        },
                        children: (0, r.jsx)(l.default, {
                            src: t,
                            alt: n,
                            fill: !0,
                            sizes: m,
                            priority: u,
                            loading: u ? void 0 : "eager",
                            className: "object-cover",
                            style: {
                                objectPosition: d
                            }
                        })
                    }), (0, r.jsx)("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
                    })]
                })
            }
        },
        3580: (e, t, n) => {
            n.d(t, {
                Reveal: () => i,
                RevealText: () => o
            });
            var r = n(5155),
                a = n(2115);
            let l = "cubic-bezier(0.16, 1, 0.3, 1)";

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .18,
                    t = (0, a.useRef)(null),
                    [n, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        r(!0);
                        return
                    }
                    let a = new IntersectionObserver(e => {
                        for (let t of e) t.isIntersecting && (r(!0), a.disconnect())
                    }, {
                        threshold: e
                    });
                    return a.observe(n), () => a.disconnect()
                }, [e]), {
                    ref: t,
                    shown: n
                }
            }

            function i(e) {
                let {
                    children: t,
                    className: n = "",
                    y: a = 48,
                    delay: i = 0,
                    threshold: o = .18
                } = e, {
                    ref: c,
                    shown: d
                } = s(o);
                return (0, r.jsx)("div", {
                    ref: c,
                    className: n,
                    style: {
                        opacity: d ? 1 : 0,
                        transform: d ? "translateY(0) scale(1)" : "translateY(".concat(a, "px) scale(0.985)"),
                        filter: d ? "blur(0px)" : "blur(4px)",
                        transition: "opacity 1.1s ".concat(l, " ").concat(i, "s, transform 1.3s ").concat(l, " ").concat(i, "s, filter 1.1s ").concat(l, " ").concat(i, "s"),
                        willChange: "opacity, transform, filter"
                    },
                    children: t
                })
            }

            function o(e) {
                let {
                    text: t,
                    className: n = "",
                    wordClassName: a = "",
                    emphasisClassName: i = "font-semibold",
                    stagger: o = .07,
                    threshold: c = .25,
                    as: d = "h2"
                } = e, {
                    ref: u,
                    shown: m
                } = s(c), h = t.split("\n"), p = 0;
                return (0, r.jsx)(d, {
                    ref: u,
                    className: n,
                    children: h.map((e, t) => {
                        let n = function(e) {
                                let t = [];
                                return e.split(/(\*[^*]+\*)/g).forEach(e => {
                                    if (!e) return;
                                    let n = e.length > 2 && e.startsWith("*") && e.endsWith("*");
                                    (n ? e.slice(1, -1) : e).split(" ").forEach(e => {
                                        "" !== e && t.push({
                                            word: e,
                                            bold: n
                                        })
                                    })
                                }), t
                            }(e),
                            s = [];
                        return n.forEach((e, t) => {
                            let {
                                word: c,
                                bold: d
                            } = e, u = p++;
                            s.push((0, r.jsx)("span", {
                                className: "inline-block overflow-hidden align-bottom",
                                children: (0, r.jsx)("span", {
                                    className: "inline-block ".concat(d ? i : "", " ").concat(a),
                                    style: {
                                        transform: m ? "translateY(0)" : "translateY(115%)",
                                        transition: "transform 0.95s ".concat(l, " ").concat(u * o, "s"),
                                        willChange: "transform"
                                    },
                                    children: c
                                })
                            }, "w".concat(t))), t < n.length - 1 && s.push(" ")
                        }), (0, r.jsx)("span", {
                            className: "block overflow-hidden pb-[0.12em]",
                            children: s
                        }, t)
                    })
                })
            }
        },
        9301: (e, t, n) => {
            n.d(t, {
                Vj: () => l,
                pe: () => r,
                vI: () => s
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
                l = e => r.find(t => t.slug === e),
                s = e => {
                    let t = a(e);
                    return t ? "/".concat(t.slug) : "/projects"
                }
        }
    }
]);