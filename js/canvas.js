!function() {
    "use strict";
    var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        return window.setTimeout(e, 1e3 / 60)
    }
      , t = []
      , n = document.getElementById("canvas")
      , i = n.getContext("2d")
      , a = 400
      , o = -100
      , r = -100;
    function d() {
        n.width = n.scrollWidth,
        n.height = n.scrollHeight,
        a = Math.min(400, n.width / 5)
    }
    function h() {
        if (i.clearRect(0, 0, n.width, n.height),
        a > t.length)
            for (var d = t.length; d < a; d++)
                t.push(s());
        for (d = 0; d < t.length; d++) {
            var c = t[d]
              , m = o
              , u = r
              , v = c.x
              , w = c.y
              , f = Math.sqrt((v - m) * (v - m) + (w - u) * (w - u));
            if (f < 150) {
                var M = (m - v) / f
                  , p = (u - w) / f
                  , g = 150 / (f * f) / 2;
                c.velX -= g * M,
                c.velY -= g * p
            } else
                c.velX *= .98,
                c.velY <= c.speed && (c.velY = c.speed),
                c.velX += Math.cos(c.step += .05) * c.stepSize;
            i.fillStyle = "rgba(255,255,255," + c.opacity + ")",
            c.y += c.velY,
            c.x += c.velX,
            (c.y >= n.height || c.y <= 0) && !1 === l(c) ? t.splice(d--, 1) : (c.x >= n.width || c.x <= 0) && !1 === l(c) ? t.splice(d--, 1) : (i.beginPath(),
            i.arc(c.x, c.y, c.size, 0, 2 * Math.PI),
            i.fill())
        }
        e(h)
    }
    function l(e) {
        return !(a < t.length) && (e.x = Math.floor(Math.random() * n.width),
        e.y = 0,
        e.size = 3 * Math.random() + 2,
        e.speed = 1 * Math.random() + .5,
        e.velY = e.speed,
        e.velX = 0,
        e.opacity = .5 * Math.random() + .3,
        !0)
    }
    function s() {
        var e = Math.floor(Math.random() * n.width)
          , t = Math.floor(Math.random() * n.height)
          , i = 3 * Math.random() + 2
          , a = 1 * Math.random() + .5
          , o = .5 * Math.random() + .3;
        return {
            speed: a,
            velY: a,
            velX: 0,
            x: e,
            y: t,
            size: i,
            stepSize: Math.random() / 30,
            step: 0,
            opacity: o
        }
    }
    var c = document.querySelector(".splash");
    c && c.addEventListener("mousemove", function(e) {
        o = e.clientX,
        r = e.clientY
    }),
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("resize", d),
        d(),
        function() {
            a = n.width / 5;
            for (var e = 0; e < a; e++)
                t.push(s());
            h()
        }()
    })
}();
