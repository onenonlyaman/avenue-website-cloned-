(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4345, 7066, 9877], {
        3744: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 9573)), Promise.resolve().then(t.bind(t, 1640)), Promise.resolve().then(t.bind(t, 1855)), Promise.resolve().then(t.bind(t, 3126))
        },
        9573: (e, r, t) => {
            "use strict";
            t.d(r, {
                default: () => d
            });
            var i = t(5155),
                s = t(2115),
                n = t(5782),
                o = t(1478),
                l = t(5415);

            function d(e) {
                let {
                    children: r
                } = e;
                return (0, s.useEffect)(() => {
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    let e = new n.A({
                        lerp: .085,
                        smoothWheel: !0,
                        wheelMultiplier: 1,
                        touchMultiplier: 1.6
                    });
                    e.on("scroll", l.u.update);
                    let r = r => e.raf(1e3 * r);
                    return o.os.ticker.add(r), o.os.ticker.lagSmoothing(0), window.__lenis = e, () => {
                        o.os.ticker.remove(r), e.destroy(), delete window.__lenis
                    }
                }, []), (0, i.jsx)(i.Fragment, {
                    children: r
                })
            }
            o.os.registerPlugin(l.u)
        }
    },
    e => {
        var r = r => e(e.s = r);
        e.O(0, [4506, 5592, 7970, 8173, 4881, 1478, 5415, 5542, 8441, 1517, 7358], () => r(3744)), _N_E = e.O()
    }
]);