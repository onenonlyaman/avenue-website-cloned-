(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4769], {
        4746: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 9573)), Promise.resolve().then(a.bind(a, 2793)), Promise.resolve().then(a.bind(a, 1663)), Promise.resolve().then(a.bind(a, 2947)), Promise.resolve().then(a.bind(a, 1640)), Promise.resolve().then(a.bind(a, 1855)), Promise.resolve().then(a.bind(a, 4305))
        },
        4305: (e, t, a) => {
            "use strict";
            a.d(t, {
                DayInTheTower: () => u,
                Faq: () => y,
                FeatureSplit: () => j,
                FinalCta: () => R,
                GalleryMarquee: () => b,
                LocationAdvantage: () => k,
                Overview: () => v,
                Specifications: () => N,
                TowerHero: () => f
            });
            var s = a(5155),
                l = a(5565),
                r = a(6771),
                n = a(2115),
                i = a(648),
                c = a(3580),
                d = a(2304),
                o = a(522),
                x = a(5251),
                m = a(1481),
                p = a(9681);
            let h = "#e0a456",
                g = "#b06a35";

            function f(e) {
                let {
                    eyebrow: t,
                    headline: a,
                    emphasis: r,
                    image: n,
                    alt: i,
                    formTitle: d,
                    formNote: x,
                    propertyTitle: m,
                    propertyId: g,
                    statusNote: f
                } = e;
                return (0, s.jsxs)("header", {
                    className: "relative min-h-svh overflow-hidden bg-[#14110c]",
                    children: [(0, s.jsxs)("div", {
                        className: "absolute inset-x-0 top-0 h-svh overflow-hidden",
                        children: [(0, s.jsx)(l.default, {
                            src: n,
                            alt: i,
                            fill: !0,
                            priority: !0,
                            sizes: "100vw",
                            className: "object-cover object-[center_42%]"
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0",
                            style: {
                                background: "linear-gradient(100deg, rgba(20,17,12,.93) 0%, rgba(20,17,12,.7) 38%, rgba(20,17,12,.28) 66%, rgba(20,17,12,.5) 100%), linear-gradient(to bottom, rgba(20,17,12,.62) 0%, rgba(20,17,12,.12) 30%, rgba(20,17,12,.5) 72%, rgba(20,17,12,.96) 100%)"
                            }
                        })]
                    }), (0, s.jsx)("div", {
                        className: "pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block"
                    }), (0, s.jsxs)("div", {
                        className: "relative z-10 mx-auto flex min-h-svh max-w-[1640px] flex-col justify-end px-6 pb-28 pt-32 md:flex-row md:items-center md:justify-between md:gap-14 md:px-10 md:pb-32 lg:px-14",
                        children: [(0, s.jsxs)("div", {
                            className: "max-w-2xl",
                            children: [(0, s.jsx)(c.Reveal, {
                                y: 16,
                                children: (0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: h
                                    },
                                    children: t
                                })
                            }), (0, s.jsx)("h1", {
                                className: "mt-5 font-grotesk text-[clamp(1.95rem,4.76vw,3.91rem)] font-normal uppercase leading-[1.05] tracking-tight text-white",
                                children: a.map((e, t) => (0, s.jsx)(c.Reveal, {
                                    y: 30,
                                    delay: .08 + .09 * t,
                                    children: (0, s.jsx)("span", {
                                        className: "block",
                                        children: e.split(" ").map((e, t) => {
                                            let a = e.replace(/[^\w.]/g, ""),
                                                l = r && a.toLowerCase() === r.toLowerCase();
                                            return (0, s.jsxs)("span", {
                                                className: l ? "font-cormorant not-italic lowercase" : "",
                                                style: l ? {
                                                    color: h,
                                                    fontStyle: "italic",
                                                    letterSpacing: "normal",
                                                    marginInline: "0.10em",
                                                    textTransform: "none",
                                                    fontSize: "1.06em"
                                                } : void 0,
                                                children: [e, " "]
                                            }, "".concat(e, "-").concat(t))
                                        })
                                    })
                                }, e))
                            }), (0, s.jsx)(p.A, {
                                brochure: "west-19"
                            })]
                        }), (0, s.jsx)(c.Reveal, {
                            y: 24,
                            delay: .3,
                            className: "mt-10 shrink-0 md:mt-0",
                            children: (0, s.jsxs)("div", {
                                id: "enquire",
                                className: "w-full max-w-md scroll-mt-28 border border-white/15 bg-[#1d1811]/85 p-6 backdrop-blur-md md:w-[400px] md:p-8",
                                children: [(0, s.jsx)("h2", {
                                    className: "font-grotesk text-[24px] font-semibold uppercase leading-tight tracking-tight text-white md:text-[26px]",
                                    children: d
                                }), (0, s.jsx)("p", {
                                    className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-white/65",
                                    children: x
                                }), (0, s.jsx)(o.default, {
                                    propertyTitle: m,
                                    propertyId: g,
                                    buttonLabel: "Submit Interest",
                                    variant: "dark"
                                })]
                            })
                        })]
                    }), f && (0, s.jsx)("div", {
                        className: "absolute inset-x-0 bottom-[64px] z-10 border-t border-white/10 bg-[#14110c]/85 backdrop-blur-sm md:bottom-0",
                        children: (0, s.jsx)("p", {
                            className: "mx-auto max-w-[1640px] px-6 py-2.5 text-center font-hanken text-[11px] tracking-wide text-white/55 md:px-10 md:text-[12px]",
                            children: f
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    eyebrow: t,
                    heading: a,
                    body: l,
                    image: r,
                    alt: n,
                    imageAspect: i = "aspect-[16/9]",
                    highlights: o
                } = e;
                return (0, s.jsx)("section", {
                    className: "bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20",
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(c.Reveal, {
                                children: (0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: g
                                    },
                                    children: t
                                })
                            }), (0, s.jsx)(c.RevealText, {
                                text: a,
                                className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                            }), (0, s.jsxs)(x.A, {
                                className: "mt-6 max-w-xl",
                                fadeFrom: "from-white",
                                collapsedLines: 5,
                                children: [l.map((e, t) => (0, s.jsx)(c.Reveal, {
                                    delay: .1 + .06 * t,
                                    children: (0, s.jsx)("p", {
                                        className: "".concat(t ? "mt-5 " : "", "font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]"),
                                        children: e
                                    })
                                }, t)), o && (0, s.jsx)(c.Reveal, {
                                    delay: .2,
                                    children: (0, s.jsx)("ul", {
                                        className: "mt-9 space-y-3",
                                        children: o.map(e => (0, s.jsxs)("li", {
                                            className: "flex items-start gap-3 font-hanken text-[16px] leading-relaxed text-[#2e2a24]",
                                            children: [(0, s.jsx)("span", {
                                                className: "mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45",
                                                style: {
                                                    background: h
                                                }
                                            }), e]
                                        }, e))
                                    })
                                })]
                            })]
                        }), (0, s.jsx)(c.Reveal, {
                            delay: .12,
                            children: (0, s.jsx)(d.default, {
                                src: r,
                                alt: n,
                                aspect: i,
                                sizes: "(max-width:1024px) 100vw, 50vw"
                            })
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    eyebrow: t,
                    heading: a,
                    body: l,
                    image: r,
                    alt: n,
                    imageAspect: i = "aspect-[16/9]",
                    flip: o = !1,
                    points: x,
                    tone: m = "light"
                } = e, p = "dark" === m;
                return (0, s.jsx)("section", {
                    className: "px-6 py-24 md:px-12 md:py-32 lg:px-16 ".concat(p ? "bg-[#14110c] text-white" : "bg-[#f5f4f2]"),
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-2 lg:gap-20 ".concat(o ? "lg:[&>*:first-child]:order-2" : ""),
                        children: [(0, s.jsx)(c.Reveal, {
                            delay: .1,
                            children: (0, s.jsx)(d.default, {
                                src: r,
                                alt: n,
                                aspect: i,
                                sizes: "(max-width:1024px) 100vw, 50vw"
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(c.Reveal, {
                                children: (0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: p ? h : g
                                    },
                                    children: t
                                })
                            }), (0, s.jsx)(c.RevealText, {
                                text: a,
                                className: "mt-5 font-grotesk text-[clamp(1.61rem,3.23vw,2.63rem)] font-normal uppercase leading-[1.02] tracking-tight ".concat(p ? "text-white" : "")
                            }), (0, s.jsx)(c.Reveal, {
                                delay: .12,
                                children: (0, s.jsx)("p", {
                                    className: "mt-6 max-w-xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed ".concat(p ? "text-white/70" : "text-[#57534d]"),
                                    children: l
                                })
                            }), x && (0, s.jsx)(c.Reveal, {
                                delay: .2,
                                children: (0, s.jsx)("div", {
                                    className: "mt-10 divide-y border-t ".concat(p ? "divide-white/12 border-white/15" : "divide-[#17140f]/10 border-[#17140f]/12"),
                                    children: x.map(e => {
                                        let [t, a] = e;
                                        return (0, s.jsxs)("div", {
                                            className: "py-5",
                                            children: [(0, s.jsx)("p", {
                                                className: "font-grotesk text-[13px] font-semibold uppercase tracking-[0.14em]",
                                                style: {
                                                    color: p ? h : g
                                                },
                                                children: t
                                            }), (0, s.jsx)("p", {
                                                className: "mt-2 font-hanken text-[15.5px] leading-relaxed ".concat(p ? "text-white/65" : "text-[#57534d]"),
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

            function u(e) {
                let {
                    eyebrow: t,
                    heading: a,
                    intro: r,
                    cards: n
                } = e;
                return (0, s.jsx)("section", {
                    className: "relative overflow-hidden bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: [(0, s.jsxs)("div", {
                            className: "max-w-3xl",
                            children: [(0, s.jsx)(c.Reveal, {
                                children: (0, s.jsx)("p", {
                                    className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                    style: {
                                        color: g
                                    },
                                    children: t
                                })
                            }), (0, s.jsx)(c.RevealText, {
                                text: a,
                                className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight text-[#17140f]"
                            }), (0, s.jsx)(c.Reveal, {
                                delay: .1,
                                children: (0, s.jsx)("p", {
                                    className: "mt-6 font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                    children: r
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7",
                            children: n.map((e, t) => (0, s.jsx)(c.Reveal, {
                                delay: Math.min(.07 * t, .35),
                                children: (0, s.jsxs)("article", {
                                    className: "group flex h-full flex-col overflow-hidden border border-[#e6e2d9] bg-white transition-colors duration-500 hover:border-[#b06a35]/60",
                                    children: [(0, s.jsxs)("div", {
                                        className: "relative aspect-[4/3] overflow-hidden",
                                        children: [(0, s.jsx)(l.default, {
                                            src: e.image,
                                            alt: e.alt,
                                            fill: !0,
                                            sizes: "(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw",
                                            className: "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                                        }), (0, s.jsx)("div", {
                                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14110c]/70 via-transparent to-transparent"
                                        }), (0, s.jsx)("span", {
                                            className: "absolute left-4 top-4 bg-[#14110c]/80 px-3 py-1.5 font-grotesk text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm",
                                            children: e.time
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-1 flex-col p-6 md:p-7",
                                        children: [(0, s.jsx)("h3", {
                                            className: "font-grotesk text-[19px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                            children: e.title
                                        }), (0, s.jsx)("p", {
                                            className: "mt-3 font-hanken text-[15.5px] leading-relaxed text-[#57534d]",
                                            children: e.copy
                                        })]
                                    })]
                                })
                            }, e.title))
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    images: t,
                    heading: a,
                    note: n
                } = e;
                if (!t.length) return null;
                let {
                    open: i
                } = (0, r.$)(), d = t.map(e => ({
                    src: e.src,
                    alt: e.caption
                })), o = [...t, ...t];
                return (0, s.jsxs)("section", {
                    "aria-label": "Gallery",
                    className: "overflow-hidden bg-white py-14 md:py-32",
                    children: [(0, s.jsx)("div", {
                        className: "mx-auto max-w-[1640px] px-6 md:px-12 lg:px-16",
                        children: (0, s.jsx)(c.RevealText, {
                            text: a,
                            className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        })
                    }), (0, s.jsx)("div", {
                        className: "mt-8 md:mt-14 flex w-max animate-[site-marquee_70s_linear_infinite] gap-5 hover:[animation-play-state:paused]",
                        children: o.map((e, t) => (0, s.jsxs)("figure", {
                            className: "shrink-0",
                            children: [(0, s.jsx)("button", {
                                type: "button",
                                onClick: () => i(d, t % d.length),
                                "aria-label": "Enlarge image",
                                className: "relative block h-56 cursor-zoom-in overflow-hidden bg-[#f5f4f2] md:h-[52vh] md:min-h-[240px]",
                                style: {
                                    aspectRatio: e.ratio
                                },
                                children: (0, s.jsx)(l.default, {
                                    src: e.src,
                                    alt: e.caption,
                                    fill: !0,
                                    sizes: "(max-width:768px) 70vw, 30vw",
                                    loading: "eager",
                                    className: "object-cover"
                                })
                            }), (0, s.jsx)("figcaption", {
                                className: "mt-3 px-1 font-grotesk text-[10.5px] uppercase tracking-[0.2em] text-[#17140f]/45",
                                children: e.caption
                            })]
                        }, "".concat(e.src, "-").concat(t)))
                    }), n && (0, s.jsx)("p", {
                        className: "mt-10 px-6 text-center font-hanken text-[11px] uppercase tracking-[0.2em] text-[#17140f]/40",
                        children: n
                    })]
                })
            }
            i.rTu, i.tNJ, i.VKs, i.VdV;
            let w = {
                "30 Floors": i.wzL,
                "IGBC Pre-Certified Green": i.lKG,
                "9 Destination-Control Lifts": i.OG9,
                "3-Tier Security": i.F9G,
                "Column-Free Floor Plates": i.$g5,
                "250+ Car Parks": i.VN3,
                "EV Charging Provision": i.LuZ,
                "24x7 Power Backup": i.JQq,
                "24x7 CCTV Surveillance": i.c1P
            };

            function N(e) {
                let {
                    eyebrow: t,
                    heading: a,
                    items: l
                } = e;
                return (0, s.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: [(0, s.jsx)(c.Reveal, {
                            children: (0, s.jsx)("p", {
                                className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em]",
                                style: {
                                    color: g
                                },
                                children: t
                            })
                        }), (0, s.jsx)(c.RevealText, {
                            text: a,
                            className: "mt-5 font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        }), (0, s.jsx)("div", {
                            className: "mt-12 grid gap-px border border-[#17140f]/12 bg-[#17140f]/10 sm:grid-cols-2 lg:grid-cols-3",
                            children: l.map((e, t) => {
                                let [a, l] = e, r = w[a];
                                return (0, s.jsx)(c.Reveal, {
                                    delay: Math.min(.05 * t, .3),
                                    children: (0, s.jsxs)("div", {
                                        className: "h-full bg-[#f5f4f2] p-7 md:p-8",
                                        children: [r && (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            className: "mb-5 grid h-11 w-11 place-items-center rounded-full border border-[#17140f]/12 bg-white",
                                            children: (0, s.jsx)(r, {
                                                className: "text-[21px]",
                                                style: {
                                                    color: g
                                                }
                                            })
                                        }), (0, s.jsx)("h3", {
                                            className: "font-grotesk text-[clamp(0.98rem,1.5vw,1.14rem)] font-normal uppercase leading-tight tracking-tight text-[#17140f]",
                                            children: a
                                        }), (0, s.jsx)("p", {
                                            className: "mt-3 font-hanken text-[15.5px] leading-relaxed text-[#57534d]",
                                            children: l
                                        })]
                                    })
                                }, a)
                            })
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    heading: t,
                    subtext: a,
                    address: l,
                    mapUrl: r,
                    nearby: n,
                    note: i
                } = e;
                return (0, s.jsx)("section", {
                    className: "bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsx)("div", {
                        className: "mx-auto max-w-[1640px]",
                        children: (0, s.jsxs)("div", {
                            className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 [&>*]:min-w-0",
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)(c.RevealText, {
                                    text: t,
                                    className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                                }), a && (0, s.jsx)(c.Reveal, {
                                    delay: .1,
                                    children: (0, s.jsx)("p", {
                                        className: "mt-6 max-w-xl font-hanken text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-[#57534d]",
                                        children: a
                                    })
                                }), (0, s.jsx)(c.Reveal, {
                                    delay: .16,
                                    children: (0, s.jsx)("p", {
                                        className: "mt-8 border-l-2 pl-5 font-hanken text-[16px] leading-relaxed text-[#2e2a24]",
                                        style: {
                                            borderColor: g
                                        },
                                        children: l
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "mt-8 divide-y divide-[#17140f]/10 border-y border-[#17140f]/10",
                                    children: n.map((e, t) => (0, s.jsx)(c.Reveal, {
                                        delay: Math.min(.05 * t, .3),
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-baseline justify-between gap-6 py-4",
                                            children: [(0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("div", {
                                                    className: "font-hanken text-[16px] text-[#17140f]",
                                                    children: e.name
                                                }), (0, s.jsx)("div", {
                                                    className: "mt-1 font-grotesk text-[10.5px] uppercase tracking-[0.18em] text-[#17140f]/45",
                                                    children: e.type
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "shrink-0 font-grotesk text-[15px] font-semibold tracking-tight",
                                                style: {
                                                    color: g
                                                },
                                                children: e.distance
                                            })]
                                        })
                                    }, e.name))
                                }), i && (0, s.jsx)(c.Reveal, {
                                    delay: .2,
                                    children: (0, s.jsx)("p", {
                                        className: "mt-5 font-hanken text-[12px] leading-relaxed text-[#17140f]/45",
                                        children: i
                                    })
                                })]
                            }), r && (0, s.jsx)("div", {
                                children: (0, s.jsx)(c.Reveal, {
                                    delay: .12,
                                    children: (0, s.jsx)("div", {
                                        className: "relative aspect-[16/10] h-full w-full min-w-0 overflow-hidden border border-[#e6e2d9] md:min-h-[360px]",
                                        children: (0, s.jsx)("iframe", {
                                            src: r,
                                            title: "Map of ".concat(l),
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

            function y(e) {
                let {
                    items: t,
                    heading: a = "Questions, answered."
                } = e, [l, r] = (0, n.useState)(0);
                return (0, s.jsx)("section", {
                    className: "bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto max-w-4xl",
                        children: [(0, s.jsx)(c.RevealText, {
                            text: a,
                            className: "font-grotesk text-[clamp(1.7rem,3.57vw,2.89rem)] font-normal uppercase leading-[1] tracking-tight"
                        }), (0, s.jsx)("div", {
                            className: "mt-12 border-t border-[#17140f]/12",
                            children: t.map((e, t) => {
                                let a = l === t;
                                return (0, s.jsxs)("div", {
                                    className: "border-b border-[#17140f]/12",
                                    children: [(0, s.jsxs)("button", {
                                        type: "button",
                                        onClick: () => r(a ? null : t),
                                        "aria-expanded": a,
                                        className: "flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left",
                                        children: [(0, s.jsx)("span", {
                                            className: "font-grotesk text-[clamp(1rem,1.5vw,1.2rem)] font-medium uppercase tracking-tight text-[#17140f]",
                                            children: e.q
                                        }), (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            className: "mt-1 shrink-0 text-[22px] leading-none transition-transform duration-500",
                                            style: {
                                                color: g,
                                                transform: a ? "rotate(45deg)" : "none"
                                            },
                                            children: "+"
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                        style: {
                                            gridTemplateRows: a ? "1fr" : "0fr",
                                            opacity: a ? 1 : 0
                                        },
                                        children: (0, s.jsx)("div", {
                                            className: "overflow-hidden",
                                            children: (0, s.jsx)("p", {
                                                className: "pb-7 pr-10 font-hanken text-[16px] leading-relaxed text-[#57534d]",
                                                children: e.a
                                            })
                                        })
                                    })]
                                }, e.q)
                            })
                        })]
                    })
                })
            }

            function R(e) {
                let {
                    heading: t,
                    body: a,
                    propertyTitle: l,
                    propertyId: r,
                    rera: n,
                    venture: i
                } = e;
                return (0, s.jsx)("section", {
                    id: "enquire-footer",
                    className: "relative overflow-hidden border-t border-[#17140f]/10 bg-[#f5f4f2] px-6 py-24 md:px-12 md:py-32 lg:px-16",
                    children: (0, s.jsxs)("div", {
                        className: "relative mx-auto grid max-w-[1640px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(c.RevealText, {
                                text: t,
                                className: "font-grotesk text-[clamp(1.78rem,3.91vw,3.23rem)] font-normal uppercase leading-[0.99] tracking-tight text-[#17140f]"
                            }), (0, s.jsx)(c.Reveal, {
                                delay: .12,
                                children: (0, s.jsx)("p", {
                                    className: "mt-7 max-w-xl font-hanken text-[clamp(1rem,1.4vw,1.2rem)] font-light leading-relaxed text-[#2e2a24]",
                                    children: a
                                })
                            }), (0, s.jsx)(c.Reveal, {
                                delay: .2,
                                children: (0, s.jsx)("div", {
                                    className: "mt-10 flex flex-wrap items-center gap-5",
                                    children: (0, s.jsx)("a", {
                                        href: m.nJ,
                                        className: "font-grotesk text-[clamp(0.94rem,1.53vw,1.27rem)] font-normal tracking-tight text-[#17140f] transition-colors hover:text-[#e0a456]",
                                        children: m.y7
                                    })
                                })
                            }), (n || i) && (0, s.jsxs)("div", {
                                className: "mt-8 font-hanken text-[11px] leading-relaxed tracking-wide text-[#17140f]/45",
                                children: [n && (0, s.jsxs)("p", {
                                    children: ["MahaRERA Reg. No.: ", n, " \xb7 maharera.maharashtra.gov.in"]
                                }), i && (0, s.jsx)("p", {
                                    className: "mt-1",
                                    children: i
                                })]
                            })]
                        }), (0, s.jsx)(c.Reveal, {
                            delay: .16,
                            children: (0, s.jsxs)("div", {
                                className: "border border-[#e6e2d9] bg-white p-7 backdrop-blur-md md:p-8",
                                children: [(0, s.jsx)("h3", {
                                    className: "font-grotesk text-[22px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                    children: "Schedule a Site Visit"
                                }), (0, s.jsx)("p", {
                                    className: "mb-5 mt-2.5 font-hanken text-[14px] leading-relaxed text-[#57534d]",
                                    children: "Select your preferred time, and our commercial team will reach out to confirm your site tour."
                                }), (0, s.jsx)(o.default, {
                                    propertyTitle: l,
                                    propertyId: r,
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
        e.O(0, [4506, 5592, 5479, 7970, 8173, 4881, 1478, 5415, 5542, 522, 9202, 6155, 8441, 1517, 7358], () => t(4746)), _N_E = e.O()
    }
]);