(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287], {
        8963: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 9573)), Promise.resolve().then(s.bind(s, 8310)), Promise.resolve().then(s.bind(s, 2304)), Promise.resolve().then(s.bind(s, 5827)), Promise.resolve().then(s.bind(s, 1955)), Promise.resolve().then(s.bind(s, 7894)), Promise.resolve().then(s.bind(s, 1640)), Promise.resolve().then(s.bind(s, 3580)), Promise.resolve().then(s.bind(s, 1855)), Promise.resolve().then(s.bind(s, 9218)), Promise.resolve().then(s.bind(s, 3126))
        },
        9573: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => o
            });
            var r = s(5155),
                l = s(2115),
                a = s(5782),
                n = s(1478),
                i = s(5415);

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, l.useEffect)(() => {
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = new a.A({
                        lerp: .085,
                        smoothWheel: !0,
                        wheelMultiplier: 1,
                        touchMultiplier: 1.6
                    });
                    e.on("scroll", i.u.update);
                    let t = t => e.raf(1e3 * t);
                    return n.os.ticker.add(t), n.os.ticker.lagSmoothing(0), window.__lenis = e, () => {
                        n.os.ticker.remove(t), e.destroy(), delete window.__lenis
                    }
                }, []), (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }
            n.os.registerPlugin(i.u)
        },
        1955: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var r = s(2115);

            function l() {
                return (0, r.useEffect)(() => {
                    let e = () => {
                            let e = window.location.hash.slice(1);
                            if (!e) return;
                            let t = document.getElementById(e);
                            t && t.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        },
                        t = window.setTimeout(e, 250);
                    return window.addEventListener("load", e), () => {
                        window.clearTimeout(t), window.removeEventListener("load", e)
                    }
                }, []), null
            }
        },
        7894: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => c
            });
            var r = s(5155),
                l = s(2115),
                a = s(5565),
                n = s(1478),
                i = s(5415),
                o = s(3580);

            function c(e) {
                let {
                    items: t,
                    heading: s,
                    frames: c
                } = e, d = (0, l.useRef)(null), m = (0, l.useRef)([]), f = (0, l.useRef)([]), u = (0, l.useRef)([]), h = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = d.current;
                    if (!e) return;
                    let s = t.length,
                        r = c.length,
                        l = m.current.filter(Boolean),
                        a = f.current.filter(Boolean),
                        o = u.current.filter(Boolean),
                        x = e => {
                            let t = e * (s - 1);
                            l.forEach((e, s) => {
                                let r = Math.max(0, 1 - Math.abs(t - s));
                                e.style.opacity = String(r), e.style.transform = "translate3d(0, ".concat((-((t - s) * 46)).toFixed(1), "px, 0)"), e.style.filter = "blur(".concat(((1 - r) * 5).toFixed(2), "px)")
                            });
                            let n = e * (r - 1);
                            a.forEach((t, s) => {
                                let r = Math.abs(n - s);
                                t.style.opacity = String(Math.max(0, 1 - r)), t.style.transform = "scale(".concat((1.06 + .08 * e).toFixed(4), ")")
                            });
                            let i = Math.round(t);
                            o.forEach((e, t) => {
                                let s = t === i;
                                e.style.backgroundColor = s ? "#e0a456" : "rgba(250,249,247,0.28)", e.style.transform = "scale(".concat(s ? 1.75 : 1, ")")
                            }), h.current && (h.current.style.transform = "scaleX(".concat(e.toFixed(4), ")"))
                        },
                        p = () => {
                            l.forEach(e => {
                                e.style.opacity = "1", e.style.transform = "none", e.style.filter = "none"
                            }), a.forEach((e, t) => {
                                e.style.opacity = 0 === t ? "1" : "0", e.style.transform = "scale(1.06)"
                            }), o.forEach(e => {
                                e.style.backgroundColor = "rgba(250,249,247,0.28)", e.style.transform = "scale(1)"
                            })
                        },
                        v = n.os.matchMedia();
                    return v.add("(min-width: 1024px)", () => {
                        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                            l.forEach(e => e.style.position = "relative"), p();
                            return
                        }
                        x(0);
                        let s = i.u.create({
                                trigger: e,
                                start: "top top",
                                end: () => "+=".concat(window.innerHeight * (.75 * t.length)),
                                scrub: .65,
                                pin: !0,
                                pinSpacing: !0,
                                anticipatePin: 1,
                                invalidateOnRefresh: !0,
                                onUpdate: e => x(e.progress)
                            }),
                            r = setTimeout(() => i.u.refresh(), 500);
                        return () => {
                            clearTimeout(r), s.kill()
                        }
                    }), v.add("(max-width: 1023px)", () => {
                        p()
                    }), () => v.revert()
                }, [t, c]), (0, r.jsxs)("section", {
                    ref: d,
                    className: "relative overflow-hidden bg-[#14110c] px-6 py-20 md:px-12 lg:h-screen lg:py-0 lg:px-16",
                    children: [(0, r.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [c.map((e, t) => (0, r.jsx)("div", {
                            ref: e => {
                                f.current[t] = e
                            },
                            className: "absolute inset-0 will-change-[opacity,transform]",
                            style: {
                                opacity: 0 === t ? 1 : 0,
                                transform: "scale(1.06)"
                            },
                            children: (0, r.jsx)(a.default, {
                                src: e.src,
                                alt: e.alt,
                                fill: !0,
                                sizes: "100vw",
                                loading: "eager",
                                className: "object-cover"
                            })
                        }, e.src)), (0, r.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-[#0d0b08]/90 via-[#0d0b08]/60 to-[#0d0b08]/35"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-[#0d0b08]/85 via-transparent to-[#0d0b08]/55"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "relative mx-auto flex max-w-7xl flex-col justify-center lg:h-full lg:py-24",
                        children: [(0, r.jsx)(o.RevealText, {
                            text: s,
                            className: "font-grotesk text-[clamp(1.36rem,2.55vw,2.21rem)] font-normal uppercase leading-none tracking-tight text-[#faf9f7]"
                        }), (0, r.jsx)("div", {
                            className: "relative mt-10 space-y-12 md:mt-14 lg:mt-16 lg:h-[46vh] lg:min-h-[300px] lg:space-y-0",
                            children: t.map((e, t) => (0, r.jsxs)("div", {
                                ref: e => {
                                    m.current[t] = e
                                },
                                className: "relative flex flex-col justify-center will-change-[opacity,transform] lg:absolute lg:inset-0",
                                style: {
                                    opacity: 0 === t ? 1 : 0
                                },
                                children: [(0, r.jsx)("div", {
                                    className: "font-grotesk text-[clamp(4.5rem,17vw,15rem)] font-bold leading-[0.82] tracking-[-0.03em] text-[#faf9f7]",
                                    children: e.y
                                }), (0, r.jsx)("p", {
                                    className: "mt-8 max-w-2xl font-hanken text-[clamp(1.05rem,1.7vw,1.5rem)] font-light leading-relaxed text-white/75",
                                    children: e.c
                                })]
                            }, e.y))
                        }), (0, r.jsxs)("div", {
                            className: "mt-auto hidden lg:block",
                            children: [(0, r.jsx)("div", {
                                className: "relative h-px w-full bg-white/15",
                                children: (0, r.jsx)("span", {
                                    ref: h,
                                    className: "absolute inset-y-0 left-0 block w-full origin-left bg-[#e0a456]",
                                    style: {
                                        transform: "scaleX(0)"
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "mt-5 flex items-center justify-between",
                                children: t.map((e, t) => (0, r.jsxs)("div", {
                                    className: "flex flex-col items-center gap-3",
                                    children: [(0, r.jsx)("span", {
                                        ref: e => {
                                            u.current[t] = e
                                        },
                                        className: "block h-1.5 w-1.5 rounded-full",
                                        style: {
                                            backgroundColor: "rgba(250,249,247,0.28)"
                                        }
                                    }), (0, r.jsx)("span", {
                                        className: "font-grotesk text-[10px] uppercase tracking-[0.18em] text-white/45",
                                        children: e.y
                                    })]
                                }, e.y))
                            })]
                        })]
                    })]
                })
            }
            n.os.registerPlugin(i.u)
        },
        3580: (e, t, s) => {
            "use strict";
            s.d(t, {
                Reveal: () => i,
                RevealText: () => o
            });
            var r = s(5155),
                l = s(2115);
            let a = "cubic-bezier(0.16, 1, 0.3, 1)";

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .18,
                    t = (0, l.useRef)(null),
                    [s, r] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let s = t.current;
                    if (!s) return;
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        r(!0);
                        return
                    }
                    let l = new IntersectionObserver(e => {
                        for (let t of e) t.isIntersecting && (r(!0), l.disconnect())
                    }, {
                        threshold: e
                    });
                    return l.observe(s), () => l.disconnect()
                }, [e]), {
                    ref: t,
                    shown: s
                }
            }

            function i(e) {
                let {
                    children: t,
                    className: s = "",
                    y: l = 48,
                    delay: i = 0,
                    threshold: o = .18
                } = e, {
                    ref: c,
                    shown: d
                } = n(o);
                return (0, r.jsx)("div", {
                    ref: c,
                    className: s,
                    style: {
                        opacity: d ? 1 : 0,
                        transform: d ? "translateY(0) scale(1)" : "translateY(".concat(l, "px) scale(0.985)"),
                        filter: d ? "blur(0px)" : "blur(4px)",
                        transition: "opacity 1.1s ".concat(a, " ").concat(i, "s, transform 1.3s ").concat(a, " ").concat(i, "s, filter 1.1s ").concat(a, " ").concat(i, "s"),
                        willChange: "opacity, transform, filter"
                    },
                    children: t
                })
            }

            function o(e) {
                let {
                    text: t,
                    className: s = "",
                    wordClassName: l = "",
                    emphasisClassName: i = "font-semibold",
                    stagger: o = .07,
                    threshold: c = .25,
                    as: d = "h2"
                } = e, {
                    ref: m,
                    shown: f
                } = n(c), u = t.split("\n"), h = 0;
                return (0, r.jsx)(d, {
                    ref: m,
                    className: s,
                    children: u.map((e, t) => {
                        let s = function(e) {
                                let t = [];
                                return e.split(/(\*[^*]+\*)/g).forEach(e => {
                                    if (!e) return;
                                    let s = e.length > 2 && e.startsWith("*") && e.endsWith("*");
                                    (s ? e.slice(1, -1) : e).split(" ").forEach(e => {
                                        "" !== e && t.push({
                                            word: e,
                                            bold: s
                                        })
                                    })
                                }), t
                            }(e),
                            n = [];
                        return s.forEach((e, t) => {
                            let {
                                word: c,
                                bold: d
                            } = e, m = h++;
                            n.push((0, r.jsx)("span", {
                                className: "inline-block overflow-hidden align-bottom",
                                children: (0, r.jsx)("span", {
                                    className: "inline-block ".concat(d ? i : "", " ").concat(l),
                                    style: {
                                        transform: f ? "translateY(0)" : "translateY(115%)",
                                        transition: "transform 0.95s ".concat(a, " ").concat(m * o, "s"),
                                        willChange: "transform"
                                    },
                                    children: c
                                })
                            }, "w".concat(t))), t < s.length - 1 && n.push(" ")
                        }), (0, r.jsx)("span", {
                            className: "block overflow-hidden pb-[0.12em]",
                            children: n
                        }, t)
                    })
                })
            }
        },
        9218: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => i
            });
            var r = s(5155),
                l = s(2115),
                a = s(5565),
                n = s(3580);

            function i(e) {
                let {
                    eyebrow: t,
                    headline: s,
                    lead: i,
                    img: o,
                    video: c,
                    poster: d,
                    alt: m
                } = e, f = (0, l.useRef)(null), u = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = f.current,
                        t = u.current;
                    if (!e || !t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let s = 0,
                        r = () => {
                            s = 0;
                            let r = e.getBoundingClientRect(),
                                l = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
                            t.style.transform = "translate3d(0, ".concat((14 * l).toFixed(2), "%, 0) scale(").concat((1.08 + .06 * l).toFixed(4), ")")
                        },
                        l = () => {
                            s || (s = requestAnimationFrame(r))
                        };
                    return r(), window.addEventListener("scroll", l, {
                        passive: !0
                    }), window.addEventListener("resize", l), () => {
                        window.removeEventListener("scroll", l), window.removeEventListener("resize", l), cancelAnimationFrame(s)
                    }
                }, []), (0, r.jsxs)("section", {
                    ref: f,
                    className: "relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-[#14110c]",
                    children: [(0, r.jsx)("div", {
                        ref: u,
                        className: "absolute inset-0 will-change-transform",
                        style: {
                            transform: "scale(1.08)"
                        },
                        children: c ? (0, r.jsxs)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: d,
                            "aria-label": m,
                            className: "h-full w-full object-cover",
                            children: [c.webm && (0, r.jsx)("source", {
                                src: c.webm,
                                type: "video/webm"
                            }), (0, r.jsx)("source", {
                                src: c.mp4,
                                type: "video/mp4"
                            })]
                        }) : o && (0, r.jsx)(a.default, {
                            src: o,
                            alt: m,
                            fill: !0,
                            priority: !0,
                            sizes: "100vw",
                            className: "object-cover"
                        })
                    }), (0, r.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0b08]/85 via-[#0d0b08]/35 to-[#0d0b08]/45"
                    }), (0, r.jsx)("div", {
                        className: "relative flex h-full flex-col justify-end px-6 pb-[13vh] md:px-12 lg:px-16",
                        children: (0, r.jsxs)("div", {
                            className: "mx-auto w-full max-w-7xl",
                            children: [(0, r.jsx)(n.Reveal, {
                                children: (0, r.jsx)("p", {
                                    className: "font-grotesk text-[11px] uppercase tracking-[0.34em] text-[#e0a456]",
                                    children: t
                                })
                            }), (0, r.jsx)(n.RevealText, {
                                as: "h1",
                                text: s,
                                className: "mt-6 max-w-4xl font-grotesk text-[clamp(2.38rem,6.29vw,5.44rem)] font-normal uppercase leading-[0.92] tracking-tight text-white"
                            }), (0, r.jsx)(n.Reveal, {
                                delay: .14,
                                children: (0, r.jsx)("p", {
                                    className: "mt-8 max-w-2xl font-hanken text-[clamp(1.05rem,1.45vw,1.3rem)] font-light leading-relaxed text-white/70",
                                    children: i
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "pointer-events-none absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 overflow-hidden bg-white/15",
                        children: (0, r.jsx)("span", {
                            className: "block h-1/2 w-full animate-[storyCue_2.4s_ease-in-out_infinite] bg-[#e0a456]"
                        })
                    }), (0, r.jsx)("style", {
                        children: "@keyframes storyCue{0%{transform:translateY(-100%)}60%,100%{transform:translateY(200%)}}"
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4506, 5592, 7970, 8173, 4881, 1478, 5415, 5542, 6331, 8441, 1517, 7358], () => t(8963)), _N_E = e.O()
    }
]);