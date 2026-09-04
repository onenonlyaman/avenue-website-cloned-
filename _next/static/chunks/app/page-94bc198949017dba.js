(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        5383: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 9573)), Promise.resolve().then(r.bind(r, 9890)), Promise.resolve().then(r.bind(r, 8310)), Promise.resolve().then(r.bind(r, 554)), Promise.resolve().then(r.bind(r, 3430)), Promise.resolve().then(r.bind(r, 8475)), Promise.resolve().then(r.bind(r, 5827)), Promise.resolve().then(r.bind(r, 4528)), Promise.resolve().then(r.bind(r, 1640)), Promise.resolve().then(r.bind(r, 8193)), Promise.resolve().then(r.bind(r, 2426)), Promise.resolve().then(r.bind(r, 1963)), Promise.resolve().then(r.bind(r, 8415)), Promise.resolve().then(r.bind(r, 1855)), Promise.resolve().then(r.bind(r, 3611))
        },
        8991: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var a = r(5155),
                s = r(2115),
                n = r(522);
            let i = {
                    "paris-city": "Kukreja-Paris-City-Brochure.pdf",
                    "embassy-2": "Kukreja-Embassy-II-Brochure.pdf",
                    "the-one": "Kukreja-The-One-Brochure.pdf",
                    "business-park": "Kukreja-Business-Park-Brochure.pdf",
                    "infinity-east": "Kukreja-Infinity-East-Brochure.pdf",
                    "kukreja-infinity": "Kukreja-Infinity-Brochure.pdf",
                    "west-19": "Kukreja-West-19-Brochure.pdf"
                },
                l = "kukreja:lead";
            var o = r(9301);

            function c(e) {
                var t, r;
                let {
                    slug: c,
                    propertyTitle: d,
                    className: u,
                    label: m = "Download brochure"
                } = e, [f, p] = (0, s.useState)(!1), [h, x] = (0, s.useState)(!1);
                if ((0, s.useEffect)(() => {
                        try {
                            "1" === window.localStorage.getItem(l) && p(!0)
                        } catch (e) {}
                    }, []), (0, s.useEffect)(() => {
                        if (!h) return;
                        let e = document.body.style.overflow;
                        document.body.style.overflow = "hidden";
                        let t = e => "Escape" === e.key && x(!1);
                        return window.addEventListener("keydown", t), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t)
                        }
                    }, [h]), !Object.prototype.hasOwnProperty.call(i, c)) return null;
                let g = null !== (r = null != d ? d : null === (t = (0, o.Vj)(c)) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : "this project",
                    v = "/api/brochure/".concat(c);
                return (0, a.jsxs)(a.Fragment, {
                    children: [f ? (0, a.jsx)("a", {
                        href: v,
                        className: u,
                        children: m
                    }) : (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => x(!0),
                        className: u,
                        children: m
                    }), h && (0, a.jsx)("div", {
                        className: "fixed inset-0 z-[120] flex items-center justify-center bg-[#14110c]/80 p-4 backdrop-blur-sm",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "".concat(g, " brochure"),
                        onClick: e => e.target === e.currentTarget && x(!1),
                        children: (0, a.jsxs)("div", {
                            className: "relative max-h-[92vh] w-full max-w-md overflow-y-auto bg-[#17140f] px-7 py-9 md:px-9",
                            children: [(0, a.jsx)("button", {
                                type: "button",
                                onClick: () => x(!1),
                                "aria-label": "Close",
                                className: "absolute right-5 top-5 cursor-pointer text-2xl font-light leading-none text-white/50 transition-colors hover:text-white",
                                children: "\xd7"
                            }), (0, a.jsx)("h3", {
                                className: "font-grotesk text-[22px] font-semibold uppercase leading-tight tracking-tight text-white",
                                children: "Get the brochure"
                            }), (0, a.jsx)("div", {
                                className: "mt-7",
                                children: (0, a.jsx)(n.default, {
                                    propertyTitle: g,
                                    propertyId: c,
                                    enquiryType: "brochure",
                                    buttonLabel: "Get the brochure",
                                    onSuccess: () => {
                                        try {
                                            window.localStorage.setItem(l, "1")
                                        } catch (e) {}
                                        p(!0), x(!1), window.location.href = v
                                    }
                                })
                            })]
                        })
                    })]
                })
            }
        },
        9890: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var a = r(5155),
                s = r(2115),
                n = r(5565),
                i = r(1478),
                l = r(5415),
                o = r(3580),
                c = r(8415);
            i.os.registerPlugin(l.u);
            let d = "/about/pillars-front.webp",
                u = [{
                    n: "01",
                    title: "Unmatched quality",
                    copy: "Meticulous attention to detail and the finest materials, in homes built for generations.",
                    img: "/about/pillar-the-one.webp"
                }, {
                    n: "02",
                    title: "Unrivalled luxury",
                    copy: "Lifestyle-centric amenities that transform every space into a sanctuary of comfort.",
                    img: "/about/pillar-infinity-east.webp"
                }, {
                    n: "03",
                    title: "Enduring trust",
                    copy: "Ethical practices and transparent dealings that foster relationships for life.",
                    img: "/about/pillar-west-19.webp"
                }];

            function m() {
                let [e, t] = (0, s.useState)(!1), r = (0, s.useRef)(null), m = (0, s.useRef)(null), f = (0, s.useRef)(null), p = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let e = r.current;
                    if (!e) return;
                    let a = new IntersectionObserver(e => {
                        e.some(e => e.isIntersecting) && (a.disconnect(), t(!0))
                    }, {
                        rootMargin: "150% 0px"
                    });
                    return a.observe(e), () => a.disconnect()
                }, []), (0, s.useEffect)(() => {
                    let e = r.current,
                        t = m.current;
                    if (!e || !t) return;
                    let a = i.os.matchMedia();
                    return a.add("(min-width: 1024px)", () => {
                        let e = p.current,
                            r = i.os.utils.toArray(".pillar-card", t),
                            a = !1,
                            s = !1,
                            n = l.u.create({
                                trigger: t,
                                start: "top top",
                                end: () => "+=".concat(2 * window.innerHeight),
                                scrub: 1,
                                pin: !0,
                                pinSpacing: !0,
                                anticipatePin: 1,
                                invalidateOnRefresh: !0,
                                onUpdate: t => {
                                    let n = t.progress;
                                    i.os.set(e, {
                                        width: n <= .18 ? "".concat(i.os.utils.mapRange(0, .18, 68, 54, n), "%") : "54%"
                                    }), n >= .26 && !a ? (i.os.to(e, {
                                        gap: 24,
                                        duration: .5,
                                        ease: "power3.out"
                                    }), i.os.to(r, {
                                        borderRadius: 16,
                                        duration: .5,
                                        ease: "power3.out"
                                    }), a = !0) : n < .26 && a && (i.os.to(e, {
                                        gap: 0,
                                        duration: .5,
                                        ease: "power3.out"
                                    }), i.os.to(r[0], {
                                        borderRadius: "16px 0 0 16px",
                                        duration: .5,
                                        ease: "power3.out"
                                    }), i.os.to(r[1], {
                                        borderRadius: "0px",
                                        duration: .5,
                                        ease: "power3.out"
                                    }), i.os.to(r[2], {
                                        borderRadius: "0 16px 16px 0",
                                        duration: .5,
                                        ease: "power3.out"
                                    }), a = !1), n >= .46 && !s ? (i.os.to(r, {
                                        rotationY: 180,
                                        duration: .75,
                                        ease: "power3.inOut",
                                        stagger: .1
                                    }), s = !0) : n < .46 && s && (i.os.to(r, {
                                        rotationY: 0,
                                        duration: .75,
                                        ease: "power3.inOut",
                                        stagger: -.1
                                    }), s = !1)
                                }
                            }),
                            o = () => l.u.refresh(),
                            c = t.querySelector(".pillar-front img");
                        c && !c.complete && c.addEventListener("load", o, {
                            once: !0
                        });
                        let d = setTimeout(o, 600),
                            u = setTimeout(o, 1800);
                        return () => {
                            clearTimeout(d), clearTimeout(u), null == c || c.removeEventListener("load", o), n.kill()
                        }
                    }), () => a.revert()
                }, []), (0, a.jsxs)("section", {
                    ref: r,
                    className: "relative bg-[#ffffff] text-[#17140f]",
                    children: [(0, a.jsx)(c.default, {
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto max-w-4xl px-6 pb-6 pt-24 text-center md:pb-8 md:pt-28 lg:px-8",
                            children: [(0, a.jsx)(o.RevealText, {
                                text: "Building\nthe *icons*\nof tomorrow.",
                                className: "font-grotesk text-[clamp(2.04rem,5.1vw,4.25rem)] font-normal uppercase leading-[0.95] tracking-tight"
                            }), (0, a.jsx)(o.Reveal, {
                                delay: .12,
                                children: (0, a.jsx)("p", {
                                    className: "mx-auto mt-9 max-w-2xl font-hanken text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-[#57534d]",
                                    children: "Built on decades of enterprise and over fifteen years of focused real estate development, Kukreja Infrastructures has grown into one of Nagpur's most trusted names, delivering premium homes, workplaces and townships across the city."
                                })
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        ref: m,
                        className: "pillars-sticky hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[clamp(1.75rem,4vh,3rem)]",
                        children: [(0, a.jsxs)("div", {
                            ref: f,
                            className: "pillars-header",
                            children: [(0, a.jsx)("span", {
                                className: "mx-auto mb-6 block h-9 w-px bg-[#17140f]/25"
                            }), (0, a.jsx)("h3", {
                                className: "font-grotesk text-[clamp(1.7rem,2.89vw,2.89rem)] font-normal uppercase leading-none tracking-tight text-[#17140f]",
                                children: "Built on three pillars"
                            })]
                        }), (0, a.jsx)("div", {
                            ref: p,
                            className: "pillars-container",
                            children: u.map(t => (0, a.jsxs)("div", {
                                className: "pillar-card",
                                children: [(0, a.jsx)("div", {
                                    className: "pillar-face pillar-front",
                                    children: (0, a.jsx)("img", {
                                        src: e ? d : void 0,
                                        alt: "Kukreja Paris City, Nagpur",
                                        loading: "lazy",
                                        decoding: "async"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "pillar-face pillar-back",
                                    children: [(0, a.jsx)("img", {
                                        src: e ? t.img : void 0,
                                        alt: "",
                                        className: "pillar-back__img",
                                        loading: "lazy",
                                        decoding: "async"
                                    }), (0, a.jsx)("span", {
                                        className: "pillar-back__scrim"
                                    }), (0, a.jsxs)("div", {
                                        className: "pillar-back__body",
                                        children: [(0, a.jsx)("h4", {
                                            className: "font-grotesk text-[clamp(1.1rem,1.53vw,1.7rem)] font-normal uppercase leading-[1.05] tracking-tight",
                                            children: t.title
                                        }), (0, a.jsx)("p", {
                                            className: "min-h-[4.9em] max-w-[24ch] font-hanken text-[15px] leading-relaxed opacity-85",
                                            children: t.copy
                                        })]
                                    })]
                                })]
                            }, t.n))
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "px-6 py-14 lg:hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#eae8e4]",
                            children: (0, a.jsx)(n.default, {
                                src: d,
                                alt: "Kukreja Paris City, Nagpur",
                                fill: !0,
                                sizes: "100vw",
                                className: "object-cover"
                            })
                        }), (0, a.jsx)("h3", {
                            className: "mt-10 font-grotesk text-[clamp(1.53rem,5.95vw,2.04rem)] font-normal uppercase leading-none tracking-tight",
                            children: "Built on three pillars"
                        }), (0, a.jsx)("div", {
                            className: "mt-8 space-y-8",
                            children: u.map(e => (0, a.jsxs)("div", {
                                className: "border-t border-[#17140f]/12 pt-6",
                                children: [(0, a.jsx)("h4", {
                                    className: "font-grotesk text-[1.4rem] font-semibold uppercase leading-[1.05] tracking-tight",
                                    children: e.title
                                }), (0, a.jsx)("p", {
                                    className: "mt-2 max-w-md font-hanken text-[15px] leading-relaxed text-[#57534d]",
                                    children: e.copy
                                })]
                            }, e.n))
                        })]
                    })]
                })
            }
        },
        554: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => c
            });
            var a = r(5155),
                s = r(3580),
                n = r(2115),
                i = r(5565);

            function l() {
                return window.matchMedia("(prefers-reduced-motion: reduce)").matches
            }

            function o(e) {
                let {
                    src: t,
                    alt: r,
                    curtain: s = "#0a0a0a",
                    className: o = "",
                    sizes: c,
                    priority: d,
                    position: u = "50% 50%",
                    parallax: m = 60
                } = e, f = (0, n.useRef)(null), p = (0, n.useRef)(null), [h, x] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    let e = f.current;
                    if (!e) return;
                    if (l()) {
                        x(!0);
                        return
                    }
                    let t = new IntersectionObserver(e => {
                        let [r] = e;
                        r.isIntersecting && (x(!0), t.disconnect())
                    }, {
                        threshold: .18
                    });
                    return t.observe(e), () => t.disconnect()
                }, []), (0, n.useEffect)(() => {
                    if (l()) return;
                    let e = f.current,
                        t = p.current;
                    if (!e || !t) return;
                    let r = 0,
                        a = () => {
                            r = 0;
                            let a = e.getBoundingClientRect(),
                                s = window.innerHeight,
                                n = Math.min(1, Math.max(0, (s - a.top) / (s + a.height))),
                                i = (n - .5) * m;
                            t.style.transform = "translate3d(0, ".concat(i.toFixed(1), "px, 0) scale(").concat((1.06 + .1 * n).toFixed(3), ")")
                        },
                        s = () => {
                            r || (r = requestAnimationFrame(a))
                        };
                    return window.addEventListener("scroll", s, {
                        passive: !0
                    }), window.addEventListener("resize", s), a(), () => {
                        window.removeEventListener("scroll", s), window.removeEventListener("resize", s), cancelAnimationFrame(r)
                    }
                }, [m]), (0, a.jsxs)("div", {
                    ref: f,
                    className: "relative overflow-hidden ".concat(o),
                    children: [(0, a.jsx)("div", {
                        ref: p,
                        className: "absolute inset-[-8%] will-change-transform",
                        children: (0, a.jsx)(i.default, {
                            src: t,
                            alt: r,
                            fill: !0,
                            sizes: c,
                            priority: d,
                            className: "object-cover",
                            style: {
                                objectPosition: u
                            }
                        })
                    }), (0, a.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 origin-top",
                        style: {
                            background: s,
                            transform: h ? "scaleY(0)" : "scaleY(1)",
                            transition: "transform 1.05s ".concat("cubic-bezier(0.76, 0, 0.24, 1)")
                        }
                    })]
                })
            }

            function c() {
                return (0, a.jsxs)("section", {
                    className: "relative flex min-h-screen items-end overflow-hidden bg-black text-white",
                    children: [(0, a.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0, a.jsx)(o, {
                            src: "/seq/d/0175.webp",
                            alt: "A Kukreja balcony at golden hour",
                            curtain: "#000000",
                            sizes: "100vw",
                            parallax: 90,
                            className: "h-full w-full"
                        })
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent"
                    }), (0, a.jsxs)("div", {
                        className: "relative w-full px-6 pb-20 md:px-12 md:pb-24 lg:px-16",
                        children: [(0, a.jsx)(s.RevealText, {
                            text: "Some views are\nbest seen\n*in person.*",
                            className: "mt-6 max-w-4xl font-grotesk text-[clamp(1.87rem,5.1vw,4.67rem)] font-normal uppercase leading-[1.0] tracking-tight"
                        }), (0, a.jsxs)(s.Reveal, {
                            delay: .15,
                            className: "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
                            children: [(0, a.jsxs)("a", {
                                href: "/projects",
                                className: "group inline-flex items-center justify-center gap-3 rounded-full bg-white px-9 py-4 font-grotesk text-[12px] uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-[#e0a456]",
                                children: ["All projects", (0, a.jsx)("span", {
                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→"
                                })]
                            }), (0, a.jsx)("a", {
                                href: "tel:+917888012200",
                                className: "group inline-flex items-center justify-center gap-3 rounded-full border border-white/45 px-9 py-4 font-grotesk text-[12px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10",
                                children: "Book a visit"
                            })]
                        }), (0, a.jsx)(s.Reveal, {
                            delay: .25,
                            children: (0, a.jsxs)("div", {
                                className: "mt-12 flex flex-col gap-5 border-t border-white/15 pt-8 font-grotesk text-[12px] uppercase tracking-[0.18em] text-white/70 sm:flex-row sm:gap-12",
                                children: [(0, a.jsx)("a", {
                                    href: "tel:+917888012200",
                                    className: "transition-colors hover:text-white",
                                    children: "+91 78880 12200"
                                }), (0, a.jsx)("a", {
                                    href: "mailto:info@kinfra.in",
                                    className: "transition-colors hover:text-white",
                                    children: "info@kinfra.in"
                                }), (0, a.jsx)("span", {
                                    className: "text-white/50",
                                    children: "Museum Road, Civil Lines, Nagpur"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        3430: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => n
            });
            var a = r(5155),
                s = r(2115);

            function n() {
                let e = (0, s.useRef)(null),
                    t = (0, s.useRef)(null),
                    r = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let a = a => {
                        var s;
                        let n = null !== (s = a.detail) && void 0 !== s ? s : 0;
                        e.current && (e.current.style.transform = "scaleX(".concat(n, ")")), t.current && (t.current.style.opacity = String(Math.max(0, 1 - n / .08))), r.current && (r.current.style.opacity = n > .985 ? "0" : "1")
                    };
                    return window.addEventListener("descent:progress", a), () => window.removeEventListener("descent:progress", a)
                }, []), (0, a.jsxs)("div", {
                    ref: r,
                    className: "pointer-events-none fixed inset-x-0 bottom-0 z-[90] hidden transition-opacity duration-700 lg:block",
                    children: [(0, a.jsx)("div", {
                        className: "flex items-end justify-end px-6 pb-5 md:px-12 lg:px-16",
                        children: (0, a.jsx)("span", {
                            ref: t,
                            className: "hidden font-grotesk text-[10px] uppercase tracking-[0.34em] text-white/60 md:block",
                            children: "Scroll to explore"
                        })
                    }), (0, a.jsx)("div", {
                        className: "h-[2px] w-full bg-white/12",
                        children: (0, a.jsx)("span", {
                            ref: e,
                            className: "block h-full origin-left bg-white",
                            style: {
                                transform: "scaleX(0)"
                            }
                        })
                    })]
                })
            }
        },
        8475: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var a = r(5155),
                s = r(2115),
                n = r(5565),
                i = r(1478),
                l = r(5415),
                o = r(8818);
            i.os.registerPlugin(l.u);
            let c = e => "/seq/d/".concat(String(e + 1).padStart(4, "0"), ".webp?v=").concat(3),
                d = [{
                    from: .02,
                    to: .13,
                    line: "Some buildings\nare built."
                }, {
                    from: .24,
                    to: .37,
                    line: "Others are\nremembered."
                }, {
                    from: .46,
                    to: .6,
                    line: "Building the icons\nof tomorrow."
                }, {
                    from: .84,
                    to: .97,
                    line: "Welcome home."
                }];

            function u(e, t) {
                let r = function(e, t, r) {
                        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .045;
                        return e < t - a || e > r + a ? 0 : e < t ? (e - (t - a)) / a : e > r ? 1 - (e - r) / a : 1
                    }(e, t.from, t.to, .05),
                    a = t.to + .05 - (t.from - .05),
                    s = Math.min(1, Math.max(0, (e - (t.from - .05)) / a));
                return {
                    opacity: r,
                    transform: "translate3d(0, ".concat(((.5 - s) * 64).toFixed(1), "px, 0)"),
                    filter: "blur(".concat(((1 - r) * 7).toFixed(2), "px)")
                }
            }

            function m() {
                let e = (0, s.useRef)(null),
                    t = (0, s.useRef)(null),
                    r = (0, s.useRef)([]);
                return (0, s.useEffect)(() => {
                    let a = e.current;
                    if (!a) return;
                    let s = i.os.matchMedia();
                    return s.add("(min-width: 1024px)", () => {
                        let e;
                        let s = t.current;
                        if (!s) return;
                        let n = s.getContext("2d");
                        if (!n) return;
                        let i = [],
                            m = {
                                frame: 0
                            },
                            f = e => {
                                let t, r, a, i;
                                let l = s.width,
                                    o = s.height,
                                    c = e.naturalWidth / e.naturalHeight;
                                l / o > c ? (t = l, a = 0, i = (o - (r = l / c)) / 2) : (r = o, i = 0, a = (l - (t = o * c)) / 2), n.drawImage(e, a, i, t, r)
                            },
                            p = e => !!(e && e.complete && e.naturalWidth),
                            h = () => {
                                let e = Math.round(m.frame),
                                    t = i[e = Math.max(0, Math.min(232, e))];
                                if (!p(t))
                                    for (let r = 1; r < 233; r++) {
                                        if (p(i[e - r])) {
                                            t = i[e - r];
                                            break
                                        }
                                        if (p(i[e + r])) {
                                            t = i[e + r];
                                            break
                                        }
                                    }
                                p(t) && f(t)
                            },
                            x = () => {
                                let e = Math.min(window.devicePixelRatio || 1, 2);
                                s.width = Math.floor(window.innerWidth * e), s.height = Math.floor(window.innerHeight * e), h()
                            },
                            g = (0, o.r)({
                                count: 233,
                                src: c,
                                eager: 12,
                                concurrency: 6,
                                onFrame: e => {
                                    2 >= Math.abs(e - m.frame) && h()
                                }
                            });
                        i = g.images;
                        let v = (0, o.t)(() => g.stream());
                        x();
                        let w = e => {
                            d.forEach((t, a) => {
                                let s = r.current[a];
                                if (!s) return;
                                let n = u(e, t);
                                s.style.opacity = String(n.opacity), s.style.transform = n.transform, s.style.filter = n.filter
                            })
                        };
                        w(0), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (e = l.u.create({
                            trigger: a,
                            start: "top top",
                            end: "+=520%",
                            scrub: .6,
                            pin: !0,
                            pinSpacing: !0,
                            anticipatePin: 1,
                            invalidateOnRefresh: !0,
                            onUpdate: e => {
                                m.frame = 232 * e.progress, g.focus(Math.round(m.frame)), h(), w(e.progress), window.dispatchEvent(new CustomEvent("descent:progress", {
                                    detail: e.progress
                                }))
                            }
                        })), window.addEventListener("resize", x);
                        let b = setTimeout(() => l.u.refresh(), 400),
                            j = setTimeout(() => l.u.refresh(), 1500);
                        return () => {
                            clearTimeout(b), clearTimeout(j), v(), g.destroy(), null == e || e.kill(), window.removeEventListener("resize", x)
                        }
                    }), () => s.revert()
                }, []), (0, a.jsxs)("section", {
                    ref: e,
                    className: "relative w-full overflow-hidden bg-black",
                    children: [(0, a.jsxs)("div", {
                        className: "relative hidden h-screen w-full lg:block",
                        children: [(0, a.jsx)("canvas", {
                            ref: t,
                            className: "absolute inset-0 h-full w-full"
                        }), d.map((e, t) => (0, a.jsx)("div", {
                            ref: e => {
                                r.current[t] = e
                            },
                            className: "pointer-events-none absolute bottom-[11vh] left-6 max-w-3xl text-left md:left-12 lg:left-16",
                            style: {
                                willChange: "opacity, transform, filter",
                                ...u(0, e)
                            },
                            children: (0, a.jsx)("p", {
                                className: "whitespace-pre-line font-grotesk text-[clamp(2.04rem,4.59vw,4.25rem)] font-normal uppercase leading-[0.98] tracking-tight text-white [text-shadow:0_2px_60px_rgba(0,0,0,0.6)]",
                                children: e.line
                            })
                        }, t))]
                    }), (0, a.jsxs)("div", {
                        className: "relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden lg:hidden",
                        children: [(0, a.jsx)(n.default, {
                            src: "/hero-mobile-2026.webp",
                            alt: "Kukreja Infinity rising above Nagpur",
                            fill: !0,
                            fetchPriority: "high",
                            sizes: "100vw",
                            className: "object-cover"
                        }), (0, a.jsx)("div", {
                            className: "absolute inset-0",
                            style: {
                                background: "radial-gradient(120% 45% at 50% 52%, rgba(11,10,9,0.62) 0%, rgba(11,10,9,0) 70%), linear-gradient(to top, rgba(11,10,9,0.88) 0%, rgba(11,10,9,0.32) 45%, rgba(11,10,9,0.34) 100%)"
                            }
                        }), (0, a.jsxs)("div", {
                            className: "relative z-10 flex flex-1 flex-col justify-center px-6 pb-16 pt-32 text-center",
                            children: [(0, a.jsx)("p", {
                                className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0a456]",
                                children: "Kukreja Infrastructures"
                            }), (0, a.jsx)("h1", {
                                className: "mt-4 font-grotesk text-[clamp(1.95rem,7.65vw,2.72rem)] font-normal uppercase leading-[1.0] tracking-tight text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.55)]",
                                children: "Building the icons of tomorrow"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative z-10 mb-9 flex flex-col items-center gap-2 text-white/70",
                            children: [(0, a.jsx)("span", {
                                className: "font-grotesk text-[10px] uppercase tracking-[0.3em]",
                                children: "Scroll"
                            }), (0, a.jsx)("span", {
                                className: "block h-8 w-px bg-white/35"
                            })]
                        })]
                    })]
                })
            }
        },
        4528: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var a = r(5155),
                s = r(2115),
                n = r(1478),
                i = r(5415),
                l = r(8818);
            n.os.registerPlugin(i.u);
            let o = {
                    dir: "d",
                    count: 232
                },
                c = {
                    dir: "m",
                    count: 116
                },
                d = (e, t) => "/map-seq/".concat(e, "/").concat(String(t + 1).padStart(4, "0"), ".webp?v=").concat(1),
                u = "https://www.google.com/maps/dir/?api=1&destination=".concat(21.1509793, ",").concat(79.0755194);

            function m() {
                let e = (0, s.useRef)(null),
                    t = (0, s.useRef)(null),
                    r = (0, s.useRef)(null),
                    n = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let a, s, u;
                    let m = t.current,
                        f = e.current,
                        p = r.current,
                        h = n.current;
                    if (!m || !f || !p) return;
                    let x = m.getContext("2d");
                    if (!x) return;
                    let g = window.innerWidth < 1024,
                        v = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        w = g || v,
                        b = g ? c : o,
                        j = b.count,
                        y = [],
                        k = {
                            frame: 0
                        },
                        N = e => {
                            let t, r, a, s;
                            let n = m.width,
                                i = m.height,
                                l = e.naturalWidth / e.naturalHeight;
                            n / i > l ? (t = n, a = 0, s = (i - (r = n / l)) / 2) : (r = i, s = 0, a = (n - (t = i * l)) / 2), x.drawImage(e, a, s, t, r)
                        },
                        R = e => !!(e && e.complete && e.naturalWidth),
                        M = () => {
                            let e = Math.round(k.frame),
                                t = y[e = Math.max(0, Math.min(j - 1, e))];
                            if (!R(t))
                                for (let r = 1; r < j; r++) {
                                    if (R(y[e - r])) {
                                        t = y[e - r];
                                        break
                                    }
                                    if (R(y[e + r])) {
                                        t = y[e + r];
                                        break
                                    }
                                }
                            R(t) && N(t)
                        },
                        E = () => {
                            let e = Math.min(window.devicePixelRatio || 1, 2);
                            m.width = Math.floor(window.innerWidth * e), m.height = Math.floor(window.innerHeight * e), M()
                        };
                    if (w) {
                        let e = j - 1,
                            t = new Image;
                        t.onload = () => {
                            k.frame = e, M()
                        }, t.src = d(b.dir, e), y[e] = t
                    } else y = (a = (0, l.r)({
                        count: j,
                        src: e => d(b.dir, e),
                        eager: 0,
                        concurrency: 6,
                        onFrame: e => {
                            2 >= Math.abs(e - k.frame) && M()
                        }
                    })).images, (s = new IntersectionObserver(e => {
                        e.some(e => e.isIntersecting) && (null == s || s.disconnect(), null == a || a.stream())
                    }, {
                        rootMargin: "200% 0px"
                    })).observe(f);
                    E();
                    let C = e => {
                        let t = Math.min(1, Math.max(0, (e - .74) / .18)),
                            r = t * t * (3 - 2 * t);
                        p.style.opacity = String(r), p.style.transform = "translate3d(0, ".concat(((1 - r) * 46).toFixed(1), "px, 0) scale(").concat((.94 + .06 * r).toFixed(4), ")"), p.style.pointerEvents = r > .6 ? "auto" : "none", h && (h.style.opacity = String(.4 * r))
                    };
                    C(0), w ? (k.frame = j - 1, M(), C(1)) : u = i.u.create({
                        trigger: f,
                        start: "top top",
                        end: "+=340%",
                        scrub: .6,
                        pin: !0,
                        pinSpacing: !0,
                        anticipatePin: 1,
                        invalidateOnRefresh: !0,
                        onUpdate: e => {
                            let t = e.progress,
                                r = Math.min(1, t / .78);
                            k.frame = r * (j - 1), null == a || a.focus(Math.round(k.frame)), M(), C(t)
                        }
                    }), window.addEventListener("resize", E);
                    let P = setTimeout(() => i.u.refresh(), 400),
                        I = setTimeout(() => i.u.refresh(), 1500);
                    return () => {
                        clearTimeout(P), clearTimeout(I), null == s || s.disconnect(), null == a || a.destroy(), null == u || u.kill(), window.removeEventListener("resize", E)
                    }
                }, []), (0, a.jsxs)("section", {
                    ref: e,
                    className: "relative h-[100svh] w-full overflow-hidden bg-[#0d0c0b] lg:h-screen",
                    children: [(0, a.jsx)("canvas", {
                        ref: t,
                        className: "absolute inset-0 h-full w-full"
                    }), (0, a.jsx)("div", {
                        ref: n,
                        className: "pointer-events-none absolute inset-0 opacity-0",
                        style: {
                            background: "radial-gradient(120% 90% at 50% 55%, rgba(8,7,6,0) 30%, rgba(8,7,6,0.55) 100%)"
                        }
                    }), (0, a.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center px-6",
                        children: (0, a.jsxs)("div", {
                            ref: r,
                            className: "glass-card w-full max-w-[30rem] rounded-[clamp(1.25rem,2.4vw,2rem)] px-8 py-9 text-center opacity-0 md:px-11 md:py-11",
                            style: {
                                willChange: "opacity, transform"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center justify-center gap-2.5",
                                children: [(0, a.jsxs)("span", {
                                    className: "relative flex h-2 w-2",
                                    children: [(0, a.jsx)("span", {
                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e0a456] opacity-60"
                                    }), (0, a.jsx)("span", {
                                        className: "relative inline-flex h-2 w-2 rounded-full bg-[#e0a456]"
                                    })]
                                }), (0, a.jsx)("span", {
                                    className: "font-grotesk text-[11px] uppercase tracking-[0.3em] text-[#e6c79a]",
                                    children: "Head office"
                                })]
                            }), (0, a.jsx)("h2", {
                                className: "mt-6 whitespace-pre-line font-grotesk text-[clamp(1.7rem,2.89vw,2.46rem)] font-normal uppercase leading-[0.98] tracking-tight text-[#faf9f7]",
                                children: "Come see us\nin Civil Lines."
                            }), (0, a.jsx)("p", {
                                className: "mx-auto mt-5 max-w-[22rem] font-hanken text-[14.5px] leading-relaxed text-[#e8e2d6]/80",
                                children: "Kukreja House, Museum Road, Civil Lines, Nagpur 440026. Our head office and experience centre, open through the week."
                            }), (0, a.jsxs)("div", {
                                className: "mx-auto mt-7 flex max-w-[22rem] items-stretch justify-center gap-6 border-y border-white/15 py-5 font-grotesk",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex-1 text-left",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[9.5px] uppercase tracking-[0.22em] text-[#e0a456]/85",
                                        children: "Call"
                                    }), (0, a.jsx)("a", {
                                        href: "tel:+917888012200",
                                        className: "pointer-events-auto mt-1.5 block text-[13.5px] tracking-wide text-white/90 transition-colors hover:text-[#e0a456]",
                                        children: "+91 78880 12200"
                                    })]
                                }), (0, a.jsx)("span", {
                                    className: "w-px bg-white/15"
                                }), (0, a.jsxs)("div", {
                                    className: "flex-1 text-left",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[9.5px] uppercase tracking-[0.22em] text-[#e0a456]/85",
                                        children: "Hours"
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-1.5 text-[13px] leading-snug tracking-wide text-white/90",
                                        children: ["Open 7 days", (0, a.jsx)("br", {}), "10am to 7pm"]
                                    })]
                                })]
                            }), (0, a.jsxs)("a", {
                                href: u,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group pointer-events-auto mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#ffffff] px-8 py-3.5 font-grotesk text-[12px] uppercase tracking-[0.16em] text-[#17140f] transition-colors duration-300 hover:bg-[#e0a456]",
                                children: ["Get directions", (0, a.jsx)("span", {
                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        8193: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => u
            });
            var a = r(5155),
                s = r(5565),
                n = r(8991),
                i = r(3126),
                l = r(3580),
                o = r(9301);
            let c = ["RERA Approved", "100% Vastu Compliant"],
                d = [{
                    id: "3",
                    name: "West 19",
                    place: "Shankar Nagar, Nagpur",
                    config: "Premium office spaces",
                    status: "Under Construction",
                    img: "/west-19/aerial-16x9.webp",
                    brochure: "west-19",
                    tags: ["Central India's Tallest", "Grade-A Offices"]
                }, {
                    id: "1",
                    name: "Paris City",
                    place: "Wardhaman Nagar, Nagpur",
                    config: "3, 4 & 4.5 BHK",
                    status: "Under Construction",
                    img: "/paris-city/aerial-twilight.webp",
                    pos: "64% center",
                    brochure: "paris-city",
                    tags: c
                }, {
                    id: "8",
                    name: "The One",
                    place: "Civil Lines, Nagpur",
                    config: "5.5 BHK Residences",
                    status: "Under Construction",
                    img: "/the-one/day-16x9.webp",
                    brochure: "the-one",
                    tags: c
                }, {
                    id: "2",
                    name: "Embassy II",
                    place: "Byramji Town, Nagpur",
                    config: "4 & 4.5 BHK Residences",
                    status: "Under Construction",
                    img: "/embasy-2/main.webp",
                    brochure: "embassy-2",
                    tags: c
                }, {
                    id: "9",
                    name: "Kukreja Infinity",
                    place: "Civil Lines, Nagpur",
                    config: "3, 4 & 6 BHK",
                    status: "Sold Out",
                    img: "/infinity/real.webp",
                    brochure: "kukreja-infinity",
                    tags: c
                }, {
                    id: "5",
                    name: "Kukreja Anandam World City",
                    place: "Ganeshpeth, Nagpur",
                    config: "3 & 4.5 BHK",
                    status: "Under Construction",
                    img: "/dda/main.webp",
                    tags: c
                }, {
                    id: "4",
                    name: "Kukreja Business Park",
                    place: "MIHAN, Nagpur",
                    config: "Grade-A office spaces",
                    status: "Under Construction",
                    img: "/kbp/kbp-2.webp",
                    brochure: "business-park",
                    tags: ["Grade-A Offices", "Retail + Office"]
                }, {
                    id: "6",
                    name: "Kukreja Embassy",
                    place: "Byramji Town, Nagpur",
                    config: "3, 4 & 5.5 BHK Residences",
                    status: "Sold Out",
                    img: "/embasy/cover.webp",
                    tags: ["Boutique Residences", "Double-Height Terraces"]
                }, {
                    id: "7",
                    name: "Kukreja Infinity East",
                    place: "South Wardhaman Nagar, Nagpur",
                    config: "3 to 5.5 BHK Residences",
                    status: "Completed",
                    img: "/infinity-east/real-2.webp",
                    brochure: "infinity-east",
                    tags: c
                }];

            function u() {
                return (0, a.jsxs)("section", {
                    className: "relative bg-[#ffffff] px-6 py-24 text-[#17140f] md:px-12 md:py-28 lg:px-16",
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.RevealText, {
                                text: "Our projects.",
                                className: "font-grotesk text-[clamp(1.7rem,3.91vw,3.4rem)] font-normal uppercase leading-[1.02] tracking-tight"
                            }), (0, a.jsx)(l.Reveal, {
                                delay: .08,
                                children: (0, a.jsx)("p", {
                                    className: "mt-4 max-w-md font-hanken text-[16px] leading-relaxed text-[#57534d]",
                                    children: "Homes and workspaces across Civil Lines, Byramji Town, Wardhaman Nagar and MIHAN."
                                })
                            })]
                        }), (0, a.jsx)(l.Reveal, {
                            delay: .12,
                            children: (0, a.jsxs)(i.Link, {
                                href: "/projects",
                                className: "group inline-flex w-fit items-center gap-3 font-grotesk text-[12px] uppercase tracking-[0.2em] text-[#17140f]",
                                children: ["All projects", (0, a.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→"
                                })]
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
                        children: d.map((e, t) => {
                            var r;
                            let c = "Sold Out" === e.status;
                            return (0, a.jsx)(l.Reveal, {
                                delay: t % 3 * .1,
                                children: (0, a.jsxs)("article", {
                                    className: "group flex h-full flex-col",
                                    children: [(0, a.jsxs)(i.Link, {
                                        href: (0, o.vI)(e.id),
                                        className: "relative block overflow-hidden rounded-xl bg-[#eae8e4]",
                                        children: [(0, a.jsxs)("div", {
                                            className: "relative aspect-[16/10]",
                                            children: [(0, a.jsx)(s.default, {
                                                src: e.img,
                                                alt: e.name,
                                                fill: !0,
                                                sizes: "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw",
                                                style: {
                                                    objectPosition: null !== (r = e.pos) && void 0 !== r ? r : "center"
                                                },
                                                className: "object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                                            }), (0, a.jsx)("span", {
                                                className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            })]
                                        }), (0, a.jsx)("span", {
                                            className: "absolute left-3.5 top-3.5 rounded-full px-3 py-1 font-grotesk text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm ".concat(c ? "bg-[#17140f]/70 text-white/85" : "bg-[#b06a35] text-white"),
                                            children: e.status
                                        })]
                                    }), (0, a.jsx)(i.Link, {
                                        href: (0, o.vI)(e.id),
                                        className: "mt-5 block",
                                        children: (0, a.jsx)("h3", {
                                            className: "font-grotesk text-[clamp(1.1rem,1.44vw,1.44rem)] font-normal uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-[#b06a35]",
                                            children: e.name
                                        })
                                    }), (0, a.jsx)("p", {
                                        className: "mt-3 font-hanken text-[16px] font-medium leading-snug text-[#17140f]",
                                        children: e.config
                                    }), (0, a.jsxs)("p", {
                                        className: "mt-1.5 flex items-center gap-1.5 font-hanken text-[15px] leading-relaxed text-[#57534d]",
                                        children: [(0, a.jsxs)("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#b06a35",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": !0,
                                            className: "shrink-0",
                                            children: [(0, a.jsx)("path", {
                                                d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                                            }), (0, a.jsx)("circle", {
                                                cx: "12",
                                                cy: "10",
                                                r: "3"
                                            })]
                                        }), e.place]
                                    }), (0, a.jsx)("div", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: e.tags.map(e => (0, a.jsxs)("span", {
                                            className: "group/cap inline-flex cursor-default items-center gap-1.5 rounded-full border border-[#17140f]/25 bg-[#17140f]/[0.05] px-3 py-1.5 font-grotesk text-[11px] font-medium uppercase tracking-[0.08em] text-[#17140f]/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b06a35]/55 hover:bg-[#b06a35]/[0.09] hover:text-[#17140f]",
                                            children: [(0, a.jsx)("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-[#b06a35] transition-transform duration-300 group-hover/cap:scale-[1.6]"
                                            }), e]
                                        }, e))
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-6 flex flex-wrap gap-2.5 pt-1",
                                        children: [(0, a.jsx)(i.Link, {
                                            href: (0, o.vI)(e.id),
                                            className: "inline-flex min-h-11 items-center rounded-full bg-[#17140f] px-6 py-3 font-grotesk text-[11px] uppercase tracking-[0.16em] text-[#ffffff] transition-colors duration-300 hover:bg-[#b06a35]",
                                            children: "Enquire now"
                                        }), e.brochure && (0, a.jsx)(n.A, {
                                            slug: e.brochure,
                                            propertyTitle: e.name,
                                            label: "Brochure",
                                            className: "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-[#17140f]/25 px-6 py-3 font-grotesk text-[11px] uppercase tracking-[0.16em] text-[#17140f] transition-colors duration-300 hover:border-[#17140f] hover:bg-[#17140f]/[0.04]"
                                        })]
                                    })]
                                })
                            }, e.id)
                        })
                    })]
                })
            }
        },
        1963: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => l
            });
            var a = r(5155),
                s = r(2115),
                n = r(1478),
                i = r(5415);

            function l() {
                let e = (0, s.useRef)(null),
                    t = (0, s.useRef)(null),
                    r = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let a = e.current;
                    if (!a) return;
                    let s = n.os.matchMedia();
                    return s.add("(min-width: 1024px)", () => {
                        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                        let e = () => Math.round(1.7 * window.innerHeight),
                            s = e => {
                                let a = 1 + 19 * Math.pow(Math.min(1, e / .8), 2.1),
                                    s = t.current;
                                s && (s.setAttribute("transform", "translate(500 500) scale(".concat(a.toFixed(3), ") translate(-500 -500)")), s.style.opacity = String(1 - Math.max(0, (e - .8) / .2))), r.current && (r.current.style.opacity = String(Math.max(0, 1 - e / .12)))
                            };
                        s(0);
                        let n = e(),
                            l = i.u.create({
                                trigger: a,
                                start: "top top",
                                end: "+=" + n,
                                scrub: .5,
                                pin: !0,
                                pinSpacing: !0,
                                anticipatePin: 1,
                                onUpdate: e => s(e.progress)
                            }),
                            o = () => {
                                n = e(), l.vars.end = "+=" + n, i.u.refresh()
                            },
                            c = setTimeout(o, 700),
                            d = setTimeout(o, 1800);
                        return () => {
                            clearTimeout(c), clearTimeout(d), l.kill()
                        }
                    }), () => s.revert()
                }, []), (0, a.jsxs)("section", {
                    ref: e,
                    className: "relative z-10 hidden h-[80svh] w-full overflow-hidden rounded-t-[clamp(1.5rem,4vw,3rem)] bg-[#ffffff] lg:block lg:h-screen",
                    children: [(0, a.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, a.jsxs)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: "/hero-poster.webp",
                            className: "h-full w-full object-cover",
                            children: [(0, a.jsx)("source", {
                                src: "/hero.webm",
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: "/hero.mp4",
                                type: "video/mp4"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "absolute inset-0 bg-black/15"
                        })]
                    }), (0, a.jsxs)("svg", {
                        className: "absolute inset-0 h-full w-full",
                        viewBox: "0 0 1000 1000",
                        preserveAspectRatio: "xMidYMid slice",
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsxs)("mask", {
                                id: "ktw",
                                children: [(0, a.jsx)("rect", {
                                    width: "1000",
                                    height: "1000",
                                    fill: "white"
                                }), (0, a.jsx)("text", {
                                    x: "500",
                                    y: "512",
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    className: "font-grotesk text-[96px] sm:text-[130px] lg:text-[168px]",
                                    fontWeight: "800",
                                    letterSpacing: "-6",
                                    fill: "black",
                                    children: "KUKREJA"
                                })]
                            })
                        }), (0, a.jsx)("g", {
                            ref: t,
                            children: (0, a.jsx)("rect", {
                                width: "1000",
                                height: "1000",
                                fill: "#ffffff",
                                mask: "url(#ktw)"
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        ref: r,
                        className: "pointer-events-none absolute inset-x-0 bottom-10 hidden flex-col items-center gap-2 text-[#17140f]/55 lg:flex",
                        children: [(0, a.jsx)("span", {
                            className: "font-grotesk text-[10px] uppercase tracking-[0.32em]",
                            children: "Scroll through"
                        }), (0, a.jsx)("span", {
                            className: "block h-8 w-px bg-[#17140f]/40"
                        })]
                    })]
                })
            }
            n.os.registerPlugin(i.u)
        },
        8415: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var a = r(5155),
                s = r(2115);
            let n = "cubic-bezier(0.22, 1, 0.36, 1)";

            function i(e) {
                let {
                    children: t,
                    className: r = ""
                } = e, i = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let e = i.current;
                    if (!e || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    e.style.opacity = "0", e.style.transform = "translateY(34px)", e.style.transition = "opacity 0.9s ".concat(n, ", transform 1.05s ").concat(n), e.style.willChange = "opacity, transform";
                    let t = () => {
                            e.style.opacity = "1", e.style.transform = "translateY(0)";
                            let t = () => {
                                e.style.opacity = "", e.style.transform = "", e.style.transition = "", e.style.willChange = "", e.removeEventListener("transitionend", t)
                            };
                            e.addEventListener("transitionend", t)
                        },
                        r = e.getBoundingClientRect();
                    if (r.top < window.innerHeight && r.bottom > 0) {
                        t();
                        return
                    }
                    let a = new IntersectionObserver(e => {
                        for (let r of e) r.isIntersecting && (t(), a.disconnect())
                    }, {
                        threshold: 0,
                        rootMargin: "0px 0px -12% 0px"
                    });
                    return a.observe(e), () => a.disconnect()
                }, []), (0, a.jsx)("div", {
                    ref: i,
                    className: r,
                    children: t
                })
            }
        },
        3611: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var a = r(5155),
                s = r(3580);
            let n = [{
                name: "Commander Vikrant Malhan",
                role: "Home Owner",
                video: "https://www.youtube-nocookie.com/embed/xGboDhjZIGs",
                quote: "The attention to detail and commitment to quality make Kukreja Infrastructures stand out. Our home has been everything we hoped for, beautifully built and a genuine pleasure to live in."
            }, {
                name: "Kishor & Reshma Rohida",
                role: "Residential Customer",
                video: "https://www.youtube-nocookie.com/embed/3k3JF0u098o",
                quote: "We just wanted a nice, peaceful home for our family, and this turned out even better than we expected. The moment we stepped in, it just felt like home. The kids love it, we feel safe here, and day by day it feels like we have been living here forever."
            }];

            function i() {
                return (0, a.jsxs)("section", {
                    className: "relative bg-[#ffffff] px-6 py-24 text-[#17140f] md:px-12 md:py-32 lg:px-16",
                    children: [(0, a.jsx)("div", {
                        className: "mb-16 max-w-4xl",
                        children: (0, a.jsx)(s.RevealText, {
                            text: "Hear it from\nthe *families.*",
                            className: "mt-6 font-grotesk text-[clamp(1.7rem,3.91vw,3.4rem)] font-normal uppercase leading-[1.04] tracking-tight"
                        })
                    }), (0, a.jsx)("div", {
                        className: "grid gap-10 lg:grid-cols-2 lg:gap-12",
                        children: n.map((e, t) => (0, a.jsx)(s.Reveal, {
                            delay: .12 * t,
                            children: (0, a.jsxs)("article", {
                                className: "flex h-full flex-col",
                                children: [(0, a.jsx)("div", {
                                    className: "relative aspect-video overflow-hidden rounded-2xl bg-[#d8d1c2] shadow-[0_24px_60px_-30px_rgba(23,20,15,0.4)]",
                                    children: (0, a.jsx)("iframe", {
                                        className: "absolute inset-0 h-full w-full",
                                        src: e.video,
                                        title: "Testimonial from ".concat(e.name),
                                        loading: "lazy",
                                        allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: !0
                                    })
                                }), (0, a.jsxs)("p", {
                                    className: "mt-7 font-cormorant text-[clamp(1.3rem,2vw,1.75rem)] italic leading-snug text-[#403a31]",
                                    children: ["“", e.quote, "”"]
                                }), (0, a.jsx)("div", {
                                    className: "mt-auto border-t border-[#17140f]/12 pt-5",
                                    children: (0, a.jsx)("h3", {
                                        className: "font-grotesk text-[clamp(0.89rem,1.27vw,1.15rem)] font-normal uppercase tracking-tight",
                                        children: e.name
                                    })
                                })]
                            })
                        }, e.name))
                    })]
                })
            }
        },
        8818: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    count: t,
                    src: r,
                    eager: a = 8,
                    concurrency: s = 6,
                    onFrame: n
                } = e, i = [], l = [];
                for (let e = a; e < t; e++) l.push(e);
                let o = 0,
                    c = 0,
                    d = !1,
                    u = !1,
                    m = (e, t) => {
                        let a = new window.Image;
                        i[e] = a, c += 1;
                        let s = () => {
                            u || (c -= 1, null == n || n(e), p())
                        };
                        a.onload = s, a.onerror = s, a.decoding = "async", t && (a.fetchPriority = t), a.src = r(e)
                    },
                    f = () => {
                        let e = 0,
                            t = 1 / 0;
                        for (let r = 0; r < l.length; r++) {
                            let a = Math.abs(l[r] - o);
                            a < t && (t = a, e = r)
                        }
                        return l.splice(e, 1)[0]
                    },
                    p = () => {
                        if (!u && d)
                            for (; c < s && l.length;) m(f())
                    };
                for (let e = 0; e < Math.min(a, t); e++) m(e, 0 === e ? "high" : void 0);
                return {
                    images: i,
                    focus: e => {
                        o = e
                    },
                    stream: () => {
                        d = !0, p()
                    },
                    destroy: () => {
                        u = !0, l.length = 0
                    }
                }
            }

            function s(e) {
                return "complete" === document.readyState ? ("function" == typeof window.requestIdleCallback ? window.requestIdleCallback(() => e()) : setTimeout(e, 1), () => {}) : (window.addEventListener("load", e, {
                    once: !0
                }), () => window.removeEventListener("load", e))
            }
            r.d(t, {
                r: () => a,
                t: () => s
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4506, 5592, 7970, 8173, 4881, 1478, 5415, 5542, 522, 6590, 6331, 8441, 1517, 7358], () => t(5383)), _N_E = e.O()
    }
]);