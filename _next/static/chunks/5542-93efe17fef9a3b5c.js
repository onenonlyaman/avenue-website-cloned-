"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5542], {
        1640: (e, t, a) => {
            a.d(t, {
                default: () => c
            });
            var r = a(5155),
                s = a(2115),
                n = a(5565),
                l = a(3126);
            let i = [{
                    key: "residential",
                    label: "Residential",
                    href: "/projects?category=residential",
                    overline: "Homes & townships",
                    blurb: "Landmark residences across Nagpur, from sky homes in Civil Lines to a 550-family township.",
                    columns: [{
                        title: "Selling",
                        items: [{
                            name: "The One",
                            sub: "Civil Lines",
                            href: "/the-one"
                        }, {
                            name: "Paris City",
                            sub: "Wardhaman Nagar",
                            href: "/paris-city"
                        }, {
                            name: "Infinity East",
                            sub: "S. Wardhaman Nagar",
                            href: "/infinity-east"
                        }, {
                            name: "Kukreja Anandam World City",
                            sub: "Ganeshpeth",
                            href: "/anandam-world-city"
                        }, {
                            name: "Kukreja Embassy II",
                            sub: "Byramji Town",
                            href: "/embassy-2"
                        }]
                    }, {
                        title: "Delivered",
                        items: [{
                            name: "Kukreja Infinity",
                            sub: "Civil Lines",
                            href: "/kukreja-infinity",
                            sold: !0
                        }, {
                            name: "Kukreja Embassy",
                            sub: "Byramji Town",
                            href: "/kukreja-embassy",
                            sold: !0
                        }]
                    }],
                    featured: {
                        name: "The One",
                        tag: "Flagship \xb7 Civil Lines",
                        img: "/showcase/the-one.webp",
                        href: "/the-one"
                    }
                }, {
                    key: "commercial",
                    label: "Commercial",
                    href: "/projects?category=commercial",
                    overline: "Office & retail",
                    blurb: "Grade-A workplaces and high-street retail — Central India's tallest commercial tower and a landmark at MIHAN.",
                    columns: [{
                        title: "Office",
                        items: [{
                            name: "West 19",
                            sub: "Shankar Nagar \xb7 Central India's tallest",
                            href: "/west-19"
                        }, {
                            name: "Kukreja Business Park",
                            sub: "MIHAN \xb7 Grade-A offices",
                            href: "/business-park"
                        }]
                    }, {
                        title: "Retail",
                        items: [{
                            name: "West 19",
                            sub: "Shankar Nagar \xb7 High-street retail",
                            href: "/west-19"
                        }, {
                            name: "Kukreja Business Park",
                            sub: "MIHAN \xb7 Retail + office",
                            href: "/business-park"
                        }]
                    }],
                    featured: {
                        name: "West 19",
                        tag: "Central India's tallest",
                        img: "/west-19/aerial-topview.webp",
                        href: "/west-19"
                    }
                }, {
                    key: "about",
                    label: "About",
                    href: "/our-story",
                    overline: "The company",
                    blurb: "Built on decades of enterprise and over fifteen years of focused development.",
                    columns: [{
                        title: "Company",
                        items: [{
                            name: "Our Story",
                            sub: "Fifteen years, one standard",
                            href: "/our-story"
                        }, {
                            name: "Leadership",
                            sub: "Two generations, one standard",
                            href: "/our-story#leadership"
                        }, {
                            name: "Awards & Recognition",
                            sub: "20+ industry honours",
                            href: "/our-story#awards"
                        }]
                    }, {
                        title: "More",
                        items: [{
                            name: "Careers",
                            sub: "Build with us",
                            href: "/careers"
                        }, {
                            name: "Contact",
                            sub: "Come see us in Civil Lines",
                            href: "/contact"
                        }]
                    }],
                    featured: {
                        name: "Building the icons of tomorrow",
                        tag: "Our story",
                        img: "/showcase/paris-city.webp",
                        href: "/our-story"
                    }
                }],
                o = [{
                    label: "NRI Corner",
                    href: "/nri"
                }, {
                    label: "Careers",
                    href: "/careers"
                }];

            function c(e) {
                let {
                    variant: t = "hero"
                } = e, [a, c] = (0, s.useState)("page" === t), [f, d] = (0, s.useState)(null), [m, x] = (0, s.useState)(!1), [u, h] = (0, s.useState)(null), p = (0, s.useRef)(!1), b = (0, s.useRef)(null);
                (0, s.useEffect)(() => {
                    if ("page" === t) {
                        c(!0);
                        return
                    }
                    let e = () => {
                        p.current || (p.current = !0, requestAnimationFrame(() => {
                            c(window.scrollY > 5.2 * window.innerHeight), p.current = !1
                        }))
                    };
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }), e(), () => window.removeEventListener("scroll", e)
                }, [t]), (0, s.useEffect)(() => (document.body.style.overflow = m ? "hidden" : "", () => {
                    document.body.style.overflow = ""
                }), [m]);
                let g = e => {
                        b.current && clearTimeout(b.current), d(e)
                    },
                    k = i.find(e => e.key === f) || null;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("header", {
                        onMouseLeave: () => {
                            b.current && clearTimeout(b.current), b.current = setTimeout(() => d(null), 140)
                        },
                        className: "fixed inset-x-0 top-0 z-[100] transition-all duration-700 ease-out ".concat(a ? "translate-y-0 opacity-100" : "opacity-100 lg:pointer-events-none lg:-translate-y-3 lg:opacity-0"),
                        children: (0, r.jsxs)("div", {
                            className: "relative border-b transition-colors duration-300 ".concat(f ? "border-[#17140f]/8 bg-[#ffffff]" : "border-[#17140f]/8 bg-[#ffffff]/95 backdrop-blur-md", " shadow-[0_10px_40px_-26px_rgba(23,20,15,0.5)]"),
                            children: [(0, r.jsxs)("div", {
                                className: "relative flex items-center justify-between px-6 py-6 md:px-10 md:py-7 lg:px-14",
                                children: [(0, r.jsx)(l.Link, {
                                    href: "/",
                                    className: "relative h-11 w-44 shrink-0 md:h-12 md:w-48",
                                    onMouseEnter: () => d(null),
                                    children: (0, r.jsx)(n.default, {
                                        src: "/logo-black.png",
                                        alt: "Kukreja Infrastructures",
                                        fill: !0,
                                        sizes: "192px",
                                        className: "object-contain object-left"
                                    })
                                }), (0, r.jsxs)("nav", {
                                    className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex",
                                    children: [i.map(e => (0, r.jsxs)(l.Link, {
                                        href: e.href,
                                        onMouseEnter: () => g(e.key),
                                        className: "relative py-2 font-grotesk text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ".concat(f === e.key ? "text-[#b06a35]" : "text-[#17140f] hover:text-[#b06a35]"),
                                        children: [e.label, (0, r.jsx)("span", {
                                            className: "absolute -bottom-0.5 left-0 h-px bg-[#b06a35] transition-all duration-300 ".concat(f === e.key ? "w-full" : "w-0")
                                        })]
                                    }, e.key)), o.map(e => (0, r.jsxs)(l.Link, {
                                        href: e.href,
                                        onMouseEnter: () => d(null),
                                        className: "group relative py-2 font-grotesk text-[13px] font-semibold uppercase tracking-[0.18em] text-[#17140f] transition-colors duration-300 hover:text-[#b06a35]",
                                        children: [e.label, (0, r.jsx)("span", {
                                            className: "absolute -bottom-0.5 left-0 h-px w-0 bg-[#b06a35] transition-all duration-300 group-hover:w-full"
                                        })]
                                    }, e.href))]
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center gap-5",
                                    children: [(0, r.jsx)("a", {
                                        href: "tel:+917888012200",
                                        className: "hidden font-grotesk text-[12.5px] font-medium tracking-wide text-[#17140f] transition-colors duration-300 hover:text-[#b06a35] xl:block",
                                        children: "+91 78880 12200"
                                    }), (0, r.jsxs)(l.Link, {
                                        href: "/contact",
                                        onMouseEnter: () => d(null),
                                        className: "group hidden items-center gap-2.5 rounded-full bg-[#17140f] px-7 py-3 font-grotesk text-[12px] uppercase tracking-[0.2em] text-[#ffffff] transition-colors duration-300 hover:bg-[#b06a35] lg:inline-flex",
                                        children: ["Contact us", (0, r.jsx)("span", {
                                            className: "h-px w-4 bg-current transition-all duration-300 group-hover:w-6"
                                        })]
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => x(!0),
                                        "aria-label": "Open menu",
                                        className: "flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden",
                                        children: [(0, r.jsx)("span", {
                                            className: "block h-px w-6 bg-[#17140f]"
                                        }), (0, r.jsx)("span", {
                                            className: "block h-px w-6 bg-[#17140f]"
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                onMouseEnter: () => k && g(k.key),
                                style: {
                                    opacity: k ? 1 : 0,
                                    transform: k ? "translateY(0)" : "translateY(-8px)",
                                    pointerEvents: k ? "auto" : "none"
                                },
                                className: "absolute inset-x-0 top-full hidden border-t border-[#b06a35]/25 bg-[#ffffff] shadow-[0_50px_80px_-40px_rgba(23,20,15,0.45)] transition-[opacity,transform] duration-300 ease-out lg:block",
                                children: k && (0, r.jsxs)("div", {
                                    className: "mx-auto grid max-w-[1500px] grid-cols-[0.8fr_2fr_0.9fr] gap-12 px-10 py-11 lg:px-14",
                                    children: [(0, r.jsxs)("div", {
                                        className: "border-r border-[#17140f]/10 pr-10",
                                        children: [(0, r.jsx)("p", {
                                            className: "font-grotesk text-[10px] uppercase tracking-[0.28em] text-[#b06a35]",
                                            children: k.overline
                                        }), (0, r.jsx)("p", {
                                            className: "mt-5 font-grotesk text-[clamp(1.27rem,1.53vw,1.7rem)] font-normal uppercase leading-[1.02] tracking-tight text-[#17140f]",
                                            children: k.label
                                        }), (0, r.jsx)("p", {
                                            className: "mt-4 max-w-[26ch] font-hanken text-[14px] leading-relaxed text-[#57534d]",
                                            children: k.blurb
                                        }), (0, r.jsxs)(l.Link, {
                                            href: k.href,
                                            className: "group mt-7 inline-flex items-center gap-2.5 font-grotesk text-[11px] uppercase tracking-[0.18em] text-[#17140f]",
                                            children: ["View all", (0, r.jsx)("span", {
                                                className: "h-px w-6 bg-[#17140f] transition-all duration-300 group-hover:w-10"
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "grid gap-x-8 gap-y-1",
                                        style: {
                                            gridTemplateColumns: "repeat(".concat(k.columns.length, ", minmax(0, 1fr))")
                                        },
                                        children: k.columns.map(e => (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "mb-4 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-[#17140f]/70",
                                                children: e.title
                                            }), (0, r.jsx)("div", {
                                                className: "flex flex-col",
                                                children: e.items.map(e => (0, r.jsxs)(l.Link, {
                                                    href: e.href,
                                                    className: "group border-t border-[#17140f]/8 py-3 transition-colors",
                                                    children: [(0, r.jsxs)("span", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [(0, r.jsx)("span", {
                                                            className: "h-1.5 w-1.5 rounded-full ".concat(e.sold ? "bg-[#17140f]/30" : "bg-[#b06a35]")
                                                        }), (0, r.jsx)("span", {
                                                            className: "font-grotesk text-[13.5px] font-semibold uppercase tracking-tight text-[#17140f] transition-colors group-hover:text-[#b06a35]",
                                                            children: e.name
                                                        })]
                                                    }), e.sub && (0, r.jsx)("span", {
                                                        className: "mt-0.5 block pl-4 font-hanken text-[12px] text-[#57534d]",
                                                        children: e.sub
                                                    })]
                                                }, e.name))
                                            })]
                                        }, e.title))
                                    }), (0, r.jsxs)(l.Link, {
                                        href: k.featured.href,
                                        className: "group relative overflow-hidden rounded-xl bg-[#141210]",
                                        children: [(0, r.jsxs)("div", {
                                            className: "relative aspect-[4/5] w-full",
                                            children: [(0, r.jsx)(n.default, {
                                                src: k.featured.img,
                                                alt: k.featured.name,
                                                fill: !0,
                                                sizes: "360px",
                                                className: "object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                            }), (0, r.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "absolute inset-x-0 bottom-0 p-6",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-grotesk text-[10px] uppercase tracking-[0.22em] text-[#e0a456]",
                                                children: k.featured.tag
                                            }), (0, r.jsx)("p", {
                                                className: "mt-1.5 font-grotesk text-[15px] font-semibold uppercase leading-tight tracking-tight text-white",
                                                children: k.featured.name
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "fixed inset-0 z-[110] bg-[#17140f]/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ".concat(m ? "opacity-100" : "pointer-events-none opacity-0"),
                        onClick: () => x(!1)
                    }), (0, r.jsxs)("aside", {
                        className: "fixed inset-y-0 right-0 z-[120] flex w-[88%] max-w-md flex-col overflow-y-auto bg-[#ffffff] px-7 py-7 shadow-2xl transition-transform duration-500 ease-out lg:hidden ".concat(m ? "translate-x-0" : "translate-x-full"),
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, r.jsx)("span", {
                                className: "font-grotesk text-[12px] font-semibold uppercase tracking-[0.18em] text-[#17140f]",
                                children: "Kukreja"
                            }), (0, r.jsxs)("button", {
                                onClick: () => x(!1),
                                "aria-label": "Close menu",
                                className: "relative h-11 w-11",
                                children: [(0, r.jsx)("span", {
                                    className: "absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#17140f]"
                                }), (0, r.jsx)("span", {
                                    className: "absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#17140f]"
                                })]
                            })]
                        }), (0, r.jsxs)("nav", {
                            className: "mt-8 flex flex-col",
                            children: [i.map(e => {
                                let t = u === e.key;
                                return (0, r.jsxs)("div", {
                                    className: "border-b border-[#17140f]/10",
                                    children: [(0, r.jsxs)("button", {
                                        onClick: () => h(t ? null : e.key),
                                        className: "flex w-full items-center justify-between py-4 font-grotesk text-[16px] uppercase tracking-[0.14em] text-[#17140f]",
                                        children: [e.label, (0, r.jsx)("span", {
                                            className: "text-[#b06a35] transition-transform duration-300 ".concat(t ? "rotate-45" : ""),
                                            children: "+"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "grid transition-[grid-template-rows] duration-300 ".concat(t ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
                                        children: (0, r.jsx)("div", {
                                            className: "overflow-hidden",
                                            children: (0, r.jsx)("div", {
                                                className: "flex flex-col pb-4",
                                                children: Array.from(new Map(e.columns.flatMap(e => e.items).map(e => [e.href, e])).values()).map(e => (0, r.jsxs)(l.Link, {
                                                    href: e.href,
                                                    onClick: () => x(!1),
                                                    className: "flex items-center gap-2.5 py-2.5 pl-1 font-hanken text-[14.5px] font-medium text-[#2e2a24]",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "h-1.5 w-1.5 rounded-full ".concat(e.sold ? "bg-[#17140f]/30" : "bg-[#b06a35]")
                                                    }), e.name]
                                                }, e.href))
                                            })
                                        })
                                    })]
                                }, e.key)
                            }), o.map(e => (0, r.jsx)(l.Link, {
                                href: e.href,
                                onClick: () => x(!1),
                                className: "border-b border-[#17140f]/10 py-4 font-grotesk text-[16px] uppercase tracking-[0.14em] text-[#17140f]",
                                children: e.label
                            }, e.href))]
                        }), (0, r.jsxs)("div", {
                            className: "mt-auto pt-8",
                            children: [(0, r.jsx)(l.Link, {
                                href: "/contact",
                                onClick: () => x(!1),
                                className: "block rounded-full bg-[#17140f] px-6 py-4 text-center font-grotesk text-[12px] uppercase tracking-[0.2em] text-[#ffffff] transition-colors hover:bg-[#b06a35]",
                                children: "Contact us"
                            }), (0, r.jsx)("a", {
                                href: "tel:+917888012200",
                                className: "mt-5 block text-center font-grotesk text-[14px] font-medium tracking-wide text-[#17140f]",
                                children: "+91 78880 12200"
                            })]
                        })]
                    })]
                })
            }
        },
        1855: (e, t, a) => {
            a.d(t, {
                default: () => f
            });
            var r = a(5155),
                s = a(5565),
                n = a(3126),
                l = a(206);
            let i = [{
                    label: "About Us",
                    href: "/our-story"
                }, {
                    label: "Projects",
                    href: "/projects"
                }, {
                    label: "NRI Corner",
                    href: "/nri"
                }, {
                    label: "Awards",
                    href: "/our-story"
                }, {
                    label: "Blog",
                    href: "/blog"
                }, {
                    label: "Careers",
                    href: "/careers"
                }, {
                    label: "Contact",
                    href: "/contact"
                }, {
                    label: "Become a Channel Partner",
                    href: "/contact"
                }],
                o = [{
                    label: "The One",
                    href: "/the-one"
                }, {
                    label: "Paris City",
                    href: "/paris-city"
                }, {
                    label: "West 19",
                    href: "/west-19"
                }, {
                    label: "Infinity East",
                    href: "/infinity-east"
                }, {
                    label: "Kukreja Anandam World City",
                    href: "/anandam-world-city"
                }, {
                    label: "Kukreja Business Park",
                    href: "/business-park"
                }, {
                    label: "Kukreja Embassy II",
                    href: "/embassy-2"
                }, {
                    label: "Kukreja Infinity",
                    href: "/kukreja-infinity"
                }, {
                    label: "Kukreja Embassy",
                    href: "/kukreja-embassy"
                }],
                c = [{
                    label: "Instagram",
                    href: "https://www.instagram.com/kukreja_infrastructures/",
                    Icon: l.snP
                }, {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/kukreja-infrastructures/",
                    Icon: l.VbI
                }, {
                    label: "Facebook",
                    href: "https://www.facebook.com/KukrejaInfrastructures",
                    Icon: l.Ciy
                }, {
                    label: "YouTube",
                    href: "https://www.youtube.com/@kukrejainfrastructures",
                    Icon: l.V6K
                }];

            function f() {
                return (0, r.jsxs)("footer", {
                    className: "relative overflow-hidden bg-[#0a0a0a] text-white",
                    children: [(0, r.jsxs)("div", {
                        className: "grid gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-24 lg:grid-cols-[1.5fr_1fr_1.15fr_0.9fr] lg:px-16",
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                className: "relative h-10 w-40",
                                children: (0, r.jsx)(s.default, {
                                    src: "/logo-white.png",
                                    alt: "Kukreja Infrastructures",
                                    fill: !0,
                                    className: "object-contain object-left"
                                })
                            }), (0, r.jsx)("p", {
                                className: "mt-6 max-w-xs font-hanken text-[15px] leading-relaxed text-white/55",
                                children: "A fifteen year legacy of premium residential, commercial and township developments across Nagpur."
                            }), (0, r.jsx)("a", {
                                href: "tel:+917888012200",
                                className: "mt-6 block font-grotesk text-[15px] tracking-wide text-white/85 transition-colors hover:text-white",
                                children: "+91 78880 12200"
                            }), (0, r.jsx)("a", {
                                href: "mailto:info@kinfra.in",
                                className: "mt-1 block font-hanken text-[15px] text-white/65 transition-colors hover:text-white",
                                children: "info@kinfra.in"
                            }), (0, r.jsx)("p", {
                                className: "mt-4 font-grotesk text-[11px] uppercase tracking-[0.24em] text-white/40",
                                children: "Museum Road, Civil Lines, Nagpur 440026"
                            })]
                        }), (0, r.jsx)(d, {
                            title: "Quick Menu",
                            links: i
                        }), (0, r.jsx)(d, {
                            title: "Quick Links",
                            links: o
                        }), (0, r.jsx)(d, {
                            title: "Follow",
                            links: c,
                            external: !0
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col items-start justify-between gap-4 border-t border-white/10 px-6 py-7 md:flex-row md:items-center md:px-12 lg:px-16",
                        children: [(0, r.jsx)("p", {
                            className: "font-grotesk text-[11px] uppercase tracking-[0.2em] text-white/40",
                            children: "\xa9 2026 Kukreja Infrastructures"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-x-6 gap-y-2",
                            children: [(0, r.jsx)(n.Link, {
                                href: "/privacy",
                                className: "font-grotesk text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/80",
                                children: "Privacy Policy"
                            }), (0, r.jsx)(n.Link, {
                                href: "/terms",
                                className: "font-grotesk text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/80",
                                children: "Terms & Conditions"
                            }), (0, r.jsx)("p", {
                                className: "font-grotesk text-[11px] uppercase tracking-[0.2em] text-white/40",
                                children: "Open 7 days \xb7 10–7"
                            })]
                        })]
                    })]
                })
            }

            function d(e) {
                let {
                    title: t,
                    links: a,
                    external: s
                } = e;
                return (0, r.jsxs)("nav", {
                    className: "flex flex-col gap-3.5",
                    children: [(0, r.jsx)("p", {
                        className: "font-grotesk text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b06a35]",
                        children: t
                    }), a.map(e => s ? (0, r.jsxs)("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group flex w-fit items-center gap-3 font-hanken text-[15.5px] text-white/70 transition-colors duration-300 hover:text-white",
                        children: [e.Icon && (0, r.jsx)(e.Icon, {
                            "aria-hidden": !0,
                            className: "shrink-0 text-[26px] text-white transition-colors duration-300 group-hover:text-[#e0a456]"
                        }), e.label]
                    }, e.label) : (0, r.jsx)(n.Link, {
                        href: e.href,
                        className: "w-fit font-hanken text-[15.5px] text-white/70 transition-colors duration-300 hover:text-white",
                        children: e.label
                    }, e.label))]
                })
            }
        }
    }
]);