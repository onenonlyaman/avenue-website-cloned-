"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6155], {
        8991: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(5155),
                a = r(2115),
                o = r(522);
            let s = {
                    "paris-city": "Kukreja-Paris-City-Brochure.pdf",
                    "embassy-2": "Kukreja-Embassy-II-Brochure.pdf",
                    "the-one": "Kukreja-The-One-Brochure.pdf",
                    "business-park": "Kukreja-Business-Park-Brochure.pdf",
                    "infinity-east": "Kukreja-Infinity-East-Brochure.pdf",
                    "kukreja-infinity": "Kukreja-Infinity-Brochure.pdf",
                    "west-19": "Kukreja-West-19-Brochure.pdf"
                },
                i = "kukreja:lead";
            var l = r(9301);

            function c(e) {
                var t, r;
                let {
                    slug: c,
                    propertyTitle: d,
                    className: h,
                    label: u = "Download brochure"
                } = e, [x, p] = (0, a.useState)(!1), [m, f] = (0, a.useState)(!1);
                if ((0, a.useEffect)(() => {
                        try {
                            "1" === window.localStorage.getItem(i) && p(!0)
                        } catch (e) {}
                    }, []), (0, a.useEffect)(() => {
                        if (!m) return;
                        let e = document.body.style.overflow;
                        document.body.style.overflow = "hidden";
                        let t = e => "Escape" === e.key && f(!1);
                        return window.addEventListener("keydown", t), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t)
                        }
                    }, [m]), !Object.prototype.hasOwnProperty.call(s, c)) return null;
                let b = null !== (r = null != d ? d : null === (t = (0, l.Vj)(c)) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : "this project",
                    g = "/api/brochure/".concat(c);
                return (0, n.jsxs)(n.Fragment, {
                    children: [x ? (0, n.jsx)("a", {
                        href: g,
                        className: h,
                        children: u
                    }) : (0, n.jsx)("button", {
                        type: "button",
                        onClick: () => f(!0),
                        className: h,
                        children: u
                    }), m && (0, n.jsx)("div", {
                        className: "fixed inset-0 z-[120] flex items-center justify-center bg-[#14110c]/80 p-4 backdrop-blur-sm",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "".concat(b, " brochure"),
                        onClick: e => e.target === e.currentTarget && f(!1),
                        children: (0, n.jsxs)("div", {
                            className: "relative max-h-[92vh] w-full max-w-md overflow-y-auto bg-[#17140f] px-7 py-9 md:px-9",
                            children: [(0, n.jsx)("button", {
                                type: "button",
                                onClick: () => f(!1),
                                "aria-label": "Close",
                                className: "absolute right-5 top-5 cursor-pointer text-2xl font-light leading-none text-white/50 transition-colors hover:text-white",
                                children: "\xd7"
                            }), (0, n.jsx)("h3", {
                                className: "font-grotesk text-[22px] font-semibold uppercase leading-tight tracking-tight text-white",
                                children: "Get the brochure"
                            }), (0, n.jsx)("div", {
                                className: "mt-7",
                                children: (0, n.jsx)(o.default, {
                                    propertyTitle: b,
                                    propertyId: c,
                                    enquiryType: "brochure",
                                    buttonLabel: "Get the brochure",
                                    onSuccess: () => {
                                        try {
                                            window.localStorage.setItem(i, "1")
                                        } catch (e) {}
                                        p(!0), f(!1), window.location.href = g
                                    }
                                })
                            })]
                        })
                    })]
                })
            }
        },
        2793: (e, t, r) => {
            r.d(t, {
                default: () => l
            });
            var n = r(5155),
                a = r(5565),
                o = r(2115),
                s = r(3580),
                i = r(522);

            function l(e) {
                let {
                    propertyTitle: t,
                    propertyId: r,
                    index: l,
                    eyebrow: d = "Plans",
                    heading: h,
                    intro: u,
                    tabs: x,
                    lockTitle: p = "Floor plans on request",
                    lockBody: m = "Share your number and our team will send the floor plans across, then take you through them.",
                    buttonLabel: f = "Unlock the plans"
                } = e, [b, g] = (0, o.useState)(!1), [w, j] = (0, o.useState)(!1), k = "kukreja:plans:".concat(r);
                if ((0, o.useEffect)(() => {
                        try {
                            "1" === window.localStorage.getItem(k) && g(!0)
                        } catch (e) {}
                    }, [k]), (0, o.useEffect)(() => {
                        if (!w) return;
                        let e = document.body.style.overflow;
                        document.body.style.overflow = "hidden";
                        let t = e => "Escape" === e.key && j(!1);
                        return window.addEventListener("keydown", t), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t)
                        }
                    }, [w]), !x.length) return null;
                let y = x.flatMap(e => e.images.map(t => ({
                        src: t.src,
                        name: t.label ? "".concat(e.name, " \xb7 ").concat(t.label) : e.name
                    }))),
                    v = b ? y : y.slice(0, 2);
                return (0, n.jsxs)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: [(0, n.jsxs)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: [(0, n.jsx)(s.Reveal, {
                            children: (0, n.jsxs)("p", {
                                className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                style: {
                                    color: "#b06a35"
                                },
                                children: [l && (0, n.jsx)("span", {
                                    className: "mr-3 opacity-60",
                                    children: l
                                }), d]
                            })
                        }), (0, n.jsx)(s.RevealText, {
                            text: h,
                            className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        }), u && (0, n.jsx)(s.Reveal, {
                            delay: .1,
                            children: (0, n.jsx)("p", {
                                className: "mt-6 max-w-2xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                children: u
                            })
                        }), (0, n.jsx)("div", {
                            className: "mt-12",
                            children: (0, n.jsx)(s.Reveal, {
                                delay: .08,
                                children: (0, n.jsxs)("div", {
                                    className: "relative border border-[#17140f]/12 bg-white",
                                    children: [(0, n.jsx)("div", {
                                        className: "grid gap-px bg-[#17140f]/8 ".concat(v.length > 1 ? "sm:grid-cols-2" : ""),
                                        children: v.map(e => (0, n.jsxs)("div", {
                                            className: "relative aspect-[16/10] max-h-[440px] bg-white",
                                            children: [(0, n.jsx)(a.default, {
                                                src: e.src,
                                                alt: b ? "".concat(t, ", ").concat(e.name) : "",
                                                fill: !0,
                                                loading: "eager",
                                                sizes: "(max-width:640px) 100vw, 45vw",
                                                className: "object-contain p-4 transition-[filter] duration-500 ".concat(b ? "" : "blur-[10px] opacity-55 saturate-50 select-none")
                                            }), b && (0, n.jsx)("span", {
                                                className: "absolute bottom-3 left-4 font-grotesk text-[10.5px] uppercase tracking-[0.2em] text-[#17140f]/45",
                                                children: e.name
                                            })]
                                        }, e.src))
                                    }), !b && (0, n.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-white/55 p-5 backdrop-blur-[3px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "max-w-sm border border-[#17140f]/10 bg-white px-7 py-8 text-center shadow-[0_24px_70px_-34px_rgba(23,20,15,0.55)]",
                                            children: [(0, n.jsx)("span", {
                                                className: "mx-auto flex h-11 w-11 items-center justify-center bg-[#17140f]",
                                                children: (0, n.jsx)(c, {})
                                            }), (0, n.jsx)("h3", {
                                                className: "mt-5 font-grotesk text-[21px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                                children: p
                                            }), (0, n.jsx)("p", {
                                                className: "mx-auto mt-3 max-w-[19rem] font-hanken text-[15px] leading-relaxed text-[#2e2a24]",
                                                children: m
                                            }), (0, n.jsx)("button", {
                                                type: "button",
                                                onClick: () => j(!0),
                                                className: "mt-6 cursor-pointer bg-[#17140f] px-7 py-3.5 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#b06a35]",
                                                children: f
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    }), w && (0, n.jsx)("div", {
                        className: "fixed inset-0 z-[120] flex items-center justify-center bg-[#14110c]/80 p-4 backdrop-blur-sm",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "".concat(t, " floor plans"),
                        onClick: e => e.target === e.currentTarget && j(!1),
                        children: (0, n.jsxs)("div", {
                            className: "relative w-full max-w-md border border-[#17140f]/10 bg-white p-7 shadow-[0_30px_80px_-30px_rgba(23,20,15,0.5)] md:p-8",
                            children: [(0, n.jsx)("button", {
                                type: "button",
                                onClick: () => j(!1),
                                "aria-label": "Close",
                                className: "absolute right-4 top-3 cursor-pointer font-grotesk text-[22px] leading-none text-[#17140f]/45 transition-colors hover:text-[#17140f]",
                                children: "\xd7"
                            }), (0, n.jsx)("h3", {
                                className: "font-grotesk text-[24px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                children: p
                            }), (0, n.jsx)("p", {
                                className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-[#57534d]",
                                children: m
                            }), (0, n.jsx)(i.default, {
                                propertyTitle: t,
                                propertyId: r,
                                enquiryType: "brochure",
                                buttonLabel: "Show me the plans",
                                variant: "light",
                                onSuccess: () => {
                                    try {
                                        window.localStorage.setItem(k, "1")
                                    } catch (e) {}
                                    g(!0), j(!1)
                                }
                            })]
                        })
                    })]
                })
            }

            function c() {
                return (0, n.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#e0a456",
                    strokeWidth: "1.9",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": !0,
                    children: [(0, n.jsx)("rect", {
                        x: "3",
                        y: "11",
                        width: "18",
                        height: "11"
                    }), (0, n.jsx)("path", {
                        d: "M7 11V7a5 5 0 0 1 10 0v4"
                    })]
                })
            }
        },
        9681: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r(5155),
                a = r(1481),
                o = r(8991);

            function s(e) {
                let {
                    brochure: t,
                    enquireLabel: r = "Enquire now"
                } = e;
                return (0, n.jsxs)("div", {
                    className: "mt-10 flex flex-wrap items-center gap-4",
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        onClick: () => {
                            let e = document.getElementById("enquire");
                            if (!e) {
                                window.location.href = a.nJ;
                                return
                            }
                            let t = window.__lenis;
                            t ? t.scrollTo(e, {
                                offset: -90
                            }) : e.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        },
                        className: "group inline-flex cursor-pointer items-center gap-3 bg-white px-8 py-4 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#17140f] transition-colors duration-300 hover:bg-[#e0a456]",
                        children: [r, (0, n.jsx)("span", {
                            "aria-hidden": !0,
                            className: "h-px w-5 bg-current transition-all duration-300 group-hover:w-8"
                        })]
                    }), t && (0, n.jsx)(o.A, {
                        slug: t,
                        className: "inline-flex cursor-pointer items-center border border-white/35 px-8 py-4 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#e0a456] hover:text-[#e0a456]"
                    })]
                })
            }
        },
        2947: (e, t, r) => {
            r.d(t, {
                default: () => s
            });
            var n = r(5155),
                a = r(2115),
                o = r(1481);

            function s(e) {
                let {
                    project: t
                } = e, [r, s] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => s(window.scrollY > .7 * window.innerHeight);
                    return e(), window.addEventListener("scroll", e, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", e)
                }, []);
                let c = (0, o.E7)(t);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("a", {
                        href: c,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Chat on WhatsApp",
                        className: "fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 md:flex ".concat(r ? "opacity-100" : "pointer-events-none opacity-0"),
                        children: (0, n.jsx)(i, {
                            size: 28
                        })
                    }), (0, n.jsxs)("div", {
                        className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#14110c]/95 backdrop-blur-md md:hidden",
                        style: {
                            paddingBottom: "env(safe-area-inset-bottom)"
                        },
                        children: [(0, n.jsxs)("a", {
                            href: o.nJ,
                            className: "flex items-center justify-center gap-2 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-white",
                            children: [(0, n.jsx)(l, {}), " Call"]
                        }), (0, n.jsxs)("a", {
                            href: c,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 border-x border-white/10 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-[#25D366]",
                            children: [(0, n.jsx)(i, {
                                size: 16
                            }), " WhatsApp"]
                        }), (0, n.jsx)("button", {
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

            function i(e) {
                let {
                    size: t
                } = e;
                return (0, n.jsxs)("svg", {
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": !0,
                    className: "text-white",
                    children: [(0, n.jsx)("path", {
                        d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                    }), (0, n.jsx)("path", {
                        d: "M12 2a10 10 0 0 0-8.62 15.06L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.02.79.8-2.94-.2-.3A8.3 8.3 0 1 1 12 20.3z"
                    })]
                })
            }

            function l() {
                return (0, n.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    })
                })
            }
        }
    }
]);