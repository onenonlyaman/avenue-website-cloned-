"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6590], {
        9573: (e, a, t) => {
            t.d(a, {
                default: () => o
            });
            var n = t(5155),
                s = t(2115),
                r = t(5782),
                l = t(1478),
                i = t(5415);

            function o(e) {
                let {
                    children: a
                } = e;
                return (0, s.useEffect)(() => {
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = new r.A({
                        lerp: .085,
                        smoothWheel: !0,
                        wheelMultiplier: 1,
                        touchMultiplier: 1.6
                    });
                    e.on("scroll", i.u.update);
                    let a = a => e.raf(1e3 * a);
                    return l.os.ticker.add(a), l.os.ticker.lagSmoothing(0), window.__lenis = e, () => {
                        l.os.ticker.remove(a), e.destroy(), delete window.__lenis
                    }
                }, []), (0, n.jsx)(n.Fragment, {
                    children: a
                })
            }
            l.os.registerPlugin(i.u)
        },
        2426: (e, a, t) => {
            t.d(a, {
                default: () => g
            });
            var n = t(5155),
                s = t(2115),
                r = t(8173),
                l = t.n(r),
                i = t(3580),
                o = t(9301);
            let c = {
                    minLon: 78.965,
                    lonSpan: .244,
                    maxLat: 21.263,
                    latSpan: .259
                },
                d = (e, a) => ({
                    left: (e - c.minLon) / c.lonSpan * 100,
                    top: (c.maxLat - a) / c.latSpan * 100
                }),
                u = {
                    minLon: 68.186249,
                    lonSpan: 29.228912,
                    maxLat: 35.501331,
                    latSpan: 28.747076
                },
                p = {
                    left: (79.088 - u.minLon) / u.lonSpan * 100,
                    top: (u.maxLat - 21.146) / u.latSpan * 100
                },
                m = [{
                    id: "8",
                    name: "The One",
                    area: "Civil Lines",
                    cat: "residential",
                    status: "Under Construction",
                    lat: 21.147674,
                    lon: 79.071596
                }, {
                    id: "9",
                    name: "Kukreja Infinity",
                    area: "Civil Lines",
                    cat: "residential",
                    status: "Sold Out",
                    lat: 21.155851,
                    lon: 79.0757
                }, {
                    id: "2",
                    name: "Kukreja Embassy II",
                    area: "Byramji Town",
                    cat: "residential",
                    status: "Under Construction",
                    lat: 21.169136,
                    lon: 79.081933
                }, {
                    id: "6",
                    name: "Kukreja Embassy",
                    area: "Byramji Town",
                    cat: "residential",
                    status: "Sold Out",
                    lat: 21.171264,
                    lon: 79.079784
                }, {
                    id: "3",
                    name: "West 19",
                    area: "Shankar Nagar",
                    cat: "commercial",
                    status: "Under Construction",
                    lat: 21.136828,
                    lon: 79.062009
                }, {
                    id: "5",
                    name: "Kukreja Anandam World City",
                    area: "Ganeshpeth",
                    cat: "residential",
                    status: "Under Construction",
                    lat: 21.139713,
                    lon: 79.09659
                }, {
                    id: "1",
                    name: "Paris City",
                    area: "Ishwar Nagar, Nandanvan",
                    cat: "residential",
                    status: "Under Construction",
                    lat: 21.1262,
                    lon: 79.120408
                }, {
                    id: "7",
                    name: "Infinity East",
                    area: "S. Wardhaman Nagar",
                    cat: "residential",
                    status: "Completed",
                    lat: 21.136846,
                    lon: 79.130582
                }, {
                    id: "4",
                    name: "Kukreja Business Park",
                    area: "MIHAN",
                    cat: "commercial",
                    status: "Under Construction",
                    lat: 21.036434,
                    lon: 79.027278,
                    pin: {
                        left: 37,
                        top: 76
                    }
                }],
                f = [{
                    key: "all",
                    label: "All"
                }, {
                    key: "residential",
                    label: "Residences"
                }, {
                    key: "commercial",
                    label: "Commercial"
                }],
                x = {
                    "dnh-and-dd": "DNH & DD",
                    "jammu-and-kashmir": "J&K",
                    "andaman-and-nicobar-islands": "Andaman"
                },
                h = e => {
                    var a;
                    return null !== (a = x[e]) && void 0 !== a ? a : e.split("-").map(e => "and" === e ? "&" : e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
                };

            function g() {
                let [e, a] = (0, s.useState)("all"), [t, r] = (0, s.useState)(null), [c, u] = (0, s.useState)("india"), [x, g] = (0, s.useState)(""), [b, y] = (0, s.useState)(""), v = (0, s.useRef)(null), [k, w] = (0, s.useState)([]);
                (0, s.useEffect)(() => {
                    let e = !1;
                    return fetch("/maps/nagpur.svg?v=3").then(e => e.text()).then(a => !e && g(a)).catch(() => {}), fetch("/maps/india-states.svg?v=2").then(e => e.text()).then(a => {
                        e || y(a.replace(/(<svg[^>]*>)/, "$1<style>\n            path{fill:rgba(246,241,231,0.05);stroke:rgba(246,241,231,0.14);stroke-width:0.6;transition:fill .4s ease;}\n            #maharashtra{fill:#b06a35;stroke:#e0a456;stroke-width:0.9;cursor:pointer;filter:drop-shadow(0 0 6px rgba(224,164,86,0.55));}\n          </style>"))
                    }).catch(() => {}), () => {
                        e = !0
                    }
                }, []), (0, s.useEffect)(() => {
                    let e = v.current;
                    if (!e || !b) return;
                    let a = e.querySelector("svg");
                    if (!a) return;
                    a.removeAttribute("width"), a.removeAttribute("height");
                    let t = a.viewBox.baseVal,
                        n = [];
                    a.querySelectorAll("path").forEach(e => {
                        let a = e.getAttribute("id") || "",
                            s = "maharashtra" === a;
                        s && e.addEventListener("click", () => u("nagpur"));
                        try {
                            let r = e.getBBox();
                            if (r.width < 26 && r.height < 26 && !s) return;
                            n.push({
                                id: a,
                                name: h(a),
                                x: (r.x + r.width / 2) / t.width * 100,
                                y: (r.y + r.height / 2) / t.height * 100,
                                mh: s
                            })
                        } catch (e) {}
                    }), w(n)
                }, [b]);
                let j = m.filter(a => "all" === e || a.cat === e);
                return (0, n.jsx)("section", {
                    className: "relative bg-[#f5f4f2] px-6 py-24 text-[#17140f] md:px-12 md:py-28 lg:px-16",
                    children: (0, n.jsx)("div", {
                        className: "mx-auto max-w-7xl",
                        children: (0, n.jsxs)("div", {
                            className: "grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16",
                            children: [(0, n.jsxs)("div", {
                                className: "lg:sticky lg:top-28",
                                children: [(0, n.jsx)(i.RevealText, {
                                    text: "Explore our\n*developments.*",
                                    className: "font-grotesk text-[clamp(1.7rem,3.74vw,3.06rem)] font-normal uppercase leading-[0.98] tracking-tight"
                                }), (0, n.jsx)(i.Reveal, {
                                    delay: .1,
                                    children: (0, n.jsx)("p", {
                                        className: "mt-5 max-w-md font-hanken text-[clamp(1rem,1.25vw,1.12rem)] leading-relaxed text-[#57534d]",
                                        children: "Developing signature properties across Maharashtra, anchored in Nagpur. Use the interactive map to view locations and request detailed project information."
                                    })
                                }), (0, n.jsx)(i.Reveal, {
                                    delay: .16,
                                    children: (0, n.jsx)("div", {
                                        className: "mt-8 inline-flex rounded-full border border-[#17140f]/15 p-1",
                                        children: f.map(t => (0, n.jsx)("button", {
                                            onClick: () => a(t.key),
                                            className: "rounded-full px-5 py-2 font-grotesk text-[11.5px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ".concat(e === t.key ? "bg-[#17140f] text-[#ffffff]" : "text-[#17140f]/60 hover:text-[#17140f]"),
                                            children: t.label
                                        }, t.key))
                                    })
                                }), (0, n.jsx)(i.Reveal, {
                                    delay: .24,
                                    children: (0, n.jsx)("div", {
                                        className: "mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
                                        children: j.map(e => {
                                            let a = "Sold Out" === e.status;
                                            return (0, n.jsxs)(l(), {
                                                href: (0, o.vI)(e.id),
                                                onMouseEnter: () => r(e.id),
                                                onMouseLeave: () => r(null),
                                                className: "group flex flex-col justify-between rounded-xl border px-4 py-3.5 transition-all duration-300 ".concat(t === e.id ? "-translate-y-0.5 border-[#b06a35]/55 bg-[#b06a35]/[0.06]" : "border-[#17140f]/12 bg-[#ffffff]/50 hover:border-[#b06a35]/45"),
                                                children: [(0, n.jsxs)("div", {
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 ".concat(a ? "bg-[#17140f]/35" : "bg-[#b06a35]", " ").concat(t === e.id ? "scale-[1.7]" : "")
                                                        }), (0, n.jsx)("span", {
                                                            className: "truncate font-grotesk text-[13px] font-semibold uppercase leading-tight tracking-tight text-[#17140f]",
                                                            children: e.name
                                                        })]
                                                    }), (0, n.jsx)("span", {
                                                        className: "mt-1 block pl-3.5 font-hanken text-[12px] text-[#57534d]",
                                                        children: e.area
                                                    })]
                                                }), (0, n.jsxs)("span", {
                                                    className: "mt-3 flex items-center gap-1.5 pl-3.5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.13em] ".concat(a ? "text-[#17140f]/40" : "text-[#b06a35]"),
                                                    children: [a ? "Sold out" : "Enquire now", !a && (0, n.jsx)("span", {
                                                        className: "transition-transform duration-300 group-hover:translate-x-1",
                                                        children: "→"
                                                    })]
                                                })]
                                            }, e.id)
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(i.Reveal, {
                                delay: .1,
                                children: (0, n.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, n.jsxs)("div", {
                                        className: "relative aspect-[1000/1138] w-full overflow-hidden rounded-[clamp(1rem,2vw,1.6rem)] bg-[#14110c] shadow-[0_50px_120px_-50px_rgba(10,8,6,0.8)] ring-1 ring-inset ring-[#e0a456]/15",
                                        children: [(0, n.jsxs)("div", {
                                            className: "absolute inset-0",
                                            style: {
                                                opacity: "india" === c ? 1 : 0,
                                                transform: "india" === c ? "scale(1)" : "scale(2.5)",
                                                transformOrigin: "".concat(p.left, "% ").concat(p.top, "%"),
                                                transition: "opacity 700ms cubic-bezier(0.65,0,0.35,1), transform 820ms cubic-bezier(0.65,0,0.35,1)",
                                                pointerEvents: "india" === c ? "auto" : "none"
                                            },
                                            children: [(0, n.jsx)("div", {
                                                ref: v,
                                                className: "absolute inset-0 [&_svg]:h-full [&_svg]:w-full",
                                                dangerouslySetInnerHTML: {
                                                    __html: b
                                                }
                                            }), k.map(e => (0, n.jsx)("span", {
                                                style: {
                                                    left: "".concat(e.x, "%"),
                                                    top: "".concat(e.y, "%"),
                                                    textShadow: "0 1px 4px rgba(10,8,6,0.9)"
                                                },
                                                className: "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-grotesk uppercase ".concat(e.mh ? "text-[12px] font-bold tracking-[0.16em] text-[#f3d9b0]" : "text-[9.5px] font-semibold tracking-[0.1em] text-[#faf9f7]/70"),
                                                children: e.name
                                            }, e.id)), (0, n.jsxs)("button", {
                                                onClick: () => u("nagpur"),
                                                style: {
                                                    left: "".concat(p.left, "%"),
                                                    top: "".concat(p.top, "%")
                                                },
                                                className: "group absolute -translate-x-1/2 -translate-y-1/2",
                                                "aria-label": "Explore Nagpur",
                                                children: [(0, n.jsx)("span", {
                                                    className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#e0a456]/60"
                                                }), (0, n.jsx)("span", {
                                                    className: "relative block h-2.5 w-2.5 rounded-full bg-[#e0a456] shadow-[0_0_12px_3px_rgba(224,164,86,0.7)] ring-2 ring-[#14110c]"
                                                }), (0, n.jsx)("span", {
                                                    className: "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#faf9f7] px-3 py-1 font-grotesk text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#17140f] shadow-lg transition-transform duration-300 group-hover:-translate-x-1/2 group-hover:translate-y-0.5",
                                                    children: "Nagpur \xb7 Explore →"
                                                })]
                                            }), (0, n.jsx)("span", {
                                                className: "pointer-events-none absolute right-5 top-5 font-grotesk text-[10px] uppercase tracking-[0.28em] text-[#e0a456]/70",
                                                children: "India"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "absolute inset-0",
                                            style: {
                                                opacity: "nagpur" === c ? 1 : 0,
                                                transform: "nagpur" === c ? "scale(1)" : "scale(1.06)",
                                                transition: "opacity 600ms 140ms cubic-bezier(0.22,1,0.36,1), transform 760ms cubic-bezier(0.22,1,0.36,1)",
                                                pointerEvents: "nagpur" === c ? "auto" : "none"
                                            },
                                            children: [(0, n.jsx)("div", {
                                                className: "absolute inset-0 [&_svg]:h-full [&_svg]:w-full",
                                                dangerouslySetInnerHTML: {
                                                    __html: x
                                                }
                                            }), (0, n.jsx)("span", {
                                                className: "pointer-events-none absolute inset-0 flex items-center justify-center font-grotesk text-[clamp(2.6rem,9vw,6rem)] font-bold tracking-tight text-[#faf9f7]/[0.12]",
                                                children: "NAGPUR"
                                            }), x && j.map(e => {
                                                var a;
                                                let {
                                                    left: s,
                                                    top: i
                                                } = null !== (a = e.pin) && void 0 !== a ? a : d(e.lon, e.lat), c = t === e.id, u = "Sold Out" === e.status;
                                                return (0, n.jsxs)(l(), {
                                                    href: (0, o.vI)(e.id),
                                                    onMouseEnter: () => r(e.id),
                                                    onMouseLeave: () => r(null),
                                                    style: {
                                                        left: "".concat(s, "%"),
                                                        top: "".concat(i, "%"),
                                                        zIndex: c ? 40 : 20
                                                    },
                                                    className: "group absolute -translate-x-1/2 -translate-y-1/2",
                                                    "aria-label": "".concat(e.name, ", ").concat(e.area),
                                                    children: [(0, n.jsxs)("span", {
                                                        className: "pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#faf9f7] px-3 py-1.5 text-center shadow-xl transition-all duration-200 ".concat(c ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"),
                                                        children: [(0, n.jsx)("span", {
                                                            className: "block font-grotesk text-[10.5px] font-semibold uppercase tracking-[0.04em] text-[#17140f]",
                                                            children: e.name
                                                        }), (0, n.jsx)("span", {
                                                            className: "block font-grotesk text-[8.5px] font-semibold uppercase tracking-[0.12em] ".concat(u ? "text-[#17140f]/45" : "text-[#b06a35]"),
                                                            children: u ? "Sold out" : "Enquire now"
                                                        })]
                                                    }), !u && (0, n.jsx)("span", {
                                                        className: "absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#e0a456]/50"
                                                    }), (0, n.jsx)("span", {
                                                        className: "relative block h-3 w-3 rounded-full ring-2 ring-[#14110c] transition-transform duration-200 group-hover:scale-[1.55] ".concat(u ? "bg-[#faf9f7]/45" : "bg-[#e0a456] shadow-[0_0_12px_2px_rgba(224,164,86,0.6)]", " ").concat(c ? "scale-[1.55]" : "")
                                                    })]
                                                }, e.id)
                                            }), (0, n.jsxs)("button", {
                                                onClick: () => u("india"),
                                                className: "absolute left-5 top-5 z-50 flex items-center gap-2 rounded-full border border-[#faf9f7]/20 bg-[#14110c]/70 px-4 py-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.14em] text-[#faf9f7] backdrop-blur-sm transition-colors duration-300 hover:border-[#e0a456]/60 hover:text-[#e0a456]",
                                                children: [(0, n.jsx)("span", {
                                                    className: "transition-transform duration-300 group-hover:-translate-x-0.5",
                                                    children: "←"
                                                }), " India"]
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-5 font-grotesk text-[11px] uppercase tracking-[0.12em] text-[#17140f]/55",
                                        children: [(0, n.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, n.jsx)("span", {
                                                className: "h-2 w-2 rounded-full bg-[#e0a456]"
                                            }), " Enquire now"]
                                        }), (0, n.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, n.jsx)("span", {
                                                className: "h-2 w-2 rounded-full bg-[#17140f]/40"
                                            }), " Sold out"]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        3580: (e, a, t) => {
            t.d(a, {
                Reveal: () => i,
                RevealText: () => o
            });
            var n = t(5155),
                s = t(2115);
            let r = "cubic-bezier(0.16, 1, 0.3, 1)";

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .18,
                    a = (0, s.useRef)(null),
                    [t, n] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    let t = a.current;
                    if (!t) return;
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        n(!0);
                        return
                    }
                    let s = new IntersectionObserver(e => {
                        for (let a of e) a.isIntersecting && (n(!0), s.disconnect())
                    }, {
                        threshold: e
                    });
                    return s.observe(t), () => s.disconnect()
                }, [e]), {
                    ref: a,
                    shown: t
                }
            }

            function i(e) {
                let {
                    children: a,
                    className: t = "",
                    y: s = 48,
                    delay: i = 0,
                    threshold: o = .18
                } = e, {
                    ref: c,
                    shown: d
                } = l(o);
                return (0, n.jsx)("div", {
                    ref: c,
                    className: t,
                    style: {
                        opacity: d ? 1 : 0,
                        transform: d ? "translateY(0) scale(1)" : "translateY(".concat(s, "px) scale(0.985)"),
                        filter: d ? "blur(0px)" : "blur(4px)",
                        transition: "opacity 1.1s ".concat(r, " ").concat(i, "s, transform 1.3s ").concat(r, " ").concat(i, "s, filter 1.1s ").concat(r, " ").concat(i, "s"),
                        willChange: "opacity, transform, filter"
                    },
                    children: a
                })
            }

            function o(e) {
                let {
                    text: a,
                    className: t = "",
                    wordClassName: s = "",
                    emphasisClassName: i = "font-semibold",
                    stagger: o = .07,
                    threshold: c = .25,
                    as: d = "h2"
                } = e, {
                    ref: u,
                    shown: p
                } = l(c), m = a.split("\n"), f = 0;
                return (0, n.jsx)(d, {
                    ref: u,
                    className: t,
                    children: m.map((e, a) => {
                        let t = function(e) {
                                let a = [];
                                return e.split(/(\*[^*]+\*)/g).forEach(e => {
                                    if (!e) return;
                                    let t = e.length > 2 && e.startsWith("*") && e.endsWith("*");
                                    (t ? e.slice(1, -1) : e).split(" ").forEach(e => {
                                        "" !== e && a.push({
                                            word: e,
                                            bold: t
                                        })
                                    })
                                }), a
                            }(e),
                            l = [];
                        return t.forEach((e, a) => {
                            let {
                                word: c,
                                bold: d
                            } = e, u = f++;
                            l.push((0, n.jsx)("span", {
                                className: "inline-block overflow-hidden align-bottom",
                                children: (0, n.jsx)("span", {
                                    className: "inline-block ".concat(d ? i : "", " ").concat(s),
                                    style: {
                                        transform: p ? "translateY(0)" : "translateY(115%)",
                                        transition: "transform 0.95s ".concat(r, " ").concat(u * o, "s"),
                                        willChange: "transform"
                                    },
                                    children: c
                                })
                            }, "w".concat(a))), a < t.length - 1 && l.push(" ")
                        }), (0, n.jsx)("span", {
                            className: "block overflow-hidden pb-[0.12em]",
                            children: l
                        }, a)
                    })
                })
            }
        },
        9301: (e, a, t) => {
            t.d(a, {
                Vj: () => r,
                pe: () => n,
                vI: () => l
            });
            let n = [{
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
                s = e => n.find(a => a.id === e),
                r = e => n.find(a => a.slug === e),
                l = e => {
                    let a = s(e);
                    return a ? "/".concat(a.slug) : "/projects"
                }
        }
    }
]);