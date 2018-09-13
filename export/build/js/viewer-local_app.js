var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Modernizr.addTest("retina", function() {
    return window.devicePixelRatio > 1;
}), Modernizr.addTest("android", function() {
    return window.navigator.userAgent.toLowerCase().match(/Android/i);
}), Modernizr.addTest("amazonsilk", function() {
    return /\bSilk\b/.test(navigator.userAgent);
}), Modernizr.addTest("Mac", function() {
    return -1 != window.navigator.userAgent.indexOf("Mac");
}), Modernizr.addTest("webkit", function() {
    return -1 != window.navigator.userAgent.indexOf("AppleWebKit");
}), Modernizr.addTest("opera", function() {
    return !(!window.opera || !window.opera.buildNumber);
}), Modernizr.addTest("msie", function() {
    return !!Function("/*@cc_on return document.documentMode===10@*/")();
}), Modernizr.addTest("msie11", function() {
    return -1 != navigator.userAgent.indexOf("Trident/") && (-1 != navigator.userAgent.indexOf("rv:") || -1 != navigator.appName.indexOf("Netscape"));
}), Modernizr.addTest("winphone8", function() {
    return -1 != navigator.userAgent.indexOf("Trident/") && (-1 != navigator.userAgent.indexOf("Phone") || -1 != navigator.userAgent.indexOf("IEMobile/"));
}), Modernizr.addTest("safari", function() {
    return -1 != navigator.userAgent.indexOf("Safari") && (-1 != navigator.userAgent.indexOf("Mac") || navigator.userAgent.indexOf("Windows")) && -1 == navigator.userAgent.indexOf("Chrome");
}), Modernizr.addTest("safari5", function() {
    return !!navigator.userAgent.match(" Safari/") && !navigator.userAgent.match(" Chrom") && !!navigator.userAgent.match(" Version/5.");
}), Modernizr.addTest("isboxversion", function() {
    return 1 == window.isboxversion;
}), Modernizr.addTest("isdesktop", function() {
    return 1 == window.isdesktop;
}), Modernizr.addTest("istablet", function() {
    return 1 == window.istablet;
}), Modernizr.addTest("isphone", function() {
    return 1 == window.isphone;
}), Modernizr.addTest("firefox", function() {
    return window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}), Modernizr.addTest("edge", function() {
    return window.navigator.userAgent.toLowerCase().indexOf("edge") > -1;
}), Modernizr.addTest("csspositionsticky", function() {
    var t = "position:", e = document.createElement("modernizr").style;
    return e.cssText = t + Modernizr._prefixes.join("sticky;" + t).slice(0, -t.length), -1 !== e.position.indexOf("sticky");
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t : t(jQuery);
}(function(t) {
    var e = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], i = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], s = navigator.platform.toUpperCase().indexOf("WIN") >= 0, n = navigator.platform.toUpperCase().indexOf("MAC") >= 0, a = navigator.userAgent.toUpperCase().indexOf("FIREFOX") >= 0, o = navigator.userAgent.toUpperCase().indexOf("OPERA") >= 0;
    if (t.event.fixHooks) for (var r = e.length; r; ) t.event.fixHooks[e[--r]] = t.event.mouseHooks;
    function l(e) {
        var i = e || window.event, r = [].slice.call(arguments, 1), l = 0, c = 0, d = 0;
        (e = t.event.fix(i)).type = "mousewheel", i.detail && (l = -1 * i.detail), i.wheelDelta && (l = i.wheelDelta), 
        i.deltaY && (l = d = -1 * i.deltaY), i.deltaX && (l = c = -1 * i.deltaX), void 0 !== i.wheelDeltaY && (d = i.wheelDeltaY), 
        void 0 !== i.wheelDeltaX && (c = i.wheelDeltaX);
        var h = 1;
        return n && a && Math.abs(l - Math.round(l)) > 1e-7 && (h *= 120), s && a && (h *= 40), n && o && (h /= 15), 
        l *= h, c *= h, d *= h, r.unshift(e, l, c, d), (t.event.dispatch || t.event.handle).apply(this, r);
    }
    t.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var t = i.length; t; ) this.addEventListener(i[--t], l, !1); else this.onmousewheel = l;
        },
        teardown: function() {
            if (this.removeEventListener) for (var t = i.length; t; ) this.removeEventListener(i[--t], l, !1); else this.onmousewheel = null;
        }
    }, t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t);
        }
    });
}), function(t, e) {
    t.fn.RMDrag = function(e) {
        if (!e) return this;
        "function" == typeof e && (e = {
            start: arguments[0],
            move: arguments[1],
            stop: arguments[2]
        }), e.start = e.start || e.begin || e.down, e.stop = e.stop || e.end || e.up, e.move = e.move || e.drag, 
        e.silent = void 0 === e.silent || e.silent;
        var i, s = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
        }, n = {
            X: 200,
            Y: 200
        }, a = this[0], o = t(a);
        function r(t) {
            d(t), i.moved = !0;
            var s = t.pageX - i.startX, o = t.pageY - i.startY, r = s - i.deltaX || s, l = o - i.deltaY || o;
            Math.abs(r) > n.X && (r = i.velocityX), Math.abs(l) > n.Y && (l = i.velocityY), i.deltaX = s, i.deltaY = o, 
            i.velocityX = r, i.velocityY = l, c(t), "function" == typeof e.move && e.move.call(a, t), window._moveInProcess = !0;
        }
        function l(n) {
            d(n), i.duration = Number(new Date()) - i.startTime, i.moved && (window.suppressClick = +new Date() + 100), 
            c(n), t(document).off(s.move, r).off(s.end, l), "function" == typeof e.stop && e.stop.call(a, n), window._moveInProcess = !1, 
            e.dragClass && "string" == typeof e.dragClass && o.removeClass(e.dragClass);
        }
        function c(t) {
            for (prop in i) t[prop] = i[prop];
        }
        function d(t) {
            t && (e.preventDefault && t.preventDefault(), e.silent && t.stopPropagation());
        }
        return this.on(s.start, function(n) {
            if (d(n), window._moveInProcess) return;
            i = {
                startX: n.pageX,
                startY: n.pageY,
                deltaX: 0,
                deltaY: 0,
                velocityX: 0,
                velocityY: 0,
                moved: !1,
                startTime: Number(new Date()),
                duration: 0
            }, c(n), t(document).on(s.move, r).on(s.end, l), "function" == typeof e.start && e.start.call(a, n);
            e.dragClass && "string" == typeof e.dragClass && o.addClass(e.dragClass);
        }), this;
    };
}(jQuery), function(t) {
    t.fn.RMAltText = function(e) {
        var i = [], s = "rmalttext", n = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }, a = function(i) {
            var a = {
                direction: "top",
                offset: 9,
                manual: !1,
                container: null,
                keepInBounds: !1
            };
            e && t.extend(a, e);
            var o = a.container && a.container.length ? a.container : t("body");
            if ((!i.hasClass(s) || a.text) && Modernizr.isdesktop) {
                i.addClass(s);
                var r = i.attr("data-alt") || a.text;
                if (r) {
                    var l, c, d, h = '<div class="rmalttext-wrapper">\t\t\t\t\t\t\t\t\t\t<div class="rmalttext-content">' + r + '</div>\t\t\t\t\t\t\t\t\t\t<div class="rmalttext-corner-wrapper"><div class="rmalttext-corner"></div></div>\t\t\t\t\t\t\t\t\t</div>';
                    return a.manual || i.on("mouseenter", p).on("mouseleave", u).on("click", w).on("rmalt-hide", w), i.on("DOMNodeRemovedFromDocument", w), 
                    {
                        hide: w,
                        show: g,
                        update: v,
                        destroy: function() {
                            w(), i.removeClass(s), i.off("mouseenter", p).off("mouseleave", u).off("click", w).off("rmalt-hide", w).off("DOMNodeRemovedFromDocument", w);
                        },
                        getElement: function() {
                            return l;
                        }
                    };
                }
            }
            function p(e) {
                var i = t(e.currentTarget), s = 800, n = !1;
                window.rmalt_current_shown && window.rmalt_current_shown !== i && (window.rmalt_current_shown.trigger("rmalt-hide"), 
                s = 0, n = !0), c = setTimeout(g.bind(i[0], n), s);
            }
            function u() {
                clearTimeout(c), clearInterval(d), c = setTimeout(function() {
                    window.rmalt_current_shown = null, l && l.fadeOut(150, function() {
                        l.remove(), l = void 0;
                    });
                }, 400);
            }
            function g(e) {
                var s = e ? 0 : 200;
                if (clearTimeout(c), clearInterval(d), !(i.hasClass("rmalttext-disable") || i.hasClass("active") || i.hasClass("disabled") || i.hasClass("no-hover"))) {
                    if (!l) {
                        (l = t(h).appendTo(o)).find(".rmalttext-content").text(i.attr("data-alt"));
                        var n = i.attr("data-alt-style") || a.cssClass;
                        n && l.addClass(n), l.css({
                            display: "none"
                        }), v();
                    }
                    l.fadeIn(s), window.rmalt_current_shown = i, d = setInterval(function() {
                        i instanceof jQuery && function(t) {
                            t instanceof jQuery && (t = t.get(0));
                            var e = t.getBoundingClientRect();
                            return e.width > 0 && e.height > 0;
                        }(i) || w();
                    }.bind(i), 200);
                }
            }
            function m(e) {
                var i = t(window).width(), s = t(window).height();
                return e.top >= 0 && e.bottom <= s && e.left >= 0 && e.right <= i;
            }
            function f(t, e) {
                var i, s;
                return "top" == (t = t || a.direction) && (i = e.targetX + (e.targetW - e.tipW) / 2, s = e.targetY - e.offset - e.tipH), 
                "bottom" == t && (i = e.targetX + (e.targetW - e.tipW) / 2, s = e.targetY + e.targetH + e.offset), "left" == t && (i = e.targetX - e.offset - e.tipW, 
                s = e.targetY + (e.targetH - e.tipH) / 2), "right" == t && (i = e.targetX + e.targetW + e.offset, s = e.targetY + (e.targetH - e.tipH) / 2), 
                {
                    left: i = Math.floor(i),
                    top: s = Math.floor(s),
                    right: i + e.tipW,
                    bottom: s + e.tipH,
                    relativeLeft: i - e.containerX,
                    relativeTop: s - e.containerY
                };
            }
            function v() {
                l || this.destroy();
                var t = o[0].getBoundingClientRect(), e = i[0].getBoundingClientRect(), s = i.attr("data-alt-pos") || a.direction, r = {
                    offset: i.attr("data-alt-offset") ? i.attr("data-alt-offset") - 0 : a.offset,
                    tipW: l.outerWidth(!1),
                    tipH: l.outerHeight(!1),
                    targetX: e.left,
                    targetY: e.top,
                    containerX: t.left,
                    containerY: t.top,
                    targetW: e.width,
                    targetH: e.height
                }, c = f(s, r);
                if (a.keepInBounds && !m(c)) {
                    var d = n[s], h = [ d ].concat(_.without(_.keys(n), s, d));
                    c = f(s = (s = _.find(h, function(t) {
                        return m(f(t, r));
                    })) || "top", r);
                }
                l.addClass("rmalttext-" + s), l.css({
                    left: c.relativeLeft,
                    top: c.relativeTop
                });
            }
            function w() {
                clearTimeout(c), clearInterval(d), window.rmalt_current_shown = null, l && l.remove(), l = void 0;
            }
        };
        return this.each(function() {
            var e = a(t(this));
            i.push(e);
        }), {
            show: function() {
                i.forEach(function(t) {
                    t && t.show();
                });
            },
            hide: function() {
                i.forEach(function(t) {
                    t && t.hide();
                });
            },
            destroy: function() {
                i.forEach(function(t) {
                    t && t.destroy();
                });
            },
            update: function() {
                i.forEach(function(t) {
                    t && t.update();
                });
            },
            getElement: function() {
                return i && i[0] && i[0].getElement();
            }
        };
    };
}(jQuery), jQuery.keycodes = {
    enter: 13,
    esc: 27,
    tab: 9,
    alt: 18,
    shift: 16,
    pgUp: 33,
    pgDn: 34,
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    del: 46,
    backspace: 8,
    f: 70,
    comma: 188,
    g: 71,
    h: 72,
    s: 83,
    w: 87,
    v: 86,
    x: 88,
    b: 66,
    m: 77
}, function(t, e) {
    var i = {
        update_playing_element: function(t, e, i) {
            var s = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + .2 * i.a + ")", n = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + .1 * i.a + ")";
            t.style.cssText += "background: -webkit-linear-gradient(left, " + s + e + "%, " + n + (e + .1) + "%);background: linear-gradient(to right, " + s + e + "%, " + n + (e + .1) + "%);";
        }
    };
    for (var s in t.SOUNDCITE_CONFIG) i[s] = t.SOUNDCITE_CONFIG[s];
    t.soundcite = {}, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? soundcite.mobile = !0 : soundcite.mobile = !1;
    var n, a, o = e.head || e.getElementsByTagName("head").item(0) || e.documentElement.childNodes[0], r = [], l = "none", c = "none", d = [], h = [];
    function p(t) {
        var i = {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
        if (e.defaultView && e.defaultView.getComputedStyle) {
            var s = e.defaultView.getComputedStyle(t, null);
            if (s) {
                var n = s.getPropertyValue("color").toLowerCase(), a = n.match(/\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/) || n.match(/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/);
                a ? i = {
                    r: a[1] - 0,
                    g: a[2] - 0,
                    b: a[3] - 0,
                    a: void 0 !== a[4] ? a[4] - 0 : 1
                } : (n = n.replace("#", ""), i = {
                    r: parseInt(n.substring(0, 2), 16),
                    g: parseInt(n.substring(2, 4), 16),
                    b: parseInt(n.substring(4, 6), 16),
                    a: 1
                });
            }
        }
        return i;
    }
    var u = function(t, e) {
        var i = Array.prototype.slice, s = i.call(arguments, 2);
        return function() {
            return t.apply(e, s.concat(i.call(arguments)));
        };
    };
    function g(t, e) {
        for (var i = t.split("."), s = e.split("."), n = 0; n < Math.min(i.length, s.length); n++) {
            var a = parseInt(i[n]) - parseInt(s[n]);
            if (a) return a;
        }
        return i.length - s.length;
    }
    function m(t, e) {
        for (var i = t.className, s = 0, n = e.match(/\S+/g); s < n.length; s++) i = i.replace(new RegExp("(?:^|\\s)" + n[s] + "(?!\\S)"), "");
        t.className = i;
    }
    function f(t, e) {
        for (var i = t.className, s = 0, n = e.match(/\S+/g); s < n.length; s++) i.match(new RegExp("(?:^|\\s)" + n[s] + "(?!\\S)")) || (i += " " + n[s]);
        t.className = i;
    }
    function v(t) {
        this.el = t, this.start = t.hasAttribute("data-start") ? t.getAttribute("data-start") : 0, this.end = t.hasAttribute("data-end") ? t.getAttribute("data-end") : null, 
        this.plays = t.hasAttribute("data-plays") ? parseInt(t.getAttribute("data-plays")) : 1, this.plays_left = this.plays, 
        this.playing = !1, this.sound = null, this.click_handler_binded = u(this.click_handler, this), r.push(this);
    }
    function _(t) {
        v.apply(this, Array.prototype.slice.call(arguments)), this.id = t.getAttribute("data-id"), "initialized" !== l && (n.initialize({
            client_id: "5ba7fd66044a60db41a97cb9d924996a"
        }), l = "initialized"), n.stream(this.id, u(function(t) {
            this.destroyed ? t._player.kill && t._player.kill() : (this.sound = t, this.sound._player.on("positionChange", u(function(t) {
                this.track_progress(), this.playing && (t < this.start && this.sound.seek(this.start), t >= this.end && (this.plays ? (this.plays_left--, 
                this.plays_left > 0 ? this.play() : this.stop()) : this.play(), this.track_progress()), this.prevPos = t);
            }, this)), null === this.end && (this.end = this.sound.getDuration()), this.sound_loaded());
        }, this));
    }
    function w(t) {
        v.apply(this, Array.prototype.slice.call(arguments)), this.id = "soundcite-audio-" + this.generateUUID(), 
        this.url = t.getAttribute("data-url"), this.start = Math.floor(this.start / 1e3), null !== this.end && (this.end = Math.floor(this.end / 1e3)), 
        "initialized" != c && (soundcite.audio_container = e.createElement("div"), f(soundcite.audio_container, "soundcite-audio"), 
        e.getElementsByTagName("body")[0].appendChild(soundcite.audio_container), c = "initialized"), this.audio = e.createElement("audio"), 
        this.audio.id = this.id, this.audio.setAttribute("src", this.url), this.audio.setAttribute("preload", "none"), 
        soundcite.mobile = !0, soundcite.audio_container.appendChild(this.audio), this.sound = a("#" + this.id, {
            frameAnimation: !0
        }), this.sound.on("loadeddata", u(function() {
            null === this.end && (this.end = this.sound.duration()), soundcite.mobile || this.sound_loaded();
        }, this)), soundcite.mobile ? this.sound_loaded() : this.sound.readyState() > 1 && this.sound_loaded();
    }
    v.prototype.generateUUID = function() {
        var t = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var i = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16);
        });
    }, v.prototype.sound_loaded = function() {
        this.el.addEventListener("click", this.click_handler_binded), m(this.el, "soundcite-initializing"), 
        this.el.style.display = "none", this.el.offsetHeight, this.el.style.display = "", f(this.el, "soundcite-loaded soundcite-play");
    }, v.prototype.pause = function() {
        m(this.el, "soundcite-pause"), f(this.el, "soundcite-play"), this.playing = !1, this.pause_sound();
    }, v.prototype.stop = function() {
        m(this.el, "soundcite-pause"), f(this.el, "soundcite-play"), this.playing = !1, this.plays_left = this.plays, 
        this.stop_sound();
    }, v.prototype.track_progress = function() {
        var t = this.end - this.start, e = 100 * (this.sound_position() - this.start) / t;
        this.color || (this.color = p(this.el)), i.update_playing_element(this.el, e, this.color);
    }, v.prototype.click_handler = function(t) {
        t.preventDefault(), function(t) {
            for (var e = 0; e < r.length; e++) r[e].playing && (t && t.el === r[e].el || r[e].pause());
        }(this), this.playing ? this.pause() : this.play();
    }, v.prototype.destroy = function(t) {
        this.destroyed = !0, this.playing && this.pause(), this.el && m(this.el, "soundcite-loaded soundcite-initializing soundcite-loading soundcite-play soundcite-pause"), 
        this.el && this.el.removeEventListener("click", this.click_handler_binded);
    }, _.prototype = Object.create(v.prototype), _.prototype.sound_position = function() {
        return this.sound.getCurrentPosition();
    }, _.prototype.pause_sound = function() {
        this.sound.pause();
    }, _.prototype.stop_sound = function() {
        this.sound.stop();
    }, _.prototype.play = function() {
        var t = this.sound_position();
        (t < this.start || t >= this.end) && this.sound.seek(this.start), m(this.el, "soundcite-play"), f(this.el, "soundcite-pause"), 
        this.sound.play(), this.playing = !0, this.prevPos = -1;
    }, _.prototype.destroy = function() {
        this.sound && this.sound._player.kill && this.sound._player.kill(), v.prototype.destroy.apply(this, arguments);
    }, w.prototype = Object.create(v.prototype), w.prototype.sound_position = function() {
        return this.sound.currentTime();
    }, w.prototype.pause_sound = function() {
        this.sound.pause(), this.sound.off("timeupdate");
    }, w.prototype.stop_sound = function() {
        this.sound.off("timeupdate"), this.sound.pause();
    }, w.prototype._play_sound = function() {
        m(this.el, "soundcite-loading soundcite-play"), f(this.el, "soundcite-pause"), this.sound.play(), this.playing = !0, 
        this.sound.on("timeupdate", u(function() {
            this.track_progress(), this.playing && this.sound.currentTime() >= this.end && (this.plays ? (this.plays_left--, 
            this.plays_left > 0 ? this.play_sound() : this.stop()) : this.play_sound(), this.track_progress());
        }, this));
    }, w.prototype.play_sound = function() {
        var t = this.sound.currentTime();
        t < this.start || t >= this.end ? (this.sound.on("seeked", u(function() {
            this.sound.off("seeked"), this._play_sound();
        }, this)), this.sound.currentTime(this.start)) : this._play_sound();
    }, w.prototype.play = function() {
        /soundcite\-loading/.test(this.el.className) || (soundcite.mobile ? (m(this.el, "soundcite-play"), f(this.el, "soundcite-loading"), 
        this.startedLoading ? this.play_sound() : (this.sound.on("canplaythrough", u(function() {
            this.play_sound();
        }, this)), e.getElementById(this.id).load()), this.startedLoading = !0) : this.play_sound());
    }, w.prototype.destroy = function() {
        this.sound && a.destroy(this.sound), this.audio && soundcite.audio_container.removeChild(this.audio), 
        v.prototype.destroy.apply(this, arguments);
    }, soundcite.createPlayer = function(s) {
        f(s, "soundcite-initializing"), f(s, "soundcite-force-bg-color"), i.update_playing_element(s, 0, p(s)), 
        s.getAttribute("data-url") && ("none" == c ? (h.push(s), function(i, s) {
            var n, a, r = t.Popcorn;
            if (c = "loading", !r || g(i, r.version) > 0 || s(r, c = "loaded")) {
                var l = e.createElement("script");
                l.type = "text/javascript", l.src = "/js/libs/popcorn.min.js", l.onload = l.onreadystatechange = function() {
                    "loading" != c || (n = this.readyState) && "loaded" != n && "complete" != n || (a = t.Popcorn, r && (t.Popcorn = r), 
                    s(a, c = "loaded"), o.removeChild(l));
                }, o.appendChild(l);
            }
        }("1.5.6", function(t) {
            a = t;
            for (var e = 0; e < h.length; e++) new w(h[e]);
        })) : "loading" == c ? h.push(s) : new w(s)), s.getAttribute("data-id") && ("none" == l ? (d.push(s), 
        function(i, s) {
            var n, a = t.SC;
            if (l = "loading", !a || !a.Dialog || g(i, a._version) > 0 || s(a, l = "loaded")) {
                var r = e.createElement("script");
                r.type = "text/javascript", r.src = "//connect.soundcloud.com/sdk-2.0.0.js", r.onload = r.onreadystatechange = function() {
                    "loading" != l || (n = this.readyState) && "loaded" != n && "complete" != n || (s(t.SC, l = "loaded"), 
                    o.removeChild(r));
                }, o.appendChild(r);
            }
        }("2.0.0", function(t) {
            n = t;
            for (var e = 0; e < d.length; e++) new _(d[e]);
        })) : "loading" == l ? d.push(s) : new _(s));
    }, soundcite.destroyPlayer = function(t) {
        for (var e = r.length - 1; e >= 0; e--) r[e].el == t && (r[e].destroy(), r.splice(e, 1));
        for (e = h.length - 1; e >= 0; e--) h[e] == t && h.splice(e, 1);
        for (e = d.length - 1; e >= 0; e--) d[e] == t && d.splice(e, 1);
    }, soundcite.pausePlayer = function(t) {
        for (var e = 0; e < r.length; e++) t == r[e].el && r[e].playing && r[e].pause();
    }, soundcite.setElementsColor = function(t) {
        i.update_playing_element(t, 0, p(t));
    };
}(window, document), function(t, e) {
    t.fn.RMScroll = function(e) {
        var i = function(t, e) {
            this.options = _.clone(t), this.$scroll = e, this.incDelta = 0, this.mouseWheelProceedThrottled = _.throttle(this.mouseWheelProceed, 50), 
            _.defaults(this.options, {
                gap_start: 0,
                gap_end: 0,
                $gutter: null,
                tp: "vertical",
                wheelScrollSpeed: 1,
                scrollStep: 1,
                maxHandleSize: 9999,
                dragScroll: !1,
                systemScroll: !1,
                needRecalc: !0,
                savedScrollPosition: 0
            });
        };
        i.prototype = {
            initialize: function() {
                _.bindAll(this), this.options.$container.bind("scroll", this.onScroll), this.options.systemScroll || this.options.$container.bind("mousewheel", this.onMouseWheel), 
                this.options.$handle.RMDrag({
                    start: this.startScrollDrag,
                    move: this.moveScrollDrag,
                    end: this.stopScrollDrag,
                    silent: !0,
                    preventDefault: !0
                }), this.options.dragScroll && this.options.$content.RMDrag({
                    start: this.startContentDrag,
                    move: this.moveContentDrag,
                    end: this.stopContentDrag,
                    silent: !0,
                    preventDefault: !0
                }), this.data = {
                    handle_pos: 0,
                    handle_size: 0,
                    container_size: 0,
                    content_size: 0,
                    scroll_pos: 0,
                    scroll_percent: 0,
                    save: !0
                }, this.options.needRecalc && this.recalc();
            },
            onMouseWheel: function(t, e, i, s) {
                this.options.savedScrollPosition = 0, t.preventDefault(), (i || s) && ("vertical" == this.options.tp ? e = s : (e = i || s, 
                t.stopPropagation()));
                var n = -Math.ceil(e * this.options.wheelScrollSpeed);
                this.incDelta += n, this.mouseWheelProceedThrottled(this.incDelta);
            },
            mouseWheelProceed: function(t) {
                if (t > 0 && t < this.options.scrollStep && (t = this.options.scrollStep), t < 0 && t > -this.options.scrollStep && (t = -this.options.scrollStep), 
                "vertical" == this.options.tp) {
                    var e = t + this.options.$container.scrollTop();
                    e -= e % this.options.scrollStep, this.options.$container.scrollTop(e);
                } else {
                    e = t + this.options.$container.scrollLeft();
                    e -= e % this.options.scrollStep, this.options.$container.scrollLeft(e);
                }
                this.incDelta = 0;
            },
            changeGaps: function(t) {
                void 0 != (t = t || {}).gap_start && (this.options.gap_start = t.gap_start), void 0 != t.gap_end && (this.options.gap_end = t.gap_end), 
                this.recalc();
            },
            recalc: function() {
                this.data.container_size = "vertical" == this.options.tp ? this.options.$container.height() : this.options.$container.width(), 
                this.data.container_size_with_gaps = this.data.container_size - this.options.gap_start - this.options.gap_end, 
                this.data.content_size = "vertical" == this.options.tp ? this.options.$content.outerHeight(!0) : this.options.$content.outerWidth(!0), 
                this.data.handle_size = this.data.container_size_with_gaps / this.data.content_size, this.data.handle_size = Math.max(Math.min(this.data.handle_size, 1), 0), 
                this.data.handle_size = Math.sqrt(this.data.handle_size), this.data.handle_size = Math.ceil(this.data.handle_size * this.data.container_size_with_gaps), 
                this.data.handle_size = Math.min(this.data.handle_size, this.options.maxHandleSize), this.data.container_size >= this.data.content_size ? (this.options.$handle.css("display", "none"), 
                this.options.$gutter && this.options.$gutter.css("display", "none")) : (this.options.$handle.css("display", "block"), 
                this.options.$gutter && this.options.$gutter.css("display", "block")), this.options.$handle.css("vertical" == this.options.tp ? "height" : "width", this.data.handle_size), 
                this.onScroll();
            },
            clearScroll: function() {
                this.options.$container.scrollTop(0);
            },
            onScroll: function(t) {
                this.data.scroll_pos = "vertical" == this.options.tp ? this.options.$container.scrollTop() : this.options.$container.scrollLeft();
                var e = this.data.content_size - this.data.container_size;
                this.data.scroll_pos > e && (this.data.scroll_pos = e), this.data.scroll_percent = e > 0 ? this.data.scroll_pos / e : 0, 
                this.data.handle_pos = this.options.gap_start + Math.ceil(this.data.scroll_percent * (this.data.container_size_with_gaps - this.data.handle_size)), 
                this.options.$handle.css("vertical" == this.options.tp ? "top" : "left", this.data.handle_pos), this.data.scroll_event = t, 
                0 != this.options.savedScrollPosition && this.options.$container.scrollTop(this.options.savedScrollPosition), 
                "function" == typeof this.options.onScroll && this.options.onScroll(this.data);
            },
            startScrollDrag: function(t) {
                this.options.savedScrollPosition = 0, this.options.$handle.addClass("dragging"), this.oldHandlePos = this.data.handle_pos;
            },
            moveScrollDrag: function(t) {
                var e = "vertical" == this.options.tp ? t.deltaY : t.deltaX, i = (this.oldHandlePos + e - this.options.gap_start) / (this.data.container_size_with_gaps - this.data.handle_size), s = (i = Math.min(Math.max(i, 0), 1)) * (this.data.content_size - this.data.container_size);
                "vertical" == this.options.tp ? this.options.$container.scrollTop(s) : this.options.$container.scrollLeft(s);
            },
            stopScrollDrag: function(t) {
                this.options.$handle.removeClass("dragging");
            },
            startContentDrag: function(t) {
                "vertical" == this.options.tp ? this.oldDragPos = this.options.$container.scrollTop() : this.oldDragPos = this.options.$container.scrollLeft(), 
                this.maxDragShift = 0, this.wasContentDrag = !1;
            },
            moveContentDrag: function(t) {
                var e = "vertical" == this.options.tp ? t.deltaY : t.deltaX;
                this.maxDragShift = Math.max(this.maxDragShift, Math.abs(e));
                var i = this.oldDragPos - e;
                i = Math.min(Math.max(i, 0), this.data.content_size - this.data.container_size), "vertical" == this.options.tp ? this.options.$container.scrollTop(i) : this.options.$container.scrollLeft(i);
            },
            stopContentDrag: function(t) {
                this.wasContentDrag = this.maxDragShift > 5;
            },
            destroy: function() {}
        };
        var s = t(this), n = new i(e, s);
        return n.initialize(), s.data("scroll", n), this;
    };
}(jQuery), window.RM = {
    models: {},
    collections: {},
    classes: {},
    blocks: {},
    controls: {},
    panels: {},
    widgets: {},
    views: {},
    data: {},
    common: {
        disableShortcuts: {}
    },
    templates: {}
}, window.ES6Promise && window.ES6Promise.polyfill(), RM.templates["template-common-alert"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += "\n\t";
            var categories = {
                "type-duplicate": "category-upgrade",
                "type-create": "category-upgrade",
                "type-export-pdf": "category-upgrade",
                "type-export-code": "category-upgrade",
                "type-more-pages": "category-upgrade",
                "type-upload-fonts": "category-upgrade",
                "type-custom-seo": "category-upgrade",
                "type-custom-sharing": "category-upgrade",
                "type-code-injection": "category-upgrade",
                "type-publish": "category-confirm-email",
                "type-switch-desktop-create": "category-mobile",
                "type-switch-desktop-continue": "category-mobile",
                "type-browsers": "category-browsers",
                "type-shared-failed": "category-shared-failed",
                "type-shared-unlock-page": "category-shared-unlock-page"
            }, headers = {
                "category-upgrade": "Push the Limits",
                "category-upgrade-skip": "Push the Limits",
                "category-browsers": "Browser Support",
                "category-shared-failed": "Sorry, something<br/>went wrong.",
                "category-confirm-email": "Account Activation"
            }, texts = {
                "type-duplicate": 'To duplicate this project you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
                "type-create": 'To create more projects you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
                "type-publish": "Please verify your email address<br />to publish this project.",
                "type-export-pdf": 'Please upgrade your account<br/>to export the project to PDF.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-export-code": 'Please upgrade your account<br/>in order to export the source<br/>code of your projects.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-more-pages": 'Please upgrade your account<br/>to create more pages.<br><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-custom-seo": 'Please upgrade your account<br/> to customize SEO parameters.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-custom-sharing": 'Please upgrade your account<br/>to customize social sharing info.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-code-injection": 'Please upgrade your account to<br/>make custom code work after<br/>you publish the project.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-browsers": "Sorry, our Editor doesn’t support Internet Explorer. This may change in the future, but for now please use Chrome, Firefox or Safari.",
                "type-switch-desktop-create": "To create a project, please use your laptop or desktop computer.",
                "type-switch-desktop-continue": "To continue, please use your laptop or desktop computer.",
                "type-shared-failed": 'Please contact <a href="mailto:support@readymag.com" class="learn-more">support</a>.',
                "type-upload-fonts": 'Please upgrade your account<br/>to upload your own fonts.<br/><a href="/pricing" class="learn-more">See the pricing</a>.'
            }, buttons = {
                "category-upgrade": '<a href="/settings/subscription/update" class="button main upgrade">Upgrade</a><div class="cancel-wrapper">or ' + ("type-code-injection" == opts.type ? '<span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + "</div>",
                "category-browsers": '<div class="button main ok">Okay</div>',
                "category-mobile": '<div class="button main ok">Okay</div>',
                "category-shared-failed": '<div class="button close">Close</div>',
                "category-shared-unlock-page": '<div class="button ok">Ok</div>',
                "category-confirm-email": '<div  class="button main resend">Resend</div><div class="cancel-wrapper">or <span class="button cancel">Cancel</span></div>'
            }, category = categories[opts.type], header = headers[category], text = texts[opts.type] || opts.text, button = buttons[category];
            opts.is_contributor && (text = "Please upgrade owner’s account<br/>to be able to use this feature.", 
            button = '<a href="mailto:' + opts.owner_email + '" class="contact-link">Contact owner</a><div class="cancel-wrapper">' + ("type-code-injection" == opts.type ? 'or <span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + "</div>"), 
            __p += '\n\n\t<div class="alert-popup ' + (null == (__t = category) ? "" : __t) + '">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="center-table">\n\t\t\t\t<div class="center-cell">\n\t\t\t\t\t<div class="panel">\n\n\t\t\t\t\t\t' + (null == (__t = header ? '<div class="header">' + header + "</div>" : "") ? "" : __t) + '\n\n\t\t\t\t\t\t<div class="icon" ' + (null == (__t = opts.icon ? 'style="background-image:url(' + opts.icon + ')"' : "") ? "" : __t) + "></div>\n\n\t\t\t\t\t\t" + (null == (__t = text ? '<div class="text">' + text + "</div>" : "") ? "" : __t) + "\n\n\t\t\t\t\t\t" + (null == (__t = button ? '<div class="buttons">' + button + "</div>" : "") ? "" : __t) + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-standard"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<iframe class="common-audio-player standard" width="100%" height="100%" scrolling="no" frameborder="no" src="' + (null == (__t = src) ? "" : _.escape(__t)) + '"></iframe>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-minimal"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player minimal loading">\n\n\t\t<div class="sc-artwork-list">\n\t\t\t<div class="sc-loaded-artwork"></div>\n\t\t\t<div class="sc-artworks-overlay"></div>\n\t\t</div>\n\n\t\t<div class="sc-info">\n\t\t\t<h3></h3>\n\t\t\t<h4></h4>\n\t\t</div>\n\n\t\t<div class="sc-scrubber no-rmswipe">\n\t\t\t<div class="sc-hover-indicator"></div>\n\t\t\t<div class="sc-time-span">\n\t\t\t\t<div class="sc-buffer"></div>\n\t\t\t\t<div class="sc-played"></div>\n\t\t\t\t<div class="sc-button-wrapper">\n\t\t\t\t\t<div class="sc-button">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="12" height="12"><path d="M0 0 L12 6 L0 12  Z " style="fill:#1d1a1b; stroke:none; stroke-width:0"></path></svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sc-time-indicators">\n\t\t\t\t<span class="sc-left"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-html5"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<audio preload="auto"></audio>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-flash"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="' + (null == (__t = id) ? "" : _.escape(__t)) + '">\n\t\t\t<embed allowscriptaccess="always" height="100%" width="100%" src="' + (null == (__t = swf) ? "" : __t) + '" type="application/x-shockwave-flash" name="' + (null == (__t = id) ? "" : _.escape(__t)) + '" />\n\t    </object>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-flash-ie"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="' + (null == (__t = id) ? "" : _.escape(__t)) + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="' + (null == (__t = swf) ? "" : _.escape(__t)) + '">\n\t\t\t<param name="movie" value="' + (null == (__t = swf) ? "" : _.escape(__t)) + '" />\n\t\t\t<param name="allowscriptaccess" value="always" />\n\t\t</object>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-button-widget"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="common-button" data-id="' + (null == (__t = data._id) ? "" : _.escape(__t)) + '">\n\n        <div class="icon"></div>\n\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-export-code"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="export-code-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export code</div>\n\n\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t<div class="message">Please provide a domain name if the project</br>will be hosted on another server. Typekit</br>fonts will only work on this domain.</div>\n\n\t\t\t\t<input class="domain-input" type="text" placeholder="yourdomain.com"/>\n\n\t\t\t\t<a href="" class="download">\n\t\t\t\t\t<span>Download</span>\n\t\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t    <div class="arc"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\n\t\t\t\t<ul class="alerts">\n\t\t\t\t\t<li class="alert-item alert-forms">\n\t\t\t\t\t\t<div class="alert-item-icon">\n\t\t\t\t\t\t\t<span class="notification-sign">!</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="alert-text">\n\t\t\t\t\t\t\tForms will not send submitted data to emails, Google Docs, or Mailchimp.<br>Only URL option will work.\n\t\t\t\t\t\t\t<a href="http://help.readymag.com/form/" class="alert-learn-more" target="_blank">Learn more</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-export-pdf"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="export-pdf-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export to PDF<span>β</span></div>\n\n\t\t\t\t<div class="initial-block">\n\t\t\t\t\t<div class="radio-group">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-all" name="export-pdf-type" value="all" checked><label for="export-pdf-all" class="caption">All Pages</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-custom" name="export-pdf-type" value="custom"><label for="export-pdf-custom" class="caption"><input type="text" required="required" placeholder="e.g. 1-8, 11"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="errors"></div>\n\n\t\t\t\t\t<div class="create-pdf">Create PDF</div>\n\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="typekit-issue">Please note that if your projects contains Typekit web fonts they will be replaced by alternatives due to license restrictions.</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="done-block">\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="message">Your project is being converted.<br/>We will send you the download link to ' + (null == (__t = email) ? "" : _.escape(__t)) + ' when it’s ready.</div>\n\n\t\t\t\t\t<div class="done">Done</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-form-button"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="button">\n\t\t<div class="caption"></div>\n\t\t<svg class="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M17 19.8c-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6S18.4 19.8 17 19.8zM19 0.4h-4L15 17.4h4L19 0.4z"/></svg>\n\t\t<svg class="submitted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M31.4 3C30.6 2.3 29.4 2.3 28.6 3l0 0L13.1 18.6l-7.8-7.8 0 0c-0.8-0.7-2-0.7-2.7 0 -0.8 0.8-0.8 2 0 2.7l0 0L13.1 24.1l0.4-0.4h0L31.4 5.8l0 0C32.1 5 32.1 3.8 31.4 3z"/></svg>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-gift"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="wrapper">\n\t\t<div class="form-wrapper">\n\t\t\t<div class="clearfix">\n\t\t\t\t<div class="left-column">\n\t\t\t\t\t<div class="choose-gift">CHOOSE GIFT</div>\n\t\t\t\t\t<div class="period-selector">\n\t\t\t\t\t\t<div class="period month active" data-plan="creator_monthly">\n\t\t\t\t\t\t\t<div class="caption">1 Month of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$' + (null == (__t = month_price) ? "" : __t) + '</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="period year" data-plan="creator_yearly">\n\t\t\t\t\t\t\t<div class="caption">1 Year of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$' + (null == (__t = year_price) ? "" : __t) + '</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper email">\n\t\t\t\t\t\t<div class="caption">EMAIL TO</div>\n\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" type="email" spellcheck="false" value="" placeholder="@" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper from">\n\t\t\t\t\t\t<div class="caption">FROM</div>\n\t\t\t\t\t\t<input autocapitalize="on" autocorrect="off" maxlength="56" type="text" spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper message">\n\t\t\t\t\t\t<div class="caption">MESSAGE</div>\n\t\t\t\t\t\t<textarea maxlength="200" placeholder="Optional"></textarea>\n\t\t\t\t\t\t<div class="counter"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper send">\n\t\t\t\t\t\t<div class="caption">SEND</div>\n\t\t\t\t\t\t<input readonly type="text"/>\n\t\t\t\t\t\t<div class="formated-date"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="right-column">\n\t\t\t\t\t<div class="how-it-looks">HOW IT LOOKS</div>\n\n\t\t\t\t\t<div class="card-cover"></div>\n\n\t\t\t\t\t<div class="card-wrapper new-card clearfix ' + (null == (__t = _.isEmpty(existing_card) ? "" : "hidden") ? "" : __t) + '">\n\t\t\t\t\t\t', 
        _.isEmpty(existing_card) || (__p += '\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="existing-card">Use existing card</div>\n\t\t\t\t\t\t'), 
        __p += '\n\n\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t<input type="text" placeholder="Maggie Ready"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="19" placeholder="●●●● ●●●● ●●●● ●●●●"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-date">\n\t\t\t\t\t\t\t<div class="caption">DATE</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="5" placeholder="MM/YY"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-cvc">\n\t\t\t\t\t\t\t<div class="caption">CVC</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="4" placeholder="000"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t', 
        _.isEmpty(existing_card) || (__p += '\n\t\t\t\t\t\t<div class="card-wrapper existing-card clearfix">\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="new-card">Use new card</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="' + (null == (__t = existing_card.name) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="●●●● ●●●● ●●●● ' + (null == (__t = existing_card.last4) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-type">\n\t\t\t\t\t\t\t\t<div class="caption">&nbsp;</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="' + (null == (__t = existing_card.brand) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'), 
        __p += '\n\n\t\t\t\t\t<div class="secured"><span>Secured by</span><a href="https://stripe.com/" target="_blank"></a></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-block inactive">\n\t\t\t\t<div class="send-button">Send Gift<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t\t\t<div class="charge-sum">YOU WILL BE<br/>CHARGED<br/><span>$' + (null == (__t = month_price) ? "" : __t) + '</span></div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t<div class="charging-overlay"></div>\n\t\t</div>\n\n\t\t<div class="congrats-wrapper invisible">\n\t\t\t<div class="subscription">\n\t\t\t\t<div class="caption"></div>\n\t\t\t\t<div class="price"></div>\n\t\t\t</div>\n\n\t\t\t<div class="awesome"></div>\n\n\t\t\t<div class="order-info"><span class="info-email"></span><br/>will get the email with your gift<br/>on <span class="info-date"></span>.<br/><br/>Just in case, the gift code is:<br/><span class="info-code">adf</span></div>\n\n\t\t\t<div class="back-button">Send Another Gift</div>\n\n\t\t</div>\n\t</div>\n\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-hotspot-widget"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="common-hotspot">\n\n\t    <div class="pin"></div>\n\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-hotspot-widget-mobile-wrapper"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="hotspot-fullscreen-wrapper invisible">\n        <div class="center-table">\n            <div class="center-cell">\n\n            </div>\n        </div>\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-login"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="login-popup hidden">\n\n\t\t<div class="login-popup-wrapper">\n\t\t\t<div class="login ljr-panel hidden">\n\t\t\t\t', 
        Modernizr.isboxversion ? __p += '\n\t\t\t\t\t<div class="header"><span>Log in</span></div>\n\t\t\t\t' : __p += '\n\t\t\t\t\t<div class="header"><a href="/join/" class="link">Join</a> or <span>Log in</span></div>\n\t\t\t\t', 
        __p += '\n\t\t\t\t<form method="post" action="/api/redirect" id="login_form">\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<input name="password" autocapitalize="off" autocorrect="off" required="required" class="password-input input-template" autocomplete="on"  type="password" spellcheck="false" value=""  placeholder="Password" />\n\t\t\t\t\t<input name="url" type="hidden" value="" />\n\t\t\t\t\t<div class="go">Log in</div>\n\t\t\t\t</form>\n\t\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t\t<div class="social-caption">Log in with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Facebook</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Google</span>\n\t\t\t\t\t</div>\n\t\t\t\t'), 
        __p += '\n\t\t\t\t<a href="/recover/" class="link forgot">Forgot password?</a>\n\t\t\t\t<div class="error">Invalid email or password</div>\n\t\t\t</div>\n\n\n\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t<div class="join ljr-panel hidden">\n\t\t\t\t\t<div class="header"><span>Join</span> or <a href="/login/" class="link">Log in</a></div>\n\t\t\t\t\t<input autocapitalize="on"  autocorrect="off" required="required" class="fullname-input input-template for-validate"  maxlength="24" type="text"     spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="email-input input-template for-validate"     type="email"    spellcheck="false" value="" placeholder="Email" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="password-input input-template for-validate"  type="password" spellcheck="false" value="" placeholder="Password" />\n\n\t\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="terms-checkbox for-validate" required="required">\n\t\t\t\t\t\t\t<span class="checkmark"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>I accept Readymag’s\n\t\t\t\t\t\t\t<a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms and Privacy Policy</a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="subscribe-checkbox">\n\t\t\t\t\t\t\t<span class="checkmark"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>Кeep me updated on news and offers</p>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="go">Join</div>\n\n\t\t\t\t\t<div class="social-caption">Sign up with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Facebook</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Google</span>\n\t\t\t\t\t</div>\n\t\t\t\t<div class="error"></div>\n\n\t\t\t\t</div>\n\t\t\t'), 
        __p += '\n\n\t\t\t<div class="recover ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="info">Please enter your email address and we\'ll send you instructions:</div>\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<div class="go">Submit</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="send-message">Done! You should receive an email shortly.</div>\n\t\t\t\t<div class="go-back">Go Back</div>\n\t\t\t</div>\n\n\t\t\t<div class="reset ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="new-password-input input-template"  type="password" spellcheck="false" value="" placeholder="New Password" />\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="verify-password-input input-template"  type="password" spellcheck="false" value="" placeholder="Verify Password" />\n\t\t\t\t<div class="go">Save</div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t<div class="close-popup"></div>\n\t\t\t\t<a href="/" class="link go-main"></a>\n\t\t\t'), 
        __p += "\n\t\t</div>\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-login-preloader"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div class="rmpreloader button">\n        <div class="arc"></div>\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-pages-panel-settings-domain"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="header-message section">' + (null == (__t = "mag" == type ? "Сustom domain name" : "Custom domain for profile page") ? "" : __t) + '</div>\n\n\t<div class="initial-preloader rmpreloader section invisible">\n\t\t<div class="shadow"></div>\n\t\t<div class="arc"></div>\n\t</div>\n\n\t<div class="register-switcher section"><span class="registered item active">Use registered</span><span class="dot">•</span><span class="item new">Register new</span></div>\n\n\t<div class="unmap-message section"><span class="unmap-button">Unmap</span> this domain name</div>\n\n\t<div class="test-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t\t<div class="test-button common-button disabled">Test<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\t<div class="invalid-domain-message section"><span class="red">Domain name may contain only alphanumeric characters. No directories are allowed.</span><br/><br/><span class="bold">Examples:</span><br/><span class="grey">mydomain.com<br/>www.mydomain.com<br/>readymag.mydomain.com</span></div>\n\n\t<div class="notfound-domain-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\t<div class="other-user-domain-message section">This domain is already used by <a class="user-button" href="TEMP" target="_blank">TEMP</a>.</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="same-user-domain-message section">\n\t\t<span class="red">This domain is already mapped to <span class="entity-type"></span><a class="mag-button" href="TEMP" target="_blank">TEMP</a>. Do you want to switch it to ' + (null == (__t = "mag" == type ? "the current project" : "your profile") ? "" : __t) + '?</span>\n\t\t<div class="switch-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="switch-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="dns-domain-message section">\n\t\t<span class="red">This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change your <span class="domain-record-type">TEMP</span> to <span class="domain-needed-value">TEMP</span> at your registrar settings.</span><br/><br/><span class="grey">After changing the <span class="domain-record-type">TEMP</span> it may take up to 72 hours to update. Please return to these settings after 72 hours and hit “Map Now”.</span>\n\t\t<div class="map-fake-button common-button disabled">Map Now</div>\n\t</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="ok-domain-message section">\n\t\t\x3c!--<span class="green">Your domain is pointing to Readymag and can be mapped to this project.</span>--\x3e\n\t\t<span class="green">Your domain is pointing to Readymag and can be mapped to ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + '.</span>\n\t\t<div class="map-button common-button">Map Now <div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="map-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="domain-readonly-block section">\n\t\t<input class="domain-readonly-input" readonly type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t</div>\n\n\n\t<div class="domain-setting favicon section">\n\t\t<div class="caption">\n\t\t\t<span>Favicon</span>\n\t\t</div>\n\t\t<div class="upload-button">\n\t\t\t<span>Clear</span>\n\t\t\t<input class="favicon-uploader" type="file" name="upload" data-url="/api/upload"/>\n\t\t\t<div class="favicon-preloader">\n\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t<div class="arc"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class="description">Recommended size 256px</div>\n\n\t</div>\n\n\t<div class="domain-setting ssl-setting section">\n\n\t\t<div class="caption">\n\t\t\t<span>SSL</span>\n\t\t</div>\n\n\t\t<div class="description">Secured with an SSL certificate</div>\n\t\t<div class="switcher"></div>\n\n\t</div>\n\n\t<div class="domain-register-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="iwantmyname.com" />\n\t\t<a class="go-button common-button disabled" href="https://iwantmyname.com" target="_blank">Go</a>\n\t\t<div class="register-message">\n\t\tIf you don’t have a domain name, you can<br/>\n\t\teasly purchase one via our official partner<br/>\n\t\tiwantmyname.com using the search field above<br/>\n\t\tand have it automatically set up to work<br/>\n\t\twith Readymag.</div>\n\t</div>\n\n\t<div class="domain-set-bad-message section">Seems like your DNS settings have been changed. This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change the <span class="domain-record-type">TEMP</span> to: <span class="domain-needed-value">TEMP</span></div>\n\n\t<div class="domain-set-notfound-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\n\t', 
        is_contributor ? __p += '\n\t<div class="expired-subscription-message section">Please upgrade owner’s account to map a custom domain.\n\t<div><a class="pricing-link" href="mailto:' + (null == (__t = owner_email) ? "" : __t) + '">Contact owner</a></div>\n\t</div>\n\t' : __p += '\n\t<div class="expired-subscription-message section">Please <a class="link" href="/settings/subscription/update">upgrade</a> your account<br/>to map a custom domain.\n\t<div><a class="pricing-link" href="/pricing" target="_blank">See the pricing</a></div>\n\t</div>\n\t', 
        __p += '\n\n\t\x3c!--__magterm--\x3e\n\t<div class="unpublished-message section">In order to use custom domain mapping, you need to publish this project first.</div>\n\n\t<div class="confirm-message section">\n\t\t<span class="black">Are you sure you want<br/>to unmap ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + ' from<br/><span class="domain-name">TEMP</span>?</span>\n\t\t<div class="confirm-unmap-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\n\t<div class="error-message error-block section">\n\t\t<span class="black">Something went wrong.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="dns-not-updated-yet error-block section">\n\t\t<span class="black">Seems like some DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="wait-our-dns-server error-block section">\n\t\t<span class="black">Your domain settings are correct, but it seems like our DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="bottom">\n\n\t\t', 
        "mag" == type && (__p += '\n\t\t\t<div class="bottom-ga-gtm-active section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-ga-gtm-inactive section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'), 
        __p += '\n\n\n\t\t<div class="bottom-72-message section">If you don’t see ' + (null == (__t = "mag" == type ? "your project" : "your profile") ? "" : __t) + ' or Readymag page when you visit <a class="your-site-button" href="" target="_blank">your website</a>, the DNS record might need more time to update. This can take up to 72 hours.</div>\n\n\t\t<a class="bottom-help-button section" target="_blank" href="http://help.readymag.com/domains/">Need help?</a>\n\n\t\t<div class="bottom-cancel-button section">Cancel</div>\n\n\t\t<a class="bottom-support-button section" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Support</a>\n\n\t\t<div class="bottom-unmap-message section">Your domain name <span class="domain-name">TEMP</span> is currently using for ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + '. <div class="unmap-button">Unmap it?</div></div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-404"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div id="page404">\n        <table>\n            <tr>\n                <td>\n                    <div class="caption">Page Not Found.</div>\n                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>\n                </td>\n            </tr>\n        </table>\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-mag-suspended"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="magsuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Contact us</a>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-suspended"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="usersuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Contact us</a>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-domain-errors"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="domain-errors">\n\t\t<div class="message">\n\t\t\t', (state.magNotFound || state.domainNotFound) && (__p += '\n\t\t\t<div class="message-caption">Website is almost here</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">To complete the setup, please hit <br class="br-phone"/>the “Map Now” <br class="br-desktop"/>button in your <br class="br-phone"/>projects’s settings.</div>\n\t\t\t<a class="help-phone" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t\t'), 
        __p += "\n\t\t\t", state.magNotPublished && (__p += '\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">This project has been unpublished.</div>\n\t\t\t'), 
        __p += "\n\t\t\t", state.subscriptionExpired && (__p += '\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<div class="message-text"><a href="' + (null == (__t = RM.constants.readymag_auth_host) ? "" : __t) + '/settings/subscription/">Log in</a> to manage your subscription.</div>\n\t\t\t'), 
        __p += '\n\t\t</div>\n\n\t\t<a class="logo" href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '"></a>\n\n\t\t', 
        (state.magNotFound || state.domainNotFound) && (__p += '\n\t\t<a class="help" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t'), 
        __p += "\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-slideshow-player"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-slideshow environment-' + (null == (__t = tp) ? "" : _.escape(__t)) + '">\n\t\t<div class="images no-rmswipe">\n\t\t\t<div class="images-wrapper">\n\t\t\t</div>\n\t\t\t<div class="fullscreen">\n\t\t\t\t<svg class="fullscreen-off" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M4 14 L4 20 L10 20  Z M14 4 L20 4 L20 10  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg class="fullscreen-on" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M5 13 L11 13 L11 19  Z M13 5 L19 11 L13 11  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-arrows">\n\t\t\t\t<div class="prev-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="next-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="counters-text">\n\t\t\t\t\t<span class="counters-text-current">1</span>/<span class="counters-text-total">2</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class="prev-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t\t<div class="next-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<div class="thumbnails no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="counters no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="captions">\n\t\t\t', 
        "constructor" == tp && (__p += '\n\t\t\t\t<textarea class="caption" maxlength="9999" placeholder="Type image caption here"></textarea>\n\t\t\t'), 
        __p += "\n\t\t</div>\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-menu"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += '\n\t<div class="collector-menu ' + (null == (__t = showUpgradeButton ? "show-upgrade-button" : "") ? "" : __t) + '" id="global-menu">\n\t\t';
            var innerLink = "link", outerLink = "", meLink = me.getLink(), goHomeLink = RM.constants.readymag_host;
            "homepage" == tp && (innerLink = "", outerLink = "link", meLink = RM.constants.readymag_auth_host + me.getLink(), 
            goHomeLink = "/"), __p += '\n\n\t\t<a href="' + (null == (__t = goHomeLink) ? "" : _.escape(__t)) + '" class="logo ' + (null == (__t = outerLink) ? "" : _.escape(__t)) + '"></a>\n\n\t\t<div class="separator"></div>\n\n\t\t<a class="upgrade-button ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="/settings/subscription/update"><div class="icon"></div>Upgrade</a>\n\n\t\t<div class="create-button"><div class="icon"></div>Create</div>\n\n\t\t<div class="user-button">\n\t\t\t<a class="userpic ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="' + (null == (__t = meLink) ? "" : _.escape(__t)) + '" style="background-image:url(\'' + (null == (__t = me.getUserpic(48)) ? "" : _.escape(__t)) + '\')"></a>\n\t\t\t<div class="arrow"><div class="icon"></div></div>\n\t\t\t', 
            me.get("email_confirmation_date") || (__p += ' <div class="notification-icon">1</div> '), __p += '\n\t\t</div>\n\n\t\t<div class="user-popup">\n\t\t\t<a class="user-block ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="' + (null == (__t = meLink) ? "" : _.escape(__t)) + '">\n\t\t\t\t<div class="username-wrapper-outer">\n\t\t\t\t\t<div class="username-wrapper">\n\t\t\t\t\t\t<div class="username">' + (null == (__t = me.get("name")) ? "" : _.escape(__t)) + '</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="settings ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="/settings"><div class="icon"></div>Settings</a>\n\n\t\t\t<div class="create-warning">\n\t\t\t\t<div class="icon"></div>\n\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t<div class="message">To create a project please switch to your laptop or desktop computer</div>\n\t\t\t</div>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="logout" href="/logout/"><div class="icon"></div>Logout</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t', 
            me.get("email_confirmation_date") || (__p += '\n\t\t\t\t<div class="notifications-wrapper">\n\t\t\t\t\t<div class="verify-email">Please verify your email. <span>Resend</span>.</div>\n\t\t\t\t</div>\n\t\t\t '), 
            __p += '\n\n\t\t\t<div class="popup-footer">\n\t\t\t\t<a href="https://readymag.com/readymag/terms-and-privacy/" class="' + (null == (__t = Modernizr.isboxversion ? "disabled" : "") ? "" : __t) + '" target="_blank">Privacy & Terms</a><span></span><a class="from-user-menu mailto-support" href="https://help.readymag.com" target="_blank">Help</a><span></span><a href="https://readymag.com/readymag/newsletter/" target="_blank">R/m Newsletter</a>\n\t\t\t</div>\n\n\t\t\t<div class="corner-wrapper">\n\t\t\t\t<div class="corner"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-menu-unlogged"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += "\n\t\t";
            var innerLink = "link", outerLink = "";
            "homepage" == tp && (innerLink = "", outerLink = "link"), __p += '\n\n\t<a class="collector-menu-unlogged ' + (null == (__t = outerLink) ? "" : _.escape(__t)) + '" id="global-menu" href="/"></a>\n';
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-whats-new"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="whats-new">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="panel">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="wn-page" data-date="2013-11-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">November 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing Domain Mapping<br/>and New Price.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p43952/" target="blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2013-12-16">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">December 16<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t\t<div class="text">Duplicating projects, Instagram<br/>and SVG support.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p53035/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-01-20">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">January 20<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Rotation tool.<br/>Grouping widgets.<br/>Faster background images loading.<br/>Bug fixes.</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-02-03">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">February 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture">\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 1.0</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p67765/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-04">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Custom Templates<br/>and iFrame</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p85654/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Track your audience with<br/>Google Analytics</div>\n\t\t\t\t\t\t<a class="learn-more" href="http://help.readymag.com/ga/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n                    <div class="wn-page" data-date="2014-04-14">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">April 14<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Viewport & Mobile Viewer</div>\n                        <a class="learn-more" href="https://readymag.com/p100897/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-06-24">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">June 24<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Font Explorer</div>\n                        <a class="learn-more" href="https://readymag.com/p151687/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-08-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">August 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing New<br/>Webfonts</div>\n                        <a class="learn-more" href="https://readymag.com/p156787/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Template Center</div>\n                        <a class="learn-more" href="https://readymag.com/p172473/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-30">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 30<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>PDF Export</div>\n                        <a class="learn-more" href="https://readymag.com/p185021/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-11-05">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">November 5<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>100,000 icons</div>\n                        <a class="learn-more" href="https://readymag.com/p220371/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-12-09">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">December 9<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Link Styles & Fix Position</div>\n                        <a class="learn-more" href="https://readymag.com/p243325/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2015-01-29">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">January 29<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>New Embeds</div>\n                        <a class="learn-more" href="https://readymag.com/p288252/" target="_blank">Learn More</a>\n                    </div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-02-10">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">February 10<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <div class="text">2 Little Things:<br/>Trash & Pages URLs</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p304538/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-03-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">March 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 2.0</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p325057/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-04-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">April 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Scroll Navigation</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p360474/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-05-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Buttons, Anchors &amp; Full Width</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p430667/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- Special terms agree message. For next terms change just increase version number in backend config and set new data-date to show. This block position inside template does not matter --\x3e\n\t\t\t\t\t<div class="wn-page agree-terms" data-version="' + (null == (__t = RM.constants.CURRENT_TERMS_VERSION) ? "" : __t) + '" data-date="2015-09-02">\n\t\t\t\t\t    <div class="caption">UPDATE</div>\n\t\t\t\t\t    <div class="date">Terms of Service</div>\n\t\t\t\t\t\t<div class="text">Hey!<br/>We’ve recently slightly updated our <a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms of Service</a> due to launching the new Teamwork feature. Please review the changes, as by continuing to use Readymag you automatically accept them. Have a great day!</div>\n\t\t\t\t\t    <div class="learn-more agree-terms-button">I agree</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- Special terms agree message end --\x3e\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-09-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Teamwork</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p683180/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-10-09">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Oct 9<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Hotspot</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p921047/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-11-18">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 18<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>5 Tiny Features</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1016246/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-01-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Jan 19<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Animations</div>\n\t\t\t\t\t    <a class="learn-more" href="http://animations.readymag.com/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-04-12">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Apr 12<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1351980/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-08-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Aug 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1617587/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-09-29">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 29<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1730817/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-12-01">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 1<span>st</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1921011/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-02-07">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Feb 7<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2117051/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-05-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2346155/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-08-08">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">August 8<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2674515/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-09-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 20<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2809932/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-11-30">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 30<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://help.readymag.com/domains/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-12-15">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 15<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://medium.com/@readymag/readymag-under-the-hood-faster-vertical-viewer-implementation-8615457fdf25" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-02-15">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Feb 15<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3276335/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-03-29">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Mar 29<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3488378/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-05-24">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 24<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/readymag/terms-and-privacy/2/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-06-28">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">June 28<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3857571/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="close"></div>\n\t\t\t\t<div class="arrow up disabled"></div>\n\t\t\t\t<div class="arrow down"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-audio"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="player-wrapper"></div>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-button"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <input class="text"\n           value="' + (null == (__t = data.text) ? "" : _.escape(__t)) + '"\n           type="text"\n           autocapitalize="off"\n           autocorrect="off"\n           autocomplete="off"\n           spellcheck="false"/>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-facebook-type_like_button"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="fb-like fb" data-href="' + (null == (__t = data.url ? data.url : "http://readymag.com") ? "" : _.escape(__t)) + '" ' + (null == (__t = data.share_button || data.send_button ? 'data-share="true"' : "") ? "" : __t) + ' data-width="' + (null == (__t = data.w) ? "" : __t) + '" data-show-faces="' + (null == (__t = data.show_faces) ? "" : __t) + '" data-colorscheme="' + (null == (__t = data.theme) ? "" : __t) + '" data-layout="' + (null == (__t = data.layout) ? "" : __t) + '" data-type="data.type_like_button"></div>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-facebook-type_page"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="fb-page fb" data-href="' + (null == (__t = data.url ? data.url : "https://www.facebook.com/readymag") ? "" : _.escape(__t)) + '" data-width="' + (null == (__t = data.w) ? "" : __t) + '" data-height="' + (null == (__t = data.h) ? "" : __t) + '" data-show-facepile="' + (null == (__t = data.show_faces) ? "" : __t) + '" data-colorscheme="' + (null == (__t = data.theme) ? "" : __t) + '" data-tabs="' + (null == (__t = data.show_stream ? "timeline, events, messages" : "") ? "" : __t) + '" data-show-border="true" data-small-header="' + (null == (__t = data.small_header) ? "" : __t) + '" data-adapt-container-width="true"></div>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-facebook-type_comments"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="fb-comments fb" data-href="' + (null == (__t = data.url ? data.url : "http://readymag.com") ? "" : _.escape(__t)) + '" data-width="' + (null == (__t = data.w) ? "" : __t) + '" data-num-posts="' + (null == (__t = data.num_posts) ? "" : __t) + '" data-colorscheme="' + (null == (__t = data.theme) ? "" : __t) + '"></div>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-gmaps"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div class="rm-search-block">\n        <div class="map-container"></div>\n        <div class="map-overlay"></div>\n        <div class="message-overlay invisible"></div>\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-gmaps-search-control"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div class="rm-search-block">\n        <input type="text" class="rm-search source">\n        <input type="text" class="rm-search destination">;\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-slideshow"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<input class="uploadInput" type="file" name="upload" multiple="multiple" data-url="/api/upload/" />\n\t<div class="slideshow-overlay jsSlideshowOverlay"></div>\n\n\t<div class="drop-text"></div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-text"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="margins-wrapper">\n\t\t<div class="margins-wrapper-inner">\n\t\t</div>\n\t</div>\n\n\t<div class="columns-wrapper">\n\t\t<div class="columns-wrapper-inner">\n\t\t</div>\n\t</div>\n\n\t<textarea id="textarea_' + (null == (__t = _id) ? "" : __t) + '" style="display: none; width:' + (null == (__t = w) ? "" : __t) + "px;height:" + (null == (__t = h) ? "" : __t) + 'px">' + (null == (__t = text) ? "" : _.escape(__t)) + '</textarea>\n\t<div class="text-preview" style="-webkit-nbsp-mode:space; -webkit-line-break:after-white-space;">' + (null == (__t = text) ? "" : __t) + '</div>\n\t<div class="text-mask"></div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-text-margins"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="margin-handle hidden inactive">\n\t\t<div class="margin-handle-label-wrapper">\n\t\t\t<div class="margin-handle-label">\n\t\t\t\t<input class="margin-input" type="text"  spellcheck="false" value="0" data-mouseSpeed="2" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-text-bg"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="bg"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-twitter-type_tweet"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + (null == (__t = url) ? "" : _.escape(__t)) + '" data-lang="en" data-size="' + (null == (__t = large_button ? "large" : "medium") ? "" : __t) + '" data-text="' + (null == (__t = "undefined" != typeof text ? text : "") ? "" : _.escape(__t)) + '">Tweet</a>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-twitter-type_follow"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<a href="https://twitter.com/' + (null == (__t = username || "Readymag") ? "" : _.escape(__t)) + '" class="twitter-follow-button" data-show-count="false" data-show-screen-name="' + (null == (__t = show_name ? "true" : "false") ? "" : __t) + '" data-lang="en" data-size="' + (null == (__t = large_button ? "large" : "medium") ? "" : __t) + '">Follow @' + (null == (__t = username) ? "" : _.escape(__t)) + '</a>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-twitter-type_hashtag"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<a href="https://twitter.com/intent/tweet?button_hashtag=' + (null == (__t = hash) ? "" : _.escape(__t)) + '" class="twitter-hashtag-button" data-size="' + (null == (__t = large_button ? "large" : "medium") ? "" : __t) + '">Tweet #' + (null == (__t = hash) ? "" : _.escape(__t)) + '</a>\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-twitter-type_timeline"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += "\n\t" + (null == (__t = code) ? "" : __t) + '\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-block-twitter-type_embed"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += "\n\t" + (null == (__t = code) ? "" : __t) + '\n\t<div class="overlay"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-branding"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="rm-branding offscreen-initially">\n\t<a class="rm-branding-button" href="https://readymag.com" target="_blank"></a>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-final-page"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            if (__p += '\r\n\r\n\t<div class="final-page offscreen hidden ' + (null == (__t = isStickyVerticalViewer ? "" : "has-vertical-scroll") ? "" : __t) + '">\r\n\t\t<div class="final-page-wrapper tp-' + (null == (__t = tp) ? "" : _.escape(__t)) + '">\r\n\t\t\t<div class="final-page-container">\r\n\r\n\t\t\t\t<div class="main-container">\r\n\t\t\t\t\t<div class="social-wrapper">\r\n\r\n\t\t\t\t\t\t<a href="' + (null == (__t = mag.model.user.getLink()) ? "" : _.escape(__t)) + '" class="link userpic ' + (null == (__t = RM.common.isDownloadedSource ? "inactive-link" : "") ? "" : __t) + '" style="background-image:url(\'' + (null == (__t = mag.model.user.getUserpic(128)) ? "" : __t) + '\')"></a>\r\n\r\n\t\t\t\t\t\t<div class="mag-title selectable">' + (null == (__t = mag.title) ? "" : _.escape(__t)) + '</div>\r\n\r\n\t\t\t\t\t\t<div class="user-name selectable">by <a href="' + (null == (__t = mag.model.user.getLink()) ? "" : _.escape(__t)) + '" class="full-name link ' + (null == (__t = RM.common.isDownloadedSource ? "inactive-link" : "") ? "" : __t) + '">' + (null == (__t = mag.user.name) ? "" : _.escape(__t)) + '</a></div>\r\n\r\n\t\t\t\t\t\t<div class="share-wrapper">\r\n\t\t\t\t\t\t\t<div class="share-caption">Share</div>\r\n\t\t\t\t\t\t\t<div class="like-tweet ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + '">\r\n\t\t\t\t\t\t\t\t<div id="fb-root"></div>\r\n\t\t\t\t\t\t\t\t<div class="fb-like" data-href="' + (null == (__t = magLink) ? "" : _.escape(__t)) + '" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false"></div>\r\n\t\t\t\t\t\t\t\t<div class="spacer"></div>\r\n\t\t\t\t\t\t\t\t<a href="https://twitter.com/share" class="twitter-share-button" data-count="vertical" data-url="' + (null == (__t = magLink) ? "" : _.escape(__t)) + '" data-text="' + (null == (__t = tweetText) ? "" : _.escape(__t)) + '">Tweet</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="share-facebook sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="facebook"></div>\r\n\t\t\t\t\t\t\t<div class="share-twitter sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="twitter"></div>\r\n\t\t\t\t\t\t\t<div class="share-pinterest sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="pinterest"></div>\r\n\t\t\t\t\t\t\t<div class="share-gplus sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="gplus"></div>\r\n\t\t\t\t\t\t\t<div class="share-mail sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="email"></div>\r\n\r\n\t\t\t\t\t\t\t', 
            Modernizr.isboxversion || RM.common.isDownloadedSource || (__p += '\r\n\t\t\t\t\t\t\t\t<div class="share-embed ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + '">Embed</div>\r\n\t\t\t\t\t\t\t\t<div class="share-report sprite ' + (null == (__t = disableSocials ? "disabled" : "") ? "" : __t) + ' share-button" data-tp="report"></div>\r\n\t\t\t\t\t\t\t'), 
            __p += '\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="embed-wrapper hidden">\r\n\t\t\t\t\t\t<div class="caption">Embed</div>\r\n\r\n\t\t\t\t\t\t<div class="size-selector" data-selected="responsive">\r\n\t\t\t\t\t\t\t<div class="size responsive" data-size="responsive">Responsive</div>\r\n\t\t\t\t\t\t\t<div class="size big" data-size="big">512×383</div>\r\n\t\t\t\t\t\t\t<div class="size small" data-size="small">288×236</div>\r\n\t\t\t\t\t\t\t<div class="arrow sprite"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="code-block">\r\n\t\t\t\t\t\t\t<img class="thumb-pic" src="" alt=""/>\r\n\r\n\t\t\t\t\t\t\t', 
            Modernizr.isphone ? __p += '\r\n\t\t\t\t\t\t\t<input type="text" class="embed-code">\r\n\t\t\t\t\t\t\t' : __p += '\r\n\t\t\t\t\t\t\t<textarea class="embed-code" wrap="off"></textarea>\r\n\t\t\t\t\t\t\t', 
            __p += '\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="embed-close">Close</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t', 
            "recent" == tp) {
                if (__p += '\r\n\t\t\t\t\t<div class="dop-container-recent">\r\n\t\t\t\t\t\t<div class="caption">More from</div>\r\n\t\t\t\t\t\t<div class="sub-caption"><a href="' + (null == (__t = mag.model.user.getLink()) ? "" : _.escape(__t)) + '" class="link" ' + (null == (__t = RM.common.embedMode ? 'target="_blank"' : "") ? "" : __t) + ">" + (null == (__t = mag.user.name) ? "" : _.escape(__t)) + "</a></div>\r\n\t\t\t\t\t\t", 
                specialRecentView) {
                    var mag = recentMags.models[0];
                    __p += '\r\n\t\t\t\t\t\t\t<div class="recent-mag-special">\r\n\t\t\t\t\t\t\t\t<a class="overlay related-link" href="' + (null == (__t = mag.getLink()) ? "" : _.escape(__t)) + '" ' + (null == (__t = RM.common.embedMode ? 'target="_blank"' : "") ? "" : __t) + '>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-cover" style="background-image:url(\'' + (null == (__t = mag.getPageScreenshot(304, {
                        cover: !0
                    })) ? "" : __t) + '\')"></div><br/>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-title">' + (null == (__t = mag.get("title")) ? "" : _.escape(__t)) + '</div><br/>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-pages">' + (null == (__t = mag.getPagesCount()) ? "" : __t) + " " + (null == (__t = RM.utils.declination("pages", "page", "pages", mag.getPagesCount())) ? "" : __t) + "</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
                } else recentMags.each(function(t) {
                    __p += '<div class="recent-mag">\r\n\t\t\t\t\t\t\t\t<div class="cover" style="background-image:url(\'' + (null == (__t = t.getPageScreenshot(144, {
                        cover: !0
                    })) ? "" : __t) + '\')"></div>\r\n\t\t\t\t\t\t\t\t<a class="overlay related-link" href="' + (null == (__t = t.getLink()) ? "" : _.escape(__t)) + '" ' + (null == (__t = RM.common.embedMode ? 'target="_blank"' : "") ? "" : __t) + '>\r\n\t\t\t\t\t\t\t\t\t<div class="overlay-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t<div class="overflow-block">' + (null == (__t = t.get("title")) ? "" : _.escape(__t)) + "</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>";
                });
                __p += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
            }
            __p += "\r\n\r\n\r\n\t\t\t\t", "join" == tp && (__p += '\r\n\t\t\t\t\t<div class="dop-container-join">\r\n\t\t\t\t\t\t<a class="made-with" href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '">Made with<div class="icon sprite"></div></a>\r\n\r\n\t\t\t\t\t\t<div class="join ljr-panel">\r\n\t\t\t\t\t\t\t<div class="buttons-panel">\r\n\t\t\t\t\t\t\t\t<div class="panel-caption">Create your own <br/>web publications!</div>\r\n\t\t\t\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\r\n\t\t\t\t\t\t\t\t\t<span class="icon-facebook"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="buttonText">Continue with Facebook</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\r\n\t\t\t\t\t\t\t\t\t<span class="icon-google"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="buttonText">Sign in with Google</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\x3c!-- временно пока редиректится на окно регистрации --\x3e\r\n\t\t\t\t\t\t\t\t\x3c!-- <div class="use-email" data-provider=\'native\'><div class="icon sprite"></div>Use your Email</div> --\x3e\r\n\t\t\t\t\t\t\t\t<a href="https://readymag.com/join/" class="use-email" data-provider=\'native\'><div class="icon sprite"></div>Use your Email</a>\r\n\r\n\t\t\t\t\t\t\t\t<a class="learn-more" href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '">Learn More</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class="native-join">\r\n\t\t\t\t\t\t\t\t<input autocapitalize="on"  autocorrect="off" required="required" class="fullname-input input-template"  maxlength="24" type="text"     spellcheck="false" value="" placeholder="Name" />\r\n\t\t\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"     type="email"    spellcheck="false" value="" placeholder="Email" />\r\n\t\t\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="password-input input-template"  type="password" spellcheck="false" value="" placeholder="Password" />\r\n\t\t\t\t\t\t\t\t<div class="go">Join</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class="cancel">Cancel</div>\r\n\t\t\t\t\t\t\t\t<div class="error"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t'), 
            __p += "\r\n\r\n\r\n\t\t\t\t", "join" != tp && (__p += '\r\n\t\t\t\t\t<a class="logo" href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '">Powered by<div class="icon sprite"></div></a>\r\n\t\t\t\t'), 
            __p += "\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n";
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-mag-menu"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\r\n\r\n\t<div class="mag-menu ' + (null == (__t = hasProjectInfo ? "" : "no-project-info") ? "" : __t) + '">\r\n\t\t<div class="menu-wrapper">\r\n\r\n\t\t\t', 
        hasProjectInfo && (__p += '\r\n\t\t\t\t<div class="menu-info">\r\n\r\n\t\t\t\t\t<a class="link ' + (null == (__t = RM.common.isDownloadedSource ? "inactive-link" : "") ? "" : __t) + '" href="' + (null == (__t = mag.model.user.getLink()) ? "" : _.escape(__t)) + '">\r\n\t\t\t\t\t\t<div class="userpic" style="background-image:url(\'' + (null == (__t = mag.model.user.getUserpic(64)) ? "" : __t) + '\')"></div>\r\n\t\t\t\t\t\t<div class="username">' + (null == (__t = mag.user.name) ? "" : _.escape(__t)) + '</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class="published-by" data_caption="published by" data_date="' + (null == (__t = publishDate) ? "" : __t) + '"></div>\r\n\t\t\t\t\t<div class="mag-title">' + (null == (__t = mag.title) ? "" : _.escape(__t)) + "</div>\r\n\t\t\t\t</div>\r\n\t\t\t"), 
        __p += '\r\n\r\n\t\t\t<div class="scroll-wrapper">\r\n\r\n\t\t\t\t', RM.common.isDomainViewer || Modernizr.android || (__p += '\r\n\t\t\t\t\t<a class="logo-wrapper" href="/">\r\n\t\t\t\t\t\t<div class="made-with"> Made with</div>\r\n\t\t\t\t\t\t<div class="logo sprite"></div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t'), 
        __p += '\r\n\r\n\t\t\t\t<div class="pages-wrapper has-' + (null == (__t = viewerType) ? "" : __t) + '-scroll">\r\n\t\t\t\t\t<div class="pages">\r\n\r\n\t\t\t\t\t\t', 
        _.each(pages, function(t, e) {
            var i = "horizontal" == viewerType ? "left" : "top", s = e * ("horizontal" == viewerType ? width : height);
            __p += '\r\n\t\t\t\t\t\t\t<div class="page" data-id="' + (null == (__t = t._id) ? "" : __t) + '" data-num="' + (null == (__t = t.num) ? "" : __t) + '" data-src="' + (null == (__t = mag.model.getPageScreenshot(width, {
                _id: t._id
            })) ? "" : __t) + '" style="width:' + (null == (__t = width) ? "" : __t) + "px;height:" + (null == (__t = height) ? "" : __t) + "px;" + (null == (__t = i) ? "" : __t) + ":" + (null == (__t = s) ? "" : __t) + 'px">\r\n\t\t\t\t\t\t\t\t<img class="screenshot" src="' + (null == (__t = stub) ? "" : __t) + '" />\r\n\t\t\t\t\t\t\t\t<div class="num ' + (null == (__t = t.num > 99 ? "over99" : "") ? "" : __t) + '">' + (null == (__t = t.num) ? "" : __t) + "</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
        }), __p += "\r\n\r\n\t\t\t\t\t\t", !RM.common.isDomainViewer && Modernizr.android && (__p += '\r\n\t\t\t\t\t\t\t<a class="logo-wrapper" href="/">\r\n\t\t\t\t\t\t\t\t<div class="made-with"> Made with</div>\r\n\t\t\t\t\t\t\t\t<div class="logo sprite"></div>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t'), 
        __p += '\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="scroll"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-mag-password"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="magpassword-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="back invisible"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content invisible">\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="caption-private">This is a private project.<br/><span class="nowrap">Enter the password:</span></div>\n\t\t\t\t\t<div class="password-wrapper">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="password" class="password-input" id="magpassword-input" required>\n\t\t\t\t\t\t\t<div class="access disabled">Access</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t', 
        user.get("permissions") && user.get("permissions").white_label || (__p += '\n\t\t\t<div class="author invisible">\n\t\t\t\t<div class="userpic">\n\t\t\t\t\t<a href="' + (null == (__t = user.getLink()) ? "" : _.escape(__t)) + '"><img src="' + (null == (__t = user.getUserpic(128)) ? "" : _.escape(__t)) + '" alt=""></a>\n\t\t\t\t\t<a href="' + (null == (__t = user.getLink()) ? "" : _.escape(__t)) + '"><div class="username">' + (null == (__t = user.get("name")) ? "" : _.escape(__t)) + '</div></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="caption">Published by</div>\n\t\t\t</div>\n\t\t\t<div class="powered invisible">\n\t\t\t\t<div class="caption-powered">Made with</div>\n\t\t\t\t<a href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '"><div class="logo-powered"></div></a>\n\t\t\t</div>\n\t\t'), 
        __p += "\n\t</div>\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-mag"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="mag">\n\t\t<div class="mag-pages-container">\n\t\t\t<div class="container disable-transitions">\n\n\t\t\t\t<div class="blackout"></div>\n\t\t\t</div>\n\t\t\t<div class="above-pages-container"></div>\n\t\t</div>\n\n\t\t', 
        hasStandaloneBottomArrow && (__p += '\n\t\t\t<div class="navigation-arrow bottom offscreen"><div class="icon sprite"></div></div>\n\t\t'), 
        __p += "\n\n\n\t\t", isPreview && (__p += '\n\t\t\t<div class="mag-pages-viewport-device"></div>\n\t\t'), 
        __p += "\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-navigation"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="navigation">\n\t\t<div class="navigation-arrow left offscreen"><div class="icon sprite"></div></div>\n\t\t<div class="navigation-arrow right offscreen"><div class="icon sprite"></div></div>\n\t\t<div class="navigation-arrow bottom offscreen"><div class="icon sprite"></div></div>\n\t</div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-page"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="page hidden">\n\t\t<div class="page-fixed-bg-container polyfill-sticky"></div>\n\t\t<div class="fixed-position-container-top polyfill-sticky"></div>\n\t\t<div class="fixed-position-container polyfill-sticky"></div>\n\t\t<div class="content-scroll-wrapper ' + (null == (__t = isStickyVerticalViewer ? "" : "has-vertical-scroll") ? "" : __t) + '">\n\t\t\t<div class="content-bounds">\n\t\t\t\t<div class="page-content-container" tabindex="-1"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-share"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += "\n\n\t", hasOverlay && (__p += '\n\t\t<div class="share-popup-overlay hidden"></div>\n\t'), 
        __p += '\n\n\t<div class="share-popup hidden">\n\t\t<div class="content-wrapper">\n\n\t\t\t<div class="share-wrapper">\n\t\t\t\t<div class="caption">Share</div>\n\n\t\t\t\t<div class="type-selector">\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="type-full">Project</div>\n\t\t\t\t\t<div class="type-page">Current Page</div>\n\t\t\t\t\t<div class="arrow sprite"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="buttons-wrapper">\n\t\t\t\t\t<div class="share-facebook button" data-tp="facebook"><div class="icon sprite"></div>Share</div>\n\t\t\t\t\t<div class="share-twitter button" data-tp="twitter"><div class="icon sprite"></div>Tweet</div>\n\t\t\t\t\t<div class="share-gplus button" data-tp="gplus"><div class="icon sprite"></div>Google+</div>\n\t\t\t\t\t<div class="share-pinterest button" data-tp="pinterest"><div class="icon sprite"></div>Pin</div>\n\t\t\t\t\t<div class="share-linkedin button" data-tp="linkedin"><div class="icon sprite"></div>Linkedin</div>\n\t\t\t\t\t<div class="share-mail button" data-tp="email"><div class="icon sprite"></div>Email</div>\n\t\t\t\t</div>\n\n\t\t\t\t', 
        Modernizr.isboxversion || RM.common.isDownloadedSource || (__p += '\n\t\t\t\t\t<div class="open-embed"><div class="icon sprite"></div>Embed</div>\n\t\t\t\t\t<div class="close">Close</div>\n\t\t\t\t\t<div class="send-report" data-tp="report"><div class="icon sprite"></div>Report</div>\n\t\t\t\t'), 
        __p += "\n\t\t\t</div>\n\n\t\t\t", Modernizr.isboxversion || RM.common.isDownloadedSource || (__p += '\n\t\t\t\t<div class="embed-wrapper">\n\t\t\t\t\t<div class="caption">Embed</div>\n\n\t\t\t\t\t<div class="size-selector" data-selected="responsive">\n\t\t\t\t\t\t<div class="size responsive" data-size="responsive">Responsive</div>\n\t\t\t\t\t\t<div class="size big" data-size="big">512×383</div>\n\t\t\t\t\t\t<div class="size small" data-size="small">288×236</div>\n\t\t\t\t\t\t<div class="arrow sprite"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="code-block">\n\t\t\t\t\t\t<div class="thumb">\n\t\t\t\t\t\t\t<img class="thumb-pic" src="" alt=""/>\n\t\t\t\t\t\t\t<div class="thumb-toolbar">\n\t\t\t\t\t\t\t\t<div class="icon arrows"></div>\n\t\t\t\t\t\t\t\t<div class="icon open"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<textarea class="embed-code"></textarea>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="back">Back</div>\n\t\t\t\t</div>\n\t\t\t'), 
        __p += '\n\t\t</div>\n\n\t\t<div class="corner-wrapper">\n\t\t\t<div class="corner"></div>\n\t\t</div>\n\t</div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-toolbar"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += '\n\n\t<div class="toolbar for-viewer">\n\n\t\t';
            var offscreenClass = isPreview || RM.common.embedMode ? "" : "offscreen-initially";
            __p += "\n\n\t\t", hasPageCounter && !pageCounterInsideMenu && (__p += '\n\t\t\t<div class="page-counter-wrapper ' + (null == (__t = offscreenClass) ? "" : __t) + '">\n\t\t\t\t<div class="page-counter"><span class="cur"></span> of <span class="total">' + (null == (__t = totalPages) ? "" : __t) + "</span></div>\n\t\t\t</div>\n\t\t"), 
            __p += "\n\n\t\t", hasShare && (__p += '\n\t\t\t<div class="share-button sprite ' + (null == (__t = offscreenClass) ? "" : __t) + '" data-alt="Share" data-alt-pos="bottom" data-alt-offset="9"></div>\n\t\t'), 
            __p += "\n\n\t\t", hasMenu && (__p += '\n\t\t\t<div class="menu-button ' + (null == (__t = offscreenClass) ? "" : __t) + '" data-alt="Menu (M)" data-alt-pos="bottom" data-alt-offset="9">\n\t\t\t\t', 
            hasPageCounter && pageCounterInsideMenu && (__p += '\n\t\t\t\t\t<div class="page-counter"><span class="cur"></span> of <span class="total">' + (null == (__t = totalPages) ? "" : __t) + "</span></div>\n\t\t\t\t"), 
            __p += '\n\t\t\t\t<div class="line-1"></div>\n\t\t\t\t<div class="line-2"></div>\n\t\t\t\t<div class="line-3"></div>\n\t\t\t\t<div class="page-preloader sprite"></div>\n\t\t\t</div>\n\t\t'), 
            __p += "\n\n\t\t", RM.common.embedMode && (__p += '\n\t\t\t<div class="embed-close-button ' + (null == (__t = offscreenClass) ? "" : __t) + '">Close</div>\n\t\t'), 
            __p += "\n\n\t</div>\n\n";
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-widget"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="rmwidget"></div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-widget-background"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="rmwidget widget-background" style="background-color: #' + (null == (__t = data.color) ? "" : __t) + '">\n\n        ', 
        "picture" == data.selectedType && (__p += '\n            <div class="picture-background" style="opacity: ' + (null == (__t = data.opacity || 1) ? "" : __t) + ';"></div>\n        '), 
        __p += "\n\n        ", "video" == data.selectedType && (__p += '\n            <div class="video-background" style="opacity: ' + (null == (__t = data.videoopacity || 1) ? "" : __t) + ';">\n                <div class="video-container"></div>\n                <div class="overlay"></div>\n            </div>\n        '), 
        __p += "\n\t</div>\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-widget-button"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <input class="text"\n           value="' + (null == (__t = data.text) ? "" : _.escape(__t)) + '"\n           type="text"\n           disabled\n           readonly\n           autocapitalize="off"\n           autocorrect="off"\n           autocomplete="off"\n           spellcheck="false"\n           role="button"\n           name="' + (null == (__t = data.text) ? "" : _.escape(__t)) + '"/>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-viewer-widget-text"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += "\n\t";
            var cc = 1 == column_count ? "auto" : column_count;
            __p += '\n\t<div style=" -webkit-nbsp-mode:space; -webkit-line-break:after-white-space; column-count:' + (null == (__t = cc) ? "" : __t) + ";-webkit-column-count:" + (null == (__t = cc) ? "" : __t) + " !important;-moz-column-count:" + (null == (__t = cc) ? "" : __t) + ";column-gap:" + (null == (__t = column_gap) ? "" : __t) + "px;-webkit-column-gap:" + (null == (__t = column_gap) ? "" : __t) + "px !important;-moz-column-gap:" + (null == (__t = column_gap) ? "" : __t) + "px;background:" + (null == (__t = bg) ? "" : _.escape(__t)) + '">' + (null == (__t = text) ? "" : __t) + "</div>\n";
        }
        return __p;
    }.apply(this, arguments));
}, "undefined" == typeof RM && (RM = {}), function(t) {
    t.constants = _.extend({
        UPLOAD_IMAGE_SIZE_LIMIT: 6291456,
        MSG_UPLOAD_IMAGE_SIZE_ERROR: "File size should be less than 6 Mb.",
        MSG_UPLOAD_IMAGE_SUPPORTED_ERROR: "We support only JPG, GIF, PNG, SVG and BMP picture formats.",
        MSG_UPLOAD_ONLY_SINGLE_FILE: "We support only 1 file upload via drop on workspace",
        THUMB_SIZE: 48,
        BG_EFFECT_THUMBSIZE: 40,
        UPLOAD_IMAGE_FORMATS: "jpeg|jpg|png|gif|bmp|svg\\+xml",
        EMBED_SCRIPT_INIT: window.ServerData.config.readymag_host + "/specials/assets/embed_init.js",
        EMBED_SCRIPT_MAIN: window.ServerData.config.readymag_host + "/specials/assets/embed_main.js",
        IS_LIVE: !(!window.ServerData || !window.ServerData.stripe_live),
        IS_FILE_PROTOCOL: "file:" == window.location.protocol
    }, window.ServerData.config), t.utils = {
        picSizes: [ 256, 304, 512, 608, 1024 ],
        isPageNativelyScaled: function() {
            return window.innerWidth != document.documentElement.clientWidth;
        },
        declination: function(t, e, i, s, n) {
            var a = s % 100;
            return a = a >= 11 && a <= 14 ? 0 : (a %= 10) < 5 ? a > 2 ? 2 : a : 0, n || (a = 1 == s ? 1 : 0), [ t, e, i ][a];
        },
        queryUrlGetParam: function(t, e) {
            try {
                q = e ? e.split("?")[1] : location.search.substring(1), v = q ? q.split("&") : [];
                for (var i = 0; i < v.length; i++) if (p = v[i].split("="), p[0] == t) return !(p.length > 1) || decodeURIComponent(p[1]);
            } catch (t) {
                console.log(t);
            }
        },
        autoWindowScroll: function(e, i, s) {
            this.autoWindowScrollClear();
            var n = 0;
            windowH = $(window).height(), e.pageY < 10 && (n = -Math.abs(Math.floor(3 * (10 - e.pageY)))), e.pageY > windowH - 10 && (n = Math.abs(Math.floor(3 * (10 - (windowH - e.pageY))))), 
            0 != (n = Math.max(Math.min(20, n), -20)) && (i.scrollTop(i.scrollTop() + n), t.common.autoWindowScrollTimeout = setTimeout(function() {
                s && s();
            }, 100));
        },
        autoWindowScrollClear: function() {
            clearTimeout(t.common.autoWindowScrollTimeout);
        },
        isValidEmail: function(t, e) {
            return e || (t = t.replace(/^\s+|\s+$/g, "")), /^([a-z0-9_\-]+[\.\+])*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,}$/i.test(t);
        },
        isValidEmailLink: function(e) {
            return t.utils.isValidEmail(e.split("?")[0]);
        },
        getRGBA: function(t, e) {
            var i = "";
            if (t) {
                var s = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
                i = e > .99 ? "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")" : "rgba(" + s[0] + "," + s[1] + "," + s[2] + ", " + e + ")";
            }
            return i;
        },
        generateUUID: function() {
            var t = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var i = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16);
            });
        },
        escapeSpecial: function(t, e) {
            return (t = (t + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")) && e && (t = "'" + t + "'"), 
            t;
        },
        scanForURIs: function(t, e, i) {
            var s = [], n = 0;
            return t = (t = (t = (t += " ").replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim, function(t) {
                return s[++n] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="mailto:' + t + '">' + t + "</a>", 
                "INNER_TMP_BLOCK_" + n + "_INNER_TMP_BLOCK";
            })).replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}\<\>]*)*/gim, function(t, a, o, r, l, c) {
                var d = t;
                void 0 != a && "" != a || (d = "http://" + d);
                var h = o;
                return void 0 != r && "" != r && (h += "." + r), n++, i || (h = (h = d).replace(/^https?:\/\//, "")), 
                s[n] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="' + d + '" target="_blank" title="' + d + '">' + h + "</a>", 
                "INNER_TMP_BLOCK_" + n + "_INNER_TMP_BLOCK";
            })).replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim, function(t, e) {
                return s[e];
            });
        },
        plainTextToHtml: function(e, i) {
            return e = (e = (e = (e = (e = (e = e || "").replace(/\&/gim, "&amp;")).replace(/\</gim, "&lt;")).replace(/\>/gim, "&gt;")).replace(/\n/gim, "<br/>")).replace(/\s\s/gim, " &nbsp;"), 
            i && i.detectLinks && (e = t.utils.scanForURIs(e)), e;
        },
        screenshotSize: function(t) {
            return Modernizr.retina && (t *= 2), -1 == this.picSizes.indexOf(t) && (t = _.filter(this.picSizes, function(e) {
                return e > t;
            })[0]), -1 == this.picSizes.indexOf(t) ? (console.error("screenshot size not found! size: " + t), 512) : t;
        },
        addFilenameComponent: function(t, e) {
            var i = t.split(".");
            return i.length > 1 ? (i[i.length - 2] += "_" + e, i.join(".")) : t + "_" + e;
        },
        URLParts: function(t) {
            var e = /(.+:\/\/)?([^\/]+)(\/.*)*/i.exec(t);
            return {
                url: (e = e || [])[0] || "",
                protocol: e[1] || "",
                hostname: e[2] || "",
                path: e[3] || ""
            };
        },
        filterNonAscii: function(t) {
            if (t && t.val) {
                var e = t.val();
                return !!/[^\x00-\x7f]/.test(e) && (e = e.replace(/[^\x00-\x7f]/g, ""), t.val(e), !0);
            }
        },
        applyTransform: function(t, e) {
            t.css({
                "-webkit-transform": e,
                transform: e
            });
        },
        getCurrentTranslate: function(t) {
            var e, i = window.getComputedStyle(t, null), s = i.getPropertyValue("-webkit-transform") || i.getPropertyValue("transform");
            return s && "none" != s ? [ (e = (e = (e = s.split("(")[1]).split(")")[0]).split(","))[4] - 0, e[5] - 0 ] : [ 0, 0 ];
        },
        applyTransition: function(t, e) {
            t.css({
                "-webkit-transition": e.replace("transform", "-webkit-transform"),
                transition: e
            });
        },
        waitForTransitionEnd: function(t, e, i, s) {
            t = t instanceof jQuery ? t : $(t);
            var n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }[Modernizr.prefixed("transition")], a = function e(a) {
                if (a) {
                    var r = a.originalEvent.propertyName.toLowerCase();
                    if (!$(a.target).is(t)) return;
                    if (-1 == r.indexOf(i)) return;
                }
                t.off(n, e), clearTimeout(o), s();
            };
            t.on(n, a);
            var o = setTimeout(a, e);
            return function() {
                t.off(n, a), clearTimeout(o);
            };
        },
        vueTransitionsShow: function(e, i) {
            var s = i + "-enter", n = i + "-enter-active";
            e.addClass(s), window.requestAnimationFrame(function() {
                e.removeClass(s), e.addClass(n), t.utils.waitForTransitionEnd(e, 200, "opacity", function() {
                    e.removeClass(n);
                });
            });
        },
        vueTransitionsHide: function(e, i) {
            var s = i + "-leave-to", n = i + "-leave-active";
            return e.addClass(s + " " + n), new window.Promise(function(i) {
                t.utils.waitForTransitionEnd(e, 200, "opacity", i);
            }).then(function() {
                e.removeClass(s + " " + n);
            });
        },
        getFixedPositionCSS: function(t, e, i) {
            var s = e.left * i, n = e.top * i, a = e.width, o = e.height, r = a * (1 - i) / 2, l = o * (1 - i) / 2, c = {
                left: "",
                top: "",
                bottom: "",
                right: "",
                "margin-left": "",
                "margin-top": ""
            };
            return t ? ("c" != t && (t.indexOf("n") > -1 && (c.top = n - l), t.indexOf("w") > -1 && (c.left = s - r), 
            t.indexOf("e") > -1 && (c.right = s - r), t.indexOf("s") > -1 && (c.bottom = n - l)), [ "n", "c", "s" ].indexOf(t) > -1 && (c.left = "50%", 
            c["margin-left"] = -a / 2 + s), [ "w", "c", "e" ].indexOf(t) > -1 && (c.top = "50%", c["margin-top"] = -o / 2 + n), 
            c) : _.extend({}, c, e);
        },
        getFixedPositionBox: function(t, e, i, s) {
            i = i || 1;
            var n = e.x * i, a = e.y * i, o = e.w * i, r = e.h * i, l = {
                left: n,
                top: a,
                width: o,
                height: r
            };
            return t ? ("c" !== t && (-1 !== t.indexOf("s") && (l.top = s.height - a - r), -1 !== t.indexOf("e") && (l.left = s.width - n - o)), 
            -1 !== [ "n", "c", "s" ].indexOf(t) && (l.left = s.width / 2 - o / 2 + n), -1 !== [ "w", "c", "e" ].indexOf(t) && (l.top = s.height / 2 - r / 2 + a), 
            l.bottom = l.top + l.height, l.right = l.left + l.width, l) : l;
        },
        decimals: function(t, e) {
            var i = Math.pow(10, e);
            return Math.round(t * i) / i;
        },
        getFocusBack: function() {
            Modernizr.isdesktop && $('<input style="position: absolute;left: -999px;" type="text"/>').appendTo("body").css({
                top: $(window).scrollTop()
            }).focus().remove();
        },
        hex2rgb: function(t) {
            return [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
        },
        loadLoggedUser: function(e) {
            if (t.common.isDownloadedSource) return e && e();
            if (window.ServerData && window.ServerData.me && window.ServerData.me.user) return e && e();
            if (t.utils.__loadLoggedUserCallbackStack = t.utils.__loadLoggedUserCallbackStack || [], e && "function" == typeof e && t.utils.__loadLoggedUserCallbackStack.push(e), 
            !t.utils.__loadLoggedUserLoadStarted) {
                t.utils.__loadLoggedUserLoadStarted = !0, $(window).on("message", _.bind(function(e) {
                    if ((e = e.originalEvent || {}).origin == t.constants.readymag_auth_host) {
                        if ("string" != typeof e.data) return;
                        var s = JSON.parse(e.data);
                        if ("user" != s.event) return;
                        var n = s.message;
                        window.ServerData && (window.ServerData.me = {
                            user: n
                        });
                        for (var a = 0; a < t.utils.__loadLoggedUserCallbackStack.length; a++) t.utils.__loadLoggedUserCallbackStack[a].call(this, n);
                        t.utils.__loadLoggedUserCallbackStack = null, t.utils.__loadLoggedUserLoadStarted = null, i.remove();
                    }
                }, this));
                var i = $("<iframe>").attr("width", "0").attr("height", "0").css({
                    position: "absolute",
                    top: "-999px"
                }).on("load", function() {
                    i[0].contentWindow.postMessage("GetLoggedUser", "*");
                }).attr("src", t.constants.readymag_auth_host + "/get_user_cookies." + Date.now()).appendTo("body");
            }
        },
        selectProtocol: function(e) {
            return e && e.length ? (0 == e.indexOf("//") && t.constants.IS_FILE_PROTOCOL && (e = "http:" + e), e) : e;
        },
        _sendFBGraphRequest: function(t) {
            $.ajax({
                type: "GET",
                url: "https://graph.facebook.com/?id=" + encodeURIComponent(t) + "&scrape=true&method=post",
                success: function(t) {}
            });
        },
        facebookGraphRefresh: function(e) {
            var i, s, n, a = t.constants.readymag_host || window.location.origin;
            n = a + "/" + e.user_uri + "/" + e.mag_uri + "/", this._sendFBGraphRequest(n);
            var o = a + "/" + e.mag_numid + "/";
            this._sendFBGraphRequest(o), e.mag_domain ? (i = "http://" + e.mag_domain + "/", this._sendFBGraphRequest(i)) : e.user_domain && (s = "http://" + e.user_domain + "/" + e.mag_uri + "/", 
            this._sendFBGraphRequest(s));
            var r = e.pages;
            if (0 != r.length) for (var l in i || s || a + "/", r) {
                var c = a + "p" + (l = r[l]).num_id + "/";
                this._sendFBGraphRequest(c);
            }
        },
        simulateEvent: function(t, e) {
            var i, s = {
                HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
            }, n = r({
                pointerX: 0,
                pointerY: 0,
                button: 0,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                bubbles: !0,
                cancelable: !0
            }, arguments[2] || {}), a = null;
            for (var o in s) if (s[o].test(e)) {
                a = o;
                break;
            }
            if (!a) throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");
            document.createEvent ? (i = document.createEvent(a), "HTMLEvents" == a ? i.initEvent(e, n.bubbles, n.cancelable) : i.initMouseEvent(e, n.bubbles, n.cancelable, document.defaultView, n.button, n.pointerX, n.pointerY, n.pointerX, n.pointerY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, n.button, t), 
            t.dispatchEvent(i)) : (n.clientX = n.pointerX, n.clientY = n.pointerY, i = r(document.createEventObject(), n), 
            t.fireEvent("on" + e, i));
            return t;
            function r(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }
        },
        getTestIndexes: function() {
            if (t.common.rm_test) return t.common.rm_test;
            var e, i, s = {};
            for (e = 2; e <= 5; e++) s["_test_" + e] = -1;
            if (Modernizr.localstorage) for (e = 2; e <= 5; e++) s[i = "_test_" + e] = localStorage.getItem("rm_test_" + e), 
            (parseInt(s[i]) != s[i] || s[i] < 0 || s[i] >= e) && (s[i] = Math.floor(Math.random() * e), localStorage.setItem("rm_test_" + e, s[i])), 
            s[i] -= 0;
            return t.common.rm_test = s, s;
        },
        setInputSize: function(t, e, i) {
            var s = $('<div style="position:absolute; left:-9999px; right:auto; margin:0; white-space:pre; width:auto"></div>').appendTo(t.parent());
            s[0].className = t[0].className, s.text(i || t.val());
            var n = s.width();
            n = 2 * Math.ceil(n / 2) + 2, e && n > e && (n = e), t.width(n), s.remove();
        },
        PageVisibilityManager: function() {
            var t, e;
            void 0 !== document.hidden ? (t = "hidden", e = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", 
            e = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", 
            e = "webkitvisibilitychange");
            return {
                addEventListener: function(i) {
                    if (!t) return !1;
                    document.addEventListener(e, i);
                },
                removeEventListener: function(i) {
                    if (!t) return !1;
                    document.removeEventListener(e, i);
                },
                isPageHidden: function() {
                    return document[t];
                }
            };
        }(),
        getCookie: function(t) {
            var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : void 0;
        },
        deleteCookie: function(t) {
            this.createCookie(t, "");
        },
        createCookie: function(e, i, s) {
            s = s || 36500;
            var n = new Date();
            n.setTime(n.getTime() + 24 * s * 60 * 60 * 1e3);
            var a, o = "; expires=" + n.toGMTString();
            a = (a = t.constants.readymag_host.replace(/https?:\/\//i, "")).replace("/", ""), document.cookie = e + "=" + i + o + "; path=/; domain=." + a;
        },
        isMongoObjectId: function(t) {
            return /^[0-9a-fA-F]{24}$/.test(t);
        },
        setNoTransitions: function(e) {
            return e = !!e || void 0 === e, t.constants.noanimations = e, $("html").toggleClass("notransitions"), 
            "Transitions are " + (e ? "disabled" : "enabled");
        }
    }, $.expr[":"].icontains = function(t, e, i, s) {
        var n = i[3] + "", a = t.textContent || t.innerText || jQuery(t).text() || "", o = new RegExp("(" + n + ")", "i");
        return !!a.match(o);
    }, $.expr[":"].econtains = function(t, e, i, s) {
        var n = i[3] + "", a = t.textContent || t.innerText || jQuery(t).text() || "", o = new RegExp("(^" + n + "$)", "");
        return !!a.match(o);
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }, _.bindAll = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return 0 === e.length && (e = _.functions(t)), _.each(e, function(e) {
            t[e] = _.bind(t[e], t);
        }), t;
    }, _.mixin({
        cloneWithObjects: function(t) {
            return t = _.clone(t), _.each(t, function(e, i) {
                if (_.isArray(e)) {
                    for (var s = [], n = 0; n < e.length; n++) s.push(_.clone(e[n]));
                    t[i] = s;
                } else _.isObject(e) && !_.isFunction(e) ? t[i] = _.clone(t[i]) : _.isFunction(e) && (t[i] = t[i]);
            }), t;
        },
        isContainsData: function(t, e) {
            return _.all(e, function(e) {
                return _.any(t, function(t) {
                    return _.isEqual(t, e);
                });
            });
        },
        objectDifference: function(t, e) {
            var i = {};
            return _.each(e, function(s, n) {
                if (_.isObject(s) && !_.isArray(s)) return i[n] = _.objectDifference(t[n], e[n]), void (_.isEmpty(i[n]) && !_.isEmpty(e[n]) ? delete i[n] : i[n] = e[n]);
                t && e && _.isEqual(t[n], e[n]) || (i[n] = e[n]);
            }), i;
        },
        deepExtend: function(t) {
            var e, i = /#{\s*?_\s*?}/, s = function(e, i, s) {
                return t[s] = _.clone(i);
            }, n = function(n) {
                var a = t[n], o = e[n];
                !function(t, e) {
                    return _.isUndefined(t) || _.isNull(t) || _.isFunction(t) || _.isNull(e) || _.isDate(e);
                }(a, o) ? function(t, e) {
                    return _.isString(e) && i.test(e);
                }(0, o) ? function(e, s, n) {
                    _.isString(e), t[n] = s.replace(i, e);
                }(a, o, n) : !function(t, e) {
                    return _.isArray(t) || _.isArray(e);
                }(a, o) && _.isObject(a) && _.isObject(o) ? function(e, i, s) {
                    if (!_.isObject(e) || !_.isObject(i)) throw new Error("Trying to combine an object with a non-object (" + s + ")");
                    t[s] = _.deepExtend(e, i);
                }(a, o, n) : s(0, o, n) : s(0, o, n);
            };
            return _.each(Array.prototype.slice.call(arguments, 1), function(t) {
                e = t, Object.keys(e).forEach(n);
            }), t;
        }
    });
    if (jQuery.fn.selectText = function() {
        var t, e, i = document, s = this[0];
        i.body.createTextRange ? ((t = document.body.createTextRange()).moveToElementText(s), t.select()) : window.getSelection && (e = window.getSelection(), 
        (t = document.createRange()).selectNodeContents(s), e.removeAllRanges(), e.addRange(t)), this.focus(), 
        s.selectionStart = 0, s.selectionEnd = 1;
    }, String.prototype.toHttps = function() {
        return this.replace(/^http:\/\//i, "https://");
    }, String.prototype.escapeRegExp = function() {
        var t = new RegExp("(\\" + [ "$", "^", "*", "(", ")", "+", "[", "]", "{", "}", "\\", "|", ".", "?", "/" ].join("|\\") + ")", "g");
        return this.replace(t, "\\$1");
    }, Number.prototype.formatWithDelimiters = function(t) {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t);
    }, Number.prototype.toFixedNonZero = function(t) {
        return this % 1 ? this.toFixed(t) : this.toString();
    }, $.fn.setCursorPos = function(t) {
        var e, i;
        if ((e = this.eq(0)) && e.is("input")) if ((i = e.get(0)).setSelectionRange) i.focus(), i.setSelectionRange(t, t); else if (i.createTextRange) {
            var s = i.createTextRange();
            s.collapse(!0), s.moveEnd("character", t), s.moveStart("character", t), s.select();
        }
    }, $.fn.getCursorPos = function() {
        var t, e;
        if ((t = this.eq(0)) && t.is("input")) {
            if ((e = t.get(0)).selectionStart) return e.selectionStart;
            if (document.selection) {
                e.focus();
                var i = document.selection.createRange(), s = document.selection.createRange().text.length;
                return i.moveStart("character", -e.value.length), i.text.length - s;
            }
        }
    }, $.fn.flashClass = function(t, e) {
        var i, s = this;
        return this.addClass(t), clearTimeout(this.data("timeout")), i = setTimeout(function() {
            "object" == (void 0 === s ? "undefined" : _typeof(s)) && s.length && (s.removeClass(t), s.data("timeout", null));
        }, e), this.data("timeout", i), this;
    }, $.fn.cardNumberFormatter = function() {
        this.on("input", function() {
            var t, e, i, s;
            s = this.getCursorPos(), /[^\d\s]/g.test(this.val()) && (this.val(this.val().replace(/[^\d\s]/g, "")), 
            this.setCursorPos(s - 1)), t = this.val().replace(/\s/g, ""), this.data("prev_card_digits", this.data("prev_card_digits") || t), 
            window.Stripe && window.Stripe.card && window.Stripe.card.cardType && (e = Stripe.card.cardType(t)), 
            i = "American Express" == e ? function(t) {
                return t.replace(/^(\d{4})(\d{6})?/, "$1 $2 ").replace(/\s+/g, " ");
            } : function(t) {
                return $.trim(t.replace(/(\d{4})(\d{4})?(\d{4})?(\d{3,4})?/, "$1 $2 $3 $4").replace(/\s+/g, " "));
            }, (!this.data("prev_card_digits") || t.length > this.data("prev_card_digits").length && t.length < 17) && (s = this.getCursorPos(), 
            this.val(i(t)), s < $.trim(this.val()).length - 1 && this.data("prev_card_digits") && this.setCursorPos(s)), 
            this.data("prev_card_digits", t);
        }.bind(this));
    }, window.Backbone) {
        _.extend(Backbone.History.prototype, {
            universalStart: function(t) {
                if (Modernizr.history) Backbone.history.start(t); else {
                    t.pushState = !1, t.silent = !0, t.hashChange = !0, Backbone.history.start(t);
                    var e = Backbone.history.options.root.length, i = window.location.pathname.substr(e);
                    Backbone.history.navigate(i, {
                        trigger: !0
                    });
                }
            }
        });
        var e = Backbone.Router.prototype.navigate;
        Backbone.Router.prototype.navigate = function(t, i) {
            return t.indexOf("?") > -1 || i && i.skipQueryString ? e.apply(this, arguments) : (t += window.location.search, 
            e.call(this, t, i));
        }, Backbone.Model.prototype.getResetAttrs = function(t, e) {
            var i = t.toJSON();
            return _.each(i, function(t, s) {
                _.isObject(i[s] && _.isObject(e[s])) && (e[s] = this.getResetAttrs(i[s], e[s])), _.has(i, s) && !_.has(e, s) && (e[s] = void 0);
            }, this), e;
        };
    }
    for (var i = 0, s = [ "ms", "moz", "webkit", "o" ], n = 0; n < s.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[s[n] + "RequestAnimationFrame"], 
    window.cancelAnimationFrame = window[s[n] + "CancelAnimationFrame"] || window[s[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
        var s = new Date().getTime(), n = Math.max(0, 16 - (s - i)), a = window.setTimeout(function() {
            t(s + n);
        }, n);
        return i = s + n, a;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t);
    });
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    t.mathutils = {
        sideAngles: {
            top: 0,
            right: .5 * Math.PI,
            bottom: Math.PI,
            left: 1.5 * Math.PI
        },
        calcOrientedTriangleSquare: function(t, e, i) {
            return (e.x - t.x) * (i.y - t.y) - (e.y - t.y) * (i.x - t.x);
        },
        intersectsOnAxisProjection: function(t, e, i, s) {
            var n;
            return t > e && (n = t, t = e, e = n), i > s && (n = i, i = s, s = n), t < i && (t = i), e > s && (e = s), 
            t <= e;
        },
        isLinesIntersects: function(e, i, s, n) {
            return t.mathutils.intersectsOnAxisProjection(e.x, i.x, s.x, n.x) && t.mathutils.intersectsOnAxisProjection(e.y, i.y, s.y, n.y) && t.mathutils.calcOrientedTriangleSquare(e, i, s) * t.mathutils.calcOrientedTriangleSquare(e, i, n) <= 0 && t.mathutils.calcOrientedTriangleSquare(s, n, e) * t.mathutils.calcOrientedTriangleSquare(s, n, i) <= 0;
        },
        isConvexPolygonContainsPoint: function(e, i) {
            for (var s = 0; s < e.length; s++) {
                var n = (s + 1) % e.length;
                if (t.mathutils.calcOrientedTriangleSquare(e[s], e[n], i) < 0) return !1;
            }
            return !0;
        },
        isConvexPolygonsIntersects: function(e, i) {
            var s, n, a, o;
            for (s = 0; s < e.length; s++) if (t.mathutils.isConvexPolygonContainsPoint(i, e[s])) return !0;
            for (s = 0; s < i.length; s++) if (t.mathutils.isConvexPolygonContainsPoint(e, i[s])) return !0;
            for (s = 0; s < e.length; s++) for (n = (s + 1) % e.length, a = 0; a < i.length; a++) if (o = (a + 1) % i.length, 
            t.mathutils.isLinesIntersects(e[s], e[n], i[a], i[o])) return !0;
            return !1;
        },
        doBoundingBoxesIntersect: function(t, e) {
            return t && e && !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top);
        },
        calcBoundingBox: function(e, i, s) {
            var n = t.mathutils.calcRotatedBox(e), a = _.pluck(n, "x"), o = _.pluck(n, "y"), r = Math.min.apply(null, a), l = Math.max.apply(null, a), c = Math.min.apply(null, o), d = r, h = c, p = l - r, u = Math.max.apply(null, o) - c;
            return i && ([ "n", "c", "s" ].indexOf(i) > -1 && (d = e.left), [ "w", "c", "e" ].indexOf(i) > -1 && (h = e.top)), 
            s ? {
                width: p,
                height: u,
                left: d,
                top: h
            } : {
                bb_width: p,
                bb_height: u,
                bb_left: d,
                bb_top: h
            };
        },
        boxToRect: function(t) {
            return {
                width: t.width,
                height: t.height,
                top: t.top,
                bottom: t.top + t.height,
                left: t.left,
                right: t.left + t.width
            };
        },
        getBoundingBoxOfMany: function(e) {
            var i = [], s = [];
            _.each(e, function(e) {
                var n = void 0 !== e.right ? _.extend({}, e) : t.mathutils.boxToRect(e);
                i.push(n.left), i.push(n.right), s.push(n.top), s.push(n.bottom);
            });
            var n = {
                top: Math.min.apply(null, s),
                right: Math.max.apply(null, i),
                bottom: Math.max.apply(null, s),
                left: Math.min.apply(null, i)
            };
            return n.width = n.right - n.left, n.height = n.bottom - n.top, n;
        },
        calcRotatedBox: function(t) {
            var e = [], i = [ 0, 1, 1, 0 ], s = [ 0, 0, 1, 1 ], n = t.left + t.width / 2, a = t.top + t.height / 2, o = t.sinAngle, r = t.cosAngle;
            return _.each(i, function(l, c) {
                var d = t.left + t.width * i[c], h = t.top + t.height * s[c], p = d - n, u = a - h;
                d = n + r * p + o * u, h = a + o * p - r * u;
                e.push({
                    x: d,
                    y: h
                });
            }), e;
        },
        getDistance: function(t, e) {
            return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y));
        },
        getBestPoints: function(e, i) {
            for (var s, n, a, o = [ "right", "left", "bottom", "top" ], r = {
                distance: 1 / 0,
                fromPoint: {},
                toPoint: {}
            }, l = 0; l < o.length; l++) for (var c = 0; c < o.length; c++) n = t.mathutils.getSideCenter(e, o[l]), 
            a = t.mathutils.getSideCenter(i, o[c]), r = (s = t.mathutils.getDistance(n, a)) < r.distance ? {
                distance: s,
                fromSide: o[l],
                fromPoint: n,
                toSide: o[c],
                toPoint: a
            } : r;
            return r;
        },
        getSideCenter: function(t, e) {
            var i;
            switch (e) {
              case "left":
                i = {
                    x: t.left,
                    y: t.top + t.height / 2
                };
                break;

              case "top":
                i = {
                    x: t.left + t.width / 2,
                    y: t.top
                };
                break;

              case "bottom":
                i = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height
                };
                break;

              case "right":
              default:
                i = {
                    x: t.left + t.width,
                    y: t.top + t.height / 2
                };
            }
            return i = {
                x: (i.x - t.centerX) * t.cos - (i.y - t.centerY) * t.sin + t.centerX,
                y: (i.y - t.centerY) * t.cos + (i.x - t.centerX) * t.sin + t.centerY
            };
        },
        getPerpendicularEnd: function(e, i, s, n) {
            var a = s.angle + t.mathutils.sideAngles[e];
            return {
                x: n * Math.sin(a) + i.x,
                y: -n * Math.cos(a) + i.y
            };
        },
        getBox: function(t) {
            var e = (t.$el && t.$el[0] || t.length && t[0] || t).getBoundingClientRect(), i = t.model ? (t.model.attributes.angle || 0) * Math.PI / 180 : 0;
            return e = _.extend(e, {
                angle: i,
                sin: Math.sin(i),
                cos: Math.cos(i)
            }), e = _.extend(e, {
                centerX: e.left + e.width / 2,
                centerY: e.top + e.height / 2
            });
        },
        getResizedBoxNested: function(t, e, i, s) {
            var n = i.width / e.width, a = i.height / e.height;
            return n = "height" === s ? a : n, a = "width" === s ? n : a, {
                left: (t.left - e.left) * n + i.left,
                top: (t.top - e.top) * a + i.top,
                width: t.width * n,
                height: t.height * a
            };
        },
        getResizedBoxByBB: function(t, e, i) {
            var s = i.left + i.width / 2, n = i.top + i.height / 2, a = i.width / e.width, o = i.height / e.height, r = t.width * a, l = t.height * o;
            return {
                left: s - r / 2,
                top: n - l / 2,
                width: r,
                height: l
            };
        },
        getBoxLimits: function(t, e) {
            var i = t.width / t.height > 1, s = i ? e.minheight / t.height : e.minwidth / t.width, n = i ? e.maxwidth / t.width : e.maxheight / t.height;
            return {
                minwidth: e.minwidth ? Math.round(t.width * s) : 1,
                minheight: e.minheight ? Math.round(t.height * s) : 1,
                maxwidth: e.maxwidth ? Math.round(t.width * n) : 1 / 0,
                maxheight: e.maxheight ? Math.round(t.height * n) : 1 / 0
            };
        }
    };
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    t.scale = {
        getNormalizedBox: function(e) {
            return t.scale.isOn() && t.scale.isZoom() ? t.scale.getBox(e, t.scale.getRatio()) : e && e.getBoundingClientRect();
        },
        getBox: function(t, e) {
            e = e || 1;
            var i = t ? t.getBoundingClientRect() : {};
            return {
                top: i.top * e,
                left: i.left * e,
                width: i.width * e,
                height: i.height * e,
                bottom: i.bottom * e,
                right: i.right * e
            };
        },
        getRatio: function(e, i) {
            return e = e || t.classes.Mag.prototype.getViewportSetting("width", "default"), (i = i || window.innerWidth) / e;
        },
        getMag: function() {
            return t.viewerRouter && t.viewerRouter.mag || t.constructorRouter && t.constructorRouter.preview && t.constructorRouter.preview.mag || {};
        },
        isAllowed: function() {
            var e = t.scale.getMag().opts || {};
            return t.scale.isDesktopDefault() && e.scalableviewer;
        },
        isOn: function(e) {
            return e = e || t.scale.getRatio(), t.scale.isAllowed() && e > 1;
        },
        isZoom: function() {
            return !Modernizr.firefox;
        },
        isTransform: function() {
            return Modernizr.firefox;
        },
        isDesktopDefault: function() {
            return Modernizr.isdesktop && "default" === t.scale.getMag().viewport;
        },
        normalize: function(e, i) {
            if (Math.abs(e - 1) < 1e-6) return 1;
            if (t.scale.isDesktopDefault()) {
                var s = !i || "zoom" === i && t.scale.isZoom() || "transform" === i && t.scale.isTransform();
                return t.scale.isAllowed() && s ? Math.max(1, e) : 1;
            }
            return e;
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.Login = Backbone.View.extend({
        events: {
            "click .link": "link",
            "click .close-popup": "closePopup",
            "input .login.ljr-panel input.password-input": "onPasswordInput",
            "keydown .login.ljr-panel input": "loginInputKey",
            "click .login.ljr-panel .go": "tryLogin",
            "submit .login.ljr-panel #login_form": "onLoginFormSubmit",
            "click .login.ljr-panel .social-auth": "socialAuth",
            "input .join.ljr-panel input.password-input": "onPasswordInput",
            "keydown .join.ljr-panel input": "joinInputKey",
            "click .join.ljr-panel .go": "createAccount",
            "click .join.ljr-panel .social-auth": "socialAuth",
            "click .join.ljr-panel label .checkmark": "changeCheckboxState",
            "keyup .join.ljr-panel input.for-validate": "validateForm",
            "click .recover.ljr-panel .go": "sendRecoverRequest",
            "click .recover.ljr-panel .go-back": "backFromRecover",
            "input .reset.ljr-panel input": "onPasswordInput",
            "click .reset.ljr-panel .go": "resetPassword",
            "click .login-popup-wrapper": "closeOutsideClick",
            touchstart: "onTouchStart",
            touchmove: "onTouchMove"
        },
        ERROR_MESSAGES: {
            invalid_email: "Not a valid email",
            short_password: "At least 6 characters long",
            password_dont_match: "Passwords don't match"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), _.extend(this.ERROR_MESSAGES, this.errorMessages), this.template = t.templates["template-common-login"], 
            this.template_button_preloader = t.templates["template-common-login-preloader"], this.logged = !1, this.animationSpeed = 0, 
            this.disableAnimations || _.delay(_.bind(function() {
                this.animationSpeed = 300;
            }, this), 100), this.enableCors(), $(window).on("message", this.processLoginMessages);
        },
        render: function() {
            this.setElement(this.$node || $(this.template({})).appendTo(this.$container)), this.disableScrollWatcher = !!this.$node, 
            this.setElement(this.$el), this.rendered = !0, this.$nameInput = this.$(".join.ljr-panel .fullname-input"), 
            this.$emailInput = this.$(".join.ljr-panel .email-input"), this.$pswInput = this.$(".join.ljr-panel .password-input"), 
            this.$termsCheckbox = this.$(".join.ljr-panel .terms-checkbox"), this.$joinButton = this.$(".join.ljr-panel .go");
            var e = t.utils.queryUrlGetParam("email");
            e && this.$(".email-input").val(e);
        },
        link: function(t) {
            if (t.stopPropagation(), 2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget).attr("href");
                if (!e) return !1;
                if (!this.useNavigate) return /login/i.test(e) && this.switchTo("login"), /join/i.test(e) && this.switchTo("join"), 
                /recover/i.test(e) && this.switchTo("recover"), !1;
                this.router.navigate(e, {
                    trigger: !0
                }), t.preventDefault();
            }
        },
        closePopup: function() {
            Modernizr.isboxversion || (this.useNavigate && (this.router.navigate(this.urlToBack || "/", {
                trigger: !1
            }), this.router.updateWindowCaptions()), this.hide(!0));
        },
        changeCheckboxState: function(t) {
            var e = $(t.target).siblings("input[type='checkbox']");
            e.is(":checked") ? e.prop("checked", !1) : e.prop("checked", !0), $(t.target).toggleClass("checked"), 
            this.validateForm(), t.preventDefault();
        },
        validateForm: function() {
            "" !== this.$nameInput.val() && this.$pswInput.is(":valid") && this.$emailInput.is(":valid") && this.$termsCheckbox.is(":checked") ? this.$joinButton.addClass("active") : this.$joinButton.removeClass("active");
        },
        closeOutsideClick: function(t) {
            Modernizr.isdesktop && $(t.target).hasClass("login-popup-wrapper") && this.closePopup();
        },
        show: function(t) {
            this.shown || ($("body").addClass("disable-scroll"), this.urlToBack = t, 0 == this.animationSpeed && this.$el.flashClass("no-animation", 15), 
            this.$el.removeClass("hidden"), this.trigger("shown"), this.shown = !0, $("body").on("keyup", this.onBodyKeyUp), 
            this.onResize());
        },
        hide: function(t) {
            this.shown && (this.$el.addClass("hidden"), _.delay(function() {
                $("body").removeClass("disable-scroll");
            }, this.animationSpeed), this.trigger("hidden", t), this.shown = !1, $("body").off("keyup", this.onBodyKeyUp), 
            this.onResize());
        },
        onBodyKeyUp: function(t) {
            27 == t.keyCode && this.closePopup();
        },
        switchTo: function(t) {
            var e = this.$(".ljr-panel." + t), i = e.siblings(".ljr-panel");
            "recover" == t && this.$(".recover.ljr-panel .email-input").val(this.$(".login.ljr-panel .email-input").val()), 
            e.removeClass("hidden"), Modernizr.isdesktop && setTimeout(function() {
                e.find("input").eq(0).focus();
            }, 0), this.disableAnimations ? i.addClass("hidden") : _.delay(function() {
                i.addClass("hidden");
            }, this.animationSpeed / 4), this.onResize();
        },
        onResize: function() {
            $(window).width() <= 768 && this.$(".login").hasClass("hidden") && this.$(".login-popup-wrapper").css("height", 652), 
            $(window).width() <= 768 && this.$(".join").hasClass("hidden") && this.$(".login-popup-wrapper").css("height", 466);
        },
        showButtonPreloader: function(t) {
            var e, i, s, n = t.width(), a = t.height();
            e = $(this.template_button_preloader()), t.append(e), t.css({
                color: "transparent",
                "background-image": "none"
            }), t.addClass("processing"), i = e.width(), s = e.height(), e.css({
                left: Math.floor((n - i) / 2),
                top: Math.floor((a - s) / 2)
            });
        },
        hideButtonPreloader: function(t) {
            t.find(".rmpreloader").remove(), t.css({
                color: "",
                "background-image": ""
            }), t.removeClass("processing");
        },
        loginInputKey: function(t) {
            13 == t.keyCode && this.tryLogin();
        },
        tryLogin: function() {
            var e = $.trim(this.$(".login.ljr-panel .email-input").val()), i = this.$(".login.ljr-panel .password-input").val(), s = this.$(".login.ljr-panel .go"), n = t.utils.queryUrlGetParam("redirect");
            s.hasClass("processing") || "" != e && "" != i && (this.showButtonPreloader(s), this.requestLogin(e, i, _.bind(function(e) {
                if (e && e.redirect) return window.location.href = e.redirect;
                if (e) {
                    if (n) return window.location.href = t.constants.readymag_auth_host + n;
                    this.logged = !0;
                    var i = Modernizr.sessionstorage && window.sessionStorage.getItem("rm.loginReturnUrl", window.location.pathname);
                    Modernizr.sessionstorage && window.sessionStorage.removeItem("rm.loginReturnUrl"), this.$('.login.ljr-panel #login_form input[name="url"]').val(t.constants.readymag_auth_host + (i || "/" + e.uri)), 
                    this.$(".login.ljr-panel #login_form").submit();
                } else this.hideButtonPreloader(s), clearTimeout(this.wrongTimeout), this.$(".login.ljr-panel").addClass("wrong-login"), 
                this.$(".login.ljr-panel .error").html("The email address does not have an associated Readymag account"), 
                this.wrongTimeout = setTimeout(_.bind(function() {
                    this.$(".login.ljr-panel").removeClass("wrong-login");
                }, this), 3500), this.isdesktop || this.$el.scrollTop(9999);
            }, this)));
        },
        requestLogin: function(e, i, s) {
            var n = {
                pass: md5(i)
            };
            return n[e.match(/@/) ? "email" : "uri"] = e, $.post(t.constants.readymag_auth_host + "/api/user/?timestamp=" + new Date().getTime(), n, function(t) {
                s && s(t);
            }).error(function(e) {
                404 == e.status ? s && s() : alert("Login problem. Contact tech support, please: " + t.constants.SUPPORT_MAIL);
            }), !1;
        },
        onLoginFormSubmit: function() {
            return this.logged;
        },
        showErrors: function(t) {
            clearTimeout(this.wrongTimeout), this.$(".join.ljr-panel").addClass("wrong-join"), this.$(".join.ljr-panel .error").html(t.join(" <br/>")), 
            this.wrongTimeout = setTimeout(_.bind(function() {
                this.$(".join.ljr-panel").removeClass("wrong-join");
            }, this), 2e3);
        },
        redirectHandler: function(t, e, i) {
            if (t) return window.location.href = t, !0;
            this.redirectAfterJoin(e.uri, i);
        },
        createAccount: function() {
            if (!this.$(".join.ljr-panel input").hasClass("err") && this.$joinButton.hasClass("active")) {
                var e, i, s = {
                    email: this.$emailInput.val(),
                    name: $.trim(this.$(".join.ljr-panel .fullname-input").val()),
                    pass: this.$pswInput.val(),
                    page: window.location.pathname,
                    giftCode: "",
                    subscribe: this.$(".join.ljr-panel .subscribe-checkbox").is(":checked")
                }, n = [], a = this.$joinButton, o = t.utils.queryUrlGetParam("redirect");
                if (!a.hasClass("processing")) if (o && (s.giftCode = t.utils.queryUrlGetParam("giftCode", decodeURIComponent(o))), 
                "" != s.name && "" != s.email && "" != s.pass) {
                    if (!t.utils.isValidEmail(s.email)) {
                        e = !0;
                        var r = s.email;
                        this.$emailInput.prop("type", "text").addClass("err").val(this.ERROR_MESSAGES.invalid_email);
                    }
                    if (s.pass.length < 6) {
                        i = !0;
                        var l = s.pass;
                        this.$pswInput.prop("type", "text").addClass("err").val(this.ERROR_MESSAGES.short_password);
                    }
                    (e || i) && (clearTimeout(this.showErrorTimeout), this.showErrorTimeout = setTimeout(_.bind(function() {
                        e && this.$emailInput.removeClass("err").prop("type", "email").val(r), i && this.$pswInput.removeClass("err").prop("type", "pass").val(l);
                    }, this), 3e3)), t.utils.isValidEmail(s.email) || n.push(this.ERROR_MESSAGES.invalid_email), s.pass.length < 6 && n.push(this.ERROR_MESSAGES.short_password), 
                    n.length || (this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                        label: "native",
                        value: n.length,
                        _join_type: "native",
                        _errors: n.join(", ")
                    }), this.showButtonPreloader(a), s.pass = md5(s.pass), $.ajax({
                        type: "POST",
                        data: s,
                        url: t.constants.readymag_auth_host + "/api/register",
                        success: _.bind(function(t) {
                            this.putStorageData("native"), this.redirectHandler(o, t, a);
                        }, this),
                        error: _.bind(function(e) {
                            if (this.hideButtonPreloader(a), console.log(e), 403 == e.status) return alert("User with email " + s.email + " exists. Forgot password?");
                            alert("Registration problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
                        }, this)
                    }));
                } else this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                    label: "native",
                    value: 1,
                    _join_type: "native",
                    _errors: "Some fields are empty"
                });
            }
        },
        joinInputKey: function(t) {
            13 == t.keyCode && this.createAccount();
        },
        sendRecoverRequest: function() {
            var e = this.$(".recover.ljr-panel .email-input").val(), i = this.$(".recover.ljr-panel .go");
            i.hasClass("processing") || t.utils.isValidEmail(e) && (this.showButtonPreloader(i), this.requestRecover(e, _.bind(function(t) {
                this.hideButtonPreloader(i), this.$(".recover.ljr-panel").addClass("request-sended");
            }, this)));
        },
        requestRecover: function(e, i) {
            $.post(t.constants.readymag_auth_host + "/api/recoverypass", {
                email: e
            }, i).error(function(e) {
                404 == e.status ? i && i() : alert("Recovery problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
            });
        },
        backFromRecover: function() {
            this.useNavigate ? this.router.navigate("login/", {
                trigger: !0
            }) : this.switchTo("login");
        },
        resetPassword: function() {
            var e = $.trim(this.$(".reset.ljr-panel .new-password-input").val()), i = $.trim(this.$(".reset.ljr-panel .verify-password-input").val()), s = window.ServerData.recover, n = [], a = this.$(".reset.ljr-panel .go");
            if (!a.hasClass("processing") && "" != e && "" != i) {
                if (e != i && n.push(this.ERROR_MESSAGES.password_dont_match), (e.length < 6 || i.length < 6) && n.push(this.ERROR_MESSAGES.short_password), 
                n.length) return clearTimeout(this.wrongTimeout), this.$(".reset.ljr-panel").addClass("wrong-reset"), 
                this.$(".reset.ljr-panel .error").html(n.join(" <br/>")), void (this.wrongTimeout = setTimeout(_.bind(function() {
                    this.$(".reset.ljr-panel").removeClass("wrong-reset");
                }, this), 2e3));
                s && s.recover_code && s.email && (this.showButtonPreloader(a), $.ajax({
                    type: "POST",
                    data: {
                        email: s.email,
                        pass: md5(e),
                        code: s.recover_code
                    },
                    url: t.constants.readymag_auth_host + "/api/changepass",
                    success: function() {
                        window.location.href = "/login/";
                    },
                    error: _.bind(function() {
                        this.hideButtonPreloader(a), alert("Change password problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
                    }, this)
                }));
            }
        },
        onPasswordInput: function(e) {
            var i = $(e.currentTarget);
            t.utils.filterNonAscii(i) && (i.addClass("error-input"), _.defer(_.bind(function() {
                i.removeClass("error-input");
            }, this)));
        },
        socialAuth: function(e) {
            this.$button = $(e.currentTarget);
            var i = this.$button.attr("data-provider"), s = t.constants.readymag_auth_host + "/api/auth/" + i;
            if (!this.$button.hasClass("processing")) {
                this.showButtonPreloader(this.$button), this.$button.closest(".join.ljr-panel").length && this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                    _join_type: i,
                    label: i
                });
                var n = screen.width, a = screen.height, o = Math.min(1e3, n), r = Math.min(700, a - 40), l = Math.ceil((n - o) / 2), c = Math.ceil((a - r) / 2);
                this.socialAuthWindow = window.open(s, "_blank", [ "toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + o, "height=" + r, "top=" + c, "left=" + l ].join()), 
                this.authInProgress = !0, this.popupCheckInterval = setInterval(_.bind(function() {
                    try {
                        (null == this.socialAuthWindow || this.socialAuthWindow.closed) && (this.authInProgress = !1, clearInterval(this.popupCheckInterval), 
                        this.hideButtonPreloader(this.$button));
                    } catch (t) {}
                }, this), 100);
            }
        },
        handleSocialAuthResult: function(e) {
            if (this.authInProgress = !1, !e || e.error || !e.user || !e.user.uri) return this.hideButtonPreloader(this.$button), 
            e.error && (this.$el.scrollTop(this.$el[0].scrollHeight - this.$el.outerHeight()), this.showErrors([ "Something went wrong" ]), 
            clearTimeout(this.showSocialErrorTimeout), this.showSocialErrorTimeout = setTimeout(_.bind(function() {
                this.$(".join.ljr-panel .error").html("");
            }, this), 4e3)), void (e.user && e.user.name && (this.switchTo("join"), this.$(".join.ljr-panel .fullname-input").val(e.user.name), 
            this.$(".join.ljr-panel .email-input").focus()));
            var i;
            if (e.user.createdViaFacebook && (i = "facebook"), e.user.createdViaGoogle && (i = "google"), i) this.putStorageData(i), 
            this.redirectAfterJoin(e.user.uri, this.$button); else {
                var s = t.utils.queryUrlGetParam("redirect");
                if (s) return window.location.href = t.constants.readymag_auth_host + s;
                window.location.href = t.constants.readymag_auth_host + "/" + e.user.uri;
            }
        },
        processLoginMessages: function(e) {
            if (this.authInProgress && (e = e.originalEvent || {}).origin == t.constants.readymag_auth_host) {
                var i = JSON.parse(decodeURIComponent(e.data));
                i && "social-auth" == i.event && (clearInterval(this.popupCheckInterval), this.socialAuthWindow && this.socialAuthWindow.close(), 
                this.handleSocialAuthResult(i.message));
            }
        },
        redirectAfterJoin: function(e) {
            var i = _.isFunction(this.joinCallback) ? 500 : 0;
            _.isFunction(this.joinCallback) && this.joinCallback();
            var s = t.utils.queryUrlGetParam("redirect");
            if (s) return window.location.href = t.constants.readymag_auth_host + s;
            setTimeout(_.bind(function() {
                if (!Modernizr.isdesktop || Modernizr.msie || Modernizr.msie11) window.location.href = t.constants.readymag_auth_host + "/" + e + "/"; else {
                    var i = Modernizr.sessionstorage && window.sessionStorage.getItem("rm.loginReturnUrl", window.location.pathname);
                    if (Modernizr.sessionstorage && window.sessionStorage.removeItem("rm.loginReturnUrl"), i) return window.location.href = t.constants.readymag_auth_host + i;
                    var s = this.createMagParams, n = s && s.templateID, a = s && s.tp ? s.tp + "-join-form" : "join-form";
                    new t.classes.CreateMag({
                        router: this.router,
                        me: {
                            permissions: {
                                can_create_mag: !0
                            },
                            uri: e
                        },
                        tp: a,
                        templateID: n,
                        noCreateRequestTracking: s && s.noCreateRequestTracking,
                        error: _.bind(function() {
                            this.hideButtonPreloader(this.$button);
                        }, this)
                    });
                }
            }, this), i);
        },
        enableCors: function() {
            $.ajaxPrefilter(function(e, i, s) {
                -1 != e.url.indexOf(t.constants.readymag_auth_host) && (e.xhrFields = {
                    withCredentials: !0
                });
            });
        },
        onTouchStart: function(t) {
            this.disableScrollWatcher || (this.scrollY = t.originalEvent.touches.item(0).clientY);
        },
        onTouchMove: function(t) {
            if (!this.disableScrollWatcher) {
                var e = $(t.currentTarget), i = this.scrollY - t.originalEvent.touches.item(0).clientY;
                (i < 0 && e.scrollTop() <= 0 || i > 0 && e.scrollTop() + e.height() >= e[0].scrollHeight) && t.preventDefault(), 
                this.scrollY = t.originalEvent.touches.item(0).clientY;
            }
        },
        destroy: function() {
            this.hide(), $(window).off("message", this.processLoginMessages), setTimeout(_.bind(function() {
                this.$el.remove();
            }, this), 400);
        },
        putStorageData: function(e) {
            var i = {}, s = new Date();
            i.type = e, i.utm_campaign = t.utils.queryUrlGetParam("utm_campaign"), i.utm_source = t.utils.queryUrlGetParam("utm_source"), 
            i.utm_medium = t.utils.queryUrlGetParam("utm_medium"), i.rm_url = window.location.href, i.rm_referrer = document.referrer, 
            i.timestamp = s.valueOf(), i._ga = t.utils.getCookie("_ga");
            var n = btoa(JSON.stringify(i));
            t.utils.createCookie("send_join_event", n, 10);
        }
    });
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    var e = 100, i = 1e4;
    t.textutils = {
        STYLE_PREFIXES: {
            paragraph: {
                viewer: [ ".used-fonts-test p", ".rmwidget.text div p" ],
                editor: [ "p" ],
                constructor: [ ".used-fonts-test p", ".block.block-text .text-preview p", ".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption" ]
            },
            "header-1": {
                viewer: [ ".used-fonts-test h1", ".rmwidget.text div h1" ],
                editor: [ "h1" ],
                constructor: [ ".used-fonts-test h1", ".block.block-text .text-preview h1", ".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption" ]
            },
            "header-2": {
                viewer: [ ".used-fonts-test h2", ".rmwidget.text div h2" ],
                editor: [ "h2" ],
                constructor: [ ".used-fonts-test h2", ".block.block-text .text-preview h2", ".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption" ]
            },
            link: {
                viewer: [ ".rmwidget.text div a" ],
                editor: [ "a" ],
                constructor: [ ".block.block-text .text-preview a", ".controls .control.text_link .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .link-style .style-caption" ]
            }
        },
        generateStylesStr: function(e) {
            var i, s, n = "", a = e.style, o = e.indentation ? "\t" : "", r = ";" + (e.lineBreaks ? "\n" : ""), l = e.attrPrefix || "";
            return "paragraph" == e.tp && (n += o + "font-family: " + c("font-family") + r, n += o + "font-style: " + c("font-style") + r, 
            n += o + "font-weight: " + c("font-weight") + r, n += o + "font-size: " + d(c("font-size")) + r, n += o + "letter-spacing: " + d(c("letter-spacing")) + r, 
            n += o + "line-height: " + d(c("line-height")) + r, n += o + "text-align: " + c("text-align") + r, n += o + "text-decoration: " + c("text-decoration") + r, 
            n += o + "text-transform: " + c("text-transform") + r, n += o + "color: " + t.utils.getRGBA(c("color"), c("opacity") / 100) + r, 
            n += o + "padding-top: " + d(c("padding-top")) + r, n += o + "padding-right: " + d(c("padding-right")) + r, 
            n += o + "padding-bottom: " + d(c("padding-bottom")) + r, n += o + "padding-left: " + d(c("padding-left")) + r), 
            "link" == e.tp && (n += o + "text-decoration: none" + r, n += o + "color: " + t.utils.getRGBA(c("color"), c("opacity") / 100) + r, 
            "none" != c("u-style") ? (i = t.utils.getRGBA(c("u-color"), c("u-opacity") / 100), s = parseInt(c("u-size"), 10), 
            offset = parseInt(c("u-offset"), 10) + s, n += o + "padding-bottom: " + d(Math.max(offset, 0)) + r, 
            "solid" == c("u-style") && (n += o + "background: linear-gradient(to right, " + i + " 0%, " + i + " 100%)" + r, 
            n += o + "background-size: 1px " + d(s) + r), "dotted" == c("u-style") && (n += o + "background: linear-gradient(to right, " + i + " 0%, " + i + " 50%, transparent 50%,transparent 100%)" + r, 
            n += o + "background-size: " + d(2 * s) + " " + d(s) + r), "dashed" == c("u-style") && (n += o + "background: linear-gradient(to right, " + i + " 0%, " + i + " 66.6666%, transparent 66.6666%,transparent 100%)" + r, 
            n += o + "background-size: " + d(3 * s) + " " + d(s) + r), offset < 0 ? n += o + "background-position: 0 " + (100 + offset) + "%" + r : n += o + "background-position: 0 100%" + r, 
            n += o + "background-repeat: repeat-x" + r) : n += o + "background: none" + r), n;
            function c(t) {
                var e = a[l + t];
                return "inherit" == e && l && (e = a[t]), e;
            }
            function d(t) {
                return t + (/px/i.test(t) ? "" : "px");
            }
        },
        generateCSS: function(t, e, i, s, n) {
            if (s) {
                var a = this.STYLE_PREFIXES[t][e], o = (n = n || {}, this), r = "";
                _.each(s, function(i) {
                    if ("paragraph" == t) {
                        var s = $.trim(i._name.toLowerCase());
                        if ("paragraph-1" === s || "paragraph-2" === s) {
                            var l = s.replace(/\D/g, "");
                            a = [].concat(o.STYLE_PREFIXES["header-" + l][e], o.STYLE_PREFIXES[t][e]).filter(function(t, e, i) {
                                return i.indexOf(t) === e;
                            });
                        }
                        r += _.map(a, function(t) {
                            return t + "." + i._name;
                        }).join(",\n") + " {\n", r += o.generateStylesStr({
                            tp: t,
                            style: i,
                            indentation: !0,
                            lineBreaks: !0
                        }), r += "}\n\n";
                    }
                    if ("link" == t) {
                        if (n.forcePseudoState && n.forcePseudoClass == i._name) r += _.map(a, function(t) {
                            return t + "." + i._name;
                        }).join(",\n") + " {\n", r += o.generateStylesStr({
                            tp: t,
                            style: i,
                            attrPrefix: n.forcePseudoState + "-",
                            indentation: !0,
                            lineBreaks: !0
                        }), r += "}\n\n"; else r += _.map(a, function(t) {
                            return t + "." + i._name;
                        }).join(",\n") + " {\n", r += o.generateStylesStr({
                            tp: t,
                            style: i,
                            indentation: !0,
                            lineBreaks: !0
                        }), r += "}\n\n", _.find(_.keys(i), function(t) {
                            return /^current/.test(t);
                        }) && (r += _.map(a, function(t) {
                            return t + ".current." + i._name;
                        }).join(",\n") + " {\n", r += o.generateStylesStr({
                            tp: t,
                            style: i,
                            attrPrefix: "current-",
                            indentation: !0,
                            lineBreaks: !0
                        }), r += "}\n\n"), r += _.map(a, function(t) {
                            return t + ".hovered." + i._name;
                        }).join(",\n") + " {\n", r += o.generateStylesStr({
                            tp: t,
                            style: i,
                            attrPrefix: "hover-",
                            indentation: !0,
                            lineBreaks: !0
                        }), r += "}\n\n";
                        r += _.map(a, function(t) {
                            return t + "." + i._name + " *";
                        }).join(",\n") + " {\n", r += "\tcolor: inherit !important;\n", r += "\ttext-decoration: none !important;\n", 
                        r += "}\n\n";
                    }
                }), i = i || document;
                var l = "text_styles_" + t + "_" + e;
                $("#" + l, i).remove();
                var c = i.createElement("style");
                c.type = "text/css", c.id = l, c.className = "text_styles", c.appendChild(i.createTextNode(r)), i.getElementsByTagName("head")[0].appendChild(c);
            }
        },
        appendFontsCssToDocument: function(e, i) {
            !Modernizr.isboxversion && window.TypekitPreview && window.TypekitPreview.setup && window.TypekitPreview.setup({
                auth_id: t.constants.TYPEKIT_ID,
                auth_token: t.constants.TYPEKIT_TOKEN,
                default_subset: "all"
            });
            var s, n = [], a = [], o = {};
            $("link.fonts, style.fonts").each(function() {
                var t = $(this), e = t.attr("data-provider"), i = t.attr("data-fonts-and-variations").split("||");
                _.each(i, function(t) {
                    n.push(e + "|" + t);
                });
            }), _.each(e.fonts, function(t) {
                _.each(t.used_variations || t.variations, function(e) {
                    a.push(t.provider + "|" + t.css_name + "|" + e);
                });
            }), s = _.difference(a, n);
            var r = {};
            _.each(s, function(t) {
                var e = t.split("|"), i = e[0], s = e[1], n = e[2], a = i + "|" + s;
                r[a] = r[a] || [], r[a].push(n);
            });
            var l = [];
            _.each(r, function(t, e) {
                var i = e.split("|"), s = i[0], n = i[1], a = t;
                l.push({
                    provider: s,
                    css_name: n,
                    variations: a
                });
            }), _.each(l, function(t) {
                var i, s = t.provider, n = t.css_name + "|" + t.variations.join("||" + t.css_name + "|");
                if (o[s] || (o[s] = []), "google" == s) {
                    var a = $.map(t.variations, function(t) {
                        return 100 * (t.substr(1, 1) - 0) + ("n" == t.substr(0, 1) ? "" : "italic");
                    });
                    i = {
                        fontAndVariations: n,
                        data: t.css_name.split(" ").join("+") + ":" + a.join(",")
                    };
                }
                if ("webtype" == s && (i = {
                    fontAndVariations: n,
                    data: t.css_name + ":" + t.variations.join(",")
                }), "typetoday" == s && (i = {
                    fontAndVariations: n,
                    data: t.css_name + ":" + t.variations.join(",")
                }), "custom" == s) {
                    var r = _.findWhere(e.fonts, {
                        provider: "custom",
                        css_name: t.css_name
                    });
                    r && r.css_url && (i = {
                        fontAndVariations: n,
                        data: {
                            css_name: t.css_name,
                            css_url: r.css_url,
                            signed_css_url: r.signed_css_url
                        }
                    });
                }
                "typekit" == s && (i = {
                    fontAndVariations: n,
                    data: {
                        id: t.css_name,
                        variations: t.variations
                    }
                }), i && o[s].push(i);
            });
            var c = t.screenshot && "true" == t.utils.queryUrlGetParam("pdf");
            c && this.loadTypekitSubstitutionFonts(o.typekit);
            var d = _.has(o, "custom");
            function h(t) {
                var e = $("<link>").attr("type", "text/css").attr("rel", "stylesheet").attr("href", t);
                $("head").append(e);
            }
            _.each(o, function(s, n) {
                var a, o, r, l, d, p = "custom" == n ? 1 : "google" == n ? 22 : s.length, u = Math.ceil(s.length / p), g = 0, m = function() {
                    if (o = a * p, r = Math.min((a + 1) * p, s.length), l = s.slice(o, r), d = _.pluck(l, "data"), fontsAndVariations = _.pluck(l, "fontAndVariations"), 
                    $("link, style").addClass("existing"), "google" == n && (v = (t.constants.IS_FILE_PROTOCOL ? "http://" : "//") + "fonts.googleapis.com/css?family=", 
                    f = d.join("%7C"), h(v + f + "&subset=latin,vietnamese,khmer,cyrillic-ext,greek-ext,greek,devanagari,latin-ext,cyrillic")), 
                    "typekit" == n && !Modernizr.isboxversion) {
                        if ("edit" == e.version && !c) try {
                            window.TypekitPreview && window.TypekitPreview.load(d);
                        } catch (t) {}
                        "published" == e.version && e.typekit_url && (Typekit = void 0, $("style.typekit-kit").remove(), $.getScript(e.typekit_url, function(t, e, i) {
                            try {
                                Typekit.load({
                                    active: function() {
                                        var t = $("style").filter(function(t, e) {
                                            return /typekit/i.test(e.innerHTML);
                                        });
                                        t.addClass("typekit-kit"), m(t);
                                    }
                                });
                            } catch (t) {}
                        }));
                    }
                    var u;
                    function m(e) {
                        e.addClass("fonts").attr("data-id", t.utils.generateUUID()).attr("data-provider", n).attr("data-fonts-and-variations", fontsAndVariations.join("||"));
                    }
                    "webtype" == n && (v = t.common.isDownloadedSource ? t.constants.readymag_host : "", $('link.fonts[data-provider="webtype"]').length || (w = window.ServerData && window.ServerData.fonts && window.ServerData.fonts.webtype, 
                    h(v + w))), "typetoday" != n || c || (v = t.common.isDownloadedSource ? t.constants.readymag_host : "", 
                    $('link.fonts[data-provider="typetoday"]').length || (w = window.ServerData && window.ServerData.fonts && window.ServerData.fonts.typetoday, 
                    h(v + w))), "custom" == n && (y = d[0].signed_css_url || d[0].css_url, /^\/api\/fonts\//i.test(y) ? (u = $("<style>").attr("type", "text/css"), 
                    $("head").append(u), $.get(y, function(t) {
                        u.text(t), ++g >= s.length && _.isFunction(i) && i();
                    })) : h(y)), m($("link:not(.existing), style:not(.existing)")), $("link, style").removeClass("existing");
                };
                for (a = 0; a < u; a++) {
                    var f, v, w, y;
                    m();
                }
            }), !d && _.isFunction(i) && i();
        },
        loadTypekitSubstitutionFonts: function(e) {
            e && e.length && _.each(e, function(e) {
                var i, s = e.data.id, n = (e.data.variations, {
                    "sans-serif": "news-gothic",
                    decorative: "news-gothic",
                    handmade: "news-gothic",
                    blackletter: "news-gothic",
                    script: "news-gothic",
                    "slab-serif": "news-gothic",
                    serif: "georgia-pro",
                    monospaced: "nitti"
                }), a = "template-export-pdf-typekit-substitution-" + (n[(i = (i = (i = _.findWhere(t.textutils.fontsShortList.typekit, {
                    id: s
                })) && i.browse_info) && i.classification) && i.length && i[0] || "sans-serif"] || n["sans-serif"]), o = (0, 
                t.templates[a])({
                    id: s
                });
                $("head").append(o);
            });
        },
        appendFontsCssToIFrame: function(t) {
            var e = $("link.fonts, style.fonts"), i = $("link.fonts, style.fonts", t), s = {}, n = $("head", t);
            i.each(function() {
                s[$(this).attr("data-id")] = !0;
            }), e.each(function() {
                var t = $(this), e = this.href;
                if (!s[t.attr("data-id")]) {
                    var i = t.clone();
                    e && Modernizr.safari && i.attr("href", e + "&edit_mode=true"), i.appendTo(n);
                }
            });
        },
        isFastFontLoadCheckAvailable: function() {
            return Boolean(document.fonts && window.Promise);
        },
        fastWaitForFontLoad: function(t, e, i) {
            var s;
            if (document.fonts) {
                var n = i + " " + e + " 12px " + t, a = document.fonts.load(n).then(function() {
                    return document.fonts.check(n) ? n : this.fontLoadedTimeoutCheck(n);
                }.bind(this)), o = new window.Promise(function(t, e) {
                    setTimeout(e.bind(null, n), 3500);
                });
                s = window.Promise.race([ a, o ]);
            } else s = window.Promise.reject();
            return s;
        },
        exactWaitForFontLoad: function(t, s, n, a) {
            var o = n + " " + s + " 12px " + t + ", Arial", r = n + " " + s + " 12px Arial", l = 20, c = 20, d = $('<canvas width="' + l + '" height="' + c + '"></canvas>'), h = d[0], p = h.getContext("2d"), u = "", g = "", m = +new Date();
            d.appendTo("body").css({
                position: "absolute",
                left: 0,
                top: "-999px"
            }), function f() {
                var v = +new Date() - m > i, _ = function() {
                    var t = o;
                    p.clearRect(0, 0, l, c), u || (u = h.toDataURL("image/png"), t = r);
                    p.font = t, p.fillStyle = "000", p.fillText("a1-&q", 0, 20);
                    var e = h.toDataURL("image/png");
                    g || (g = e);
                    return e != u && e != g;
                }();
                if (_ || v) return p = void 0, d.remove(), void a(_, t, s, n);
                setTimeout(f, e);
            }();
        },
        fontLoadedTimeoutCheck: function(t) {
            var i = Date.now();
            return new window.Promise(function(s, n) {
                !function s(n, a) {
                    var o = Date.now() - i;
                    document.fonts.check(t) ? n(t) : o < 3500 ? setTimeout(s.bind(null, n, a), e) : a(t);
                }(s, n);
            });
        },
        getHotspotTextModels: function(t) {
            var e = [];
            return t.widgets_collection && t.widgets_collection.length && (e = t.widgets_collection.filter(function(e) {
                return "text" == e.get("type") && t.get("wids").indexOf(e.get("_id")) > -1;
            })), t._nestedWidgetsJSON && t._nestedWidgetsJSON.length ? e = _.filter(t._nestedWidgetsJSON, function(t) {
                return "text" == t.type;
            }) : t.wids && t.wids.length && (e = _.filter(t.wids, function(t) {
                return "text" == t.type;
            })), e;
        },
        getUsedFontsFromWidgetsModels: function(e) {
            for (var i = {}, s = {}, n = {}, a = {}, o = e.models, r = 0; r < o.length; r++) {
                var l = o[r];
                if ("slideshow" == w(l, "type") && w(l, "text_style")) {
                    var c = w(l, "text_style");
                    c["font-family"] && c["font-weight"] && c["font-style"] && (s[c["font-family"] + "|" + c["font-style"] + "|" + c["font-weight"]] = 1);
                }
                if ("button" == w(l, "type") && w(l, "font-family") && w(l, "font-weight") && w(l, "font-style") && (n[w(l, "font-family") + "|" + w(l, "font-style") + "|" + w(l, "font-weight")] = 1), 
                "form" == w(l, "type")) {
                    var d = w(l, "style-" + w(l, "style") + "-fields"), h = _.clone(w(l, "style-" + w(l, "style") + "-button-default"));
                    for (_.isEmpty(h) || (h["font-family"] = "inherit" == h["font-family"] ? d["font-family"] : h["font-family"], 
                    h["font-style"] = "inherit" == h["font-style"] ? d["font-style"] : h["font-style"], h["font-weight"] = "inherit" == h["font-weight"] ? d["font-weight"] : h["font-weight"]), 
                    a[d["font-family"] + "|" + d["font-style"] + "|" + d["font-weight"]] = 1, h && (a[h["font-family"] + "|" + h["font-style"] + "|" + h["font-weight"]] = 1), 
                    j = 0; j < t.viewports.length; j++) {
                        var p = l["viewport_" + t.viewports[j].name];
                        p && (d = p["style-" + p.style + "-fields"], h = _.clone(p["style-" + p.style + "-button-default"]), 
                        _.isEmpty(h) || (h["font-family"] = "inherit" == h["font-family"] ? d["font-family"] : h["font-family"], 
                        h["font-style"] = "inherit" == h["font-style"] ? d["font-style"] : h["font-style"], h["font-weight"] = "inherit" == h["font-weight"] ? d["font-weight"] : h["font-weight"]), 
                        d && (a[d["font-family"] + "|" + d["font-style"] + "|" + d["font-weight"]] = 1), h && (a[h["font-family"] + "|" + h["font-style"] + "|" + h["font-weight"]] = 1));
                    }
                }
                "text" == w(l, "type") && w(l, "text") && _.extend(i, this.scanTextForFontsAndVariationsRaw(w(l, "text"), w(l, "version"), e.excludeUnusedDefault, e.activeViewports)), 
                "hotspot" == w(l, "type") && _.each(this.getHotspotTextModels(l), _.bind(function(t) {
                    var s = w(t, "text");
                    s && _.extend(i, this.scanTextForFontsAndVariationsRaw(s, w(t, "version"), e.excludeUnusedDefault));
                }, this));
            }
            var u = _.extend({}, i, s, n, a), g = {};
            _.each(u, function(t, e) {
                var i = e.split("|"), s = i[0], n = i[1].toLowerCase(), a = i[2].toLowerCase();
                g[s] = g[s] || [], g[s].push(("italic" == n ? "i" : "n") + Math.floor(a / 100));
            });
            var m, f = [], v = this;
            function w(t, e) {
                return "function" == typeof t.get ? t.get(e) : t[e];
            }
            return _.each(g, function(i, s) {
                (m = _.findWhere(t.textutils.fontsShortList.webtype, {
                    name: s
                })) ? f.push({
                    provider: "webtype",
                    css_name: m.name,
                    name: m.name,
                    variations: m.variations,
                    used_variations: v.calcBrowserUsedVariation(i, m.variations)
                }) : (m = _.findWhere(t.textutils.fontsShortList.typetoday, {
                    name: s
                })) ? f.push({
                    provider: "typetoday",
                    css_name: m.name,
                    name: m.name,
                    variations: m.variations,
                    used_variations: v.calcBrowserUsedVariation(i, m.variations)
                }) : (m = _.findWhere(t.textutils.fontsShortList.google, {
                    family: s
                })) ? f.push({
                    provider: "google",
                    css_name: m.family,
                    name: m.family,
                    variations: m.variations,
                    used_variations: v.calcBrowserUsedVariation(i, m.variations)
                }) : (m = _.findWhere(t.textutils.fontsShortList.typekit, {
                    id: s
                })) ? f.push({
                    provider: "typekit",
                    css_name: m.id,
                    name: m.name,
                    variations: m.variations,
                    used_variations: v.calcBrowserUsedVariation(i, m.variations)
                }) : e.includeCustom && (m = _.findWhere(e.customList, {
                    css_name: s
                })) && f.push({
                    provider: "custom",
                    css_name: m.css_name,
                    css_url: m.css_url,
                    name: m.name,
                    variations: m.variations,
                    used_variations: v.calcBrowserUsedVariation(i, m.variations)
                });
            }), f;
        },
        getUsedParagraphStylesFromWidgetsModels: function(e) {
            var i, s, n = "";
            for (i = 0; i < e.length; i++) "text" == l(s = e[i], "type") && l(s, "text") && (n += l(s, "text")), 
            "hotspot" == l(s, "type") && _.each(this.getHotspotTextModels(s), _.bind(function(t) {
                n += l(t, "text") || "";
            }, this));
            var a = [], o = t.constructorRouter.workspace.mag.edit_params.get("paragraph_styles");
            if (n) for (i = 0; i < o.length; i++) {
                var r = o[i];
                n.indexOf(r._name) >= 0 && a.push(r);
            }
            function l(t, e) {
                return "function" == typeof t.get ? t.get(e) : t[e];
            }
            return a;
        },
        getUsedLinkStylesFromWidgetsModels: function(e) {
            var i, s, n = "";
            for (i = 0; i < e.length; i++) "text" == l(s = e[i], "type") && l(s, "text") && (n += l(s, "text")), 
            "hotspot" == l(s, "type") && _.each(this.getHotspotTextModels(s), _.bind(function(t) {
                n += l(t, "text") || "";
            }, this));
            var a = [], o = t.constructorRouter.workspace.mag.edit_params.get("link_styles");
            if (n) for (i = 0; i < o.length; i++) {
                var r = o[i];
                n.indexOf(r._name) >= 0 && a.push(r);
            }
            function l(t, e) {
                return "function" == typeof t.get ? t.get(e) : t[e];
            }
            return a;
        },
        scanTextForFontsAndVariationsRaw: function(e, i, s, n) {
            var a, o, r, l, c, d, h, p, u, g, m, f = {}, v = {}, w = [], y = document.defaultView.getComputedStyle;
            for (a = 0; a < t.viewports.length; a++) if (e.split("-" + t.viewports[a].name).length > 1) {
                if (n && -1 === n.indexOf(t.viewports[a].name)) continue;
                w.push(t.viewports[a].name);
            }
            (r = $(".used-fonts-test")).length || (r = $("<div>").addClass("used-fonts-test").css({
                position: "absolute",
                display: "none !important",
                left: -9999,
                width: 999
            }).appendTo("body")), r.removeClass("v1 v2").addClass("v" + (i || 1)), (o = r[0]).innerHTML = e, h = (d = o.querySelectorAll("span,p,a")).length;
            var b, k = (c = y(o, null)).fontFamily + "|" + c.fontStyle + "|" + c.fontWeight;
            f[k] = 1;
            var x = !1, P = function(t) {
                return -1 !== _.findIndex(t.childNodes, function(t) {
                    return t.nodeType === Node.TEXT_NODE && t.textContent.replace(/\r?\n/g, "").length;
                });
            }, T = _.filter(d, P);
            for (l = 0; l < T.length; l++) b = (c = y(T[l], null)).fontFamily + "|" + c.fontStyle + "|" + c.fontWeight, 
            x = x || b === k, f[c.fontFamily + "|" + c.fontStyle + "|" + c.fontWeight] = 1;
            var S = P(o);
            for (!s || x || S || delete f[k], a = 0; a < w.length; a++) if ("default" != (g = w[a])) {
                for (l = 0; l < h; l++) (p = (m = d[l]).getAttribute("data-style-" + g)) && ("empty" == p ? m.removeAttribute("style") : m.setAttribute("style", p)), 
                (u = m.getAttribute("data-class-" + g)) && ("empty" == u ? m.removeAttribute("class") : m.setAttribute("class", u)), 
                (m.getAttribute("style") || m.getAttribute("class")) && (f[(c = y(m, null)).fontFamily + "|" + c.fontStyle + "|" + c.fontWeight] = 1);
                a < w.length - 1 && (o.innerHTML = e, h = (d = o.querySelectorAll("span,p,a")).length);
            }
            return _.each(f, function(t, e) {
                var i = e.split("|"), s = i[0], n = i[1].toLowerCase(), a = i[2].toLowerCase();
                s = (s = s.split(",")[0]).replace(/'|"/g, ""), a = (a = (a = a.replace(/normal/g, "400")).replace(/regular/g, "400")).replace(/bold/g, "700"), 
                v[s + "|" + n + "|" + a] = 1;
            }), v;
        },
        calcBrowserUsedVariation: function(t, e) {
            for (var i = {}, s = 0; s < t.length; s++) {
                for (var n, a, o, r = t[s], l = r.substr(1, 1), c = r.substr(0, 1), d = 99999, h = "", p = 0; p < e.length; p++) n = e[p].substr(1, 1) - 0, 
                a = e[p].substr(0, 1), l < 4 && (o = 10 * Math.abs(n - l) + (a == c ? 0 : 1e3) + (n <= l ? 0 : 100)), 
                l > 5 && (o = 10 * Math.abs(n - l) + (a == c ? 0 : 1e3) + (n >= l ? 0 : 100)), 4 == l && (o = 5 == n ? 0 + (a == c ? 0 : 1e3) + 0 : 10 * Math.abs(n - l) + (a == c ? 0 : 1e3) + (n <= l ? 0 : 100)), 
                5 == l && (o = 10 * Math.abs(n - l) + (a == c ? 0 : 1e3) + (n <= l ? 0 : 100)), l == n && c == a && (o = 0), 
                o < d && (d = o, h = e[p]);
                i[h] = 1;
            }
            return _.keys(i);
        },
        getVeryShortList: function(t) {
            var e = {
                google: [],
                typekit: [],
                webtype: [],
                typetoday: []
            };
            return _.each(t, function(t) {
                var i, s = t.provider;
                switch (s) {
                  case "google":
                    i = {
                        provider: s,
                        family: t.name,
                        variations: t.variations
                    };
                    break;

                  case "typekit":
                    i = {
                        provider: s,
                        id: t.css_name,
                        name: t.name,
                        variations: t.variations
                    };
                    break;

                  case "webtype":
                  case "typetoday":
                    i = {
                        provider: s,
                        name: t.name,
                        variations: t.variations
                    };
                }
                e[s] && e[s].push(i);
            }), e;
        },
        getCustomVariationNameByFVD: function(e, i) {
            return (t.textutils.fontCustomVariationNames[e] || {})[i];
        },
        setShortList: function(e) {
            t.textutils.fontsShortList = e, t.textutils.fontCustomVariationNames = {}, _.each(t.textutils.fontsShortList, function(e, i) {
                _.each(e, function(e) {
                    if (e.custom_variation_names) {
                        var s;
                        switch (i) {
                          case "google":
                            s = e.family;
                            break;

                          case "typekit":
                          case "webtype":
                          case "typetoday":
                            s = e.name;
                        }
                        t.textutils.fontCustomVariationNames[s] = e.custom_variation_names;
                    }
                });
            });
        }
    }, window.fontsShortListCallback = function(e) {
        t.textutils.setShortList(e);
    };
}(RM), function(t) {
    "use strict";
    var e = "other", i = "anonymous", s = null;
    t.classes.extendAnalyticsPublic = {
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.router || (this.router = t.viewerRouter || t.homepageRouter || t.collectorRouter), 
            this.lastTrackedUrl = "", this.shortlink_redirect = t.utils.getCookie("shortlink_redirect"), this._saveFirstInteraction(), 
            t.common.readymagTracker && t.utils.loadLoggedUser(_.bind(function(t) {
                t._id && window.ga && (window.ga && ga("readymag.set", "&uid", t._id), this.userId = t._id);
            }, this)), $(_.bind(function() {
                this.trackPage();
            }, this));
        },
        sendEvent: function(e, i, s, n) {
            if (window.ga) {
                var a = {
                    action: e
                };
                _.isObject(i) ? a = _.extend(a, i) : (a.label = i || void 0, a.value = s || void 0);
                var o = this._extendParams(a), r = {
                    hitType: "event",
                    eventCategory: o.category,
                    eventAction: o.action,
                    eventLabel: o.label,
                    eventValue: o.value,
                    page: o.page,
                    location: o.href,
                    screenName: o.screenName,
                    hitCallback: n || o.cb || void 0
                };
                return t.common.readymagTracker && (r.dimension1 = o.dims.pageType, r.dimension2 = o.dims.userId, r.dimension3 = null, 
                this._rmdata && (r.dimension4 = this._rmdata.dimension, r.dimension5 = this._rmdata.first_campaign, 
                r.dimension6 = this._rmdata.first_medium), window.ga("readymag.send", r)), t.common.userTracker && "Project Actions" == o.category && window.ga("t0.send", r), 
                this.sendFacebookPixelEvent(o.action, o), r;
            }
        },
        trackPage: function(e) {
            if (window.ga) {
                var i = this._extendParams(e);
                if (void 0 != this.shortlink_redirect && (i = _.extend(i, this._processRedirectUTM())), i.page != this.lastTrackedUrl) {
                    this.lastTrackedUrl = i.page;
                    var s = {
                        page: i.page,
                        location: i.href,
                        screenName: i.screenName,
                        campaignName: i.campaignName,
                        campaignSource: i.campaignSource,
                        campaignMedium: i.campaignMedium,
                        hitCallback: i.cb || void 0
                    };
                    return t.common.readymagTracker && (s.dimension1 = i.dims.pageType, s.dimension2 = i.dims.userId, s.dimension3 = null, 
                    s.metric1 = i.countProjectView, this._rmdata && (s.dimension4 = this._rmdata.dimension, s.dimension5 = this._rmdata.first_campaign, 
                    s.dimension6 = this._rmdata.first_medium), window.ga("readymag.send", "pageview", s)), t.common.userTracker && window.ga("t0.send", "pageview", s), 
                    this.sendFacebookPixelEvent("PageView"), s;
                }
            }
        },
        _extendParams: function(e) {
            var i = e = e || {};
            return t.common.isDownloadedSource || (i.dims = this.router.getAnalyticsDimensions && this._parseDimensions(this.router.getAnalyticsDimensions())), 
            this.userId && (i.dims.userId = this.userId), i.page || t.common.isDownloadedSource ? !i.page && t.common.isDownloadedSource && (i.page = Backbone.history.location.pathname) : i.page = "/" + Backbone.history.getFragment(), 
            -1 != i.page.indexOf("?") && (i.page = i.page.substr(0, i.page.indexOf("?"))), i.page = this._correctUrl(i.page), 
            i.href = window.location.href, i.action && (i.category = this.getActionCategory(i.action)), this._triggerProjectView && !i.action && (i.countProjectView = 1, 
            this._triggerProjectView = !1), i.screenName = this._setScreenName(), i;
        },
        _correctUrl: function(t) {
            return "/" == t ? t : "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t;
        },
        _setScreenName: function() {
            var e;
            return t.viewerRouter && t.viewerRouter.mag && t.viewerRouter.magPasswordView && 1 == t.viewerRouter.mag.is_private && (e = "Private project " + t.viewerRouter.mag.num_id), 
            t.viewerRouter && t.viewerRouter.mag && 0 == t.viewerRouter.mag.is_private && (e = t.viewerRouter.mag.title), 
            e;
        },
        _parseDimensions: function(t) {
            return {
                pageType: t.pageType || e,
                userId: t.userId || i,
                subscription: t.subscription || s
            };
        },
        _processRedirectUTM: function() {
            if (this.shortlink_redirect) {
                var e = JSON.parse(atob(this.shortlink_redirect));
                return t.utils.deleteCookie("shortlink_redirect"), {
                    campaignName: e.utm_campaign,
                    campaignSource: e.utm_source,
                    campaignMedium: e.utm_medium
                };
            }
        },
        _saveFirstInteraction: function() {
            var e = t.utils.getCookie("_rmdata") || Modernizr.localstorage && window.localStorage && window.localStorage.getItem("_rmdata");
            if (e) this._rmdata = JSON.parse(atob(e)); else {
                var i = document.referrer || "direct", s = window.location.href, n = t.utils.queryUrlGetParam("utm_campaign"), a = t.utils.queryUrlGetParam("utm_source"), o = t.utils.queryUrlGetParam("utm_medium"), r = {
                    dimension: [ n, a, o, i, s ].join("|"),
                    first_medium: o,
                    first_campaign: n,
                    first_source: a,
                    rm_url: s,
                    rm_referrer: i
                }, l = btoa(JSON.stringify(r));
                this._rmdata = r, t.utils.createCookie("_rmdata", l), Modernizr.localstorage && window.localStorage && window.localStorage.setItem("_rmdata", l);
            }
        },
        getActionCategory: function(e) {
            return t.homepageRouter ? "Homepage Actions" : "First Widget Pack Loaded" == e ? "Performance" : "Project Actions";
        }
    };
}(RM), function(t) {
    t.classes.extendAnalyticsCommon = {
        sendFacebookPixelEvent: function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = void 0, n = {};
            switch (e) {
              case "PageView":
                s = "PageView";
                break;

              case "Joined":
                s = "CompleteRegistration";
                break;

              case "Subscribed":
                s = "Customer Created", n = _.pick(i, "currency", "value");
                break;

              case "Create Mag":
                s = "Create Mag";
                break;

              case "Publish Mag":
                s = "Publish";
                break;

              case "Republish Mag":
                s = "Republish";
                break;

              case "Purchase":
                s = "Purchase", n = _.pick(i, "content_name", "content_category", "content_type", "value", "currency");
            }
            s && t.initutils.initFacebookPixel().then(function() {
                "function" == typeof window.fbq && window.fbq("trackCustom", s, n);
            });
        }
    };
}(RM), function(t) {
    "use strict";
    location.origin === t.constants.readymag_auth_host && t.classes.extendAnalyticsUsers ? t.classes.Analytics = Backbone.Model.extend(_.extend(_.extend({}, t.classes.extendAnalyticsUsers), t.classes.extendAnalyticsCommon)) : t.classes.extendAnalyticsPublic ? t.classes.Analytics = Backbone.Model.extend(_.extend(_.extend({}, t.classes.extendAnalyticsPublic), t.classes.extendAnalyticsCommon)) : alert("Analytics initialization error!");
}(RM), function() {
    "use strict";
    var t = "undefined" != typeof require, e = this._;
    if (void 0 === e) {
        if (!t) throw new Error("global widget requires underscore, see http://underscorejs.org");
        e = require("underscore");
    }
    var i = [ {
        name: "default",
        width: 1024,
        min_height: 672,
        max_height: 201600,
        caption: "Laptop & Tablet Landscape",
        shortcut: "1"
    }, {
        name: "tablet_portrait",
        width: 768,
        min_height: 926,
        max_height: 201600,
        caption: "Tablet Portrait",
        shortcut: "2",
        deprecated: !0
    }, {
        name: "phone_portrait",
        width: 320,
        min_height: 528,
        max_height: 201600,
        caption: "Phone Portrait",
        shortcut: "3"
    } ], s = [ "x", "y", "w", "h", "z", "hidden", "angle", "flip_h", "flip_v", "pack_id", "fixed_position", "is_full_width", "sticked", "animation" ], n = {
        background: e.union([ "color", "opacity", "selectedType", "picture" ], s),
        picture: e.union([ "picture", "cropW", "cropH", "cropX", "cropY", "originalW", "originalH", "ratio", "scale", "pic_opacity", "pic_color", "border_size", "border_color", "border_radius", "border_radius_max", "opacity", "anchor_link_pos" ], s),
        slideshow: e.union([ "images_h", "captions_h" ], s),
        text: e.union([ "column_count", "column_gap", "bg_color", "bg_opacity" ], s),
        shape: e.union([ "rasterUrl", "raster2xUrl", "borders", "weight", "anchor_link_pos", "bg_color" ], s),
        button: e.union([ "anchor_link_pos" ], s),
        hotspot: e.chain().union([ "borders", "weight", "anchor_link_pos" ], s).without("w", "h").value(),
        form: e.union([ "layout", "style", "style-colored-button-default", "style-colored-button-hover", "style-colored-fields", "style-outlined-button-default", "style-outlined-button-hover", "style-outlined-fields", "style-underlined-button-default", "style-underlined-button-hover", "style-underlined-fields" ], s)
    }, a = e.map(i, function(t) {
        return "viewport_" + t.name;
    }), o = e.without(a, "viewport_default"), r = function(t) {
        return n[t] || s;
    };
    "undefined" != typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = {
        viewports: i,
        viewport_fields_common: s,
        viewport_fields: n,
        viewport_listall: a,
        viewport_list: o,
        widgetViewportFields: r
    }) : this.RM ? (this.RM.viewports = i, this.RM.viewport_fields_common = s, this.RM.viewport_fields = n, 
    this.RM.viewport_listall = a, this.RM.viewport_list = o, this.RM.widgetViewportFields = r) : (this.viewports = i, 
    this.viewport_fields_common = s, this.viewport_fields = n, this.viewport_listall = a, this.viewport_list = o, 
    this.widgetViewportFields = r);
}.call(this);

var googleMapsAPICallbacks = [], facebookAPICallbacks = [], twitterAPICallbacks = [], mailchimpAPICallbacks = [];

"undefined" == typeof RM && (RM = {}), function(t) {
    t.initutils = {
        initGMapsAPI: function(e) {
            if (window.google && window.google.maps) return e();
            if (!window.processGoogleMapsAPICallbacks) {
                window.processGoogleMapsAPICallbacks = function() {
                    _.each(googleMapsAPICallbacks, function(t) {
                        _.isFunction(t) && t();
                    });
                };
                var i = document.createElement("script");
                i.type = "text/javascript";
                var s = "?key=" + t.constants.GOOGLE_API + "&libraries=places&callback=processGoogleMapsAPICallbacks";
                t.constants.IS_FILE_PROTOCOL && (s = ""), i.src = t.utils.selectProtocol("//maps.googleapis.com/maps/api/js" + s), 
                document.body.appendChild(i);
            }
            googleMapsAPICallbacks.push(e);
        },
        initFacebookAPI: function(e) {
            var i = t.constants.FACEBOOK_APP_ID || "";
            if ("function" == typeof e) {
                if (t.initutils.isFacebookInited) return e();
                var s, n, a, o, r;
                facebookAPICallbacks.push(e), $("#fb-root").length || $("body").prepend($('<div id="fb-root"></div>')), 
                window.fbAsyncInit = function() {
                    FB.init({
                        appId: i,
                        xfbml: !1,
                        version: "v" + t.constants.FACEBOOK_API_VERSION
                    }), _.each(facebookAPICallbacks, function(t) {
                        _.isFunction(t) && t();
                    }), t.initutils.isFacebookInited = !0;
                }, s = document, n = "script", a = "facebook-jssdk", r = s.getElementsByTagName(n)[0], s.getElementById(a) || ((o = s.createElement(n)).id = a, 
                o.src = t.utils.selectProtocol("//connect.facebook.net/en_US/sdk.js"), r.parentNode.insertBefore(o, r));
            }
        },
        initFacebookPixel: function() {
            return new Promise(function(e) {
                return t.initutils.isFacebookPixelInited ? e() : (i = window, s = document, n = "script", i.fbq || (a = i.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments);
                }, i._fbq || (i._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], (o = s.createElement(n)).async = !0, 
                o.src = "https://connect.facebook.net/en_US/fbevents.js", (r = s.getElementsByTagName(n)[0]).parentNode.insertBefore(o, r)), 
                fbq("init", t.constants.FACEBOOK_PIXEL_ID), t.initutils.isFacebookPixelInited = !0, e());
                var i, s, n, a, o, r;
            });
        },
        initTwitterAPI: function(e) {
            t.initutils.isTwitterInited ? _.isFunction(e) && e() : (_.isFunction(e) && twitterAPICallbacks.push(e), 
            t.initutils.isTwitterLoading || (t.initutils.isTwitterLoading = !0, $('body > script[src^="//syndication.twimg.com/tweets.json"]').remove(), 
            $.ajax({
                url: t.utils.selectProtocol("//platform.twitter.com/widgets.js"),
                dataType: "script",
                cache: !1,
                success: function() {
                    _.each(twitterAPICallbacks, function(t) {
                        _.isFunction(t) && t();
                    }), twttr.events.bind("click", t.utils.getFocusBack), t.initutils.isTwitterInited = !0, t.initutils.isTwitterLoading = !1;
                }
            })));
        },
        initMailchimpAPI: function(e) {
            t.initutils.isMailchimpInited ? _.isFunction(e) && e(t.initutils.mailchimp) : (_.isFunction(e) && mailchimpAPICallbacks.push(e), 
            t.initutils.isMailchimpLoading || (t.initutils.isMailchimpLoading = !0, $.ajax({
                url: t.utils.selectProtocol("//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js"),
                dataType: "script",
                cache: !1,
                success: function() {
                    window.require ? window.require([ "mojo/signup-forms/Loader" ], function(e) {
                        t.initutils.mailchimp = e, _.each(mailchimpAPICallbacks, function(e) {
                            _.isFunction(e) && e(t.initutils.mailchimp);
                        }), t.initutils.isMailchimpInited = !0;
                    }) : mailchimpAPICallbacks = [];
                },
                complete: function() {
                    t.initutils.isMailchimpLoading = !1;
                }
            })));
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.embedplugins = t.classes.embedplugins || {}, t.embedutils = t.embedutils || {}, t.embedutils.findPlugin = function(e) {
        var i = t.embedMatcher.matchCode(e.code, e);
        return _.find(t.classes.embedplugins, function(t, e) {
            return e.toLowerCase() == i;
        });
    }, t.classes.EmbedPlugin = Backbone.View.extend({
        embed_type: null,
        containerSelector: null,
        resizable: !0,
        proportional: !1,
        forceFrameSize: !1,
        initialize: function(e) {
            this.block = e.block, this.widget = e.widget, _.bindAll(this), this.isInViewer = t.viewerRouter || t.constructorRouter && t.constructorRouter.preview;
        },
        parse: function(t, e) {
            return e(t);
        },
        sanitize: function(t) {
            function e(e) {
                return t.apply(this, arguments);
            }
            return e.toString = function() {
                return t.toString();
            }, e;
        }(function(t) {
            return t = sanitize(t).xss(), $(t);
        }),
        draw: function(t) {
            t();
        }
    }), t.embedutils.instagramEmbedCallbacks = [], t.embedutils.initInstagram = function(e) {
        if (window.instgrm && window.instgrm.Embeds && _.isFunction(window.instgrm.Embeds.process)) return instgrm.Embeds.process(), 
        e();
        t.embedutils.instagramEmbedCallbacks.push(e), t.embedutils.instagramInitXhr && t.embedutils.instagramInitXhr.abort(), 
        $('body > script[src^="//platform.instagram.com"]').remove(), t.embedutils.instagramInitXhr = $.ajax({
            url: t.utils.selectProtocol("//platform.instagram.com/en_US/embeds.js"),
            dataType: "script",
            success: function() {
                _.each(t.embedutils.instagramEmbedCallbacks, function(t) {
                    _.isFunction(t) && t();
                });
            }
        });
    }, t.classes.embedplugins.Instagram = t.classes.EmbedPlugin.extend({
        embed_type: "instagram",
        containerSelector: "iframe",
        resizable: !0,
        initialize: function(e) {
            t.classes.EmbedPlugin.prototype.initialize.apply(this, arguments), this.block && _.extend(this.block.frame, {
                minwidth: 164,
                minheight: 264
            });
        },
        parse: function(t, e) {
            return e(t.replace(/<script.*script>/i, ""));
        },
        draw: function(e, i, s) {
            var n, a, o, r, l, c = 0, d = !1;
            i.html(e), t.embedutils.initInstagram(function() {
                l = setInterval(function() {
                    if (c++, n = i.children(this.containerSelector), (a = n.height()) || c > 20) {
                        if (a || c > 50) return a && "constructor" === t.common.mode && (o = n.width(), r = n.height()), clearInterval(l), 
                        void s(o, r);
                        if (d) return;
                        d = !0, s();
                    }
                }.bind(this), 100);
            }.bind(this));
        },
        customResizeHandler: function(t, e, i) {
            return t;
        }
    }), t.embedutils.pinterestEmbedCallbacks = [], t.embedutils.initPinterest = function(e) {
        var i, s = 0;
        if (_.isFunction(window.parsePinBtns)) return e();
        t.embedutils.pinterestEmbedCallbacks.push(e), $('body > script[src^="assets.pinterest.com/js/pinit.js"]').remove(), 
        $("body").prepend($('<script defer src="//assets.pinterest.com/js/pinit.js" data-pin-build="parsePinBtns"><\/script>')), 
        i = setInterval(function() {
            s++, (_.isFunction(window.parsePinBtns) || s > 20) && (clearInterval(i), e());
        }, 100);
    }, t.classes.embedplugins.Pinterest = t.classes.EmbedPlugin.extend({
        embed_type: "pinterest",
        containerSelector: "a",
        resizable: !1,
        forceFrameSize: !0,
        containerSelectors: {
            buttonPin: "span",
            buttonFollow: "span",
            embedPin: "span",
            embedUser: "span",
            embedBoard: "span"
        },
        parse: function(t, e) {
            var i = t.match(/data-pin-do=\"(\S+)\"/);
            return _.isArray(i) && i[1] && (this.pinterestType = i[1], this.containerSelector = this.containerSelectors[this.pinterestType] || this.containerSelector), 
            e && e(t.replace(/<script.*script>/i, ""));
        },
        draw: function(e, i, s) {
            t.embedutils.initPinterest(function() {
                var n, a, o, r, l, c, d = 0, h = !1;
                i.html(e), this.pinterestType || this.parse(e[0].outerHTML), this.pinterestType && i.addClass(this.pinterestType), 
                window.parsePinBtns(i.get(0)), l = setInterval(function() {
                    if (d++, n = i.children(this.containerSelector).filter(function() {
                        return /PIN_\d+/.test(this.className);
                    }), (a = n.height()) || d > 20) {
                        if (a || d > 50) return a && "constructor" === t.common.mode && (o = n.outerWidth(!0), r = n.outerHeight(!0), 
                        "buttonFollow" == this.pinterestType && (c = n.children("i")).length && (o += (c.outerWidth() || 1) - 1)), 
                        clearInterval(l), void s(o, r);
                        if (h) return;
                        h = !0, s();
                    }
                }.bind(this), 100);
            }.bind(this));
        }
    }), t.classes.embedplugins.FacebookVideo = t.classes.EmbedPlugin.extend({
        embed_type: "fbvideo",
        containerSelector: "iframe",
        resizable: !0,
        proportional: !0,
        forceFrameSize: !0,
        initialize: function(e) {
            t.classes.EmbedPlugin.prototype.initialize.apply(this, arguments), this.block && _.extend(this.block.frame, {
                minwidth: 220,
                minheight: 124
            });
        },
        parse: function(t, e) {
            return e(t.replace(/<script.*script>/gi, "").replace(/<div\s+id=(\'|\")fb-root(\'|\")><\/div>/gi, ""));
        },
        draw: function(e, i, s) {
            var n, a, o;
            i.html(e), t.initutils.initFacebookAPI(function() {
                window.FB.XFBML.parse(i.get(0), function() {
                    n = i.find(this.containerSelector), a = n.width(), o = n.height(), s(a, o);
                }.bind(this));
            }.bind(this));
        }
    }), t.embedutils.readymagEmbedCallbacks = [], t.embedutils.initReadymag = function(e) {
        if (t.common.isReadymagEmbedInited && _.isFunction(window.RM_EMBED_parse)) return e();
        t.embedutils.readymagEmbedCallbacks.push(e), window.RM_EMBED_initAsync = function() {
            t.common.isReadymagEmbedInited = !0, _.each(t.embedutils.readymagEmbedCallbacks, function(t, e) {
                _.isFunction(t) && t();
            }), t.embedutils.readymagEmbedCallbacks = [];
        }, t.embedutils.readymagInitXhr || ($('body > script[src~="RM_EMBED_"]').remove(), t.embedutils.readymagInitXhr = $.ajax({
            url: t.constants.EMBED_SCRIPT_MAIN,
            dataType: "script"
        }));
    }, t.classes.embedplugins.Readymag = t.classes.EmbedPlugin.extend({
        embed_type: "readymag",
        containerSelector: "iframe",
        resizable: !0,
        initialize: function(e) {
            t.classes.EmbedPlugin.prototype.initialize.apply(this, arguments), this.block && this.block.frame && _.extend(this.block.frame, {
                minwidth: 288,
                minheight: 236,
                maxwidth: 512,
                maxheight: 383
            });
        },
        parse: function(t, e) {
            return e(t.replace(/<script.*script>/i, ""));
        },
        draw: function(e, i, s) {
            i.html(e), t.embedutils.initReadymag(function() {
                window.RM_EMBED_parse(function() {
                    var t = i.find(this.containerSelector), e = t.width(), n = t.height();
                    s(e + 2, n);
                }.bind(this));
            }.bind(this));
        }
    }), t.classes.embedplugins.IFrame = t.classes.EmbedPlugin.extend({
        embed_type: "simple-iframe",
        containerSelector: "iframe",
        resizable: !0,
        parse: function(t, e) {
            var i;
            return (i = t.match(/[\s\S]*?(\<iframe[\s\S]*?\>)[\s\S]*?(\<\/iframe\>)[\s\S]*?/i)) && i[1] && i[2] ? e(i[1] + i[2]) : e(null);
        },
        sanitize: function(t) {
            var e = $(t);
            if ("object" != (void 0 === e ? "undefined" : _typeof(e)) || !e.length) return e;
            var i = $("<iframe></iframe>"), s = e.get(0).attributes, n = [ "allowtransparency", "height", "name", "sandbox", "scrolling", "seamless", "src", "width" ];
            return _(s).each(function(t) {
                if ("object" == (void 0 === t ? "undefined" : _typeof(t)) && t.specified && _.contains(n, t.name.toLowerCase())) {
                    var e = t.name.toLowerCase(), s = t.value;
                    "src" == e && "https:" == window.location.protocol && (s = s.replace(/^http(s?):\/\//i, "//")), i.attr(e, s);
                }
            }), i;
        },
        draw: function(e, i, s) {
            var n = e[0].src;
            if (n && n.trim()) {
                if (t.screenshot) {
                    var a = n.indexOf("youtube") > -1, o = n.indexOf("vimeo") > -1, r = a ? "youtube" : o && "vimeo";
                    if (r) return void this.setPosterInsteadOfVideo(r, n, i, s);
                }
                i.html(e);
                var l, c, d, h, p, u = 0, g = !1;
                p = setInterval(function() {
                    if (u++, l = i.children(this.containerSelector), (c = l.height()) || u > 20) {
                        if (c || u > 50) return c && "constructor" === t.common.mode && (d = l.width(), h = l.height()), clearInterval(p), 
                        void s(d, h);
                        if (g) return;
                        g = !0, s();
                    }
                }.bind(this), 100);
            } else s();
        },
        setPosterInsteadOfVideo: function(t, e, i, s) {
            var n, a, o, r = !1, l = $("<img/>");
            if ("youtube" === t) {
                if (a = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, !(o = e.match(a)) || !o[7] || 11 != o[7].length) return void s();
                n = o[7], c("https://img.youtube.com/vi/" + n + "/sddefault.jpg");
            } else if ("vimeo" === t) {
                if (a = /player\.vimeo\.com\/video\/([0-9]*)/, !(o = e.match(a)) || !o[1]) return void s();
                n = o[1], $.getJSON("https://www.vimeo.com/api/v2/video/" + n + ".json?callback=?", {
                    format: "jsonp"
                }).done(function(t) {
                    c(t[0].thumbnail_large);
                }).fail(function() {
                    s();
                });
            }
            function c(e) {
                l[0].src = e, i.css({
                    "background-color": "#000"
                }), l.css({
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "100%",
                    height: "auto"
                }), i.append(l), l.on("load", function() {
                    "youtube" === t && !r && l[0].naturalWidth <= 120 ? (r = !0, e = "https://img.youtube.com/vi/" + n + "/hqdefault.jpg", 
                    l[0].src = e) : (s(), l.off("load"));
                });
            }
        }
    }), t.classes.embedplugins.CodeInjection = t.classes.EmbedPlugin.extend({
        embed_type: "code-injection",
        containerSelector: "rm-code-injection",
        resizable: !0,
        HEAD_PASSTHROUGH_SELECTOR: "",
        parse: function(t, e) {
            return e(t);
        },
        sanitize: function(t) {
            return $.parseHTML(t, document, !0);
        },
        draw: function(t, e, i) {
            var s = "<head>", n = '<body style="padding:0; margin: 0; width: 100%; height: 100%; min-width: initial; min-height: auto;">', a = $(document).find("head").find(this.HEAD_PASSTHROUGH_SELECTOR), o = $('<iframe seamless style="width: 100%; height: 100%;"></iframe>'), r = $("<div></div>");
            if (!this.isInViewer || this.block && this.block.model.get("use_iframe") || this.widget && this.widget.use_iframe) {
                a.each(function() {
                    s += this.outerHTML;
                }), s += '<script src="/js/vendor/jquery-2.2.3.min.js"><\/script>', s += "</head>", r.html(t), n += r[0].innerHTML + "</body>";
                var l = '<!DOCTYPE html><html style="width: 100%; height: 100%; min-width: initial; min-height: auto;">' + s + n + "</html>";
                return e.html(o), o[0].contentWindow.document.open(), o[0].contentWindow.document.write(l), o[0].contentWindow.document.close(), 
                i(o.width(), o.height());
            }
            t = $(t), r.html(t), r.find("script").each(function() {
                var t;
                this.src && this.text && ((t = document.createElement("script")).text = this.text, this.text = "", $(t).insertAfter($(this)));
            }), postscribe(e, r[0].innerHTML, {
                done: function() {
                    return i(null, null);
                }
            }), e.css({
                "font-family": "initial",
                "font-weight": "initial"
            });
        },
        loadNodeWithScripts: function(t, e, i) {
            var s, n = $('<div id="fake"></div>'), a = [];
            n.html(e), (s = n.find("script")).each(function() {
                this.src && this.text ? (a.push({
                    src: this.src
                }), a.push({
                    text: this.text
                })) : a.push({
                    src: this.src,
                    text: this.text
                });
            });
            var o = _.find(a, function(t) {
                return !!t.src;
            });
            if (!a.length || !o || a < 2) t.html(n[0].innerHTML); else {
                s.remove();
                var r = 0;
                t.html(n[0].innerHTML), function e() {
                    var s, n, o, l = a[r];
                    if (!l) return i();
                    r++;
                    s = document.createElement("script");
                    l.src && (s.src = l.src);
                    l.text && (s.text = l.text);
                    if (!l.src) return t[0].appendChild(s), e();
                    l.src && (s.onload = function() {
                        clearInterval(n), e();
                    }, o = 0, n = setInterval(function() {
                        ++o > 10 && (s.onload = null, e());
                    }, 1e3), t[0].appendChild(s));
                }();
            }
        }
    });
}(RM), function() {
    "use strict";
    var t = "undefined" != typeof require && "undefined" != typeof process, e = this._;
    if (void 0 === e) {
        if (!t || e) throw new Error("embed matcher requires underscore, see http://underscorejs.org");
        e = require("underscore");
    }
    var i = {
        defaultType: "codeinjection",
        matchers: {
            instagram: [ /^\s*<blockquote\s+class=.instagram-media.*<\/blockquote>\s*<script.*src=.*instagram.+>.*<\/script>\s*$/gi ],
            pinterest: [ /^\s*<a.*data-pin-do=.*<\/a>([\s\S]*<script.*src=.*pinterest.+>.*<\/script>)?\s*$/i ],
            facebookvideo: [ /^\s*<div\s+id=.fb-root.*<\/div>[\s\S]*<script>.*src.*facebook.*sdk.*<\/script>[\s\S]*<div\s+class=.fb-video.*<\/div>\s*$/i ],
            readymag: [ /^\s*<a\s+class=.rm-mag-embed.*<\/a>[\s\S]*<script.+id=.readymag-embed-init.+><\/script>\s*$/i ],
            iframe: function(t) {
                var e = (t = t || "").replace(/<!--[\s\S]*-->/gi, "");
                return /^\s*<iframe[\s\S]*>[\s\S]*<\/iframe>\s*$/i.test(e);
            }
        },
        matchCode: function(t, i) {
            for (var s in t = (t || "").trim(), this.matchers) {
                var n = this.matchers[s];
                if (e.isFunction(n)) return n(t, i) ? s : this.defaultType;
                for (var a in n) {
                    if (a = n[a], e.isFunction(a)) {
                        if (a(t, i)) return s;
                    } else if (new RegExp(a.source, a.flags).test(t)) return s;
                }
            }
            return this.defaultType;
        }
    };
    "undefined" != typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = i) : this.RM ? this.RM.embedMatcher = i : this.embedMatcher = i;
}.call(this), "undefined" == typeof RM && (RM = {}), function(t) {
    t.videoutils = {
        getVideoAspectFromPoster: function(t, e) {
            var i = {
                abort: function() {
                    d.onload = null, d.onerror = null;
                }
            }, s = {
                aspect_poster: null,
                aspect_real: null
            };
            if (!t) return e(s), i;
            var n, a, o, r, l, c, d = new Image();
            return d.onload = function() {
                l = d.width, c = d.height, o = 200, r = Math.floor(o * (c / l)), n = $('<canvas id="qqq" width="' + o + '" height="' + r + '"></canvas>').css("visibility", "hidden").appendTo("body"), 
                (a = n[0].getContext("2d")).drawImage(d, 0, 0, o, r);
                var t, i, h = a.getImageData(0, 0, o, r), p = 0, u = 0, g = 0, m = 0;
                for (i = 0; i <= r / 2; i++) {
                    if (w(i, "row").isContrast) {
                        (i <= 1 || w(i - 1, "row").isBlack || w(i - 2, "row").isBlack) && (p = i);
                        break;
                    }
                }
                for (i = r - 1; i > r / 2; i--) {
                    if (w(i, "row").isContrast) {
                        (i >= r - 2 || w(i + 1, "row").isBlack || w(i + 2, "row").isBlack) && (u = r - 1 - i);
                        break;
                    }
                }
                var f = Math.max(p, u), v = 0;
                if (!f) {
                    for (t = 0; t <= o / 2; t++) {
                        if (w(t, "column").isContrast) {
                            (t <= 1 || w(t - 1, "column").isBlack || w(t - 2, "column").isBlack) && (g = t);
                            break;
                        }
                    }
                    for (t = o - 1; t > o / 2; t--) {
                        if (w(t, "column").isContrast) {
                            (t >= o - 2 || w(t + 1, "column").isBlack || w(t + 2, "column").isBlack) && (m = o - 1 - t);
                            break;
                        }
                    }
                    v = Math.max(m, g);
                }
                f > r / 3 && (f = 0), v > o / 3 && (v = 0);
                var _ = l / c;
                function w(t, e) {
                    var i, s, n, a, l, c = "row" == e ? o : r, d = 0, p = 0;
                    for (i = 0; i < c; i++) s = ("row" == e ? t * o + i : i * o + t) << 2, d += (n = h.data[s]) + (a = h.data[s + 1]) + (l = h.data[s + 2]), 
                    n < 20 && a < 20 && l < 20 && p++;
                    return {
                        isBlack: (d /= 3 * c) < 5 && c - p < 3,
                        isContrast: p < c / 2
                    };
                }
                f ? _ = o / (r - 2 * f) : v && (_ = (o - 2 * v) / r), n.remove(), s.aspect_poster = l / c, s.aspect_real = _, 
                e(s);
            }, d.onerror = function() {
                e(s);
            }, d.src = "/api/proxy/?url=" + encodeURIComponent(t), i;
        },
        setVideoPosition: function(t) {
            if (t.aspect_poster && t.$media && t.$media.length) {
                var e = t.$container.css("width"), i = t.$container.css("height");
                if (/px/.test(e + i)) e = parseInt(e), i = parseInt(i); else {
                    if (!t.mag) return;
                    var s = t.mag.getContainerSizeCached();
                    e = s.width, i = s.height;
                }
                var n, a, o = t.aspect_poster, r = t.aspect_real || o, l = t.controls_remove ? 5 : 0, c = e + 2 * l, d = i + 2 * l, h = c, p = d;
                if (o) c / d > r ? a = (n = c) / r : n = (a = d) * r, o < r ? p = (h = n) / o : h = (p = a) * o;
                if ("vimeo" == t.provider.toLowerCase() && t.controls_remove) {
                    var u = (p - d) / 2;
                    if (v = 50, minRightPadding = 46, diffBottom = v - u, diffRight = minRightPadding - (h - c) / 2, diffBottom > 0 || diffRight > 0) {
                        var g = (p + 2 * diffBottom) / p, m = (h + 2 * diffRight) / h, f = Math.max(g, m);
                        h *= f, p *= f;
                    }
                }
                if ("youtube" == t.provider.toLowerCase() && t.controls_remove) {
                    var v = 103, _ = v - (u = (p - d) / 2);
                    _ > 0 && (h = (p += 2 * _) * o);
                }
                var w = -l - (h - c) / 2, y = -l - (p - d) / 2;
                t.$media.css({
                    left: w,
                    top: y,
                    width: h,
                    height: p
                });
            }
        }
    };
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    t.animationutils = {
        LOOP_TYPES: {
            swing: "swing",
            repeat: "repeat"
        },
        POINTER_EVENTS: [ "click", "hover" ],
        EXTERNAL_TRIGGER_BLOCK_EXCLUDE: [ "facebook", "twitter", "form", "gmaps", "slideshow", "audio", "video" ],
        ANIMATION_BLOCK_EXCLUDE: [ "facebook", "twitter" ],
        POINTER_EVENTS_BLOCK_EXCLUDE: [ "form", "gmaps", "slideshow", "audio", "video" ],
        DEFAULT_LOOP_TYPE: "swing",
        TRIGGER_HIGHLIGHT_CLASS: "animation-trigger-highlight",
        DEG_TO_RAD: Math.PI / 180,
        ANIMATION_PROPERTIES: function() {
            var t = !1, e = "animation", i = "AnimationIteration", s = "AnimationEnd", n = "animation-timing-function", a = "@keyframes", o = "transform", r = "transform", l = "Webkit Moz O ms Khtml".split(" "), c = "webkit moz o MS кhtml".split(" "), d = document.createElement("div");
            if (void 0 != d.style.animationName) t = !0, i = i.toLowerCase(), s = s.toLowerCase(); else for (var h = 0; h < l.length; h++) if (void 0 != d.style[l[h] + "AnimationName"]) {
                e = l[h] + "Animation", i = c[h] + i, s = c[h] + s, n = "-" + l[h].toLowerCase() + "-" + n, a = "@-" + l[h].toLowerCase() + "-keyframes", 
                t = !0;
                break;
            }
            if (void 0 == d.style.transform) for (h = 0; h < l.length; h++) if (void 0 != d.style[l[h] + "Transform"]) {
                o = l[h] + "Transform", r = "-" + l[h].toLowerCase() + "-transform";
                break;
            }
            return d = null, {
                animationSupported: t,
                animationJS: e,
                animationIterationJS: i,
                animationEndJS: s,
                animationTimingFunctionCSS: n,
                keyframeCSS: a,
                transformJS: o,
                transformCSS: r
            };
        }(),
        createAnimationTimeline: function(t) {
            return new s(t);
        },
        getNormalizedAnimation: function(e, i, s, n) {
            var a = {
                dx: 0,
                dy: 0,
                from_opacity: 100,
                opacity: 100,
                from_rotate: 0,
                rotate: 0,
                from_scale: 100,
                scale: 100
            }, o = {
                use_move: [ "dx", "dy" ],
                use_opacity: [ "from_opacity", "opacity" ],
                use_rotate: [ "from_rotate", "rotate" ],
                use_scale: [ "from_scale", "scale" ]
            }, r = _.extend({}, e);
            "scroll" == r.type && (r.loop = !1), r.steps = [];
            for (var l = {
                dx: 0,
                dy: 0
            }, c = 0; c < e.steps.length; c++) {
                var d = _.extend({}, e.steps[c]);
                _.each(o, _.bind(function(t, e) {
                    d[e] ? (a[t[0]] = d[t[0]], a[t[1]] = d[t[1]]) : (d[t[0]] = a[t[0]], d[t[1]] = a[t[1]]);
                }, this)), s && (d.dx = 0, d.rotate = 0, d.from_rotate = 0), "scroll" != r.type || i || 0 != c || (d.delay_px = 0), 
                1 != n && i && (d.dx *= n, d.dy *= n), "scroll" == r.type ? (d.calcedDuration = h(d, l), d.calcedDelay = d.delay_px ? d.delay_px * t.scale.normalize(n) : 0) : (d.calcedDuration = d.duration || .001, 
                d.calcedDelay = d.delay || 0), d.acceleration = d.acceleration || "none", r.steps.push(d), l = d;
            }
            return r;
            function h(t, e) {
                var i, s = t.dx - e.dx, n = t.dy - e.dy;
                return i = 0 != s || 0 != n ? Math.pow(s * s + n * n, .5) / t.speed : 300 / t.speed, Math.ceil(i);
            }
        },
        normalizeLoopValue: function(t) {
            return !!t && (this.LOOP_TYPES[t] || this.DEFAULT_LOOP_TYPE);
        },
        isExternalTriggerAllowed: function(t) {
            return this.isPointerEvent(t);
        },
        isPointerEvent: function(t) {
            return -1 !== this.POINTER_EVENTS.indexOf(t);
        },
        canBeExternalTrigger: function(t, e) {
            var i = t.attributes || t.model && t.model.attributes || {}, s = e.attributes || e.model && e.model.attributes || {}, n = i.type && -1 === this.EXTERNAL_TRIGGER_BLOCK_EXCLUDE.indexOf(i.type), a = e && s.is_above && i.is_global && !i.is_above;
            return n && !a;
        },
        canHaveAnimation: function(t) {
            var e = t.attributes || t.model && t.model.attributes || {};
            return e.type && -1 === this.ANIMATION_BLOCK_EXCLUDE.indexOf(e.type);
        },
        arePointerEventsAllowed: function(t) {
            var e = t.attributes || t.model && t.model.attributes || {};
            return e.type && -1 === this.POINTER_EVENTS_BLOCK_EXCLUDE.indexOf(e.type);
        },
        getBlocksContainingTriggers: function(t) {
            var e = [], i = _.map(t, function(t) {
                return t.id || t._id;
            });
            return _.each(t, function(t) {
                var s = t.model ? t.model.get("animation") : t.animation, n = s && s.trigger;
                n && -1 !== i.indexOf(n) && e.push(t.id ? t.id : t._id);
            }), e;
        },
        restoreTriggers: function(t, e, i) {
            var s = [];
            return _.each(t, function(t) {
                var n = e[t], a = _.find(i, {
                    id: n
                }), o = a && a.model && a.model.get("animation");
                o && o.trigger && (o.trigger = e[o.trigger], s.push(a));
            }), s;
        },
        isScaleUp: function(t) {
            return Boolean(_.find(t && t.steps, function(t, e) {
                return t.use_scale && (0 === e && t.from_scale > 100 || t.scale > 100);
            }));
        },
        canBeAccelerated: function(t) {
            return !Modernizr.isdesktop || !this.isScaleUp(t);
        }
    };
    var e = 0, i = t.animationutils.ANIMATION_PROPERTIES, s = Backbone.View.extend({
        initialize: function(t) {
            if (_.bindAll(this), _.extend(this, t), i.animationSupported) {
                this.active = !1, this.reversed = !1, this.animationLength = 0, this.hasRotation = !1;
                for (var e = 0; e < this.steps.length; e++) {
                    var s = this.steps[e];
                    this.animationLength += s.calcedDelay + s.calcedDuration, s.use_rotate && (0 == e && 0 != s.from_rotate || 0 != s.rotate) && (this.hasRotation = !0);
                }
                this.$el.toggleClass("force3d", !!this.force3d), "scroll" != this.type ? this.generateNormalAnimation() : this.generateFramesAnimation();
            }
        },
        generateNormalAnimation: function() {
            for (var t = 0, s = [ [ 0 ] ], n = this, a = this.steps.length, o = 0; o < a; o++) {
                var r = this.steps[o].calcedDelay / this.animationLength, l = this.steps[o].calcedDuration / this.animationLength;
                r >= 1e-4 ? s[s.length - 1].push(t + r) : r = 0, t += r + l, o == a - 1 && (t = 1), s.push([ t ]);
            }
            e++, this.id = e;
            var c = i.keyframeCSS + " animation_" + this.id + " {\n", d = {
                none: "linear",
                "ease-in": "ease-in",
                "ease-out": "ease-out",
                "ease-both": "ease-in-out"
            };
            c += h(s[0], {
                dx: 0,
                dy: 0,
                opacity: this.steps[0].from_opacity,
                rotate: this.steps[0].from_rotate,
                scale: this.steps[0].from_scale
            }, d[this.steps[0].acceleration]);
            for (o = 0; o < a; o++) c += h(s[o + 1], this.steps[o], this.steps[o + 1] ? d[this.steps[o + 1].acceleration] : void 0);
            function h(t, e, s) {
                var a = "\t";
                return a += _.map(t, function(t) {
                    return 100 * t + "%";
                }).join(", ") + " {", a += i.transformCSS + ": " + n.getTransformString(e.dx, e.dy, e.rotate, e.scale / 100) + "; ", 
                a += "opacity: " + (0 == e.opacity ? 0 : e.opacity / 100) + "; ", s && (a += i.animationTimingFunctionCSS + ": " + s), 
                a += "}\n";
            }
            c += "}\n", this.keyframesStyle = document.createElement("style"), this.keyframesStyle.innerHTML = c, 
            this.$el.append(this.keyframesStyle), this.$el.on(i.animationIterationJS, this.onAnimationIteration), 
            this.$el.on(i.animationEndJS, this.onAnimationEnd), this.applyStepState(this.screenshotMode && "load" == this.type ? a - 1 : "initial");
        },
        generateFramesAnimation: function() {
            var t = 0, e = {
                dx: 0,
                dy: 0,
                opacity: this.steps[0].from_opacity,
                rotate: this.steps[0].from_rotate,
                scale: this.steps[0].from_scale
            };
            this.frames = [], this.frames.push({
                ind: 0,
                isDelay: !1,
                params: e
            });
            for (var i = 0; i < this.steps.length; i++) {
                var s = this.steps[i];
                s.calcedDelay && (this.frames.push({
                    ind: t + 1,
                    isDelay: !0,
                    params: e
                }), t += s.calcedDelay), e = {
                    dx: s.dx,
                    dy: s.dy,
                    opacity: s.opacity,
                    rotate: s.rotate,
                    scale: s.scale,
                    acceleration: s.acceleration
                }, this.frames.push({
                    ind: t + 1,
                    isDelay: !1,
                    params: e
                }), t += s.calcedDuration;
            }
            this.seek(0);
        },
        getTransformString: function(e, i, s, n) {
            var a;
            if (n < .001 && (n = .001), this.hasRotation && "scroll" != this.type) a = this.force3d ? "translate3d(" + e + "px," + i + "px,0) rotate(" + s + "deg) scale(" + n + ")" : "translate(" + e + "px," + i + "px) rotate(" + s + "deg) scale(" + n + ")"; else {
                var o = n, r = 0;
                s && (s *= t.animationutils.DEG_TO_RAD, o = Math.cos(s) * n, r = Math.sin(s) * n), o = Math.abs(o) < 1e-6 ? 0 : o, 
                r = Math.abs(r) < 1e-6 ? 0 : r, Modernizr.edge && (i *= t.scale.getMag().getScale(t.scale.getMag().viewport));
                var l = o + "," + r, c = -r + "," + o, d = e + "," + i;
                a = this.force3d ? "matrix3d(" + l + ",0,0," + c + ",0,0,0,0,1,0," + d + ",0,1)" : "matrix(" + l + "," + c + "," + d + ")";
            }
            return a;
        },
        applyStepState: function(t) {
            var e;
            if (this.$el.removeClass("invisible"), "initial" == t) this.$el[0].style[i.transformJS] = this.getTransformString(0, 0, this.steps[0].from_rotate, this.steps[0].from_scale / 100), 
            e = this.steps[0].from_opacity, this.$el[0].style.opacity = 0 == e ? 0 : e / 100; else {
                var s = this.steps[t];
                this.$el[0].style[i.transformJS] = this.getTransformString(s.dx, s.dy, s.rotate, s.scale / 100), e = s.opacity, 
                this.$el[0].style.opacity = 0 == e ? 0 : e / 100;
            }
            ("initial" != t || this.animationTrigger) && 0 === e && "hover" != this.type && this.$el.addClass("invisible");
        },
        play: function() {
            if (!this.screenshotMode && i.animationSupported) {
                var e = i.animationJS;
                this.stop(), this.$el.removeClass("invisible"), this.$el.outerHeight(), window.requestAnimationFrame(function() {
                    this.$el[0].style[e + "Name"] = "animation_" + this.id, this.$el[0].style[e + "Duration"] = this.animationLength + "s", 
                    this.$el[0].style[e + "IterationCount"] = this.loop ? "infinite" : 1, this.$el[0].style[e + "Direction"] = this.loop === t.animationutils.LOOP_TYPES.repeat ? "normal" : "alternate", 
                    this.$el[0].style[e + "FillMode"] = "both", this.$el[0].style[e + "PlayState"] = "";
                }.bind(this)), this.active = !0, this.reversed = !1;
            }
        },
        reverse: function() {
            if (!this.screenshotMode && i.animationSupported) {
                var e = i.animationJS;
                this.stop(), this.$el.removeClass("invisible"), this.$el.outerHeight(), this.$el[0].style[e + "Name"] = "animation_" + this.id, 
                this.$el[0].style[e + "Duration"] = this.animationLength + "s", this.$el[0].style[e + "IterationCount"] = this.loop ? "infinite" : 1, 
                this.$el[0].style[e + "Direction"] = this.loop === t.animationutils.LOOP_TYPES.repeat ? "reverse" : "alternate-reverse", 
                this.$el[0].style[e + "FillMode"] = "both", this.$el[0].style[e + "PlayState"] = "", this.active = !0, 
                this.reversed = !0;
            }
        },
        stop: function() {
            this.$el.removeClass("invisible"), this.$el[0].style[i.animationJS] = "", this.active = !1, this.reversed = !1;
        },
        onAnimationEnd: function() {
            this.reversed = !this.reversed, this.active = !1, this.$el[0].style[i.animationJS] = "", this.applyStepState(this.reversed ? this.steps.length - 1 : "initial"), 
            this.trigger("full-cycle-end");
        },
        onAnimationIteration: function(e) {
            this.loop === t.animationutils.LOOP_TYPES.swing ? Math.round(e.originalEvent.elapsedTime / this.animationLength) % 2 ? this.reversed = !0 : (this.reversed = !1, 
            this.trigger("full-cycle-end")) : this.trigger("full-cycle-end");
        },
        resume: function() {
            this.screenshotMode || i.animationSupported && (Modernizr.isdesktop ? this.$el[0].style[i.animationJS + "PlayState"] = "running" : this.play(), 
            this.active = !0);
        },
        pause: function() {
            i.animationSupported && (Modernizr.isdesktop ? this.$el[0].style[i.animationJS + "PlayState"] = "paused" : this.stop(), 
            this.active = !1);
        },
        seek: function(t) {
            if (i.animationSupported) {
                t = Math.max(Math.min(t, this.animationLength), 0);
                var e, s, n, a, o = this.frames.length;
                for (e = 0; e < o && !(this.frames[e].ind > t); e++) ;
                e--, this.frames[e].isDelay ? s = r(this.frames[e].params, this.frames[e].params, 0, 1) : (n = e ? this.frames[e].ind - 1 : 0, 
                a = e == o - 1 ? this.animationLength : this.frames[e + 1].ind - 1, s = r(this.frames[e ? e - 1 : 0].params, this.frames[e].params, t - n, a - n + 1)), 
                this.$el[0].style[i.transformJS] = this.getTransformString(s.dx, s.dy, s.rotate, s.scale / 100), this.$el[0].style.opacity = 0 == s.opacity ? 0 : s.opacity / 100, 
                this.$el.toggleClass("invisible", 0 == s.opacity);
            }
            function r(t, e, i, s) {
                if (0 == i) return t;
                if (i == s - 1) return e;
                var n = i / (s - 1);
                return {
                    dx: t.dx == e.dx ? t.dx : l(t.dx, e.dx, n, e.acceleration),
                    dy: t.dy == e.dy ? t.dy : l(t.dy, e.dy, n, e.acceleration),
                    opacity: t.opacity == e.opacity ? t.opacity : l(t.opacity, e.opacity, n, e.acceleration),
                    rotate: t.rotate == e.rotate ? t.rotate : l(t.rotate, e.rotate, n, e.acceleration),
                    scale: t.scale == e.scale ? t.scale : l(t.scale, e.scale, n, e.acceleration)
                };
            }
            function l(t, e, i, s) {
                return t + (e - t) * (s && "none" != s ? "ease-in" == s ? i * i : "ease-out" == s ? i * (2 - i) : i < .5 ? i * i * 2 : 2 * i * (2 - i) - 1 : i);
            }
        },
        destroy: function() {
            this.$el.off(i.animationIterationJS, this.onAnimationIteration), this.$el.off(i.animationEndJS, this.onAnimationEnd), 
            this.$el[0].style[i.animationJS] = "", this.$el[0].style[i.transformJS] = "", this.$el[0].style.opacity = "", 
            this.$el.removeClass("force3d"), this.keyframesStyle && $(this.keyframesStyle).remove(), this.reversed = !1, 
            this.active = !1;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.ServicePage = Backbone.View.extend({
        TEMPLATES: {
            404: "template-common-404",
            "mag-suspended": "template-common-mag-suspended",
            "user-suspended": "template-common-user-suspended",
            "domain-error": "template-common-domain-errors"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.router = this.router || t.homepageRouter || t.collectorRouter || t.constructorRouter, 
            this.template = t.templates[this.TEMPLATES[this.type]], this.setElement(this.$container);
        },
        render: function() {
            return this.$el.html(this.template(this.templateData)), this.postRenderTasks(), this;
        },
        postRenderTasks: function() {
            switch (this.type) {
              case "domain-error":
                _.delay(_.bind(function() {
                    this.$(".domain-errors").addClass("show-elements");
                }, this), 1e3);
            }
        }
    });
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    t.buttonutils = {
        STYLE_PREFIXES: {
            viewer: [ ".rmwidget.widget-button .common-button" ],
            viewerCurrentLink: [ ".maglink.current .widget-button .common-button" ],
            constructor: [ ".block.button .common-button" ]
        },
        generateIndividualStyleCSS: function(t) {
            var e = this.STYLE_PREFIXES[t.env], i = t.model, s = i.tp, n = this, a = function(a) {
                a = a || "default";
                var o = {
                    default: "",
                    hover: "hovered",
                    current: "current"
                }, r = {
                    default: "",
                    hover: "hover-",
                    current: "current-"
                }, l = _.isUndefined(o[a]) ? o.default : o[a], c = _.isUndefined(r[a]) ? r.default : r[a], d = _.map(e, function(t) {
                    return t + '[data-id="' + i._id + '"]' + (l ? "." + l : "");
                }).join(",\n") + " {\n";
                return d += n.generateStylesStr({
                    model: i,
                    attrPrefix: c,
                    indentation: !0,
                    lineBreaks: !0
                }), d += "}\n\n", "viewer" === t.env && ("current" === a && (d += n.STYLE_PREFIXES.viewerCurrentLink + '[data-id="' + i._id + '"] {\n', 
                d += n.generateStylesStr({
                    model: i,
                    attrPrefix: c,
                    indentation: !0,
                    lineBreaks: !0
                }), d += "}\n\n"), "icon" !== s && "text_and_icon" !== s || (d += _.map(e, function(t) {
                    return t + '[data-id="' + i._id + '"]' + (l ? "." + l : "") + " .icon";
                }).join(",\n") + " {\n", d += '\t background-image: url("' + (Modernizr.retina ? i[c + "icon_raster2xUrl"] : i[c + "icon_rasterUrl"]) + '");\n', 
                d += "}\n\n")), d;
            }, o = a("default");
            _.find(_.keys(i), function(t) {
                return /^current/.test(t);
            }) && (o += a("current")), o += a("hover");
            var r = "individual_button_style_" + i._id + "_" + t.env;
            $("#" + r).remove();
            var l = document.createElement("style");
            l.type = "text/css", l.id = r, l.className = "button_styles", l.appendChild(document.createTextNode(o)), 
            document.getElementsByTagName("head")[0].appendChild(l);
        },
        generateStylesStr: function(e) {
            var i = "", s = e.model, n = e.indentation ? "\t" : "", a = ";" + (e.lineBreaks ? "\n" : ""), o = e.attrPrefix || "";
            return i += n + "background-color: " + t.utils.getRGBA(r("background-color"), r("background-color-opacity") / 100) + a, 
            i += n + "border-radius: " + l(r("border-radius")) + a, i += n + "border-width: " + l(r("border-width")) + a, 
            i += n + "border-color: " + t.utils.getRGBA(r("border-color"), r("border-color-opacity") / 100) + a, 
            i += n + "font-family: " + r("font-family") + a, i += n + "font-weight: " + r("font-weight") + a, i += n + "font-style: " + r("font-style") + a, 
            i += n + "color: " + t.utils.getRGBA(r("color"), r("color-opacity") / 100) + a, i += n + "font-size: " + l(r("font-size")) + a, 
            i += n + "letter-spacing: " + l(r("letter-spacing")) + a;
            function r(t) {
                var e = s[o + t];
                return ("inherit" === e && o || void 0 === e) && (e = s[t]), "border-color" === t && "hover-" === o ? 0 == s["hover-border-width"] && (e = s["border-color"]) : "border-color" === t && "current-" !== o && 0 == s["border-width"] && (e = s["hover-border-color"]), 
                "border-color-opacity" === t && "hover-" === o ? 0 == s["hover-border-width"] && (e = s["border-color-opacity"]) : "border-color-opacity" === t && 0 == s["border-width"] && (e = s["hover-border-color-opacity"]), 
                e;
            }
            function l(t) {
                return t + (/px/i.test(t) ? "" : "px");
            }
        },
        destroyIndividualStyleCSS: function(t) {
            var e = "individual_button_style_" + t.model._id + "_" + t.env;
            $("#" + e).remove();
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.GiftView = Backbone.View.extend({
        MONTH_PRICE: 20,
        YEAR_PRICE: 192,
        template: t.templates["template-common-gift"],
        events: {
            "click .send-button": "onSendButtonClick",
            "click .back-button": "onBackButtonClick",
            "click .period-selector .period": "onPeriodClick",
            "click .card-switcher": "onSwitchCardClick",
            "input .card-wrapper.new-card .card-date input": "onCardExpChange",
            "input .card-wrapper.new-card .card-cvc input": "onCardCvcChange",
            "input input": "onInputChange",
            "focus input": "clearAllErrors"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.stripe.setPublishableKey(t.constants.stripe_live ? t.constants.STRIPE_LIVE_PUBLIC_KEY : t.constants.STRIPE_TEST_PUBLIC_KEY), 
            this.Model = Backbone.Model.extend({
                url: "/api/stripe/gift/create"
            }), this.me = this.router && this.router.me;
        },
        render: function() {
            var t = null;
            this.getCustomerData(function(e, i) {
                !e && i && (t = i.sources && i.sources.data && i.sources.data[0]), this.$el.html(this.template({
                    month_price: this.MONTH_PRICE,
                    year_price: this.YEAR_PRICE,
                    existing_card: t
                })), this.datePicker = new this.Pikaday({
                    field: this.$(".field-wrapper.send input")[0],
                    trigger: this.$(".field-wrapper.send .formated-date")[0],
                    position: "top",
                    defaultDate: new Date(),
                    setDefaultDate: !0,
                    minDate: new Date(),
                    maxDate: new Date(2016, 0, 31),
                    onSelect: this.updateFormatedDate,
                    numberOfMonths: 1
                }), this.updateFormatedDate(new Date()), this.messageAutoResize = this.$(".field-wrapper.message textarea").RMAutoResizeTextArea({
                    maxHeight: 312,
                    maxVisibleHeight: 156,
                    $scroll: this.$(".field-wrapper.message .description-scroll"),
                    onChange: _.bind(function(t) {
                        this.$(".field-wrapper.message .counter").text(200 - t.length);
                    }, this)
                }).data("autoresize"), this.$(".card-wrapper.new-card .card-number input").cardNumberFormatter(), Modernizr.isdesktop || FastClick.attach(this.$el[0]), 
                this.clearAllErrors(), this.recalcSendButtonState(), this.delegateEvents();
            }.bind(this));
        },
        getCustomerData: function(t) {
            if (!(this.router && this.router.me && this.router.me.get("stripe"))) return t(null);
            var e = !0, i = $.ajax({
                url: "/api/stripe/customer",
                method: "GET",
                success: function(e) {
                    t(null, e);
                },
                error: function(e) {
                    t(e);
                },
                complete: function() {
                    e = !1;
                }
            });
            setTimeout(function() {
                if (e) return i && i.abort(), t(null);
            }, 7e3);
        },
        updateFormatedDate: function(t) {
            var e = this.getFormatedDate(t), i = this.getFormatedDate(new Date());
            this.$(".field-wrapper.send .formated-date").text((e == i ? "Today — " : "") + this.getFormatedDate(t));
        },
        getFormatedDate: function(t) {
            var e = t.getDate(), i = t.getMonth(), s = t.getFullYear();
            return e + " " + [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ][i] + ", " + s;
        },
        onPeriodClick: function(t) {
            var e = $(t.currentTarget);
            e.addClass("active").siblings().removeClass("active");
            var i = e.hasClass("month") ? this.MONTH_PRICE : this.YEAR_PRICE;
            this.$(".bottom-block .charge-sum span").text("$" + i);
        },
        onSwitchCardClick: function(t) {
            var e = $(t.currentTarget).attr("data-value");
            this.$(".card-wrapper." + e).removeClass("hidden").siblings(".card-wrapper").addClass("hidden"), this.clearAllErrors(), 
            this.recalcSendButtonState();
        },
        clearAllErrors: function() {
            this.$(".bottom-block").removeClass("show-error"), this.$(".field-wrapper").removeClass("show-error");
        },
        showStripeError: function(t) {
            this.$(".bottom-block").find(".error").text(t), this.$(".bottom-block").addClass("show-error");
        },
        onInputChange: function() {
            this.clearAllErrors(), this.recalcSendButtonState();
        },
        recalcSendButtonState: function() {
            var t = this.getFormData();
            this.$(".bottom-block").toggleClass("inactive", !!t.hasErrors);
        },
        onBackButtonClick: function() {
            this.$(".form-wrapper").removeClass("invisible"), this.$(".congrats-wrapper").addClass("invisible"), 
            this.$(".field-wrapper.email input").val(""), this.recalcSendButtonState();
        },
        onSendButtonClick: function() {
            this.clearAllErrors();
            var t = new this.Model(), e = this.getFormData();
            if (e.hasErrors) return e.$errorFields.addClass("show-error"), this.$(".bottom-block").find(".error").text("PLEASE CHECK THE FIELDS ABOVE MARKED WITH RED"), 
            void this.$(".bottom-block").addClass("show-error");
            this.$(".bottom-block .send-button").addClass("show-loader"), this.$(".charging-overlay").show(), this.$el.on("keydown", function(t) {
                t.stopPropagation(), t.preventDefault();
            });
            var i = {
                success: function(t) {
                    var i, n;
                    this.$(".form-wrapper").addClass("invisible"), this.$(".congrats-wrapper").removeClass("invisible"), 
                    this.$(".congrats-wrapper .subscription .caption").html("1 " + e.period.capitalize() + " of<br>" + t.get("plan_name")), 
                    this.$(".congrats-wrapper .subscription .price").text("$" + Math.round(t.get("amount") / 100)), this.$(".congrats-wrapper .order-info .info-email").text(t.get("deliver_email")), 
                    this.$(".congrats-wrapper .order-info .info-date").text((i = t.get("deliver_at"), [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][(n = i.split("-"))[1] - 1] + " " + parseInt(n[2]) + ", " + parseInt(n[0]))), 
                    this.$(".congrats-wrapper .order-info .info-code").text(t.get("code")), Modernizr.isphone && this.router && this.router.mag && this.router.mag.setScrollPosition({
                        delta: this.$(".back-button").offset().top - this.$(".send-button").offset().top,
                        animate: !0
                    }), this.router && this.router.analytics && this.router.analytics.sendEvent("Gift Code Purchase", "superpublisher_" + e.period + "ly"), 
                    s();
                }.bind(this),
                error: function(t, e) {
                    this.showStripeError(e.responseText), s();
                }.bind(this)
            }, s = function() {
                this.$(".bottom-block .send-button").removeClass("show-loader"), this.$(".charging-overlay").hide(), 
                this.$el.off("keydown");
            }.bind(this), n = _.pick(e, "plan_id", "deliver_at", "deliver_message", "deliver_email", "from_name");
            _.isEmpty(e.card) ? t.save(n, i) : this.stripe.card.createToken(e.card, function(e, a) {
                a.error ? (this.showStripeError(a.error && a.error.message || "Sorry, some problems with your card."), 
                s()) : (n.card_token = a.id, t.save(n, i));
            }.bind(this));
        },
        getFormData: function() {
            var e = this.$(".period-selector .period.active"), i = this.$(".field-wrapper.email"), s = this.$(".field-wrapper.from"), n = this.$(".field-wrapper.message"), a = this.$(".field-wrapper.send"), o = this.$(".card-wrapper:not(.hidden)"), r = this.$(".card-wrapper.new-card .field-wrapper.card-name"), l = this.$(".card-wrapper.new-card .field-wrapper.card-number"), c = this.$(".card-wrapper.new-card .field-wrapper.card-date"), d = this.$(".card-wrapper.new-card .field-wrapper.card-cvc"), h = new Date(a.find("input").val()), p = h.getDate(), u = h.getMonth() + 1, g = h.getFullYear(), m = {
                plan_id: e.attr("data-plan"),
                deliver_email: $.trim(i.find("input").val()),
                from_name: $.trim(s.find("input").val()),
                deliver_message: $.trim(n.find("textarea").val()),
                deliver_at: g + "-" + (u < 10 ? "0" : "") + u + "-" + (p < 10 ? "0" : "") + p,
                useExistingCard: o.hasClass("existing-card"),
                period: e.hasClass("month") ? "month" : "year"
            }, f = $();
            if (t.utils.isValidEmail(m.deliver_email) || (f = f.add(i)), !m.useExistingCard) {
                var v = {}, _ = $.trim(r.find("input").val()), w = l.find("input").val().replace(/\s/g, ""), y = c.find("input").val().replace(/\s/g, ""), b = d.find("input").val().replace(/\s/g, "");
                "" == $.trim(_) ? f = f.add(r) : v.name = _, /^\d{16,16}$/.test(w) ? v.number = w : f = f.add(l), /^(0[1-9]|1[0-2])(\/|\\)(1[6-9]|[2-9][0-9])$/.test(y) || "12/15" == y ? (v.exp_month = parseInt(y.substr(0, 2), 10), 
                v.exp_year = 2e3 + parseInt(y.substr(3, 2), 10)) : f = f.add(c), /^\d{3,4}$/.test(b) ? v.cvc = b : f = f.add(d);
            }
            return f.length ? (m.hasErrors = !0, m.$errorFields = f) : m.card = v, m;
        },
        onCardExpChange: function(t) {
            var e, i;
            e = $(t.currentTarget), /[^\d\/]/g.test(e.val()) && e.val(e.val().replace(/[^\d\/]/g, "")), /\/\//g.test(e.val()) && e.val(e.val().replace(/\/\//g, "/")), 
            i = e.val().replace(/\D/g, ""), this.prev_exp_digits && i.length > this.prev_exp_digits.length && i.length < 6 && (e.val(i.replace(/^(\d{2})(.*)$/, "$1/$2")), 
            /^\d\d\/$/g.test(e.val()) && _.defer(function() {
                e.setCursorPos(3);
            })), this.prev_exp_digits = i;
        },
        onCardCvcChange: function(t) {
            var e = $(t.currentTarget), i = e.val();
            /\D/g.test(i) && e.val(i.replace(/\D/g, ""));
        }
    });
}(RM), function() {
    "use strict";
    var t = "undefined" != typeof require && "undefined" != typeof process, e = this._;
    if (void 0 === e) {
        if (!t || e) throw new Error("shareutils requires underscore, see http://underscorejs.org");
        e = require("underscore");
    }
    var i = null;
    if (t) {
        var s = require("path").dirname(require.main.filename);
        i = require(s + "/tools.coffee");
    }
    var n = {
        defaultDescription: "Built with Readymag—a tool to design anything on the web.",
        maxTweetLen: 116,
        addOrigin: function(e, s) {
            return t ? i.addOrigin.apply(this, arguments) : e ? s && -1 == e.indexOf("://") ? s + e : e : "";
        },
        addFilenameComponent: function(e, s) {
            return t ? i.addFilenameComponent.apply(this, arguments) : RM.utils.addFilenameComponent.apply(this, arguments);
        },
        getPageScreenshot: function(e, i, s) {
            s = s || {};
            var n = t ? s.host : window.location.protocol + "//" + window.location.host, a = i && i.screenshot;
            return a ? this.addOrigin(this.addFilenameComponent(a, 1024), n) : "";
        },
        _formatTweet: function(t) {
            var e = t.prefix + t.val + t.suffix;
            if (t.minLength = void 0 == t.minLength ? 1 : t.minLength, e.length > n.maxTweetLen) {
                var i = Math.max(t.val.length - (e.length - n.maxTweetLen + 1), t.minLength);
                e = t.prefix + t.val.substring(0, i) + "…" + t.suffix;
            }
            return e;
        },
        getDefaultShare: function(t, i, s) {
            if (s = s || {}, e.isEmpty(i) || !e.isObject(i)) return {};
            var a = i.emptyTitle ? "" : i.title, o = "", r = i.description || (s.customDomain ? "" : n.defaultDescription), l = "";
            s.customDomain ? o = s.forProject ? a || "Project" : (a ? a + " — " : "") + (t.title || "Page " + t.num) : (s.forProject || (o = (t.title ? "‘" + t.title + "’" : "Page " + t.num) + " from "), 
            o += (a ? "‘" + a + "’" : "Project") + " by " + i.user.name, s.forProject && i.description && (o += " | Readymag")), 
            l = s.forProject ? n.getPageScreenshot(i, e.findWhere(i.pages, {
                num: 1
            }), s) : n.getPageScreenshot(i, t, s);
            var c = "";
            return s.customDomain ? s.forProject ? c = a ? n._formatTweet({
                prefix: "",
                val: a,
                suffix: ""
            }) : "Project" : a || t.title ? !a && t.title ? c = n._formatTweet({
                prefix: "",
                val: t.title,
                suffix: ""
            }) : a && !t.title ? c = n._formatTweet({
                prefix: "",
                val: a,
                suffix: " — Page " + t.num
            }) : a && t.title && (c = n._formatTweet({
                prefix: "",
                val: a,
                suffix: " — " + t.title,
                minLength: 20
            })).length > n.maxTweetLen && (c = t.title).length > n.maxTweetLen && (c = n._formatTweet({
                prefix: "",
                val: t.title,
                suffix: ""
            })) : c = "Page " + t.num : s.forProject ? c = a ? n._formatTweet({
                prefix: "‘",
                val: a,
                suffix: "’ by " + i.user.name
            }) : "Project by " + i.user.name : a || t.title ? !a && t.title ? c = n._formatTweet({
                prefix: "‘",
                val: t.title,
                suffix: "’ from Project by " + i.user.name
            }) : a && !t.title ? c = n._formatTweet({
                prefix: "Page " + t.num + " from ‘",
                val: a,
                suffix: "’ by " + i.user.name
            }) : a && t.title && (c = n._formatTweet({
                prefix: "‘" + t.title + "’ from ‘",
                val: a,
                suffix: "’ by " + i.user.name,
                minLength: 20
            })).length > n.maxTweetLen && (c = "‘" + t.title + "’ by " + i.user.name).length > n.maxTweetLen && (c = n._formatTweet({
                prefix: "‘",
                val: t.title,
                suffix: "’ by " + i.user.name
            })) : c = "Page " + t.num + " from Project by " + i.user.name, {
                image: l,
                title: o || "",
                description: r || "",
                tweet: c
            };
        },
        getFinalShare: function(t, i, s) {
            if (s = s || {}, e.isEmpty(i) || !e.isObject(i)) return {};
            var a = n.getDefaultShare(t, i, s), o = i.master_share_pid && e.find(i.pages, function(t) {
                return t._id.toString() == i.master_share_pid.toString();
            }), r = (t = s.forProject ? e.findWhere(i.pages, {
                num: 1
            }) : t, o || t), l = r.custom_shares;
            return e.isEmpty(l) || (a.title = l.title || "", a.description = l.description || "", a.tweet = l.tweet || "", 
            l.image ? a.image = l.image : r.screenshot ? a.image = n.getPageScreenshot(i, r, s) : a.image = ""), 
            a;
        },
        getDefaultSEO: function(t, i, s) {
            if (s = s || {}, e.isEmpty(i) || !e.isObject(i)) return {};
            var a = i.emptyTitle ? "" : i.title, o = "", r = "";
            return s.customDomain ? t && t.num > 1 ? o = (a ? a + " — " : "") + (t.title || "Page " + t.num) : (o = a || "Project", 
            r = i.description || "") : (t && t.num > 1 ? o = (t.title ? "‘" + t.title + "’" : "Page " + t.num) + " from " : r = i.description || n.defaultDescription, 
            o += (a ? "‘" + a + "’" : "Project") + " by " + i.user.name + " | Readymag"), {
                title: o || "",
                description: r || "",
                keywords: ""
            };
        },
        getFinalSEO: function(t, i, s) {
            if (s = s || {}, e.isEmpty(i) || !e.isObject(i)) return {};
            var a = n.getDefaultSEO(t, i, s);
            return a.title = t.seo && t.seo.title || a.title, a.description = t.seo && t.seo.description || a.description, 
            a.keywords = t.seo && t.seo.keywords || a.keywords, a;
        },
        _openShareWindow: function(t, e, i) {
            e = e || 626, i = i || 436, window.open(t, "sharer", "width=" + e + ",height=" + i + ",toolbar=0,status=0");
        },
        share: function(t) {
            var e, i = n.getFinalShare(t.page, t.mag, {
                forProject: t.forProject,
                customDomain: t.customDomain
            }), s = t.mag.emptyTitle ? "" : t.mag.title;
            if (/^https?\:\/\//i.test(t.host) || (t.host = "http://" + t.host), /\/$/i.test(t.host) || (t.host += "/"), 
            e = t.forProject ? t.host + (t.customDomain && !t.customDomainProfile ? "" : t.mag.num_id + "/") : t.host + "p" + t.page.num_id + "/", 
            t.publishedVersion) {
                var a;
                if ("facebook" == t.tp && n._openShareWindow("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e)), 
                "twitter" == t.tp) a = s ? n._formatTweet({
                    prefix: "I’ve just published a project ‘",
                    val: s,
                    suffix: "’"
                }) : "I’ve just published a Project", n._openShareWindow("https://twitter.com/share?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(a));
                if ("email" == t.tp) {
                    var o = encodeURIComponent((t.mag.is_private ? "private " : "") + (s ? "project ‘" + s + "’" : "Project")), r = "mailto:", l = "Check out my " + o, c = "Hey, check out my new " + o + ": " + e + (t.mag.is_private ? encodeURIComponent("\n") + "Password: " + t.mag.pass : "");
                    window.location.href = r + "?subject=" + l + "&body=" + c;
                }
            } else {
                if ("facebook" == t.tp && n._openShareWindow("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e)), 
                "twitter" == t.tp && n._openShareWindow("https://twitter.com/share?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(i.tweet)), 
                "gplus" == t.tp && n._openShareWindow("https://plus.google.com/share?url=" + encodeURIComponent(e)), 
                "pinterest" == t.tp && n._openShareWindow("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(e) + "&media=" + encodeURIComponent(i.image) + "&description=" + encodeURIComponent(i.title)), 
                "linkedin" == t.tp && n._openShareWindow("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(e) + "&title=" + encodeURIComponent(i.title) + (i.description ? "&summary=" + encodeURIComponent(i.description) : ""), 552, 460), 
                "email" == t.tp) {
                    r = "mailto:", c = (l = "Check out " + encodeURIComponent(i.title)) + encodeURIComponent("\n\n") + e + (t.mag.is_private ? encodeURIComponent("\n") + "Password: " + t.mag.pass : "");
                    window.location.href = r + "?subject=" + l + "&body=" + c;
                }
                if ("report" == t.tp) {
                    r = "mailto:" + RM.constants.SUPPORT_MAIL, l = "Report " + encodeURIComponent(e), c = encodeURIComponent("Please tell us why are you reporting this: ");
                    window.location.href = r + "?subject=" + l + "&body=" + c;
                }
            }
            if ("report" != t.tp) {
                var d = t.source + " / " + t.tp + " (" + (t.forProject ? "project" : "page") + ") / " + i.title + " (" + e + ")";
                t.analytics && t.analytics.sendEvent("Share", d);
            }
        }
    };
    "undefined" != typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = n) : this.RM ? this.RM.shareutils = n : this.shareutils = n;
}.call(this), function(t) {
    var e = window.performance || {}, i = Date.now ? Date.now() : +new Date(), s = [], n = {};
    e.now || (e.now = e.webkitNow || e.mozNow || e.msNow || function() {
        return (Date.now ? Date.now() : +new Date()) - i;
    }), e.mark || (e.mark = e.webkitMark || function(t) {
        var i = {
            name: t,
            entryType: "mark",
            startTime: e.now(),
            duration: 0
        };
        s.push(i), n[t] = i;
    }), e.measure || (e.measure = e.webkitMeasure || function(t, e, i) {
        e = n[e].startTime, i = n[i].startTime, s.push({
            name: t,
            entryType: "measure",
            startTime: e,
            duration: i - e
        });
    }), e.getEntriesByName || (e.getEntriesByName = e.webkitGetEntriesByName || function(t) {
        return function(t, e) {
            for (var i = 0, n = s.length, a = []; i < n; i++) s[i][t] == e && a.push(s[i]);
            return a;
        }("name", t);
    }), window.performance = e, t.performance = {
        DUMP: !0,
        IS_ENABLED: t.utils && t.utils.queryUrlGetParam("performance_debug"),
        LOG_SEND_TIMEOUT: 15e3,
        MAX_PACKS_LOGGED: 15,
        _paramsCache: {},
        _logSent: !1,
        _widgetPackTimings: [],
        isEnabled: function() {
            return this.IS_ENABLED && window.performance;
        },
        getWidgetPackId: function(t) {
            return "widget pack " + t;
        },
        widgetPackStart: function(t, e, i, s) {
            if (this.isEnabled()) {
                var n = _.without(_.unique(_.map(e, function(t) {
                    return t.screenIndex;
                })), void 0), a = {
                    pageNumber: i.num,
                    screenIndex: n.length > 1 ? n.join(", ") : n[0],
                    pack: e,
                    magNumber: s
                };
                this.start(this.getWidgetPackId(t), a);
            }
        },
        start: function(t) {
            this.isEnabled() && (window.performance.mark("start " + t), this.cacheParams(t, Array.prototype.slice.call(arguments, 1)));
        },
        widgetPackEnd: function(e, i) {
            if (this.isEnabled()) {
                var s = this.end(this.getWidgetPackId(e), i) || {}, n = s.measures, a = s.params || {}, o = t.utils.queryUrlGetParam("log_packs");
                if (-1 !== (o = o && o.split(",") || []).indexOf(e.toString()) && n && n.length) {
                    var r = {
                        startedAt: Math.round(n[0].startTime),
                        endedAt: Math.round(n[0].startTime + n[0].duration),
                        duration: Math.round(n[0].duration),
                        packNumber: e,
                        pageNumber: a.pageNumber,
                        packLength: a.pack && a.pack.length,
                        magNumber: a.magNumber
                    };
                    this.log(r);
                }
            }
        },
        end: function(t, e) {
            var i;
            if (this.isEnabled()) return window.performance.mark("end " + t), this.cacheParams(t, Array.prototype.slice.call(arguments, 2)), 
            e && (i = this.measure(t)), i;
        },
        cacheParams: function(t, e) {
            e && e.length && (this._paramsCache[t] = e.length > 1 ? e : e[0]);
        },
        measure: function(t) {
            if (this.isEnabled()) {
                var e, i, s = "start " + t, n = "end " + t, a = "timing " + t;
                return window.performance.getEntriesByName(s).length && window.performance.getEntriesByName(n).length && (window.performance.measure(a, s, n), 
                i = this._paramsCache[t], delete this._paramsCache[t], e = window.performance.getEntriesByName(a), this.DUMP && e.length && (i && i.pack && (i.pack = _.map(i.pack, function(t) {
                    return t.$el[0];
                })), console.log(t, "started at", Math.round(e[0].startTime), "ended at", Math.round(e[0].startTime + e[0].duration), "duration", Math.round(e[0].duration), i)), 
                this.cacheWidgetPackTimings(t, e, i)), {
                    measures: e,
                    params: i
                };
            }
        },
        now: function() {
            return window.performance && window.performance.now();
        },
        setupLog: function() {
            if (this.isEnabled() && t.utils.queryUrlGetParam("performance_log")) {
                var e = function(e) {
                    if (!this._logSent) {
                        var i = {
                            magNumber: e || t.viewerRouter.mag.num_id,
                            timings: this._widgetPackTimings
                        };
                        this.log(i);
                    }
                    this._logSent = !0;
                }.bind(this);
                Backbone.listenTo(Backbone, "widgetsQueue:empty", e), setTimeout(e, this.LOG_SEND_TIMEOUT);
            }
        },
        cacheWidgetPackTimings: function(t, e, i) {
            var s = -1 !== t.indexOf("widget pack") && parseInt(t.replace("widget pack", ""), 10);
            i && s && s <= this.MAX_PACKS_LOGGED && !this._logSent && this._widgetPackTimings.push({
                startedAt: Math.round(e[0].startTime),
                endedAt: Math.round(e[0].startTime + e[0].duration),
                duration: Math.round(e[0].duration),
                packNumber: s,
                pageNumber: i.pageNumber,
                packLength: i.pack && i.pack.length
            });
        },
        log: function(t) {
            $.ajax({
                url: "/api/rm-timings",
                type: "post",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(t)
            });
        }
    }, t.performance.setupLog();
}(RM), function() {
    "use strict";
    var t = "undefined" != typeof require, e = this._;
    if (void 0 === e) {
        if (!t) throw new Error("global widget requires underscore, see http://underscorejs.org");
        e = require("underscore");
    }
    var i = {
        GLOBAL_UNIQUE_KEYS: [ "hidden", "z" ],
        GLOBAL_UNIQUE_KEY_PREFIX: "_",
        FADE_DURATION: 200,
        getUniqueValue: function(t, i, s) {
            var n = i[this.GLOBAL_UNIQUE_KEY_PREFIX + t] || [], a = e.findWhere(n, {
                pid: s
            });
            return void 0 === (a = a || e.findWhere(n, {
                pid: "default"
            }) || {}).value ? i[t] : a.value;
        },
        isGlobalKey: function(t) {
            return -1 !== this.GLOBAL_UNIQUE_KEYS.indexOf(t);
        },
        getGlobalPrefixedKey: function(t) {
            return this.isGlobalKey(t) ? this.GLOBAL_UNIQUE_KEY_PREFIX + t : null;
        },
        fillUniqueAttributeSets: function(t, i, s) {
            var n = {};
            return i.is_global ? (e(this.GLOBAL_UNIQUE_KEYS).each(function(a) {
                if (e.has(t, a) && void 0 !== t[a]) {
                    var o = i[this.GLOBAL_UNIQUE_KEY_PREFIX + a] || [], r = e.findWhere(o, {
                        pid: s
                    }), l = e.findWhere(o, {
                        pid: "default"
                    });
                    r ? r.value = t[a] : o.push({
                        pid: s,
                        value: t[a]
                    }), l || o.push({
                        pid: "default",
                        value: void 0 === i[a] ? null : i[a]
                    }), n[this.GLOBAL_UNIQUE_KEY_PREFIX + a] = o;
                }
            }.bind(this)), n) : t;
        },
        ensurePageDefRecord: function(t) {
            e(this.GLOBAL_UNIQUE_KEYS).each(function(i) {
                var s = t[this.GLOBAL_UNIQUE_KEY_PREFIX + i] || [];
                e.findWhere(s, {
                    pid: "default"
                }) || s.push({
                    pid: "default",
                    value: void 0 === t[i] ? null : t[i]
                }), t[this.GLOBAL_UNIQUE_KEY_PREFIX + i] = s;
            }.bind(this));
        },
        fillUniqueValues: function(t, i, s) {
            s = s || {}, e.each(t, function(n, a) {
                if (e.contains(this.GLOBAL_UNIQUE_KEYS, a) && (!s.props || e.contains(s.props, a))) {
                    var o = this.getUniqueValue(a, t, i);
                    t[a] = void 0 === o ? n : o;
                }
            }, this);
        },
        show: function(t, i) {
            i = Boolean(i), t.$el.toggleClass("no-transition", i), t.$el.addClass("above-all-fade"), t.$el.hasClass("fade-in") && !i || (t.cancelHide && t.cancelHide(), 
            t.show(), e.delay(function() {
                t.$el.addClass("fade-in");
            }, 50));
        },
        hide: function(t, e) {
            return e = Boolean(e), t.$el.addClass("above-all-fade"), new window.Promise(function(i) {
                t.$el.hasClass("fade-in") || e ? (t.$el.toggleClass("no-transition", e), t.$el.removeClass("fade-in"), 
                e ? (t.hide(), i()) : t.cancelHide = RM.utils.waitForTransitionEnd(t.$el, RM.globalwidgets.FADE_DURATION, "opacity", function() {
                    t.hide(), i();
                })) : i();
            });
        }
    };
    "undefined" != typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = i) : this.RM ? this.RM.globalwidgets = i : this.globalwidgets = i;
}.call(this), function(t, e) {
    t.fn.RMSwipe = function(e) {
        var i = function(t, e) {
            this.options = _.clone(t), this.$swipes = e, _.defaults(this.options, {
                actionTreshold: 25,
                rubberBand: !0,
                rubberBandForce: 1 / 1.55,
                tolerance: 5,
                disableOnScaled: !0,
                autoAnimate: !0,
                immediateCallback: !1,
                maxTransitionSpeed: 400,
                minTransitionSpeed: 100,
                stopOnItems: [ "input", "textarea", ".no-rmswipe" ]
            });
        };
        i.prototype = {
            initialize: function() {
                _.bindAll(this), this.$swipes.on("touchstart", this.onTouchStart), this.$swipes.on("touchmove", this.onTouchMove), 
                this.$swipes.on("touchend touchcancel", this.onTouchEnd);
            },
            destroy: function() {
                return this.$swipes && (this.$swipes.off("touchstart", this.onTouchStart), this.$swipes.off("touchmove", this.onTouchMove), 
                this.$swipes.off("touchend touchcancel", this.onTouchEnd), this.$swipes.data("swipe", null)), this.$swipes;
            },
            onTouchStart: function(e) {
                var i = (e = e.originalEvent).touches, s = this.options, n = this, a = window.innerWidth != document.documentElement.clientWidth;
                if (s.stopOnItems && s.stopOnItems.length) {
                    var o = t(e.target).closest(s.stopOnItems.join(", "));
                    if (o.length && this.$swipes.find(o).length) return;
                }
                if (!this.animating && !this.data && !(1 != i.length || (e.scale && 1 !== e.scale || a) && s.disableOnScaled)) {
                    this.data = {}, this.data.constraints = s.getCurrentConstraints(t(e.target)), this.data.id = i[0].identifier, 
                    this.data.clientX = i[0].clientX, this.data.clientY = i[0].clientY, this.data.lastTime = +new Date(), 
                    this.data.shift = 0, this.data.velocity = 0, this.data.$moveItems = this.data.constraints.$moveItems || this.$swipes, 
                    this.data.$moveItems = this.data.$moveItems.filter(function() {
                        return 3 != this.nodeType;
                    }), this.data.$referenceItem = this.data.constraints.$referenceItem || this.data.$moveItems.last(), 
                    this.data.$referenceItem.length || (this.data.$referenceItem = this.data.$moveItems.last(), console.log("No reference object found, use substitution: ", this.data.constraints, t(e.target), this.data.$moveItems, this.$swipes)), 
                    this.data.translate = [], this.data.oldStyle = [], this.data.$moveItems.each(function() {
                        var e = t(this);
                        n.data.translate.push(RM.utils.getCurrentTranslate(this)), n.data.oldStyle.push(e.attr("style"));
                    }), this.data.isTargetScrollable = !(!s.$scrollElements || !t(e.target).closest(s.$scrollElements).length);
                    var r = this.data.$referenceItem[0].getBoundingClientRect();
                    this.data.targetX = r.left, this.data.targetY = r.top;
                }
            },
            onTouchMove: function(e) {
                var i, s, n = (e = e.originalEvent).touches, a = n[0], o = this.data, r = this.options, l = r.tolerance, c = o && o.constraints, d = this;
                if (!this.animating && o && 1 == n.length && !(e.scale && 1 !== e.scale && r.disableOnScaled || a.identifier != o.id)) {
                    if (!this.started || o.noActionConstraints && !o.isTargetScrollable) {
                        var h = 0, p = "";
                        (s = {
                            up: o.clientY - a.clientY,
                            down: a.clientY - o.clientY,
                            left: o.clientX - a.clientX,
                            right: a.clientX - o.clientX
                        }).up > h && (p = "up", h = s.up), s.down > h && (p = "down", h = s.down), s.left > h && (p = "left", 
                        h = s.left), s.right > h && (p = "right", h = s.right);
                        var u = !1;
                        if (this.started && (u = c.up && s.up > l || c.down && s.down > l || c.left && s.left > l || c.right && s.right > l), 
                        h >= l) if (this.started = !0, c[p] || u) {
                            var g = o.$referenceItem[0].getBoundingClientRect();
                            o.targetX == g.left && o.targetY == g.top || (o.noActionMovement = !0);
                            var m = c.left || c.right ? Math.abs(o.clientX - a.clientX) : 0, f = c.up || c.down ? Math.abs(o.clientY - a.clientY) : 0;
                            o.axis = m > f ? "x" : "y", o.translateInd = "x" == o.axis ? 0 : 1, o.noActionMovement || (o.clientX = a.clientX, 
                            o.clientY = a.clientY, o.$moveItems.addClass("swiping")), o.noActionConstraints = !1, r.onSwipeStart && r.onSwipeStart();
                        } else o.noActionConstraints = !0;
                    }
                    if (this.started && (o.isTargetScrollable && o.noActionConstraints && !o.noActionMovement || e.preventDefault()), 
                    this.started && !o.noActionConstraints && !o.noActionMovement) {
                        "x" == o.axis ? (i = a.clientX - o.clientX) < 0 ? (p = "left", i = -w(-i, c.left)) : i > 0 && (p = "right", 
                        i = w(i, c.right)) : (i = a.clientY - o.clientY) < 0 ? (p = "up", i = -w(-i, c.up)) : i > 0 && (p = "down", 
                        i = w(i, c.down)), o.$moveItems.each(function(e, s) {
                            var n = o.translate[e], a = n[o.translateInd];
                            r.customMoveCheck && !r.customMoveCheck(t(this), i) || (n[o.translateInd] += i), d.applyTransform(this, o.oldStyle[e], n, 0), 
                            n[o.translateInd] = a;
                        });
                        var v = o.shift, _ = Math.abs(v - i) / (+new Date() + 1 - o.lastTime);
                        o.shift = i, o.curDir = p, o.velocity = .8 * _ + .2 * o.velocity;
                    }
                    o.lastTime = +new Date();
                }
                function w(t, e) {
                    return e ? t > e.max ? e.max + (r.rubberBand ? Math.pow(t - e.max, r.rubberBandForce) : 0) : t : 0;
                }
            },
            onTouchEnd: function(e) {
                var i = (e = e.originalEvent).touches, s = this.data, n = this.options, a = s && s.constraints, o = this;
                if (!this.animating && (!i.length || "touchcancel" == e.type) && s) if (this.started) {
                    if (!s.noActionConstraints && !s.noActionMovement) if (a[s.curDir] && !a[s.curDir].noTrigger && Math.abs(s.shift) >= n.actionTreshold) {
                        var r = n.beforeAutoAnimation ? n.beforeAutoAnimation(s.curDir, s.shift) : null, l = r ? r.autoAnimate : n.autoAnimate, c = r ? r.immediateCallback : n.immediateCallback;
                        if (l) {
                            this.animating = !0;
                            var d = Math.abs(Math.abs(s.shift) - a[s.curDir].max) / s.velocity, h = n.getMaxTransitionSpeed ? n.getMaxTransitionSpeed() : n.maxTransitionSpeed, p = Math.max(Math.min(h, d), n.minTransitionSpeed), u = !1;
                            s.$moveItems.each(function(e, i) {
                                if (!n.customMoveCheck || n.customMoveCheck(t(this), s.shift)) {
                                    var r = s.translate[e];
                                    "up" == s.curDir || "left" == s.curDir ? r[s.translateInd] -= a[s.curDir].max : r[s.translateInd] += a[s.curDir].max, 
                                    u || (RM.utils.waitForTransitionEnd(t(this), p + 1e3, "transform", function() {
                                        o.animating = !1, c || n.callback(s.curDir), s.$moveItems.each(function(t, e) {
                                            this.style.cssText = s.oldStyle[t] || " ";
                                        }), s.$moveItems.removeClass("swiping");
                                    }), u = !0), o.applyTransform(this, s.oldStyle[e], r, p);
                                } else this.style.cssText = s.oldStyle[e] || " ";
                            }), c && n.callback(s.curDir);
                        } else s.$moveItems.each(function(t, e) {
                            this.style.cssText = s.oldStyle[t] || " ";
                        }), n.callback(s.curDir), s.$moveItems.removeClass("swiping");
                    } else s.$moveItems.removeClass("swiping"), s.$moveItems.each(function(t, e) {
                        this.style.cssText = s.oldStyle[t] || " ";
                    });
                    this.data = null, this.started = null;
                } else this.data = null;
            },
            applyTransform: function(t, e, i, s) {
                var n = "translateX(" + Math.round(1e5 * i[0]) / 1e5 + "px) translateY(" + Math.round(1e5 * i[1]) / 1e5 + "px) translateZ(0)", a = "transform " + s + "ms ease", o = "", r = "";
                o += "-webkit-transform: " + n + ";", o += "-ms-transform: " + n + ";", o += "transform: " + n + ";", 
                r += "-webkit-transition: -webkit-" + a + ";", r += "transition: " + a + ";", t.style.cssText = e + ";" + o + r;
            }
        };
        var s = t(this), n = new i(e, s);
        return n.initialize(), s.data("swipe", n), this;
    };
}(jQuery), function(t, e) {
    t.fn.RMAutoResizeTextArea = function(e) {
        var i = function(t, e) {
            this.options = _.clone(t), this.$input = e, _.defaults(this.options, {
                maxHeight: 9999,
                maxVisibleHeight: 9999,
                disableMultiline: !1,
                $scroll: null
            }), this.$scroll = this.options.$scroll;
        };
        i.prototype = {
            initialize: function() {
                _.bindAll(this), this.$input.on("input", this.resizeTextArea), this.$input.on("keydown", this.keyDown), 
                this.options.$scroll && (this.$input.on("scroll", this.onScroll), this.$input.bind("mousewheel", this.onMouseWheel), 
                this.$scroll.bind("mousewheel", this.onMouseWheel), this.$scroll.RMDrag({
                    start: this.startScrollDrag,
                    move: this.moveScrollDrag,
                    end: this.stopScrollDrag,
                    silent: !0,
                    preventDefault: !0
                })), this.data = {
                    handle_pos: 0,
                    handle_size: 0,
                    container_size: 0,
                    content_size: 0,
                    scroll_pos: 0,
                    scroll_percent: 0
                };
                var t = "0% 0%";
                try {
                    t = this.$input.css("background-position");
                } catch (t) {}
                var e = t.split(" ");
                this.background_x = parseInt(e[0], 10), this.background_y = parseInt(e[1], 10), this.prevText = this.$input.val(), 
                this.resizeTextArea();
            },
            onMouseWheel: function(t, e) {
                if (this.options.$scroll) {
                    var i = -Math.ceil(.1 * e);
                    if (i) {
                        t.preventDefault(), i > 0 && i < 1 && (i = 1), i < 0 && i > -1 && (i = -1);
                        var s = i + this.$input.scrollTop();
                        this.$input.scrollTop(s);
                    }
                }
            },
            onScroll: function(t) {
                if (this.options.$scroll) {
                    this.data.scroll_pos = this.$input.scrollTop();
                    var e = this.data.content_size - this.data.container_size;
                    this.data.scroll_pos > e && (this.data.scroll_pos = e), this.data.scroll_percent = e > 0 ? this.data.scroll_pos / e : 0, 
                    this.data.handle_pos = Math.ceil(this.data.scroll_percent * (this.data.container_size - this.data.handle_size)), 
                    this.$scroll.css("top", this.data.handle_pos), this.$input.css("background-position", this.background_x + "px " + (this.background_y - this.data.scroll_pos) + "px");
                }
            },
            recalcScroll: function() {
                this.options.$scroll && (this.data.handle_size = this.data.container_size / this.data.content_size, 
                this.data.handle_size = Math.max(Math.min(this.data.handle_size, 1), 0), this.data.handle_size = Math.sqrt(this.data.handle_size), 
                this.data.handle_size = Math.ceil(this.data.handle_size * this.data.container_size), this.data.container_size >= this.data.content_size ? this.$scroll.css("display", "none") : this.$scroll.css("display", "block"), 
                this.$scroll.css("height", this.data.handle_size), this.onScroll());
            },
            startScrollDrag: function(t) {
                this.$scroll.addClass("dragging"), this.oldDeltaY = 0;
            },
            moveScrollDrag: function(t) {
                var e = t.deltaY - this.oldDeltaY, i = (this.data.container_size - this.data.handle_size) / (this.data.content_size - this.data.container_size);
                e < 0 && e > -i && (e = -i), e > 0 && e < i && (e = i);
                var s = (this.data.handle_pos + e) / (this.data.container_size - this.data.handle_size), n = (s = Math.min(Math.max(s, 0), 1)) * (this.data.content_size - this.data.container_size);
                this.$input.scrollTop(n), this.oldDeltaY = t.deltaY;
            },
            stopScrollDrag: function(t) {
                this.$scroll.removeClass("dragging");
            },
            keyDown: function() {
                this.st = this.$input[0].selectionStart, this.ed = this.$input[0].selectionEnd;
            },
            resizeTextArea: function() {
                try {
                    this.$input.css("background-position");
                } catch (t) {
                    return;
                }
                var t = this.$input.val(), e = this.$input.scrollTop();
                if (this.options.disableMultiline && (o = t.split("\n").join("")) != t) return this.$input.val(o), _.defer(_.bind(function() {
                    this.$input[0].selectionStart = this.st, this.$input[0].selectionEnd = this.ed;
                }, this)), void this.resizeTextArea();
                var i = this.calcHeight();
                if (i > this.options.maxHeight) {
                    if (t.length - this.prevText.length == 1) this.$input.val(this.prevText); else {
                        for (var s = 0, n = t.length - 1; s < n; ) {
                            var a = Math.floor((s + n) / 2), o = t.substring(0, a + 1);
                            this.$input.val(o), (i = this.calcHeight()) > this.options.maxHeight ? n = a : s = a + 1;
                        }
                        this.$input.val(t.substring(0, n));
                    }
                    return _.defer(_.bind(function() {
                        this.$input[0].selectionStart = this.st, this.$input[0].selectionEnd = this.ed;
                    }, this)), void this.resizeTextArea();
                }
                i > this.options.maxVisibleHeight ? (this.$input.height(this.options.maxVisibleHeight), this.data.container_size = this.options.maxVisibleHeight, 
                this.data.content_size = i) : (this.$input.height(i), this.data.container_size = i, this.data.content_size = i), 
                this.options.onChange && this.options.onChange(t), this.$input.scrollTop(e), this.prevText = t, this.recalcScroll();
            },
            calcHeight: function() {
                return this.$input.height(0), this.$input.scrollTop("9999"), this.$input.height() + this.$input.scrollTop();
            }
        };
        var s = t(this), n = new i(e, s);
        return n.initialize(), s.data("autoresize", n), this;
    };
}(jQuery), function(t, e) {
    "use strict";
    t.classes.Share = Backbone.View.extend({
        template: t.templates["template-viewer-share"],
        events: {
            "click .buttons-wrapper .button": "share",
            "click .send-report": "share",
            "click .open-embed": "openEmbed",
            "click .close": "hide",
            "click .embed-wrapper .back": "closeEmbed",
            "click .embed-wrapper .embed-code": "selectEmbedCode",
            "keyup .embed-wrapper .embed-code": "onKeyUp",
            "click .type-selector": "onTypeSelectorClick",
            "click .size-selector": "onSizeSelectorClick",
            click: "onClick"
        },
        initialize: function(t) {
            return _.bindAll(this), _.extend(this, t), this;
        },
        render: function() {
            return this.setElement(this.template({
                hasOverlay: Modernizr.isphone
            })), this.$el.appendTo(this.$container), this.selectFullMode(), Modernizr.isphone && (this.shareSwipe = this.$el.RMSwipe({
                minTransitionSpeed: 200,
                maxTransitionSpeed: 400,
                rubberBand: !1,
                beforeAutoAnimation: _.bind(function(t, e) {
                    return {
                        autoAnimate: !0,
                        immediateCallback: !0
                    };
                }, this),
                getCurrentConstraints: _.bind(function(t) {
                    var e = {}, i = this.$el.filter(".share-popup");
                    return e.$referenceItem = i, e.$moveItems = i, e.up = {
                        max: 0,
                        noTrigger: !0
                    }, e.down = {
                        max: i.height()
                    }, e;
                }, this),
                callback: _.bind(function(t) {
                    this.hide();
                }, this)
            }).data("swipe")), this.listenTo(this.mag, "pageChanged", this.onPageChange), this.listenTo(this.mag, "finalPageShown", this.onFinalPageShow), 
            this.listenTo(this.mag, "keypress-" + $.keycodes.esc, this.hide), $("body").on("click", this.hideOnBodyClick), 
            this;
        },
        show: function() {
            return this.shown || (clearTimeout(this.hideTimeout), this.$el.removeClass("hidden"), this.$el.height(), 
            this.$el.addClass("show-popup"), this.$container.addClass("no-hover"), this.shown = !0, this.updateEmbed()), 
            this;
        },
        toggle: function() {
            return this.shown ? this.hide() : this.show();
        },
        hide: function() {
            return this.shown && (this.$el.removeClass("show-popup"), this.$container.removeClass("no-hover"), this.hideTimeout = setTimeout(_.bind(function() {
                this.closeEmbed(), this.$el.addClass("hidden");
            }, this), 400), this.shown = !1), this;
        },
        destroy: function() {
            return clearTimeout(this.hideTimeout), $("body").off("click", this.hideOnBodyClick), this.shareSwipe && this.shareSwipe.destroy(), 
            this.remove();
        },
        hideOnBodyClick: function(t) {
            Modernizr.isphone || $(t.target).closest(this.$container).length || this.hide();
        },
        onPageChange: function(t, e) {
            this.hide();
        },
        onFinalPageShow: function() {
            this.hide();
        },
        onClick: function(t) {
            Modernizr.isphone && $(t.currentTarget).hasClass("share-popup-overlay") && this.hide();
        },
        onKeyUp: function(t) {
            t.stopPropagation();
        },
        openEmbed: function(t) {
            this.router.analytics && this.router.analytics.sendEvent("Embed", "contents (" + this.shareMode + ")"), 
            this.selectEmbedCode(), this.$el.addClass("show-embed");
        },
        updateEmbed: function() {
            var e, i = this.mag.currentPage || this.mag.pages[0], s = this.$(".size-selector").attr("data-selected");
            this.$(".embed-wrapper .embed-code").val(t.classes.Share.getEmbedCode({
                shareMode: this.shareMode,
                cur_page_num_id: i.num_id,
                mag_num_id: this.mag.num_id,
                size: {
                    responsive: "responsive",
                    big: 512,
                    small: 288
                }[s]
            })), e = this.mag.model.getPageScreenshot(256, {
                _id: "page" == this.shareMode ? i._id : this.mag.coverPid
            }), this.currentEmbedSrc !== e && (this.$(".thumb-pic").attr("src", e), this.currentEmbedSrc = e);
        },
        closeEmbed: function(t) {
            this.$el.removeClass("show-embed");
        },
        share: function(e) {
            t.shareutils.share({
                host: (t.common.embedDomainName || window.location.protocol + "//" + window.location.hostname) + "/",
                tp: $(e.currentTarget).attr("data-tp"),
                source: "share panel",
                page: this.mag.currentPage || this.mag.pages[0],
                mag: _.extend(this.mag.model.toJSON(), {
                    user: this.mag.user
                }),
                forProject: "full" == this.shareMode,
                customDomain: !(!t.common.isDomainViewer && !t.common.embedDomainName),
                customDomainProfile: !(!t.common.customDomainProfile && "User" != t.common.embedDomainType),
                analytics: this.router.analytics
            });
        },
        onTypeSelectorClick: function(t) {
            if (Modernizr.isphone) {
                var e = $(t.target);
                e.closest(".type-full").length && this.selectFullMode(), e.closest(".type-page").length && this.selectPageMode();
            } else {
                "page" == (this.$(".type-selector").attr("data-tp") || "page") ? this.selectFullMode() : this.selectPageMode();
            }
        },
        onSizeSelectorClick: function(t) {
            var e, i, s = $(t.currentTarget), n = s.attr("data-selected");
            i = (i = (e = _.map(s.find(".size"), function(t) {
                return $(t).attr("data-size");
            })).indexOf(n) + 1) >= e.length ? 0 : i, s.attr("data-selected", e[i]), this.updateEmbed();
        },
        selectPageMode: function() {
            this.$(".type-selector").attr("data-tp", "page"), this.shareMode = "page", this.updateEmbed();
        },
        selectFullMode: function() {
            this.$(".type-selector").attr("data-tp", "full"), this.shareMode = "full", this.updateEmbed();
        },
        selectEmbedCode: function(t) {
            Modernizr.isdesktop && this.$(".embed-wrapper .embed-code").get(0).setSelectionRange(0, 9999);
        }
    }, {
        getEmbedCode: function(e) {
            var i, s, n, a, o = '<script async src="' + t.constants.EMBED_SCRIPT_INIT + '" id="readymag-embed-init"><\/script>';
            return i = t.common.embedDomainName || window.location.protocol + "//" + window.location.hostname, a = ' data-uri="' + (s = "full" == e.shareMode ? e.mag_num_id : "p" + e.cur_page_num_id) + '" ', 
            a += ' data-width="' + e.size + '" ', (t.common.isDomainViewer || t.common.embedDomainName) && (a += ' data-domain="' + i + '" ', 
            t.common.customDomainProfile || "User" == t.common.embedDomainType || (s = "full" == e.shareMode ? "" : "p" + e.cur_page_num_id)), 
            t.constants.IS_LIVE || (a += ' data-origin="' + t.constants.readymag_embed_host + '" '), '<a class="rm-mag-embed" href="' + (n = i + "/" + s) + '"' + a + ' target="_blank">' + n + "</a>\n" + o;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Page = Backbone.View.extend({
        template: t.templates["template-viewer-page"],
        initialize: function(t) {
            return _.bindAll(this), this.mag = t.mag, this.router = t.router, this.$container = t.$container, this.viewerType = t.viewerType, 
            this.totalPages = t.totalPages, this.isStickyVerticalViewer = t.isStickyVerticalViewer, this.widgetsData = t.pageData.wids, 
            _.defaults(t.pageData, {
                title: "",
                width: this.mag.getViewportSetting("width"),
                height: this.mag.getViewportSetting("min_height")
            }), _.extend(this, _.omit(t.pageData, [ "wids", "widgets" ])), this.contentPosition = {
                left: 0,
                top: 0
            }, this;
        },
        render: function() {
            return this.setElement(this.template({
                isStickyVerticalViewer: this.isStickyVerticalViewer
            })), this.$el.appendTo(this.$container), t.screenshot || Modernizr.csspositionsticky || $(".polyfill-sticky").Stickyfill(), 
            this.zIndex = this.totalPages - this.num + 2, "vertical" == this.viewerType && this.$el.css("z-index", this.zIndex), 
            this.$content = this.$(".page-content-container"), this.$scrollWrapper = this.$(".content-scroll-wrapper"), 
            this.$scrollWrapper.one("scroll", this.fixSafariScroll), this.$fixedBgContainer = this.$(".page-fixed-bg-container"), 
            this.$fixedPositionContainer = this.$(".fixed-position-container"), this.$fixedPositionContainerTop = this.$(".fixed-position-container-top"), 
            this.$contentBounds = this.$(".content-bounds"), this.pageViewport = this.getPageViewport(), "horizontal" == this.viewerType && this.$scrollWrapper.bind("scroll", this.onScroll), 
            this.createLQBackground(), t.screenshot == this._id && (this.$el.css({
                overflow: "hidden",
                height: this.height,
                width: 1024,
                position: "relative"
            }), "true" === t.utils.queryUrlGetParam("pdf") && (this.$fixedPositionContainer.css({
                height: "100%"
            }), this.$fixedPositionContainerTop.css({
                height: "100%"
            })), this.onResize(), this.on("pageLoaded", function() {
                this.mag.router.sendReadyEvent({
                    page: this
                });
            }, this)), this.listenTo(this, "form:focus", this.onFormFocus), this.listenTo(this, "form:blur", this.onFormBlur), 
            this.listenTo(this, "page:scrollWithFormInFocus", this.onScrollWithFormInFocus), this;
        },
        show: function() {
            return this.shown || (this.$el.removeClass("hidden"), this.shown = !0, "horizontal" == this.viewerType && this.onResize(), 
            this.widgets && this.lastViewportUsedForWidgetsCreation == this.pageViewport || this.createWidgetsForCurrentViewport()), 
            this;
        },
        start: function(t) {
            if (!this.started || t && t.forceStart) return this.started = !0, this.trigger("started"), t = t || {}, 
            _.each(this.widgets, function(e) {
                (!t || !t.widgetTypes || _.indexOf(t.widgetTypes, e.type) >= 0) && e.start();
            }), this.focusPage(), this.$scrollWrapper.addClass("accelerated-scroll"), this.animations && this.animations.start(), 
            this.mag.aboveGlobalAnimations && this.mag.aboveGlobalAnimations.start(), this;
        },
        stop: function(t) {
            if (this.started) return t = t || {}, this.started = !1, this.trigger("stopped"), this.$scrollWrapper.removeClass("accelerated-scroll"), 
            _.each(this.widgets, function(e) {
                (!t || !t.widgetTypes || _.indexOf(t.widgetTypes, e.type) >= 0) && e.stop();
            }), this.animations && this.animations.stop(), this.mag.aboveGlobalAnimations && this.mag.aboveGlobalAnimations.stop(), 
            this;
        },
        getUrl: function() {
            return window.location.protocol + "//" + window.location.hostname + "/p" + this.num_id + "/";
        },
        setPosition: function(t, e) {
            this.lastPosition == t && this.lastNeighbour == e || (this.$el.removeClass("center-page prev-page next-page neighbour").addClass(t + "-page " + (e ? "neighbour" : "")), 
            this.lastPosition = t, this.lastNeighbour = e);
        },
        scrollOnVerticalMode: function(e) {
            this.hasScrollOnVerticalMode = !0;
            var i, s, n = this.pageHeight - this.pageBgHeight;
            e < 0 ? (i = -e, s = 0) : n >= e ? (i = 0, s = -e) : (i = n - e, s = -n), this.visibleWidgetsCoords = this.visibleWidgetsCoords || {}, 
            this.visibleWidgetsCoords.scrollTop = -s, this.animations && this.animations.onScroll({
                forceApply: !this.isStickyVerticalViewer
            }), this.isStickyVerticalViewer || (this.$el.css("top", 0), t.utils.applyTransform(this.$el, i ? "translateY(" + i + "px) translateZ(0)" : ""), 
            this.hasFixedWidgets ? this.$contentBounds.css("top", s) : t.utils.applyTransform(this.$contentBounds, s ? "translateY(" + s + "px)" : ""));
        },
        resetScrollOnVerticalMode: function(e) {
            this.hasScrollOnVerticalMode && (this.hasScrollOnVerticalMode = !1, this.visibleWidgetsCoords = this.visibleWidgetsCoords || {}, 
            this.visibleWidgetsCoords.scrollTop = 0, this.animations && this.animations.onScroll({
                forceApply: !this.isStickyVerticalViewer
            }), this.isStickyVerticalViewer || (this.$el.css("top", ""), t.utils.applyTransform(this.$el, ""), this.hasFixedWidgets ? this.$contentBounds.css("top", 0) : t.utils.applyTransform(this.$contentBounds, "")));
        },
        hide: function() {
            return this.shown && (this.$el.addClass("hidden"), this.shown = !1), this;
        },
        destroyAllWidgets: function() {
            this.loaded = !1, this.videoBGStarted = !1, _.each(this.widgets, function(t) {
                t.destroy(), t.off();
            }), this.animations && this.animations.destroy(), delete this.animations, clearTimeout(this.fireReadyTimeout), 
            this.widgets = null;
        },
        destroy: function() {
            return this.retargetScroll && this.retargetScroll.restore && this.retargetScroll.restore(), this.resetWaitForAnimationEnd(), 
            this.destroyLQBackground({
                animate: !1
            }), this.destroyAllWidgets(), this.remove();
        },
        onFormFocus: function(t) {
            !Modernizr.safari && Modernizr.isdesktop || (t = _.isUndefined(t) ? this.$scrollWrapper && this.$scrollWrapper.scrollTop() : t, 
            this.$fixedBgContainer.css({
                top: t
            }));
        },
        onFormBlur: function() {
            !Modernizr.safari && Modernizr.isdesktop || this.$fixedBgContainer.css({
                top: 0
            });
        },
        onScrollWithFormInFocus: function(t) {
            !Modernizr.safari && Modernizr.isdesktop || (t = _.isUndefined(t) ? this.$scrollWrapper && this.$scrollWrapper.scrollTop() : t, 
            this.$fixedBgContainer.css({
                top: t
            }));
        },
        isSwipeInProgress: function() {
            return this.$el.hasClass("swiping");
        },
        getPageZIndex: function() {
            return this.zIndex || 1;
        },
        getImmediatePack: function() {
            return _.filter(this.widgets, function(t) {
                return t.canRenderImmediately() && !t.rendered;
            });
        },
        getWidgetsPacks: function() {
            if (!this.widgets) return [];
            var e, i, s, n = this.visibleWidgetsCoords, a = (n.top + (n.scrollTop || 0)) / n.scale, o = 1 / ((n.bottom + (n.scrollTop || 0)) / n.scale - a), r = [], l = [];
            if (!this.BGWidget || this.BGWidget.rendered || this.BGWidget.loaded || l.push(this.BGWidget), this.fixedWidgets && this.fixedWidgets.length) for (e = 0; e < this.fixedWidgets.length; e++) (s = this.fixedWidgets[e]).rendered || s.loaded || s.canRenderImmediately() || l.push(s);
            var c, d, h = [], p = 99999, u = -99999, g = !1;
            for (e = 0; e < this.widgets.length; e++) (i = this.widgets[e]).rendered || i.loaded || "background" == i.type || i.fixed_position || (c = (d = t.classes.Page.getScreenIndex(i, a, o, !0)).index, 
            p = Math.min(d.start, p), u = Math.max(d.end, u), i.screenIndex = c, c !== 1 / 0 && (h[c] = h[c] || [], 
            h[c].push(i)), g = !0);
            if (g) {
                for (h[0] && r.push(h[0]), h[1] && r.push(h[1]), h[-1] && r.push(h[-1]), e = 2; e <= u; e++) h[e] && r.push(h[e]);
                for (e = -2; e >= p; e--) h[e] && r.push(h[e]);
            }
            return l.length && (r.length ? r[0] = l.concat(r[0]) : r = [ l ]), r;
        },
        loadWidgetsPack: function(t, e) {
            var i, s = 0, n = 0, a = 0, o = !1;
            for (i = 0; i < t.length; i++) {
                var r = t[i];
                r.rendered || r.loaded || r.destroyed || (r.canRenderImmediately() || (s++, r.on("loaded destroyed", l, r)), 
                a++, r.render());
            }
            function l() {
                n++, o && s == n && e();
            }
            o = !0, a || e(), s == n && e();
        },
        loadForScreenshotMode: function() {
            _.each(this.widgets, function(t) {
                t.render().start();
            });
        },
        createWidgetsForCurrentViewport: function() {
            this.destroyAllWidgets(), this.BGWidget = null, this.fixedWidgets = [];
            var e = this.pageViewport, i = [], s = [], n = 99999, a = this, o = this;
            _.each(this.widgetsData, function(i) {
                var a = o.getWidgetViewportData(i, e);
                t.widgets[a.type] && !a.hidden && (!a.fixed_position && a.z && "background" != a.type && (n = Math.min(n, a.z)), 
                s.push(a));
            }), 99999 == n && (n = 0), _.each(s, function(e) {
                var s = t.scale.isAllowed() && t.scale.isTransform();
                e.fixed_position && (e.z < n || Modernizr.isdesktop && !this.mag.isStickyVerticalViewer && !s) ? e.$fixedContainer = o.$fixedPositionContainer : e.$fixedContainer = o.$fixedPositionContainerTop;
                var r = new t.widgets[e.type](e, a);
                "background" == r.type && (o.BGWidget = r, o.hasVideoBG = r.hasVideoBG()), r.isValid() && (r.fixed_position && o.fixedWidgets.push(r), 
                i.push(r));
            }.bind(this)), this.animations = new t.classes.Animations({
                page: this,
                widgets: i
            }), this.widgets = _.sortBy(i, "y"), this.signalOnLoading(), this._onFontsLoad = [], this._widgetsWithFontsToLoad = [], 
            this._fontLoaderCalled = 0, this._widgetsWithFontsCount = _.reduce(this.widgets, function(t, e) {
                return t + (e.hasFontsToLoad() ? 1 : 0);
            }, 0), this._widgetsWithLoadAnimation = _.reduce(this.widgets, function(t, e) {
                return t + (e.hasLoadAnimation() ? 1 : 0);
            }, 0), this.hasFixedWidgets = !!this.fixedWidgets.length;
            var r = t.scale.isAllowed() && t.scale.isTransform();
            this.$el.removeClass("page-with-fixeds-desktop page-with-fixeds-sticky-or-mobile").toggleClass("page-with-fixeds-desktop", this.hasFixedWidgets && Modernizr.isdesktop).toggleClass("page-with-fixeds-sticky-or-mobile", !(!this.hasFixedWidgets || !this.isStickyVerticalViewer && Modernizr.isdesktop && !r)), 
            this.hasFixedWidgets && !this.retargetScroll && "horizontal" == this.viewerType && Modernizr.isdesktop && (this.retargetScroll = window.RetargetMouseScroll && window.RetargetMouseScroll(this.$fixedPositionContainer.get(0), this.$scrollWrapper.get(0))), 
            this.lastViewportUsedForWidgetsCreation = e;
        },
        getWidgetViewportData: function(e, i) {
            var s = _.clone(e), n = {}, a = {};
            return "default" != i && e["viewport_" + i] && (_.each(t.viewport_fields[e.type] || t.viewport_fields_common, function(i) {
                if (("shape" != e.type || "borders" != i && "weight" != i && "bg_color" != i) && ("background" != e.type || "picture" != i) && (n[i] = void 0, 
                t.globalwidgets.isGlobalKey(i))) {
                    var s = t.globalwidgets.getGlobalPrefixedKey(i);
                    n[s] = void 0;
                }
            }), _.extend(s, n, _.omit(e["viewport_" + i], [ "_id", "modelType" ]))), e.is_global && (a.props = e.is_above ? [ "hidden" ] : null, 
            t.globalwidgets.fillUniqueValues(s, this._id, a)), s;
        },
        getWidgetById: function(t) {
            return _.findWhere(this.widgets, {
                _id: t
            });
        },
        getWidgetDataById: function(t) {
            return _.findWhere(this.widgetsData, {
                _id: t
            });
        },
        signalOnLoading: function() {
            var t = this.widgets.length, e = this;
            function i() {
                "background" == this.type && e.destroyLQBackground({
                    animate: !0
                }), t--, this.hasLoadAnimation() && (e._widgetsWithLoadAnimation--, e._widgetsWithLoadAnimation || (e.loadAnimationsReady = !0, 
                e.trigger("loadAnimationsReady"))), t || (e.fireReadyTimeout = setTimeout(s, 200)), e.trigger("loaded" + this._id);
            }
            function s() {
                e.loaded = !0, e.trigger("pageLoaded");
            }
            _.each(this.widgets, function(t) {
                t.on("loaded", i, t);
            }, this), this.BGWidget && this.hasVideoBG && this.BGWidget.on("videoBGStarted", function() {
                e.videoBGStarted = !0, _.delay(function() {
                    e.trigger("videoBGStarted");
                }, 1300);
            }, this.BGWidget), 0 == t && (this.fireReadyTimeout = setTimeout(s, 200));
        },
        getFontsVariations: function(e, i) {
            var s = _.reduce(t.viewports, function(t, e) {
                return this["viewport_" + e.name] && this["viewport_" + e.name].enabled && t.push(e.name), t;
            }.bind(this), [ "default" ]), n = t.textutils.getUsedFontsFromWidgetsModels({
                includeCustom: !0,
                customList: _.filter(this.mag.edit_params.fonts, {
                    provider: "custom"
                }),
                models: e,
                excludeUnusedDefault: i,
                activeViewports: s
            }), a = [];
            return _.each(n, function(t) {
                for (var e = 0; e < t.used_variations.length; e++) a.push({
                    fontFamily: t.css_name,
                    fontWeight: 100 * (t.used_variations[e].substr(1, 1) - 0),
                    fontStyle: "n" == t.used_variations[e].substr(0, 1) ? "normal" : "italic"
                });
            }), a;
        },
        addFontsToLoad: function(e, i) {
            if (this._widgetsWithFontsToLoad.push(e), this._onFontsLoad.push(i), this._fontLoaderCalled++, this._fontLoaderCalled == this._widgetsWithFontsCount) {
                var s = this.getFontsVariations(this._widgetsWithFontsToLoad);
                if (_.isEmpty(s)) return void this.onAllFontsLoad();
                this._fontsToLoadLeft = s.length, _.each(s, _.bind(function(e) {
                    t.textutils.exactWaitForFontLoad(e.fontFamily, e.fontWeight, e.fontStyle, this.onOneFontLoad);
                }, this));
            }
        },
        onOneFontLoad: function(t, e, i, s) {
            this._fontsToLoadLeft--, 0 == this._fontsToLoadLeft && _.delay(this.onAllFontsLoad, 500);
        },
        onAllFontsLoad: function() {
            _.each(this._onFontsLoad, function(t) {
                t && t();
            });
        },
        updateViewport: function() {
            var t = this.getPageViewport();
            t != this.pageViewport && (this.pageViewport = t, this.createLQBackground(), this.shown && (this.createWidgetsForCurrentViewport(), 
            this.started && (this.started = !1, this.start())));
        },
        waitForAnimationEnd: function(e) {
            this.resetWaitHook = t.utils.waitForTransitionEnd(this.$el, this.mag.getPageTransitionTime() + 1e3, "transform", e);
        },
        resetWaitForAnimationEnd: function() {
            this.resetWaitHook && this.resetWaitHook();
        },
        backToTop: function() {
            this.scrollTo(0);
        },
        scrollTo: function(t) {
            this.$scrollWrapper.finish(), this.$scrollWrapper && this.$scrollWrapper.animate({
                scrollTop: t
            }, 500);
        },
        focusPage: function() {
            Modernizr.isdesktop && "vertical" != this.viewerType && 0 == this.$el[0].getBoundingClientRect().left && (this.$content.focus(), 
            this.mag.$el.scrollTop(0));
        },
        markAsLast: function() {
            this.lastPage = !0, this.$el.addClass("last");
        },
        isLastPage: function() {
            return !!this.lastPage;
        },
        isBottomArrowVisible: function() {
            return !this.wasScrolled && this.scrollable;
        },
        scrollPageALittle: function() {
            this.$scrollWrapper.animate({
                scrollTop: $(window).height() / 2
            }, 500);
        },
        getPageViewport: function() {
            var e = this.mag.viewport, i = this;
            if ("default" == e || t.screenshot) return "default";
            if (this["viewport_" + e] && this["viewport_" + e].enabled) return e;
            var s = _.findWhere(t.viewports, {
                name: e
            }).width, n = _.reduce(t.viewports, function(e, n, a) {
                return ("default" == n.name || i["viewport_" + n.name] && i["viewport_" + n.name].enabled) && Math.abs(n.width - s) <= Math.abs(t.viewports[e].width - s) ? a : e;
            }, 0);
            return t.viewports[n].name;
        },
        onResize: function(e) {
            if (e = e || {}, this.shown || "horizontal" != this.viewerType) {
                var i = this.mag.getContainerSizeCached(), s = this.mag.getViewportSetting("width", this.pageViewport), n = this.mag.getScale(this.pageViewport), a = this["viewport_" + this.pageViewport] && this["viewport_" + this.pageViewport].height || this.height, o = {
                    width: s,
                    height: a,
                    scaledWidth: Math.round(s * n),
                    scaledHeight: Math.round(a * n),
                    scale: n
                }, r = Math.min(o.scaledWidth, i.width), l = o.scaledHeight, c = Math.max((i.height - l) / 2, 0), d = Math.max((i.width - r) / 2, 0), h = {
                    width: o.width,
                    height: o.height,
                    top: c,
                    left: d
                };
                return n >= 1 && t.scale.isAllowed() && t.scale.isZoom() && (h.zoom = n, h.left = 0), this.$content.removeAttr("style"), 
                this.$content.css(h), this.contentPosition = {
                    left: d,
                    top: c
                }, 1 === t.scale.normalize(n, "transform") ? (t.utils.applyTransform(this.$content, ""), o.scale = 1) : t.utils.applyTransform(this.$content, "scale(" + o.scale + ")"), 
                this.contentHeight = o.height, this.pageHeight = Math.max(i.height, o.scaledHeight), this.pageBgHeight = i.height, 
                this.pageWidth = o.width, "vertical" == this.viewerType && this.isStickyVerticalViewer && this.$el.css({
                    height: this.pageHeight,
                    top: e.absolutePosition
                }), this.scale = n, this.$contentBounds.css({
                    width: i.width,
                    height: this.pageHeight
                }), void 0 != this.prevScale && this.prevScale != this.scale && (this.animations && this.animations.updateTimelines(), 
                t.scale.isOn(this.scale) && this.animations && (this.animations.resetStarted(), this.animations.start.__debounced())), 
                this.animations && this.animations.onResize(), this.trigger("resize", {
                    containerSize: i,
                    contentPosition: this.contentPosition
                }), this.scrollable = l - this.mag.SCROLLABLE_TRESHOLD > i.height, this.mag.recalcBottomArrowState(this), 
                this.visibleWidgetsCoords = this.visibleWidgetsCoords || {}, this.visibleWidgetsCoords.top = -c, this.visibleWidgetsCoords.bottom = -c + i.height, 
                this.visibleWidgetsCoords.scale = n, this.resizeLQBackground(), this.prevScale = this.scale, this.pageHeight;
            }
        },
        onScroll: function() {
            this.wasScrolled = !0, this.mag.recalcBottomArrowState(this), this.visibleWidgetsCoords = this.visibleWidgetsCoords || {}, 
            this.visibleWidgetsCoords.scrollTop = this.$scrollWrapper.scrollTop(), this.mag.onCurrentPageScroll(this, this.visibleWidgetsCoords.scrollTop), 
            this.animations && this.animations.onScroll();
        },
        isCurrent: function() {
            return this.num === this.mag.currentPage.num;
        },
        createLQBackground: function() {
            if (!t.screenshot) {
                var e = this.getWidgetViewportData(_.findWhere(this.widgetsData, {
                    type: "background"
                }), this.pageViewport);
                if (this.LQBG) {
                    if ("picture" == e.selectedType && "picture" == this.LQBG.selectedType && e.picture && this.LQBG.picture && e.picture.poorUrl == this.LQBG.picture.poorUrl || "video" == e.selectedType && "video" == this.LQBG.selectedType && e.video && this.LQBG.video && e.video.thumbnail_url == this.LQBG.video.thumbnail_url) return void this.resizeLQBackground();
                    this.destroyLQBackground({
                        animate: !1
                    });
                }
                if (this.$fixedBgContainer.css("background-color", "#" + e.color), e.picture && "picture" == e.selectedType && e.picture.poorUrl || e.video && "video" == e.selectedType && e.video.thumbnail_url) {
                    this.LQBG = _.extend({}, e);
                    var i = t.templates["template-viewer-widget-background"];
                    if (this.LQBG.$el = $(i({
                        data: e
                    })), this.LQBG.$el.addClass("low-quality").appendTo(this.$fixedBgContainer), "picture" == this.LQBG.selectedType) $("<img/>").on("load", _.bind(function() {
                        this.LQBG && this.LQBG.$el.find(".picture-background").css({
                            "background-image": "url(" + this.LQBG.picture.poorUrl + ")"
                        });
                    }, this)).attr("src", this.LQBG.picture.poorUrl);
                    if ("video" == this.LQBG.selectedType) {
                        var s = this.LQBG.video.thumbnail_url.replace("http://", "https://"), n = $("<img/>").addClass("poster").css("opacity", 0).appendTo(this.LQBG.$el.find(".video-background .video-container"));
                        n.on("load", _.bind(function() {
                            n.css({
                                width: "",
                                height: ""
                            }).css("opacity", 1);
                            var t = n[0].width, e = n[0].height;
                            this.LQBG && !this.LQBG.video.aspect_poster && (this.LQBG.video.aspect_poster = t / e), this.resizeLQBackground();
                        }, this)).attr("src", s);
                    }
                }
            }
        },
        resizeLQBackground: function() {
            t.screenshot || this.LQBG && "video" == this.LQBG.selectedType && t.videoutils.setVideoPosition({
                mag: this.mag,
                $container: this.LQBG.$el.find(".video-background .video-container"),
                $media: this.LQBG.$el.find(".video-background .video-container .poster"),
                provider: this.LQBG.video.provider_name,
                aspect_poster: this.LQBG.video.aspect_poster,
                aspect_real: this.LQBG.video.aspect_real,
                controls_remove: !0
            });
        },
        destroyLQBackground: function(e) {
            if (!t.screenshot && this.LQBG) {
                (e = e || {}).animate = e.animate && "picture" == this.LQBG.selectedType && this.started;
                var i = this.LQBG.$el;
                this.LQBG = null, e.animate ? (i.css("opacity", 0), setTimeout(function() {
                    i.remove();
                }, 400)) : i.remove();
            }
        },
        fixSafariScroll: function(t) {
            Modernizr.safari && Modernizr.isdesktop && (0 !== this.$scrollWrapper.scrollTop() && this.$scrollWrapper.scrollTop(0));
        }
    }, {
        getScreenIndex: function(t, e, i, s) {
            var n, a = Math.floor((t.y - e) * i), o = Math.ceil((t.y + t.h - e) * i) - 1;
            return s && t.canRenderImmediately() ? n = 1 / 0 : t.hasLoadAnimation() ? n = 0 : a <= 0 && o >= 0 ? n = 0 : a > 0 ? n = a : o < 0 && (n = o), 
            {
                start: a,
                end: o,
                index: n
            };
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Navigation = Backbone.View.extend({
        ARROWS_SHOW_DELAY: 1e3,
        BOTTOM_SHOW_DELAY: 1e3,
        BOTTOM_HIDE_DELAY: 0,
        template: t.templates["template-viewer-navigation"],
        events: {
            "click .navigation-arrow.left": "goPrevPage",
            "click .navigation-arrow.right": "goNextPage",
            "click .navigation-arrow.bottom": "scrollCurrentPage"
        },
        initialize: function(t) {
            return _.bindAll(this), _.extend(this, t), this.updateScaleState.__debounced = _.debounce(this.updateScaleState, 100), 
            this;
        },
        render: function() {
            return this.setElement(this.template({})), this.$el.appendTo(this.$container), this.$prev = this.$(".navigation-arrow.left"), 
            this.$next = this.$(".navigation-arrow.right"), this.$bottom = this.$(".navigation-arrow.bottom"), _.delay(_.bind(function() {
                this.$prev.removeClass("offscreen"), this.$next.removeClass("offscreen");
            }, this), this.ARROWS_SHOW_DELAY), this.listenTo(this.mag, "pageChanged", this.onPageChange), this.listenTo(this.mag, "finalPageShown", this.onFinalPageShow), 
            this.listenTo(this.mag, "finalPageHidden", this.onFinalPageHide), this.listenTo(this.mag, "keypress-" + $.keycodes.left, this.goPrevPage), 
            this.listenTo(this.mag, "keypress-" + $.keycodes.right, this.goNextPage), Modernizr.isdesktop && $(window).bind("mousewheel", this.onMouseWheel), 
            Modernizr.isdesktop || ($(window).bind("gesturechange", this.updateScaleState.__debounced), this.updateScaleState(), 
            (this.mag.getPagesCount() > 1 || this.hasFinalPage) && this.setSwipeAction()), this;
        },
        destroy: function() {
            return Modernizr.isdesktop && $(window).unbind("mousewheel", this.onMouseWheel), Modernizr.isdesktop || ($(window).unbind("gesturechange", this.updateScaleState.__debounced), 
            this.pagesSwipe && this.pagesSwipe.destroy()), this.remove();
        },
        onMouseWheel: function(t, e, i, s) {
            this.preventTrackpadSwipeTill && +new Date() < this.preventTrackpadSwipeTill || Math.abs(i) > 40 && Math.abs(i) > Math.abs(s) && (i > 0 && this.goPrevPage(), 
            i < 0 && this.goNextPage(), this.preventTrackpadSwipeTill = +new Date() + 1e3);
        },
        setSwipeAction: function() {
            this.pagesSwipe = this.mag.$mag_container.RMSwipe({
                $scrollElements: this.mag.$mag_container,
                getMaxTransitionSpeed: _.bind(function() {
                    return this.mag.getPageTransitionTime();
                }, this),
                customMoveCheck: _.bind(function(t, e) {
                    if (this.hasFinalPage && this.mag.isLastPage()) {
                        if (this.finalPageShown && !t.hasClass("final-page")) return !1;
                        if (!this.finalPageShown) {
                            if (!t.hasClass("final-page") && e < 0) return !1;
                            if (t.hasClass("final-page") && e > 0) return !1;
                        }
                    }
                    return !(t.hasClass("prev-page") && e < 0) && !(t.hasClass("next-page") && e > 0);
                }, this),
                beforeAutoAnimation: _.bind(function(t, e) {
                    return this.mag.isLastPage() && this.hasFinalPage && ("left" == t && !this.finalPageShown || "right" == t && this.finalPageShown) ? {
                        autoAnimate: !0,
                        immediateCallback: !0
                    } : (this.mag.showPageCounter(t), {
                        autoAnimate: !0,
                        immediateCallback: !1
                    });
                }, this),
                onSwipeStart: _.bind(function() {
                    !this.finalPageShown && this.mag.showPageCounter();
                }, this),
                getCurrentConstraints: _.bind(function(t) {
                    var e = {}, i = this.mag.$mag_container.width(), s = t.closest(".page, .final-page");
                    return s.length || (s = this.mag.currentPage.$el), this.mag.isLastPage() && this.hasFinalPage && this.finalPageShown ? e.$moveItems = s : e.$moveItems = s.add(s.prev()).add(s.next()), 
                    e.$referenceItem = e.$moveItems.filter(":not(.center-page)").first(), !this.mag.isLastPage() || this.hasFinalPage && !this.finalPageShown ? e.left = {
                        max: i
                    } : e.left = {
                        max: 0,
                        noTrigger: !0
                    }, this.mag.isFirstPage() && !this.finalPageShown ? e.right = {
                        max: 0,
                        noTrigger: !0
                    } : e.right = {
                        max: i
                    }, e;
                }, this),
                callback: _.bind(function(t) {
                    "right" == t && this.mag.goPrevPage({
                        animation: !1,
                        bySwipe: !0
                    }), "left" == t && this.mag.goNextPage({
                        animation: !1,
                        bySwipe: !0
                    });
                }, this)
            }).data("swipe");
        },
        onFinalPageShow: function() {
            this.finalPageShown = !0, this.$next.addClass("hidden"), this.$bottom.addClass("final-page-offscreen"), 
            this.$prev.toggleClass("hidden", !Modernizr.isdesktop);
        },
        onFinalPageHide: function() {
            this.finalPageShown = !1, this.$next.removeClass("hidden"), this.$bottom.removeClass("final-page-offscreen"), 
            this.$prev.toggleClass("hidden", this.mag.isFirstPage());
        },
        onPageChange: function(t, e) {
            this.$next.toggleClass("hidden", !(!this.mag.isLastPage() || this.mag.finalPage) || !(!this.mag.finalPage || !this.mag.finalPage.shown)), 
            this.recalcBottomArrowState(t), this.$prev.toggleClass("hidden", this.mag.isFirstPage()), this.mag.updateArrowsColor(t);
        },
        recalcBottomArrowState: function(t) {
            clearTimeout(this.bottomArrowTimeout);
            var e = t.isBottomArrowVisible();
            this.isPreview && "default" != this.mag.viewport && (e = !1), this.bottomArrowTimeout = setTimeout(_.bind(function() {
                this.$bottom.toggleClass("offscreen", !e);
            }, this), e ? this.BOTTOM_SHOW_DELAY : this.BOTTOM_HIDE_DELAY);
        },
        goPrevPage: function(t) {
            this.mag.goPrevPage({
                animation: !0
            });
        },
        goNextPage: function(t) {
            this.mag.goNextPage({
                animation: !0
            });
        },
        scrollCurrentPage: function(t) {
            this.mag.scrollCurrentPageALittle();
        },
        updateScaleState: function() {
            Modernizr.android || this.$prev.add(this.$next).add(this.$bottom).toggleClass("scaled-offscreen", t.utils.isPageNativelyScaled());
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Toolbar = Backbone.View.extend({
        PAGE_COUNTER_TIMEOUT: 2800,
        PAGE_COUNTER_TIMEOUT_INITIAL: 4e3,
        template: t.templates["template-viewer-toolbar"],
        events: {
            "click .menu-button": "toggleMenu",
            "click .share-button": "toggleShare",
            "click .embed-close-button": "onEmbedCloseClick"
        },
        initialize: function(t) {
            return _.bindAll(this), _.extend(this, t), this;
        },
        render: function() {
            if (this.setElement(this.template({
                mag: this.mag,
                isPreview: this.isPreview,
                hasMenu: this.hasMenu,
                hasShare: this.hasShare,
                hasPageCounter: this.hasPageCounter,
                pageCounterInsideMenu: this.hasMenu && Modernizr.isphone,
                totalPages: this.mag.getPagesCount()
            })), this.$el.appendTo(this.$container), this.$menuButton = this.$el.find(".menu-button"), this.$shareButton = this.$el.find(".share-button"), 
            this.$pageCounter = this.$el.find(".page-counter"), this.$pageCounterWrapper = this.$pageCounter.parent(), 
            this.hasShare && (this.share = new t.classes.Share({
                mag: this.mag,
                router: this.router,
                $container: Modernizr.isphone ? this.$container : this.$shareButton
            }).render(), this.hasMenu || this.$shareButton.addClass("without-menu-button")), this.hasMenu && (this.magMenu = new t.classes.MagMenu({
                mag: this.mag,
                pages: this.pages,
                router: this.router,
                isPreview: this.isPreview,
                hasProjectInfo: this.hasProjectInfo,
                publishDate: this.publishDate,
                $container: this.$container,
                $toolbar: this.$el,
                viewerType: this.viewerType
            }).render()), this.listenTo(this.mag, "pageChanged", this.onPageChange), this.listenTo(this.mag, "finalPageShown", this.onFinalPageShow), 
            this.listenTo(this.mag, "finalPageHidden", this.onFinalPageHide), this.listenTo(this.mag, "menuShown", this.onMenuShow), 
            this.listenTo(this.mag, "menuHidden", this.onMenuHide), this.listenTo(this.mag, "presentationModeOn", this.onPresentationModeOn), 
            this.listenTo(this.mag, "presentationModeOff", this.onPresentationModeOff), !this.isPreview) {
                var e = this.$(".offscreen-initially:visible"), i = 150 * e.length + 800;
                e.each(function(t, e) {
                    setTimeout(function() {
                        $(e).removeClass("offscreen-initially");
                    }, i), i -= 150;
                });
            }
            return this.$("div[data-alt]:not(.rmalttext), a[data-alt]:not(.rmalttext)").RMAltText(), this;
        },
        destroy: function() {
            return this.share && this.share.destroy(), this.magMenu && this.magMenu.destroy(), this.remove();
        },
        isMenuOpened: function() {
            return !!this.menuShown;
        },
        closeMenu: function() {
            this.magMenu && this.magMenu.hide();
        },
        onPageChange: function(t, e) {
            this.showPageCounter(t, e), this.$menuButton.removeClass("waiting-video-bg-start preloading"), this.prevPage && this.stopListening(this.prevPage), 
            t && (t.loaded || (this.$menuButton.addClass("preloading"), this.listenTo(t, "pageLoaded", this.onPageLoaded)), 
            t.hasVideoBG && !t.videoBGStarted && (this.$menuButton.addClass("waiting-video-bg-start"), this.listenTo(t, "videoBGStarted", this.onVideoBGStarted)), 
            this.prevPage = t);
        },
        onPageLoaded: function() {
            this.$menuButton.removeClass("preloading");
        },
        onVideoBGStarted: function() {
            this.$menuButton.removeClass("waiting-video-bg-start");
        },
        onFinalPageShow: function() {
            this.magMenu && this.magMenu.hide(), this.finalPageShown = !0, this.updateVisibilityState();
        },
        onFinalPageHide: function() {
            this.finalPageShown = !1, this.updateVisibilityState();
        },
        onPresentationModeOn: function() {
            this.isPresentationMode = !0, this.updateVisibilityState();
        },
        onPresentationModeOff: function() {
            this.isPresentationMode = !1, this.updateVisibilityState();
        },
        updateVisibilityState: function() {
            this.finalPageShown || this.isPresentationMode ? this.$el.stop().fadeOut(200) : this.$el.stop().fadeIn(200);
        },
        onMenuShow: function() {
            this.menuShown = !0, this.hidePageCounter();
        },
        onMenuHide: function() {
            this.menuShown = !1;
        },
        getPageCounterSize: function(t) {
            if (!this.cachedPageCounterData) {
                this.$pageCounter.find(".cur").text("0");
                var e = this.$pageCounter.outerWidth();
                this.$pageCounter.find(".cur").text("00");
                var i = this.$pageCounter.outerWidth() - e, s = e - i;
                this.cachedPageCounterData = {
                    baseSize: s,
                    digitSize: i
                }, this.$pageCounter.find(".cur").text(t);
            }
            var n = this.cachedPageCounterData;
            return n.baseSize + (t + "").length * n.digitSize;
        },
        updatePageCounterSize: function(t) {
            this.$pageCounter.length && this.$pageCounterWrapper.length && (!this.menuShown && this.pageCounterShown ? this.$pageCounterWrapper.css("width", this.getPageCounterSize(t)) : this.$pageCounterWrapper.css("width", ""));
        },
        showPageCounter: function(t, e) {
            this.hasPageCounter && (this.$pageCounter.find(".cur").text(t.num), e.showPageCounter && (clearTimeout(this.pageCounterTimeout), 
            this.$el.addClass("show-page-counter"), this.pageCounterShown = !0, Modernizr.android ? setTimeout(_.bind(function() {
                this.updatePageCounterSize(t.num);
            }, this), 17) : this.updatePageCounterSize(t.num), this.pageCounterTimeout = setTimeout(this.hidePageCounter, e.initial ? this.PAGE_COUNTER_TIMEOUT_INITIAL : this.PAGE_COUNTER_TIMEOUT)));
        },
        hidePageCounter: function() {
            this.hasPageCounter && (clearTimeout(this.pageCounterTimeout), this.$el.removeClass("show-page-counter"), 
            this.pageCounterShown = !1, this.updatePageCounterSize());
        },
        toggleMenu: function(t) {
            this.magMenu && this.magMenu.toggle();
        },
        toggleShare: function(t) {
            $(t.target).is(this.$shareButton) && this.share && this.share.toggle();
        },
        postMessageToParent: function(t, e) {
            var i = {
                type: t,
                data: e
            }, s = window.parent;
            s && s.postMessage(JSON.stringify(i), "*");
        },
        onEmbedCloseClick: function(t) {
            this.postMessageToParent("close-fullscreen");
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Branding = Backbone.View.extend({
        template: t.templates["template-viewer-branding"],
        initialize: function(t) {
            return _.bindAll(this), _.extend(this, t), this;
        },
        render: function() {
            return this.setElement(this.template()), this.$el.appendTo(this.$container), this.listenTo(this.mag, "pageChanged", this.onPageChange), 
            this.listenTo(this.mag, "finalPageShown", this.hide), this.listenTo(this.mag, "finalPageHidden", this.show), 
            _.delay(function() {
                this.$el.removeClass("offscreen-initially");
            }.bind(this), 800), this;
        },
        onPageChange: function(t, e) {},
        hide: function() {
            this.$el.stop().fadeOut(200);
        },
        show: function() {
            this.$el.stop().fadeIn(200);
        }
    });
}(RM), function(t, e) {
    "use strict";
    var i = 1;
    t.classes.Widget = Backbone.View.extend({
        template: t.templates["template-viewer-widget"],
        initialize: function(t, e, s) {
            return _.bindAll(this), _.extend(this, t, t.params), this.page = e, this.mag = this.page.mag, this.$pageContainer = s || this.page.$content, 
            this.destroyed = !1, this.$document = $(document), this._id = this._id || i++, this.x = this.x || 0, 
            this.y = this.y || 0, this;
        },
        render: function() {
            return this.makeBox("some-widget-class"), this.rendered = !0, this.checkLink(), this;
        },
        redraw: function() {
            return this.checkLink(), this;
        },
        updatePage: function(t) {
            var e = this.page;
            (!e || t && e.num !== t.num) && (this.page = t, this.redraw());
        },
        canRenderImmediately: function() {
            return Boolean(this.DO_NOT_WAIT_FOR_PRELOAD);
        },
        widgetIsLoaded: function() {
            this.loaded || this.destroyed || (this.loaded = !0, this.started && this.start(), this.trigger("loaded"));
        },
        isValid: function() {
            return !0;
        },
        hasFontsToLoad: function() {
            return !1;
        },
        seamlessFontsShow: function(e, i) {
            var s = "widget " + this._id + " font load", n = function(e, i) {
                t.performance.end(s, !0, i, e && _.isArray(e) ? e.join(", ") : e);
            };
            if (t.textutils.isFastFontLoadCheckAvailable() && !t.screenshot && !this.insideHotspot && this.hasFontsToLoad()) {
                i();
                t.performance.start(s), this.makeSureFontsLoaded().then(function(t) {
                    n(t, "success"), window.requestAnimationFrame(e);
                }).catch(function(t) {
                    n(t, "failure"), e();
                });
            }
        },
        makeSureFontsLoaded: function() {
            var e = this.page.getFontsVariations([ this ], !0), i = [];
            return _.each(e, function(e) {
                var s = t.textutils.fastWaitForFontLoad(e.fontFamily, e.fontWeight, e.fontStyle);
                i.push(s);
            }), window.Promise.all(i);
        },
        hasAnimation: function() {
            return Boolean(this.animation && this.animation.type && "none" != this.animation.type && !_.isEmpty(this.animation.steps));
        },
        hasLoadAnimation: function() {
            return this.hasAnimation() && "load" == this.animation.type;
        },
        start: function() {
            return this.started = !0, this;
        },
        stop: function() {
            return this.started = !1, this;
        },
        hide: function() {
            return this.stop(), this.$el.hide(), this.wasHidden = !0, this.trigger("hidden"), this;
        },
        show: function() {
            return this.$el.show(), this.start(), this.wasHidden = !1, this.trigger("shown"), this;
        },
        destroy: function() {
            return this.stop(), this.destroyed = !0, this.trigger("destroyed"), delete this.animationObj, this.$el.off(), 
            this.remove();
        },
        BringToTopZ: function() {
            if (this.animationObj) {
                var t = this.animationObj.getAnimationContainer();
                this.savedAnimationContainerZIndex = t.css("z-index"), t.css("z-index", 99999 + this.z);
            }
            this.$el.css("z-index", 99999 + this.z);
        },
        BackToNormalZ: function() {
            this.animationObj && this.animationObj.getAnimationContainer().css("z-index", this.savedAnimationContainerZIndex || this.z);
            this.$el.css("z-index", this.z);
        },
        makeBox: function(t) {
            this.setElement(this.template());
            var e = this.fixed_position ? this.$fixedContainer : this.$pageContainer;
            this.animationObj && (e = this.animationObj.getAnimationContainer()), this.$el.appendTo(e).addClass(t).toggleClass("full-width", !!this.is_full_width).toggleClass("inside-hotspot", !!this.insideHotspot), 
            this.applyBoxStyle(), (this.is_full_width || this.fixed_position || this.sticked) && this.listenTo(this.page, "resize", this.onPageResize), 
            this.trigger("rendered");
        },
        onPageResize: function() {
            this.applyBoxStyle();
        },
        calcBoxStyle: function(e) {
            e = e || {};
            var i = {
                left: this.x,
                top: this.y,
                width: this.w,
                height: this.h,
                right: "",
                bottom: "",
                "margin-left": "",
                "margin-top": "",
                "z-index": this.z || 1
            }, s = parseInt(this.full_width_margin, 10) || 0, n = parseInt(this.sticked_margin, 10) || 0, a = this.page.scale, o = this.fixed_position;
            if (this.angle && (i.width = Math.round(this.w), i.height = Math.round(this.h), this.angle % 90 == 0 && i.width % 2 != i.height % 2 && (i.width += 1)), 
            this.is_full_width && (i.left = -this.page.contentPosition.left + s, i.width = this.page.mag.getContainerSizeCached().width / a - 2 * s, 
            o)) {
                if (i.left = s, "horizontal" == this.page.viewerType) {
                    var r = this.page.$scrollWrapper, l = r.width() - r[0].clientWidth;
                    i.width -= l / a;
                }
                [ "nw", "n", "ne" ].indexOf(o) > -1 && (o = "nw"), [ "w", "c", "e" ].indexOf(o) > -1 && (o = "w"), [ "sw", "s", "se" ].indexOf(o) > -1 && (o = "sw");
            }
            if (this.sticked) {
                l = 0;
                "horizontal" == this.page.viewerType && (l = this.page.$scrollWrapper.width() - this.page.$scrollWrapper[0].clientWidth), 
                "left" == this.sticked && (i.left = -this.page.contentPosition.left / a + n), "right" == this.sticked && (i.left = this.page.mag.getContainerSizeCached().width / a - n - this.w - this.page.contentPosition.left / a - l / a), 
                "top" == this.sticked && (i.top = -this.page.contentPosition.top / a + n), "bottom" == this.sticked && (i.top = this.$pageContainer.height() - n - this.h + this.page.contentPosition.top / a);
            }
            if (e.calcBBox) {
                o && (i.left *= a, i.top *= a, i.width *= a, i.height *= a), i.sinAngle = Math.sin(-(this.angle || 0) * Math.PI / 180), 
                i.cosAngle = Math.cos(-(this.angle || 0) * Math.PI / 180);
                var c = t.mathutils.calcBoundingBox(i, o);
                return i.width = c.bb_width, i.height = c.bb_height, i.left = c.bb_left, i.top = c.bb_top, o && _.extend(i, t.utils.getFixedPositionCSS(o, i, 1)), 
                {
                    dimensions: i
                };
            }
            o && (_.extend(i, t.utils.getFixedPositionCSS(o, i, t.scale.normalize(a, "transform"))), a >= 1 && t.scale.isAllowed() && t.scale.isZoom() && (i.zoom = a));
            var d = {
                rotateX: this.angle && this.antialiasRotation ? "0deg" : "",
                rotateY: this.angle && this.antialiasRotation ? "0deg" : "",
                rotateZ: this.angle ? this.angle + "deg" : "",
                scaleX: this.flip_h ? -1 : 1,
                scaleY: this.flip_v ? -1 : 1
            };
            return o && (d.scaleX *= t.scale.normalize(a, "transform"), d.scaleY *= t.scale.normalize(a, "transform")), 
            Math.abs(d.scaleX - 1) < 1e-6 && (d.scaleX = ""), Math.abs(d.scaleY - 1) < 1e-6 && (d.scaleY = ""), 
            {
                dimensions: i,
                transform: d
            };
        },
        applyBoxStyle: function() {
            var e = this.calcBoxStyle();
            this.animationObj && (e = this.animationObj.modifyWidgetPosition(e)), this.$el.css(e.dimensions);
            var i = _.map(e.transform, function(t, e) {
                return t ? e + "(" + t + ")" : "";
            }).join(" ");
            t.utils.applyTransform(this.$el, $.trim(i));
        },
        calcDistsToPageVisibleBounds: function() {
            var e, i = this.page.mag.getContainerSizeCached(), s = t.scale.isOn(this.page.scale) && t.scale.isZoom() ? t.scale.getBox(this.$el[0], this.page.scale) : this.$el[0].getBoundingClientRect(), n = this.page.mag.isPreview ? this.page.mag.$mag_container[0].getBoundingClientRect() : {
                top: 0,
                left: 0
            }, a = (s.top + s.height / 2 - n.top) / this.page.scale, o = (i.height - (s.top + s.height / 2 - n.top)) / this.page.scale, r = (s.left + s.width / 2 - n.left) / this.page.scale, l = (i.width - (s.left + s.width / 2 - n.left)) / this.page.scale;
            if (this.fixed_position) {
                var c = this.page.$el[0].getBoundingClientRect(), d = (s.top + s.height / 2 - c.top) / this.page.scale, h = (c.height - (s.top + s.height / 2 - c.top)) / this.page.scale;
                e = {
                    left: Math.max(0, r),
                    right: Math.max(0, l),
                    top: Math.max(0, Math.min(a, d)),
                    bottom: Math.max(0, Math.min(o, h))
                };
            } else {
                var p = this.page.contentPosition.left / this.page.scale, u = this.page.contentPosition.top / this.page.scale, g = this.x + this.w / 2, m = this.y + this.h / 2;
                d = m + u, h = this.page.contentHeight - m + u;
                e = {
                    left: Math.max(0, g + p),
                    right: Math.max(0, this.page.pageWidth - g + p),
                    top: Math.max(0, Math.min(a, d)),
                    bottom: Math.max(0, Math.min(o, h))
                };
            }
            return e;
        },
        checkLink: function() {
            var t = {};
            if (this.clickLink) {
                this.clickLink = this.page.mag.matchSameDomainLink(this.clickLink);
                var e = /^http(s?)\:\/\//i.test(this.clickLink) || /^mailto\:/i.test(this.clickLink) || /^tel\:/i.test(this.clickLink), i = /^__rm_goback$/i.test(this.clickLink), s = this.mailchimpMatcher.test(this.clickLink), n = this.anchorRegexp.test(this.clickLink), a = this.shareRegexp.test(this.clickLink), o = this.clickLink, r = this.clickTarget || "_blank", l = e ? "external-link" : i ? "goback-link" : "maglink";
                if (s && (l = "mailchimp-link"), n && (l = "anchor-link"), a && (l = "share-link"), !e) {
                    var c = o;
                    /^back\sto\stop$/i.test(o) && (c = this.page._id);
                    var d = this.page.mag.getPageNum(c);
                    o = d && this.page.mag.getPageUri ? "/" + this.page.mag.getPageUri(c) : "javascript:void(0)";
                    d ? r = "" : o = "", c == this.page._id && (l += " back-to-top", this.is_global && (l += " current"));
                }
                if (i && (o = "javascript:void(0)"), s) {
                    o = "javascript:void(0)";
                    var h = this.clickLink.match(this.mailchimpMatcher)[1];
                    t["data-mailchimp"] = h;
                }
                if (n) {
                    o = "javascript:void(0)", t["data-anchor-link-pos"] = this.anchor_link_pos;
                    var p = _.findWhere(this.mag.pages, {
                        _id: this.clickPage
                    }) || this.page;
                    t["data-page-uri"] = p.uri || p.num;
                }
                if (a) {
                    o = "javascript:void(0)";
                    var u = this.clickLink.match(this.shareRegexp);
                    t["data-share-provider"] = u[1], t["data-share-type"] = u[2];
                }
                if (0 != o.indexOf("mailto") && 0 != o.indexOf("tel") && "maglink" != l || (r = ""), o) {
                    _.extend(t, {
                        class: l,
                        href: o,
                        target: r
                    });
                    var g = this.$el.parent("a");
                    g.length ? g.attr(t) : (g = $("<a>").attr(t), this.$el.wrap(g));
                }
            }
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.MagMenu = Backbone.View.extend({
        template: t.templates["template-viewer-mag-menu"],
        events: {
            "click .page": "onPageClick"
        },
        initialize: function(e) {
            return _.bindAll(this), _.extend(this, e), this.IMG_STUB = (t.common.isDownloadedSource ? "" : "/") + "img/spacer.gif", 
            Modernizr.isphone ? "horizontal" == this.viewerType ? (this.PAGE_WIDTH = 140, this.PAGE_HEIGHT = 92) : (this.PAGE_WIDTH = 240, 
            this.PAGE_HEIGHT = 158) : (this.PAGE_WIDTH = 280, this.PAGE_HEIGHT = 184), this.loadVisibleScreenshots.__debounced = _.debounce(this.loadVisibleScreenshots, 500), 
            this.unloadInvisibleScreenshots.__debounced = _.debounce(this.unloadInvisibleScreenshots, 3e3), this;
        },
        render: function() {
            this.setElement(this.template({
                mag: this.mag,
                pages: this.pages,
                width: this.PAGE_WIDTH,
                height: this.PAGE_HEIGHT,
                stub: this.IMG_STUB,
                viewerType: this.viewerType,
                publishDate: this.publishDate,
                hasProjectInfo: this.hasProjectInfo
            })), this.$el.appendTo(this.$container), this.$pagesWrapper = this.$(".pages-wrapper");
            var e = this.$(".page"), i = this.$(".logo-wrapper");
            if ("horizontal" == this.viewerType ? (this.LOGO_SIZE = i.width() || 0, this.$(".pages").css("width", e.length * this.PAGE_WIDTH + this.LOGO_SIZE), 
            this.$pagesWrapper.scrollLeft(99999)) : (this.LOGO_SIZE = i.height() || 0, this.$(".pages").css("height", e.length * this.PAGE_HEIGHT + this.LOGO_SIZE), 
            this.$pagesWrapper.scrollTop(99999)), Modernizr.isdesktop && (this.scroll = this.$(".scroll-wrapper").RMScroll({
                $container: this.$pagesWrapper,
                $content: this.$(".pages"),
                $handle: this.$(".scroll"),
                wheelScrollSpeed: 1.3,
                gap_start: 8,
                gap_end: 8 + this.LOGO_SIZE,
                maxHandleSize: 136,
                dragScroll: !0,
                tp: this.viewerType
            }).data("scroll")), this.$pagesWrapper.bind("scroll", this.onScroll), this.cacheSize(), this.cacheScroll(), 
            this.cachePagesPos(), this.loadedScreenshots = {}, "horizontal" == this.viewerType && Modernizr.isphone || $(".menu-info .mag-title").dotdotdot({
                height: Modernizr.isphone ? 48 : 68,
                wrap: "letter",
                callback: _.bind(function(t, e) {
                    t && this.$(".menu-info .mag-title").attr("title", this.mag.title);
                }, this)
            }), !Modernizr.isdesktop) {
                var s = "horizontal" == this.viewerType ? this.$el.height() : this.$el.width(), n = this.$el.add(this.$toolbar);
                "horizontal" == this.viewerType && this.mag.navigation && (n = n.add(this.mag.navigation.$bottom)), 
                this.menuSwipe = n.RMSwipe({
                    $scrollElements: this.$pagesWrapper,
                    minTransitionSpeed: 200,
                    maxTransitionSpeed: 400,
                    rubberBand: !1,
                    getCurrentConstraints: _.bind(function() {
                        var t = {};
                        return t.$referenceItem = this.$el, t = "horizontal" == this.viewerType ? this.shown ? {
                            up: {
                                max: 0,
                                noTrigger: !0
                            },
                            down: {
                                max: s
                            }
                        } : {
                            up: {
                                max: s
                            },
                            down: {
                                max: 0,
                                noTrigger: !0
                            }
                        } : this.shown ? {
                            left: {
                                max: 0,
                                noTrigger: !0
                            },
                            right: {
                                max: s
                            }
                        } : {
                            left: {
                                max: s
                            },
                            right: {
                                max: 0,
                                noTrigger: !0
                            }
                        };
                    }, this),
                    callback: _.bind(function(t) {
                        this.shown ? this.hide() : this.show();
                    }, this)
                }).data("swipe");
            }
            return this.isPreview && this.listenTo(t.constructorRouter, "renewScreenshot", this.renewScreenshot), 
            this.listenTo(this.mag, "pageChanged", this.onPageChange), this.listenTo(this.mag, "finalPageShown", this.onFinalPageShow), 
            this.listenTo(this.mag, "finalPageHidden", this.onFinalPageHide), this.listenTo(this.mag, "keypress-" + $.keycodes.m, this.toggle), 
            this.listenTo(this.mag, "keypress-" + $.keycodes.esc, this.hide), $(window).on("resize", this.onResize), 
            this.$el.bind("mousewheel", this.onMouseWheel), this;
        },
        show: function() {
            return this.finalPageShown ? this : (this.shown || (this.shown = !0, this.mag.$el.addClass("viewer-mag-menu-shown"), 
            this.mag.$el.toggleClass("viewer-mag-menu-no-project-info", !this.hasProjectInfo), this.loadOtherScreenshots(), 
            this.mag.trigger("menuShown")), this);
        },
        toggle: function() {
            return this.shown ? this.hide() : this.show();
        },
        hide: function() {
            return this.shown && (this.mag.$el.removeClass("viewer-mag-menu-shown viewer-mag-menu-no-project-info"), 
            this.clearLoadOtherTimeout(), this.mag.focusCurrentPage(), this.shown = !1, this.mag.trigger("menuHidden")), 
            this;
        },
        destroy: function() {
            return $(window).off("resize", this.onResize), this.$el.unbind("mousewheel", this.onMouseWheel), this.menuSwipe && this.menuSwipe.destroy(), 
            this.$pagesWrapper.unbind("scroll", this.onScroll), this.remove();
        },
        onMouseWheel: function(t) {
            t.preventDefault();
        },
        onResize: function() {
            this.cacheSize(), this.scroll && this.scroll.recalc(), this.mag.currentPage && this.shiftToPage(this.mag.currentPage.num, !1);
        },
        onScroll: function() {
            this.cacheScroll();
        },
        cacheSize: function() {
            this.cachedData = this.cachedData || {}, this.cachedData.scrollSize = "horizontal" == this.viewerType ? this.$pagesWrapper.width() : this.$pagesWrapper.height();
        },
        cacheScroll: function() {
            this.cachedData = this.cachedData || {}, this.cachedData.scrollPos = "horizontal" == this.viewerType ? this.$pagesWrapper.scrollLeft() : this.$pagesWrapper.scrollTop();
        },
        cachePagesPos: function() {
            this.cachedData = this.cachedData || {}, this.cachedData.pagesPos = {};
            var t = this.cachedData.pagesPos, e = this.viewerType, i = this.PAGE_WIDTH, s = this.PAGE_HEIGHT;
            _.each(this.pages, function(n, a) {
                t[n.num] = a * ("horizontal" == e ? i : s);
            });
        },
        onPageChange: function(t, e) {
            this.shown || (this.loadVisibleScreenshots.__debounced(), !Modernizr.isdesktop && this.unloadInvisibleScreenshots.__debounced()), 
            this.shiftToPage(t.num, this.shown), _.isEmpty(this.loadedScreenshots) && this.loadVisibleScreenshots();
        },
        onFinalPageShow: function() {
            this.hide(), this.finalPageShown = !0;
        },
        onFinalPageHide: function() {
            this.finalPageShown = !1;
        },
        shiftToPage: function(t, e) {
            var i, s = this.$('.page[data-num="' + t + '"]'), n = this.cachedData.scrollSize, a = this.cachedData.scrollPos, o = "horizontal" == this.viewerType ? this.PAGE_WIDTH : this.PAGE_HEIGHT, r = this.cachedData.pagesPos[t], l = a + o / 2, c = a + n - o / 2;
            if (this.$(".page.active").removeClass("active"), s.addClass("active"), r < l) i = r - l; else {
                if (!(r + o > c)) return;
                i = r + o - c;
            }
            var d = {};
            d["horizontal" == this.viewerType ? "scrollLeft" : "scrollTop"] = a + i, this.$pagesWrapper.stop().animate(d, e ? 300 : 0);
        },
        onPageClick: function(t) {
            if ((Modernizr.isdesktop || t.originalEvent.forwardedTouchEvent || !window.FastClick || window.FastClick.notNeeded(window.document.body)) && (!this.scroll || !this.scroll.wasContentDrag)) {
                var e = $(t.currentTarget).data("num");
                this.mag.currentPage && e == this.mag.currentPage.num || this.mag.showPage(e, {
                    animation: !1
                });
            }
        },
        renewScreenshot: function(e) {
            var i = this.$(".page").filter(function() {
                return $(this).data("id") == e;
            }), s = t.constructorRouter.mag.pages.find(function(t) {
                return t.id == e;
            }), n = s && s.getScreenshot(this.PAGE_WIDTH);
            i.attr("data-src") ? i.attr("data-src", n) : i.find(".screenshot").prop("src", n);
        },
        getVisibleScreenshotRange: function() {
            var t = this.cachedData.scrollSize, e = this.cachedData.scrollPos, i = "horizontal" == this.viewerType ? this.PAGE_WIDTH : this.PAGE_HEIGHT;
            return {
                min: Math.max(0, Math.floor(e / i)),
                max: Math.min(this.mag.getPagesCount() - 1, Math.floor((e + t) / i))
            };
        },
        loadVisibleScreenshots: function() {
            if (this.mag.pages && this.mag.pages.length) {
                var t = this.getVisibleScreenshotRange(), e = this;
                this.$(".page").each(function(i) {
                    var s, n = (s = $(this)).attr("data-src");
                    i >= t.min && i <= t.max && n && !e.loadedScreenshots[i] && ((s = $(this)).find(".screenshot").prop("src", n), 
                    s.removeAttr("data-src"), e.loadedScreenshots[i] = !0);
                });
            }
        },
        unloadInvisibleScreenshots: function() {
            if (!this.shown) {
                var t = this.getVisibleScreenshotRange(), e = this;
                this.$(".page").each(function(i) {
                    var s, n = (s = $(this)).attr("data-src");
                    (i < t.min || i > t.max) && !n && e.loadedScreenshots[i] && ((s = $(this)).attr("data-src", s.find(".screenshot").prop("src")), 
                    s.find(".screenshot").prop("src", e.IMG_STUB), delete e.loadedScreenshots[i]);
                });
            }
        },
        loadOtherScreenshots: function() {
            this.clearLoadOtherTimeout(), this.loadOtherSafeTimeout = 500, this.loadNextScreenshot();
        },
        loadNextScreenshot: function() {
            var t, e, i, s = this.getVisibleScreenshotRange(), n = Math.floor((s.min + s.max) / 2), a = this.loadedScreenshots, o = this.mag.getPagesCount() - 1;
            for (t = n; t <= o && a[t]; t++) ;
            for (e = n; e >= 0 && a[e]; e--) ;
            if (!(e < 0 && t > o)) {
                a[i = t > o ? e : e < 0 ? t : t - n > n - e ? e : t] = !0;
                var r = this.$(".page").eq(i), l = r.find(".screenshot"), c = this;
                l.one("load error", function(t) {
                    clearTimeout(c.$curLoadingTimeout), c.loadNextScreenshot();
                }), this.$curLoadingTimeout = setTimeout(function() {
                    l.off(), c.loadOtherSafeTimeout *= 1.1, c.loadNextScreenshot();
                }, this.loadOtherSafeTimeout), l.prop("src", r.attr("data-src")), r.removeAttr("data-src"), this.$curLoadingScreenshot = l;
            }
        },
        clearLoadOtherTimeout: function() {
            this.$curLoadingScreenshot && this.$curLoadingScreenshot.off(), clearTimeout(this.$curLoadingTimeout);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.FinalPage = Backbone.View.extend({
        template: t.templates["template-viewer-final-page"],
        events: {
            "click .share-button": "share",
            "click .share-embed": "openEmbed",
            "click .embed-wrapper .embed-close": "closeEmbed",
            "click .embed-wrapper .embed-code": "selectEmbedCode",
            "keyup .embed-wrapper .embed-code": "onKeyUp",
            "click .full-name": "toProfile",
            "click .logo": "toHomepage",
            "click .related-link": "toRelated",
            "click .size-selector": "onSizeSelectorClick"
        },
        initialize: function(t) {
            return _.bindAll(this), _.extend(this, t), this;
        },
        render: function() {
            var e = "empty";
            return "recent" == this.finalPageType && this.recentMags.length && (e = "recent"), "join" == this.finalPageType && (e = "join"), 
            this.setElement(this.template({
                mag: this.mag,
                disableSocials: this.isPrivate,
                recentMags: this.recentMags,
                tp: e,
                magLink: this.mag.getUrl(),
                isStickyVerticalViewer: this.isStickyVerticalViewer,
                tweetText: t.shareutils.getFinalShare(null, _.extend(this.mag.model.toJSON(), {
                    user: this.mag.user
                }), {
                    forProject: !0,
                    customDomain: t.common.isDomainViewer
                }).tweet,
                specialRecentView: "recent" == e && 1 == this.recentMags.length && !Modernizr.isphone
            })), this.$el.appendTo(this.$container), "join" == e && new t.classes.Login({
                useNavigate: !1,
                $node: this.$(".dop-container-join"),
                router: this.router
            }).render(), this.updateEmbedPreview(), this.updateEmbed(), "horizontal" == this.viewerType ? (this.listenTo(this.mag, "pageChanged", this.onPageChange), 
            this.listenTo(this.mag, "keypress-" + $.keycodes.esc, this.hide)) : this.show(), this;
        },
        show: function() {
            return this.shown || (this.$el.removeClass("offscreen hidden"), this.shown = !0, "horizontal" == this.viewerType && this.mag.trigger("finalPageShown"), 
            this.selectEmbedCode(), Modernizr.isphone || this.socialsInitialized || _.delay(_.bind(function() {
                this.socialsInitialized = !0, t.initutils.initTwitterAPI(function() {
                    window.twttr && window.twttr.widgets && _.isFunction(window.twttr.widgets.load) && window.twttr.widgets.load();
                }), t.initutils.initFacebookAPI(_.bind(function() {
                    window.FB.XFBML.parse(this.$el.get(0));
                }, this));
            }, this), 300)), this;
        },
        hide: function() {
            return this.shown && (this.$el.addClass("offscreen"), this.shown = !1, this.closeEmbed(), this.mag.trigger("finalPageHidden")), 
            this;
        },
        destroy: function() {
            return this.remove();
        },
        setSizeAndPosForStickyVersion: function(t) {
            t = t || {}, this.$el.css({
                height: this.getHeight(),
                top: t.absolutePosition
            });
        },
        scrollOnVerticalMode: function(e) {
            this.hasScrollOnVerticalMode = !0, this.$el.css("top", 0), t.utils.applyTransform(this.$(".final-page-wrapper"), "translateY(" + -e + "px)");
        },
        resetScrollOnVerticalMode: function(e) {
            this.hasScrollOnVerticalMode && (this.hasScrollOnVerticalMode = !1, this.$el.css("top", ""), t.utils.applyTransform(this.$(".final-page-wrapper"), ""));
        },
        getHeight: function() {
            return this.$(".final-page-wrapper").height();
        },
        onPageChange: function(t, e) {
            this.$el.toggleClass("hidden", !this.mag.isLastPage()), this.hide();
        },
        showNativeJoin: function() {
            this.$(".dop-container-join .buttons-panel").fadeOut(300), this.$(".dop-container-join .native-join").fadeIn(300);
        },
        hideNativeJoin: function() {
            this.$(".dop-container-join .buttons-panel").fadeIn(300), this.$(".dop-container-join .native-join").fadeOut(300);
        },
        toProfile: function() {
            this.router.analytics && this.router.analytics.sendEvent("Profile", "final page");
        },
        toHomepage: function() {
            this.router.analytics && this.router.analytics.sendEvent("Logo", "final page");
        },
        toRelated: function(t) {
            var e = $(t.target), i = e.attr("href") || e.parent().attr("href"), s = e.find(".overflow-block").text();
            this.router.analytics && this.router.analytics.sendEvent("Final Page Related Mags", s + " (" + i + ")");
        },
        onKeyUp: function(t) {
            t.stopPropagation();
        },
        openEmbed: function(t) {
            $(t.currentTarget).hasClass("disabled") || (this.router.analytics && this.router.analytics.sendEvent("Embed", "final page"), 
            this.$(".embed-wrapper").removeClass("hidden"));
        },
        closeEmbed: function(t) {
            this.$(".embed-wrapper").addClass("hidden");
        },
        updateEmbedPreview: function() {
            var t = this.mag.model.getPageScreenshot(Modernizr.retina ? 256 : 512, {
                _id: this.mag.coverPid
            });
            this.$(".embed-wrapper .thumb-pic").attr("src", t);
        },
        updateEmbed: function() {
            var e = this.$(".size-selector").attr("data-selected");
            this.$(".embed-wrapper .embed-code").val(t.classes.Share.getEmbedCode({
                shareMode: "full",
                mag_num_id: this.mag.num_id,
                size: {
                    responsive: "responsive",
                    big: 512,
                    small: 288
                }[e]
            }));
        },
        onSizeSelectorClick: function(t) {
            var e, i, s = $(t.currentTarget), n = s.attr("data-selected");
            i = (i = (e = _.map(s.find(".size"), function(t) {
                return $(t).attr("data-size");
            })).indexOf(n) + 1) >= e.length ? 0 : i, s.attr("data-selected", e[i]), this.updateEmbed();
        },
        selectEmbedCode: function(t) {
            Modernizr.isdesktop && this.$(".embed-wrapper .embed-code").get(0).setSelectionRange(0, 9999), !Modernizr.isdesktop && t && (t.stopPropagation(), 
            t.preventDefault());
        },
        share: function(e) {
            $(e.currentTarget).hasClass("disabled") || t.shareutils.share({
                host: (t.common.embedDomainName || window.location.protocol + "//" + window.location.hostname) + "/",
                tp: $(e.currentTarget).attr("data-tp"),
                source: "final page",
                page: null,
                mag: _.extend(this.mag.model.toJSON(), {
                    user: this.mag.user
                }),
                forProject: !0,
                customDomain: !(!t.common.isDomainViewer && !t.common.embedDomainName),
                customDomainProfile: !(!t.common.customDomainProfile && "User" != t.common.embedDomainType),
                analytics: this.router.analytics
            });
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Mag = Backbone.View.extend({
        TYPEKIT_PREVIEW_API_LINK: "//use.typekit.net/previewkits/pk-v1.js",
        PRELOAD_COUNT_HORIZONTAL: {
            backward: 1,
            forward: Modernizr.isdesktop ? 5 : Modernizr.isphone ? 3 : 2
        },
        PRELOAD_COUNT_VERTICAL: {
            backward: Modernizr.isdesktop ? 5 : (Modernizr.isphone, 2),
            forward: Modernizr.isdesktop ? 10 : (Modernizr.isphone, 3)
        },
        SCROLLABLE_TRESHOLD: 100,
        SCROLL_SNAP: 0,
        template: t.templates["template-viewer-mag"],
        initialize: function(e, i) {
            _.bindAll(this), e || (e = {}), _.defaults(e, {
                pages: []
            }), this.hasWidgetsWithVerticalOnscrollAnimation = !1;
            var s = _(e.pages).chain().reduce(function(t, e) {
                return t.concat(e.wids);
            }, []).each(function(t) {
                t.animation && "scroll" === t.animation.type && t.animation.steps && _.any(t.animation.steps, function(t) {
                    return t.dy;
                }.bind(this)) && (this.hasWidgetsWithVerticalOnscrollAnimation = !0);
            }.bind(this)).filter({
                is_global: !0
            }).value(), n = _(s).filter(function(t) {
                return !t.is_above;
            });
            this.aboveGlobalWidgetsData = _(s).filter(function(t) {
                return t.is_above;
            });
            var a = _.pluck(this.aboveGlobalWidgetsData, "_id");
            return _(e.pages).each(function(t) {
                t.wids = t.wids.concat(_.reject(n, function(e) {
                    return e.pid == t._id;
                })), t.wids = _.unique(t.wids, function(t) {
                    return t._id || Math.random();
                }), t.wids = _(t.wids).filter(function(t) {
                    return !_.contains(a, t._id);
                });
            }), _.extend(this, e), this.model = new t.models.UserMag(e, {
                parse: !0
            }), this.router = i, this.isPreview = i.isPreview, this.$container = i.$mags_container, Modernizr.isdesktop && $("<div>").bind("mousewheel", function() {}), 
            this.setViewerOptions(this.getMagViewport()), this.continueLoading.__debounced = _.debounce(this.continueLoading, 200), 
            this.loadPages.__debounced = _.debounce(this.loadPages, 700), this.onResize.__debounced = _.debounce(this.onResize, 300), 
            this.redrawAboveGlobalWidgets.__debounced = _.debounce(this.redrawAboveGlobalWidgets, 500, !0), this.widgetPackCount = 0, 
            this.getAboveGlobalBoxMemoized = _.memoize(this.getAboveGlobalBox, function(t, e, i) {
                return t + " " + (e && e.num) + " " + (e && e.pageViewport) + " " + (i && i.width) + " " + (i && i.height);
            }), this;
        },
        setViewerOptions: function(e) {
            var i = {
                arrows: !0,
                menubutton: !0,
                projectinfo: !0,
                sharebutton: !0,
                pagecounter: !0,
                viewertype: "vertical",
                slidein: !1,
                scalewidth: 3600
            };
            (i = _.extend(i, this.model.get("opts"))).viewertype = t.screenshot ? "horizontal" : i.viewertype, (!Modernizr.isdesktop || this.isPreview && "default" !== e) && (i.slidein = !1), 
            "vertical" === i.viewertype && (Modernizr.isdesktop ? this.isStickyVerticalViewer = !i.slidein && !this.isPreview && !this.hasWidgetsWithVerticalOnscrollAnimation : (this.isStickyVerticalViewer = Modernizr.csspositionsticky, 
            this.isStickyVerticalViewer || (i.viewertype = "horizontal", this.pages.length > 1 && (i.arrows = !0)))), 
            i.sharebutton = i.sharebutton && !this.isPreview && !!this.published && !this.is_private, i.pagecounter = i.pagecounter && !this.isPreview && this.pages.length > 1, 
            this.model.user && this.model.user.get && "540dc7a3a5c9259a383b910b" == this.model.user.get("_id") && (i = _.extend(i, {
                arrows: !0,
                menubutton: this.isPreview,
                sharebutton: !1,
                pagecounter: !1
            })), this.viewOpts = i, this.PRELOAD_COUNT = "horizontal" == this.viewOpts.viewertype ? this.PRELOAD_COUNT_HORIZONTAL : this.PRELOAD_COUNT_VERTICAL;
        },
        setViewerClasses: function() {
            this.$el.removeClass("viewer-type-horizontal viewer-type-vertical").addClass("viewer-type-" + this.viewOpts.viewertype).removeClass("pages-pos-normal pages-pos-overlap").addClass("pages-pos-" + (this.viewOpts.slidein ? "overlap" : "normal")), 
            "vertical" == this.viewOpts.viewertype && ($("html").addClass("overflow-on-vertical-view"), this.isStickyVerticalViewer && (this.$el.addClass("viewer-type-vertical-sticky"), 
            $("body").addClass("overflow-on-vertical-view")));
        },
        unsetViewerClasses: function() {
            this.$el.removeClass("viewer-type-horizontal viewer-type-vertical").removeClass("pages-pos-normal pages-pos-overlap"), 
            "vertical" == this.viewOpts.viewertype && ($("html").removeClass("overflow-on-vertical-view"), this.$magScrollSizer.css("height", ""), 
            this.isStickyVerticalViewer && (this.$el.removeClass("viewer-type-vertical-sticky"), $("body").removeClass("overflow-on-vertical-view")));
        },
        render: function() {
            if (!this.active) {
                this.title = this.title || "Project", this.magOpenTime = new Date(), this.setElement(this.template({
                    hasStandaloneBottomArrow: !this.isPreview && "vertical" == this.viewOpts.viewertype && this.viewOpts.arrows,
                    isPreview: !!this.isPreview
                })), this.$el.appendTo(this.$container), this.setViewerClasses(), $("body").on("click", "a.external-link", this.toExternalLink).on("click", ".maglink.back-to-top", this.backToTopCurrentPage).on("click", ".maglink", this.maglink).on("click", ".goback-link", this.onGobackLinkClick).on("click", ".mailchimp-link", this.onMailchimpLinkClick).on("click", ".anchor-link", this.onAnchorLinkClick).on("click", ".share-link", this.onShareLinkClick), 
                this.$mag_container = this.$(".mag-pages-container"), this.$mag_container.on("scroll", this.fixFocusScroll), 
                this.$mag_viewport_device = this.$(".mag-pages-viewport-device"), this.$pages_container = this.$(".mag-pages-container .container"), 
                this.$pages_blackout = this.$pages_container.find(".blackout"), this.$aboveWidgetsContainer = this.$(".above-pages-container"), 
                "vertical" == this.viewOpts.viewertype && (this.$magScrollContainer = $(window), this.$magScrollSizer = $("body"), 
                this.isStickyVerticalViewer && (this.$magScrollSizer = $("body").add(this.$el)), this.$magScrollHandler = $(window), 
                this.$magScrollAnimate = $("body, html")), "vertical" == this.viewOpts.viewertype && (this.$bottomArrow = this.$(".navigation-arrow.bottom"), 
                this.$bottomArrow.one("click", this.scrollMagALittle)), this.active = !0;
                var e = this.pages;
                this.pages = null, this.viewport = null, this.switchToViewport(this.getMagViewport()), this.onResize(), 
                Modernizr.isdesktop || setTimeout(this.onResize, 1500), this.pages = _(e).chain().sortBy(function(t) {
                    return t.num;
                }).map(_.bind(function(i) {
                    var s = "";
                    try {
                        s = new t.classes.Page({
                            mag: this,
                            router: this.router,
                            totalPages: e.length,
                            pageData: i,
                            viewerType: this.viewOpts.viewertype,
                            isStickyVerticalViewer: this.isStickyVerticalViewer,
                            $container: this.$pages_container
                        }).render();
                    } catch (t) {
                        console.log("Error page rendering.", t);
                    }
                    return s;
                }, this)).filter(function(t) {
                    return !!t;
                }).value();
                var i = this.getPage(this.getPagesCount());
                i && i.markAsLast(), "horizontal" == this.viewOpts.viewertype && this.setPagesTransitions(), t.screenshot || ("horizontal" == this.viewOpts.viewertype && this.viewOpts.arrows && (this.navigation = new t.classes.Navigation({
                    mag: this,
                    router: this.router,
                    $container: this.$el,
                    isPreview: this.isPreview,
                    viewerType: this.viewOpts.viewertype
                }).render()), this.toolbar = new t.classes.Toolbar({
                    mag: this,
                    pages: this.pages,
                    router: this.router,
                    $container: this.$el,
                    isPreview: this.isPreview,
                    hasMenu: this.viewOpts.menubutton,
                    hasProjectInfo: this.viewOpts.projectinfo,
                    hasShare: this.viewOpts.sharebutton && !t.constants.IS_FILE_PROTOCOL,
                    hasPageCounter: this.viewOpts.pagecounter,
                    viewerType: this.viewOpts.viewertype,
                    publishDate: this.published ? new Date(this.published).format("mmm dd, yyyy") : "unpublished"
                }).render(), !this.must_show_branding || t.common.embedMode && !Modernizr.isdesktop || (this.branding = new t.classes.Branding({
                    mag: this,
                    $container: this.$el
                }).render())), "vertical" == this.viewOpts.viewertype && (this.onResize(), Modernizr.isdesktop && this.getPage(1) && this.getPage(1).$content.focus(), 
                $("body").on("keydown", this.onVerticalViewKeyDown)), Modernizr.isdesktop ? ($(window).on("mousedown", this.onMouseDown), 
                $(window).on("mouseup", this.onMouseUp), $(window).on("mousewheel", this.onMouseWheel)) : ($(window).on("touchstart", this.onDragStart), 
                $(window).on("touchmove", this.onDragMove), $(window).on("touchend touchcancel", this.onDragEnd), $(window).on("pageshow", this.onResize)), 
                t.utils.PageVisibilityManager.addEventListener(this.onPageVisibilityChange), this.listenTo(this, "finalPageShown", this.onFinalPageShow), 
                this.listenTo(this, "finalPageHidden", this.onFinalPageHide), this.listenTo(Backbone, "form:focus", this.onFormFocus), 
                this.listenTo(Backbone, "form:blur", this.onFormBlur), $(window).on("resize", this.onResize), Modernizr.isdesktop || $(window).on("orientationchange", this.onResize), 
                $(window).on("gesturestart gestureend", this.onGestureChange), "vertical" == this.viewOpts.viewertype && this.$magScrollHandler.on("scroll", this.onMagScroll), 
                $("body").on("keyup", this.onKeyup), t.textutils.generateCSS("paragraph", "viewer", document, this.edit_params && this.edit_params.paragraph_styles), 
                t.textutils.generateCSS("link", "viewer", document, this.edit_params && this.edit_params.link_styles), 
                t.screenshot && "true" == t.utils.queryUrlGetParam("pdf") || this.isPreview || t.textutils.setShortList(t.textutils.getVeryShortList(this.edit_params && this.edit_params.fonts));
                var s = !this.isPreview && this.model.get("is_published") ? "published" : "edit", n = this;
                return "edit" != s || window.TypekitPreview || Modernizr.isboxversion ? a() : $.getScript(this.TYPEKIT_PREVIEW_API_LINK, function(t, e, i) {
                    a();
                }), this;
            }
            function a() {
                t.textutils.appendFontsCssToDocument({
                    version: s,
                    fonts: n.edit_params && n.edit_params.fonts,
                    typekit_url: n.typekit_url
                });
            }
        },
        destroy: function() {
            return _.each(this.pages, function(t) {
                t.destroy();
            }), this.pages = null, $("body").off("click", "a.external-link", this.toExternalLink).off("click", ".maglink.back-to-top", this.backToTopCurrentPage).off("click", ".maglink", this.maglink).off("click", ".goback-link", this.onGobackLinkClick).off("click", ".mailchimp-link", this.onMailchimpLinkClick).off("click", ".anchor-link", this.onAnchorLinkClick).off("keydown", this.onVerticalViewKeyDown).off("click", ".share-link", this.onShareLinkClick), 
            this.toolbar && this.toolbar.destroy(), this.navigation && this.navigation.destroy(), this.finalPage && this.finalPage.destroy(), 
            Modernizr.isdesktop ? ($(window).off("mousedown", this.onMouseDown), $(window).off("mouseup", this.onMouseUp), 
            $(window).off("mousewheel", this.onMouseWheel)) : ($(window).off("touchstart", this.onDragStart), $(window).off("touchmove", this.onDragMove), 
            $(window).off("touchend touchcancel", this.onDragEnd), $(window).off("pageshow")), this.unsetViewerClasses(), 
            t.utils.PageVisibilityManager.removeEventListener(this.onPageVisibilityChange), $(window).off("resize", this.onResize), 
            $(window).off("orientationchange", this.onResize), $(window).off("gesturestart gestureend", this.onGestureChange), 
            "vertical" == this.viewOpts.viewertype && this.$magScrollHandler.off("scroll", this.onMagScroll), $("body").off("keyup", this.onKeyup), 
            this.active = !1, this.remove();
        },
        getUrl: function() {
            return t.common.isDomainViewer ? window.location.protocol + "//" + window.location.hostname + "/" + (t.common.customDomainProfile ? this.num_id + "/" : "") : window.location.protocol + "//" + window.location.hostname + "/" + this.num_id + "/";
        },
        getPage: function(t, e) {
            return parseInt(t, 10) == t && (t = parseInt(t, 10)), _.isNumber(t) ? this.pages[t - 1] : _(this.pages).find(function(e) {
                return e.uri == t;
            });
        },
        getPagesCount: function() {
            return this.pages.length;
        },
        isFirstPage: function() {
            return this.currentPage && !this.getPage(this.currentPage.num - 1);
        },
        isLastPage: function() {
            return this.currentPage && !this.getPage(this.currentPage.num + 1);
        },
        getPageNum: function(t) {
            var e = _.find(this.pages, function(e) {
                return e._id == t;
            });
            return e && e.num;
        },
        getPageUri: function(t) {
            var e = _.find(this.pages, function(e) {
                return e._id == t;
            });
            if (!e) return null;
            var i = e.uri ? e.uri + "/" : 1 == e.num ? "" : e.num + "/";
            return this.router.getMagUri(this) + i;
        },
        getPageTransitionTime: function() {
            var t = Math.min(this.viewOpts.scalewidth, this.getContainerSizeCached().width), e = this.getContainerSizeCached().height;
            return Modernizr.isdesktop ? 550 : Modernizr.istablet ? t > e ? 550 : 470 : t > e ? 520 : 370;
        },
        onPageVisibilityChange: function() {
            var e;
            this.currentPage && (t.utils.PageVisibilityManager.isPageHidden() ? (this.currentPage.stop({
                widgetTypes: [ "video", "background", "iframe" ]
            }), (e = this.getPage(this.currentPage.num + 1)) && e.started && (e.stop({
                widgetTypes: [ "video", "background", "iframe" ]
            }), this.restartNextPage = !0)) : (this.currentPage.start({
                widgetTypes: [ "audio", "video", "background", "iframe" ],
                forceStart: !0
            }), (e = this.getPage(this.currentPage.num + 1)) && this.restartNextPage && (e.start({
                widgetTypes: [ "audio", "video", "background", "iframe" ],
                forceStart: !0
            }), delete this.restartNextPage)));
        },
        updateArrowsColor: function(t) {
            if (t) {
                var e = t.arrows_color || "white";
                this.$el.removeClass("navigation-white-arrows").removeClass("navigation-black-arrows").addClass("navigation-" + e + "-arrows");
            }
        },
        onFinalPageShow: function() {
            this.currentPage && this.currentPage.stop({
                widgetTypes: [ "audio", "video", "background", "iframe" ]
            }), "horizontal" == this.viewOpts.viewertype && (this.$pages_container.removeClass("disable-transitions"), 
            this.$pages_container.addClass("fade-last-page-on-final-page"));
        },
        onFinalPageHide: function() {
            this.currentPage && this.currentPage.start({
                widgetTypes: [ "audio", "video", "background", "iframe" ]
            }), "horizontal" == this.viewOpts.viewertype && this.$pages_container.removeClass("fade-last-page-on-final-page");
        },
        onFormFocus: function() {
            if (Modernizr.safari && !Modernizr.isdesktop && "vertical" === this.viewOpts.viewertype) {
                var t = this.getScroll();
                _.each(this.pages, function(e) {
                    e.trigger("form:focus", t);
                }), this.$magScrollContainer && this.$magScrollContainer.on("scroll", this.onScrollWithFormInFocus);
            }
        },
        onFormBlur: function() {
            (Modernizr.safari || !Modernizr.isdesktop) && "vertical" === this.viewOpts.viewertype && (_.each(this.pages, function(t) {
                t.trigger("form:blur");
            }), this.$magScrollContainer && this.$magScrollContainer.off("scroll", this.onScrollWithFormInFocus));
        },
        onScrollWithFormInFocus: function() {
            if ((Modernizr.safari || !Modernizr.isdesktop) && "vertical" === this.viewOpts.viewertype) {
                var t = this.getScroll();
                _.each(this.pages, function(e) {
                    e.trigger("page:scrollWithFormInFocus", t);
                });
            }
        },
        onDragStart: function(t) {
            clearTimeout(this.touchInProgressTimeout), this.pauseLoading("touch");
            var e = t.originalEvent.targetTouches[0];
            this.globalTouchObject = {
                $target: $(t.target).closest(".has-horizontal-scroll, .has-vertical-scroll"),
                x: e.screenX,
                y: e.screenY,
                startTime: +new Date()
            };
        },
        onDragMove: function(e) {
            var i = this.globalTouchObject;
            if (!(e.originalEvent.touches.length > 1) && i) {
                if ("horizontal" == this.viewOpts.viewertype) this.currentPage && this.currentPage.hasFixedWidgets && $(e.target).closest(this.$mag_container).length && !i.$target.length && (i.$target = this.currentPage.$scrollWrapper); else i.$target.length || (i.$target = this.$magScrollContainer);
                if (i.$target.length) {
                    if (!t.utils.isPageNativelyScaled()) {
                        var s = e.originalEvent.targetTouches[0], n = (s.screenX, i.x, s.screenY - i.y);
                        if (Math.abs(n) > 5 && i.$target.hasClass("has-vertical-scroll")) {
                            var a = i.$target[0].scrollHeight, o = i.$target.outerHeight();
                            n > 0 && i.$target.scrollTop() <= 0 && e.preventDefault(), n < 0 && i.$target.scrollTop() >= a - o && e.preventDefault();
                        }
                        i.$target.hasClass("has-horizontal-scroll");
                    }
                } else e.preventDefault();
            }
        },
        onDragEnd: function(e) {
            this.checkDoubleTap(e), this.touchInProgressTimeout = setTimeout(_.bind(function() {
                this.continueLoading("touch");
            }, this), 400);
            var i = this.globalTouchObject;
            if (i) {
                var s = e.originalEvent.changedTouches[0], n = s.screenX - i.x, a = s.screenY - i.y;
                this.toolbar && this.toolbar.isMenuOpened() && Math.abs(n) < 3 && Math.abs(a) < 3 && +new Date() - i.startTime < 500 && !t.utils.isPageNativelyScaled() && $(e.target).closest(this.$mag_container).length && this.toolbar.closeMenu();
            }
            delete this.globalTouchObject;
        },
        checkDoubleTap: function(e) {
            if (!(e.originalEvent.touches.length > 0)) {
                var i = +new Date(), s = i - (this.lastTouchEndTime || i + 1);
                if (this.lastTouchEndTime = i, s < 500 && s > 0 && t.utils.isPageNativelyScaled()) {
                    var n = $('meta[name="viewport"]');
                    if (n.length) {
                        var a = n.attr("content"), o = a.replace(/maximum\-scale\=[0-9\.]*/, "maximum-scale=1.0");
                        if (n.attr("content", o), Modernizr.android) {
                            var r = $("<div>").appendTo("body");
                            _.delay(function() {
                                r.remove();
                            }, 500), setTimeout(_.bind(function() {
                                n.attr("content", a);
                                var t = $("<div>").appendTo("body");
                                _.delay(function() {
                                    t.remove();
                                }, 500);
                            }, this), 1e3);
                        } else n.attr("content", a);
                        this.lastTouchEndTime = 0, _.delay(function() {
                            $(window).trigger("gesturechange");
                        }, 300), _.delay(function() {
                            $(window).trigger("gesturechange");
                        }, 1e3);
                    }
                }
            }
        },
        onMouseDown: function(t) {
            this.globalMouseObject = {
                x: t.screenX,
                y: t.screenY,
                startTime: +new Date()
            };
        },
        onMouseUp: function(t) {
            var e = this.globalMouseObject;
            if (e) {
                var i = t.screenX - e.x, s = t.screenY - e.y;
                this.toolbar && this.toolbar.isMenuOpened() && Math.abs(i) < 3 && Math.abs(s) < 3 && +new Date() - e.startTime < 500 && $(t.target).closest(this.$mag_container).length && this.toolbar.closeMenu();
            }
            delete this.globalMouseObject;
        },
        onMouseWheel: function(t) {
            t.originalEvent.deltaX < 0 && Math.abs(t.originalEvent.deltaY) < 2 && t.preventDefault();
        },
        onKeyup: function(e) {
            if ("input" != e.target.tagName.toLowerCase() && ("textarea" != e.target.tagName.toLowerCase() || "copyhack" == e.target.className) && _.isEmpty(t.common.disableShortcuts) && !this.isInPresentationMode) {
                var i = _.chain(t.viewports).filter(function(t) {
                    return "tablet_portrait" != t.name || (this.currentPage["viewport_" + t.name] || {}).enabled;
                }, this).map(function(t, e) {
                    var i = _.clone(t);
                    return i.shortcut = "" + (e + 1), i;
                }).findWhere({
                    shortcut: String.fromCharCode(e.keyCode)
                }).value();
                i && this.isPreview && (this.switchToViewport(i.name), this.aboveGlobalWidgetsRendered || "horizontal" !== this.viewOpts.viewertype || this.renderAboveGlobalWidgets(this.currentPage), 
                this.setViewerOptions(i.name), this.setViewerClasses(), this.onResize(), this.loadPages());
                var s = "unknown";
                _.find($.keycodes, function(t, i) {
                    var n = $.keycodes[i] === e.keyCode;
                    return n && (s = i), n;
                }) && (this.trigger("keypress-" + e.keyCode, e), this.router.analytics && this.router.analytics.sendEvent("Key Press", s));
            }
        },
        onKeydown: function(e) {
            if ("input" != e.target.tagName.toLowerCase() && ("textarea" != e.target.tagName.toLowerCase() || "copyhack" == e.target.className) && _.isEmpty(t.common.disableShortcuts) && this.isInPresentationMode && !(e.altKey || e.ctrlKey || e.metaKey)) switch (e.which) {
              case 8:
              case 33:
              case 80:
              case 37:
              case 72:
              case 38:
              case 75:
                e.preventDefault(), this.goPrevPage({
                    animation: !0
                });
                break;

              case 13:
              case 34:
              case 78:
              case 39:
              case 76:
              case 40:
              case 74:
                e.preventDefault(), this.goNextPage({
                    animation: !0
                });
                break;

              case 36:
                e.preventDefault(), this.goFirstPage();
                break;

              case 35:
                e.preventDefault(), this.goLastPage();
                break;

              case 9:
              case 32:
                e.preventDefault(), e.shiftKey ? this.goPrevPage({
                    animation: !0
                }) : this.goNextPage({
                    animation: !0
                });
                break;

              case 77:
                e.preventDefault(), this.trigger("keypress-" + e.keyCode, e);
            }
        },
        onVerticalViewKeyDown: function(t) {
            var e;
            if (!this.isInPresentationMode && "vertical" === this.viewOpts.viewertype && (t.which === $.keycodes.down || t.which === $.keycodes.up)) {
                if (t.preventDefault(), this.arrowKeyLastScrollAt && new Date() - this.arrowKeyLastScrollAt < 400) return;
                var i = t.which === $.keycodes.down;
                this.arrowKeyLastScrollAt = +new Date();
                var s, n, a = window.innerHeight, o = this.getScroll(), r = this.getScrollPosition(), l = Math.round(a / 4), c = function(t) {
                    return t && t <= l;
                }, d = _.bind(function() {
                    var t = this.magPagesPos[this.currentPage.num];
                    return Math.abs(o - t.y);
                }, this), h = this.currentPage.pageHeight, p = 0 === r && !this.isFirstPage();
                if (i) c(s = h - r - a) ? n = h - r : n = (e = s) > l && e < a ? s : a, p && this.viewOpts.slidein && (n += d()); else {
                    if (p) {
                        var u = this.magPagesPos[this.currentPage.num - 1];
                        r = u ? u.h : 0;
                    }
                    n = c(s = r - a) || r < a ? -r : -a, p && this.viewOpts.slidein && (n -= this.SCROLL_SNAP - d());
                }
                this.setScrollPosition({
                    delta: n,
                    animate: !0
                });
            }
        },
        togglePresentationMode: function(t) {
            !!this.isInPresentationMode != t && Modernizr.isdesktop && (this.isPreview || (t ? ($("body").on("keydown", this.onKeydown), 
            this.trigger("presentationModeOn")) : ($("body").off("keydown", this.onKeydown), this.trigger("presentationModeOff")), 
            this.isInPresentationMode = t));
        },
        recalcBottomArrowState: function(t) {
            this.currentPage && t === this.currentPage && this.navigation && this.navigation.recalcBottomArrowState(t);
        },
        setScrollPosition: function(t) {
            var e;
            this.currentPage && ("vertical" == this.viewOpts.viewertype ? (e = void 0 !== t.offset ? this.magPagesPos[this.currentPage.num].y + t.offset : this.getScroll() + t.delta, 
            t.animate ? this.$magScrollAnimate.animate({
                scrollTop: e
            }, 500) : this.setScroll(e)) : (e = void 0 !== t.offset ? t.offset : this.currentPage.$scrollWrapper.scrollTop() + t.delta, 
            t.animate ? this.currentPage.$scrollWrapper.animate({
                scrollTop: e
            }, 500) : this.currentPage.$scrollWrapper.scrollTop(e)));
        },
        getScrollPosition: function() {
            if (!this.currentPage) return 0;
            return "vertical" == this.viewOpts.viewertype ? Math.max(this.getScroll() - this.magPagesPos[this.currentPage.num].y, 0) : this.currentPage.$scrollWrapper.scrollTop();
        },
        getScroll: function() {
            return this.$magScrollContainer && this.$magScrollContainer.scrollTop();
        },
        setScroll: function(t) {
            this.$magScrollContainer && this.$magScrollContainer.scrollTop(t);
        },
        onMagScroll: function() {
            _.isFunction(this._resetUrlStringTimeoutFunc) && this._resetUrlStringTimeoutFunc(), this.pauseWidgetsLoadingOnScroll();
            var t = this.findPageOnCurrentMagScroll({
                pageStartsOnBottom: this.isStickyVerticalViewer && !Modernizr.isdesktop
            }), e = this.getScrollParams(t);
            if (this.lastPageScroll = e.pageScroll, this.lastPageScrollPercent = e.pageScrollPercent, this.showPage(t.page.num, e), 
            this.finalPage && !this.isStickyVerticalViewer && (void 0 != t.finalPageScroll ? this.finalPage.scrollOnVerticalMode(t.finalPageScroll) : this.finalPage.resetScrollOnVerticalMode()), 
            this.aboveGlobalAnimations && this.aboveGlobalAnimations.onScroll({
                forceApply: !0,
                scroll: this.getScroll()
            }), this.finalPage) {
                var i = t.finalPageShown;
                i != !!this.lastFinalPageState && this.trigger(i ? "finalPageShown" : "finalPageHidden"), this.lastFinalPageState = i;
            }
            if (this.$bottomArrow && +this.magOpenTime + 2e3 < +new Date()) {
                this.$bottomArrow.addClass("offscreen");
                var s = this.$bottomArrow;
                delete this.$bottomArrow, setTimeout(function() {
                    s.remove();
                }, 400);
            }
        },
        scrollMagALittle: function() {
            this.$magScrollAnimate.animate({
                scrollTop: this.getScroll() + this.getContainerSizeCached().height
            }, 500);
        },
        findPageOnCurrentMagScroll: function(t) {
            t = t || {};
            var e, i, s, n, a = this.getScroll(), o = this.getContainerSizeCached(), r = (a = Math.min(Math.max(a, 0), this.magHeight - o.height), 
            this.pages.length), l = a + (t.pageStartsOnBottom ? o.height - 50 - 16 - 16 : 0);
            for (e = 0; e < r; e++) {
                i = this.pages[e], s = this.magPagesPos[i.num];
                var c, d = n ? n.y + n.h : s.y;
                if (l >= d && l < s.y + s.h || e == r - 1) return e == r - 1 && (c = Math.max(a - s.y - s.h - s.dh, 0)), 
                {
                    page: i,
                    scroll: a,
                    pos: s,
                    finalPageScroll: c,
                    finalPageShown: this.finalPage && !(l >= d && l < s.y + s.h)
                };
                n = s;
            }
        },
        getScrollParams: function(t) {
            var e = Math.max(t.scroll - t.pos.y, 0), i = {
                initiator: "scroll",
                pageScroll: e,
                pageScrollPercent: e / t.page.pageHeight
            };
            if (this.viewOpts.slidein ? (i.nextPageScroll = 0, i.slideInNextPageScroll = t.pos.h - i.pageScroll) : i.nextPageScroll = i.pageScroll - t.pos.h, 
            i.nextPageVisible = t.pos.h - i.pageScroll < this.getContainerSizeCached().height, this.viewOpts.slidein) {
                var s = (t.pos.h - i.pageScroll) / this.getContainerSizeCached().height;
                i.nextPageBlackout = Math.min(Math.max(s, 0), 1);
            }
            return i;
        },
        onCurrentPageScroll: function(t, e) {
            this.pauseWidgetsLoadingOnScroll(), this.aboveGlobalAnimations && this.aboveGlobalAnimations.onScroll({
                forceApply: !this.isStickyVerticalViewer,
                scroll: e
            }), this.lastPageScroll = e, this.lastPageScrollPercent = this.lastPageScroll / t.pageHeight, this.loadPages.__debounced();
        },
        scrollCurrentPageALittle: function() {
            this.currentPage && this.currentPage.scrollPageALittle();
        },
        focusCurrentPage: function() {
            this.currentPage && this.currentPage.focusPage();
        },
        backToTopCurrentPage: function() {
            if ("vertical" == this.viewOpts.viewertype) {
                var e = this.findPageOnCurrentMagScroll();
                this.$magScrollAnimate.animate({
                    scrollTop: e.pos.y
                }, 500);
            } else this.currentPage && this.currentPage.backToTop();
            t.analytics && t.analytics.sendEvent("Scroll Top Link");
        },
        scrollPageToPos: function(t, e) {
            var i, s, n = this.getPage(t), a = this.getContainerSizeCached(), o = n.scale;
            e = e || 0, e *= o, e += n.contentPosition.top, "vertical" == this.viewOpts.viewertype ? (i = this.magPagesPos[n.num], 
            s = Math.max(0, i.y + e), s = Math.min(s, i.y + i.h - a.height), this.$magScrollAnimate.animate({
                scrollTop: s
            }, 500)) : (this.currentPage != n && this.showPage(n.uri || n.num), s = Math.max(0, e), n.scrollTo(s));
        },
        pauseWidgetsLoadingOnScroll: function() {},
        toExternalLink: function(e) {
            var i = $(e.target).closest("a").attr("href");
            t.analytics && t.analytics.sendEvent("External Link", i);
        },
        maglink: function(t) {
            if (2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget).data("link") || $(t.currentTarget).attr("href");
                if (!e) return !1;
                if (t.preventDefault(), $(t.currentTarget).hasClass("back-to-top")) return this.backToTopCurrentPage();
                this.router.navigate(e, {
                    trigger: !0
                });
            }
        },
        onGobackLinkClick: function(t) {
            this.router.goBack();
        },
        onMailchimpLinkClick: function(e) {
            var i, s = $(e.currentTarget);
            if (!s.hasClass("disabled")) {
                s.flashClass("disabled", 3e3);
                try {
                    i = JSON.parse(s.attr("data-mailchimp"));
                } catch (e) {
                    i = null;
                }
                i && t.initutils.initMailchimpAPI(function(e) {
                    t.utils.deleteCookie("MCEvilPopupClosed"), e.start(i);
                });
            }
        },
        onAnchorLinkClick: function(e) {
            var i = $(e.currentTarget), s = parseInt(i.attr("data-anchor-link-pos"), 10) || 0, n = i.attr("data-page-uri");
            s && n && (this.scrollPageToPos(n, s), t.analytics && t.analytics.sendEvent("Anchor Link", s));
        },
        onShareLinkClick: function(e) {
            t.shareutils.share({
                host: (t.common.embedDomainName || window.location.protocol + "//" + window.location.hostname) + "/",
                tp: $(e.currentTarget).attr("data-share-provider"),
                source: "mag links",
                page: this.currentPage || this.pages[0],
                mag: _.extend(this.model.toJSON(), {
                    user: this.user
                }),
                forProject: "mag" == $(e.currentTarget).attr("data-share-type"),
                customDomain: !(!t.common.isDomainViewer && !t.common.embedDomainName),
                customDomainProfile: !(!t.common.customDomainProfile && "User" != t.common.embedDomainType),
                analytics: this.router.analytics
            });
        },
        showPageCounter: function(t) {
            if (this.toolbar) {
                var e = 1;
                this.currentPage && (e = this.currentPage.num + (t ? "left" == t ? 1 : -1 : 0), e = Math.max(Math.min(e, this.getPagesCount()), 1)), 
                this.toolbar.showPageCounter(this.getPage(e), {
                    showPageCounter: !0
                });
            }
        },
        showPage: function(t, e) {
            e = e || {}, this.active || this.render();
            var i = this.getPage(t), s = this.currentPage, n = i && this.getPage(i.num + 1), a = this;
            i && !this.aboveGlobalWidgetsRendered && this.renderAboveGlobalWidgets(i), this.isStickyVerticalViewer ? this.redrawAboveGlobalWidgets() : e.nextPageVisible || "horizontal" === this.viewOpts.viewertype ? this.redrawAboveGlobalWidgets(i, n, e.slideInNextPageScroll || e.nextPageScroll, e.animation) : i ? this.redrawAboveGlobalWidgets(i) : s && this.redrawAboveGlobalWidgets.__debounced(), 
            "vertical" == this.viewOpts.viewertype && (e.animation = !1, i && i.scrollOnVerticalMode(e.pageScroll || 0), 
            i && n && void 0 != e.nextPageScroll && (n.scrollOnVerticalMode(e.nextPageScroll), this.isStickyVerticalViewer || (e.nextPageVisible ? n.start() : n.stop())), 
            i && void 0 != e.nextPageBlackout && this.$pages_blackout.css({
                display: n ? "block" : "none",
                opacity: e.nextPageBlackout,
                "z-index": i.getPageZIndex()
            }));
            var o = !this.currentPage;
            if (!o && (t == this.currentPage.num || t == this.currentPage.uri)) return !1;
            if (!i) return 1 != t && this.router.onError(), !1;
            if (s) if ("horizontal" == this.viewOpts.viewertype || this.isStickyVerticalViewer) s.stop(); else {
                n == s && e.nextPageVisible || s.stop();
                var r = s && this.getPage(s.num + 1);
                r && !(r == i || r == n && e.nextPageVisible) && r.stop();
            } else e.animation = !1;
            this.pauseLoading("page-change-animation"), this.currentPage = i, s && s.resetWaitForAnimationEnd(), 
            clearInterval(this.showPageCompleteInterval), this.$pages_container.toggleClass("disable-transitions", !e.animation), 
            e.animation && (this.viewOpts.slidein && s && s.num > i.num ? s.waitForAnimationEnd(p) : i.waitForAnimationEnd(p)), 
            this.direction = !s || s.num < i.num ? "forward" : "backward";
            var l = i.num - ("forward" == this.direction ? this.PRELOAD_COUNT.backward : this.PRELOAD_COUNT.forward), c = i.num + ("forward" == this.direction ? this.PRELOAD_COUNT.forward : this.PRELOAD_COUNT.backward);
            "horizontal" != this.opts.viewertype || this.opts.arrows || (l = c = i.num);
            for (var d = 0; d < this.pages.length; d++) {
                var h = this.pages[d];
                h.num < i.num ? h.setPosition("prev", h.num + 1 == i.num) : h.num > i.num ? h.setPosition("next", h.num - 1 == i.num) : h.setPosition("center", h.num == i.num), 
                h.num >= l && h.num <= c && h.show(), "vertical" == this.viewOpts.viewertype && (h.num < i.num || h.num > i.num + 1) && h.resetScrollOnVerticalMode();
            }
            function p() {
                function t() {
                    for (var t = 0; t < a.pages.length; t++) {
                        var e = a.pages[t];
                        (e.num < l || e.num > c) && e.hide();
                    }
                    !a.lastFinalPageState && i.start(), a.loadPages();
                }
                e.animation || o || window.requestAnimationFrame(function() {
                    a.$pages_container.removeClass("disable-transitions");
                }), a.continueLoading("page-change-animation"), "vertical" == a.viewOpts.viewertype && "scroll" != e.initiator && a.setScroll(a.magPagesPos[i.num].y), 
                a.isPreview && a.$el.scrollTop(0), clearInterval(a.showPageCompleteInterval), a.loadingPaused ? a.showPageCompleteInterval = setInterval(function() {
                    a.loadingPaused || (clearInterval(a.showPageCompleteInterval), t());
                }, 17) : t();
            }
            !e.animation && p(), this.scheduleSetUrlString({
                replace: !o,
                skipInternalHistory: e.skipInternalHistory
            }), this.router.trackPage(), this.router.setTitle(), this.trigger("pageChanged", i, {
                showPageCounter: e.animation || e.bySwipe || o || "scroll" == e.initiator,
                initial: o
            }), i.trigger("changedTo"), "vertical" == this.viewOpts.viewertype && this.updateArrowsColor(i);
        },
        scheduleSetUrlString: function() {
            if (!Modernizr.chrome) return this.router.setUrlString.apply(this.router, arguments), void (this._resetUrlStringTimeoutFunc = !1);
            var t = arguments;
            this._resetUrlStringTimeoutFunc = function() {
                clearTimeout(this._urlStrigScheduleTimeout), this._urlStrigScheduleTimeout = setTimeout(function() {
                    this._resetUrlStringTimeoutFunc = null, this.router.setUrlString.apply(this.router, t);
                }.bind(this), 100);
            }.bind(this), this._resetUrlStringTimeoutFunc();
        },
        goNextPage: function(t) {
            var e = this.finalPage && this.finalPage.shown;
            this.isLastPage() ? e || (this.finalPage && this.finalPage.show(), this.finalPage && this.redrawAboveGlobalWidgets(this.finalPage)) : this.currentPage && this.router.go(this.currentPage.num + 1, t);
        },
        goPrevPage: function(t) {
            var e = this.finalPage && this.finalPage.shown;
            if (this.isLastPage() && e) return this.finalPage && this.finalPage.hide(), void (this.finalPage && this.redrawAboveGlobalWidgets(this.currentPage));
            this.isFirstPage() || this.currentPage && this.router.go(this.currentPage.num - 1, t);
        },
        goFirstPage: function() {
            this.router.go(1);
        },
        goLastPage: function() {
            this.router.go(this.getPagesCount());
        },
        pauseLoading: function(t) {
            this.pauseReasons = this.pauseReasons || {}, this.pauseReasons[t] = !0, this.loadingPaused = !0;
        },
        continueLoading: function(t) {
            this.pauseReasons = this.pauseReasons || {}, this.pauseReasons[t] = !1, this.loadingPaused = !_.every(_.values(this.pauseReasons), function(t) {
                return !t;
            });
        },
        loadPages: function() {
            if (this.pages && this.pages.length) {
                var t = this.getPagesLoadOrder();
                if (t && t.length) {
                    var e, i, s = [], n = [];
                    for (e = 0; e < t.length; e++) {
                        var a = (i = this.pages[t[e]]).getWidgetsPacks();
                        a.length && s.push(a), n = n.concat(i.getImmediatePack());
                    }
                    if (s.length) {
                        var o = [];
                        for (e = 0; e < s.length; e++) {
                            0 == e && l(e, 0), l(e + 1, 0);
                            for (var r = 1; r < s[e].length; r++) l(e, r);
                        }
                        o.unshift(n), this.widgetsPacksLoadQueue = o, this.stopPagesLoad(), this.loadNextWidgetsPack();
                    }
                }
            }
            function l(t, e) {
                t < 0 || t >= s.length || e < 0 || e >= s[t].length || o.push(s[t][e]);
            }
        },
        stopPagesLoad: function() {
            clearTimeout(this.loadNextWidgetsTimer);
        },
        loadNextWidgetsPack: function() {
            if (this.widgetsPacksLoadQueue.length) if (this.loadingPaused) this.loadNextWidgetsTimer = setTimeout(this.loadNextWidgetsPack, 50); else {
                var e = this.widgetsPacksLoadQueue.shift();
                if (e.length) {
                    var i = _.uniq(_.map(e, "page")), s = i[0];
                    if (1 !== i.length || s.shown && !s.loaded) {
                        var n = this.widgetPackCount + 1;
                        t.performance.widgetPackStart(n, e, s, this.num_id), s.loadWidgetsPack(e, _.bind(function() {
                            if (t.performance.widgetPackEnd(n, !0), this.widgetPackCount++, this.loadNextWidgetsTimer = setTimeout(this.loadNextWidgetsPack, 17), 
                            1 === this.widgetPackCount && t.performance.now()) {
                                var e = Math.round(t.performance.now());
                                this.router.analytics && this.router.analytics.sendEvent("First Widget Pack Loaded", void 0, e);
                            }
                        }, this));
                    } else this.loadNextWidgetsTimer = setTimeout(this.loadNextWidgetsPack, 17);
                } else this.loadNextWidgetsTimer = setTimeout(this.loadNextWidgetsPack, 17);
            } else Backbone.trigger("widgetsQueue:empty", this.num_id);
        },
        getPagesLoadOrder: function() {
            var t = this.currentPage;
            if (t) {
                var e, i = t.num - 1, s = this.pages.length, n = [], a = this, o = t.num - ("forward" == this.direction ? this.PRELOAD_COUNT.backward : this.PRELOAD_COUNT.forward), r = t.num + ("forward" == this.direction ? this.PRELOAD_COUNT.forward : this.PRELOAD_COUNT.backward);
                if (l(i), "backward" == this.direction) {
                    for (l(i - 1), l(i + 1), e = i - 2; e >= o; e--) l(e);
                    for (e = i + 2; e <= r; e++) l(e);
                } else {
                    for (l(i + 1), l(i - 1), e = i + 2; e <= r; e++) l(e);
                    for (e = i - 2; e >= o; e--) l(e);
                }
                return n;
            }
            function l(t) {
                t < 0 || t >= s || !a.pages[t].shown || a.pages[t].loaded || n.push(t);
            }
        },
        onGestureChange: function() {
            this.onResize.__debounced();
        },
        checkFullscreen: function() {
            this.fullscreenCheckCounter = 5, clearInterval(this.fullscreenCheckTimer), this.fullscreenCheckTimer = setInterval(_.bind(function() {
                var t = window.fullScreen || window.innerWidth == screen.width && window.innerHeight >= screen.height - 1;
                this.togglePresentationMode(t), this.fullscreenCheckCounter--, this.fullscreenCheckCounter || clearInterval(this.fullscreenCheckTimer);
            }, this), 500);
        },
        onResize: function(e) {
            if (this.checkFullscreen(), !Modernizr.isdesktop && "horizontal" == this.viewOpts.viewertype || "vertical" == this.viewOpts.viewertype && !this.isStickyVerticalViewer) {
                var i = "horizontal" == this.viewOpts.viewertype ? $("html, body").add(this.$el) : this.$el, s = t.utils.isPageNativelyScaled(), n = window.innerHeight;
                337 == n && 414 == $(window).height() && n++, i.height(s ? "100%" : n), !s && i.scrollTop(0);
            }
            var a = this.getContainerSize(), o = a.width > a.height ? "landscape" : "portrait", r = !1;
            if (!Modernizr.isdesktop && this.prevOrientation && this.prevOrientation != o && (this.switchToViewport(this.getMagViewport()), 
            this.setPagesTransitions(), this.stopPagesLoad(), r = !0, setTimeout(this.onResize, 300), setTimeout(this.onResize, 1500)), 
            this.prevOrientation = o, this.isPreview && "default" != this.viewport) {
                var l = Math.round((this.$el.width() - a.width) / 2), c = Math.round((this.$el.height() - a.height) / 2);
                this.$mag_container.add(this.$mag_viewport_device).css({
                    top: Math.max(c, 0),
                    left: Math.max(l, 0),
                    width: a.width,
                    height: a.height
                });
            } else this.$mag_container.add(this.$mag_viewport_device).css({
                top: "",
                left: "",
                width: "",
                height: ""
            });
            this.$mag_viewport_device.attr("data-viewport", this.viewport), this.setNewPagesWidths(a.width, a.height), 
            this.magHeight = 0, this.magPagesPos = [];
            var d = this.pages && this.pages.length;
            if (_.each(this.pages, _.bind(function(t, e) {
                var i = t.onResize({
                    absolutePosition: this.magHeight
                }), s = 0;
                (e < d - 1 || this.finalPage) && this.viewOpts.slidein && (s = this.SCROLL_SNAP), this.magPagesPos[t.num] = {
                    y: this.magHeight,
                    h: i,
                    dh: s
                }, this.magHeight += i + s;
            }, this)), this.finalPage && (this.isStickyVerticalViewer && this.finalPage.setSizeAndPosForStickyVersion({
                absolutePosition: this.magHeight
            }), this.magHeight += this.finalPage.getHeight()), "vertical" == this.viewOpts.viewertype && this.magHeight) {
                var h = this.$magScrollSizer.width(), p = 0;
                if (this.isPreview && "default" != this.viewport && (p = Math.max(this.$el.height() - this.getViewportSetting("min_height"), 0)), 
                this.$magScrollSizer.css("height", this.magHeight + p), h != this.$magScrollSizer.width() && Modernizr.isdesktop && this.onResize(), 
                this.currentPage) if (this.isStickyVerticalViewer) {
                    if (r) {
                        var u = this.getScrollPosForNewSize();
                        setTimeout(_.bind(function() {
                            this.setScroll(u);
                        }, this), 0);
                    }
                } else this.setScroll(this.getScrollPosForNewSize()), this.onMagScroll();
                this.$bottomArrow && this.$bottomArrow.toggleClass("offscreen", this.getScroll() + a.height + this.SCROLLABLE_TRESHOLD > this.magHeight);
            }
            if ("horizontal" == this.viewOpts.viewertype && this.currentPage && r) {
                u = this.getScrollPosForNewSize();
                setTimeout(_.bind(function() {
                    this.currentPage.$scrollWrapper.scrollTop(u);
                }, this), 0);
            }
            this.currentPage && this.loadPages.__debounced();
        },
        getScrollPosForNewSize: function() {
            return this.currentPage ? "vertical" == this.viewOpts.viewertype ? this.magPagesPos[this.currentPage.num].y + (this.lastPageScrollPercent || 0) * this.currentPage.pageHeight : (this.lastPageScrollPercent || 0) * this.currentPage.pageHeight : 0;
        },
        setNewPagesWidths: function(t, e) {
            var i = this.$el.find("#page-position-style"), s = Modernizr.isdesktop ? "" : " translateZ(0)", n = "\t\t\t\t\t.mag .mag-pages-container .container {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: " + t + "px;\n\t\t\t\t\t}\n\t\t\t\t\t.mag .mag-pages-container .container .page {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: " + t + "px;\n\t\t\t\t\t}\n\t\t\t\t\t.mag .mag-pages-container .container .final-page {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: " + t + "px;\n\t\t\t\t\t}\n", a = "";
            if ("horizontal" == this.viewOpts.viewertype) a = "\t\t\t\t\t\t.mag .mag-pages-container .container .final-page.offscreen {\n\t\t\t\t\t\t\t-webkit-transform: translateX(" + t + "px) " + s + ";\n\t\t\t\t\t\t\ttransform: translateX(" + t + "px) " + s + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mag .mag-pages-container .container .page.prev-page {\n\t\t\t\t\t\t\t-webkit-transform: translateX(" + (this.viewOpts.slidein ? 0 : -t) + "px) " + s + ";\n\t\t\t\t\t\t\ttransform: translateX(" + (this.viewOpts.slidein ? 0 : -t) + "px) " + s + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mag .mag-pages-container .container .page.center-page {\n\t\t\t\t\t\t\t-webkit-transform: translateX(0) " + s + ";\n\t\t\t\t\t\t\ttransform: translateX(0) " + s + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mag .mag-pages-container .container .page.next-page {\n\t\t\t\t\t\t\t-webkit-transform: translateX(" + t + "px) " + s + ";\n\t\t\t\t\t\t\ttransform: translateX(" + t + "px) " + s + ";\n\t\t\t\t\t\t}"; else if (this.isStickyVerticalViewer) {
                var o = this.getContainerSizeCached().height;
                a = "\t\t\t\t\t\t\t.mag .mag-pages-container .container .page .page-fixed-bg-container,\t\t\t\t\t\t\t.mag .mag-pages-container .container .page .fixed-position-container,\t\t\t\t\t\t\t.mag .mag-pages-container .container .page .fixed-position-container-top {\t\t\t\t\t\t\t\theight: " + o + "px;\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.mag .mag-pages-container .container .page .fixed-position-container,\t\t\t\t\t\t\t.mag .mag-pages-container .container .page .fixed-position-container-top,\t\t\t\t\t\t\t.mag .mag-pages-container .container .page:not(.hide-sticky) .content-scroll-wrapper {\t\t\t\t\t\t\t\tmargin-top: " + -o + "px;\t\t\t\t\t\t\t}\n";
            } else a = "\t\t\t\t\t\t\t.mag .mag-pages-container .container .final-page {\n\t\t\t\t\t\t\t\ttop: " + (e + 1) + "px;\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.mag .mag-pages-container .container .page.prev-page {\n\t\t\t\t\t\t\t\ttop: " + (-e - 1) + "px;\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.mag .mag-pages-container .container .page.next-page {\n\t\t\t\t\t\t\t\ttop: " + (e + 1) + "px;\t\t\t\t\t\t\t}\n";
            i.length || (i = $('<style id="page-position-style" type="text/css">')).appendTo(this.$el), "horizontal" == this.viewOpts.viewertype ? (this.$pages_container.addClass("disable-transitions-on-resize"), 
            i.text(n + a), this.$pages_container.height(), this.$pages_container.removeClass("disable-transitions-on-resize")) : i.text(n + a);
        },
        setPagesTransitions: function() {
            var t = this.$el.find("#page-transition-style"), e = this.getPageTransitionTime(), i = "cubic-bezier(0.40, 0.24, 0.40, 1)", s = "\t\t\t\t\t.mag .mag-pages-container .container .page {\n\t\t\t\t\t\t-webkit-transition:\tall " + e + "ms " + i + ";\t\t\t\t\t\ttransition: all " + e + "ms " + i + ";\t\t\t\t\t}\n\t\t\t\t\t.mag .mag-pages-container .container .page.center-page {\n\t\t\t\t\t\t-webkit-transition:\tall " + (e - 5) + "ms " + i + ";\t\t\t\t\t\ttransition: all " + (e - 5) + "ms " + i + ";\t\t\t\t\t}\n\t\t\t\t\t.mag .mag-pages-container .container .final-page {\n\t\t\t\t\t\t-webkit-transition:\tall " + e + "ms " + i + ";\t\t\t\t\t\ttransition: all " + e + "ms " + i + ";\t\t\t\t\t}\n\t\t\t\t\t";
            t.length || (t = $('<style id="page-transition-style" type="text/css">')).appendTo(this.$el), t.text(s);
        },
        switchToViewport: function(t) {
            if (this.viewport != t) {
                var e = this.viewport;
                this.containerSize = null, this.viewport = t, this.trigger("change:viewport", {
                    viewport: this.viewport,
                    oldViewport: e
                }), this.aboveGlobalWidgetsRendered = !1, this.aboveGlobalWidgets && this.aboveGlobalWidgets.forEach(function(t) {
                    t.destroy(), t.off();
                }), this.aboveGlobalAnimations && this.aboveGlobalAnimations.destroy(), this.aboveGlobalWidgets = [], 
                _.each(this.pages, function(t) {
                    t.updateViewport();
                });
            }
        },
        getContainerSize: function() {
            var e, i;
            return this.isPreview && "default" != this.viewport ? (e = this.getViewportSetting("width"), i = Math.min(this.getViewportSetting("min_height"), this.$el.height())) : (e = t.screenshot ? $(window).width() : this.$el.width(), 
            i = t.screenshot ? window.innerHeight : this.isStickyVerticalViewer && Modernizr.safari && !Modernizr.isdesktop ? window.innerHeight > window.innerWidth ? Math.max(window.innerHeight, screen.height - 20 - 20 + 1) : screen.width : this.isStickyVerticalViewer ? window.innerHeight : this.$el.height()), 
            this.containerSize = {
                width: e,
                height: i
            }, this.containerSize;
        },
        getContainerSizeCached: function() {
            return this.containerSize || this.getContainerSize();
        },
        getMagViewport: function() {
            if (this.isPreview) return this.constructorViewport || "default";
            var e = "default";
            if (!Modernizr.isdesktop) {
                var i = this.$el.width(), s = _.reduce(t.viewports, function(e, s, n) {
                    return Math.abs(s.width - i) <= Math.abs(t.viewports[e].width - i) ? n : e;
                }, 0);
                e = t.viewports[s].name;
            }
            return e;
        },
        getViewportSetting: function(e, i) {
            return i = i || this.viewport, (_.findWhere(t.viewports, {
                name: i
            }) || {})[e];
        },
        log: function() {
            for (var t = "", e = 0; e < arguments.length; e++) t += arguments[e] + " ";
            var i = $("#log");
            i.length || (i = $('<div id="log">').css({
                position: "fixed",
                background: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                width: 200,
                height: 300,
                left: 10,
                top: 10,
                "z-index": 999999,
                overflow: "auto"
            }).appendTo("body"));
            var s = i.html().split("<br>");
            i.html(s.slice(-17).join("<br/>") + "<br/>" + t), i.scrollTop(999999);
        },
        fixFocusScroll: function() {
            this.$mag_container.scrollTop(0), this.$mag_container.scrollLeft(0);
        },
        matchSameDomainLink: function(e) {
            var i = e.match(new RegExp("//" + t.utils.escapeSpecial(window.location.hostname) + "/(.*)")), s = i && i[1];
            if (s) {
                var n = this.getPage(s);
                if (n) return n._id;
            }
            return e;
        },
        getScale: function(e) {
            if (t.screenshot) return 1;
            var i = Math.min(this.viewOpts.scalewidth, this.getContainerSizeCached().width), s = i / this.getViewportSetting("width", e);
            return i < this.getContainerSizeCached().width && this.viewOpts.scalableviewer && !Modernizr.firefox && this.$el.find(".page-content-container").addClass("scale-centring"), 
            t.scale.normalize(s);
        },
        getWidgetById: function(t, e) {
            var i, s, n = e && e.getWidgetDataById(t) ? e : _.find(this.pages, function(e) {
                return e.getWidgetDataById && e.getWidgetDataById(t);
            });
            return n ? (s = n.getWidgetById(t)) ? i = window.Promise.resolve(s) : n.loaded || (i = new window.Promise(function(e, i) {
                this.listenToOnce(n, "loaded" + t, function() {
                    var s = n.getWidgetById(t);
                    s ? e(s) : i();
                });
            }.bind(this))) : _.find(this.aboveGlobalWidgetsData, {
                _id: t
            }) && ((s = _.find(this.aboveGlobalWidgets, {
                _id: t
            })) ? i = window.Promise.resolve(s) : this.aboveGlobalWidgetsRendered || (i = new window.Promise(function(e, i) {
                this.listenToOnce(this, "aboveGlobalWidgetsRendered", function() {
                    var s = _.find(this.aboveGlobalWidgets, {
                        _id: t
                    });
                    s ? e(s) : i();
                });
            }.bind(this)))), i || window.Promise.reject();
        },
        renderAboveGlobalWidgets: function(e) {
            var i = [], s = e.pageViewport;
            _.each(this.aboveGlobalWidgetsData, function(n) {
                var a, o = _.find(this.aboveGlobalWidgets, {
                    _id: n._id
                });
                if (o && (o.destroy(), o.off()), n) {
                    var r = e.getWidgetViewportData(n, s);
                    t.widgets[r.type] && ((a = new t.widgets[r.type](r, e)).$fixedContainer = this.$aboveWidgetsContainer, 
                    a.isValid() && i.push(a));
                }
            }.bind(this)), this.aboveGlobalAnimations = this.initializeAboveGlobalAnimation(i, e), _.each(i, function(e) {
                e.render(), e.hidden ? t.globalwidgets.hide(e, !0) : t.globalwidgets.show(e, !0);
            }), this.aboveGlobalWidgets = _.sortBy(i, "y"), this.aboveGlobalWidgetsRendered = !0, this.trigger("aboveGlobalWidgetsRendered");
        },
        initializeAboveGlobalAnimation: function(e, i) {
            e = _.isArray(e) ? e : [ e ], i.scale = this.getScale(i.pageViewport);
            var s = new t.classes.Animations({
                page: i,
                widgets: e
            }), n = [];
            return _.each(e, function(t) {
                var e = new window.Promise(function(e) {
                    t.loaded ? e(t) : t.on("loaded", e.bind(null, t));
                });
                n.push(e);
            }), window.Promise.all(n).then(function() {
                this.aboveAnimationsReady = !0, this.trigger("aboveAnimationsReady");
            }.bind(this)), this.listenTo(i, "resize", function(t) {
                _.isUndefined(t.prevScale) || t.prevScale === t.scale || s.updateTimelines(), s.onResize({
                    updateAll: !0
                });
            }), s;
        },
        updateAboveGlobalViewport: function(e, i) {
            var s = _.find(this.aboveGlobalWidgetsData, {
                _id: e._id
            }), n = i.getWidgetViewportData(s, i.pageViewport);
            if (e.animationObj && this.aboveGlobalAnimations.removeAnimation(e.animationObj), e.destroy(), e.initialize(n, i), 
            e.hasAnimation()) {
                var a = this.aboveGlobalAnimations.addAnimation(e);
                a && a.start();
            }
            e.render(), t.globalwidgets.hide(e, !0);
        },
        getAboveGlobalBox: function(e, i, s) {
            var n = _.find(this.aboveGlobalWidgetsData, {
                _id: e
            }), a = i.getWidgetViewportData(n, i.pageViewport);
            return t.utils.getFixedPositionBox(a.fixed_position, _.pick(a, [ "x", "y", "w", "h" ]), i.scale, s);
        },
        redrawAboveGlobalWidgets: function(e, i, s, n) {
            if (!e) {
                var a = _.isUndefined(this.getScroll()) ? void 0 : this.findPageOnCurrentMagScroll(), o = a && a.page.num, r = a && this.getScrollParams(a);
                e = o && this.getPage(o), i = e && this.getPage(e.num + 1), s = r && (r.slideInNextPageScroll || r.nextPageScroll), 
                n = r && r.animation;
            }
            s = _.isUndefined(s) ? void 0 : Math.abs(s);
            var l = {
                width: Math.min(this.viewOpts.scalewidth, this.getContainerSizeCached().width),
                height: this.getContainerSizeCached().height
            }, c = function(t, e) {
                return !t.page || e && t.page.pageViewport !== e.pageViewport;
            };
            if (_.isUndefined(s)) {
                var d = this.getPageTransitionTime();
                _.each(this.aboveGlobalWidgets, function(i) {
                    var s = e._id && !t.globalwidgets.getUniqueValue("hidden", i, e._id), a = e._id && c(i, e);
                    e._id && i.updatePage(e), a && this.updateAboveGlobalViewport(i, e), s ? n ? i.wasHidden && t.utils.waitForTransitionEnd(e.$el, d, "transform", t.globalwidgets.show.bind(null, i)) : i.wasHidden && t.globalwidgets.show(i) : !i.wasHidden && t.globalwidgets.hide(i);
                }.bind(this));
            } else {
                var h = Math.abs(s);
                _.each(this.aboveGlobalWidgets, function(s) {
                    var n = !t.globalwidgets.getUniqueValue("hidden", s, e._id), a = i && !t.globalwidgets.getUniqueValue("hidden", s, i._id), o = n && a && e.pageViewport === i.pageViewport, r = this.getAboveGlobalBoxMemoized(s._id, e, l), d = this.getAboveGlobalBoxMemoized(s._id, i || e, l), p = n && h > r.top + r.height, u = i && a && d.top > h;
                    if (p || u || o) {
                        var g = p ? e : u ? i : s.page, m = c(s, g);
                        s.updatePage(g), m ? (s.rendered = !1, t.globalwidgets.hide(s).then(function() {
                            this.updateAboveGlobalViewport(s, g), t.globalwidgets.show(s);
                        }.bind(this))) : s.wasHidden && t.globalwidgets.show(s);
                    } else !s.wasHidden && t.globalwidgets.hide(s);
                }.bind(this));
            }
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.ViewerRouter = Backbone.Router.extend({
        routes: {
            ":user(/)(:mag)(/)(:pagenum)(/)": "start"
        },
        mags: {},
        initialize: function() {
            if (Modernizr.addTest("chrome", function() {
                return _.isObject(window.navigator) && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            }), this.route(/^(\d+)\/*(\d*)\/*$/, "start"), t.common.isDomainViewer && this.route("(:mag)(/)(:pagenum)(/)", "start"), 
            t.common.isDownloadedSource && (this.route("(:pagenum)", "start"), /msie [6-9]/i.test(navigator.userAgent) && (location.href = "sorry.html")), 
            $("html").toggleClass("viewer-embed-mode", !!t.common.embedMode), _.bindAll(this), this.started = !1, 
            !t.common.isDownloadedSource && t.data.usersLoader.me && (this.me = t.data.usersLoader.me), this.$mags_container = $("#mags"), 
            this.on("route", this.onRoute), this.magsData = window.ServerData && window.ServerData.mags, this.internalHistory = [], 
            this.magsData) {
                if (this.cachedMag = this.magsData.mag, !this.cachedMag || !this.cachedMag.user || !this.cachedMag.user._id) return;
                t.common.isDownloadedSource || (this.cachedMag.user.isMe = this.me && this.me.get("_id") == this.cachedMag.user._id), 
                t.common.isDomainViewer && (this.magUri = this.cachedMag.uri, this.userUri = this.cachedMag.user && this.cachedMag.user.uri);
            }
            t.screenshot || (t.analytics = t.analytics || new t.classes.Analytics({
                router: this
            }), this.analytics = t.analytics), !t.common.isDomainViewer && this.cachedMag && this.route(/^gift(\/.*?)?$/, function() {
                return this.noUrlRewrite = !0, this.start(this.cachedMag.num_id);
            }.bind(this)), this.isPreview || window.sessionStorage && window.sessionStorage.removeItem("constructorViewport");
        },
        start: function(e, i, s) {
            if (t.common.isDomainViewer && (this.magsData.magNotFound || this.magsData.domainNotFound || this.magsData.magNotPublished || this.magsData.subscriptionExpired)) {
                new t.classes.ServicePage({
                    type: "domain-error",
                    $container: $("#service-pages"),
                    templateData: {
                        state: this.magsData
                    }
                }).render();
            } else {
                if (t.common.isDomainViewer && !t.common.customDomainProfile) parseInt(e, 10) != e && e && /^p\d+\/?$/i.test(e) ? (s = null, 
                i = e, e = null) : (s = e, e = this.userUri, i = this.magUri); else if (t.common.isDownloadedSource) s = e, 
                e = null, i = null; else if (parseInt(e, 10) == e || /^p\d+\/?$/i.test(e)) {
                    var n = i;
                    i = e, s = n, e = null;
                } else if (t.common.customDomainProfile) {
                    n = i;
                    i = e, s = n, e = this.userUri;
                } else if (!i) return this.notFound();
                this.latestFragment = Backbone.history.getFragment(), s = s || 1;
                var a = e + "_" + i;
                if (this.username = e, this.started != a || this.loaded == a) if (this.started = a, this.loaded != this.started) {
                    if (this.cachedMag && !_.isEmpty(this.cachedMag)) return this.cachedMag instanceof t.classes.Mag || this.cachedMag.forbidden || this.cachedMag.is_suspended || (this.cachedMag = new t.classes.Mag(this.cachedMag, this)), 
                    this.mag = this.cachedMag, void this.onLoadMag(s);
                    this._loadingMagDataXHR && this._loadingMagDataXHR.abort(), this._loadingMagDataXHR = this.fetchData(this.username, i, {
                        success: _.bind(function(e) {
                            this.mag && this.mag.num_id && e && e.num_id != this.mag.num_id && window.location.reload(), this.mag = new t.classes.Mag(e, this), 
                            this.cachedMag = this.mag, this.onLoadMag(s);
                        }, this),
                        error: this.notFound
                    });
                } else this.go(s, {
                    animation: !1
                });
            }
        },
        onLoadMag: function(e) {
            var i;
            if (this.loaded = this.started || !0, this.mag.forbidden) return this.requestMagPassword(this.latestFragment, _.clone(this.mag)), 
            delete this.cachedMag, delete this.loaded, void delete this.started;
            this.mag.is_suspended ? this.showSuspended() : (t.common.isDownloadedSource || ($.post("/api/countview/" + this.mag.num_id), 
            t.analytics && (t.analytics._triggerProjectView = !0)), this.mag._requested_page ? (i = this.mag._requested_page, 
            delete this.mag._requested_page) : i = e, Modernizr.addTest("screenshot-mode", function() {
                return t.screenshot;
            }), this.mag.render(), this.go(i, {
                animation: !1
            }), t.common.mode = "mag");
        },
        getAnalyticsDimensions: function() {
            return {
                magId: this.mag && this.mag.model && this.mag.model.get("num_id") || this.mag && this.mag.num_id,
                magCreatorId: this.mag && this.mag.model && this.mag.model.user.get("_id") || this.mag && this.mag.user._id,
                pageType: "viewer",
                userId: this.me && this.me.get("_id")
            };
        },
        fetchData: function(t, e, i) {
            return (i = i || {}).url = t ? "/api/readymag/" + t + "/" + e : "/api/readymag/" + e, $.ajax(i);
        },
        sendReadyEvent: function(t) {
            t = t || {}, t = _.defaults(t, {
                page: {}
            });
            var e = document.createElement("MyExtensionDataElement");
            e.setAttribute("width", t.page.width), e.setAttribute("height", t.page.height), e.setAttribute("_id", t.page._id), 
            document.documentElement.appendChild(e);
            var i = document.createEvent("Events");
            t && t.error ? i.initEvent("MyErrorEvent", !0, !1) : i.initEvent("MyExtensionEvent", !0, !1), e.dispatchEvent(i), 
            window.loadNotifier && loadNotifier();
        },
        setTitle: function() {
            if (this.mag && this.mag.currentPage) {
                var e = _.extend({}, this.mag.model.toJSON());
                e.user = this.mag.user, document.title = t.shareutils.getFinalSEO(this.mag.currentPage, e, {
                    customDomain: !!t.common.isDomainViewer
                }).title;
            }
        },
        trackPage: function() {
            t.screenshot || _.defer(_.bind(function() {
                this.analytics && this.analytics.trackPage();
            }, this));
        },
        go: function(t, e) {
            t = t || 1, this.mag.showPage(t, e);
        },
        goBack: function() {
            var t = this.internalHistory[this.internalHistory.length - 2];
            t && (t && this.go(t, {
                skipInternalHistory: !0
            }), this.internalHistory.pop());
        },
        setUrlString: function(e) {
            if (!this.noUrlRewrite && (e = e || {}, !t.screenshot)) {
                var i, s = this.mag.currentPage;
                if (i = t.common.isDomainViewer && !t.common.customDomainProfile || t.common.isDownloadedSource ? "" : t.common.customDomainProfile ? this.getMagUri(this.mag) : this.username ? this.mag.user.uri + "/" + (this.mag.uri || this.mag.num_id) + "/" : this.isPreview ? this.mag.num_id + "/" : this.getMagUri(this.mag), 
                this.isPreview && (i += "preview/"), s && "1" != s.num && (i += (s.uri || s.num.toString()) + "/"), 
                e.skipInternalHistory ? t.analytics && t.analytics.sendEvent("Back Link", i) : this.internalHistory.push(s.num.toString()), 
                i !== Backbone.history.getFragment()) {
                    var n = (parseInt(_.last(Backbone.history.getFragment(), "/")) || 1) == s.num || e.replace;
                    t.common.isDownloadedSource && "/" !== _.last(i) && (i += "/"), this.navigate(i, {
                        replace: n
                    });
                }
            }
        },
        getPreviousFragment: function() {
            return this.internalHistory[this.internalHistory.length - 2];
        },
        getMagUri: function(e) {
            return t.common.customDomainProfile ? (e.uri || e.num_id) + "/" : t.common.isDomainViewer ? "" : _.isEmpty(e.user) ? e.num_id + "/" : e.user.uri + "/" + (e.uri || e.num_id) + "/";
        },
        onError: function() {
            console.error("Navigation error! page not found: " + Backbone.history.getFragment()), this.mag && this.go(1, {
                animation: !1
            });
        },
        createLoginViewForIframe: function(e, i, s) {
            new t.classes.Login({
                useNavigate: !1,
                $node: $(e),
                router: this,
                joinCallback: i,
                errorMessages: s
            }).render();
        },
        createGiftViewForIframe: function(e) {
            new t.classes.GiftView({
                el: $(e.node),
                stripe: e.stripe,
                Pikaday: e.Pikaday,
                router: this
            }).render();
        },
        createMagFromTemplate: function(e, i) {
            new t.classes.CreateMag({
                router: this,
                me: this.me,
                tp: e,
                templateID: i
            });
        },
        destroy: function() {
            this.cachedMag && this.cachedMag.destroy(), this.magPasswordView && this.magPasswordView.remove(), this.magSuspendedView && this.magSuspendedView.remove();
        },
        requestMagPassword: function(e, i) {
            this.magPasswordView || (this.magPasswordView = new t.classes.MagPassword({
                router: this,
                $parent: $("#mags")
            })), this.magPasswordView.render({
                mag: i,
                mag_url: e
            });
        },
        showSuspended: function() {
            new t.classes.ServicePage({
                type: "mag-suspended",
                $container: $("#service-pages")
            }).render();
        },
        notFound: function() {
            _.defer(function() {
                new t.classes.ServicePage({
                    type: "404",
                    $container: $("#service-pages")
                }).render();
            });
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Animations = Backbone.View.extend({
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e);
            var i = {};
            _.each(this.widgets, _.bind(function(e) {
                e.hasAnimation() && ((e.fixed_position || e.is_full_width || e.sticked) && (e.animation.UUID = t.utils.generateUUID()), 
                i[e.animation.UUID] = i[e.animation.UUID] || [], i[e.animation.UUID].push(e));
            }, this)), this.animations = [];
            var s = !Modernizr.isdesktop || !Modernizr.safari || _.all(i, function(e) {
                return t.animationutils.canBeAccelerated((_.isArray(e) ? e : [ e ])[0].animation);
            });
            _.each(i, function(t) {
                this.addAnimation(t, {
                    allowAccelerate: s
                });
            }.bind(this)), this.start.__debounced = _.debounce(this.start, 300);
        },
        addAnimation: function(t, e) {
            e = e || {};
            var s, n = (t = _.isArray(t) ? t : [ t ])[0].animation.type;
            this.page.mag;
            return (Modernizr.isdesktop || "hover" !== n || t[0].animation.trigger) && (s = new i[n]({
                page: this.page,
                widgets: t,
                allowAccelerate: e.allowAccelerate
            }), this.animations.push(s)), s;
        },
        removeAnimation: function(t) {
            this.animations = _.without(this.animations, t), t && t.destroy();
        },
        start: function() {
            _.each(this.animations, function(t) {
                t.start();
            });
        },
        stop: function() {
            _.each(this.animations, function(t) {
                t.stop();
            });
        },
        resetStarted: function() {
            _.each(this.animations, function(t) {
                t.started = !1;
            });
        },
        onScroll: function(t) {
            t = t || {}, (this.page.mag.currentPage == this.page || t.forceApply) && _.each(this.animations, function(e) {
                e.onScroll && e.onScroll(t);
            });
        },
        onResize: function(t) {
            _.each(this.animations, function(e) {
                e.onResize(t);
            });
        },
        updateTimelines: function() {
            _.each(this.animations, function(t) {
                t.createAnimationTimeline();
            });
        },
        hasScaleUp: function() {
            return Boolean(_.find(this.animations, function(e) {
                return t.animationutils.isScaleUp(e.animation);
            }));
        },
        destroy: function() {
            _.each(this.animations, function(t) {
                t.destroy();
            }), delete this.animations;
        }
    });
    var i = {}, s = Backbone.View.extend({
        className: "animation-container",
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), _.each(this.widgets, _.bind(function(t) {
                t.animationObj = this;
            }, this)), this.isFixed = this.widgets[0].fixed_position, this.isFullwidth = this.widgets[0].is_full_width, 
            this.isSticked = this.widgets[0].sticked, this.isAbove = this.widgets[0].is_above, this.$container = this.isFixed || this.isAbove ? this.widgets[0].$fixedContainer : this.page.$content, 
            !this.isFixed && !this.isAbove && Modernizr.safari && Modernizr.isdesktop && this.page.mag.isStickyVerticalViewer && t.animationutils.isScaleUp(this.widgets[0].animation) && (this.$wrapper = $('<div class="animation-wrapper force3d"/>').appendTo(this.$container)), 
            this.$el.appendTo(this.$wrapper ? this.$wrapper : this.$container), this.createAnimationTimeline(e), 
            this.onResize({
                updateAll: !0
            });
        },
        createAnimationTimeline: function(e) {
            e = e || {}, this.timeline && this.timeline.destroy(), this.animation = t.animationutils.getNormalizedAnimation(this.widgets[0].animation, this.isFixed, this.isFullwidth, this.page.scale), 
            this.timeline = t.animationutils.createAnimationTimeline({
                el: this.$el,
                steps: this.animation.steps,
                type: this.animation.type,
                force3d: e.allowAccelerate && t.animationutils.canBeAccelerated(this.animation),
                loop: t.animationutils.normalizeLoopValue(this.animation.loop),
                animationTrigger: this.animation.trigger,
                screenshotMode: !!t.screenshot
            });
        },
        start: function() {
            this.timeline && this.paused && (this.paused = !1, this.timeline.resume());
        },
        stop: function() {
            this.timeline && this.timeline.active && (this.paused = !0, this.timeline.pause());
        },
        getAnimationContainer: function() {
            return this.$el;
        },
        modifyWidgetPosition: function(t) {
            return this.isFixed ? (t.dimensions.left = "50%", t.dimensions.top = "50%", t.dimensions.right = "", 
            t.dimensions.bottom = "", t.dimensions["margin-left"] = -t.dimensions.width / 2, t.dimensions["margin-top"] = -t.dimensions.height / 2) : (t.dimensions.left -= this.bbox_css.left, 
            t.dimensions.top -= this.bbox_css.top), t;
        },
        onResize: function(t) {
            if ((t = t || {}).updateAll || this.isFixed && this.prevPageScale != this.page.scale || this.isFullwidth || this.isSticked) {
                var e, i = {
                    t: Number.POSITIVE_INFINITY,
                    l: Number.POSITIVE_INFINITY,
                    b: Number.NEGATIVE_INFINITY,
                    r: Number.NEGATIVE_INFINITY,
                    z: 0
                };
                this.isFixed || this.isFullwidth || this.isSticked ? this.bbox_css = this.widgets[0].calcBoxStyle({
                    calcBBox: !0
                }).dimensions : (_.each(this.widgets, function(t) {
                    e = t.calcBoxStyle({
                        calcBBox: !0
                    }).dimensions, i.t = Math.min(i.t, e.top), i.l = Math.min(i.l, e.left), i.b = Math.max(i.b, e.top + e.height), 
                    i.r = Math.max(i.r, e.left + e.width), i.z = Math.max(i.z, e["z-index"]);
                }, this), this.bbox_css = {
                    left: i.l,
                    top: i.t,
                    width: i.r - i.l,
                    height: i.b - i.t,
                    "z-index": i.z
                }), this.$el.css(this.bbox_css);
            }
            this.innerContentTop = this.page.contentPosition.top / this.page.scale, this.innerContainerHeight = this.page.mag.getContainerSizeCached().height / this.page.scale, 
            this.prevPageScale = this.page.scale;
        },
        withTriggerOrElement: function(t) {
            var e = this.animation.trigger;
            e ? this.page.mag.getWidgetById(e, this.page).then(function(e) {
                e.rendered ? t(e.$el) : this.listenToOnce(e, "rendered", function() {
                    t(e.$el);
                });
            }.bind(this)).catch(function() {
                t(this.$el);
            }.bind(this)) : t(this.$el);
        },
        destroy: function() {
            this.stop(), this.timeline && this.timeline.destroy(), this.remove();
        }
    });
    i.scroll = s.extend({
        onScroll: function(t) {
            if (t = t || {}, this.timeline && (this.page.mag.currentPage == this.page && !this.isAbove || t.forceApply)) {
                var e = this.isAbove ? t.scroll : Math.max(0, this.page.visibleWidgetsCoords.scrollTop || 0);
                if (this.isFixed) this.timeline.seek(e); else {
                    var i = this.bbox_css.top + this.innerContentTop, s = i - this.innerContainerHeight, n = {
                        top: 1,
                        center: .5,
                        bottom: 0
                    }[this.animation.steps[0].start_point || "bottom"] * (i - s) + s + this.animation.steps[0].start_offset || 0;
                    n <= 0 ? this.timeline.seek(e / this.page.scale) : this.timeline.seek(Math.max(0, e - n * this.page.scale) / this.page.scale);
                }
            }
        },
        onResize: function() {
            s.prototype.onResize.apply(this, arguments), this.onScroll();
        }
    }), i.load = s.extend({
        visibleHeightPortion: .2,
        initialize: function() {
            s.prototype.initialize.apply(this, arguments);
            var t = this.animation.steps;
            this.startWhenInView = t && t.length && t[0].startWhenInView, this.checkBounds.__throttled = _.throttle(this.checkBounds, 100);
        },
        start: function() {
            s.prototype.start.apply(this, arguments), this.isReady().then(function() {
                this.timeline.play(), Modernizr.isdesktop && Modernizr.safari && (this.timeline.pause(), window.setTimeout(this.timeline.resume, 17)), 
                this.started = !0;
            }.bind(this)).catch(function(t) {
                t && console.log(t && t.stack);
            });
        },
        checkBounds: function() {
            this.scrolledToBounds || window.requestAnimationFrame(function() {
                this.isInBounds() && (this.scrolledToBounds = !0, this.trigger("scrolledToBounds"));
            }.bind(this));
        },
        onScroll: function() {
            this.checkBounds.__throttled();
        },
        isReady: function() {
            var e;
            if (t.screenshot || this.started || t.utils.PageVisibilityManager.isPageHidden()) e = window.Promise.reject(); else {
                var i = this.widgets[0], s = [], n = i.loaded ? window.Promise.resolve() : new window.Promise(function(t) {
                    this.listenToOnce(i, "loaded", t);
                }.bind(this));
                if (this.isAbove) {
                    var a = this.page.mag.aboveAnimationsReady ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(this.page.mag, "aboveAnimationsReady", t);
                    }.bind(this)), o = i.rendered ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(i, "rendered", t);
                    }.bind(this)), r = i.wasHidden ? new window.Promise(function(t) {
                        this.listenToOnce(i, "shown", t);
                    }.bind(this)) : window.Promise.resolve();
                    s = this.startWhenInView ? [ o, r, n ] : [ a, o, r, n ];
                } else {
                    var l = this.page.started ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(this.page, "started", t);
                    }.bind(this)), c = this.page.loadAnimationsReady ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(this.page, "loadAnimationsReady", t);
                    }.bind(this)), d = this.page.isCurrent() ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(this.page, "changedTo", t);
                    }.bind(this)), h = this.isInBounds() ? window.Promise.resolve() : new window.Promise(function(t) {
                        this.listenToOnce(this, "scrolledToBounds", t);
                    }.bind(this)), p = this.isInBounds() ? window.Promise.resolve() : new window.Promise(function(t) {
                        n.then(function() {
                            this.isInBounds() && t();
                        }.bind(this));
                    }.bind(this)), u = window.Promise.race([ h, p ]);
                    s = this.startWhenInView ? [ l, d, u ] : [ c, l ];
                }
                e = window.Promise.all(s);
            }
            return e;
        },
        isInBounds: function() {
            var e = this.page.scale, i = _.map(this.widgets, function(i) {
                var s = i.$el[0];
                return s.parentElement ? t.scale.isOn(e) && t.scale.isZoom() ? t.scale.getBox(s, e) : s.getBoundingClientRect() : {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0
                };
            }), s = t.mathutils.getBoundingBoxOfMany(i), n = $(window).height(), a = this.visibleHeightPortion * s.height;
            return s.height && s.bottom >= a && s.bottom <= n || s.height && s.top <= n - a && s.top > 0;
        }
    }), i.click = s.extend({
        initialize: function() {
            s.prototype.initialize.apply(this, arguments);
            var t = function(t) {
                t.on("click", this.onClick), t.css("cursor", "pointer");
            }.bind(this);
            this.waitingForEnd = !1, this.lastTimeClick = 0, this.withTriggerOrElement(t);
        },
        onClick: function() {
            if (this.timeline && !(+new Date() - this.lastTimeClick < 300)) {
                this.lastTimeClick = +new Date();
                var t = this.timeline;
                t.active ? (this.waitingForEnd ? t.off("full-cycle-end", this.onCycleEnd) : t.on("full-cycle-end", this.onCycleEnd), 
                this.waitingForEnd = !this.waitingForEnd) : (this.waitingForEnd = !1, t.reversed ? t.reverse() : t.play());
            }
        },
        onCycleEnd: function() {
            var t = this.timeline;
            t.off("full-cycle-end", this.onCycleEnd), this.waitingForEnd = !1, t.loop ? t.stop() : t.reversed ? t.reverse() : t.play();
        },
        destroy: function() {
            this.withTriggerOrElement(function(t) {
                t.css("cursor", "");
            }), s.prototype.destroy.apply(this, arguments);
        }
    }), i.hover = s.extend({
        initialize: function() {
            if (s.prototype.initialize.apply(this, arguments), Modernizr.isdesktop) {
                var t = function(t) {
                    t.on("mouseenter", this.onMouseEnter), t.on("mouseleave", this.onMouseLeave);
                }.bind(this);
                _.each(this.widgets, _.bind(function(t) {
                    -1 != [ "text", "shape", "picture", "button" ].indexOf(t.type) && (t.hasHoverAnimation = !0);
                }, this)), this.withTriggerOrElement(t);
            }
        },
        onMouseEnter: function(t) {
            if (this.timeline) {
                var e = this.timeline;
                e.active ? !e.loop && e.reversed ? e.on("full-cycle-end", this.onCycleEnd) : e.off("full-cycle-end", this.onCycleEnd) : !e.reversed && e.play();
            }
        },
        onMouseLeave: function(t) {
            if (this.timeline) {
                var e = this.timeline;
                e.active ? !e.loop && e.reversed ? e.off("full-cycle-end", this.onCycleEnd) : e.on("full-cycle-end", this.onCycleEnd) : !e.loop && e.reversed && e.reverse();
            }
        },
        onCycleEnd: function() {
            var t = this.timeline;
            t.off("full-cycle-end", this.onCycleEnd), t.loop ? t.stop() : t.reversed ? t.reverse() : t.play();
        }
    });
}(RM), window.iconSVGCache = [], function(t, e) {
    "use strict";
    t.classes.ShapeSVG = function() {}, t.classes.ShapeSVG.prototype = {
        MAX_ICON_CACHE_SIZE: 30,
        generateShapeSVG: function(t, e, i, s, n) {
            var a, o = 1e5, r = e.get("bg_color") || e.viewport_default && e.viewport_default.bg_color, l = this.getRGBA(r || "ffffff", e.get("bg_opacity")), c = this.getRGBA(e.get("color"), e.get("opacity"));
            if ("ellipse" == (n = "hotspot" === e.get("type") ? n || e.get("pin_type") : n || e.get("tp"))) {
                var d = i / 2, h = s / 2, p = e.get("borders");
                a = P("ellipse", {
                    cx: d,
                    cy: h,
                    rx: d,
                    ry: h
                }, l, c, p = Math.min(p, d, h), e.id + "_" + t, e.get("opacity"));
            }
            if ("rectangle" == n || "polygon" == n) {
                "hotspot" === e.get("type") && (c = l = "rgba(0, 0, 0, 0)");
                var u = "rectangle" == n ? 4 : e.get("sides"), g = (p = e.get("borders"), e.get("radius") || 0), m = function(t, e, i, s) {
                    for (var n, a, r, l = 2 * Math.PI / t, c = Math.PI / 2 - (t % 2 == 1 ? 0 : l / 2), d = [], h = 999999, p = -999999, u = 999999, g = -999999, m = 0; m < t; m++) n = c + m * l, 
                    a = .5 + .5 * Math.cos(n), r = .5 - .5 * Math.sin(n), d.push({
                        x: a,
                        y: r
                    }), a < h && (h = a), a > p && (p = a), r < u && (u = r), r > g && (g = r);
                    for (var m = 0; m < t; m++) d[m].x = (d[m].x - h) * (e / (p - h)), d[m].y = (d[m].y - u) * (i / (g - u)), 
                    d[m].x = Math.round(d[m].x * o) / o, d[m].y = Math.round(d[m].y * o) / o;
                    return d;
                }(u, i, s), f = function(t) {
                    if (!t) return 99999;
                    for (var e, i = 99999, s = t.length, n = 0; n < s; n++) {
                        var a = t[n].x - t[(n + 1) % s].x, o = t[n].y - t[(n + 1) % s].y;
                        (e = Math.sqrt(a * a + o * o)) < i && (i = e), t[n].side = e;
                    }
                    return i;
                }(m), v = function(t, e, i, s, n, a) {
                    if (!t) return {};
                    if (e <= 1e-4) return {};
                    var r = [], l = t.length;
                    e = Math.min(e, i / 2);
                    for (var c = 0; c < l; c++) {
                        var d, h, p, u, g = t[c], m = t[(c + 1) % l], f = t[c].side, v = (m.x - g.x) / f, _ = (m.y - g.y) / f;
                        d = g.x + v * e, h = g.y + _ * e, p = m.x - v * e, u = m.y - _ * e, d = Math.round(d * o) / o, h = Math.round(h * o) / o, 
                        p = Math.round(p * o) / o, u = Math.round(u * o) / o, r.push({
                            x: d,
                            y: h
                        }), r.push({
                            x: p,
                            y: u
                        });
                    }
                    return {
                        points: r,
                        radius: e
                    };
                }(m, g, f);
                a = P("path", {
                    path: _ = function(t, e, i) {
                        if (!t) return "";
                        for (var s = t.length, n = "", a = 0; a < s; a++) {
                            var o = 2 * a + 1, r = (2 * a + 2) % (2 * s);
                            if (n += 0 == a ? "M" : "L", e) {
                                n += e[o].x + " " + e[o].y + " ";
                                var l = e[o].x - e[r].x, c = e[o].y - e[r].y, d = (l * l + c * c) / 4, h = 1 / d - 1 / (i * i), p = Math.sqrt(1 / h);
                                n += "A" + p + " " + p + " 0 0 0 " + e[r].x + " " + e[r].y + " ";
                            } else n += t[a].x + " " + t[a].y + " ";
                        }
                        return n + " Z ";
                    }(m, v.points, v.radius)
                }, l, c, p, e.id + "_" + t, e.get("opacity"));
            }
            if ("line" == n) {
                p = e.get("weight"), h = Math.round(s / 2) + (p % 2 == 1 ? .5 : 0);
                var _ = "", w = [ 13 * p / 3, 2 * p / 3 ].join(" "), y = p > 1 ? [ .001, 5 * p / 3 ].join(" ") : [ 1, 2 ].join(" "), b = "dotted" == e.get("stroke") ? p / 2 : 0;
                if (_ = "M" + b + " " + h + " L" + i + " " + h, "solid" == e.get("stroke") && (a = '<path d="' + _ + '" style="fill:none; stroke:' + l + ";stroke-width:" + p + '"/>'), 
                "double" == e.get("stroke")) a = '<path d="' + ("M" + b + " " + (h - p) + " L" + i + " " + (h - p)) + '" style="fill:none; stroke:' + l + ";stroke-width:" + p + '"/>', 
                a += '<path d="' + ("M" + b + " " + (h + p) + " L" + i + " " + (h + p)) + '" style="fill:none; stroke:' + l + ";stroke-width:" + p + '"/>';
                "dotted" == e.get("stroke") && (a = '<path d="' + _ + '" stroke-linecap="round" stroke-dasharray="' + y + '" style=" fill:none; stroke:' + l + ";stroke-width:" + p + '"/>'), 
                "dashed" == e.get("stroke") && (a = '<path d="' + _ + '" stroke-dasharray="' + w + '" style=" fill:none; stroke:' + l + ";stroke-width:" + p + '"/>');
            }
            if ("icon" == n) {
                var k = this.iconData || this.current_icon_data;
                if (!k) return null;
                var x = k.$svg.clone();
                return x.css({
                    width: "100%",
                    height: "100%"
                }), l = this.getRGBA(r, 1), x.find("*:not(.fixed-color)").each(function() {
                    var t = $(this);
                    t.css({
                        fill: "",
                        "fill-opacity": ""
                    }), t.get(0).removeAttribute("fill"), t.get(0).removeAttribute("fill-opacity");
                }), x.get(0).setAttribute("fill", l), x.get(0).setAttribute("fill-opacity", e.get("bg_opacity")), x;
            }
            return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + i + 'px" height="' + s + 'px">' + a + "</svg>";
            function P(t, e, i, s, n, a, o) {
                var r = "mask_" + a, l = "clip_" + a, c = "", d = 2;
                return n > 0 && o > .99 && (d = 1), c = "<defs>", n > 0 && (c += '<mask id="' + r + '">', "path" == t && (c += '<path d="' + e.path + '" style="fill:white; stroke:black; stroke-width:' + n * d + '"/>'), 
                "ellipse" == t && (c += '<ellipse cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:white; stroke:black; stroke-width:' + n * d + '"/>'), 
                c += "</mask>"), c += '<clippath id="' + l + '">', "path" == t && (c += '<path d="' + e.path + '"/>'), 
                "ellipse" == t && (c += '<ellipse cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '"/>'), 
                c += "</clippath>", c += "</defs>", "path" == t && (c += '<path mask="url(#' + r + ')" d="' + e.path + '" style="fill:' + i + '; stroke:none; stroke-width:0; pointer-events: visiblePainted;"/>'), 
                "ellipse" == t && (c += '<ellipse mask="url(#' + r + ')" cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:' + i + '; stroke:none; stroke-width:0; pointer-events: visiblePainted;"/>'), 
                0 == n ? c : ("path" == t && (c += '<path clip-path="url(#' + l + ')" d="' + e.path + '" style="fill:none; stroke:' + s + "; stroke-width:" + 2 * n + '; pointer-events: visiblePainted;"/>'), 
                "ellipse" == t && (c += '<ellipse clip-path="url(#' + l + ')" cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:none; stroke:' + s + "; stroke-width:" + 2 * n + '; pointer-events: visiblePainted;"/>'), 
                c);
            }
        },
        getRGBA: function(t, e) {
            if (0 == e) return "none";
            var i = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
            return e > .99 ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : "rgba(" + i[0] + "," + i[1] + "," + i[2] + ", " + e + ")";
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.TextViewports = function() {}, t.classes.TextViewports.prototype = {
        text_viewport_attributes: [ "style", "class", "data-size-leading-linked", "data-size-leading-ratio", "data-anchor-link-pos" ],
        switchTextToViewport: function(t, e) {
            if (t = t || "", "default" == e) return t;
            var i = $("<div>").html(t), s = this.text_viewport_attributes, n = this;
            i.find("*").each(function() {
                var t = $(this);
                _.each(s, function(i) {
                    var s = n.getViewportAttributeName(i, e), a = n.getViewportAttributeName(i, "default"), o = t.attr(s), r = t.attr(i);
                    t.removeAttr(a), r && t.attr(a, r), o && ("empty" == o ? t.removeAttr(i) : t.attr(i, o));
                });
            });
            var a = i.html();
            return i.empty().remove(), a;
        },
        getViewportAttributeName: function(t, e) {
            var i = t + "-" + e;
            return /^data/.test(i) || (i = "data-" + i), i;
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.AudioPlayer = Backbone.View.extend({
        initialize: function(t, e, n) {
            _.bindAll(this), this.params = t, this.$container = e, this.readyCallback = n || function() {}, !_([ "standard", "visual" ]).contains(t.current_type) && !Modernizr.opera || Modernizr.msie ? this.player = new s(t, e, n, this) : this.player = new i(t, e, n, this), 
            this.render();
        },
        render: function() {
            this.player && this.player.render();
        },
        show: function() {
            this.player && this.player.show();
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        applyPlayerStyle: function(t) {
            this.player && this.player.applyPlayerStyle && this.player.applyPlayerStyle(t);
        },
        destroy: function() {
            this.player && (this.player.isDestroyed = !0, this.player && this.player.destroy(), this.player = null);
        }
    });
    var i = Backbone.View.extend({
        initialize: function(e, i, s, n) {
            _.bindAll(this), this.inner_template = t.templates["template-common-audio-player-standard"], this.parent = n, 
            this.params = e, this.$container = i, this.readyCallback = s || function() {};
        },
        render: function() {
            var t = [];
            t.push("auto_play=false"), t.push("buying=" + this.params.socials), t.push("liking=" + this.params.socials), 
            t.push("download=" + this.params.socials), t.push("sharing=" + this.params.socials), t.push("show_artwork=" + this.params.artwork), 
            t.push("show_comments=" + this.params.comments), t.push("show_playcount=" + this.params.playcount), 
            t.push("color=" + this.params.color), t.push("auto_advance=true"), t.push("show_user=true"), "visual" == this.params.current_type && t.push("visual=true"), 
            this.params.parsed_url = this.params.parsed_url.replace(/^http:/, "https:");
            var e = this.params.parsed_url + "&" + t.join("&");
            this.setElement($(this.inner_template({
                src: e
            }))), this.$container.append(this.$el), this.player = SC.Widget(this.$el[0]), this.player.bind("ready", _.bind(function() {
                setTimeout(_.bind(function() {
                    this.readyCallback(this.parent);
                }, this), 500);
            }, this)), setTimeout(_.bind(function() {
                this.readyCallback(this.parent);
            }, this), 2e3);
        },
        show: function() {
            this.$el && this.$el.css("opacity", 1);
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        destroy: function() {
            this.player.unbind("ready"), this.$el && this.$el.remove(), this.player = null;
        }
    }), s = Backbone.View.extend({
        apiKey: t.constants.SOUNDCLOUD_API,
        defaultCover: "/img/common/audio-player/cover.png",
        initialize: function(e, i, s, n) {
            _.bindAll(this), this.inner_template = t.templates["template-common-audio-player-minimal"], this.parent = n, 
            this.params = e, this.$container = i, this.readyCallback = s || function() {}, this.isHTHML5 = this.html5AudioAvailable();
        },
        render: function() {
            this.setElement($(this.inner_template({
                src: this.params.url
            }))), this.$container.append(this.$el), this.applyPlayerStyle(this.params), this.isHTHML5 ? this.audioEngine = new n(this.$container, this) : this.audioEngine = new a(this.$container, this), 
            this.loadTracksData([ {
                url: this.params.url
            } ]);
        },
        applyPlayerStyle: function(e) {
            this.$el && (this.$el.toggleClass("no-artwork", !e.artwork), this.$el.toggleClass("no-info", !e.info), 
            this.$el.toggleClass("no-transitions", t.scale.isOn()), this.$(".sc-info").css("color", e.artwork ? "#fff" : "#" + e.color), 
            this.$(".sc-left").css("color", "#" + e.color), this.$(".sc-button svg path").css("fill", "#" + e.color));
        },
        tracksIsLoaded: function(e) {
            if (this.tracks = null, this.audioEngine) {
                var i = e.playerObj.tracks;
                if (!i.length) return this.$el.remove(), this.ready = !0, void this.readyCallback(this.parent);
                this.tracks = i, this.currentTrackNum = 0, this.$el.removeClass("loading"), this.audioEngine.on("scPlayer:onAudioReady", this.onAudioReady).on("scPlayer:onMediaPlay", this.onMediaPlay).on("scPlayer:onMediaPause", this.onMediaPause).on("scPlayer:onMediaEnd", this.onMediaEnd).on("scPlayer:onMediaBuffering", this.onMediaBuffering), 
                this.$elements = {}, this.$elements.scrubber = this.$(".sc-scrubber"), this.$elements.play_button = this.$(".sc-button"), 
                this.$elements.play_wrapper = this.$(".sc-button-wrapper"), this.$elements.buffer = this.$(".sc-buffer"), 
                this.$elements.played = this.$(".sc-played"), this.$elements.time = this.$(".sc-left");
                var s = this.updateTrackInfo(this.currentTrackNum);
                if (this.$elements.play_button.on("click", this.onPlayClick), Modernizr.isdesktop && (this.$elements.scrubber.on("mousemove", this.onScrubberMouseMove), 
                this.$elements.scrubber.on("click", this.onScrubberClick)), this.$(".sc-artwork-list").on("click", this.onPlayClick), 
                Modernizr.isdesktop && this.$elements.play_button.RMDrag({
                    move: this.moveHandleDrag,
                    end: this.endHandleDrag,
                    silent: !1,
                    preventDefault: !0
                }), t.screenshot) var n = $("<img/>").load(_.bind(function() {
                    setTimeout(_.bind(function() {
                        this.ready = !0, !this.isDestroyed && this.readyCallback(this.parent), n.remove();
                    }, this), 100);
                }, this)).attr("src", s); else this.ready = !0, this.readyCallback(this.parent);
            }
        },
        moveHandleDrag: function(t) {
            this.playing && this.pause(), this.isDragging = !0, this.$el.addClass("dragging"), this.scrub(t.pageX);
        },
        endHandleDrag: function(t) {
            t.moved && this.play(), this.$el.removeClass("dragging"), setTimeout(_.bind(function() {
                this.isDragging = !1;
            }, this), 0);
        },
        onScrubberMouseMove: function(e) {
            var i = $(e.currentTarget), s = i.find(".sc-hover-indicator"), n = t.scale.getNormalizedBox(i.get(0)), a = e.pageX - n.left;
            s.css("left", a / t.scale.getRatio() + "px");
        },
        onScrubberClick: function(t) {
            return this.playing || this.play(), this.scrub(t.pageX), !1;
        },
        onPlayClick: function(t) {
            if (!this.isDragging) return this.playing ? this.pause() : this.play(), t.stopPropagation(), !1;
        },
        onAudioReady: function() {
            this.audioEngine && this.audioEngine.play(), this.audioEngine && this.audioEngine.setVolume(100);
        },
        onMediaPlay: function() {
            this.$el.addClass("playing"), this.playing = !0, clearInterval(this.positionPoll), this.positionPoll = setInterval(this.updatePlayState, 500);
        },
        onMediaPause: function() {
            this.$el.removeClass("playing"), this.playing = !1, clearInterval(this.positionPoll), this.positionPoll = null;
        },
        onMediaEnd: function() {
            this.$elements.played.css("width", "0%"), this.$elements.play_button.css("left", "0%"), this.$el.removeClass("playing"), 
            this.playing = !1, this.audioEngine && this.audioEngine.stop();
            var t = (this.currentTrackNum + 1) % this.tracks.length;
            this.play(t), 0 == t && (this.pause(), this.updateTrackInfo(0));
        },
        onMediaBuffering: function(t) {
            this.$elements.buffer.css("width", t + "%");
        },
        play: function(t) {
            if (this.tracks && (void 0 == t && (t = this.currentTrackNum), this.audioEngine && (!this.playing || t != this.currentTrackNum))) {
                var e = this.tracks[t];
                this.$el.addClass("playing"), this.playing = !0, t == this.currentTrackNum && this.audioEngine.firstLoad ? this.audioEngine && this.audioEngine.play() : (this.updateTrackInfo(t), 
                this.currentTrackNum = t, this.audioEngine && this.audioEngine.load(e, this.apiKey));
            }
        },
        pause: function() {
            this.audioEngine && this.playing && (this.$el.removeClass("playing"), this.playing = !1, this.audioEngine && this.audioEngine.pause());
        },
        scrub: function(e) {
            if (this.audioEngine) {
                var i = t.scale.getNormalizedBox(this.$elements.play_wrapper.get(0)), s = t.scale.getNormalizedBox(this.$elements.play_button.get(0)), n = (e - i.left - s.width / 2) / i.width;
                n = Math.min(Math.max(Math.min(n, .999), 0), this.$elements.buffer.width() / this.$elements.scrubber.width()), 
                this.$elements.play_button.css("left", Math.floor(this.$elements.play_wrapper.width() * n) + "px"), 
                this.audioEngine && this.audioEngine.seek(n);
            }
        },
        updatePlayState: function() {
            if (this.audioEngine) {
                var t = this.audioEngine.getDuration(), e = this.audioEngine.getPosition(), i = e / t;
                this.$elements.played.css("width", 100 * i + "%"), this.$elements.play_button.css("left", Math.floor(this.$elements.play_wrapper.width() * i) + "px"), 
                t && this.$elements.time.html(this.timecode(t - e));
            }
        },
        updateTrackInfo: function(t) {
            if (this.tracks) {
                var e, i = this.tracks[t];
                this.$(".sc-info h3").html('<a target="_blank" href="' + i.permalink_url + '">' + i.title + "</a>"), 
                this.$(".sc-info h4").html('by <a target="_blank" href="' + i.user.permalink_url + '">' + i.user.username + "</a>"), 
                e = i.artwork_url ? i.artwork_url.replace("-large", "-t300x300") : i.user && i.user.avatar_url ? i.user.avatar_url.replace("-large", "-t300x300") : this.defaultCover, 
                this.$(".sc-artwork-list .sc-loaded-artwork").css("background-image", 'url("' + e + '")'), this.$elements.time.html(this.timecode(i.duration));
                var s = (t + 1) % this.tracks.length, n = (t - 1 + this.tracks.length) % this.tracks.length, a = this.tracks[s], o = this.tracks[n];
                return !a.preload && a.artwork_url && (a.preload = new Image(), a.preload.src = a.artwork_url.replace("-large", "-t300x300")), 
                !o.preload && o.artwork_url && (o.preload = new Image(), o.preload.src = o.artwork_url.replace("-large", "-t300x300")), 
                e;
            }
        },
        loadTracksData: function(t) {
            var e = 0, i = {
                tracks: []
            }, s = this;
            !function n(a) {
                if (!s.isDestroyed) {
                    var o = s.scApiUrl(a.url);
                    $.getJSON(o, function(r) {
                        s.isDestroyed || (e += 1, r.tracks ? i.tracks = i.tracks.concat(r.tracks) : r.duration ? (r.permalink_url = a.url, 
                        i.tracks.push(r)) : r.creator ? t.push({
                            url: r.uri + "/tracks"
                        }) : r.username ? /favorites/.test(a.url) ? t.push({
                            url: r.uri + "/favorites"
                        }) : t.push({
                            url: r.uri + "/tracks"
                        }) : $.isArray(r) && (i.tracks = i.tracks.concat(r)), t[e] ? n(t[e]) : s.tracksIsLoaded({
                            playerObj: i,
                            url: o
                        }));
                    }).fail(function() {
                        !s.isDestroyed && s.readyCallback(s.parent);
                    });
                }
            }(t[e]);
        },
        scApiUrl: function(t) {
            var e = "https:" === document.location.protocol, i = (e || /^https/i.test(t) ? "https" : "http") + "://api.soundcloud.com/resolve?url=", s = "format=json&client_id=" + this.apiKey + "&callback=?";
            return e && (t = t.replace(/^http:/, "https:")), /api\./.test(t) ? t + "?" + s : i + t + "&" + s;
        },
        html5AudioAvailable: function() {
            var t = !1;
            try {
                var e = new Audio();
                t = e.canPlayType && /maybe|probably/.test(e.canPlayType("audio/mpeg"));
            } catch (t) {}
            return t;
        },
        timecode: function(t) {
            var e = {
                h: Math.floor(t / 36e5),
                m: Math.floor(t / 6e4 % 60),
                s: Math.floor(t / 1e3 % 60)
            }, i = [];
            return e.h > 0 && i.push(e.h), i.push(e.m < 10 && e.h > 0 ? "0" + e.m : e.m), i.push(e.s < 10 ? "0" + e.s : e.s), 
            i.join(":");
        },
        show: function() {
            this.$el && this.$el.css("opacity", 1);
        },
        destroy: function() {
            this.pause(), this.audioEngine && this.audioEngine.off(), this.audioEngine && this.audioEngine.destroy(), 
            this.audioEngine = null, this.$el && this.$el.remove();
        }
    }), n = Backbone.View.extend({
        initialize: function(e, i) {
            _.bindAll(this), this.inner_template = t.templates["template-common-audio-player-engine-html5"], this.parent = i, 
            this.$container = e, this.firstLoad = !1;
            var s = this;
            this.callbacks = {
                onReady: function() {
                    s.player && s.trigger("scPlayer:onAudioReady");
                },
                onPlay: function() {
                    s.player && s.trigger("scPlayer:onMediaPlay");
                },
                onPause: function() {
                    s.player && s.trigger("scPlayer:onMediaPause");
                },
                onEnd: function() {
                    s.player && s.trigger("scPlayer:onMediaEnd");
                },
                onBuffer: function(t) {
                    s.player && s.trigger("scPlayer:onMediaBuffering", t);
                }
            }, this.render();
        },
        render: function() {
            this.setElement($(this.inner_template({}))), this.$container.append(this.$el), this.player = this.$el.find("audio")[0], 
            this.player.addEventListener("play", this.callbacks.onPlay, !1), this.player.addEventListener("pause", this.callbacks.onPause, !1), 
            this.player.addEventListener("timeupdate", this.onTimeUpdate, !1), this.player.addEventListener("progress", this.onProgress, !1);
        },
        onTimeUpdate: function(t) {
            if (this.player) {
                var e = (this.player.buffered.length && this.player.buffered.end(0)) / this.player.duration * 100;
                this.callbacks.onBuffer(e), this.player.currentTime === this.player.duration && this.callbacks.onEnd();
            }
        },
        onProgress: function(t) {
            if (this.player) {
                var e = (this.player.buffered.length && this.player.buffered.end(0)) / this.player.duration * 100;
                this.callbacks.onBuffer(e);
            }
        },
        load: function(t, e) {
            this.player && (this.firstLoad = !0, this.player.pause(), this.player.src = t.stream_url + (/\?/.test(t.stream_url) ? "&" : "?") + "client_id=" + e, 
            this.player.load(), this.player.play());
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        stop: function() {
            this.player && this.player.currentTime && (this.player.currentTime = 0, this.player.pause());
        },
        seek: function(t) {
            if (this.player && this.player.src) try {
                this.player.currentTime = this.player.duration * t;
            } catch (t) {}
        },
        getDuration: function() {
            return this.player ? 1e3 * this.player.duration : 0;
        },
        getPosition: function() {
            return this.player ? 1e3 * this.player.currentTime : 0;
        },
        setVolume: function(t) {
            this.player && (this.player.volume = t / 100);
        },
        destroy: function() {
            this.$el.remove(), this.player = null;
        }
    }), a = Backbone.View.extend({
        initialize: function(e, i) {
            _.bindAll(this), this.inner_template_flash = t.templates["template-common-audio-player-engine-flash"], 
            this.inner_template_flash_ie = t.templates["template-common-audio-player-engine-flash-ie"], this.parent = i, 
            this.$container = e, this.firstLoad = !1;
            var s = this;
            this.callbacks = {
                onReady: function() {
                    s.player && s.trigger("scPlayer:onAudioReady");
                },
                onPlay: function() {
                    s.player && s.trigger("scPlayer:onMediaPlay");
                },
                onPause: function() {
                    s.player && s.trigger("scPlayer:onMediaPause");
                },
                onEnd: function() {
                    s.player && s.trigger("scPlayer:onMediaEnd");
                },
                onBuffer: function(t) {
                    s.player && s.trigger("scPlayer:onMediaBuffering", t);
                }
            };
        },
        render: function(t) {
            var e = "soundcloud_" + this.parent.parent.params._id, i = ("https:" === document.location.protocol ? "https" : "http") + "://player.soundcloud.com/player.swf?url=" + t + "&amp;enable_api=true&amp;player_type=engine&amp;object_id=" + e;
            Modernizr.msie ? this.setElement($(this.inner_template_flash_ie({
                id: e,
                swf: i
            }))) : this.setElement($(this.inner_template_flash({
                id: e,
                swf: i
            }))), this.$container.append(this.$el), this.$el.find("object").on("soundcloud:onPlayerReady", _.bind(function(t, i) {
                this.player = window.soundcloud.getPlayer(e), this.callbacks.onReady();
            }, this)).on("soundcloud:onMediaBuffering", _.bind(function(t, e) {
                this.callbacks.onBuffer(e.percent);
            }, this)).on("soundcloud:onMediaEnd", this.callbacks.onEnd).on("soundcloud:onMediaPlay", this.callbacks.onPlay).on("soundcloud:onMediaPause", this.callbacks.onPause);
        },
        load: function(t) {
            this.firstLoad ? this.player && this.player.api_load(t.uri) : (this.firstLoad = !0, this.render(t.uri));
        },
        play: function() {
            this.player && this.firstLoad && this.player.api_play();
        },
        pause: function() {
            this.player && this.firstLoad && this.player.api_pause();
        },
        stop: function() {
            this.player && this.firstLoad && this.player.api_stop();
        },
        seek: function(t) {
            this.player && this.firstLoad && this.player.api_seekTo(this.player.api_getTrackDuration() * t);
        },
        getDuration: function() {
            return this.player && this.firstLoad && this.player.api_getTrackDuration && 1e3 * this.player.api_getTrackDuration();
        },
        getPosition: function() {
            return this.player && this.firstLoad && this.player.api_getTrackPosition && 1e3 * this.player.api_getTrackPosition();
        },
        setVolume: function(t) {
            this.player && this.player.api_setVolume && this.player.api_setVolume(t);
        },
        destroy: function() {
            this.player = null, this.$el && this.$el.remove();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.SlideshowPlayer = Backbone.View.extend({
        THUMBNAILS_HEIGHT: 72,
        COUNTERS_HEIGHT: 24,
        COUNTER_WIDTH: 14,
        THUMBNAIL_WIDTH: 56,
        THUMBNAIL_PADDING: 8,
        THUMBNAILS_PADDING: 16,
        AUTOPLAY_INTERVAL: 4e3,
        swipeStartDistance: 5,
        scrollStartDistance: 3,
        swipeDistance: 35,
        IMG_ACCELERATION_DELAY: 500,
        PREDISPLAY_COUNT: {
            backward: 1,
            forward: Modernizr.isdesktop ? 5 : Modernizr.isphone ? 3 : 2
        },
        events: {
            "click .images .prev-picture-arrow-middle": "prevImage",
            "click .images .next-picture-arrow-middle": "nextImage",
            "click .images .prev-picture-arrow-bottom": "prevImage",
            "click .images .next-picture-arrow-bottom": "nextImage",
            "click .images .fullscreen": "toggleFullscreen",
            "click .counters .counter": "counterClick",
            "click .thumbnails .thumb": "thumbnailClick",
            "click .images": "onImageClick",
            "blur .captions .caption": "onCaptionBlur"
        },
        initialize: function(e, i, s, n, a) {
            _.bindAll(this), this.template = t.templates["template-common-slideshow-player"], this.block = n, this.model = n && n.model, 
            this.params = e, this.$container = i, this.environment = s, this.preloadImagesList = [], this.mag = a, 
            this.params.w = Math.ceil(this.params.w), this.handleCounters = "constructor" == s || "theme_captions" == e.current_theme && e.theme_data.counters, 
            this.handleThumbnails = "constructor" == s || "theme_classic" == e.current_theme && e.theme_data.thumbnails, 
            this.currentPic = {
                $el: null,
                num: null
            }, this.initialRender = !0, this.render(), this.applyVisualState(e), this.applyPictures(e), this.applyTextStyles(e);
            var o = this.params.pictures || [];
            if (this.handleCounters && this.$counters_container.css("width", o.length * this.COUNTER_WIDTH), this.$counters_container.children(":first-child").addClass("active"), 
            this.handleThumbnails && this.$thumbnails_container.css("width", o.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING), 
            this.$thumbnails_container.children(":first-child").addClass("active"), this.recalcCounters(e), this.recalcThumbnails(e), 
            this.moveToImage(this.currentImageID, !1, "change-pictures"), "viewer" === this.environment) {
                var r = this.preloadImagesList.length;
                if (!r) return _.defer(_.bind(function() {
                    this.trigger("ready");
                }, this));
                var l = _.bind(function() {
                    --r || this.isDestroyed || this.trigger("ready");
                }, this);
                _.each(this.preloadImagesList, function(t) {
                    this.isDestroyed || (t.preload = new Image(), $(t.preload).on("load", l).on("error", l), t.preload.src = t.url);
                }, this);
            }
            this.$container.append(this.$el), this.initialRender = !1, this.handleCounters && Modernizr.isdesktop && (this.counters_scroll = this.$counters_scroll_wrapper.RMScroll({
                $container: this.$counters.find(".items-wrapper"),
                $content: this.$counters_container,
                $handle: this.$counters.find(".scroll"),
                wheelScrollSpeed: .1,
                scrollStep: 14,
                tp: "horizontal",
                needRecalc: !1
            }).data("scroll")), this.handleThumbnails && (Modernizr.isdesktop ? this.thumbnails_scroll = this.$thumbnails_scroll_wrapper.RMScroll({
                $container: this.$thumbnails.find(".items-wrapper"),
                $content: this.$thumbnails_container,
                $handle: this.$thumbnails.find(".scroll"),
                wheelScrollSpeed: .3,
                onScroll: this.preloadThumbImages,
                tp: "horizontal",
                needRecalc: !1
            }).data("scroll") : this.$thumbnails.find(".items-wrapper").bind("scroll", this.preloadThumbImages)), 
            this.setSwipeAction();
        },
        render: function() {
            this.setElement($(this.template({
                tp: this.environment
            }))), this.$el.attr("data-id", this.params._id), this.$images = this.$(".images"), this.$images_wrapper = this.$images.find(".images-wrapper"), 
            this.$counters = this.$(".counters"), this.$counters_container = this.$counters.find(".items"), this.$counters_scroll_wrapper = this.$counters.find(".scroll-wrapper"), 
            this.$thumbnails = this.$(".thumbnails"), this.$thumbnails_container = this.$thumbnails.find(".items"), 
            this.$thumbnails_scroll_wrapper = this.$thumbnails.find(".scroll-wrapper"), this.$captions = this.$(".captions");
        },
        applyVisualState: function(t, e) {
            if (t.theme_data) {
                var i = {
                    w: e ? e.w : t.w,
                    h: e ? e.h : t.h,
                    images_h: e ? e.images_h : t.images_h,
                    captions_h: e ? e.captions_h : t.captions_h,
                    thumbnails_h: this.THUMBNAILS_HEIGHT,
                    counters_h: this.COUNTERS_HEIGHT,
                    theme: t.current_theme,
                    thumbnails: t.theme_data.thumbnails,
                    counters: t.theme_data.counters
                };
                i.showThumbnails = "theme_classic" == i.theme && i.thumbnails, i.showCounters = "theme_captions" == i.theme && i.counters, 
                i.showCaptions = "theme_captions" == i.theme, i.showFullscreen = t.theme_data.fullscreen, this.$images.css("height", i.images_h), 
                this.$thumbnails.css({
                    display: i.showThumbnails ? "block" : "none",
                    height: i.thumbnails_h
                }), this.$counters.css({
                    display: i.showCounters ? "block" : "none",
                    height: i.counters_h
                }), this.$captions.css({
                    display: i.showCaptions ? "block" : "none",
                    height: i.captions_h
                }), this.$images.find(".fullscreen").toggle(i.showFullscreen), this.$images.find(".bottom-arrows").toggleClass("hidden", "theme_classic" !== i.theme), 
                this.$images.find(".prev-picture-arrow-middle").toggleClass("hidden", "theme_captions" !== i.theme), 
                this.$images.find(".next-picture-arrow-middle").toggleClass("hidden", "theme_captions" !== i.theme);
                var s = t.theme_data, n = this.getRGBA(s.controls_color, s.controls_opacity), a = this.getRGBA(s.background_color, s.background_opacity);
                if (this.$("svg path").css("stroke", n), this.$("svg .fullscreen-path-1").css("fill", n), this.$(".counters-text").css("color", n), 
                this.$images.css("background", a), this.$thumbnails.css("background", a), this.setNewPicsWidths(i.w), 
                this.setPicsTransitions(), this.$images_wrapper.children(".image").each(_.bind(function(t, e) {
                    var n = $(e);
                    n.css({
                        "background-size": this.setImageSize(s.fill, n.attr("data-width"), n.attr("data-height"), i.w, i.images_h)
                    });
                }, this)), !this.initialRender) {
                    var o = t.pictures || [];
                    this.handleCounters && this.$counters_container.css("width", o.length * this.COUNTER_WIDTH), this.handleThumbnails && this.$thumbnails_container.css("width", o.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING), 
                    this.recalcCounters(t, e), this.recalcThumbnails(t, e), this.moveToImage(this.currentImageID, !1, "change-visual-style");
                }
            }
        },
        getRGBA: function(t, e) {
            var i = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
            return e > .99 ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : "rgba(" + i[0] + "," + i[1] + "," + i[2] + ", " + e + ")";
        },
        getOriginalUrl: function(t) {
            return t.rasterUrl || t.url;
        },
        getScaledUrl: function(e) {
            return Modernizr.retina || t.scale.isOn() ? e.scaled2xUrl || e.rasterUrl || e.url : e.scaledUrl || e.rasterUrl || e.url;
        },
        applyPictures: function(e) {
            if (e.theme_data) {
                var i = e.pictures || [];
                this.$el.toggleClass("no-images", !i.length), this.$images.find(".bottom-arrows").toggleClass("no-images", i.length <= 1), 
                this.$images.find(".prev-picture-arrow-middle").toggleClass("no-images", i.length <= 1), this.$images.find(".next-picture-arrow-middle").toggleClass("no-images", i.length <= 1), 
                this.$images.find(".bottom-arrows .counters-text .counters-text-total").html(i.length), this.$images_wrapper.empty(), 
                this.handleCounters && this.$counters_container.empty(), this.handleThumbnails && this.$thumbnails_container.empty(), 
                i = _.sortBy(i, "num");
                for (var s = 0; s < i.length; s++) {
                    var n, a = i[s];
                    if (n = $("<div>").addClass("image").attr("data-id", a.id).toggleClass("error", !!a.error).css({
                        "background-size": this.setImageSize(e.theme_data.fill, a.width, a.height, e.w, e.images_h)
                    }).appendTo(this.$images_wrapper), "constructor" == this.environment && n.css({
                        "background-image": a.url ? 'url("' + this.getScaledUrl(a) + '")' : "none"
                    }), "viewer" == this.environment && a.url && (n.attr("data-src", this.getScaledUrl(a)), a.scaledUrl && n.data("orig-src", this.getOriginalUrl(a))), 
                    a.url && a.width && a.height && n.attr("data-width", a.width).attr("data-height", a.height), this.handleThumbnails && (n = $("<div>").addClass("thumb").attr("data-id", a.id).toggleClass("error", !!a.error).css({
                        left: (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) * s - this.THUMBNAIL_PADDING / 2
                    }).appendTo(this.$thumbnails_container), "constructor" == this.environment && n.css({
                        "background-image": a.thumbUrl ? 'url("' + a.thumbUrl + '")' : "none"
                    }), "viewer" == this.environment && a.thumbUrl && n.attr("data-src", a.thumbUrl)), this.handleCounters && $("<div>").addClass("counter").attr("data-id", a.id).css({
                        left: this.COUNTER_WIDTH * s
                    }).appendTo(this.$counters_container), "theme_captions" == this.params.current_theme && "viewer" == this.environment) {
                        var o = $("<div>").addClass("caption-wrapper").attr("data-id", a.id);
                        $("<div>").addClass("caption").html(t.utils.plainTextToHtml(a.text, {
                            detectLinks: !0
                        })).appendTo(o), o.appendTo(this.$captions);
                    }
                }
                this.$images_wrapper.children(":first-child").data("first-child", !0), this.$images_wrapper.children(":last-child").data("last-child", !0), 
                this.updateCurrentImageID(e), this.initialRender || (this.handleCounters && this.$counters_container.css("width", i.length * this.COUNTER_WIDTH), 
                this.handleThumbnails && this.$thumbnails_container.css("width", i.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING), 
                this.recalcCounters(e), this.recalcThumbnails(e), this.moveToImage(this.currentImageID, !1, "change-pictures")), 
                i.length || this.$images.find(".bottom-arrows .counters-text .counters-text-current").html(0);
            }
        },
        applyTextStyles: function(t) {
            var e = _.omit(t.text_style, "size-leading-linked", "size-leading-ratio");
            /px/i.test(e["font-size"]) || (e["font-size"] += "px"), /px/i.test(e["letter-spacing"]) || (e["letter-spacing"] += "px"), 
            /px/i.test(e["line-height"]) || (e["line-height"] += "px"), /#/i.test(e.color) || (e.color = "#" + e.color), 
            e.opacity /= 100, this.$captions.find(".caption").css(e);
        },
        setNewPicsWidths: function(e) {
            var i = this.$el.find("#slideshow-images-position-style-" + this.params._id), s = Modernizr.isdesktop ? "" : " translateZ(0)", n = t.scale.isAllowed() ? t.scale.getRatio() : 1, a = '\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: ' + e + 'px;\n\t\t\t\t\t}\n\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: ' + e + 'px;\n\t\t\t\t\t}\n\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.prev-image {\n\t\t\t\t\t\t-webkit-transform: translateX(' + -e + "px) " + s + ";\n\t\t\t\t\t\ttransform: translateX(" + -e + "px) " + s + ';\n\t\t\t\t\t}\n\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.center-image {\n\t\t\t\t\t\t-webkit-transform: translateX(0) ' + s + ";\n\t\t\t\t\t\ttransform: translateX(0) " + s + ';\n\t\t\t\t\t}\n\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.next-image {\n\t\t\t\t\t\t-webkit-transform: translateX(' + e + "px) " + s + ";\n\t\t\t\t\t\ttransform: translateX(" + e + "px) " + s + ';\n\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t.edge .common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: ' + e + 'px;\n\t\t\t\t\t}\n\t\t\t\t\t.edge .common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image {\n\t\t\t\t\t\tleft: 0px;\n\t\t\t\t\t\twidth: ' + e + 'px;\n\t\t\t\t\t}\n\t\t\t\t\t.edge .common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.prev-image {\n\t\t\t\t\t\t-webkit-transform: translateX(' + Math.ceil(-e * n) + "px) " + s + ";\n\t\t\t\t\t\ttransform: translateX(" + Math.ceil(-e * n) + "px) " + s + ';\n\t\t\t\t\t}\n\t\t\t\t\t.edge .common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.center-image {\n\t\t\t\t\t\t-webkit-transform: translateX(0) ' + s + ";\n\t\t\t\t\t\ttransform: translateX(0) " + s + ';\n\t\t\t\t\t}\n\t\t\t\t\t.edge .common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper .image.next-image {\n\t\t\t\t\t\t-webkit-transform: translateX(' + Math.ceil(e * n) + "px) " + s + ";\n\t\t\t\t\t\ttransform: translateX(" + Math.ceil(e * n) + "px) " + s + ";\n\t\t\t\t\t}\n\t\t\t\t\t";
            i.length || (i = $('<style id="slideshow-images-position-style-' + this.params._id + '" type="text/css">')).appendTo(this.$el), 
            i.text(a);
        },
        setPicsTransitions: function() {
            var t = this.$el.find("#slideshow-images-transition-style-" + this.params._id), e = this.getPicsTransitionTime(), i = "cubic-bezier(0.40, 0.24, 0.40, 1)", s = '\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper.enable-transitions .image {\n\t\t\t\t\t\t-webkit-transition:\tall ' + e + "ms " + i + ";\t\t\t\t\t\ttransition: all " + e + "ms " + i + ';\t\t\t\t\t}\n\t\t\t\t\t.common-slideshow[data-id="' + this.params._id + '"] .images .images-wrapper.enable-transitions .image.center-image {\n\t\t\t\t\t\t-webkit-transition:\tall ' + (e - 5) + "ms " + i + ";\t\t\t\t\t\ttransition: all " + (e - 5) + "ms " + i + ";\t\t\t\t\t}\n\t\t\t\t\t";
            t.length || (t = $('<style id="slideshow-images-transition-style-' + this.params._id + '" type="text/css">')).appendTo(this.$el), 
            t.text(s);
        },
        getPicsTransitionTime: function() {
            if (!t.screenshot) {
                var e = 450;
                if (!this.mag) return e;
                if (this.isFullscreenMode) return _.isFunction(this.mag.getPageTransitionTime) ? this.mag.getPageTransitionTime() : e;
                var i, s = 1;
                return s = "default" === this.mag.viewport && Modernizr.isdesktop || "constructor" === this.environment ? 1 : this.mag.currentPage && this.mag.currentPage.visibleWidgetsCoords && this.mag.currentPage.visibleWidgetsCoords.scale, 
                e = (i = Math.round(this.params.w * s)) >= 768 ? 550 : i >= 667 ? 520 : i >= 568 ? 490 : i >= 480 ? 470 : 400;
            }
        },
        setImageSize: function(t, e, i, s, n) {
            return e && i ? t ? (s / n > e / i ? (a = s + 2, o = Math.round(a * i / e)) : (o = n + 2, a = Math.round(o * e / i)), 
            a + "px " + o + "px") : e < s && i < n ? e + "px " + i + "px" : (s / n > e / i ? (o = n + 2, a = Math.round(o * e / i)) : (a = s + 2, 
            o = Math.round(a * i / e)), a + "px " + o + "px") : t ? "cover" : "contain";
            var a, o;
        },
        onCaptionBlur: function() {
            if ("viewer" != this.environment && this.model) {
                var t = this.$captions.find(".caption").val(), e = _.clone(this.model.get("pictures")), i = _.findWhere(e, {
                    id: this.$captions.find(".caption").attr("data-id")
                });
                if (i) if (i.text != t) e[e.indexOf(i)] = _.extend({}, i, {
                    text: t
                }), this.model.save({
                    pictures: e
                }, {
                    silent: !0,
                    toHistory: !0
                }), this.block.workspace.trigger("redraw");
            }
        },
        recalcCounters: function(t, e) {
            if ("theme_captions" == t.current_theme && t.theme_data.counters) {
                var i = t.pictures || [], s = e ? e.w : t.w, n = this.COUNTER_WIDTH * i.length, a = Math.floor(s / this.COUNTER_WIDTH) * this.COUNTER_WIDTH, o = Math.min(n, a), r = Math.floor((s - o) / 2);
                this.$counters_scroll_wrapper.css({
                    left: r,
                    width: o
                }), this.$counters_container.css({
                    width: n
                });
            }
        },
        recalcThumbnails: function(t, e) {
            if ("theme_classic" == t.current_theme && t.theme_data.thumbnails) {
                var i = t.pictures || [], s = e ? e.w : t.w, n = i.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING, a = Math.min(n, s - this.THUMBNAILS_PADDING), o = Math.floor((s - a) / 2);
                this.thumbsWidth = a, this.$thumbnails_scroll_wrapper.css({
                    left: o,
                    width: a
                }), this.$thumbnails_container.css({
                    width: n
                });
            }
        },
        onImageClick: function(e) {
            if ("constructor" != this.environment && Modernizr.isdesktop) {
                var i = this.$images;
                e && e.stopPropagation();
                var s = t.scale.getNormalizedBox(i.get(0));
                e.pageX < s.left + s.width / 2 ? this.prevImage() : this.nextImage();
            }
        },
        prevImage: function(t) {
            this.imagePrevNext(t, "prev", "switch-to-image");
        },
        nextImage: function(t) {
            this.imagePrevNext(t, "next", "switch-to-image");
        },
        imagePrevNext: function(t, e, i) {
            if (this.currentImageID) {
                var s = "next" == e ? this.currentPic.$el.next() : this.currentPic.$el.prev();
                s.length || (s = this.$images_wrapper.children(":" + ("next" == e ? "first" : "last"))), this.moveToImage(s.attr("data-id"), !0, i), 
                t && t.stopPropagation();
            }
        },
        thumbnailClick: function(t) {
            this.moveToImage($(t.currentTarget).attr("data-id"), !1, "switch-to-image"), t.stopPropagation();
        },
        counterClick: function(t) {
            this.moveToImage($(t.currentTarget).attr("data-id"), !1, "switch-to-image"), t.stopPropagation();
        },
        moveToImage: function(t, i, s) {
            if (t) {
                var n = this.$images_wrapper.children(".image"), a = n.filter('[data-id="' + t + '"]'), o = n.index(a), r = _.clone(this.currentPic), l = o, c = this;
                if (a.length && -1 != o) {
                    this.currentImageID = t, this.currentPic.$el = a, this.currentPic.num = o, "switch-to-image" == s && (this.disableAutoplayOnUserInteraction = !0, 
                    this.stopAutoplay()), this.$images_wrapper.toggleClass("enable-transitions", i), this.resetWaitForAnimationEnd(), 
                    i && r.$el && this.waitForAnimationEnd(r.$el, p), this.direction = !r.$el || !r.$el.length || r.num < l ? "forward" : "backward", 
                    a.data("first-child") && r.$el && r.$el.length && r.$el.data("last-child") ? this.direction = "forward" : a.data("last-child") && r.$el && r.$el.length && r.$el.data("first-child") && (this.direction = "backward");
                    var d = l - ("forward" == this.direction ? this.PREDISPLAY_COUNT.backward : this.PREDISPLAY_COUNT.forward), h = l + ("forward" == this.direction ? this.PREDISPLAY_COUNT.forward : this.PREDISPLAY_COUNT.backward);
                    n.each(function(t) {
                        var e = $(this);
                        t < l ? c.setPicPosition(e, "prev", t + 1 === l) : t > l ? c.setPicPosition(e, "next", t - 1 === l) : c.setPicPosition(e, "center", t === l), 
                        t >= d && t <= h && e.removeClass("hidden");
                    }), c.$images.find(".counters-text-current").html(o + 1), !i && p();
                }
            }
            function p() {
                if (n.each(function(t) {
                    var e = $(this);
                    (t < d || t > h) && e.addClass("hidden");
                }), a.data("first-child") && c.$images_wrapper.children().last().removeClass("hidden"), a.data("last-child") && c.$images_wrapper.children().first().removeClass("hidden"), 
                i || c.initialRender || window.requestAnimationFrame(function() {
                    c.$images_wrapper.addClass("enable-transitions");
                }), c.trigger("currentImageChanged", t, i, s), c.handleCounters && !c.initialRender) {
                    var o = c.$counters_container.children('[data-id="' + t + '"]');
                    c.$counters_container.children(".active").removeClass("active"), o.addClass("active");
                    var r = o.get(0).offsetLeft, l = c.$counters.find(".items-wrapper").width(), p = e;
                    r + 2 * c.COUNTER_WIDTH - c.$counters.find(".items-wrapper").scrollLeft() > l ? p = r + 2 * c.COUNTER_WIDTH - l : r - c.COUNTER_WIDTH - c.$counters.find(".items-wrapper").scrollLeft() < 0 && (p = r - c.COUNTER_WIDTH), 
                    p != e && (i ? c.$counters.find(".items-wrapper").stop().animate({
                        scrollLeft: p
                    }, 200) : c.$counters.find(".items-wrapper").scrollLeft(p));
                }
                if (c.handleThumbnails && !c.initialRender) {
                    var u = c.$thumbnails_container.children('[data-id="' + t + '"]');
                    c.$thumbnails_container.children(".active").removeClass("active"), u.addClass("active");
                    r = u.position().left, l = c.$thumbnails.find(".items-wrapper").width(), p = e;
                    r + 2 * (c.THUMBNAIL_WIDTH + c.THUMBNAIL_PADDING) - c.THUMBNAIL_PADDING / 2 - c.$thumbnails.find(".items-wrapper").scrollLeft() > l ? p = r + 2 * (c.THUMBNAIL_WIDTH + c.THUMBNAIL_PADDING) - c.THUMBNAIL_PADDING / 2 - l : l > 2 * (c.THUMBNAIL_WIDTH + c.THUMBNAIL_PADDING) && r - c.THUMBNAIL_WIDTH - c.THUMBNAIL_PADDING / 2 - c.$thumbnails.find(".items-wrapper").scrollLeft() < 0 && (p = r - c.THUMBNAIL_WIDTH - c.THUMBNAIL_PADDING / 2);
                }
                if (p != e && (i ? c.$thumbnails.find(".items-wrapper").stop().animate({
                    scrollLeft: p
                }, 200) : c.$thumbnails.find(".items-wrapper").scrollLeft(p)), c.model && "constructor" == c.environment) {
                    var g = c.model.get("pictures"), m = _.findWhere(g, {
                        id: c.currentImageID
                    });
                    m ? c.$captions.find(".caption").val(m.text).attr("data-id", c.currentImageID) : c.$captions.find(".caption").val("").attr("data-id", "");
                } else "theme_captions" == c.params.current_theme && "viewer" == c.environment && (i ? c.$captions.find('.caption-wrapper[data-id="' + c.currentImageID + '"]').stop().fadeIn(200).siblings().stop().fadeOut(200) : (c.$captions.find(".caption-wrapper").stop().css({
                    display: "none"
                }), c.$captions.find('.caption-wrapper[data-id="' + c.currentImageID + '"]').stop().css({
                    display: "block"
                })));
                c.preloadImages(), c.preloadThumbImages();
            }
        },
        waitForAnimationEnd: function(e, i) {
            this.resetWaitHook = t.utils.waitForTransitionEnd(e, this.getPicsTransitionTime() + 1e3, "transform", i);
        },
        resetWaitForAnimationEnd: function() {
            this.resetWaitHook && this.resetWaitHook();
        },
        setPicPosition: function(t, e, i) {
            t.data("last-position") === e && t.data("last-neighbour") === i || (t.removeClass("center-image prev-image next-image neighbour").addClass(e + "-image " + (i ? "neighbour" : "")), 
            t.data("last-position", e), t.data("last-neighbour", i));
        },
        preloadImages: function() {
            if ("viewer" == this.environment) {
                var e = this.$images_wrapper.children('[data-id="' + this.currentImageID + '"]');
                if (e.length) {
                    var i = e.prev();
                    i.length || (i = this.$images_wrapper.children(":last"));
                    var s = e.next();
                    s.length || (s = this.$images_wrapper.children(":first"));
                    var n = this;
                    a(e), t.screenshot || (a(i), a(s));
                }
            }
            function a(t) {
                if (n.isFullscreenMode && t.data("orig-src")) {
                    var e = new Image();
                    e.onload = function() {
                        t.css({
                            "background-image": 'url("' + e.src + '")'
                        }).removeData("orig-src");
                    }, e.src = t.data("orig-src");
                }
                t.attr("data-src") && (n.preloadImagesList.push({
                    url: t.attr("data-src")
                }), t.css({
                    "background-image": 'url("' + t.attr("data-src") + '")'
                }).removeAttr("data-src"));
            }
        },
        preloadThumbImages: function() {
            if ("viewer" == this.environment && "theme_classic" == this.params.current_theme && this.params.theme_data.thumbnails) {
                var t = this.initialRender ? this.thumbsWidth : this.$thumbnails_scroll_wrapper.width(), e = this.initialRender ? 0 : this.$thumbnails.find(".items-wrapper").scrollLeft();
                this.$thumbnails.find(".items-wrapper .thumb").each(_.bind(function(i, s) {
                    var n = $(s);
                    if (n.attr("data-src")) {
                        var a = i * this.THUMBNAIL_WIDTH - this.THUMBNAIL_PADDING / 2, o = this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING;
                        a - e > t + o || a + o - e < 0 - o || (this.preloadImagesList.push({
                            url: n.attr("data-src")
                        }), n.css({
                            "background-image": 'url("' + n.attr("data-src") + '")'
                        }).removeAttr("data-src"));
                    }
                }, this));
            }
        },
        updateCurrentImageID: function(t) {
            if (t.pictures && t.pictures.length) if (this.currentImageID) {
                var i = _.findWhere(t.pictures, {
                    id: this.currentImageID
                });
                this.currentImageID = i ? i.id : this.getFirstPictureID(t);
            } else this.currentImageID = this.getFirstPictureID(t); else this.currentImageID = e;
        },
        getFirstPictureID: function(t) {
            return _.sortBy(t.pictures, "num")[0].id;
        },
        toggleFullscreen: function(t) {
            "constructor" != this.environment && (this.isFullscreenMode ? this.leaveFullscreen() : this.enterFullscreen(), 
            t.stopPropagation());
        },
        enterFullscreen: function() {
            "constructor" != this.environment && (this.isFullscreenMode || (this.isFullscreenMode = !0, this.$parentBeforeFullscreen = this.$el.parent(), 
            $(".constructor .widgetbar").addClass("hidden"), this.$el.addClass("fullscreen-mode"), this.$el.appendTo("body").css("z-index", 999), 
            $(window).on("resize", this.onFullscreenResize), $("body").on("keyup", this.onFullscreenKeyUp), _.defer(function() {
                t.common.disableShortcuts.slideshow = !0;
            }), this.onFullscreenResize(), t.utils.getFocusBack(), this.preloadImages()));
        },
        onFullscreenKeyUp: function(t) {
            t.keyCode == $.keycodes.left && this.prevImage(), t.keyCode == $.keycodes.right && this.nextImage(), 
            t.keyCode == $.keycodes.esc && this.leaveFullscreen();
        },
        onFullscreenResize: function() {
            var t = this.$el.width(), e = this.$el.height();
            if ("theme_classic" == this.params.current_theme) var i = e - (this.params.theme_data.thumbnails ? this.THUMBNAILS_HEIGHT : 0);
            if ("theme_captions" == this.params.current_theme) i = e - this.params.captions_h - (this.params.theme_data.counters ? this.COUNTERS_HEIGHT : 0);
            this.applyVisualState(this.params, {
                w: t,
                h: e,
                images_h: i,
                captions_h: this.params.captions_h
            });
        },
        leaveFullscreen: function() {
            "constructor" != this.environment && this.isFullscreenMode && (this.isFullscreenMode = !1, this.$el.appendTo(this.$parentBeforeFullscreen).css("z-index", "auto"), 
            $(window).off("resize", this.onFullscreenResize), this.$el.removeClass("fullscreen-mode"), $(".constructor .widgetbar").removeClass("hidden"), 
            $("body").off("keyup", this.onFullscreenKeyUp), _.defer(function() {
                delete t.common.disableShortcuts.slideshow;
            }), this.applyVisualState(this.params), this.setNewPicsWidths(this.params.w));
        },
        startAutoplay: function() {
            this.autoPlayInterval || this.disableAutoplayOnUserInteraction || (this.autoPlayInterval = setInterval(_.bind(function() {
                this.imagePrevNext(null, "next", "switch-to-image-autoplay");
            }, this), this.AUTOPLAY_INTERVAL));
        },
        stopAutoplay: function() {
            clearInterval(this.autoPlayInterval), this.autoPlayInterval = null;
        },
        destroy: function() {
            this.isDestroyed = !0, this.stopAutoplay(), this.leaveFullscreen(), this.resetWaitForAnimationEnd(), 
            this.$el && this.$el.remove();
        },
        setSwipeAction: function() {
            Modernizr.isdesktop || (this.picsSwipe = this.$images_wrapper.RMSwipe({
                $scrollElements: this.mag.$mag_container,
                maxTransitionSpeed: this.getPicsTransitionTime(),
                rubberBandForce: 1 / 1.47,
                getCurrentConstraints: function(t) {
                    var e = {}, i = this.isFullscreenMode ? this.$images_wrapper.width() : this.params.w;
                    return e.$moveItems = this.currentPic.$el.add(this.currentPic.$el.prev()).add(this.currentPic.$el.next()), 
                    e.$referenceItem = e.$moveItems.filter(":not(.center-image)").first(), this.currentPic.$el.is(":last-child") ? e.left = {
                        max: 0,
                        noTrigger: !0
                    } : e.left = {
                        max: i
                    }, this.currentPic.$el.is(":first-child") ? e.right = {
                        max: 0,
                        noTrigger: !0
                    } : e.right = {
                        max: i
                    }, e;
                }.bind(this),
                onSwipeStart: function() {
                    this.$images_wrapper.removeClass("enable-transitions"), this.disableAutoplayOnUserInteraction = !0, 
                    this.stopAutoplay();
                }.bind(this),
                customMoveCheck: function(t, e) {
                    return !(t.hasClass("prev-image") && e < 0) && !(t.hasClass("next-image") && e > 0);
                }.bind(this),
                callback: function(t) {
                    var e;
                    "right" === t && (e = this.currentPic.$el.prev()), "left" === t && (e = this.currentPic.$el.next()), 
                    e.length || (e = this.currentPic.$el), this.moveToImage(e.attr("data-id"), !1, "switch-to-image");
                }.bind(this)
            }).data("swipe"));
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.ButtonWidget = Backbone.View.extend({
        MIN_ICON_MARGIN: 8,
        initialize: function(e) {
            e && (_.bindAll(this), this.block = e.block, this.model = e.block && e.block.model, this.model = e.model, 
            this.$container = e.$container, this.environment = e.environment, this.mag = e.mag, _.extend(this.model, {
                env: this.environment
            }), this.generateIndividualStyleCSS({
                env: this.environment,
                model: this.model
            }), this.template = t.templates["template-common-button-widget"], "constructor" === this.environment ? this.text_template = t.templates["template-constructor-block-button"] : this.text_template = t.templates["template-viewer-widget-button"], 
            this.render());
        },
        render: function() {
            this.model.tp;
            var e = t.buttonutils.generateStylesStr({
                model: this.model
            });
            this.setElement($(this.template({
                data: this.model
            }))), $(this.text_template({
                data: this.model
            })).appendTo(this.$el), this.$text = this.$(".text"), this.$icon = this.$(".icon"), this.$button = this.$text.closest(".common-button"), 
            this.$button.attr("style", e), this.applyButtonType(this.model.tp), "circle" === this.model.form && this.applyCircleRadius(this.model.w), 
            this.applyTextContainerSize(this.model), this.applyIconContainerSize(this.model), this.applyIconPosition(this.model), 
            "viewer" === this.environment && this.$container.css("border-radius", this.$button.css("border-radius")), 
            this.$el.appendTo(this.$container), this.renderFinishTimeout = setTimeout(function() {
                var t = [ "background-color", "background-color-opacity", "border-width", "border-color", "border-color-opacity", "font-family", "font-style", "font-weight", "color", "color-opacity", "font-size", "letter-spacing" ];
                "circle" !== this.model.form && t.push("border-radius"), t.forEach(function(t) {
                    this.$button.css(t, "");
                }.bind(this)), this.applyTransition();
            }.bind(this), 500);
        },
        applyTransition: function() {
            "viewer" !== this.environment || Modernizr.touch || this.model.transition && this.$button.addClass("transition");
        },
        applyButtonType: function(t) {
            "text" === t ? (this.$text.css("display", "inline-block"), this.$icon.css("display", "none")) : "icon" === t ? (this.$icon.css("display", "inline-block"), 
            this.$text.css("display", "none")) : "text_and_icon" === t && this.$icon.add(this.$text).css("display", "inline-block");
        },
        applyCircleRadius: function(t) {
            this.$button.css("border-radius", "100%");
        },
        applyTextContainerSize: function(t) {
            var e = t["letter-spacing"], i = 0, s = 0;
            e > 0 ? i = e : e < 0 && (s = e), this.$text.css({
                width: t.text_w + "px",
                "padding-left": i + "px",
                "text-indent": s + "px",
                height: t.text_h + "px",
                "line-height": t.text_h + "px"
            });
        },
        applyIconContainerSize: function(t) {
            t.tp;
            var e = t.icon_w, i = t.icon_h;
            t.icon_pos;
            this.$icon.css({
                width: e + "px",
                height: i + "px",
                "margin-right": "0px",
                "margin-left": "0px"
            });
        },
        calcIconMarginFromText: function(t) {
            return Math.ceil(t / 4);
        },
        calcIconTopBottomMargin: function(t) {
            return Math.ceil(t / 3);
        },
        calcTextTopBottomMargin: function(t) {
            return Math.ceil(t / 6);
        },
        applyIconPosition: function(t) {
            var e = t.icon_pos;
            "left" === e ? this.$button.css({
                "flex-direction": "row",
                "-webkit-flex-direction": "row"
            }) : "right" === e && this.$button.css({
                "flex-direction": "row-reverse",
                "-webkit-flex-direction": "row-reverse"
            });
        },
        generateIndividualStyleCSS: function(e) {
            t.buttonutils.generateIndividualStyleCSS({
                env: e.env,
                model: e.model
            });
        },
        destroy: function() {
            clearTimeout(this.renderFinishTimeout), t.buttonutils.destroyIndividualStyleCSS({
                env: this.environment,
                model: this.model
            }), this.$el && this.$el.remove();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.HotspotWidget = Backbone.View.extend({
        TIP_GAP: 15,
        initialize: function(e) {
            e && (_.bindAll(this), this.block = e.block, this.model = e.model, this.$container = e.$container, this.environment = e.environment, 
            this.mag = e.mag, this.template = t.templates["template-common-hotspot-widget"], this.render());
        },
        render: function() {
            this.setElement($(this.template({
                data: this.model
            }))), "viewer" === this.environment && (this.apply_tip_container_size({
                width: this.model.tip_w,
                height: this.model.tip_h
            }), this.apply_tip_position(this.model)), this.$el.appendTo(this.$container);
        },
        apply_tip_container_size: function(t) {
            t && 0 === t.height && (t.height = 120), t && this.$(".tip").css(t);
        },
        apply_tip_bg_color: function(e) {
            this.$(".blocks-wrapper").css("background-color", t.utils.getRGBA(e["tip_background-color"], e["tip_background-color-opacity"] / 100));
        },
        apply_tip_border_radius: function(t) {
            this.$(".blocks-wrapper").add(this.$(".tip")).css("border-radius", t["tip_border-radius"] + "px");
        },
        apply_tip_box_shadow: function(t) {
            this.$(".tip").toggleClass("box-shadow", !!t["tip_box-shadow"]);
        },
        apply_tip_position: function(t, e) {
            e = e || {};
            var i, s = this.$(".tip"), n = t.tip_pos, a = t.tip_w, o = t.tip_h || 120, r = t.w, l = t.h, c = "", d = "", h = this.TIP_GAP;
            return "top" === n ? (c = -(h + o), d = r / 2 - a / 2) : "right" === n ? (c = l / 2 - o / 2, d = r + h) : "bottom" === n ? (c = l + h, 
            d = r / 2 - a / 2) : "left" === n && (c = l / 2 - o / 2, d = -(h + a)), i = {
                top: c,
                left: d
            }, s.css(i), i;
        },
        destroy: function() {
            this.remove();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.FormWidget = Backbone.View.extend({
        MIN_FIELD_WIDTH: 50,
        MIN_FIELD_HEIGHT: 30,
        LINE_HEIGHT_FACTOR: 1.2,
        INVALID_COLOR: "ff4828",
        INVALID_BORDER_WIDTH: 2,
        DROPDOWN_TRIANGLE: {
            SVG: '<svg class="form-dropdown-triangle" width="9" height="6" preserveAspectRatio="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"><path d="M3.763 5.196L.536 1.676A1 1 0 0 1 1.273 0h6.454a1 1 0 0 1 .737 1.676l-3.227 3.52a1 1 0 0 1-1.474 0z" fill-rule="evenodd"/></svg>',
            OPACITY_MULTIPLIER: .4,
            W: 9,
            H: 6,
            FONT_SIZE: 18
        },
        CHECKBOX_TICK: {
            SVG: '<svg width="19" height="14" preserveAspectRatio="none" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M6.657 10.9L17.263.292a1 1 0 1 1 1.415 1.414L7.364 13.021a.997.997 0 0 1-1.414 0L.293 7.364A1 1 0 1 1 1.707 5.95l4.95 4.95z" fill-rule="evenodd"/></svg>',
            W: 19,
            H: 14,
            FONT_SIZE: 18
        },
        initialize: function(e) {
            _.bindAll(this), this.data = e.data, this.$container = e.$container, this.environment = e.environment, 
            this.buttonTemplate = t.templates["template-common-form-button"];
        },
        render: function(t) {
            t = t || {}, this.rendered ? t.force && this.$el && this.$el.empty() : (this.setElement($("<div>")), 
            this.$el.addClass("form-wrapper").appendTo(this.$container), "constructor" !== this.environment && this.$el.on(Modernizr.isdesktop ? "mouseenter" : "touchstart", ".button", this.onButtonHover).on(Modernizr.isdesktop ? "mouseleave" : "touchend", ".button", this.onButtonHoverOut), 
            this.$el.on("change", "select", this.onDropdownChange).on("mouseenter", ".input-wrapper", this.onInputHover).on("mouseleave", ".input-wrapper", this.onInputHoverOut), 
            this.rendered = !0);
            for (var e, i, s = this.data, n = s.fields, a = $("<div>"), o = 0; o < n.length; o++) {
                var r = n[o];
                e = "vertical" === s.layout && "text" === r.tp, (i = $(e ? "<textarea>" : "<input>")).addClass("js-input"), 
                i.attr("type", "text").attr("autocapitalize", "name" == r.tp ? "on" : "off").attr("autocomplete", "off").attr("autocorrect", "off").attr("name", r.caption).attr("placeholder", r.caption + (r.optional && "viewer" !== this.environment ? " (optional)" : "")).attr("spellcheck", !1).attr("data-sort", r.sort), 
                "email" == r.tp && i.attr("inputmode", "email"), "phone" == r.tp && i.attr("inputmode", "tel"), "number" == r.tp && i.attr("inputmode", "numeric"), 
                "checkbox" === r.tp && i.attr("type", "checkbox"), "dropdown" == r.tp && (i.attr({
                    tabindex: -1
                }), i.prop({
                    readonly: !0
                }), i.addClass("fake-dropdown"));
                var l = $('<div class="input-wrapper js-input-wrapper"/>');
                if (l.append(i), l.append('<div class="overlay"></div>'), "viewer" !== this.environment && e) {
                    var c = $('<span class="input-line-control input-line-control-add js-add-line"></span>'), d = $('<span class="input-line-control input-line-control-remove js-remove-line"></span>');
                    l.append(c).append(d);
                }
                if (l.appendTo(a), "dropdown" == r.tp && r.items) {
                    var h = $("<select>"), p = $(this.DROPDOWN_TRIANGLE.SVG);
                    h.attr("name", r.caption), $('<option value="" selected></option>').prop("disabled", !r.optional).appendTo(h);
                    for (var u = 0; u < r.items.length; u++) $("<option>").attr("value", r.items[u]).text(r.items[u]).appendTo(h);
                    i.parent().append(p).append(h);
                }
                "checkbox" === r.tp && (i.wrap('<label class="input-checkbox-wrapper"></label>'), i.after('\t\t\t\t\t\t<div class="input-checkbox-inner"> \t\t\t\t\t\t\t<span class="label">' + i.attr("placeholder") + '</span> \t\t\t\t\t\t\t<span class="tick">' + this.CHECKBOX_TICK.SVG + "</span> \t\t\t\t\t\t</div>"));
            }
            $(this.buttonTemplate()).appendTo(a), this.$el.html(a.html()).addClass("common-form"), this.$button = this.$(".button"), 
            this.$buttonIcons = this.$(".button svg"), this.$inputs = this.$(".input-wrapper"), this.$triangles = this.$(".form-dropdown-triangle"), 
            this.recalcStyles();
        },
        onDropdownChange: function(t) {
            $(t.currentTarget).parent().find(".js-input").val($(t.currentTarget).val());
        },
        setButtonHoverState: function() {
            this.forcePseudoState = "hover", this.applyButtonStyle();
        },
        unsetButtonHoverState: function() {
            this.forcePseudoState = !1, this.applyButtonStyle();
        },
        recalcStyles: function(t) {
            this.$el.attr("data-layout", this.data.layout).attr("data-style", this.data.style), this.$button.find(".caption").text(this.data["button-caption"]), 
            this.resizeElements(t), this.applyInputsStyle(this.$inputs), this.applyButtonStyle(t);
        },
        getMinimalDimensions: function() {
            var t, e = this.data, i = e.fields, s = e["style-" + e.style + "-fields"], n = e["style-" + e.style + "-button-default"], a = this.getButtonValue.bind(this, n, s), o = n.gutter + i.length * s.gutter, r = s["underline-width"] || 0, l = Math.max(Math.ceil(a("font-size") * this.LINE_HEIGHT_FACTOR), this.MIN_FIELD_HEIGHT) + r, c = Math.max(Math.ceil(s["font-size"] * this.LINE_HEIGHT_FACTOR), this.MIN_FIELD_HEIGHT) + r, d = Math.max(l, c);
            return "vertical" == e.layout && (t = {
                width: this.MIN_FIELD_WIDTH,
                height: o + this.getTotalInputsHeight(i, d) + d
            }), "horizontal" == e.layout && (t = {
                width: o + (i.length + 1) * this.MIN_FIELD_WIDTH,
                height: d
            }), t;
        },
        getTotalInputsHeight: function(t, e) {
            return _.reduce(t, function(t, i) {
                return "text" === i.tp ? t + this.getExtraTextareaDimensions(i.rows, e).height : t + e;
            }.bind(this), 0);
        },
        getRowsCount: function(t) {
            return _.reduce(t, function(t, e) {
                return t + ("text" === e.tp && e.rows || 1);
            }, 0);
        },
        getInputDimensions: function(t) {
            var e, i, s = this.data, n = s.fields, a = n.length + 1, o = s["style-" + s.style + "-button-default"], r = s["style-" + s.style + "-fields"], l = o.gutter + n.length * r.gutter, c = t && void 0 != t.w ? t.w : s.w, d = t && void 0 != t.h ? t.h : s.h, h = "vertical" === s.layout, p = Math.floor(h ? d : c), u = p - l;
            if (h) {
                var g = this.getLineHeight(), m = u - this.getRowsCount(n) * g.input - g.input, f = Math.ceil(m / a);
                e = g.input + f, i = this.getTotalInputsHeight(n, e) + e + l - p;
            } else i = (e = Math.ceil(u / a)) * (n.length + 1) + l - p;
            return {
                overflow: i,
                itemSize: e,
                itemOtherSize: h ? c : d,
                gutter: r.gutter,
                lastGutter: o.gutter + r.gutter
            };
        },
        getLineHeight: function() {
            var t = this.data || {}, e = this.LINE_HEIGHT_FACTOR, i = this.getButtonValue(t["style-" + t.style + "-button-default"], t["style-" + t.style + "-fields"], "font-size"), s = t["style-" + t.style + "-fields"]["font-size"];
            return {
                input: Math.floor(e < 10 ? e * s : e),
                button: Math.floor(e < 10 ? e * i : e)
            };
        },
        getExtraTextareaDimensions: function(t, e) {
            t = t || 1;
            var i = this.getLineHeight(), s = Math.round(e - i.input), n = this.data && "underlined" == this.data.style, a = n ? s : Math.ceil(s / 2), o = n ? 0 : Math.floor(s / 2);
            return {
                height: t * i.input + a + o,
                top: a,
                bottom: o
            };
        },
        resizeElements: function(t) {
            var e = this.data, i = "vertical" === e.layout, s = e.fields, n = s.length, a = this.getInputDimensions(t), o = a.overflow, r = e["style-" + e.style + "-fields"], l = (r && r["underline-width"] || 0) + 2;
            this.$inputs.add(this.$button).each(function(t, e) {
                var r = {}, c = a.itemSize, d = t === n - 1, h = t < n, p = s[t], u = $(e), g = t >= n + 1 - o;
                if (g && c--, r[i ? "height" : "width"] = c + "px", r[i ? "width" : "height"] = a.itemOtherSize + "px", 
                h && (r[i ? "margin-bottom" : "margin-right"] = d ? a.lastGutter : a.gutter), r[i ? "margin-right" : "margin-bottom"] = "", 
                i && p && "text" === p.tp) {
                    var m = p.rows || 1, f = u.find(".js-input"), v = u.find(".js-add-line"), _ = u.find(".js-remove-line"), w = this.getExtraTextareaDimensions(m, a.itemSize);
                    r.height = w.height + (g ? -1 : 0) + "px", f.css({
                        top: w.top - l,
                        bottom: w.bottom
                    }), f.attr({
                        rows: m
                    }), v.css({
                        top: w.top - l
                    }), _.css({
                        bottom: w.bottom + l
                    }), u.toggleClass("is-multiline", m > 1);
                }
                u.css(r);
            }.bind(this));
        },
        showInputPlaceholdersAsValues: function(t) {
            this.$inputs.each(function(e, i) {
                var s = $(i).find(".js-input");
                "checkbox" === s.attr("type") ? s.parent().find(".label").addClass("input-checkbox-preview") : s.val(t ? s.attr("placeholder") : "");
            });
        },
        applyInputsStyle: function(t, e) {
            var i = this;
            e = e || {};
            var s, n = this.data, a = (n.fields, _.clone(n["style-" + n.style + "-fields"]));
            "underlined" == n.style ? (e.invalid && (a["underline-color"] = this.INVALID_COLOR, a["underline-opacity"] = 100, 
            a["underline-width"] = a["underline-width"] || this.INVALID_BORDER_WIDTH), s = {
                "background-color": "transparent",
                "border-radius": 0,
                "box-shadow": "inset 0 " + -a["underline-width"] + "px 0 0 " + this.getRgba(a["underline-color"], a["underline-opacity"])
            }) : (e.invalid && (a["border-color"] = this.INVALID_COLOR, a["border-opacity"] = 100, a["border-width"] = a["border-width"] || this.INVALID_BORDER_WIDTH), 
            s = {
                "background-color": this.getRgba(a.color, a.opacity),
                "border-radius": a["border-radius"] + "px",
                "box-shadow": "inset 0 0 0 " + a["border-width"] + "px " + this.getRgba(a["border-color"], a["border-opacity"])
            });
            var o = {
                "font-family": a["font-family"],
                "font-style": a["font-style"],
                "font-weight": a["font-weight"],
                color: this.getRgba(a["text-color"], a["text-opacity"]),
                "font-size": a["font-size"],
                "letter-spacing": a["letter-spacing"],
                "margin-bottom": a["underline-width"] ? a["underline-width"] + "px" : 0
            };
            t.css(s).find(".js-input, select").css(o), t.find(".input-checkbox-inner .label").css(o), t.find(".js-add-line, .js-remove-line").css({
                "font-size": a["font-size"]
            }), t.find(".form-dropdown-triangle").each(function(t, e) {
                var i = $(e), s = i.parent(), n = s.find(".js-input"), o = n.position().top, r = s.height() - n.height() - o, l = this.getSvgSizesFromFontSize(a["font-size"], "DROPDOWN_TRIANGLE");
                i.css({
                    fill: this.getRgba(a["text-color"], a["text-opacity"] * this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER),
                    top: o,
                    bottom: r,
                    width: l.w,
                    height: l.h
                });
            }.bind(this)), t.find(".input-checkbox-inner svg").each(function(t, e) {
                var s = $(e), n = i.getSvgSizesFromFontSize(a["font-size"], "CHECKBOX_TICK");
                s.css({
                    fill: i.getRgba(a["text-color"], a["text-opacity"]),
                    width: n.w,
                    height: n.h
                });
            });
        },
        applyButtonStyle: function() {
            var t = this.data, e = (t.fields, t["style-" + t.style + "-fields"]), i = t["style-" + t.style + "-button-default"], s = t["style-" + t.style + "-button-hover"], n = this.getButtonValue.bind(this, i, e), a = this.getHoverValue.bind(this, s, i, e), o = n("letter-spacing");
            this.$button.css({
                "line-height": this.$button.height() + "px",
                "background-color": this.getRgba(n("color"), n("opacity")),
                "border-radius": n("border-radius") + "px",
                "box-shadow": "inset 0 0 0 " + n("border-width") + "px " + this.getRgba(n("border-color"), n("border-opacity")),
                "font-family": n("font-family"),
                "font-style": n("font-style"),
                "font-weight": n("font-weight"),
                color: this.getRgba(n("text-color"), n("text-opacity")),
                "font-size": n("font-size"),
                "letter-spacing": o,
                "text-indent": o / 2 || 0
            }), this.$buttonIcons.css({
                fill: this.getRgba(n("text-color"), n("text-opacity"))
            }), this.$button.attr("data-default", this.$button.attr("style")), this.$button.css({
                "background-color": this.getRgba(a("color"), a("opacity")),
                "box-shadow": "inset 0 0 0 " + a("border-width") + "px " + this.getRgba(a("border-color"), a("border-opacity")),
                color: this.getRgba(a("text-color"), a("text-opacity"))
            }), this.$button.attr("data-hover", this.$button.attr("style")), this.forcePseudoState || this.$button.attr("style", this.$button.attr("data-default")), 
            this.$button.outerHeight(), this.$button.toggleClass("with-transition", !!s.transition && "viewer" == this.environment);
        },
        getRgba: function(e, i) {
            var s = t.utils.hex2rgb(e);
            return "rgba(" + s[0] + ", " + s[1] + "," + s[2] + "," + i / 100 + ")";
        },
        getButtonValue: function(t, e, i) {
            return "inherit" == t[i] ? e[i] : t[i];
        },
        getHoverValue: function(t, e, i, s) {
            return "inherit" == t[s] ? this.getButtonValue(e, i, s) : t[s];
        },
        onInputHover: function(t) {
            var e = this.data, i = _.clone(e["style-" + e.style + "-fields"]);
            $(t.currentTarget).find(".form-dropdown-triangle").css("fill", this.getRgba(i["text-color"], i["text-opacity"]));
        },
        onInputHoverOut: function(t) {
            var e = this.data, i = _.clone(e["style-" + e.style + "-fields"]);
            $(t.currentTarget).find(".form-dropdown-triangle").css("fill", this.getRgba(i["text-color"], i["text-opacity"] * this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER));
        },
        onButtonHover: function(t) {
            this.$button.hasClass("submitted") || this.$button.attr("style", this.$button.attr("data-hover"));
        },
        onButtonHoverOut: function(t) {
            this.$button.attr("style", this.$button.attr("data-default"));
        },
        destroy: function() {
            this.$el.off(Modernizr.isdesktop ? "mouseenter" : "touchstart", ".button", this.onButtonHover).off(Modernizr.isdesktop ? "mouseleave" : "touchend", ".button", this.onButtonHoverOut).off("change", "select", this.onDropdownChange), 
            this.$el && this.$el.remove();
        },
        getSvgSizesFromFontSize: function(t, e) {
            var i = this[e].H, s = this[e].W, n = this[e].FONT_SIZE;
            return {
                h: t * i / n,
                w: t * s / n
            };
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.text = t.classes.Widget.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        antialiasRotation: !0,
        mailchimpMatcher: /__rm_mailchimp_(.+)/i,
        anchorRegexp: /__rm_anchor/i,
        shareRegexp: /^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,
        render: function() {
            this.makeBox("text"), this.hasHoverAnimation && this.$el.addClass("has-onhover-animation"), this.rendered = !0, 
            this.bg_color = void 0 == this.bg_color ? "ffffff" : this.bg_color, this.bg_opacity = void 0 == this.bg_opacity ? 0 : this.bg_opacity, 
            this.column_count = void 0 == this.column_count ? 1 : this.column_count, this.column_gap = void 0 == this.column_gap ? 16 : this.column_gap;
            var e = [ parseInt(this.bg_color.substring(0, 2), 16), parseInt(this.bg_color.substring(2, 4), 16), parseInt(this.bg_color.substring(4, 6), 16) ];
            this.bg_opacity > .99 ? this.bg = "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")" : this.bg = "rgba(" + e[0] + "," + e[1] + "," + e[2] + ", " + this.bg_opacity + ")", 
            this.text = this.switchTextToViewport(this.text, this.insideHotspot ? "default" : this.page.pageViewport);
            var i = $.parseHTML(this.text);
            i = i.map(function(t) {
                var e = $(t), i = e.hasClass("paragraph-1") ? "paragraph-1" : e.hasClass("paragraph-2") ? "paragraph-2" : null;
                if (i) {
                    var s = i.replace(/\D/g, "");
                    return $("<h" + s + ' class="' + i + '" style="' + e.attr("style") + '" />').append(e.contents())[0].outerHTML;
                }
                return t.outerHTML;
            }).filter(function(t) {
                return t;
            }), this.text = i.join("");
            var s = t.templates["template-viewer-widget-text"], n = $(s(this));
            this.seamlessFontsShow(function() {
                this.$el.removeClass("fonts-pending");
            }.bind(this), function() {
                this.$el.addClass("fonts-pending");
            }.bind(this)), this.$el.append(n), this.$el.on(Modernizr.isdesktop ? "mouseenter" : "touchstart", "a", this.onLinkMouseEnter), 
            this.$el.on(Modernizr.isdesktop ? "mouseleave" : "touchend", "a", this.onLinkMouseLeave), this.$el.on("click", "a", this.onLinkClick), 
            n.addClass("v" + (this.version || 1));
            var a = this;
            return this.$el.find("a").each(function() {
                var e = $(this), i = e.attr("data-pid"), s = e.attr("href"), n = i;
                /^back\sto\stop$/i.test(e.attr("href")) && (n = a.page._id);
                var o = s && a.page.mag.matchSameDomainLink(s);
                if ((o == e.attr("href") || n) && (o = void 0), n = n || o) {
                    var r = a.page.mag.getPageNum(n), l = r && a.page.mag.getPageUri ? "/" + a.page.mag.getPageUri(n) : "javascript:void(0)";
                    r ? e.attr("href", l).addClass("maglink").attr("target", "") : e.removeAttr("href"), n == a.page._id && (e.addClass("back-to-top"), 
                    i && (a.is_global || a.hasGlobalParent) && e.addClass("current"));
                } else if (/^__rm_goback$/i.test(e.attr("href"))) e.attr("href", "javascript:void(0)").addClass("goback-link"); else if (a.mailchimpMatcher.test(e.attr("href"))) {
                    var c = e.attr("href").match(a.mailchimpMatcher)[1];
                    e.attr("href", "javascript:void(0)").attr("data-mailchimp", c).addClass("mailchimp-link"), t.initutils.initMailchimpAPI();
                } else if (a.shareRegexp.test(e.attr("href"))) {
                    var d = e.attr("href").match(a.shareRegexp);
                    e.attr("href", "javascript:void(0)").attr("data-share-provider", d[1]).attr("data-share-type", d[2]).addClass("share-link");
                } else if (a.anchorRegexp.test(e.attr("href"))) {
                    e.attr("href", "javascript:void(0)").addClass("anchor-link");
                    var h = e.attr("data-page-uri"), p = _.findWhere(a.mag.pages, {
                        _id: h
                    }) || a.page;
                    e.attr("data-page-uri", p.uri || p.num);
                } else e.addClass("external-link");
                !e.attr("href") || 0 != e.attr("href").indexOf("mailto") && 0 != e.attr("href").indexOf("tel") || e.attr("target", "");
            }), t.screenshot && !this.insideHotspot ? this.waitForUsedFontsLoad() : this.widgetIsLoaded(), this.$el.find("span.soundcite").each(function(e, i) {
                t.screenshot || window.soundcite && window.soundcite.createPlayer(i);
            }), this;
        },
        isValid: function() {
            var t = $("<div>").html(this.text).text();
            return "" != $.trim(t);
        },
        hasFontsToLoad: function() {
            return !0;
        },
        start: function() {
            return this.started = !0, Modernizr.chrome && this.$el.addClass("force-repaint-content"), this;
        },
        stop: function() {
            return this.started = !1, this.$el.removeClass("force-repaint-content"), t.screenshot || this.destroyed || !this.rendered || this.$el && this.$el.find("span.soundcite").each(function(t, e) {
                window.soundcite && window.soundcite.pausePlayer(e);
            }), this;
        },
        destroy: function() {
            return this.$el && this.$el.find("span.soundcite").each(function(t, e) {
                window.soundcite && window.soundcite.destroyPlayer(e);
            }), t.classes.Widget.prototype.destroy.apply(this, arguments);
        },
        waitForUsedFontsLoad: function() {
            this.hasFontsToLoad() ? this.page.addFontsToLoad(this, this.widgetIsLoaded) : this.widgetIsLoaded();
        },
        checkLink: function() {
            if (this.is_global || this.hasGlobalParent) {
                var e = this.$el.find("a[data-pid]");
                e.removeClass("current back-to-top"), this.page && e.filter('[data-pid="' + this.page._id + '"]').addClass("current back-to-top").removeClass("hovered");
            }
            t.classes.Widget.prototype.checkLink.apply(this, arguments);
        },
        onLinkMouseEnter: function(t) {
            var e = $(t.currentTarget).attr("data-uuid");
            this.$el.find("a[data-uuid='" + e + "']").addClass("hovered");
        },
        onLinkMouseLeave: function(t) {
            var e = $(t.currentTarget).attr("data-uuid");
            this.$el.find("a[data-uuid='" + e + "']").removeClass("hovered");
        },
        onLinkClick: function(e) {
            if (2 != e.which && !e.metaKey && !e.ctrlKey) {
                var i = $(e.currentTarget), s = $.trim(i.attr("href")).match(/\/start\-with\-template\/(\d+)$/i), n = s && s[1];
                n && t.viewerRouter && t.viewerRouter.createMagFromTemplate && (e.preventDefault(), t.viewerRouter.createMagFromTemplate("template-link", n));
            }
        }
    }).extend(t.classes.TextViewports.prototype);
}(RM), function(t, e) {
    "use strict";
    t.widgets.picture = t.classes.Widget.extend({
        antialiasRotation: !0,
        mailchimpMatcher: /__rm_mailchimp_(.+)/i,
        anchorRegexp: /__rm_anchor/i,
        shareRegexp: /^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,
        render: function() {
            this.makeBox("widget-picture"), this.hasHoverAnimation && this.$el.addClass("has-onhover-animation"), 
            this.rendered = !0;
            var e = this.getPictureUrl();
            if (/\.gif/.test(e) && (this.isGIF = !0), this.$el.html(""), 0 != _.last(e.split(".")).indexOf("svg") || t.constants.IS_FILE_PROTOCOL) {
                var i = !!(this.border_size > 0 || this.border_radius > 0 || this.border_radius_max || this.is_full_width);
                if (this.insideHotspot && this.isGIF) {
                    var s = this.scale;
                    $("<div/>").appendTo(this.$el).css({
                        position: "absolute",
                        "background-image": "url(" + e + ")",
                        "background-position": "50% 50",
                        width: Math.max(Math.round(this.originalW * s), this.w),
                        height: Math.max(Math.round(this.originalH * s), this.h),
                        top: -Math.round(this.cropY * s),
                        left: -Math.round(this.cropX * s)
                    }).attr("url", e);
                } else i && $("<div/>").appendTo(this.$el).css({
                    "background-image": "url(" + e + ")",
                    "background-position": "50% " + (void 0 == this.fwpos ? 50 : this.fwpos) + "%",
                    "box-shadow": this.border_size > 0 ? "inset 0 0 0 " + this.border_size + "px #" + (this.border_color || "000000") : "none",
                    "border-radius": (this.border_radius_max ? "9999" : this.border_radius || 0) + "px",
                    opacity: void 0 === this.opacity ? 1 : this.opacity
                }).attr("url", e);
                $("<img/>").appendTo(this.$el).toggleClass("saveable", !!(i || this.insideHotspot && this.isGIF)).css("opacity", void 0 === this.opacity ? 1 : this.opacity).load(_.bind(function() {
                    this.$el.find("img").attr("url", e), this.widgetIsLoaded();
                }, this)).on("error", this.widgetIsLoaded).attr("src", e);
            } else this.loadVector(e);
            return this.checkLink(), this;
        },
        isValid: function() {
            return !!this.getPictureUrl();
        },
        start: function() {
            return this.started = !0, Modernizr.safari && this.isGIF && this.$el.flashClass("fix-safari-gif", 100), 
            this;
        },
        getPictureUrl: function() {
            return this.picture ? (e = t.scale.isOn(this.page.scale) ? this.picture.unscaledUrl || this.picture.final2xUrl || this.picture.finalUrl : Modernizr.retina && (window.devicePixelRatio >= 3 && this.picture.final3xUrl || this.picture.final2xUrl) || this.picture.finalUrl, 
            (this.is_full_width || this.page.mag.isPreview && this.animation) && (e = this.picture.unscaledUrl || this.picture.final2xUrl || this.picture.finalUrl), 
            e || this.picture.effectUrl || this.picture.editedVectorUrl || this.picture.url) : "";
            var e;
        },
        loadVector: function(t) {
            this.$el.addClass("svg"), this.svgAjax = $.get(t + "?c", _.bind(function(e) {
                this.$svg = $(e).find("svg").attr("width", "").attr("height", "");
                var i = $(e).find("svg").get(0).cloneNode(!0);
                this.$svg.attr("viewBox");
                this.$svg.find("title").remove();
                var s = new Image();
                $(s).on("load error", _.bind(function() {
                    $(s).appendTo(window.document.body).css({
                        width: "100%",
                        height: "100%"
                    });
                    var t = $(i);
                    t.get(0).setAttribute("viewBox", "0 0 " + $(s).width() + " " + $(s).height()), t.appendTo(window.document.body);
                    var e = t.get(0).getBBox();
                    this.$svg.get(0).setAttribute("viewBox", e.x + " " + e.y + " " + e.width + " " + e.height), this.$svg.get(0).setAttribute("preserveAspectRatio", "xMidYMid meet"), 
                    $(s).remove(), t.remove();
                    var n = $('<div class="svg-scale-wrapper"></div>');
                    this.$svg.appendTo(n), n.appendTo(this.$el), this.widgetIsLoaded();
                }, this)), s.src = t;
            }, this)).fail(this.widgetIsLoaded);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.background = t.classes.Widget.extend({
        render: function() {
            return this.rendered = !0, this.page.on("resize", this.onResize, this), this.template = t.templates["template-viewer-widget-background"], 
            this.setElement(this.template({
                data: this
            })), this.$el.prependTo(this.page.$fixedBgContainer), this.$picture = this.$(".picture-background"), 
            this.$video = this.$(".video-background"), this.$videoContainer = this.$(".video-container"), this.picture && "picture" == this.selectedType ? this.renderPicture() : _.isEmpty(this.video) || "video" != this.selectedType ? this.widgetIsLoaded() : this.renderVideo(), 
            this;
        },
        start: function() {
            return this.started = !0, "video" == this.selectedType && !t.screenshot && this.rendered && this.videoWidget && !this.destroyed && (this.videoWidget.start(), 
            this.onResize()), this;
        },
        stop: function() {
            return this.started = !1, "video" == this.selectedType && !t.screenshot && this.rendered && this.videoWidget && !this.destroyed && this.videoWidget.stop(), 
            this;
        },
        destroy: function() {
            return this.page.off("resize", this.onResize, this), "video" == this.selectedType && (this.videoWidget && this.videoWidget.destroy(), 
            this.videoWidget = null), t.classes.Widget.prototype.destroy.apply(this, arguments);
        },
        hasVideoBG: function() {
            return !(t.screenshot || !Modernizr.isdesktop || "video" != this.selectedType || !this.video || !this.video.url);
        },
        onResize: function() {
            !this.destroyed && this.$videoContainer && this.video && t.videoutils.setVideoPosition({
                mag: this.page.mag,
                $container: this.$videoContainer,
                $media: this.$videoContainer.children(),
                provider: this.video.provider_name,
                aspect_poster: this.video.aspect_poster || this.videoWidget && this.videoWidget.aspect_poster,
                aspect_real: this.video.aspect_real,
                controls_remove: !0
            });
        },
        renderPicture: function() {
            if (this.picture) {
                var e = this.picture.finalUrl || this.picture.effectUrl || this.picture.url;
                $("<img/>").on("load", _.bind(function() {
                    this.$picture.css({
                        "background-image": "url(" + e + ")"
                    }), t.screenshot ? setTimeout(this.widgetIsLoaded, 200) : this.widgetIsLoaded();
                }, this)).on("error", this.widgetIsLoaded).attr("src", e);
            } else this.widgetIsLoaded();
        },
        renderVideo: function() {
            this.video.id = this.id, this.video.mute = this.mute, this.video.loop = this.loop, this.video.controls = !1, 
            this.videoWidget = new t.widgets.video(this.video, this.page, this.$videoContainer), this.videoWidget.on("loaded", _.bind(function() {
                this.widgetIsLoaded(), this.onResize();
            }, this)), this.videoWidget.on("playStarted", _.bind(function() {
                this.trigger("videoBGStarted");
            }, this)), this.videoWidget.render();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.slideshow = t.classes.Widget.extend({
        render: function() {
            return this.makeBox("widget-slideshow"), this.pictures = _.filter(this.pictures, function(t) {
                return !t.error;
            }), this.player = new t.classes.SlideshowPlayer(this, this.$el, "viewer", null, this.page && this.page.mag), 
            this.player.on("ready", _.bind(function() {
                setTimeout(this.widgetIsLoaded, 100);
            }, this)), this.rendered = !0, this;
        },
        isValid: function() {
            return this.pictures && this.pictures.length;
        },
        start: function() {
            return this.started = !0, !t.screenshot && !this.destroyed && this.player && this.theme_data.autoplay && this.rendered && this.loaded && this.player.startAutoplay(), 
            this;
        },
        stop: function() {
            return this.started = !1, !t.screenshot && !this.destroyed && this.player && this.rendered && this.loaded && this.player.stopAutoplay(), 
            this;
        },
        destroy: function() {
            return this.player && this.player.off(), this.player && this.player.destroy(), this.player = null, t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.twitter = t.classes.Widget.extend({
        CONTENT_WAIT_TICK: 100,
        CONTENT_WAIT_MAX_TICKS: 20,
        CONTENT_IMG_WAIT: 1e3,
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        render: function() {
            var e, i;
            return this.makeBox("widget-twitter"), this.rendered = !0, this.current_type ? ("mag" === (i = this[this.current_type]).use_own_url ? i.url = this.page.mag.getUrl() : "page" !== i.use_own_url && i.url || (i.url = this.page.getUrl()), 
            t.screenshot || (i.text = t.shareutils.getFinalShare(this.page, _.extend(this.page.mag.model.toJSON(), {
                user: this.page.mag.user
            }), {
                forProject: "mag" === i.use_own_url,
                customDomain: t.common.isDomainViewer
            }).tweet), e = t.templates["template-constructor-block-twitter-" + this.current_type], this.$el.html(e(i)), 
            "type_timeline" === this.current_type && this.$el.find("a").attr({
                width: this.w,
                height: this.h
            }), t.initutils.initTwitterAPI(function() {
                this.destroyed || (window.twttr && window.twttr.widgets && _.isFunction(window.twttr.widgets.load) && window.twttr.widgets.load(), 
                _([ "type_timeline", "type_embed" ]).contains(this.current_type) ? this.waitForTwitterContent() : this.widgetIsLoaded());
            }.bind(this)), this) : (this.widgetIsLoaded(), this);
        },
        waitForTwitterContent: function() {
            var t, e, i, s = 0, n = !1, a = {
                type_timeline: ".timeline-Widget",
                type_embed: "blockquote.tweet"
            };
            clearInterval(t), t = setInterval(_.bind(function() {
                s++, this.destroyed ? clearInterval(t) : (1 == (e = this.$el.find("iframe")).length && (i = a[this.current_type], 
                n = e.contents().find(i).length > 0), (n || s > this.CONTENT_WAIT_MAX_TICKS) && ("type_embed" == this.current_type && e.css({
                    margin: 0,
                    "max-width": "100%"
                }), "type_timeline" == this.current_type && (console.log("$frame : ", e), e.css({
                    width: "100%",
                    height: "100%!important",
                    "max-width": "100%"
                })), clearInterval(t), setTimeout(_.bind(function() {
                    this.widgetIsLoaded();
                }, this), this.CONTENT_IMG_WAIT)));
            }, this), this.CONTENT_WAIT_TICK);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.facebook = t.classes.Widget.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        initialize: function() {
            return t.classes.Widget.prototype.initialize.apply(this, arguments), "type_like_box" == this.current_type && (this.current_type = "type_page", 
            this.type_page = this.type_like_box), this;
        },
        render: function() {
            return this.makeBox("widget-facebook"), this.rendered = !0, this.started ? this.start() : !t.screenshot && this.widgetIsLoaded(), 
            this;
        },
        start: function() {
            if (this.started = !0, this.destroyed || !this.rendered || this.innerRendered) return this;
            this.innerRendered = !0;
            var e, i, s = this;
            return this.current_type ? ((i = this[this.current_type]).w = this.w, i.h = this.h, "mag" === i.use_own_url ? i.url = this.page.mag.getUrl() : "page" !== i.use_own_url && i.url || (i.url = this.page.getUrl()), 
            e = t.templates["template-constructor-block-facebook-" + this.current_type], this.$el.html(e({
                data: i
            })).removeClass([ "type_like_button", "type_page", "type_comments" ].join(" ")).addClass(this.current_type), 
            "type_comments" === this.current_type ? this.$el.css({
                "overflow-x": "hidden",
                "overflow-y": "auto"
            }) : "type_like_button" !== this.current_type && this.$el.css({
                overflow: "hidden"
            }), t.initutils.initFacebookAPI(function() {
                !s.destroyed && s.innerRendered && window.FB.XFBML.parse(s.$el.get(0), function() {
                    _.delay(function() {
                        !s.destroyed && s.innerRendered && (s.widgetIsLoaded(), "type_like_button" === s.current_type && (s.iframe_w = s.$("iframe").width(), 
                        s.iframe_h = s.$("iframe").height()));
                    }, 500);
                });
            }), this) : (this.widgetIsLoaded(), this);
        },
        stop: function() {
            return this.started = !1, this.$el.empty(), this.innerRendered = !1, this;
        }
    });
}(RM);

var youTubeApiIsReady = !1, ytQueue = [];

window.onYouTubeIframeAPIReady = function() {
    youTubeApiIsReady = !0, _.each(ytQueue, function(t) {
        _.isFunction(t.cb) && t.cb();
    });
}, function(t, e) {
    "use strict";
    var i = function(t, e) {
        this.playerIsReady = !1, this.queue = [], function(t, e) {
            var i = _.bind(t, e);
            if (youTubeApiIsReady) return i();
            ytQueue.push({
                cb: i,
                context: e
            });
        }(function() {
            this.yt = new YT.Player(t.id, {
                events: {
                    onReady: _.bind(function() {
                        this.destroyed || (this.playerIsReady = !0, _.each(this.queue, function(t) {
                            _.isFunction(t.cb) && t.cb();
                        }));
                    }, this)
                }
            });
        }, this), this.start_time = e && e.start_time;
    };
    i.prototype = {
        addToQueue: function(t, e) {
            var i = _.bind(t, e);
            if (this.playerIsReady) return i();
            this.queue.push({
                cb: i,
                context: e
            });
        },
        on: function(t, e, i) {
            var s = _.bind(e, i || window), n = {
                finish: 0,
                play: 1,
                pause: 2
            };
            "ready" != t ? this.addToQueue(function() {
                this.yt.addEventListener("onStateChange", function(e) {
                    n[t] == e.data && s();
                });
            }, this) : this.addToQueue(s, this);
        },
        mute: function() {
            this.addToQueue(function() {
                this.yt.mute();
            }, this);
        },
        unMute: function() {
            this.addToQueue(function() {
                this.yt.unMute();
            }, this);
        },
        pause: function() {
            this.addToQueue(function() {
                this.yt && this.yt.pauseVideo && this.yt.pauseVideo();
            }, this);
        },
        play: function() {
            this.addToQueue(function() {
                this.yt.playVideo();
            }, this);
        },
        rewind: function(t) {
            this.addToQueue(function() {
                this.yt.seekTo(t || 0);
            }, this);
        },
        loop: function() {
            this.rewind(this.start_time || .01);
        },
        getDuration: function() {
            return this.duration || (this.duration = this.yt.getDuration()), this.duration;
        },
        getCurrentTime: function() {
            return this.yt.getCurrentTime && this.yt.getCurrentTime() || 0;
        },
        checkLoop: function() {
            if (this.getDuration() - this.yt.getCurrentTime() < .5) return this.loop(), !0;
        },
        destroy: function() {
            ytQueue = _.reject(ytQueue, function(t) {
                return t.context == this;
            }), delete this.yt, delete this.queue, this.destroyed = !0;
        }
    };
    var s = function(t, e) {
        _.bindAll(this), this.id = t.id, this.start_time = e && e.start_time;
    };
    s.prototype = {
        on: function(t, e, i) {
            $f(this.id).addEvent(t, e);
        },
        mute: function() {
            $f(this.id).api("setVolume", 0);
        },
        unMute: function() {
            return !1;
        },
        pause: function() {
            $f(this.id).api("pause");
        },
        play: function() {
            $f(this.id).api("play");
        },
        rewind: function(t) {
            $f(this.id).api("seekTo", t || 0);
        },
        loop: function() {
            this.start_time && this.rewind(this.start_time);
        },
        getCurrentTime: function(t) {
            $f(this.id).api("getCurrentTime", t);
        },
        setColor: function(t) {
            $f(this.id).api("setColor", t);
        },
        destroy: function() {
            var t = $f(this.id);
            t && (t.removeEvent("ready"), t.removeEvent("play"), t.removeEvent("finish"), t.removeEvent("pause"));
        }
    };
    var n = {
        Vimeo: _.template('<iframe src="https://player.vimeo.com/video/<%=video_id%>?wmode=opaque&api=1&loop=<%=(loop)?1:0%>&player_id=video_<%=id%><%=(!real)?"_c":""%>&title=<%=info?1:0%>&byline=<%=info?1:0%>&portrait=<%=info?1:0%>&color=<%=color%>" id="video_<%=id%><%=(!real)?"_c":""%>" width="<%=w%>" height="<%=h%>" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
        YouTube: _.template('<iframe <% if (real) {%>id="yt_<%=video_id%>"<%}%> src="https://www.youtube.com/embed/<%=video_id%>?wmode=opaque&enablejsapi=1&playlist=&autohide=1&loop=<%=(loop)?1:0%>&showinfo=<%=info?1:0%>&theme=<%=theme%>&controls=<%=controls? 1: 0%><%=html5 ? "&html5=1" : ""%>&rel=0&vq=hd1080" width="<%=w%>" height="<%=h%>" frameborder="0" allowfullscreen></iframe>')
    };
    t.widgets.video = t.classes.Widget.extend({
        RESTART_TIMEOUT: 5e3,
        initialize: function(e, i, s) {
            return t.classes.Widget.prototype.initialize.apply(this, arguments), this.$container = s, delete this.real, 
            this;
        },
        render: function() {
            return this.$container ? this.setElement(this.$container) : this.makeBox("video"), this.rendered = !0, 
            this.setPosterInsteadOfVideo(), this;
        },
        isValid: function() {
            return this.video_id && this.provider_name;
        },
        _needAutoStart: function() {
            return this.autoplay && Modernizr.isdesktop && !t.utils.PageVisibilityManager.isPageHidden();
        },
        start: function() {
            this.started = !0, this.onPlayFired = !1;
            var e = this.$container && this.page && this.page.mag && "default" != this.page.mag.viewport && !!this.page.mag.viewport;
            return e && this.trigger("playStarted"), t.screenshot || !this.rendered || this.destroyed || e ? this : (this.playerInitialized || (this.$el.append(this.getEmbed()), 
            this.$iframe = this.$el.find("iframe"), this.$iframe.attr("id", "video_" + this.id), this.player = this.createPlayer(this.provider_name, this.$iframe, {
                start_time: this.start_time
            }), this.player && this.player.on("ready", this.onPlayerReady), this.playerInitialized = !0), this.player && this._needAutoStart() && this.player.play(), 
            this);
        },
        stop: function() {
            return this.started = !1, clearInterval(this.loopInterval), !t.screenshot && !this.destroyed && this.player && this.rendered && ("youtube" == this.provider_name.toLowerCase() ? (this._needAutoStart() && this.player.pause(), 
            !this._needAutoStart() && this.onPlayFired && this.player.pause()) : this.player.pause()), this;
        },
        destroy: function() {
            return clearInterval(this.loopInterval), this.player && this.player.destroy(), this.player = null, t.classes.Widget.prototype.destroy.apply(this, arguments);
        },
        setPosterInsteadOfVideo: function() {
            var e = this.thumbnail_url;
            e ? (this.$poster && this.$poster.remove(), this.$poster && this.$poster.off(), this.$poster = $("<img/>").addClass("poster").css("opacity", 0).appendTo(this.$el), 
            this.$poster.on("load", _.bind(function() {
                this.$poster.css({
                    width: "",
                    height: ""
                }).css("opacity", 1);
                var e = this.$poster[0].width, i = this.$poster[0].height;
                this.aspect_poster || (this.aspect_poster = e / i), t.videoutils.setVideoPosition({
                    mag: this.page.mag,
                    $container: this.$el,
                    $media: this.$poster,
                    provider: this.provider_name,
                    aspect_poster: this.aspect_poster,
                    aspect_real: this.aspect_real,
                    controls_remove: !!this.$container
                }), setTimeout(this.widgetIsLoaded, 100);
            }, this)).on("error", _.bind(function() {
                this.oldUrl = this.thumbnail_url, this.thumbnail_url = this.thumbnail_url.replace("https://", "http://"), 
                this.oldUrl != this.thumbnail_url ? this.setPosterInsteadOfVideo() : this.widgetIsLoaded();
            }, this)).attr("src", e)) : this.widgetIsLoaded();
        },
        createPlayer: function(t, e, n) {
            return "vimeo" == t.toLowerCase() ? new s(e[0], n) : "youtube" == t.toLowerCase() ? new i(e[0], n) : null;
        },
        getEmbed: function(t) {
            return t = t || this, _.defaults(t, {
                real: !0,
                w: 640,
                h: 320,
                theme: "dark",
                color: "3ab9ff",
                info: !1,
                controls: !0,
                id: _.uniqueId("video_"),
                origin: encodeURIComponent(window.location.protocol + "//" + window.location.hostname)
            }), Modernizr.safari && (t.html5 = !0), t.video_id ? n[t.provider_name](t) : null;
        },
        onPlayerReady: function() {
            !this.destroyed && this.player && (this.$container && (this.mute = !0), this.mute ? this.player.mute() : this.player.unMute(), 
            this.$container || _.delay(_.bind(function() {
                this.$iframe && this.$iframe.addClass("fade-out"), this.$poster.remove();
            }, this), 600), this.player.on("pause", this.onPause), this.player.on("play", this.onPlay), this.start_time && (this.player.rewind(this.start_time), 
            this.player.pause()), Modernizr.isdesktop && "vimeo" == this.provider_name.toLowerCase() && this.player.on("playProgress", this.onProgress), 
            this.started && this._needAutoStart() && this.player.play(), this.player.setColor && this.player.setColor(this.color));
        },
        onPlay: function() {
            !this.$container && t.analytics && t.analytics.sendEvent("Video Play", this.title + " / " + this.url), 
            this.$iframe && !this.$iframe.hasClass("fade-out") && (this.$iframe.addClass("fade-out"), this.trigger("playStarted")), 
            clearInterval(this.loopInterval), this.loop && this.player.checkLoop && (this.loopInterval = setInterval(_.bind(function() {
                this.player.checkLoop() && (clearInterval(this.loopInterval), Modernizr.safari && _.delay(function() {
                    this.onPlay();
                }.bind(this), 200));
            }, this), 100)), this.onPlayFired = !0;
        },
        onPause: function() {
            if ("Vimeo" == this.provider_name) this.player.getCurrentTime(_.bind(function(e) {
                e = Math.round(e);
                !this.$container && t.analytics && t.analytics.sendEvent("Video Pause", this.title + " / " + this.url + " / " + e + " sec.", e);
            }, this)); else if ("YouTube" == this.provider_name) {
                var e = Math.round(this.player.getCurrentTime());
                !this.$container && t.analytics && t.analytics.sendEvent("Video Pause", this.title + " / " + this.url + " / " + e + " sec.", e);
            }
        },
        onProgress: function(t, e) {
            this.onPlayFired || this.onPlay(), 1 == t.percent && this.loop && this.player.loop && this.player.loop(), 
            0 == parseFloat(t.seconds) ? this.restartTimeout || (this.restartTimeout = setTimeout(_.bind(function() {
                clearInterval(this.loopInterval), this.playerInitialized = !1, this.player && this.player.destroy(), 
                this.player = null, this.$iframe && this.$iframe.remove(), !this.destroyed && this.started && this.start(), 
                delete this.restartTimeout;
            }, this), this.RESTART_TIMEOUT)) : (clearTimeout(this.restartTimeout), delete this.restartTimeout);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.audio = t.classes.Widget.extend({
        render: function() {
            return this.makeBox("audio"), this.player = new t.classes.AudioPlayer(this, this.$el, this.widgetIsLoaded), 
            this.player.show(), this.rendered = !0, this;
        },
        isValid: function() {
            return this.parsed_url;
        },
        start: function() {
            return this.started = !0, !t.screenshot && !this.destroyed && this.player && this.autoplay && this.rendered && this.loaded && Modernizr.isdesktop && !t.utils.PageVisibilityManager.isPageHidden() && this.player.play(), 
            this;
        },
        stop: function() {
            return this.started = !1, !t.screenshot && !this.destroyed && this.player && this.rendered && this.loaded && this.player.pause(), 
            this;
        },
        destroy: function() {
            return this.player && this.player.destroy(), this.player = null, t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.shape = t.classes.Widget.extend(t.classes.ShapeSVG.prototype).extend({
        mailchimpMatcher: /__rm_mailchimp_(.+)/i,
        anchorRegexp: /__rm_anchor/i,
        shareRegexp: /^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,
        render: function() {
            if (this.makeBox("widget-shape"), this.hasHoverAnimation && this.$el.addClass("has-onhover-animation"), 
            this.rendered = !0, this.requiresImageLoad()) {
                if (!this.rasterUrl) return this;
                if (this.$el.addClass("icon"), this.antialiasRotation = !0, !this.rasterUrl) return this.widgetIsLoaded(), 
                this;
                var e = $("<img>");
                e.on("load", _.bind(function() {
                    this.$el.html(e), this.widgetIsLoaded();
                }, this)).on("error", this.widgetIsLoaded), e.attr("src", Modernizr.retina || t.scale.isOn(this.page.scale) ? this.raster2xUrl || this.rasterUrl || "" : this.rasterUrl || "");
            } else this.redrawSVG(), this.widgetIsLoaded();
            return this.checkLink(), this;
        },
        start: function() {
            Modernizr.firefox && !this.requiresImageLoad() && this.borders > 0 && this.redrawSVG();
        },
        redrawSVG: function() {
            var e = this, i = {
                id: e._id,
                get: function(t) {
                    return e[t];
                }
            };
            if ("rectangle" != this.tp || 1 != this.opacity || Modernizr.isdesktop && 0 != this.borders) {
                var s = this.generateShapeSVG("viewer", i, this.$el.width(), this.$el.height());
                this.$el.html(s);
            } else {
                var n = t.utils.hex2rgb(this.bg_color), a = t.utils.hex2rgb(this.color);
                n.push(this.bg_opacity), this.$el.css({
                    "background-color": "rgba(" + n.join(",") + ")",
                    "border-color": "rgb(" + a.join(",") + ")",
                    "border-radius": this.radius || 0,
                    "border-style": "solid",
                    "border-width": this.borders,
                    "box-sizing": "border-box"
                }), this.$el.addClass("div-instead-of-svg");
            }
        },
        requiresImageLoad: function() {
            return "icon" === this.tp;
        },
        canRenderImmediately: function() {
            return !this.requiresImageLoad();
        },
        onPageResize: function(e) {
            t.classes.Widget.prototype.onPageResize.apply(this, arguments), this.requiresImageLoad() || this.redrawSVG();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.iframe = t.classes.Widget.extend({
        render: function() {
            this.makeBox("widget-iframe"), this.rendered = !0;
            var e = this.getPluginClass();
            return e ? (this.plugin = new e({
                widget: this
            }), this.$el.addClass(this.plugin.embed_type), this.started ? this.drawPlugin() : (this.contentCleared = !0, 
            !t.screenshot && !this.drawInProgress && this.widgetIsLoaded()), this) : (this.widgetIsLoaded(), this);
        },
        drawPlugin: function() {
            this.$el.empty(), this.contentCleared = !1, this.drawInProgress = !0, this.plugin.parse(this.code, function(e) {
                if (this.$data = this.plugin.sanitize(e), t.screenshot && setTimeout(_.bind(function() {
                    this.widgetIsLoaded();
                }, this), 5e3), this.plugin.draw(this.$data, this.$el, function(e, i) {
                    var s = t.screenshot ? 5e3 : 2e3;
                    this.loadTimeout = setTimeout(function() {
                        this.drawInProgress = !1, this.destroyed || (this.widgetIsLoaded(), this.$data.off && this.$data.off("load"), 
                        this.started || this.clearContent());
                    }.bind(this), s);
                }.bind(this)), !t.screenshot) {
                    if (!_.isFunction(this.$data.one)) return;
                    this.$data.one("load", function() {
                        this.drawInProgress = !1, !this.destroyed && this.started && (this.widgetIsLoaded(), clearTimeout(this.loadTimeout));
                    }.bind(this));
                }
            }.bind(this));
        },
        widgetIsLoaded: function() {
            this.loaded || this.destroyed || (this.loaded = !0, this.trigger("loaded"));
        },
        isValid: function() {
            return this.code && this.getPluginClass();
        },
        start: function() {
            return this.started = !0, this.destroyed || !this.rendered ? this : (this.contentCleared && this.drawPlugin(), 
            this);
        },
        stop: function() {
            return this.started = !1, this.plugin ? (this.widgetIsLoaded(), this.drawInProgress ? void 0 : (this.clearContent(), 
            this)) : this;
        },
        clearContent: function() {
            this.clear_content && (this.$el.empty(), this.contentCleared = !0);
        },
        getPluginClass: function() {
            return t.embedutils.findPlugin(this);
        },
        destroy: function() {
            return this.clearContent(), this.plugin && this.plugin.remove(), t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.gmaps = t.classes.Widget.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        render: function() {
            return this.makeBox("widget-gmaps"), this.$el.html($('<div class="map-container"></div>')), this.rendered = !0, 
            t.initutils.initGMapsAPI(function() {
                this.destroyed || _.defer(function() {
                    this.destroyed || (t.scale.isOn() && this.scale(), this.map = new google.maps.Map(this.$(".map-container").get(0), {
                        zoom: this.map_zoom,
                        center: new google.maps.LatLng(this.center_lat, this.center_lng),
                        mapTypeId: this.map_type_id || google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: !this.show_controls,
                        streetViewControl: !1,
                        scrollwheel: void 0 === this.scrollwheel || !!this.scrollwheel
                    }), this.marker_lat && this.marker_lng && "directions" !== this.current_type && (this.marker = new google.maps.Marker({
                        map: this.map,
                        position: new google.maps.LatLng(this.marker_lat, this.marker_lng)
                    }), google.maps.event.addListener(this.marker, "click", function() {
                        this.infowindow && this.infowindow.open(this.map, this.marker);
                    }.bind(this)), this.infowindow = new google.maps.InfoWindow({
                        maxWidth: this.w - 100
                    }), this.formatted_address ? this.infowindow.setContent(this.formatted_address) : new google.maps.Geocoder().geocode({
                        latLng: new google.maps.LatLng(this.marker_lat, this.marker_lng)
                    }, function(t, e) {
                        e == google.maps.GeocoderStatus.OK && t[0] && this.infowindow.setContent(t[0].formatted_address);
                    }.bind(this))), "directions" == this.current_type && this.direction_start_lat && this.direction_start_lng && this.direction_end_lat && this.direction_end_lng && this.direction_route_type ? (this.directionsService = new google.maps.DirectionsService(), 
                    this.directionsDisplay = new google.maps.DirectionsRenderer({
                        preserveViewport: !0
                    }), this.directionsService.route({
                        origin: new google.maps.LatLng(this.direction_start_lat, this.direction_start_lng),
                        destination: new google.maps.LatLng(this.direction_end_lat, this.direction_end_lng),
                        travelMode: google.maps.TravelMode[this.direction_route_type.toUpperCase()]
                    }, function(t, e) {
                        e == google.maps.DirectionsStatus.OK && (this.directionsDisplay.setDirections(t), this.directionsDisplay.setMap(this.map), 
                        google.maps.event.addListener(this.map, "tilesloaded", function() {
                            this.widgetIsLoaded();
                        }.bind(this)));
                    }.bind(this))) : google.maps.event.addListener(this.map, "tilesloaded", function() {
                        this.widgetIsLoaded();
                    }.bind(this)), "custom" == this.current_type && this.custom_json && this.map.setOptions({
                        styles: JSON.parse(this.custom_json)
                    }));
                }.bind(this));
            }.bind(this)), this;
        },
        scale: function() {
            var e = this.mag.getScale(this.page.pageViewport), i = this.$(".map-container");
            if (t.scale.isZoom()) i.css("zoom", 1 / e); else if (t.scale.isTransform()) {
                var s = 100 * e, n = (s - 100) / 2;
                i.css({
                    transform: "scale(" + 1 / e + ") translate(-" + n + "%, -" + n + "%)",
                    width: s + "%",
                    height: s + "%"
                });
            }
        },
        start: function() {
            return this.started = !0, this.rendered && !this.destroyed && this.map ? (google.maps.event.trigger(this.map, "resize"), 
            this.map.setCenter(new google.maps.LatLng(this.center_lat, this.center_lng)), this) : this;
        },
        destroy: function() {
            return this.map && google.maps.event.clearListeners(this.map, "tilesloaded"), this.marker && google.maps.event.clearListeners(this.marker, "click"), 
            t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.button = t.classes.Widget.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        antialiasRotation: !0,
        mailchimpMatcher: /__rm_mailchimp_(.+)/i,
        anchorRegexp: /__rm_anchor/i,
        shareRegexp: /^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,
        render: function() {
            var e;
            return this.preloadIconImage({
                default: !0
            }), this.makeBox("widget-button"), this.hasHoverAnimation && this.$el.addClass("has-onhover-animation"), 
            this.rendered = !0, this.seamlessFontsShow(function() {
                this.$el.removeClass("fonts-pending");
            }.bind(this), function() {
                this.$el.addClass("fonts-pending");
            }.bind(this)), e = {
                model: this,
                $container: this.$el,
                environment: "viewer",
                mag: this.page && this.page.mag,
                block: null
            }, this.buttonWidget = new t.classes.ButtonWidget(e), this.preloadIconImage({
                hover: !0
            }), this.$el.on(Modernizr.isdesktop ? "mouseenter" : "touchstart", this.onButtonHover), this.$el.on(Modernizr.isdesktop ? "mouseleave" : "touchend", this.onButtonHoverOut), 
            this.$el.on("click", this.onButtonClick), this.checkLink(), t.screenshot ? (this.waitForIconImageLoad(), 
            this.waitForUsedFontsLoad()) : this.widgetIsLoaded(), this;
        },
        hasFontsToLoad: function() {
            return "text" == this.tp || "text_and_icon" == this.tp;
        },
        onButtonHover: function(t) {
            this.$(".common-button").addClass("hovered");
        },
        onButtonHoverOut: function(t) {
            this.$(".common-button").removeClass("hovered");
        },
        onButtonClick: function(e) {
            if (2 != e.which && !e.metaKey && !e.ctrlKey) {
                var i = this.$el.closest("a"), s = $.trim(i.attr("href")).match(/\/start\-with\-template\/(\d+)$/i), n = s && s[1];
                n && t.viewerRouter && t.viewerRouter.createMagFromTemplate && (e.preventDefault(), t.viewerRouter.createMagFromTemplate("template-link", n));
            }
        },
        preloadIconImage: function(t) {
            t = t || {};
            var e = this.tp;
            if ("icon" === e || "text_and_icon" === e) {
                if (t.default) new Image().src = Modernizr.retina && this.icon_raster2xUrl || this.icon_rasterUrl;
                if (t.hover) new Image().src = Modernizr.retina && this["hover-icon_raster2xUrl"] || this["hover-icon_rasterUrl"];
            }
        },
        _widgetIsLoaded: function() {
            this.loaded || this.destroyed || (t.screenshot ? this.iconImageLoaded && this.fontLoaded && this.widgetIsLoaded() : this.widgetIsLoaded());
        },
        waitForIconImageLoad: function() {
            this.iconImageLoaded = !1, "icon" !== this.tp && "text_and_icon" !== this.tp || !this.icon_rasterUrl ? this.onIconImageLoaded() : $("<img>").on("load", this.onIconImageLoaded).on("error", this.onIconImageLoaded).attr("src", Modernizr.retina ? this.icon_raster2xUrl || this.icon_rasterUrl || "" : this.icon_rasterUrl || "");
        },
        onIconImageLoaded: function() {
            this.iconImageLoaded = !0, this._widgetIsLoaded();
        },
        waitForUsedFontsLoad: function() {
            this.fontLoaded = !1, this.hasFontsToLoad() ? this.page.addFontsToLoad(this, this.onFontLoaded) : this.onFontLoaded();
        },
        onFontLoaded: function() {
            this.fontLoaded = !0, this._widgetIsLoaded();
        },
        destroy: function() {
            return this.buttonWidget && this.buttonWidget.destroy(), this.buttonWidget = null, this.$el.off(Modernizr.isdesktop ? "mouseenter" : "touchstart", this.onButtonHover), 
            this.$el.off(Modernizr.isdesktop ? "mouseleave" : "touchend", this.onButtonHoverOut), this.$el.off("click", this.onButtonClick), 
            t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.hotspot = t.classes.Widget.extend(t.classes.ShapeSVG.prototype).extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        PHONE_TIP_WIDTH: 280,
        MOUSE_LEAVE_TIMEOUT: 100,
        EDGE_GAP: 16,
        events: {
            "click .pin": "onPinClick",
            mouseenter: "onMouseenter",
            mouseleave: "onMouseleave"
        },
        render: function() {
            var e;
            if (this.makeBox("widget-hotspot"), this.rendered = !0, this.phoneTipWrapperTemplate = t.templates["template-common-hotspot-widget-mobile-wrapper"], 
            this.isPreview = !(!t.constructorRouter || !t.constructorRouter.preview), e = {
                model: this,
                $container: this.$el,
                environment: "viewer",
                mag: this.page && this.page.mag,
                block: null
            }, this.hotspotWidget = new t.classes.HotspotWidget(e), this.$pin = this.$(".pin").addClass("viewer"), 
            this.started && this.renderTip(), "icon" == this.pin_type) {
                if (this.$el.addClass("icon"), !this.rasterUrl) return this.widgetIsLoaded(), this;
                var i = $("<img>");
                i.on("load", _.bind(function() {
                    this.$(".pin").html(i), this.widgetIsLoaded();
                }, this)).on("error", this.widgetIsLoaded), i.attr("src", Modernizr.retina ? this.raster2xUrl || this.rasterUrl || "" : this.rasterUrl || "");
            } else this.renderPinShape(), this.widgetIsLoaded();
            return this;
        },
        renderPinShape: function() {
            var t, e = new Backbone.Model(this);
            e.id = this._id, t = this.generateShapeSVG("viewer", e, this.w, this.h), this.$pin.html(t);
        },
        renderTip: function() {
            this.isTipRendered || (this.$tip = $('<div class="tip viewer invisible"></div>'), this.$tip.toggleClass("box-shadow", this["tip_box-shadow"]), 
            this.$tip.css({
                "border-radius": this["tip_border-radius"]
            }), this.$blocksWrapper = $('<div class="blocks-wrapper"></div>'), this.$blocksWrapper.appendTo(this.$tip), 
            this.$blocksWrapper.css({
                "background-color": t.utils.getRGBA(this["tip_background-color"], this["tip_background-color-opacity"] / 100),
                "border-radius": this["tip_border-radius"]
            }), this.$(".common-hotspot").append(this.$tip), this.pictureData = _.findWhere(this.wids || [], {
                type: "picture"
            }), this.textData = _.findWhere(this.wids || [], {
                type: "text"
            }), this.hasPictureWidget = !(!this.pictureData || this.pictureData.hidden), this.hasTextWidget = !(!this.textData || this.textData.hidden), 
            this.hasPictureWidget && (this.pictureData.insideHotspot = !0, this.pictureWidget = new t.widgets.picture(this.pictureData, this.page, this.$blocksWrapper), 
            this.pictureWidget.isValid() ? (this.pictureData.w = Math.min(this.tip_w, this.pictureData.w), this.pictureWidget.render()) : (this.tip_h -= this.pictureWidget.h || 0, 
            this.textData && (this.textData.y = 0), this.pictureWidget = null, this.hasPictureWidget = !1)), this.hasTextWidget && (this.textData.insideHotspot = !0, 
            this.textData.hasGlobalParent = this.is_global, this.textWidget = new t.widgets.text(this.textData, this.page, this.$blocksWrapper), 
            this.textWidget.w = Math.min(this.tip_w, this.textWidget.w), this.textWidget.render()), this.hasPictureWidget || this.hasTextWidget ? (this.$closeButton = $('<div class="hotspot-phone-close"></div>'), 
            this.$tip.append(this.$closeButton), this.isTipRendered = !0) : this.$tip.remove());
        },
        updatePage: function(e) {
            t.classes.Widget.prototype.updatePage.apply(this, arguments), this.textWidget && this.textWidget.updatePage(e);
        },
        start: function() {
            return this.started = !0, this.rendered && !this.destroyed && this.renderTip(), this;
        },
        stop: function() {
            return this.started = !1, this.isTipVisible && this.hideTip(), this;
        },
        applyTipPosition: function() {
            var t, e, i, s, n, a, o, r = this.calcDistsToPageVisibleBounds(), l = {
                w: this.w,
                h: this.h
            }, c = {
                w: this.$tip.width(),
                h: this.$tip.height()
            }, d = this.hotspotWidget.TIP_GAP, h = this.tip_pos, p = _.pick(this, "w", "h", "tip_w", "tip_h", "tip_pos"), u = !1, g = !1;
            function m(t) {
                var e, i, s, n;
                switch (t) {
                  case "top":
                    e = r.top - l.h / 2 - d - c.h, s = r.bottom + l.h / 2 + d, n = r.left - c.w / 2, i = r.right - c.w / 2;
                    break;

                  case "right":
                    e = r.top - c.h / 2, s = r.bottom - c.h / 2, n = r.left + l.w / 2 + d, i = r.right - l.w / 2 - d - c.w;
                    break;

                  case "bottom":
                    e = r.bottom + l.h / 2 + d, s = r.bottom - l.h / 2 - d - c.h, n = r.left - c.w / 2, i = r.right - c.w / 2;
                    break;

                  case "left":
                    e = r.top - c.h / 2, s = r.bottom - c.h / 2, n = r.left - l.w / 2 - d - c.w, i = r.right + l.w / 2 + d;
                }
                return {
                    top: e,
                    left: n,
                    bottom: s,
                    right: i
                };
            }
            i = this.tip_pos, n = i, a = -1 / 0, o = !1, _.each([ "top", "right", "bottom", "left" ], function(t) {
                if (!o) {
                    var e = m(t);
                    s = _.min(e), t == i && e[t] > 0 ? (n = t, o = !0) : s > a && e[t] >= 0 && (a = s, n = t);
                }
            }), h = n, p.tip_pos = h, e = this.hotspotWidget.apply_tip_position(p), t = m(h), _.each(t, function(t, i) {
                if (t < 0) switch (i) {
                  case "top":
                    e.top -= t - this.EDGE_GAP, u = !0;
                    break;

                  case "bottom":
                    u || (e.top += t - this.EDGE_GAP);
                    break;

                  case "left":
                    e.left -= t - this.EDGE_GAP, g = !0;
                    break;

                  case "right":
                    g || (e.left += t - this.EDGE_GAP);
                }
            }.bind(this)), this.$tip.css(e);
        },
        adjustPictureSize: function() {
            var t, e = this.tip_w / this.PHONE_TIP_WIDTH;
            this.pictureWidget && (t = this.isPhone() ? {
                width: this.PHONE_TIP_WIDTH,
                height: this.pictureData.h / e
            } : {
                width: this.pictureData.w,
                height: this.pictureData.h
            }, this.pictureWidget.$el.css(t));
        },
        onPinClick: function() {
            this.isHoverable() || (this.isTipVisible ? this.hideTip() : this.isTipRendered && this.showTip(), t.analytics && this.isTipVisible && t.analytics.sendEvent("Hotspot Click"));
        },
        onMouseenter: function() {
            this.isHoverable() && this.isTipRendered && (clearTimeout(this.mouseLeaveTimeout), this.isTipVisible || this.showTip(), 
            t.analytics && t.analytics.sendEvent("Hotspot Hover"));
        },
        onMouseleave: function() {
            this.isHoverable() && (clearTimeout(this.mouseLeaveTimeout), this.mouseLeaveTimeout = setTimeout(function() {
                this.hideTip();
            }.bind(this), this.MOUSE_LEAVE_TIMEOUT));
        },
        showTip: function() {
            this.isTipRendered && (this.adjustPictureSize(), this.isPhone() ? (this.$phoneTipWrapper = this.$phoneTipWrapper || $(this.phoneTipWrapperTemplate()), 
            this.$phoneTipWrapper.toggleClass("preview", this.isPreview), this.$phoneTipWrapper.detach().appendTo(this.isPreview ? ".mag-pages-container" : "body"), 
            this.$phoneTipWrapper.on("touchstart", this.onTipTouchStart), this.$phoneTipWrapper.on("touchmove", this.onTipTouchMove), 
            this.$tipParent = this.$tip.parent(), this.$tip.detach().appendTo(this.$phoneTipWrapper.find(".center-cell")), 
            _.defer(function() {
                this.$phoneTipWrapper.removeClass("invisible");
            }.bind(this)), this.$phoneTipWrapper.on("click", function(t) {
                $(t.target).closest(".tip").is(this.$tip) || (this.hideTip(), this.$phoneTipWrapper.off());
            }.bind(this)), this.$closeButton.on("click", this.onCloseButtonClick)) : (this.hotspotWidget.apply_tip_container_size({
                width: this.tip_w,
                height: this.tip_h
            }), this.applyTipPosition(), this.$tip.removeClass("invisible"), this.BringToTopZ(), this.page.mag.router.$mags_container.on("mousedown touchstart", this.onGlobalMouseDown), 
            this.isHoverable() || $("body").on("keydown", this.onBodyKeyDown)), this.listenTo(this.page.mag, "change:viewport", this.onMagViewportBeforeChange), 
            this.isTipVisible = !0);
        },
        hideTip: function() {
            this.isTipVisible && (this.isTipVisible = !1, clearTimeout(this.mouseLeaveTimeout), this.isPhone() ? (this.$phoneTipWrapper.addClass("invisible"), 
            this.$phoneTipWrapper.off("touchstart", this.onTipTouchStart), this.$phoneTipWrapper.off("touchmove", this.onTipTouchMove), 
            _.delay(function() {
                this.$tip.detach().appendTo(this.$tipParent), this.$phoneTipWrapper && this.$phoneTipWrapper.detach();
            }.bind(this), 200)) : (this.$tip.addClass("invisible"), _.delay(function() {
                this.BackToNormalZ();
            }.bind(this), 200), $("body").off("keydown", this.onBodyKeyDown)), this.stopListening(this.page.mag, "change:viewport"));
        },
        onTipTouchStart: function(t) {
            this.tipScrollY = t.originalEvent.touches.item(0).clientY;
        },
        onTipTouchMove: function(t) {
            t.stopPropagation();
            var e = $(t.currentTarget), i = this.tipScrollY - t.originalEvent.touches.item(0).clientY;
            (i < 0 && e.scrollTop() <= 0 || i > 0 && e.scrollTop() + e.height() >= e[0].scrollHeight) && t.preventDefault(), 
            this.tipScrollY = t.originalEvent.touches.item(0).clientY;
        },
        onCloseButtonClick: function() {
            this.$closeButton.off("click", this.onCloseButtonClick), this.hideTip();
        },
        onMagViewportBeforeChange: function(t) {
            this.hideTip();
        },
        onGlobalMouseDown: function(t) {
            var e = $(t.target), i = e.closest(".pin"), s = e.closest(".tip");
            i.is(this.$pin) || s.is(this.$tip) || (this.page.mag.router.$mags_container.off("mousedown touchstart", this.onGlobalMouseDown), 
            this.hideTip());
        },
        isPhone: function() {
            return Modernizr.isphone || this.isPreview && "phone_portrait" == this.page.mag.viewport;
        },
        isHoverable: function() {
            return "hover" == this.tip_show_on && Modernizr.isdesktop && !this.isPhone() && "tablet_portrait" !== this.page.mag.viewport;
        },
        onBodyKeyDown: function(t) {
            t.keyCode == $.keycodes.esc && this.hideTip();
        },
        destroy: function() {
            return this.hotspotWidget && this.hotspotWidget.destroy(), this.hotspotWidget = null, t.classes.Widget.prototype.destroy.apply(this, arguments);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.form = t.classes.Widget.extend({
        DO_NOT_WAIT_FOR_PRELOAD: !0,
        NUMBER_TEST_REGEX: /^[0-9.,`']+$/,
        events: {
            "focus :input": "onFocus",
            "blur :input": "onBlur"
        },
        render: function() {
            return this.makeBox("widget-form"), this.rendered = !0, this.seamlessFontsShow(function() {
                this.$el.removeClass("fonts-pending");
            }.bind(this), function() {
                this.$el.addClass("fonts-pending");
            }.bind(this)), this.formWidget = new t.classes.FormWidget({
                data: this,
                environment: "viewer",
                $container: this.$el
            }), this.formWidget.render(), this.$button = this.$(".button"), this.$button.on("click", this.onButtonClick), 
            this.$(".js-input").on("keydown", this.onInputKeyDown), this.$(".js-input").on("input", this.onInput), 
            this.$("select").on("change", this.onInput), t.screenshot ? this.waitForUsedFontsLoad() : this.widgetIsLoaded(), 
            this;
        },
        hasFontsToLoad: function() {
            return !0;
        },
        destroy: function() {
            return this.formWidget && this.formWidget.destroy(), this.formWidget = null, this.$(".button").off("click", this.onButtonClick), 
            t.classes.Widget.prototype.destroy.apply(this, arguments);
        },
        waitForUsedFontsLoad: function() {
            this.hasFontsToLoad() ? this.page.addFontsToLoad(this, this.widgetIsLoaded) : this.widgetIsLoaded();
        },
        onFocus: function() {
            Backbone.trigger("form:focus", this._id);
        },
        onBlur: function() {
            Backbone.trigger("form:blur", this._id);
        },
        onButtonClick: function(e) {
            this.$button.hasClass("submitted") || this.validateForm() && (this.setButtonState("submitted"), t.common.isDownloadedSource ? this.submitToIframe(function(e) {
                e && (console.log("err : ", e), this.setButtonState("error"), t.analytics && t.analytics.sendEvent("Form Submit Error", e));
            }) : this.submitForm(function(e) {
                e && (console.log("err : ", e), this.setButtonState("error"), e.responseJSON && "email_not_confirmed" == e.responseJSON.name && _.delay(function() {
                    alert(e.responseJSON.message);
                }, 100), t.analytics && t.analytics.sendEvent("Form Submit Error", e));
            }.bind(this)));
        },
        getDataBySort: function(t) {
            return t = parseInt(t, 10), _.findWhere(this.fields, {
                sort: t
            });
        },
        validateForm: function() {
            var e = this.$(".js-input"), i = !0;
            return _.each(e, function(e) {
                var s = $(e), n = s.val().trim(), a = this.getDataBySort(s.attr("data-sort")), o = !0;
                if (n) switch (a.tp) {
                  case "name":
                  case "text":
                  case "dropdown":
                    break;

                  case "email":
                    t.utils.isValidEmail(n) || (o = !1);
                    break;

                  case "phone":
                    /^[0123456789 +\-]+$/.test(n) || (o = !1);
                    break;

                  case "number":
                    this.NUMBER_TEST_REGEX.test(n) && !isNaN(parseFloat(n)) || (o = !1);
                } else o = a.optional;
                o || (this.formWidget.applyInputsStyle(s.closest(".input-wrapper"), {
                    invalid: !0
                }), i = !1);
            }.bind(this)), i;
        },
        onInput: function(t) {
            var e = $(t.currentTarget).parent().find(".js-input");
            this.formWidget.applyInputsStyle(e.closest(".input-wrapper")), this.setButtonState();
        },
        onInputKeyDown: function(t) {
            t.keyCode !== $.keycodes.enter || $(t.target).is("textarea") || this.onButtonClick();
        },
        getFormData: function() {
            var e = {
                wid: this._id,
                mag_num_id: this.page.mag.num_id,
                is_preview: !(!t.constructorRouter || !t.constructorRouter.preview),
                fields: []
            };
            return _.each(this.fields, function(t) {
                var i = this.$(".js-input[data-sort=" + t.sort + "]"), s = i.val().trim();
                if ("checkbox" == t.tp && (s = i.prop("checked") ? "On" : "Off"), "number" == t.tp) {
                    var n = parseFloat(s);
                    s = isNaN(n) ? s : n;
                }
                e.fields.push({
                    caption: t.caption,
                    type: t.tp,
                    value: s
                });
            }.bind(this)), e;
        },
        submitForm: function(e) {
            this.xhr && this.xhr.abort(), this.xhr = $.ajax({
                dataType: "json",
                contentType: "application/json",
                url: "/api/connect/forms/submit",
                data: JSON.stringify(this.getFormData()),
                method: "POST",
                success: function(t) {
                    e();
                },
                error: function(t) {
                    e({
                        status: t.status,
                        responseJSON: t.responseJSON,
                        responseText: t.responseText
                    });
                }
            }), t.analytics && t.analytics.sendEvent("Form Submit Click");
        },
        submitToIframe: function(e) {
            var i, s = this.endpoint_url && this.endpoint_url.custom_url;
            if (!s) return e("No custom URL specified for submit");
            $("#form_submit_iframe").length || $('<iframe id="form_submit_iframe" name="form_submit_iframe" style="display:none;"></iframe>').appendTo("body"), 
            (i = this.$el.find("form")).length || (i = this.$el.find(".form-wrapper").wrap('<form method="post" target="form_submit_iframe"></form>').parent().attr("action", s)), 
            i.get(0).submit(), e(null), t.analytics && t.analytics.sendEvent("Form Submit Click");
        },
        setButtonState: function(t) {
            t = t || "";
            this.$button.removeClass([ "error", "submitted" ].join(" ")).addClass(t);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.models.SocketModel = Backbone.Model.extend({
        parse: function(t, e) {
            return !e || !e.xhr || this.isNew() || e && e.noSocketUpdate || (_.isEmpty(t) && (t = this.toJSON(_.pick(e, "viewport", "fixViewports"))), 
            this.triggerSocketUpdate(t, e)), Backbone.Model.prototype.parse.apply(this, arguments);
        },
        triggerSocketUpdate: function(e, i) {
            var s = e;
            if (i && i.patch && (s = _.extend({}, i.attrs, this.pick("_id", "pid"))), s = this.getChangedAttributes ? this.getChangedAttributes() : s, 
            _.isEmpty(s) && (s = this.toJSON()), !s.pid && this.getPageId && "Page" == !this.name && (s.pid = this.getPageId()), 
            this.getViewport && "default" != this.getViewport()) {
                var n = s.pid || this.getPageId && this.getPageId();
                return this.triggerViewportUpdate(n);
            }
            t.constructorRouter.trigger("update_from_server", this.name, s);
        },
        triggerViewportUpdate: function(e) {
            t.constructorRouter.trigger("update_from_server", "Viewport", e);
        }
    });
}(RM), function(t, e) {
    "use strict";
    var i = t.models.SocketModel.prototype;
    t.models.Model = t.models.SocketModel.extend({
        save: function(e, s, n) {
            var a, o = this;
            if (_.isObject(e) || null == e ? (a = e, n = s) : (a = {})[e] = s, n && n.skipMagChanging && this.urlRoot && (n.url = this.url() + (this.url().indexOf("?") > -1 ? "&" : "?") + "skip_changed=true"), 
            !(n = n ? _.clone(n) : {}).skipPersist) var r = i.save.apply(this, arguments);
            if (r) return r.error(function(e, i) {
                "abort" != i && (e.status && e.status < 500 || (o.wasNotSaved = !0, t.constructorRouter.raiseConnectionError()));
            }), r.success(function() {
                o.wasNotSaved && o.trigger("re-saved"), o.wasNotSaved = !1;
            }), this.skipResponse && (r.skipResponse = !0), t.Events.trigger("save:model", {
                model: this,
                setAttrs: a,
                options: n
            }), !this.skipMagChanging && !n.skipMagChanging && t.constructorRouter.mag && t.constructorRouter.mag.set("changed", !0), 
            r;
        },
        sync: function(t, e, s) {
            if ("patch" == t.toLowerCase() && e.collection && e.collection.page) {
                var n = e.collection.page.getCurrentViewport();
                if (!("default" == n || s && s.forceDefaultViewport || this.isNested)) {
                    var a = e.toJSON(), o = {};
                    o["viewport_" + n] = _.pick(a["viewport_" + n], _.keys(s.attrs)), _.isEmpty(o["viewport_" + n]) && delete o["viewport_" + n];
                    var r = _.difference(_.keys(s.attrs), _.keys(o["viewport_" + n]));
                    _.extend(o, _.pick(e.attributes, r)), s.attrs = o;
                }
            }
            return i.sync.apply(this, arguments);
        },
        parse: function(t, e) {
            return e && e.xhr && e.xhr.skipResponse ? (i.parse.apply(this, arguments), this.isNew() ? t : void 0) : i.parse.apply(this, arguments);
        },
        set: function(e, i, s) {
            var n, a;
            if (_.isObject(e) || null == e ? (n = e, a = i) : ((n = {})[e] = i, a = s), (a = a || {}).viewport && !a.forceDefaultViewport && !a.xhr && this.getViewport && this.getViewport() != a.viewport) return this["viewport_" + a.viewport] = _.extend(this["viewport_" + a.viewport] || {}, n), 
            this;
            var o = this.cloneJSON(), r = Backbone.Model.prototype.set.apply(this, arguments);
            return t.Events.trigger("set:model", {
                model: this,
                prevAttrs: o,
                setAttrs: n,
                options: a
            }), r;
        },
        cloneJSON: function() {
            var t = this.toJSON();
            return _.each(t, function(e, i) {
                t[i] = _.cloneWithObjects(e);
            }), t;
        }
    });
}(RM), function(t, e) {
    "use strict";
    var i = t.models.SocketModel.prototype;
    t.models.Mag = t.models.SocketModel.extend({
        idAttribute: "_id",
        urlRoot: "/api/mag/",
        PUBLISH_URL: "/api/publish/",
        UNPUBLISH_URL: "/api/unpublish/",
        CHECKDOMAIN_URL: "/api/checkdomain",
        SETDOMAIN_URL: "/api/mag/domain/",
        SSLDOMAIN_URL: "/api/mag/domain/",
        publish_attempts: 0,
        user_templates: {},
        name: "Mag",
        undoKeys: [],
        initialize: function(e, i) {
            _.bindAll(this), this.globalWidgets = new t.collections.Widgets(), t.collections.Pages && (this.pages = new t.collections.Pages(), 
            this.trashPages = new t.collections.TrashPages(), this.pages.on("change:screenshot", function(t) {
                this.trigger("change:page:screenshot", t.id);
            }, this)), this.on("mag_state_changed", function(t) {
                t && t.socketUpdate || this.triggerSocketUpdate();
            }, this), this.on("change:updated", function(t, e, i) {
                this.trigger("mag_state_changed", i);
            }, this), this.on("change:changed", function(t, e, i) {
                if (e) {
                    if (this.trigger("changed"), i && i.socketUpdate) return;
                    this.triggerSocketUpdate({
                        changed: e
                    });
                }
            }, this), this.on("change:pids", function(t, e, i) {
                _.defer(_.bind(function() {
                    this.pages.each(function(t) {
                        t && -1 == e.indexOf(t.id) && this.pages.remove(t.id);
                    }, this);
                }, this)), i && (i.xhr || i.socketUpdate || i.success) || this.triggerSocketUpdate(this.pick("pids"), {});
            }, this), this.on("change:opts", function(t, e, i) {
                i && i.socketUpdate || this.triggerSocketUpdate(this.pick("opts"));
            }), this.on("error", function() {
                this._saveduser && this.set("user", this._saveduser), delete this._saveduser;
            }, this), t.Events.on("global_appear:widget", function(t) {
                this.globalWidgets.add(t);
            }.bind(this)), t.Events.on("global_disappear:widget", function(t) {
                this.globalWidgets.remove(t);
            }.bind(this));
        },
        parse: function(e) {
            return this.has("changed") && delete e.changed, _.isObject(this.get("user")) && delete e.user, e.last_changed = e.last_changed && new Date(e.last_changed), 
            e.user && (this.user = new t.models.User(e.user, {
                parse: !0
            })), i.parse.apply(this, arguments);
        },
        save: function() {
            if (!this.get("user")) return i.save.apply(this, arguments);
            var t = i.save.apply(this, arguments);
            return this.set("changed", !0), t;
        },
        getPage: function(t) {
            return this.pages.get(t);
        },
        addPage: function(e, i) {
            var s = e.specialScreenshot;
            delete e.specialScreenshot, e = e || {}, this._addBlock || (this._addBlock = !0, e.num = e.num || this.getMaxNum() + 1, 
            e.mid = this.id, $.ajax({
                url: "/api/page/",
                method: "POST",
                dataType: "json",
                data: e,
                success: function(n) {
                    this._addBlock = !1;
                    var a = new t.models.Page(n.page, {
                        parse: !0
                    });
                    n.edit_params && (t.constructorRouter.mag.edit_params.set(n.edit_params), t.constructorRouter.textStyles.generateCSS("paragraph", "constructor", document), 
                    t.constructorRouter.textStyles.generateCSS("link", "constructor", document)), a.specialScreenshot = s, 
                    this.onAdd(a), this.sendAnalyticsEvent("Create Page", {
                        _page_type: e.template ? "template" : "blank"
                    }), i && i(a);
                },
                error: function(t) {
                    if (this._addBlock = !1, 400 == t.status) try {
                        i(JSON.parse(t.responseText));
                    } catch (t) {
                        alert("Seems there is a connection problem.");
                    } else alert("Seems there is a connection problem.");
                },
                context: this
            }));
        },
        onAdd: function(t, e) {
            var i;
            this.pages.add(t), (i = _.clone(this.get("pids"))).push(t.id), i = _(i).chain().uniq().compact().value(), 
            this.set({
                pids: i
            }, e);
        },
        sendAnalyticsEvent: function(e, i) {
            var s = t.constructorRouter || t.collectorRouter || t.viewerRouter || t.homepageRouter;
            s && s.analytics && s.analytics.sendEvent(e, i);
        },
        getActivePages: function() {
            return this.pages.filter(function(t) {
                return _.include(this.get("pids"), t.id);
            }, this);
        },
        getTitle: function() {
            return this.get("title") || "Project Title";
        },
        getMaxNum: function() {
            var t = _.max(_.map(this.getActivePages(), function(t) {
                return t.get("num");
            }));
            return (!t || t < 0) && (t = 0), t;
        },
        loadFull: function(t) {
            var e = t.success;
            t.success = _.bind(function(i, s, n) {
                var a = _.clone(i);
                this.pages.reset(a.pages, {
                    parse: !_.has(t, "parse") || t.parse
                });
                a.pages;
                delete a.pages, this.set(this.parse(a)), this.initGlobalWidgets(), e && e(i, s, n);
            }, this), $.ajax(_.extend(t, {
                url: "/api/magFullById/" + this.get("num_id"),
                dataType: "json"
            }));
        },
        loadActualScreenshot: function(t) {
            (this._actualScreenshots = this._actualScreenshots || {}, this._actualScreenshots[t]) || (this._actualScreenshots[t] = !0, 
            this.getPage(t).requestActualScreenshot(_.bind(function() {
                delete this._actualScreenshots[t], this.trigger("change:page:screenshot", t);
            }, this)));
        },
        fetchTrashPages: function(t) {
            t = t || {};
            var e = this.urlRoot + this.get("num_id") + "/trash";
            return $.get(e, _.bind(function(e) {
                this.trashPages.reset(e, {
                    parse: !0
                }), e && e.length || this.set("has_deleted_pages", !1), t.success && t.success(e);
            }, this)).fail(t.error);
        },
        restorePage: function(e, i) {
            i = i || {}, $.ajax({
                type: "POST",
                url: "/api/user/permissions/can_create_page",
                data: JSON.stringify({
                    mag: this.toJSON()
                }),
                contentType: "application/json",
                context: this,
                success: function() {
                    this.trashPages.get(e);
                    $.get("/api/pageFullById/" + e, _.bind(function(e) {
                        e = new t.models.Page(e, {
                            parse: !0
                        }), this.onAdd(e), this.trashPages.remove(e), this.set("has_deleted_pages", !!this.trashPages.length), 
                        this.save(), i.success && i.success(e);
                    }, this)).fail(i.error);
                },
                error: i.error
            });
        },
        emptyTrash: function(t) {
            t = t || {}, $.ajax({
                url: this.urlRoot + this.get("num_id") + "/trash",
                type: "DELETE",
                success: function() {
                    this.trashPages.reset(), this.trashPages.triggerSocketUpdate(), this.set("has_deleted_pages", !1), t.success && t.success();
                },
                error: t.error,
                context: this
            });
        },
        deleteTrashPage: function(t, e) {
            e = e || {};
            var i = this.trashPages.get(t) || this.pages.get(t);
            $.ajax({
                url: "/api/page/" + t + "/trash",
                type: "DELETE",
                success: function() {
                    this.trashPages.get(t) && (this.trashPages.remove(i), this.set("has_deleted_pages", !!this.trashPages.length)), 
                    e.success && e.success();
                },
                error: e.error,
                context: this
            });
        },
        getPageNumId: function(t, e) {
            var i = (e && e.onlyActive ? _(this.getActivePages()) : this.pages).find(function(e) {
                return e.get("num") == t;
            });
            return i && i.get("num_id");
        },
        getPageId: function(t, e) {
            var i = (e && e.onlyActive ? _(this.getActivePages()) : this.pages).find(function(e) {
                var i = e.get("num"), s = e.get("uri");
                return i && t && i.toString() === t.toString() || s && t && s.toString() === t.toString();
            });
            return i && i.id;
        },
        getPageUri: function(t) {
            var e = this.pages.find(function(e) {
                return e.get("_id") == t;
            });
            return e && (e.get("uri") || e.get("num"));
        },
        getPageNum: function(t) {
            var e = this.pages.find(function(e) {
                return e.get("_id") == t;
            });
            return e && e.get("num");
        },
        deletePage: function(e, i) {
            var s, n, a, o, r = _.reject(this.get("pids"), function(t) {
                return t === e.id;
            }, this);
            if (_.isEmpty(r)) return !1;
            this.get("master_share_pid") == e.get("_id") && this.unset("master_share_pid"), s = e.getOwnGlobalWidgets(), 
            _.isEmpty(s) || (n = this.pages.get(r[0]), a = this.changeParentPage(s, n, {
                silent: !0
            }), o = s.concat(a), t.constructorRouter.workspace.save_group(o, {
                skipHistory: !0
            })), this._deleteXHR && this._deleteXHR.abort(), this._deleteXHR = this.save({
                pids: r
            }, {
                success: _.bind(function() {
                    e.isEmptyPage || (this.set("has_deleted_pages", !0), this.trigger("change:has_deleted_pages")), i && i(), 
                    e.isEmptyPage && !this.get("shared") && this.deleteTrashPage(e.id);
                }, this)
            }), e.save({
                trash_date: new Date()
            }, {
                silent: !0,
                noSocketUpdate: !0
            });
        },
        deleteMag: function(t) {
            $.ajax({
                type: "DELETE",
                url: "/api/mag/" + this.get("num_id"),
                success: function() {
                    "function" == typeof t && t();
                },
                error: function() {
                    console.log("Cannot delete :(");
                },
                context: this
            });
        },
        publish: function(t, e) {
            this.updateUsedFonts({
                success: _.bind(function(i) {
                    var s = {
                        major: t || void 0,
                        description: t && e || void 0
                    };
                    this.publish_attempts += 1, $.ajax({
                        type: "POST",
                        url: this.PUBLISH_URL + this.get("num_id"),
                        global: !1,
                        data: s,
                        success: _.bind(function(t) {
                            this.set(_.extend(this.parse(t), {
                                changed: !1
                            })), this.publish_attempts = 0;
                        }, this),
                        error: _.bind(function(t) {
                            this.trigger("mag_publish_error", t.responseJSON || {
                                error: t.statusText,
                                message: t.responseText
                            });
                        }, this)
                    });
                }, this),
                error: _.bind(function() {
                    this.trigger("mag_publish_error", {
                        error: "Used fonts save error",
                        message: "Used fonts save error"
                    });
                }, this)
            });
        },
        unpublish: function() {
            $.ajax({
                type: "POST",
                url: this.UNPUBLISH_URL + this.get("num_id"),
                success: _.bind(function(t) {
                    this.set({
                        is_published: null,
                        published: null,
                        updated: null
                    });
                }, this),
                error: _.bind(function() {
                    console.error(arguments);
                }, this)
            });
        },
        checkDomain: function(t, e) {
            return $.ajax({
                type: "POST",
                url: this.CHECKDOMAIN_URL,
                data: {
                    num_id: this.get("num_id"),
                    domain: t
                },
                success: _.bind(function(i) {
                    this.set({
                        last_checked_domain: t
                    }, {
                        silent: !0
                    }), e && e(i);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), e && e(null);
                }, this)
            });
        },
        mapDomain: function(t, e) {
            return e = e || {}, $.ajax({
                type: "POST",
                url: this.SETDOMAIN_URL + this.get("num_id"),
                data: {
                    domain: t,
                    status: "on"
                },
                success: _.bind(function(i) {
                    this.set({
                        domain: t
                    }, {
                        silent: !0
                    }), e.success && e.success(i);
                }, this),
                error: _.bind(function(t) {
                    return t && t.status >= 500 ? e.error(null) : e.error && e.error({
                        badDNSSettings: !0
                    });
                }, this)
            });
        },
        unmapDomain: function(t) {
            return $.ajax({
                type: "POST",
                url: this.SETDOMAIN_URL + this.get("num_id"),
                data: {
                    status: "off"
                },
                success: _.bind(function(e) {
                    this.unset("domain", {
                        silent: !0
                    }), t && t(e);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), t && t(null);
                }, this)
            });
        },
        changeSSL: function(t, e, i) {
            return i = i || {}, $.ajax({
                type: "POST",
                url: this.SSLDOMAIN_URL + this.get("num_id") + "/ssl",
                data: {
                    domain: t,
                    status: e ? "on" : "off"
                },
                success: _.bind(function(t) {
                    i.success && i.success(t);
                }, this),
                error: _.bind(function(t) {
                    return t && t.status >= 500 ? i.error(null) : i.error && i.error(t.responseJSON);
                }, this)
            });
        },
        getSSLState: function(t) {
            return $.ajax({
                type: "GET",
                url: this.SSLDOMAIN_URL + this.get("num_id") + "/ssl",
                success: _.bind(function(e) {
                    t.success && t.success(e);
                }),
                error: _.bind(function(e) {
                    return e && e.status >= 500 ? t.error(null) : t.error && t.error(e.responseJSON);
                })
            });
        },
        loadUserTemplates: function(t) {
            this.currentXHR && this.currentXHR.abort(), this.currentXHR = $.ajax({
                url: "/api/user_templates/",
                dataType: "json",
                success: _.bind(function(e) {
                    this.isTemplatesLoaded = !0, this.user_templates = e, t && t.cb && t.cb(e);
                }, this),
                error: _.bind(function() {
                    console.error("Error loading page templates"), this.isTemplatesLoaded = !1, t && t.cb && t.cb();
                }, this)
            });
        },
        getPageTemplate: function(t) {
            var e = null;
            return _.any(this.user_templates, function(i) {
                if (i.id == t) return e = i, !0;
            }), e;
        },
        addCustomPageTemplate: function(t) {
            var e = _.find(this.user_templates, function(t) {
                return t.custom;
            });
            e && e.templates.unshift(t);
        },
        getUsedFonts: function(e) {
            e = e || {};
            var i = [];
            return _.each(this.pages.models, function(t) {
                _.each(t.widgets.models, function(t) {
                    i.push(t);
                });
            }), t.textutils.getUsedFontsFromWidgetsModels(_.extend(e, {
                models: i
            }));
        },
        updateUsedFonts: function(t) {
            t = t || {};
            var e = this.getUsedFonts({
                includeCustom: !0,
                customList: _.filter(this.edit_params && this.edit_params.get("fonts"), {
                    provider: "custom"
                })
            }), i = [], s = [];
            _.each(e, function(t) {
                "typekit" == t.provider && i.push({
                    id: t.css_name,
                    variations: t.used_variations
                }), "custom" == t.provider && s.push(t.css_name);
            }), this.save({
                used_typekit_fonts: i,
                used_custom_fonts: s
            }, {
                patch: !0,
                url: this.url() + "?skip_changed=true",
                success: _.bind(function() {
                    t.success && t.success();
                }, this),
                error: _.bind(function() {
                    t.error && t.error();
                }, this)
            });
        },
        filterUnusedFonts: function() {
            var t = this.edit_params.attributes.fonts;
            if (_.any(t, function(t) {
                return "typekit" == t.provider && t.hidden;
            })) {
                var e = _.pluck(_.where(this.getUsedFonts({
                    includeCustom: !1
                }), {
                    provider: "typekit"
                }), "css_name"), i = _.reject(t, function(t) {
                    return -1 === e.indexOf(t.css_name) && t.hidden && "typekit" == t.provider;
                });
                _.isEqual(_.pluck(i, "css_name"), _.pluck(t, "css_name")) || this.edit_params.save({
                    fonts: i
                }, {
                    silent: !0
                });
            }
        },
        mergeEditParams: function(e) {
            e = e || {};
            var i, s = this.edit_params, n = _.clone(s.get("paragraph_styles")) || [], a = !1;
            i = _.pluck(n, "_name"), _.each(e.paragraph_styles, function(t) {
                _.contains(i, t._name) || (n.push(t), a = !0);
            }), a && (s.set("paragraph_styles", n), t.constructorRouter.textStyles.generateCSS("paragraph", "constructor", document));
            var o = _.clone(s.get("link_styles")) || [], r = !1;
            i = _.pluck(o, "_name"), _.each(e.link_styles, function(t) {
                _.contains(i, t._name) || (o.push(t), r = !0);
            }), r && (s.set("link_styles", o), t.constructorRouter.textStyles.generateCSS("link", "constructor", document)), 
            (a || r) && this.save(), e.fonts && e.fonts.length && t.constructorRouter.fonts.addFonts(e.fonts, "paste");
        },
        triggerEditParamsRewrite: function(e, i) {
            JSON.stringify(e.paragraph_styles) != JSON.stringify(i.paragraph_styles) && t.constructorRouter.textStyles.generateCSS("paragraph", "constructor", document), 
            JSON.stringify(e.link_styles) != JSON.stringify(i.link_styles) && t.constructorRouter.textStyles.generateCSS("link", "constructor", document), 
            JSON.stringify(e.fonts) != JSON.stringify(i.fonts) && t.constructorRouter.fonts.appendFontsCssToDocument({
                version: "edit"
            }, function() {
                t.constructorRouter.trigger("font-added");
            });
        },
        fetchLastChanged: function(t) {
            this.fetch({
                data: {
                    fields: "last_changed"
                },
                noSocketUpdate: !0,
                success: _.bind(function(e) {
                    this.previousAttributes() && this.previousAttributes().last_changed ? new Date(this.previousAttributes().last_changed).getTime() + 3e5 < new Date(this.get("last_changed")).getTime() ? t({
                        wasChanged: !0
                    }) : t({
                        wasChanged: !1
                    }) : t({
                        wasChanged: !1
                    });
                }, this)
            });
        },
        updateLastChanged: function() {
            this.set("last_changed", new Date());
        },
        changeParentPage: function(t, e, i) {
            i = _.extend(i || {}, {
                nosave: !0
            });
            var s = new Backbone.Collection();
            return _.each(t, function(t) {
                var n = t.get("pid"), a = this.pages.get(n);
                n != e.id && (t.set("pid", e.id, {
                    silent: !0
                }), t.collection = e.widgets, e.addWidget(t, i), i.forceRemove = !0, a.removeWidgets([ t.id ], i), s.add(a));
            }.bind(this)), s.isEmpty() || s.add(e), s.models;
        },
        removeGlobalWidgets: function(t) {
            console.log("wids : ", t);
            var e = _.difference(this.get("gwids"), t);
            console.log("newWids : ", e), this.save({
                gwids: e
            });
        },
        initGlobalWidgets: function() {
            var t = this.pages.chain().reduce(function(t, e) {
                return t.concat(e.widgets.models);
            }, []).filter(function(t) {
                return t.isGlobal();
            }).uniq(function(t) {
                return t.get("_id");
            }).value();
            this.globalWidgets.set(t);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.models.User = Backbone.Model.extend({
        userpic_sizes: [ 64, 96, 128, 192, 256 ],
        mergePermissionsList: [ "can_publish" ],
        idAttribute: "uri",
        url: "/api/me/",
        SSLDOMAIN_URL: "/api/user/domain/ssl",
        initialize: function(t, e) {
            _.bindAll(this);
        },
        store: function(t, e) {
            t.name && !/^\s$/.test(t.name) || (t.name = this.get("name")), t = this.changedAttributes(t), this.set(t), 
            this.validate(t) || $.ajax({
                type: "PUT",
                url: this.url,
                data: t,
                success: e && "function" == typeof e.success && e.success,
                error: e && "function" == typeof e.error && e.error
            });
        },
        deletePic: function() {
            var t = this;
            $.ajax({
                type: "DELETE",
                url: "/api/me/userpic/",
                success: function() {
                    t.set("pic", "");
                }
            });
        },
        validate: function(t) {
            if (void 0 !== t.name && _.isEmpty($.trim(t.name))) return "Name yourself";
        },
        getUserpic: function(e) {
            var i, s = this.get("pic");
            if (Modernizr.retina && (e *= 2), e = _.find(this.userpic_sizes, function(t) {
                return t >= e;
            }), s) return 0 == (s = t.utils.addFilenameComponent(s, e)).indexOf("https://") || t.common.isDownloadedSource ? s : (-1 == s.indexOf("/api/upload/") && (s = "/api/upload/" + s), 
            s);
            i = this.get("name").match(/^[a-z0-9]{1}/i);
            var n = t.common.isDownloadedSource ? "" : "/";
            return i ? n + "img/stubs/avatar/" + i[0].toLowerCase() + ".gif" : n + "img/stubs/avatar/" + e + ".gif";
        },
        getLink: function() {
            return t.common.customDomainProfile ? "/" : t.common.isDomainViewer ? t.constants.readymag_host + "/" + this.get("uri") : "/" + this.get("uri");
        },
        getWebsiteButified: function() {
            var e, i = {
                link: "",
                label: ""
            };
            return this.get("website") && ((e = t.utils.URLParts(this.get("website"))).protocol = e.protocol || "http://", 
            i.link = e.protocol + e.hostname + e.path, i.label = e.hostname), i;
        },
        getTwitterButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            return this.get("twitter") && ((e = t.utils.URLParts(this.get("twitter"))).protocol || e.path ? (e.protocol = e.protocol || "http://", 
            i.nick = e.path.split("/")[1]) : (e.protocol = "http://", i.nick = e.hostname, e.path = "/" + i.nick, 
            e.hostname = "twitter.com"), i.link = e.protocol + e.hostname + e.path), i;
        },
        getFacebookButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            if (this.get("fb")) {
                e = t.utils.URLParts(this.get("fb"));
                try {
                    -1 != e.path.indexOf("profile.php") ? i.nick = "facebook" : "pages" == e.path.split("/")[1] ? i.nick = decodeURIComponent(e.path.split("/")[2]) || "" : e.protocol || e.path ? i.nick = e.path.split("/")[1].split("?")[0] || "" : (i.nick = e.hostname, 
                    e.hostname = "facebook.com", e.path = "/" + i.nick), e.protocol = e.protocol || "http://", i.link = e.protocol + e.hostname + e.path;
                } catch (t) {
                    console.log("Error parsing FB URL: ", t);
                }
            }
            return i;
        },
        mergePermissions: function(t) {
            var e = _.clone(this.get("permissions"));
            this.set("permissions", t), _.each(this.mergePermissionsList, function(t) {
                this.attributes.permissions[t] = this.attributes.permissions[t] && e[t];
            }, this);
        },
        resendConfirmationEmail: function() {
            $.get("/api/user/confirm/resend");
        },
        isPublisher: function() {
            return this.get("permissions").can_publish;
        },
        checkDomain: function(t, e) {
            return $.ajax({
                type: "POST",
                url: "/api/checkdomain",
                data: {
                    type: "user",
                    domain: t
                },
                success: _.bind(function(i) {
                    this.set({
                        last_checked_domain: t
                    }, {
                        silent: !0
                    }), e && e(i);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), e && e(null);
                }, this)
            });
        },
        mapDomain: function(t, e) {
            return e = e || {}, $.ajax({
                type: "POST",
                url: "/api/user/domain/",
                data: {
                    domain: t,
                    status: "on"
                },
                success: _.bind(function(i) {
                    this.set({
                        domain: t
                    }, {
                        silent: !0
                    }), e.success && e.success(i);
                }, this),
                error: _.bind(function(t) {
                    return t && t.status >= 500 ? e.error(null) : e.error && e.error({
                        badDNSSettings: !0
                    });
                }, this)
            });
        },
        unmapDomain: function(t) {
            return $.ajax({
                type: "POST",
                url: "/api/user/domain/",
                data: {
                    status: "off"
                },
                success: _.bind(function(e) {
                    this.unset("domain", {
                        silent: !0
                    }), t && t(e);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), t && t(null);
                }, this)
            });
        },
        changeSSL: function(t, e, i) {
            return i = i || {}, $.ajax({
                type: "POST",
                url: this.SSLDOMAIN_URL,
                data: {
                    domain: t,
                    status: e ? "on" : "off"
                },
                success: _.bind(function(t) {
                    i.success && i.success(t);
                }, this),
                error: _.bind(function(t) {
                    return console.log(t), t && t.status >= 500 ? i.error(null) : i.error && i.error(t.responseJSON);
                }, this)
            });
        },
        getSSLState: function(t) {
            return $.ajax({
                type: "GET",
                url: this.SSLDOMAIN_URL,
                success: _.bind(function(e) {
                    t.success && t.success(e);
                }),
                error: _.bind(function(e) {
                    return e && e.status >= 500 ? t.error(null) : t.error && t.error(e.responseJSON);
                })
            });
        },
        isBetaTester: function() {
            return !!(this.get("permissions") || {}).can_use_beta_testing;
        }
    }), t.collections.Users = Backbone.Collection.extend({
        model: t.models.User
    }), t.models.UsersLoader = function() {
        this.allUsers = new t.collections.Users(), this.userMags = {}, this.userFolders = {}, _.bindAll(this);
    }, t.models.UsersLoader.prototype = {
        LOAD_URL: "/api/readymags/user/",
        loadByUsername: function(e) {
            if (t.common.customDomainProfile && this.allUsers.at(0)) {
                var i = this.allUsers.at(0), s = this.userMags[this.allUsers.at(0).get("uri")];
                return i.folders = this.userFolders[this.allUsers.at(0).get("uri")], e.success && e.success({
                    user: i,
                    mags: s
                });
            }
            var n = this.allUsers.find(function(t) {
                return t.get("uri").toLowerCase() == e.user_uri.toLowerCase();
            }), a = _.bind(function(t) {
                var i, s;
                if (!t.user) return e.success({
                    user: t
                });
                this.load(t, e.is_me), i = this.allUsers.get(t.user.uri), s = this.userMags[t.user.uri], i.folders = this.userFolders[t.user.uri], 
                e.success && e.success({
                    user: i,
                    mags: s
                });
            }, this);
            n && !e.force ? (s = this.userMags[n.get("uri")], n.folders = this.userFolders[n.get("uri")], e.success({
                user: n,
                mags: s
            })) : this.request(e.user_uri, {
                success: a,
                error: e.error
            });
        },
        load: function(e, i) {
            var s;
            if (!_.isEmpty(e)) {
                var n = e.user || e, a = e.mags, o = n.folders || [];
                if (n) {
                    s = n.uri, t.collections.FolderList && (this.userFolders[s] = new t.collections.FolderList(o, {
                        parse: !0
                    }), delete n.folders), this.allUsers.remove(s), this.allUsers.add(n), i && n.contributors && _.each(n.contributors, function(e) {
                        e.member && (e.member = new t.models.User(e.member));
                    });
                    var r = _.pick(n, "_id", "uri", "desc", "pic");
                    i && (r.isMe = i), _.each(a, function(t) {
                        t.user = _.clone(r);
                    }), t.collections.MagList && (this.userMags[s] = new t.collections.MagList(a, {
                        parse: !0
                    }), i && !_.isEmpty(a) && this.userMags[s].each(function(t) {
                        t.user.set("isMe", !0);
                    }));
                }
            }
        },
        loadShared: function(e) {
            _.isEmpty(e) || (this.sharedMags = {}, _.each(e, function(e) {
                var i = _.pick(e.user, "_id", "uri", "desc", "pic");
                _.each(e.mags, function(t) {
                    t.user = _.clone(i);
                }), this.sharedMags[e.user.uri.toLowerCase()] = {
                    user: new t.models.User(e.user),
                    mags: new t.collections.MagList(e.mags, {
                        parse: !0
                    })
                };
            }, this));
        },
        request: function(e, i) {
            t.common.customDomainProfile && (this.LOAD_URL = "/api/domain/readymags/user/", e = ""), i = i || {}, 
            this.abortLoading();
            i.success || $.noop;
            this.loadingXHR = $.ajax(_.extend(i, {
                type: "GET",
                url: this.LOAD_URL + e
            }));
        },
        abortLoading: function() {
            this.loadingXHR && this.loadingXHR.abort && this.loadingXHR.abort();
        }
    }, $(function() {
        t.data.usersLoader = new t.models.UsersLoader();
        var e = window.ServerData.me;
        t.data.usersLoader.load(e, !0), e ? (e = e.user || e).uri && (t.data.usersLoader.me = t.data.usersLoader.allUsers.get(e.uri)) : t.data.usersLoader.me = !1, 
        window.ServerData.mags && window.ServerData.mags.user && window.ServerData.mags.mags && (!t.data.usersLoader.me || t.data.usersLoader.me.get("uri") != window.ServerData.mags.user.uri) && t.data.usersLoader.load(window.ServerData.mags), 
        window.ServerData.shared && t.data.usersLoader.loadShared(window.ServerData.shared), _.isEmpty(ServerData.sharedError) || (t.data.usersLoader.sharedError = ServerData.sharedError);
    });
}(RM), function(t, e) {
    "use strict";
    t.models.UserMag = Backbone.Model.extend({
        idAttribute: "_id",
        url: function() {
            if (this.get("user") && this.get("uri")) {
                var t = this.get("user");
                _.isObject(t) && (t = t.get("uri"));
                var e = t + "/" + this.get("uri");
            } else e = this.getId();
            return "/api/readymag/" + e;
        },
        PAGES_URL: "/api/magpages/",
        PUBLISH_URL: "/api/publish/",
        UNPUBLISH_URL: "/api/unpublish/",
        parse: function(e) {
            return e.user && (this.user = new t.models.User(e.user), delete e.user), e.title || (e.emptyTitle = !0), 
            e.title = e.title || "Project", _.isEmpty(e.recentMags) || (this.recentMags = new t.collections.MagList(e.recentMags, {
                parse: !0
            })), e;
        },
        getPageNumId: function(t) {
            if (!this.get("pages")) return "";
            var e = _.find(this.get("pages"), function(e) {
                return e.num == t;
            });
            return e ? e.num_id : "";
        },
        getPageId: function(t) {
            if (!this.get("pages")) return "";
            var e = _.find(this.get("pages"), function(e) {
                return e.num == t;
            });
            return e ? e._id : "";
        },
        getPageScreenshot: function(e, i) {
            if (e = t.utils.screenshotSize(e), i.cover) return !this.get("cover") && this.get("pages") ? this.getPageScreenshot(e, {
                _id: this.get("coverPid")
            }) : this.get("cover") ? t.utils.addFilenameComponent(this.get("cover"), e) : [ "/screenshot/renew", this.get("num_id"), this.get("coverPid"), (this.get("is_published") ? "ready" : "") + "?redirect=true&size=" + e ].join("/");
            if (this.get("pages")) {
                var s = _.findWhere(this.get("pages"), i), n = s && s.screenshot;
                return !n && s ? [ "/screenshot/renew", this.get("num_id"), s._id, (this.get("is_published") ? "ready" : "") + "?redirect=true&size=" + e ].join("/") : t.utils.addFilenameComponent(n, e);
            }
            console.error("cannot find page screenshot: ", this, i);
        },
        getLink: function() {
            if (!window.isdesktop) return this.getUnpublishedViewerLink();
            var e = this.get("is_published") && this.get("uri") || this.getId();
            return t.common.customDomainProfile ? "/" + e + "/" : t.constants.readymag_host + "/" + this.user.get("uri") + "/" + e + "/";
        },
        getUnpublishedViewerLink: function() {
            return t.constants.readymag_auth_host + "/" + this.user.get("uri") + "/" + this.get("num_id");
        },
        getMagEditLink: function() {
            return t.constants.readymag_auth_host + "/edit/" + this.getId() + "/";
        },
        getMagEditContentsLink: function() {
            return window.isdesktop ? this.getMagEditLink() + "contents/" : this.getUnpublishedViewerLink();
        },
        getMagSettingsLink: function() {
            return this.getMagEditLink() + "settings/";
        },
        getId: function() {
            return this.get("num_id");
        },
        getPagesCount: function() {
            return this.get("pages_count") || this.get("pages") && this.get("pages").length;
        },
        deleteMag: function(e) {
            this.deleteXHR && this.deleteXHR.abort(), this.deleteXHR = $.ajax({
                type: "DELETE",
                url: "/api/mag/" + this.getId(),
                success: function(t) {
                    "function" == typeof e.success && e.success(t);
                },
                error: function(e) {
                    console.log("Error deleting mag: " + e.responseText), this.onError("A problem occurred while deleting your project. Please, contact us: " + t.constants.SUPPORT_MAIL);
                },
                context: this
            }).always(function() {
                "function" == typeof e.always && e.always();
            });
        },
        _changePublishState: function(e, i) {
            var s = !e || "publish" !== e && "republish" !== e ? this.UNPUBLISH_URL : this.PUBLISH_URL;
            this.publishXHR && this.publishXHR.abort(), this.publishXHR = $.ajax({
                type: "POST",
                url: s + this.getId(),
                success: function(t) {
                    this.set("is_published", e && "unpublish" !== e), "publish" === e && (this.set("published", t.published || new Date().toISOString()), 
                    this.set("updated", t.updated || new Date().toISOString()), this.set("major_update", t.major_update || new Date().toISOString())), 
                    "republish" === e && this.set(_.extend(_.omit(t, "user"), {
                        updated: this.get("last_changed")
                    })), this.set("coverPid", t.coverPid || this.get("coverPid")), this.set("cover", t.cover || this.get("cover")), 
                    "function" == typeof i.success && i.success();
                },
                error: function(i) {
                    console.log("Error changing puplish state: " + i.responseText), this.onError("A problem occurred while " + e + "ing your project. Please, contact us: " + t.constants.SUPPORT_MAIL);
                },
                context: this
            }).always(function() {
                "function" == typeof i.always && i.always();
            });
        },
        publishMag: function(t) {
            this._changePublishState("publish", t);
        },
        unpublishMag: function(t) {
            this._changePublishState("unpublish", t);
        },
        republishMag: function(t) {
            this._changePublishState("republish", t);
        },
        duplicateMag: function(t) {
            var e;
            e = {
                type: "POST",
                url: "/api/mag/" + this.get("num_id") + "/duplicate",
                context: this
            }, _.extend(e, t), this.duplicateXHR && this.duplicateXHR.abort(), this.duplicateXHR = $.ajax(e);
        },
        hasUnsavedChanges: function() {
            return this.get("is_published") && this.get("changed");
        },
        onError: function(t) {
            alert(t);
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.collections.MagList = Backbone.Collection.extend({
        model: t.models.UserMag,
        load: function(t) {
            var e = (t = t || {}).success || $.noop;
            this.loaded;
            var i = this;
            return t.success = function(t) {
                e(i), i.loaded = !0;
            }, this.fetch(t);
        },
        comparator: function(t) {
            return -new Date(t.get("major_update")).getTime();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Alert = Backbone.View.extend({
        template: t.templates["template-common-alert"],
        events: {
            "click .button": "onButtonClick",
            click: "hideOnBgClick",
            "click .button.upgrade": "upgrade",
            "click .button.cancel": "hide",
            "click .button.close": "hide",
            "click .button.ok": "hide",
            "click .contact-link": "hide",
            "click .button.resend": "resendConfirmationEmail"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.opts = this.opts || {}, this.router = this.router || t.homepageRouter || t.collectorRouter || t.constructorRouter, 
            this.router && this.router.analytics && this.router.analytics.sendEvent("Alert Show", {
                label: this.alert_source,
                _alert_source: this.alert_source
            });
        },
        render: function() {
            this.setElement($(this.template({
                opts: this.opts
            }))), this.$parent && this.$parent.append(this.$el).addClass("visible"), _.delay(_.bind(function() {
                this.$el.addClass("show");
            }, this), 50), $("body").on("keyup", this.onBodyKeyUp), t.common.disableShortcuts.alert = !0;
        },
        hide: function() {
            delete t.common.disableShortcuts.alert, $("body").off("keyup", this.onBodyKeyUp), this.$el.removeClass("show").addClass("hide"), 
            _.delay(_.bind(function() {
                this.remove(), this.$parent && this.$parent.removeClass("visible");
            }, this), 400), this.trigger("hide", {
                lastButtonClicked: this.lastButtonClicked
            });
        },
        upgrade: function(e) {
            Modernizr.sessionstorage && window.sessionStorage.setItem("rm.accountUpgradeReturnUrl", window.location.pathname), 
            this.router && this.router.analytics && this.router.analytics.sendEvent("Alert Upgrade", {
                label: this.alert_source,
                _alert_source: this.alert_source
            }), 2 == e.which || e.metaKey || e.ctrlKey || this.router && this.router == t.collectorRouter && (this.hide(), 
            this.router.navigate("/settings/subscription/update", {
                trigger: !0
            }), e.preventDefault());
        },
        onBodyKeyUp: function(t) {
            27 == t.keyCode && (t.stopPropagation(), t.preventDefault(), this.hide());
        },
        hideOnBgClick: function(t) {
            $(t.target).closest(".panel").length || this.hide();
        },
        resendConfirmationEmail: function() {
            $.get("/api/user/confirm/resend"), this.hide();
        },
        onButtonClick: function(t) {
            var e = $(t.currentTarget).attr("data-type");
            this.lastButtonClicked = e;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.MagPassword = Backbone.View.extend({
        className: "magpassword",
        events: {
            "click .access": "onAccessClick",
            "keydown #magpassword-input": "onPasswordKeydown",
            "input #magpassword-input": "onPasswordInput"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.router = e.router, this.template = t.templates["template-viewer-mag-password"];
        },
        render: function(e) {
            var i, s = this;
            _.extend(this, e), i = new t.models.User(this.mag.user), $(new Image()).load(function() {
                s.$el.html(s.template({
                    user: i
                })), s.$parent && (s.$parent.find(s.className).remove(), s.$parent.append(s.$el)), s.delegateEvents(), 
                $("#magpassword-input").focus(), _.delay(function() {
                    s.$(".back, .center-content").removeClass("invisible"), _.delay(function() {
                        s.$(".author, .powered").removeClass("invisible");
                    }, 700);
                }, 200);
            }).prop("src", "/img/viewer/mag-password/bg.jpg");
        },
        onAccessClick: function() {
            var t = $.trim($("#magpassword-input").val());
            t ? (this.xhr && this.xhr.abort(), this.xhr = $.ajax({
                url: "/api/readymag/authorize",
                method: "POST",
                data: {
                    pass: t,
                    num_id: this.mag.num_id
                },
                success: function(t) {
                    this.proceed();
                },
                error: function(t) {
                    $("#magpassword-input").focus().select(), this.shake();
                },
                context: this
            })) : this.shake();
        },
        proceed: function() {
            $("body").removeClass("black"), this.remove(), this.mag.has_code_injection || this.mag.opts && this.mag.opts.gtm_id ? window.location.reload() : Backbone.history.loadUrl(Backbone.history.fragment);
        },
        onPasswordKeydown: function(t) {
            13 == t.keyCode && this.onAccessClick();
        },
        onPasswordInput: function(t) {
            this.$(".access").toggleClass("disabled", !this.$(".password-input").val());
        },
        shake: function() {
            var t = this;
            this.$(".password-wrapper").addClass("shake"), _.delay(function() {
                t.$(".password-wrapper").removeClass("shake");
            }, 500);
        }
    });
}(RM), function(t, e) {
    "use strict";
    var i;
    t.classes.CreateMag = i = function(e) {
        if (_.bindAll(this), _.extend(this, e), !t.common.magCreationInProgress) if (this.analytics = this.router && this.router.analytics, 
        this.router ? this.router == t.viewerRouter ? this.routerName = "viewer" : this.router == t.collectorRouter ? this.routerName = "collector" : this.router == t.homepageRouter ? this.routerName = "homepage" : this.router == t.constructorRouter ? this.routerName = "constructor" : this.routerName = "unknown" : this.routerName = "error", 
        this.analytics && !this.noCreateRequestTracking && this.analytics.sendEvent("Create Mag Request", {
            _tp: this.tp + "_" + (this.templateID ? "template" : "blank") + "_" + this.routerName + "_" + (this.me ? "has-me" : "no-me"),
            _template_id: this.templateID
        }), Modernizr.isdesktop) if (Modernizr.msie || Modernizr.msie11) this.showIEPopupWarning(); else if (this.me) {
            var i = "function" == typeof this.me.get ? this.me.get("permissions") : this.me.permissions;
            i && i.can_create_mag ? this.innerCreateMag() : this.showCreatePopupWarning();
        } else this.showJoinForm(); else this.showMobilePopupWarning();
    }, i.prototype.innerCreateMag = function() {
        var e = {};
        this.analytics && this.analytics.sendEvent("Create Mag", {
            _tp: this.tp + "_" + (this.templateID ? "template" : "blank") + "_" + this.routerName,
            _template_id: this.templateID
        }), this.currentFolderId && (e.folder = this.currentFolderId), this.sharedUser && (e.user = this.sharedUser), 
        t.common.magCreationInProgress = !0, $.ajax({
            url: t.constants.readymag_auth_host + (this.templateID ? "/api/magFromTemplate/" + this.templateID : "/api/mag/"),
            type: "POST",
            data: e,
            success: _.bind(function(e) {
                "function" == typeof this.success && this.success(), t.common.magCreationInProgress = !1, window.location.href = t.constants.readymag_auth_host + "/edit/" + e.num_id + "/contents/";
            }, this),
            error: _.bind(function() {
                if ("function" == typeof this.error && this.error(), t.common.magCreationInProgress = !1, console.log(arguments), 
                alert("Creating project problem. Contact tech support, please: " + t.constants.SUPPORT_MAIL), this.me) {
                    var e = "function" == typeof this.me.get ? this.me.get("uri") : this.me.uri;
                    e && (window.location.href = t.constants.readymag_auth_host + "/" + e);
                }
            }, this)
        });
    }, i.prototype.showCreatePopupWarning = function() {
        t.classes.Alert && new t.classes.Alert({
            $parent: $("body > .popups"),
            router: this.router,
            opts: {
                type: "type-create"
            },
            alert_source: "create mag"
        }).render();
    }, i.prototype.showMobilePopupWarning = function() {
        t.classes.Alert && new t.classes.Alert({
            $parent: $("body > .popups"),
            router: this.router,
            opts: {
                type: "type-switch-desktop-create"
            },
            alert_source: "create mag mobile"
        }).render();
    }, i.prototype.showIEPopupWarning = function() {
        t.classes.Alert && new t.classes.Alert({
            $parent: $("body > .popups"),
            router: this.router,
            opts: {
                type: "type-browsers"
            }
        }).render();
    }, i.prototype.showJoinForm = function() {
        var e = new t.classes.Login({
            router: this.router,
            useNavigate: !1,
            $container: $("body")
        });
        e.render(), e.$el.css("z-index", 9999), e.createMagParams = {
            templateID: this.templateID,
            tp: this.tp,
            noCreateRequestTracking: !0
        }, _.delay(_.bind(function() {
            e.switchTo("join"), e.show();
        }, this), 100);
    };
}(RM);