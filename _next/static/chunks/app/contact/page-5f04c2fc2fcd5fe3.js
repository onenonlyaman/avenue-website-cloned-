(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [977], {
        6233: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 9573)), Promise.resolve().then(r.bind(r, 2947)), Promise.resolve().then(r.bind(r, 1640)), Promise.resolve().then(r.bind(r, 1855)), Promise.resolve().then(r.bind(r, 1729))
        },
        9573: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o
            });
            var s = r(5155),
                a = r(2115),
                n = r(5782),
                i = r(1478),
                l = r(5415);

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, a.useEffect)(() => {
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = new n.A({
                        lerp: .085,
                        smoothWheel: !0,
                        wheelMultiplier: 1,
                        touchMultiplier: 1.6
                    });
                    e.on("scroll", l.u.update);
                    let t = t => e.raf(1e3 * t);
                    return i.os.ticker.add(t), i.os.ticker.lagSmoothing(0), window.__lenis = e, () => {
                        i.os.ticker.remove(t), e.destroy(), delete window.__lenis
                    }
                }, []), (0, s.jsx)(s.Fragment, {
                    children: t
                })
            }
            i.os.registerPlugin(l.u)
        },
        2947: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var s = r(5155),
                a = r(2115),
                n = r(1481);

            function i(e) {
                let {
                    project: t
                } = e, [r, i] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => i(window.scrollY > .7 * window.innerHeight);
                    return e(), window.addEventListener("scroll", e, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", e)
                }, []);
                let c = (0, n.E7)(t);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("a", {
                        href: c,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Chat on WhatsApp",
                        className: "fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 md:flex ".concat(r ? "opacity-100" : "pointer-events-none opacity-0"),
                        children: (0, s.jsx)(l, {
                            size: 28
                        })
                    }), (0, s.jsxs)("div", {
                        className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#14110c]/95 backdrop-blur-md md:hidden",
                        style: {
                            paddingBottom: "env(safe-area-inset-bottom)"
                        },
                        children: [(0, s.jsxs)("a", {
                            href: n.nJ,
                            className: "flex items-center justify-center gap-2 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-white",
                            children: [(0, s.jsx)(o, {}), " Call"]
                        }), (0, s.jsxs)("a", {
                            href: c,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 border-x border-white/10 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-[#25D366]",
                            children: [(0, s.jsx)(l, {
                                size: 16
                            }), " WhatsApp"]
                        }), (0, s.jsx)("button", {
                            type: "button",
                            onClick: () => {
                                let e = document.getElementById("enquire");
                                if (!e) return;
                                let t = window.__lenis;
                                t ? t.scrollTo(e, {
                                    offset: -80
                                }) : e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                })
                            },
                            className: "flex cursor-pointer items-center justify-center bg-gradient-to-br from-[#e0a456] to-[#b06a35] py-4 font-grotesk text-[12px] font-bold uppercase tracking-[0.12em] text-[#17140f]",
                            children: "Enquire"
                        })]
                    })]
                })
            }

            function l(e) {
                let {
                    size: t
                } = e;
                return (0, s.jsxs)("svg", {
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": !0,
                    className: "text-white",
                    children: [(0, s.jsx)("path", {
                        d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                    }), (0, s.jsx)("path", {
                        d: "M12 2a10 10 0 0 0-8.62 15.06L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.02.79.8-2.94-.2-.3A8.3 8.3 0 1 1 12 20.3z"
                    })]
                })
            }

            function o() {
                return (0, s.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": !0,
                    children: (0, s.jsx)("path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    })
                })
            }
        },
        1481: (e, t, r) => {
            "use strict";
            r.d(t, {
                E7: () => o,
                GH: () => l,
                Tm: () => n,
                nF: () => i,
                nJ: () => a,
                y7: () => s
            });
            let s = "+91 78880 12200",
                a = "tel:+917888012200",
                n = "info@kinfra.in",
                i = "mailto:info@kinfra.in",
                l = "Kukreja House, Museum Road, Civil Lines, Nagpur 440026";

            function o(e) {
                return "https://wa.me/".concat("917888019900", "?text=").concat(encodeURIComponent(e ? "Hi, I'm interested in ".concat(e, ". Please share the details.") : "Hi, I'd like to know more about Kukreja Infrastructures projects."))
            }
        },
        3580: (e, t, r) => {
            "use strict";
            r.d(t, {
                Reveal: () => l,
                RevealText: () => o
            });
            var s = r(5155),
                a = r(2115);
            let n = "cubic-bezier(0.16, 1, 0.3, 1)";

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .18,
                    t = (0, a.useRef)(null),
                    [r, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let r = t.current;
                    if (!r) return;
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        s(!0);
                        return
                    }
                    let a = new IntersectionObserver(e => {
                        for (let t of e) t.isIntersecting && (s(!0), a.disconnect())
                    }, {
                        threshold: e
                    });
                    return a.observe(r), () => a.disconnect()
                }, [e]), {
                    ref: t,
                    shown: r
                }
            }

            function l(e) {
                let {
                    children: t,
                    className: r = "",
                    y: a = 48,
                    delay: l = 0,
                    threshold: o = .18
                } = e, {
                    ref: c,
                    shown: d
                } = i(o);
                return (0, s.jsx)("div", {
                    ref: c,
                    className: r,
                    style: {
                        opacity: d ? 1 : 0,
                        transform: d ? "translateY(0) scale(1)" : "translateY(".concat(a, "px) scale(0.985)"),
                        filter: d ? "blur(0px)" : "blur(4px)",
                        transition: "opacity 1.1s ".concat(n, " ").concat(l, "s, transform 1.3s ").concat(n, " ").concat(l, "s, filter 1.1s ").concat(n, " ").concat(l, "s"),
                        willChange: "opacity, transform, filter"
                    },
                    children: t
                })
            }

            function o(e) {
                let {
                    text: t,
                    className: r = "",
                    wordClassName: a = "",
                    emphasisClassName: l = "font-semibold",
                    stagger: o = .07,
                    threshold: c = .25,
                    as: d = "h2"
                } = e, {
                    ref: x,
                    shown: m
                } = i(c), p = t.split("\n"), h = 0;
                return (0, s.jsx)(d, {
                    ref: x,
                    className: r,
                    children: p.map((e, t) => {
                        let r = function(e) {
                                let t = [];
                                return e.split(/(\*[^*]+\*)/g).forEach(e => {
                                    if (!e) return;
                                    let r = e.length > 2 && e.startsWith("*") && e.endsWith("*");
                                    (r ? e.slice(1, -1) : e).split(" ").forEach(e => {
                                        "" !== e && t.push({
                                            word: e,
                                            bold: r
                                        })
                                    })
                                }), t
                            }(e),
                            i = [];
                        return r.forEach((e, t) => {
                            let {
                                word: c,
                                bold: d
                            } = e, x = h++;
                            i.push((0, s.jsx)("span", {
                                className: "inline-block overflow-hidden align-bottom",
                                children: (0, s.jsx)("span", {
                                    className: "inline-block ".concat(d ? l : "", " ").concat(a),
                                    style: {
                                        transform: m ? "translateY(0)" : "translateY(115%)",
                                        transition: "transform 0.95s ".concat(n, " ").concat(x * o, "s"),
                                        willChange: "transform"
                                    },
                                    children: c
                                })
                            }, "w".concat(t))), t < r.length - 1 && i.push(" ")
                        }), (0, s.jsx)("span", {
                            className: "block overflow-hidden pb-[0.12em]",
                            children: i
                        }, t)
                    })
                })
            }
        },
        1729: (e, t, r) => {
            "use strict";
            r.d(t, {
                ClosingBand: () => j,
                ContactOpener: () => h,
                DirectChannels: () => f,
                HeadOffice: () => g
            });
            var s = r(5155),
                a = r(5565),
                n = r(3126),
                i = r(206),
                l = r(3580),
                o = r(522),
                c = r(1481);
            let d = "#e0a456",
                x = "#b06a35",
                m = "Open 7 Days a Week, 10:00 AM – 7:00 PM",
                p = (0, c.E7)();

            function h() {
                return (0, s.jsxs)("header", {
                    className: "relative min-h-svh overflow-hidden bg-[#14110c]",
                    children: [(0, s.jsx)(a.default, {
                        src: "/map-seq/d/0001.webp",
                        alt: "Kukreja House on Museum Road, Civil Lines, Nagpur",
                        fill: !0,
                        priority: !0,
                        sizes: "100vw",
                        className: "object-cover object-center"
                    }), (0, s.jsx)("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(100deg, rgba(20,17,12,.94) 0%, rgba(20,17,12,.74) 42%, rgba(20,17,12,.4) 70%, rgba(20,17,12,.6) 100%), linear-gradient(to bottom, rgba(20,17,12,.72) 0%, rgba(20,17,12,.2) 34%, rgba(20,17,12,.5) 72%, rgba(20,17,12,.96) 100%)"
                        }
                    }), (0, s.jsxs)("div", {
                        className: "relative z-10 mx-auto flex min-h-svh max-w-[1640px] flex-col justify-end gap-12 px-6 pb-28 pt-32 md:px-10 md:pb-32 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-14",
                        children: [(0, s.jsxs)("div", {
                            className: "max-w-2xl",
                            children: [(0, s.jsx)(l.Reveal, {
                                y: 16,
                                children: (0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: d
                                    },
                                    children: "Contact"
                                })
                            }), (0, s.jsxs)("h1", {
                                className: "mt-5 font-grotesk text-[clamp(2.04rem,4.93vw,4.08rem)] font-normal uppercase leading-[0.98] tracking-tight text-white",
                                children: [(0, s.jsx)(l.Reveal, {
                                    y: 30,
                                    delay: .08,
                                    children: (0, s.jsx)("span", {
                                        className: "block",
                                        children: "Talk to us"
                                    })
                                }), (0, s.jsx)(l.Reveal, {
                                    y: 30,
                                    delay: .17,
                                    children: (0, s.jsx)("span", {
                                        className: "block font-cormorant lowercase italic",
                                        style: {
                                            color: d,
                                            fontSize: "1.06em"
                                        },
                                        children: "directly."
                                    })
                                })]
                            }), (0, s.jsx)(l.Reveal, {
                                y: 18,
                                delay: .42,
                                children: (0, s.jsxs)("div", {
                                    className: "mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:gap-12",
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("p", {
                                            className: "font-grotesk text-[10.5px] uppercase tracking-[0.2em] text-white/50",
                                            children: "Call"
                                        }), (0, s.jsx)("a", {
                                            href: c.nJ,
                                            className: "mt-2 block font-grotesk text-[clamp(0.98rem,1.7vw,1.36rem)] font-normal tracking-tight text-white transition-colors duration-300 hover:text-[#e0a456]",
                                            children: c.y7
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("p", {
                                            className: "font-grotesk text-[10.5px] uppercase tracking-[0.2em] text-white/50",
                                            children: "Email"
                                        }), (0, s.jsx)("a", {
                                            href: c.nF,
                                            className: "mt-2 block font-grotesk text-[clamp(0.98rem,1.7vw,1.36rem)] font-normal tracking-tight text-white transition-colors duration-300 hover:text-[#e0a456]",
                                            children: c.Tm
                                        })]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(l.Reveal, {
                            y: 24,
                            delay: .26,
                            className: "w-full shrink-0 lg:w-[420px]",
                            children: (0, s.jsxs)("div", {
                                id: "enquire",
                                className: "w-full scroll-mt-28 border border-white/15 bg-[#1d1811]/85 p-6 backdrop-blur-md md:p-8",
                                children: [(0, s.jsx)("h2", {
                                    className: "font-grotesk text-[24px] font-semibold uppercase leading-tight tracking-tight text-white md:text-[26px]",
                                    children: "Send us a note"
                                }), (0, s.jsx)("p", {
                                    className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-white/65",
                                    children: "Fill this in and we will get back to you. If it is quicker, just call or WhatsApp instead."
                                }), (0, s.jsx)(o.default, {
                                    propertyTitle: "Contact page",
                                    enquiryType: "general",
                                    buttonLabel: "Send my enquiry",
                                    variant: "dark",
                                    showMessage: !0
                                })]
                            })
                        })]
                    })]
                })
            }
            let u = [{
                n: "01",
                Icon: i.O$s,
                label: "Call the office",
                value: c.y7,
                note: "Speak directly with our sales team during office hours.",
                href: c.nJ,
                external: !1
            }, {
                n: "02",
                Icon: i.BNY,
                label: "WhatsApp us",
                value: "Start a chat",
                note: "Request brochures, project details, or quick updates directly on WhatsApp.",
                href: p,
                external: !0
            }, {
                n: "03",
                Icon: i.cvx,
                label: "Write to us",
                value: c.Tm,
                note: "For formal enquiries, documentation, and corporate communications.",
                href: c.nF,
                external: !1
            }];

            function f() {
                return (0, s.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: [(0, s.jsx)("div", {
                            className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
                            children: (0, s.jsx)(l.RevealText, {
                                text: "Pick whichever\nis quickest.",
                                className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                            })
                        }), (0, s.jsx)("div", {
                            className: "mt-14 grid gap-px bg-[#17140f]/12 md:grid-cols-3",
                            children: u.map((e, t) => {
                                let {
                                    n: r,
                                    Icon: a,
                                    label: n,
                                    value: o,
                                    note: c,
                                    href: d,
                                    external: m
                                } = e;
                                return (0, s.jsx)(l.Reveal, {
                                    delay: Math.min(.08 * t, .3),
                                    children: (0, s.jsxs)("a", {
                                        href: d,
                                        ...m ? {
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        } : {},
                                        className: "group relative flex h-full flex-col justify-between overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-[#14110c] md:p-10 lg:min-h-[26rem]",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-start justify-between gap-6",
                                            children: [(0, s.jsx)(a, {
                                                size: 38,
                                                className: "transition-colors duration-500",
                                                style: {
                                                    color: x
                                                },
                                                "aria-hidden": !0
                                            }), (0, s.jsx)("span", {
                                                className: "font-grotesk text-[11px] tracking-[0.22em] text-[#17140f]/25 transition-colors duration-500 group-hover:text-white/30",
                                                children: r
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "mt-16 md:mt-20",
                                            children: [(0, s.jsx)("p", {
                                                className: "font-grotesk text-[10.5px] uppercase tracking-[0.22em] text-[#17140f]/45 transition-colors duration-500 group-hover:text-[#e0a456]",
                                                children: n
                                            }), (0, s.jsx)("p", {
                                                className: "mt-3 font-grotesk text-[clamp(1.19rem,2.04vw,1.7rem)] font-normal uppercase leading-tight tracking-tight text-[#17140f] transition-colors duration-500 group-hover:text-white",
                                                children: o
                                            }), (0, s.jsx)("p", {
                                                className: "mt-4 max-w-[30ch] font-hanken text-[15px] leading-relaxed text-[#57534d] transition-colors duration-500 group-hover:text-white/65",
                                                children: c
                                            }), (0, s.jsxs)("span", {
                                                className: "mt-7 inline-flex items-center gap-2 font-grotesk text-[11px] uppercase tracking-[0.18em] text-[#17140f] transition-colors duration-500 group-hover:text-[#e0a456]",
                                                children: ["Open", (0, s.jsx)(i.aeF, {
                                                    className: "text-base transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                })]
                                            })]
                                        })]
                                    })
                                }, n)
                            })
                        })]
                    })
                })
            }

            function g() {
                return (0, s.jsx)("section", {
                    className: "bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsx)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: (0, s.jsxs)("div", {
                            className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)(l.Reveal, {
                                    children: (0, s.jsx)("p", {
                                        className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                        style: {
                                            color: x
                                        },
                                        children: "Head office"
                                    })
                                }), (0, s.jsx)(l.RevealText, {
                                    text: "Kukreja House,\nCivil Lines.",
                                    className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                                }), (0, s.jsx)(l.Reveal, {
                                    delay: .1,
                                    children: (0, s.jsx)("p", {
                                        className: "mt-6 max-w-xl font-hanken text-[16px] leading-relaxed text-[#57534d] md:text-[18px]",
                                        children: "Visit our head office to discuss project details with our team, or request a guided site visit at your convenience."
                                    })
                                }), (0, s.jsx)(l.Reveal, {
                                    delay: .16,
                                    children: (0, s.jsxs)("div", {
                                        className: "mt-10 space-y-8",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex gap-4",
                                            children: [(0, s.jsx)(i.lS0, {
                                                className: "mt-1 shrink-0 text-xl",
                                                style: {
                                                    color: x
                                                },
                                                "aria-hidden": !0
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("p", {
                                                    className: "font-grotesk text-[13px] font-semibold uppercase tracking-[0.16em] text-[#17140f]",
                                                    children: "Address"
                                                }), (0, s.jsx)("p", {
                                                    className: "mt-2 max-w-sm font-hanken text-[16px] leading-relaxed text-[#57534d]",
                                                    children: c.GH
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "flex gap-4",
                                            children: [(0, s.jsx)(i.gvW, {
                                                className: "mt-1 shrink-0 text-xl",
                                                style: {
                                                    color: x
                                                },
                                                "aria-hidden": !0
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("p", {
                                                    className: "font-grotesk text-[13px] font-semibold uppercase tracking-[0.16em] text-[#17140f]",
                                                    children: "Hours"
                                                }), (0, s.jsx)("p", {
                                                    className: "mt-2 font-hanken text-[16px] text-[#57534d]",
                                                    children: m
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)(l.Reveal, {
                                    delay: .22,
                                    children: (0, s.jsxs)("div", {
                                        className: "mt-10 flex flex-wrap items-center gap-4",
                                        children: [(0, s.jsxs)("a", {
                                            href: "https://maps.app.goo.gl/9uoiqqHJd6kgBAos6",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "group inline-flex items-center gap-2.5 bg-[#17140f] px-7 py-4 font-grotesk text-[11.5px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#b06a35]",
                                            children: ["Get directions", (0, s.jsx)(i.aeF, {
                                                className: "text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            })]
                                        }), (0, s.jsx)("a", {
                                            href: c.nJ,
                                            className: "inline-flex items-center border border-[#17140f]/20 px-7 py-4 font-grotesk text-[11.5px] uppercase tracking-[0.18em] text-[#17140f] transition-colors duration-300 hover:border-[#b06a35] hover:text-[#b06a35]",
                                            children: c.y7
                                        })]
                                    })
                                })]
                            }), (0, s.jsx)(l.Reveal, {
                                delay: .12,
                                children: (0, s.jsx)("div", {
                                    className: "relative aspect-[16/11] w-full overflow-hidden border border-[#17140f]/12",
                                    children: (0, s.jsx)("iframe", {
                                        src: "https://maps.google.com/maps?q=Kukreja+House,+Civil+Lines,+Nagpur&z=16&output=embed",
                                        title: "Map showing Kukreja House, Museum Road, Civil Lines, Nagpur",
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade",
                                        className: "absolute inset-0 h-full w-full",
                                        style: {
                                            border: 0
                                        }
                                    })
                                })
                            })]
                        })
                    })
                })
            }

            function j() {
                return (0, s.jsxs)("section", {
                    className: "relative overflow-hidden bg-[#14110c] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16",
                    children: [(0, s.jsx)(a.default, {
                        src: "/showcase/paris-city.webp",
                        alt: "",
                        fill: !0,
                        sizes: "100vw",
                        loading: "eager",
                        className: "object-cover opacity-30"
                    }), (0, s.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#14110c] via-[#14110c]/88 to-[#14110c]/55"
                    }), (0, s.jsxs)("div", {
                        className: "relative mx-auto grid max-w-[1640px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(l.RevealText, {
                                text: "Book a Private Tour.",
                                className: "font-grotesk text-[clamp(1.78rem,3.91vw,3.23rem)] font-normal uppercase leading-[0.99] tracking-tight text-white"
                            }), (0, s.jsx)(l.Reveal, {
                                delay: .12,
                                children: (0, s.jsx)("p", {
                                    className: "mt-7 max-w-xl font-hanken text-[16px] font-light leading-relaxed text-white/75 md:text-[18px]",
                                    children: "Specify your project of interest and preferred schedule. Our team will meet you on site to guide you through our completed sample apartments and experience centres."
                                })
                            }), (0, s.jsx)(l.Reveal, {
                                delay: .2,
                                children: (0, s.jsxs)("div", {
                                    className: "mt-10 flex flex-wrap items-center gap-4",
                                    children: [(0, s.jsxs)(n.Link, {
                                        href: "/projects",
                                        className: "group inline-flex bg-white px-8 py-4 font-grotesk text-[11.5px] uppercase tracking-[0.18em] text-[#17140f] transition-colors duration-300 hover:bg-[#e0a456] items-center gap-3",
                                        children: ["All projects", (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            className: "transition-transform duration-300 group-hover:translate-x-1",
                                            children: "→"
                                        })]
                                    }), (0, s.jsxs)("a", {
                                        href: p,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-2.5 border border-white/30 px-8 py-4 font-grotesk text-[11.5px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#e0a456] hover:text-[#e0a456]",
                                        children: [(0, s.jsx)(i.BNY, {
                                            className: "text-base",
                                            "aria-hidden": !0
                                        }), "WhatsApp us"]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(l.Reveal, {
                            delay: .16,
                            children: (0, s.jsxs)("div", {
                                className: "border border-white/15 bg-[#1d1811]/85 p-7 backdrop-blur-md md:p-8",
                                children: [(0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em]",
                                    style: {
                                        color: d
                                    },
                                    children: "Kukreja House"
                                }), (0, s.jsx)("p", {
                                    className: "mt-4 font-hanken text-[16px] leading-relaxed text-white/80",
                                    children: c.GH
                                }), (0, s.jsxs)("div", {
                                    className: "mt-6 space-y-3 border-t border-white/12 pt-6",
                                    children: [(0, s.jsx)("a", {
                                        href: c.nJ,
                                        className: "block font-grotesk text-[18px] font-semibold tracking-tight text-white transition-colors hover:text-[#e0a456]",
                                        children: c.y7
                                    }), (0, s.jsx)("a", {
                                        href: c.nF,
                                        className: "block font-hanken text-[16px] text-white/75 transition-colors hover:text-[#e0a456]",
                                        children: c.Tm
                                    }), (0, s.jsx)("p", {
                                        className: "font-hanken text-[15px] text-white/55",
                                        children: m
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4506, 5592, 7970, 8173, 4881, 1478, 5415, 5542, 522, 8441, 1517, 7358], () => t(6233)), _N_E = e.O()
    }
]);