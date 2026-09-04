(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4759], {
        3740: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 9573)), Promise.resolve().then(a.bind(a, 1663)), Promise.resolve().then(a.bind(a, 2947)), Promise.resolve().then(a.bind(a, 1640)), Promise.resolve().then(a.bind(a, 1855)), Promise.resolve().then(a.bind(a, 2015))
        },
        193: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ky: () => s
            });
            var r = a(5155);
            a(2115);
            let s = e => (0, r.jsxs)("svg", {
                width: e.size || 24,
                height: e.size || 24,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: [(0, r.jsx)("path", {
                    d: "M12 3l8 6v12h-6v-6h-4v6H4V9l8-6z"
                }), (0, r.jsx)("path", {
                    d: "M8 12h8v1H8zM10 14h4v1h-4z"
                }), (0, r.jsx)("circle", {
                    cx: "11",
                    cy: "16",
                    r: "0.5"
                }), (0, r.jsx)("path", {
                    d: "M6 8h12v2H6z"
                }), (0, r.jsx)("path", {
                    d: "M8 6h8v1H8z"
                })]
            })
        },
        8991: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => c
            });
            var r = a(5155),
                s = a(2115),
                n = a(522);
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
            var o = a(9301);

            function c(e) {
                var t, a;
                let {
                    slug: c,
                    propertyTitle: d,
                    className: m,
                    label: p = "Download brochure"
                } = e, [h, x] = (0, s.useState)(!1), [u, f] = (0, s.useState)(!1);
                if ((0, s.useEffect)(() => {
                        try {
                            "1" === window.localStorage.getItem(l) && x(!0)
                        } catch (e) {}
                    }, []), (0, s.useEffect)(() => {
                        if (!u) return;
                        let e = document.body.style.overflow;
                        document.body.style.overflow = "hidden";
                        let t = e => "Escape" === e.key && f(!1);
                        return window.addEventListener("keydown", t), () => {
                            document.body.style.overflow = e, window.removeEventListener("keydown", t)
                        }
                    }, [u]), !Object.prototype.hasOwnProperty.call(i, c)) return null;
                let g = null !== (a = null != d ? d : null === (t = (0, o.Vj)(c)) || void 0 === t ? void 0 : t.name) && void 0 !== a ? a : "this project",
                    v = "/api/brochure/".concat(c);
                return (0, r.jsxs)(r.Fragment, {
                    children: [h ? (0, r.jsx)("a", {
                        href: v,
                        className: m,
                        children: p
                    }) : (0, r.jsx)("button", {
                        type: "button",
                        onClick: () => f(!0),
                        className: m,
                        children: p
                    }), u && (0, r.jsx)("div", {
                        className: "fixed inset-0 z-[120] flex items-center justify-center bg-[#14110c]/80 p-4 backdrop-blur-sm",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "".concat(g, " brochure"),
                        onClick: e => e.target === e.currentTarget && f(!1),
                        children: (0, r.jsxs)("div", {
                            className: "relative max-h-[92vh] w-full max-w-md overflow-y-auto bg-[#17140f] px-7 py-9 md:px-9",
                            children: [(0, r.jsx)("button", {
                                type: "button",
                                onClick: () => f(!1),
                                "aria-label": "Close",
                                className: "absolute right-5 top-5 cursor-pointer text-2xl font-light leading-none text-white/50 transition-colors hover:text-white",
                                children: "\xd7"
                            }), (0, r.jsx)("h3", {
                                className: "font-grotesk text-[22px] font-semibold uppercase leading-tight tracking-tight text-white",
                                children: "Get the brochure"
                            }), (0, r.jsx)("div", {
                                className: "mt-7",
                                children: (0, r.jsx)(n.default, {
                                    propertyTitle: g,
                                    propertyId: c,
                                    enquiryType: "brochure",
                                    buttonLabel: "Get the brochure",
                                    onSuccess: () => {
                                        try {
                                            window.localStorage.setItem(l, "1")
                                        } catch (e) {}
                                        x(!0), f(!1), window.location.href = v
                                    }
                                })
                            })]
                        })
                    })]
                })
            }
        },
        9681: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var r = a(5155),
                s = a(1481),
                n = a(8991);

            function i(e) {
                let {
                    brochure: t,
                    enquireLabel: a = "Enquire now"
                } = e;
                return (0, r.jsxs)("div", {
                    className: "mt-10 flex flex-wrap items-center gap-4",
                    children: [(0, r.jsxs)("button", {
                        type: "button",
                        onClick: () => {
                            let e = document.getElementById("enquire");
                            if (!e) {
                                window.location.href = s.nJ;
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
                        children: [a, (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: "h-px w-5 bg-current transition-all duration-300 group-hover:w-8"
                        })]
                    }), t && (0, r.jsx)(n.A, {
                        slug: t,
                        className: "inline-flex cursor-pointer items-center border border-white/35 px-8 py-4 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#e0a456] hover:text-[#e0a456]"
                    })]
                })
            }
        },
        2947: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => i
            });
            var r = a(5155),
                s = a(2115),
                n = a(1481);

            function i(e) {
                let {
                    project: t
                } = e, [a, i] = (0, s.useState)(!1);
                (0, s.useEffect)(() => {
                    let e = () => i(window.scrollY > .7 * window.innerHeight);
                    return e(), window.addEventListener("scroll", e, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", e)
                }, []);
                let c = (0, n.E7)(t);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("a", {
                        href: c,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Chat on WhatsApp",
                        className: "fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 md:flex ".concat(a ? "opacity-100" : "pointer-events-none opacity-0"),
                        children: (0, r.jsx)(l, {
                            size: 28
                        })
                    }), (0, r.jsxs)("div", {
                        className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#14110c]/95 backdrop-blur-md md:hidden",
                        style: {
                            paddingBottom: "env(safe-area-inset-bottom)"
                        },
                        children: [(0, r.jsxs)("a", {
                            href: n.nJ,
                            className: "flex items-center justify-center gap-2 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-white",
                            children: [(0, r.jsx)(o, {}), " Call"]
                        }), (0, r.jsxs)("a", {
                            href: c,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 border-x border-white/10 py-4 font-grotesk text-[12px] font-semibold uppercase tracking-[0.12em] text-[#25D366]",
                            children: [(0, r.jsx)(l, {
                                size: 16
                            }), " WhatsApp"]
                        }), (0, r.jsx)("button", {
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
                return (0, r.jsxs)("svg", {
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": !0,
                    className: "text-white",
                    children: [(0, r.jsx)("path", {
                        d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                    }), (0, r.jsx)("path", {
                        d: "M12 2a10 10 0 0 0-8.62 15.06L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.02.79.8-2.94-.2-.3A8.3 8.3 0 1 1 12 20.3z"
                    })]
                })
            }

            function o() {
                return (0, r.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": !0,
                    children: (0, r.jsx)("path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    })
                })
            }
        },
        2015: (e, t, a) => {
            "use strict";
            a.d(t, {
                Arrival: () => w,
                ClubFloor: () => R,
                Faq: () => S,
                FinalCta: () => q,
                Gallery: () => A,
                Hero: () => b,
                Lobby: () => k,
                Location: () => E,
                Overview: () => y
            });
            var r = a(5155),
                s = a(5565),
                n = a(6771),
                i = a(2115),
                l = a(648),
                o = a(1536),
                c = a(193),
                d = a(3580),
                m = a(2304),
                p = a(5251),
                h = a(522),
                x = a(1481),
                u = a(9681);
            let f = "#e0a456",
                g = "#b06a35",
                v = "The One",
                j = "the-one";

            function b() {
                return (0, r.jsxs)("header", {
                    className: "relative min-h-svh overflow-hidden bg-[#14110c]",
                    children: [(0, r.jsxs)("div", {
                        className: "absolute inset-x-0 top-0 h-svh overflow-hidden",
                        children: [(0, r.jsx)(s.default, {
                            src: "/the-one/main.webp",
                            alt: "The One, Civil Lines, Nagpur, exterior render",
                            fill: !0,
                            priority: !0,
                            sizes: "100vw",
                            className: "object-cover object-[center_42%]"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0",
                            style: {
                                background: "linear-gradient(100deg, rgba(20,17,12,.94) 0%, rgba(20,17,12,.7) 40%, rgba(20,17,12,.28) 68%, rgba(20,17,12,.5) 100%), linear-gradient(to bottom, rgba(20,17,12,.62) 0%, rgba(20,17,12,.12) 32%, rgba(20,17,12,.45) 70%, rgba(20,17,12,.96) 100%)"
                            }
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "relative z-10 mx-auto flex min-h-svh max-w-[1640px] flex-col justify-end px-6 pb-28 pt-32 md:flex-row md:items-center md:justify-between md:gap-14 md:px-10 md:pb-32 lg:px-14",
                        children: [(0, r.jsxs)("div", {
                            className: "max-w-2xl",
                            children: [(0, r.jsx)(d.Reveal, {
                                y: 16,
                                children: (0, r.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: f
                                    },
                                    children: "Civil Lines, Nagpur"
                                })
                            }), (0, r.jsxs)("h1", {
                                className: "mt-5 font-grotesk text-[clamp(1.95rem,4.76vw,3.91rem)] font-normal uppercase leading-[1.05] tracking-tight text-white",
                                children: [(0, r.jsx)(d.Reveal, {
                                    y: 30,
                                    delay: .08,
                                    children: (0, r.jsx)("span", {
                                        className: "block",
                                        children: "Crafted for the"
                                    })
                                }), (0, r.jsx)(d.Reveal, {
                                    y: 30,
                                    delay: .17,
                                    children: (0, r.jsx)("span", {
                                        className: "block",
                                        children: (0, r.jsx)("span", {
                                            className: "font-cormorant lowercase",
                                            style: {
                                                color: f,
                                                fontStyle: "italic",
                                                textTransform: "none",
                                                fontSize: "1.08em",
                                                letterSpacing: "normal",
                                                marginInline: "0.02em"
                                            },
                                            children: "select few."
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(u.A, {
                                brochure: j
                            })]
                        }), (0, r.jsx)(d.Reveal, {
                            y: 24,
                            delay: .3,
                            className: "mt-10 shrink-0 md:mt-0",
                            children: (0, r.jsxs)("div", {
                                id: "enquire",
                                className: "w-full max-w-md scroll-mt-28 border border-white/15 bg-[#1d1811]/85 p-6 backdrop-blur-md md:w-[400px] md:p-8",
                                children: [(0, r.jsx)("h2", {
                                    className: "font-grotesk text-[24px] font-semibold uppercase leading-tight tracking-tight text-white md:text-[26px]",
                                    children: "Enquire about The One"
                                }), (0, r.jsx)("p", {
                                    className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-white/65",
                                    children: "Leave your number and our team will call you back to arrange a private viewing."
                                }), (0, r.jsx)(h.default, {
                                    propertyTitle: v,
                                    propertyId: "8",
                                    buttonLabel: "Submit Interest",
                                    variant: "dark"
                                })]
                            })
                        })]
                    })]
                })
            }

            function y() {
                return (0, r.jsx)("section", {
                    className: "bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20",
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(d.Reveal, {
                                children: (0, r.jsxs)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: g
                                    },
                                    children: [(0, r.jsx)("span", {
                                        className: "mr-3 opacity-60",
                                        children: "01"
                                    }), " The Project"]
                                })
                            }), (0, r.jsx)(d.RevealText, {
                                text: "The Epitome\nof Luxury.",
                                className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                            }), (0, r.jsxs)(p.A, {
                                className: "mt-6 max-w-xl",
                                fadeFrom: "from-white",
                                collapsedLines: 5,
                                children: [(0, r.jsx)(d.Reveal, {
                                    delay: .1,
                                    children: (0, r.jsx)("p", {
                                        className: "font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                        children: "Situated in Nagpur’s premier residential neighbourhood, this exclusive tower offers expansive 5 BHK residences, duplexes, and a sky penthouse designed for complete privacy, luxury, and comfort."
                                    })
                                }), (0, r.jsx)(d.Reveal, {
                                    delay: .22,
                                    children: (0, r.jsx)("ul", {
                                        className: "mt-9 space-y-3",
                                        children: ["Prime Location: Positioned in Civil Lines, Nagpur’s most established and sought-after residential address.", "Expansive Residences: Offers 5 BHK apartments, multi-level duplexes, and a penthouse layout.", "Spacious Floor Plans: Standard floors feature five bedrooms and two private terraces for outdoor space.", "Exclusive Amenities: Includes a dedicated club floor featuring a private walking track."].map(e => (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3 font-hanken text-[16px] text-[#2e2a24] md:text-[17px]",
                                            children: [(0, r.jsx)("span", {
                                                className: "mt-2 inline-block h-1.5 w-1.5 shrink-0 rotate-45",
                                                style: {
                                                    background: f
                                                }
                                            }), e]
                                        }, e))
                                    })
                                })]
                            })]
                        }), (0, r.jsx)(d.Reveal, {
                            delay: .12,
                            children: (0, r.jsx)(m.default, {
                                aspect: "aspect-[4/5]",
                                src: "/the-one/14.jpg",
                                alt: "The One, Civil Lines, Nagpur, artist's impression",
                                objectPosition: "50% 45%",
                                sizes: "(max-width:1024px) 100vw, 50vw"
                            })
                        })]
                    })
                })
            }

            function w() {
                return (0, r.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-2 lg:gap-20",
                        children: [(0, r.jsx)(d.Reveal, {
                            delay: .1,
                            children: (0, r.jsx)(m.default, {
                                aspect: "aspect-[3/2]",
                                src: "/the-one/1.jpg",
                                alt: "The grand arrival at The One, artist's impression",
                                sizes: "(max-width:1024px) 100vw, 50vw"
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(d.Reveal, {
                                children: (0, r.jsxs)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: g
                                    },
                                    children: [(0, r.jsx)("span", {
                                        className: "mr-3 opacity-60",
                                        children: "02"
                                    }), " The Arrival"]
                                })
                            }), (0, r.jsx)(d.RevealText, {
                                text: "A Grand\nArrival.",
                                className: "mt-5 font-grotesk text-[clamp(1.61rem,3.23vw,2.63rem)] font-normal uppercase leading-[1.02] tracking-tight text-[#17140f]"
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .12,
                                children: (0, r.jsx)("p", {
                                    className: "mt-6 max-w-xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                    children: "Framed by a striking entry facade, the grand arrival plaza serves as the open-air foyer to the estate. It offers a quiet, elegant transition from the surrounding Civil Lines neighbourhood into an exclusive residential sanctuary."
                                })
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .22,
                                children: (0, r.jsx)("p", {
                                    className: "mt-9 max-w-xl border-l-2 pl-6 font-cormorant text-[clamp(1.2rem,1.9vw,1.6rem)] italic leading-snug text-[#2e2a24]",
                                    style: {
                                        borderColor: f
                                    },
                                    children: "“Kukreja The One offers a residence crafted to transcend your highest expectations.”"
                                })
                            })]
                        })]
                    })
                })
            }

            function k() {
                return (0, r.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-2 lg:gap-20 lg:[&>*:first-child]:order-2",
                        children: [(0, r.jsx)(d.Reveal, {
                            delay: .1,
                            children: (0, r.jsx)(m.default, {
                                aspect: "aspect-[3/2]",
                                src: "/the-one/8.jpg",
                                alt: "Lobby at The One, artist's impression",
                                sizes: "(max-width:1024px) 100vw, 50vw"
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(d.Reveal, {
                                children: (0, r.jsxs)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: g
                                    },
                                    children: [(0, r.jsx)("span", {
                                        className: "mr-3 opacity-60",
                                        children: "03"
                                    }), " The Lobby"]
                                })
                            }), (0, r.jsx)(d.RevealText, {
                                text: "An Entrance of\nInfinite Stature.",
                                className: "mt-5 font-grotesk text-[clamp(1.61rem,3.23vw,2.63rem)] font-normal uppercase leading-[1.02] tracking-tight"
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .12,
                                children: (0, r.jsx)("p", {
                                    className: "mt-6 max-w-xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                    children: "Step inside to a soaring double-height lobby designed to make an immediate impression. The vertical openness creates a natural sense of space and light, welcoming residents and guests with a quiet elegance that previews the luxury across every floor above."
                                })
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .2,
                                children: (0, r.jsx)("div", {
                                    className: "mt-10 grid grid-cols-2 gap-4",
                                    children: [
                                        ["/the-one/6.jpg", "Lift lobby at The One, artist's impression", "3/2"],
                                        ["/the-one/5.jpg", "The One, exterior, artist's impression", "5/6"]
                                    ].map(e => {
                                        let [t, a, n] = e;
                                        return (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("div", {
                                                className: "relative w-full overflow-hidden bg-[#e7e4df]",
                                                style: {
                                                    aspectRatio: n.replace("/", " / ")
                                                },
                                                children: (0, r.jsx)(s.default, {
                                                    src: t,
                                                    alt: a,
                                                    fill: !0,
                                                    sizes: "(max-width:1024px) 50vw, 25vw",
                                                    className: "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                                                })
                                            }), (0, r.jsx)("p", {
                                                className: "mt-2.5 font-grotesk text-[10.5px] uppercase tracking-[0.18em] text-[#17140f]/45",
                                                children: a
                                            })]
                                        }, t)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            let N = [
                ["/the-one/13.jpg", "Swimming Pool"],
                ["/the-one/9.jpg", "Theatre"],
                ["/the-one/2.jpg", "Gymnasium"]
            ];

            function R() {
                return (0, r.jsx)("section", {
                    className: "relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "relative mx-auto max-w-[1640px]",
                        children: [(0, r.jsx)(d.Reveal, {
                            children: (0, r.jsxs)("p", {
                                className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                style: {
                                    color: g
                                },
                                children: [(0, r.jsx)("span", {
                                    className: "mr-3 opacity-60",
                                    children: "04"
                                }), " The Club Floor"]
                            })
                        }), (0, r.jsx)(d.RevealText, {
                            text: "A Private\nSanctuary.",
                            className: "mt-5 max-w-3xl font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight text-[#17140f]"
                        }), (0, r.jsx)("div", {
                            className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: N.map((e, t) => {
                                let [a, n] = e;
                                return (0, r.jsx)(d.Reveal, {
                                    delay: Math.min(.07 * t, .3),
                                    children: (0, r.jsxs)("div", {
                                        className: "group h-full",
                                        children: [(0, r.jsx)("div", {
                                            className: "relative aspect-[16/9] w-full overflow-hidden bg-[#f5f4f2]",
                                            children: (0, r.jsx)(s.default, {
                                                src: a,
                                                alt: "".concat(n, " at The One, artist's impression"),
                                                fill: !0,
                                                sizes: "(max-width:640px) 100vw, 25vw",
                                                className: "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                                            })
                                        }), (0, r.jsx)("h3", {
                                            className: "mt-5 font-grotesk text-[19px] font-semibold uppercase tracking-tight text-[#17140f]",
                                            children: n
                                        })]
                                    })
                                }, n)
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-14 grid grid-cols-2 border-l border-t border-[#e6e2d9] sm:grid-cols-3",
                            children: T.map((e, t) => {
                                let a = e.icon;
                                return (0, r.jsx)(d.Reveal, {
                                    delay: Math.min(.06 * t, .24),
                                    className: "border-b border-r border-[#e6e2d9]",
                                    children: (0, r.jsxs)("div", {
                                        className: "group flex h-full flex-col items-center justify-center gap-2.5 bg-white px-3 py-5 text-center md:gap-4 md:px-4 md:py-11 transition-colors duration-300 hover:bg-[#f5f4f2]",
                                        children: [(0, r.jsx)(a, {
                                            size: 28,
                                            color: f,
                                            "aria-hidden": !0,
                                            className: "transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
                                        }), (0, r.jsx)("span", {
                                            className: "font-grotesk text-[12.5px] uppercase tracking-[0.14em] text-[#2e2a24] transition-colors duration-300 group-hover:text-[#b06a35]",
                                            children: e.name
                                        })]
                                    })
                                }, e.name)
                            })
                        }), (0, r.jsx)(d.Reveal, {
                            delay: .2,
                            children: (0, r.jsx)("p", {
                                className: "mt-10 font-hanken text-[11px] uppercase tracking-[0.2em] text-[#17140f]/45",
                                children: "All visuals on this page are artist's impressions. Layouts, finishes and furniture may vary."
                            })
                        })]
                    })
                })
            }
            let T = [{
                    icon: o.$yU,
                    name: "Walking Track"
                }, {
                    icon: l.us9,
                    name: "Squash Court"
                }, {
                    icon: l.E$6,
                    name: "Grand Banquet Hall"
                }, {
                    icon: l.tNJ,
                    name: "Games Room"
                }, {
                    icon: l.VKs,
                    name: "Kids Play Area"
                }, {
                    icon: l.yrZ,
                    name: "Clubhouse"
                }, {
                    icon: l.i4,
                    name: "Feature / Sculpture Garden"
                }, {
                    icon: l.NtI,
                    name: "Cafeteria"
                }, {
                    icon: l.mzq,
                    name: "Guest Suites"
                }, {
                    icon: c.Ky,
                    name: "Entrance Lobby"
                }],
                C = [{
                    src: "/the-one/5.jpg",
                    r: .834
                }, {
                    src: "/the-one/8.jpg",
                    r: 1.501
                }, {
                    src: "/the-one/13.jpg",
                    r: 1.778
                }, {
                    src: "/the-one/7.jpg",
                    r: 1.778
                }, {
                    src: "/the-one/3.jpg",
                    r: 1.8
                }, {
                    src: "/the-one/6.jpg",
                    r: 1.501
                }, {
                    src: "/the-one/11.jpg",
                    r: 1.799
                }, {
                    src: "/the-one/4.jpg",
                    r: .834
                }, {
                    src: "/the-one/12.jpg",
                    r: 1.799
                }, {
                    src: "/the-one/1.jpg",
                    r: 1.499
                }, {
                    src: "/the-one/9.jpg",
                    r: 1.778
                }, {
                    src: "/the-one/10.jpg",
                    r: 1.799
                }, {
                    src: "/the-one/2.jpg",
                    r: 1.8
                }, {
                    src: "/the-one/14.jpg",
                    r: .834
                }];

            function A() {
                let {
                    open: e
                } = (0, n.$)(), t = C.map((e, t) => ({
                    src: e.src,
                    alt: "The One project visual ".concat(t + 1)
                })), a = [...C, ...C];
                return (0, r.jsxs)("section", {
                    "aria-label": "Gallery",
                    className: "overflow-hidden bg-[#f5f4f2] py-14 md:py-32",
                    children: [(0, r.jsx)("div", {
                        className: "mx-auto max-w-[1640px] px-6 md:px-12 lg:px-16",
                        children: (0, r.jsx)(d.RevealText, {
                            text: "Explore The One.",
                            className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        })
                    }), (0, r.jsx)("div", {
                        className: "mt-8 md:mt-14 flex w-max animate-[site-marquee_70s_linear_infinite] gap-5 hover:[animation-play-state:paused]",
                        children: a.map((a, n) => (0, r.jsx)("button", {
                            type: "button",
                            onClick: () => e(t, n % t.length),
                            "aria-label": "Enlarge image",
                            className: "relative h-56 w-auto shrink-0 cursor-zoom-in overflow-hidden md:h-[46vh] md:min-h-[280px]",
                            style: {
                                aspectRatio: String(a.r)
                            },
                            children: (0, r.jsx)(s.default, {
                                src: a.src,
                                alt: "The One project visual ".concat(n % C.length + 1),
                                fill: !0,
                                sizes: "(max-width:768px) 70vw, 30vw",
                                loading: "eager",
                                className: "object-cover"
                            })
                        }, "".concat(a.src, "-").concat(n)))
                    }), (0, r.jsx)("p", {
                        className: "mt-6 text-center font-hanken text-[11px] uppercase tracking-[0.2em] text-[#17140f]/40",
                        children: "All images are artist's impressions"
                    })]
                })
            }

            function E() {
                return (0, r.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsx)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: (0, r.jsxs)("div", {
                            className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
                            children: [(0, r.jsxs)("div", {
                                children: [(0, r.jsx)(d.Reveal, {
                                    children: (0, r.jsxs)("p", {
                                        className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                        style: {
                                            color: g
                                        },
                                        children: [(0, r.jsx)("span", {
                                            className: "mr-3 opacity-60",
                                            children: "05"
                                        }), " The Location"]
                                    })
                                }), (0, r.jsx)(d.RevealText, {
                                    text: "The most coveted\npart of the city.",
                                    className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                                }), (0, r.jsx)(d.Reveal, {
                                    delay: .12,
                                    children: (0, r.jsx)("p", {
                                        className: "mt-6 max-w-xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                        children: "The One stands majestically in the most coveted part of the city. Civil Lines is one of the most affluent residential neighbourhoods in Nagpur."
                                    })
                                }), (0, r.jsx)(d.Reveal, {
                                    delay: .18,
                                    children: (0, r.jsx)("p", {
                                        className: "mt-8 border-l-2 pl-5 font-hanken text-[16px] leading-relaxed text-[#2e2a24]",
                                        style: {
                                            borderColor: g
                                        },
                                        children: "The One, Civil Lines, Nagpur, Maharashtra 440001"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                children: (0, r.jsx)(d.Reveal, {
                                    delay: .12,
                                    children: (0, r.jsx)("div", {
                                        className: "relative aspect-[16/10] w-full overflow-hidden border border-[#e6e2d9]",
                                        children: (0, r.jsx)("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.82578000003!2d79.0882!3d21.1619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37b06b0e6798e!2sCivil%20Lines%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin",
                                            title: "Map of Civil Lines, Nagpur",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            className: "absolute inset-0 h-full w-full",
                                            style: {
                                                border: 0
                                            }
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            let z = [{
                    q: "Is The One RERA registered, and how can I verify it?",
                    a: "Yes. The project is fully registered under MahaRERA No. P50500052313. You can verify approved layout plans, statutory clearances, and declared timelines directly on the MahaRERA portal (maharera.maharashtra.gov.in)."
                }, {
                    q: "What is the current status of construction?",
                    a: "Construction is actively underway on site. Detailed quarterly progress reports are updated on the MahaRERA portal, and we welcome buyers to schedule a site walk to inspect the progress in person."
                }, {
                    q: "What is the committed possession date?",
                    a: "The handover date is contractually defined in your legal Agreement for Sale and mirrored in our MahaRERA filing. All terms regarding timelines, interest clauses, and possession conditions are clearly outlined in the agreement prior to signing."
                }, {
                    q: "Will possession be offered before the Occupancy Certificate (OC) is issued?",
                    a: "No. Handover occurs only after the formal Occupancy Certificate is issued by local authorities. We do not offer temporary or “fit-out” possession without complete legal clearance."
                }, {
                    q: "How is the residence area measured and quoted?",
                    a: "All pricing and legal contracts are based strictly on net usable carpet area, in full compliance with RERA standards. While architectural floor plates may reflect broader structural dimensions, your specific unit agreement details the exact internal carpet area down to the square foot."
                }, {
                    q: "Who will manage the property post-handover?",
                    a: "Property management is handed over to a legally constituted Co-operative Housing Society / Association of Buyers. As mandated by law, Kukreja Infrastructures facilitates the formation of this body and executes the formal conveyance deed for all common areas."
                }, {
                    q: "Do the rendered visuals represent the exact final delivery?",
                    a: "Renders and walkthroughs are architectural representations intended to showcase layout potential and design intent. The precise material specifications, fittings, and structural commitments are explicitly detailed in the schedule attached to your registered agreement."
                }, {
                    q: "How can I review detailed floor plans or book a site visit?",
                    a: "Our typical layouts feature expansive 5-bedroom residences with private terraces, dedicated mandir spaces, and dual staff quarters. To review floor plans or schedule a private site walkthrough, call +91 78880 12200 or submit an enquiry on this page."
                }],
                L = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: z.map(e => ({
                        "@type": "Question",
                        name: e.q,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: e.a
                        }
                    }))
                };

            function S() {
                let [e, t] = (0, i.useState)(0);
                return (0, r.jsxs)("section", {
                    className: "bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: [(0, r.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(L)
                        }
                    }), (0, r.jsxs)("div", {
                        className: "mx-auto max-w-4xl",
                        children: [(0, r.jsx)(d.RevealText, {
                            text: "Questions, answered.",
                            className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        }), (0, r.jsx)("div", {
                            className: "mt-12 border-t border-[#e6e2d9]",
                            children: z.map((a, s) => {
                                let n = e === s;
                                return (0, r.jsxs)("div", {
                                    className: "border-b border-[#e6e2d9]",
                                    children: [(0, r.jsxs)("button", {
                                        type: "button",
                                        onClick: () => t(n ? null : s),
                                        "aria-expanded": n,
                                        className: "flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left",
                                        children: [(0, r.jsx)("span", {
                                            className: "font-grotesk text-[clamp(1rem,1.5vw,1.2rem)] font-medium uppercase tracking-tight text-[#17140f]",
                                            children: a.q
                                        }), (0, r.jsx)("span", {
                                            "aria-hidden": !0,
                                            className: "mt-1 shrink-0 text-[22px] leading-none transition-transform duration-500",
                                            style: {
                                                color: g,
                                                transform: n ? "rotate(45deg)" : "none"
                                            },
                                            children: "+"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                        style: {
                                            gridTemplateRows: n ? "1fr" : "0fr",
                                            opacity: n ? 1 : 0
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: "overflow-hidden",
                                            children: (0, r.jsx)("p", {
                                                className: "pb-7 pr-10 font-hanken text-[16px] leading-relaxed text-[#57534d] md:text-[17px]",
                                                children: a.a
                                            })
                                        })
                                    })]
                                }, a.q)
                            })
                        })]
                    })]
                })
            }

            function q() {
                return (0, r.jsx)("section", {
                    id: "enquire-footer",
                    className: "relative overflow-hidden border-t border-[#17140f]/10 bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, r.jsxs)("div", {
                        className: "relative mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(d.RevealText, {
                                text: "Schedule a\nSite Visit.",
                                className: "font-grotesk text-[clamp(1.78rem,3.91vw,3.23rem)] font-normal uppercase leading-[0.99] tracking-tight text-[#17140f]"
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .12,
                                children: (0, r.jsx)("p", {
                                    className: "mt-7 max-w-xl font-hanken text-[clamp(1rem,1.4vw,1.2rem)] font-light leading-relaxed text-[#2e2a24]",
                                    children: "Experience Kukreja The One in person. Select a convenient date and time for a private walkthrough of the tower and a room-by-room review of the available floor plans with our sales team."
                                })
                            }), (0, r.jsx)(d.Reveal, {
                                delay: .2,
                                children: (0, r.jsxs)("div", {
                                    className: "mt-10",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-wrap items-center gap-5",
                                        children: [(0, r.jsx)("a", {
                                            href: x.nJ,
                                            className: "font-grotesk text-[clamp(0.94rem,1.53vw,1.27rem)] font-normal tracking-tight text-[#17140f] transition-colors hover:text-[#e0a456]",
                                            children: x.y7
                                        }), (0, r.jsx)("a", {
                                            href: j,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "border border-[#17140f]/25 px-6 py-3 font-grotesk text-[11.5px] uppercase tracking-[0.16em] text-[#17140f] transition-colors duration-300 hover:border-[#e0a456] hover:text-[#e0a456]",
                                            children: "Download the brochure"
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "mt-4 font-hanken text-[11px] tracking-wide text-[#17140f]/45",
                                        children: ["MahaRERA Reg. No.: ", "P50500052313", " \xb7 maharera.maharashtra.gov.in"]
                                    })]
                                })
                            })]
                        }), (0, r.jsx)(d.Reveal, {
                            delay: .16,
                            children: (0, r.jsxs)("div", {
                                className: "border border-[#e6e2d9] bg-white p-7 backdrop-blur-md md:p-8",
                                children: [(0, r.jsx)("h3", {
                                    className: "font-grotesk text-[22px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                    children: "Schedule a Site Visit"
                                }), (0, r.jsx)("p", {
                                    className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-[#57534d]",
                                    children: "Tell us when suits you. Our team will call to confirm."
                                }), (0, r.jsx)(h.default, {
                                    propertyTitle: v,
                                    propertyId: "8",
                                    buttonLabel: "Submit Interest",
                                    variant: "light"
                                })]
                            })
                        })]
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4506, 5592, 5479, 6711, 7970, 8173, 4881, 1478, 5415, 5542, 522, 9202, 8441, 1517, 7358], () => t(3740)), _N_E = e.O()
    }
]);