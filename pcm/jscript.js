(function() {
  if (!google.nocsixjs && google.timers && google.timers.load.t) google.timers.load.t.xjses = (new Date).getTime();
})();
(function() {
  var g = true,
    i = false;
  google.browser = {};
  google.browser.engine = {
    IE: i,
    GECKO: i,
    WEBKIT: i,
    OPERA: i
  };
  google.browser.product = {
    IE: i,
    FIREFOX: i,
    SAFARI: i,
    CHROME: i,
    OPERA: i
  };
  google.browser.engine.version = "";
  google.browser.product.version = "";
  google.browser.init = function(a) {
    var b = null,
      c = null;
    if (window.opera) {
      google.browser.engine.OPERA = g;
      google.browser.product.OPERA = g;
      b = c = /Opera\/(\S+)/
    } else if (a.indexOf("MSIE") != -1) {
      google.browser.engine.IE = g;
      google.browser.product.IE = g;
      b = c = /MSIE\s+([^\);]+)(\)|;)/
    } else if (a.indexOf("WebKit") != -1) {
      google.browser.engine.WEBKIT = g;
      if (a.indexOf("Chrome") != -1) {
        google.browser.product.CHROME = g;
        c = /Chrome\/(\S+)/
      } else if (a.indexOf("Safari") != -1) {
        google.browser.product.SAFARI = g;
        c = /Version\/(\S+)/
      }
      b = /WebKit\/(\S+)/
    } else if (a.indexOf("Gecko") !=
      -1) {
      google.browser.engine.GECKO = g;
      if (a.indexOf("Firefox") != -1) {
        google.browser.product.FIREFOX = g;
        c = /Firefox\/(\S+)/
      }
      b = /rv\:([^\);]+)(\)|;)/
    }
    if (b) {
      b = b.exec(a);
      google.browser.engine.version = b ? b[1] : ""
    }
    if (c) {
      b = c.exec(a);
      google.browser.product.version = b ? b[1] : ""
    }
  };
  google.browser.init(window.navigator.userAgent);
  google.browser.compareVersions = function(a, b) {
    function c(p, q) {
      if (p < q) return -1;
      else if (p > q) return 1;
      return 0
    }
    for (var d = 0, e = a.replace(/^\s+|\s+$/g, "").split("."), f = b.replace(/^\s+|\s+$/g, "").split("."), h = Math.max(e.length, f.length), j = 0; d == 0 && j < h; j++) {
      var t = e[j] || "",
        u = f[j] || "",
        v = new RegExp("(\\d*)(\\D*)", "g"),
        w = new RegExp("(\\d*)(\\D*)", "g");
      do {
        var l = v.exec(t) || ["", "", ""],
          m = w.exec(u) || ["", "", ""];
        if (l[0].length == 0 && m[0].length == 0) break;
        d = l[1].length == 0 ? 0 : parseInt(l[1], 10);
        var x = m[1].length == 0 ? 0 : parseInt(m[1],
          10);
        d = c(d, x) || c(l[2].length == 0, m[2].length == 0) || c(l[2], m[2])
      } while (d == 0)
    }
    return d
  };
  google.browser.isEngineVersion = function(a) {
    return google.browser.compareVersions(google.browser.engine.version, a) >= 0
  };
  google.browser.isProductVersion = function(a) {
    return google.browser.compareVersions(google.browser.product.version, a) >= 0
  };
  google.isOpera = i;
  google.isIE = i;
  google.isSafari = i;
  google.xhr = function() {
    var a = null;
    try {
      a = new XMLHttpRequest
    } catch (b) {}
    return a
  };
  google.style = {};
  google.getComputedStyle = function(a, b, c) {
    return google.style.getComputedStyle(a, b, c)
  };
  google.style.getComputedStyle = function(a, b, c) {
    var d = c ? "" : 0;
    var e = document.defaultView && document.defaultView.getComputedStyle(a, "");
    try {
      d = e.getPropertyValue(b);
      d = c ? d : parseInt(d, 10)
    } catch (f) {}
    return d
  };
  google.getHeight = function(a) {
    return google.style.getHeight(a)
  };
  google.style.getHeight = function(a) {
    var b = google.style.getComputedStyle(a, "height");
    return b
  };
  google.getWidth = function(a) {
    return google.style.getWidth(a)
  };
  google.style.getWidth = function(a) {
    var b = google.style.getComputedStyle(a, "width");
    return b
  };
  google.getPageOffsetTop = function(a) {
    return google.style.getPageOffsetTop(a)
  };
  google.style.getPageOffsetTop = function(a) {
    return a.offsetTop + (a.offsetParent ? google.style.getPageOffsetTop(a.offsetParent) : 0)
  };
  google.getPageOffsetLeft = function(a) {
    return google.style.getPageOffsetLeft(a)
  };
  google.style.getPageOffsetLeft = function(a) {
    return a.offsetLeft + (a.offsetParent ? google.style.getPageOffsetLeft(a.offsetParent) : 0)
  };
  google.getPageOffsetStart = function(a) {
    return google.style.getPageOffsetStart(a)
  };
  google.style.getPageOffsetStart = function(a) {
    return google.style.getPageOffsetLeft(a)
  };
  google.hasClass = function(a, b) {
    return google.style.hasClass(a, b)
  };
  google.style.hasClass = function(a, b) {
    if (!a) return i;
    return (new RegExp("(^|\\s)" + b + "($|\\s)")).test(a.className)
  };
  google.getColor = function(a) {
    return google.style.getColor(a)
  };
  google.style.getColor = function(a) {
    return google.style.getComputedStyle(a, "color", g)
  };
  google.dom = {};
  var k = /^(\w+)?(?:\.(.+))?$/;
  google.append = function(a) {
    return google.dom.append(a)
  };
  google.dom.append = function(a) {
    return (document.getElementById("xjsc") || document.body).appendChild(a)
  };
  google.dom.create = function(a, b) {
    var c = a.match(k),
      d = document.createElement(c[1]);
    if (c[2]) d.className = c[2];
    if (b) d.innerHTML = b;
    return d
  };
  google.dom.get = function(a, b, c) {
    var d = a.match(k);
    a = d[2] && new RegExp("\\b" + d[2]);
    b = (b || document).getElementsByTagName(d[1] || "*");
    if (a) {
      d = 0;
      var e = b;
      b = [];
      for (var f; f = e[d++];) a.test(f.className) && b.push(f)
    }
    return b.length > 1 || c ? b : b[0]
  };
  google.dom.insert = function(a, b, c) {
    return b.parentNode.insertBefore(a, c ? b.nextSibling : b)
  };
  google.dom.remove = function(a) {
    return a && a.parentNode && a.parentNode.removeChild(a)
  };
  google.dom.set = function(a) {
    for (var b = 1; b < arguments.length; b += 2) {
      var c = arguments[b],
        d = arguments[b + 1],
        e = a.style;
      if (e && c in e) e[c] = d;
      else if (c in a) a[c] = d;
    }
    return a
  };
  google.rhs = function() {};
  var n, o = location,
    r = location.protocol + "//" + location.host;
  google.nav = function(a, b) {
    try {
      if ((new RegExp("^(" + r + ")?/url\\?.*&rct=j(&|$)")).test(a))
        if (b) {
          google.r = 1;
          b.location.replace(a)
        } else {
          if (!n) {
            n = document.createElement("iframe");
            n.style.display = "none";
            google.dom.append(n)
          }
          google.r = 1;
          n.src = a
        }
      else o.href = a
    } catch (c) {
      o.href = a
    }
  };
  google.getURIPath = function() {
    return window.location.pathname + window.location.search
  };
  google.eventTarget = function(a) {
    return a.target;
  };
  google.srp = {};

  function s(a, b, c) {
    var d = new RegExp("([?&])" + b + "=.*?(&|$)");
    a = a.replace(/^(.*)(#|$)/, function(e, f) {
      return f
    });
    if (!a.match(d) && c != "") return a + "&" + b + "=" + c;
    return a.replace(d, function(e, f, h) {
      return c ? f + b + "=" + c + h : h ? f : ""
    })
  }
  google.srp.isSerpLink = function(a) {
    return /(search|images)/.test(a.href)
  };
  google.srp.isSerpForm = function(a) {
    return /\/search$/.test(a.action)
  };
  google.srp.updateLinksWithParam = function(a, b, c, d) {
    var e = document.getElementsByTagName("A");
    google.base_href = s(google.base_href, a, b);
    for (var f = 0, h; h = e[f++];)
      if (c(h)) {
        h.href = s(h.href, a, b);
      }
    for (f = 0; c = document.forms[f++];)
      if (d(c)) {
        for (h = e = 0; j = c.elements[h++];)
          if (j.name == a) {
            e = 1;
            if (b != "") j.value = b;
            else j.parentNode.removeChild(j)
          }
        if (!e && b != "") {
          e = document.createElement("input");
          e.type = "hidden";
          e.value = b;
          e.name = a;
          c.appendChild(e)
        }
      }
  };
  google.srp.qs = function(a) {
    if (a = google.eventTarget(a)) {
      for (; !google.style.hasClass(a, "qs");) {
        a = a.parentNode;
        if (!a || a == document.body) return
      }
      var b = document.getElementsByName("q"),
        c = b && b[0];
      b = document.getElementById("tsf-oq");
      if (c && b && window.encodeURIComponent) {
        c = c.value;
        var d;
        d = b.textContent;
        if (c && c != d) {
          d = s(a.href, "q", encodeURIComponent(c));
          a.href = s(d,
            "prmd", "")
        }
      }
    }
  };
  google.util = {};
  var y = ["&", "&amp;", "<", "&lt;", ">", "&gt;", '"', "&quot;", "'", "&#39;", "{", "&#123;"];
  google.util.escape = function(a) {
    for (var b = 0; b < y.length; b += 2) a = a.replace(new RegExp(y[b], "g"), y[b + 1]);
    return a
  };
  google.util.unescape = function(a) {
    for (var b = 0; b < y.length; b += 2) a = a.replace(new RegExp(y[b + 1], "g"), y[b]);
    return a
  };
  google.bind = function(a, b, c) {
    google.listen(a, b, c)
  };
  google.listen = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, i) : a.attachEvent("on" + b, c)
  };
  google.unbind = function(a, b, c) {
    google.unlisten(a, b, c)
  };
  google.unlisten = function(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, i) : a.detachEvent("on" + b, c)
  };
})();
(function() {
  var c = window,
    f = Object,
    h = google,
    i = "push",
    j = "length",
    k = "propertyIsEnumerable",
    l = "prototype",
    m = "call";

  function n(a) {
    var b = typeof a;
    if (b == "object")
      if (a) {
        if (a instanceof Array || !(a instanceof f) && f[l].toString[m](a) == "[object Array]" || typeof a[j] == "number" && typeof a.splice != "undefined" && typeof a[k] != "undefined" && !a[k]("splice")) return "array";
        if (!(a instanceof f) && (f[l].toString[m](a) == "[object Function]" || typeof a[m] != "undefined" && typeof a[k] != "undefined" && !a[k]("call"))) return "function"
      } else return "null";
    else if (b == "function" && typeof a[m] == "undefined") return "object";
    return b
  }

  function o(a) {
    return (new p).serialize(a)
  }

  function p() {}
  p[l].serialize = function(a) {
    var b = [];
    this.a(a, b);
    return b.join("")
  };
  p[l].a = function(a, b) {
    switch (typeof a) {
      case "string":
        this.b(a, b);
        break;
      case "number":
        this.d(a, b);
        break;
      case "boolean":
        b[i](a);
        break;
      case "undefined":
        b[i]("null");
        break;
      case "object":
        if (a == null) {
          b[i]("null");
          break
        }
        if (n(a) == "array") {
          this.c(a, b);
          break
        }
        this.e(a, b);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a);
    }
  };
  var q = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\u0008": "\\b",
      "\u000c": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\u000b": "\\u000b"
    },
    r = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  p[l].b = function(a, b) {
    b[i]('"', a.replace(r, function(g) {
      if (g in q) return q[g];
      var d = g.charCodeAt(0),
        e = "\\u";
      if (d < 16) e += "000";
      else if (d < 256) e += "00";
      else if (d < 4096) e += "0";
      return q[g] = e + d.toString(16)
    }), '"')
  };
  p[l].d = function(a, b) {
    b[i](isFinite(a) && !isNaN(a) ? a : "null")
  };
  p[l].c = function(a, b) {
    var g = a[j];
    b[i]("[");
    for (var d = "", e = 0; e < g; e++) {
      b[i](d);
      this.a(a[e], b);
      d = ","
    }
    b[i]("]")
  };
  p[l].e = function(a, b) {
    b[i]("{");
    var g = "";
    for (var d in a)
      if (a.hasOwnProperty(d)) {
        var e = a[d];
        if (typeof e != "function") {
          b[i](g);
          this.b(d, b);
          b[i](":");
          this.a(e, b);
          g = ","
        }
      }
    b[i]("}")
  };
  c.google.stringify = o;
  if (c.JSON && c.JSON.stringify && navigator.userAgent.indexOf("Chrome") == -1) c.google.stringify = c.JSON.stringify;
  h.History = {};
  var s = [],
    t = "/";
  h.History.client = function(a) {
    s[i](a);
    return s[j] - 1
  };
  var u, v;

  function w() {
    var a = u.value;
    v = a ? eval("(" + a + ")") : {}
  }

  function x(a, b) {
    w();
    v[t] || (v[t] = {});
    v[t][a] = b;
    u.value = h.stringify(v)
  }
  var y = [];

  function z() {
    for (var a = 0, b; b = y[a++];) b();
    y = []
  }
  h.History.addPostInitCallback = function(a) {
    y[i](a)
  };
  h.History.save = function(a, b) {
    u && x(a, b)
  };
  h.History.initialize = function(a) {
    t = a;
    v = null;
    if (u = document.getElementById("hcache")) {
      w();
      for (a = 0; a < s[j]; ++a) v && v[t] && v[t][a] && s[a][m](null, v[t][a]);
      z()
    }
  };
})();
(function() {
  var a, b;
  google.rhs = function() {
    if (!google.drhs)
      if (document.getElementById("mbEnd") && (a || b)) {
        var d = google.getHeight(document.getElementById("rhsline")),
          c = a ? google.getHeight(a) : 0;
        if (b) c += google.getHeight(b) + 18;
        document.getElementById("rhspad").style.height = c > d ? Math.min(9999, c - d) + "px" : google.isIE ? "" : 0
      }
  };

  function e() {
    a = document.getElementById("tads");
    b = document.getElementById("3po");
    google.rhs()
  }
  e();
  google.bind(window, "resize", google.rhs);
  google.rein.push(e);
})();
(function() {
  var f = 0,
    g = [];
  google.fx = {};
  google.fx.linear = function(a) {
    return a
  };
  google.fx.easeOut = function(a) {
    return 1 - Math.pow(1 - a, 3)
  };
  google.fx.easeInAndOut = function(a) {
    return (3 - 2 * a) * a * a
  };
  google.fx.animate = function(a, d, e) {
    for (var c = 0, b; b = d[c++];) {
      b[5] = b[5] == null ? "px" : b[5];
      b[4] = b[4] || google.fx.linear;
      h(b[0], b[1], b[2] + b[5])
    }
    g.push({
      b: a,
      a: e,
      d: google.time(),
      c: d
    });
    f = f || window.setInterval(i, 15)
  };

  function i() {
    for (var a = 0, d; d = g[a++];) j(d) || g.splice(--a, 1);
    if (!g.length) {
      window.clearInterval(f);
      f = 0
    }
  }

  function j(a) {
    var d = google.time() - a.d;
    if (d >= a.b) {
      for (var e = 0, c; c = a.c[e++];) h(c[0], c[1], c[3] + c[5]);
      a.a && a.a();
      return 0
    } else {
      for (e = 0; c = a.c[e++];) {
        var b = c[2] + (c[3] - c[2]) * c[4](d / a.b);
        if (c[5] == "px") b = Math.round(b);
        h(c[0], c[1], b + c[5])
      }
      return 1
    }
  }

  function h(a) {
    for (var d = 1; d < arguments.length; d += 2) {
      var e = arguments[d],
        c = arguments[d + 1],
        b = a.style;
      if (b && e in b) b[e] = c;
      else if (e in a) a[e] = c;
    }
    return a
  }
  google.fx.wrap = function(a) {
    var d = document.createElement("div");
    a.parentNode.replaceChild(d, a);
    d.appendChild(a);
    return d
  };
  google.fx.unwrap = function(a) {
    a.parentNode.parentNode.replaceChild(a, a.parentNode)
  };
  google.dstr.push(function() {
    window.clearInterval(f);
    f = 0;
    g = []
  });
})();
(function() {
  google.event = google.event || {};
  google.event.back = {};
  var d = [],
    f = [],
    g = {
      persisted: false
    };
  google.event.back.saveHistory = function() {
    google.History.save(i, g)
  };
  var j = google.event.back.saveHistory;

  function k() {
    for (var b = [], c = 0, a = d.length; c < a; c++) {
      var e = d[c](g[f[c]]);
      if (e) {
        b.length > 0 && b.push(",");
        b.push(e)
      }
    }
    b.push("&ei=", google.kEI);
    window.google.log("backbutton", b.join(""))
  }

  function l(b, c) {
    return function(a) {
      a = a || window.event;
      for (a = a.target || a.srcElement; a.parentNode && a.tagName != "A";) a = a.parentNode;
      b(a, c ? g[c] : null);
      c && j()
    }
  }

  function m(b, c, a) {
    for (var e = document.getElementsByTagName("a"), o = 0, h; h = e[o++];) b(h) && google.bind(h, "click", l(c, a))
  }

  function n() {
    if (!g.persisted) {
      g.persisted = true;
      j();
      if (window.addEventListener) {
        window.addEventListener("pageshow", p, false);
        q = false
      }
    }
  }
  var r = google.j && google.j.en,
    q;

  function p(b) {
    if ((b.persisted || q) && !r) k();
    q = true
  }
  var i = google.History.client(function(b) {
    g = b;
    g.persisted && k()
  });
  google.event.back.register = function(b, c, a, e) {
    if (e) g[e] = {};
    m(b, c, e);
    d.push(a);
    f.push(e)
  };
  google.event.back.init = function() {
    g = {
      persisted: false
    };
    google.History.addPostInitCallback(n)
  };

  function s() {
    d.length = 0;
    f.length = 0
  }
  google.dstr && google.dstr.push(s);
})();
(function() {
  var f = true,
    i = null,
    j = false,
    l = window.google.ac = {},
    aa = j,
    m, ba, ca, da, ea, fa, ga, ha, ia, n, o, p, ja, q = "",
    ka = i,
    r = i,
    s = i,
    u = -1,
    v, w, x, z, A, la, C, D, E, ma, na, pa, H, qa, ra = {},
    sa, I = 0,
    K = 0,
    ta = j,
    L = i,
    M = 0,
    ua, va;
  var N;
  var S;

  function za(a) {
    return (a = a && a.match(/\D+$/)) ? a[0] : i
  }
  var Aa = "hp",
    Ba = "serp",
    Ca = "img",
    Da = {
      0: Aa,
      1: Ba,
      2: Ca
    },
    T;

  function Ea(a) {
    return (document.getElementById("main") || document.getElementById("xjsc") || document.body).appendChild(a)
  }

  function Fa() {
    Ga();
    U();
    if (v) {
      E.value = ma.value = na.value = H.value = pa.value = "";
      window.clearTimeout(ka);
      q = va = sa = "";
      ka = r = s = i;
      u = -1;
      T = I = K = M = 0;
      ra = {};
      N = 0;
    }
  }

  function Ha(a, b) {
    T = 0;
    if (a == "i") T = 2;
    else if (b && b != "") T = 1
  }

  function Ia(a, b, c, d, e, h) {
    Ha(c, d);
    Ja();
    h && Ka(h);
    La();
    v = a;
    w = b;
    p = ja = o = w.value;
    if (!b.init) {
      ua = document.getElementsByTagName("head")[0];
      google.bind(v, "submit", Ma);
      w.setAttribute("autocomplete", "off");
      google.bind(w, "blur", U);
      w.onkeypress = Na;
      google.bind(w, "keyup", Oa);
      E = V("aq", "f");
      ma = V("aqi", "");
      na = V("aql", "");
      H = V("oq", p);
      pa = V("gs_rfai", "");
      C = A = document.createElement("table");
      A.cellSpacing = A.cellPadding = "0";
      D = la = A.style;
      A.className = "gac_m";
      if (n) {
        C = x = document.createElement("div");
        x.className = "gac_od";
        D = x.style;
        Ea(x);
        if (T == 1) {
          a = document.createElement("div");
          a.className = "gac_wd";
          x.appendChild(a)
        }
        z = document.createElement("div");
        z.cellSpacing =
          x.cellPadding = "0";
        z.className = "gac_id";
        x.appendChild(z);
        z.appendChild(A)
      } else v.appendChild(A)
    }
    b.init = f;
    U();
    Pa();
    if (!aa) {
      Qa();
      aa = f
    }
    b = Da[T];
    b = "&client=" + b;
    c = c ? "&ds=" + c : "";
    a = e ? "&tok=" + encodeURIComponent(e) : "";
    d = ["?hl=", google.kHL, b, Ra(), c, (d ? "&pq=" + encodeURIComponent(d) : ""), a].join("");
    sa = "/complete/search" + d;
    va = "/complete/deleteitems" + d;
    N = Sa(w);
    google.bind(window, "pageshow", function(g) {
      if (g.persisted) {
        E.value = "f";
        H.value = w.value
      }
    });
    Ua();
    e = ha || e && e.length || "https:" == document.location.protocol;
    ia = ["http", e ? "s" : "", "://"].join("");


  }

  function Qa() {
    function a(d, e) {
      b.push(d, "{", e, "}")
    }
    var b = [];
    if (n) {
      var c = "background:white;margin:0;z-index:99;";
      a(".gac_od", c + "border-top:0;border-left:0;border-right:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;padding:0!important;position:absolute");
      a(".gac_id", c + "border-top:1px solid #a2bff0;border-left:1px solid #a2bff0;border-right:1px solid #558be3;border-bottom:1px solid #558be3;display:block;position:relative");
      a(".gac_m", c + "border:0;cursor:default;display:block;font-size:17px;line-height:117%;padding:0;position:relative");
      if (!document.body.dir || document.body.dir == "ltr") a(".gac_wd", "background:#999;height:1px;position:absolute;right:-1px;top:0;width:1px;z-index:100")
    } else a(".gac_m", "background:white;border:1px solid #666;cursor:default;font-size:17px;line-height:117%;margin:0;position:absolute;z-index:99");
    a(".gac_m td", "line-height:22px");
    a(".gac_n", "padding-top:1px;padding-bottom:1px");
    a(".gac_b td.gac_c", "background:#d5e2ff");
    a(".gac_b", "background:#d5e2ff");
    a(".gac_a td.gac_f", "background:#fff8dd");
    a(".gac_p", "padding:1px 4px 2px 3px");
    a(".gac_u", "padding:0 0 1px 0;line-height:117%;text-align:left");
    a(".gac_t", "width:100%;text-align:left;font-size:17px");
    a(".gac_za", "position:absolute;bottom:0;right:0;text-align:right;font-size:12px;padding-right:5px");
    a(".gac_bt", "width:" + (w.offsetWidth - 2) + "px;text-align:center;padding:8px 0 7px;position:relative");
    a(".gac_sb", "font-size:15px;height:28px;margin:0.2em");
    a(".gac_z", "white-space:nowrap;color:#c00");
    a(".gac_s", "height:3px;font-size:1px");
    c = n ? 7 : 3;
    c = "white-space:nowrap;overflow:hidden;text-align:left;padding-left:" + c + "px;padding-right:3px";
    a(".gac_c", c);
    a(".gac_e", "text-align:right;padding:0 3px");
    a(".gac_d", "font-size:11px");
    a(".gac_h", "color:green");
    a(".gac_j", "display:block");
    a(".gac_l", "line-height:18px");
    a(".gac_x", "display:block;line-height:16px");
    a(".gac_y", "font-size:13px");
    a(".gac_i", "color:#666");
    a(".gac_w img", "width:40px;height:40px");
    a(".gac_w", "width:1px");
    a(".gac_r", "color:red");
    a(".gac_v", "padding-bottom:5px");
    c = document.createElement("style");
    c.setAttribute("type", "text/css");
    ua.appendChild(c);
    b = b.join("");
    c.appendChild(document.createTextNode(b));
  }

  function Pa() {
    if (C) {
      var a = Va(w);
      D.left = a.B + "px";
      a = a.D + w.offsetHeight - 1;
      n && T == 1 && a++;
      D.top = a + "px";
      a = w.offsetWidth;
      if (n) D.minWidth = a + "px";
      else D.width = a + "px";
      if (r) {
        var b = W(0);
        if (b && a - 12 >= 0) b.firstChild.style.width = a - 12 + "px"
      }
    }
  }

  function Va(a) {
    for (var b = 0, c = 0; a;) {
      b += a.offsetTop;
      c += a.offsetLeft;
      a = a.offsetParent
    }
    return {
      D: b,
      B: c
    }
  }

  function V(a, b) {
    var c = document.createElement("input");
    c.type = "hidden";
    c.name = a;
    c.value = b;
    return v.appendChild(c)
  }

  function Na(a) {
    var b = a.keyCode;
    if (b == 27 && Wa()) {
      U();
      X(p);
      a.cancelBubble = f;
      return a.returnValue = j
    }
    if (b == 13) {
      Xa(j);
      a.cancelBubble = f;
      return a.returnValue = j
    }
    if (b == 38 || b == 40) {
      K++;
      K % 3 == 1 && Ta(b);
      return j
    }
  }

  function Xa(a) {
    if (!a && qa) {
      v.removeChild(qa);
      qa = i
    }
    if (s && u != -1 && ta && !(a && s.A)) s.onclick(i);
    else if (w.value == "") U();
    else {
      if (a) qa = V("btnI", "1");
      Ya()
    }
  }

  function Ya() {
    Ma();
    v.onsubmit && v.onsubmit() == j || v.submit()
  }

  function Oa(a) {
    a = a.keyCode;
    if (!K) Ta(a);
    K = 0;
  }

  function Ta(a) {
    if (w.value != o) {
      p = w.value;
      N = Sa(w);
      H.value = p
    }
    if (a == 40 || a == 38) {
      Za(a == 40);
      ta = Wa()
    }
    Pa();
    if (q != p && !L) L = window.setTimeout(U, 500);
    o = w.value
  }

  function $a() {
    ta = j;
    if (!M) {
      if (s) s.className = "gac_a";
      s = this;
      for (var a = 0, b; b = W(a); a++) b == s && (u = a);
      s.className = "gac_b"
    }
  }

  function ab(a, b) {
    return function(c) {
      bb(cb(a), b);
      db(c);
      return j
    }
  }

  function cb(a) {
    return [a, "&aq=", s.m, "&oq=", H.value, Z("aqi", ma), Z("aql", na), Z("gs_rfai", pa)].join("")
  }

  function Z(a, b) {
    if (b && b.value.length && a.length) return ["&", a, "=", b.value].join("");
    return ""
  }

  function bb(a, b) {
    var c = window.frames.wgjf;
    if (c && !b) {
      google.r = 1;
      c.location.replace(a)
    } else window.location = a
  }

  function eb() {
    X(this.j);
    Ya();
  }

  function Za(a) {
    if (!(p != q || !r || !r.length))
      if (Wa()) {
        if (s) s.className = "gac_a";
        for (var b = r.length, c = (u + 1 + (a ? 1 : b)) % (b + 1) - 1; c != -1 && W(c).t;) c = (c + 1 + (a ? 1 : b)) % (b + 1) - 1;
        u = c;
        if (u == -1) fb();
        else {
          s = W(c);
          s.className = "gac_b";
          X(s.j);
          E.value = s.m
        }
      } else gb()
  }

  function fb() {
    w.focus();
    X(p);
    s = i;
    E.value = "f"
  }

  function U() {
    if (L) {
      window.clearTimeout(L);
      L = i
    }
    D && (D.visibility = "hidden");
  }

  function gb() {
    D && (D.visibility = "visible");
    Pa();
    M = 1
  }

  function Wa() {
    return !!D && D.visibility == "visible"
  }

  function Ga() {
    if (A) {
      A.innerHTML = "";
    }
  }

  function hb(a, b, c) {
    a.onclick = b ? ab(b, c) : eb;
    a.A = !b;
    a.onmousedown = ib;
    a.onmouseover = $a;
    a.onmousemove = function() {
      if (M) {
        M = 0;
        $a.call(this)
      }
    }
  }

  function jb(a, b) {
    db(a);
    a = 0;
    for (var c; c = W(a++);)
      if (c.m == b) {
        kb(va, "delq", c.j, lb);
        break
      }
    return j
  }

  function lb(a) {
    for (var b = 0, c; c = W(b++);)
      if (za(c.m) == "p" && c.j == a[0]) {
        c.t = 1;
        c.onclick = c.onmouseover = i;
        if (c == s) {
          c.className = "gac_a";
          u = -1;
          fb()
        }
        c.v.className = "gac_c gac_i fl";
        c.v.innerHTML = "This search was removed from your \x3ca href\x3d\x22/history\x22\x3eWeb History\x3c/a\x3e"
      }
  }

  function mb(a) {
    function b(oa, Y) {
      Y = Y ? za(Y[2]) : i;
      oa = oa + (Y ? "-" + Y : "");
      if (oa != e) {
        if (h) d += e + h;
        h = 0;
        e = oa
      }
      h++
    }
    var c = a[0];
    I > 0 && I--;
    if (!(!A || c != p)) {
      if (L) {
        window.clearTimeout(L);
        L = i
      }
      q = a[0];
      Ga();
      var d = "",
        e, h = 0;
      c = a[1];
      for (var g = c.length - 1, k = 0, t, F, G, y, J, B; k <= g; k++)
        if (B = c[k])
          if (y = ra[B[1]]) {
            y.w && y.w(k, g) && nb();
            t = B[2];
            F = B[3];
            G = y.k ? y.k(B, F) : i;
            J = A.insertRow(-1);
            hb(J, G, y.z);
            J.m = t;
            J.className = "gac_a";
            G = J.v = document.createElement("td");
            G.className =
              "gac_c";
            y.e(G, t, B, F);
            t = y.q;
            J.j = t ? t(B, F, q) : B[0];
            J.appendChild(G);
            b(y.b, B);
            k < g && y.C && nb()
          }
      na.value = a[3] || "";
      pa.value = a[4] || "";
      if ((r = A.rows) && r.length > 0) {
        if (T == 0) pb();
        else if (T == 1 && ga) {
          a = nb();
          c = a.style;
          c.textAlign = "right";
          c.fontSize = "12px";
          c.paddingRight =
            "5px";
          a.innerHTML = qb()
        }
        gb()
      } else U();
      b("");
      ma.value = d;
      u = -1
    }
  }

  function W(a) {
    b = r.item(a);
    return b
  }

  function rb(a) {
    var b = a ? "I\x26#39;m Feeling Lucky" : "Google Search",
      c = "gac_sb",
      d = "",
      e = "";
    if (n) {
      c = "lsb";
      d = "<span class=ds><span class=lsbb>";
      e = "</span></span>"
    }
    return [d, '<input type=button value="', b, '" class=', c, ' onclick="google.ac.rd(', a, ')">', e].join("")
  }

  function pb() {
    var a = A.insertRow(-1);
    a.t = 1;
    a.onmousedown = ib;
    var b = "";
    if (ga) b = "<div class=gac_za>" + qb() + "</div>";
    a = a.insertCell(0);
    a.innerHTML = ['<div style="position:relative"><div class=gac_bt>', rb(j), rb(f), "</div>", b, "</div>"].join("")
  }

  function qb() {
    return '<a href="http://www.google.com/support/websearch/bin/answer.py?hl=fr&answer=106230">En savoir plus</a>'
  }

  function $(a, b) {
    return ['href="', a, '" onmousedown="google.ac.r(event, this, \'', b, '\')" onclick="return google.ac.c(event)"'].join("")
  }

  function sb(a, b, c) {
    m = j;
    if (a.which) m = a.which == 2;
    else if (a.button) m = a.button == 4;
    b.href = cb(c)
  }

  function tb(a) {
    if (m) {
      db(a);
      return f
    }
    return j
  }

  function db(a) {
    if (a) {
      a.stopPropagation();
      a.cancelBubble = a.cancel = a.returnValue = f
    }
  }

  function nb() {
    var a = A.insertRow(-1);
    a.t = 1;
    a.onmousedown = ib;
    a = a.insertCell(0);
    a.className = "gac_s";
    return a
  }

  function Ma() {
    U();
    if (r && W(u) && H.value != w.value) E.value = W(u).m;
    else {
      H.value = "";
      E.value = "f";
      if (I >= 10) E.value = "o"
    }
  }

  function Ua() {
    if (p && ja != p) {
      I++;
      kb(sa, "q", p, mb);
      w.focus()
    }
    ja = p;
    for (var a = 100, b = 1; b <= (I - 2) / 2; b++) a *= 2;
    a += 50;
    ka = window.setTimeout(Ua, a)
  }

  function kb(a, b, c, d) {
    S && ua.removeChild(S);
    S = document.createElement("script");
    S.src = [ia, "clients1.google.com", a, "&", b, "=", encodeURIComponent(c), "&cp=" + N].join("");
    ua.appendChild(S);
  }

  function X(a) {
    if (w) w.value = o = a
  }

  function ob(a, b) {
    a.appendChild(document.createTextNode(b))
  }

  function ib(a) {
    a.stopPropagation();
    return j
  }

  function Sa(a) {
    var b = 0,
      c = 0;
    if (xb(a)) {
      b = a.selectionStart;
      c = a.selectionEnd
    }
    return b && c && b == c ? b : 0
  }

  function xb(a) {
    try {
      return typeof a.selectionStart == "number"
    } catch (b) {
      return j
    }
  }

  function Ja() {
    ba = f;
    ca = j;
    da = f;
    ea = j;
    fa = f;
    n = ga = ha = j
  }

  function Ka(a) {
    if ("a" in a) ba = a.a;
    if ("f" in a) ga = a.f;
    if ("l" in a) ca = a.l;
    if ("n" in a) da = a.n;
    if ("o" in a) ea = a.o;
    if (T == 2) fa = j;
    else if ("p" in a) fa = a.p;
    if ("s" in a) ha = a.s;
    if ("sw" in a) n = a.sw
  }

  function La() {
    var a = [yb];
    ba && a.push(zb);
    ca && a.push(Ab);
    da && a.push(Bb);
    ea && a.push(Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb);
    Mb(a)
  }

  function Mb(a) {
    for (var b = 0, c; c = a[b++];) ra[c.g] = c
  }
  var zb = {
      g: 8,
      b: "a",
      C: f,
      q: function(a, b, c) {
        return c
      },
      k: function(a, b) {
        return b[1] + Ra()
      },
      w: function(a, b) {
        return a == b
      },
      e: function(a, b, c, d) {
        b = d[0];
        var e = d[1] + Ra();
        c = d[2];
        var h = d[3];
        d = d[4];
        a.className = "gac_f gac_p";
        var g = b.replace(/<\/?[b|em]>/gi, "");
        e = $("http://" + g, e);
        a.innerHTML = ['<table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td><table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td style="line-height:117%;vertical-align:bottom"><a class=q ', e, ">", c, '</a><td class="gac_e gac_d gac_i">Sponsored Link</table><tr><td class="gac_u gac_x gac_y" style="line-height:16px;padding-bottom:8px"><span class=gac_h', ">", b, "</span>&nbsp; &nbsp;", h, d ? " " + d : "", "</table>"].join("")
      }
    },
    Hb = {
      g: 11,
      b: "b",
      z: f,
      k: function(a, b) {
        return b[0]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        var e = d[2],
          h = d[3],
          g = d[4],
          k = d[5],
          t = d[6];
        d = d[7];
        var F = b.match(/^([^&]*)/)[1];
        a.innerHTML = ['<span class="gac_j gac_l"><a class=q ', $(F, b), "><b>", c, "</b> - ", e, " (", h, ")</a><br><b>", g, "</b> <span class=gac_y><span class=gac_", k >= 0 ? "h" : "r", ">", k, " (", t, "%)</span> ", d, ' - </span><a href=/help/stock_disclaimer.html class="gac_d fl" onclick="google.ac.p(event);return true">Disclaimer</a></span>'].join("")
      }
    },
    Ib = {
      g: 12,
      b: "c",
      k: function(a, b) {
        return b[0]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        d = d[2];
        for (var e = "", h = d.length - 1, g = 0, k; g < h; g++) {
          k = d[g];
          e += [k[0], '<div class="gac_v">', k[1], "</div>"].join("")
        }
        k = d[h];
        e += [k[0], "<br>", k[1]].join("");
        Nb(1, a, c, b, "www.flightstats.com", e)
      }
    },
    Jb = {
      g: 15,
      b: "d",
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        var e = d[2];
        d = d[3];
        a.innerHTML = ["<b>", b, "</b> ", e, " (", c, ") in <b>", d, "</b>"].join("")
      }
    },
    Kb = {
      g: 13,
      b: "e",
      k: function(a, b) {
        return b[0]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        d = d[2];
        Nb(1, a, c, b, d)
      }
    },
    Db = {
      g: 14,
      b: "f",
      k: function(a, b) {
        return b[0]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        var e = d[2];
        d = d[3];
        Nb(1, a, c, b, d, e)
      }
    },
    yb = {
      g: 0,
      b: "g",
      q: function(a) {
        return a.j
      },
      e: function(a, b, c) {
        var d = c[0];
        a.innerHTML = d;
        c.j = Ob(a);
        if (fa && za(b) == "p") {
          a.className = "";
          a.innerHTML = ["<table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td class=gac_c>", d, '<td class="gac_d gac_e fl"><a href=# onclick="return google.ac.dc(event,\'', b, "')\">Remove</a></table>"].join("");
        }
      }
    },
    Eb = {
      g: 19,
      b: "h",
      e: function(a, b, c, d) {
        b = d[0];
        d = d[1];
        a.innerHTML = ["<b>", b, " = ", d, "</b>"].join("")
      }
    },
    Cb = {
      g: 17,
      b: "i",
      k: function(a, b) {
        return b[3]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        var e = d[2];
        d = d[3];
        var h = d.match(/url=([^&]*)/)[1];
        a.innerHTML = ['<span class="gac_j gac_l"><a ', $(h, d), ">", b, " &#151; ", c, ": ", e, '</a><span class=gac_y style="line-height:16px"><br>According to <span class=gac_h>',
          h, "</span></span></span>"
        ].join("")
      }
    },
    Lb = {
      g: 10,
      b: "j",
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        var e = d[4];
        d = d[5];
        var h = function(g) {
          var k = g[0],
            t = g[1],
            F = g[2],
            G = g[3];
          g = g[4];
          return ['<td class=gac_w><img src="', k, '" alt="', t, '" title="', t, '"><td class="gac_c" style="line-height:112%;vertical-align:top">', g, "<br>", F, "&deg; | ", G, "&deg;"].join("")
        };
        a.innerHTML = ["<b>Weather:</b> ", e, "&deg;", c, " in ", b, "<br><table class=gac_t><tr>", h(d[0]), h(d[1]), h(d[2]), h(d[3]), "</table>"].join("")
      }
    },
    Fb = {
      g: 20,
      b: "k",
      e: function(a,
        b, c, d) {
        b = d[0];
        d = d[1];
        a.innerHTML = ["<b>", b, " = ", d, '</b> - <a href=/intl/en/help/currency_disclaimer.html class="gac_d fl" onclick="google.ac.p(event);return true">Disclaimer</a>'].join("")
      }
    },
    Gb = {
      g: 16,
      b: "l",
      q: function(a, b) {
        return "define: " + b[0]
      },
      e: function(a, b, c, d) {
        b = d[0];
        c = d[1];
        d = d[2];
        Nb(1, a, "Web definitions for <b>" + b + "</b>", "/search?q=define:" + b.replace(" ", "+"), "www.google.com", [c, " - <span class=gac_i>", d, "</span>"].join(""))
      }
    },
    Ab = {
      g: 30,
      b: "m",
      q: function(a) {
        return a.j
      },
      e: function(a, b, c) {
        b = c[0];
        var d = document.createElement("div");
        d.innerHTML = b;
        c.j = Ob(d);
        a.innerHTML = ["<span class=gac_z>Did you mean: </span>", b].join("")
      }
    };

  function Ob(a) {
    var b;
    b = a.textContent;
    return b
  }
  var Bb = {
    g: 5,
    b: "n",
    q: function(a, b, c) {
      return c
    },
    k: function(a, b) {
      return b[0]
    },
    e: function(a, b, c, d) {
      b = d[0];
      d = d[1];
      a.className = "gac_c gac_n";
      a.style.lineHeight = "117%";
      var e = c[0];
      c = e.replace(/HTTPS?:\/\//gi, "");
      e = e.replace(/<\/?[b|em]>/gi, "");
      /^HTTPS?:\/\//i.test(e) || (e = (b.indexOf("/url?url=https:") > 0 ? "https" : "http") + "://" + e);
      b = $(e, b);
      a.innerHTML = ["<span class=gac_x><a ", b, ">", d, '</a><br><span class="gac_h gac_y"', ">", c, "</span></span>"].join("");
    }
  };

  function Nb(a, b, c, d, e, h, g) {
    var k = d.indexOf("/url") ? d : d.match(/url=([^&]*)/)[1];
    b.style.lineHeight = "112%";
    b.innerHTML = ["<a class=q ", $(k, d), ">", c, '</a><span class="gac_y' + (a ? " gac_x" : "") + '">', h ? h + "<br>" : "", g ? g + "<br>" : "", e ? "<span class=gac_h>" + e + "</span></span>" : ""].join("")
  }

  function Ra() {
    if (google.kEXPI) return "&expIds=" + google.kEXPI;
    return ""
  }
  l.c = tb;
  l.d = lb;
  l.dc = jb;
  l.h = mb;
  l.i = Ia;
  l.p = db;
  l.r = sb;
  l.rd = Xa;
  l.u = X;
  google.bind(window, "resize", Pa);
  google.dstr && google.dstr.push && google.dstr.push(Fa);
})();
(function() {
  window.ManyBox = {};
  var d, g, i = 1,
    l = google.History.client(j);

  function m(a) {
    for (var b in d)
      if (d[b].c && a(d[b])) return
  }

  function n(a, b, c, e, f) {
    this.c = a;
    this.j = b;
    this.B = e;
    this.o = f;
    this.q = "/mbd?" + (b ? "docid=" + b : "") + "&resnum=" + a.replace(/[^0-9]/, "") + "&mbtype=" + e + "&usg=" + c + "&hl=" + (google.kHL || "");
    this.e = {};
    this.m = "";
    g[a] = {
      r: 0,
      D: this.e,
      j: this.j,
      i: 0
    };
    this.n = 0
  }
  n.prototype.append = function(a) {
    this.m += "&" + a.join("&")
  };

  function o(a, b) {
    a.g.style.paddingTop = b + "px";
    a.g.style.display = a.g.innerHTML ? "" : "none";
    if (b > a.n) a.n = b;
    a.h.style.fontSize = b + "px";
    a.h.style.fontSize = null
  }

  function q(a) {
    if (!a.A) {
      a.A = 1;
      a.d = document.getElementById("mbb" + a.c);
      a.k = 0;
      a.a = document.getElementById("mbl" + a.c);
      a.h = a.a.getElementsByTagName("DIV")[0];
      a.p = a.a.getElementsByTagName("A")[0];
      a.z = a.p.innerHTML;
      a.o = a.o || a.z;
      a.h.title = "Click for more information";
      a.a.F = function(b, c) {
        var e = google.getPageOffsetStart(a.a),
          f = google.getPageOffsetTop(a.a);
        return b > e - 5 && b < e + google.getWidth(a.a) + 5 && c > f - 5 && c < f + google.getHeight(a.a) + 5
      };
      a.g = document.getElementById("mbf" + a.c);
      o(a, 0);
      a.a.onmousedown = r(a);
      a.a.onclick = s(a);
      a.a.go =
        function() {
          a.a.onmousedown();
          a.a.onclick()
        }
    }
  }

  function t(a) {
    google.log("manybox", [a.k ? "close" : "open", "&id=", a.c, "&docid=", a.j, "&mbtype=", a.B, a.m].join(""))
  }

  function r(a) {
    return function() {
      if (g[a.c].i) a.I++ < 3 && t(a);
      else {
        if (a.e.l) t(a);
        else {
          var b = google.xhr();
          if (b) {
            b.open("GET", a.q + a.m + "&zx=" + google.time());
            a.t = 0;
            b.onreadystatechange = function() {
              if (b.readyState == 4) {
                var c = 0;
                if (b.status == 200) try {
                  eval(b.responseText);
                  c = 1
                } catch (e) {}
                if (!c && !a.C) {
                  g[a.c].i = 0;
                  a.C = 1;
                  a.q += "&cad=retry";
                  a.a.onmousedown()
                } else {
                  a.u && u(a);
                  a.t = 0
                }
              }
            };
            a.t = 1;
            b.send(null)
          }
        }
        g[a.c].i = a.I = 1
      }
    }
  }

  function s(a) {
    return function() {
      g[a.c].i || a.a.onmousedown();
      (a.u = a.t) || u(a)
    }
  }

  function v(a) {
    if (!a.e.l) {
      a.e.l = "\x3cfont color\x3dred\x3eError:\x3c/font\x3e The server could not complete your request.  Try again in 30 seconds.";
      a.G = a.a.onclick;
      a.a.onclick = function() {
        i = 0;
        u(a);
        i = 1;
        a.b.parentNode.removeChild(a.b);
        g[a.c].i = a.e.l = a.v = 0;
        a.a.onclick = a.G
      }
    }
    if (!a.v) {
      a.v = 1;
      var b = document.getElementById("res");
      a.H = b && google.getPageOffsetStart(a.d) > google.getPageOffsetStart(b) + google.getWidth(b);
      a.b = document.createElement("div");
      o(a, 0);
      a.b.style.position = "absolute";
      a.b.style.paddingTop = a.b.style.paddingBottom = "6px";
      a.b.style.display = "none";
      a.b.className = "med";
      b = document.createElement("div");
      a.b.appendChild(b);
      b.className = "std";
      b.innerHTML = a.e.l;
      a.g.parentNode.insertBefore(a.b, a.g)
    }
  }

  function j(a) {
    i = 0;
    ManyBox.init();
    m(function(b) {
      if (b.j == a[b.c].j) {
        b.e = a[b.c].D;
        a[b.c].r != b.k && u(b)
      } else a[b.c].i = 0
    });
    g = a;
    i = 1;
    google.History.save(l, g)
  }
  ManyBox.create = function(a, b, c, e, f) {
    return new n(a, b, c, e, f)
  };
  ManyBox.register = function(a, b, c, e, f) {
    return d[a] = ManyBox.create(a, b, c, e, f)
  };
  google.bind(document, "click", function(a) {
    a = a || window.event;
    for (var b = a.target || a.srcElement; b.parentNode;) {
      if (b.tagName == "A" || b.onclick) return;
      b = b.parentNode
    }
    m(function(c) {
      if (c.a.F(a.clientX, a.clientY)) {
        c.a.go();
        return 1
      }
    })
  });

  function w() {
    d = {};
    g = {};
    history.navigationMode = history.navigationMode && "fast"
  }
  w();
  ManyBox.init = function() {
    m(q)
  };

  function x(a, b) {
    a.b.style.clip = "rect(0px," + (a.d.width || "34em") + "," + (b || 1) + "px,0px)"
  }
  n.prototype.insert = function(a) {
    this.e.l = a
  };

  function y(a) {
    a.f = document.getElementById("mbcb" + a.c);
    var b = a.f && a.f.getAttribute("mbopen");
    if (b) {
      eval(b);
      a.onopen(a.f)
    }
  }

  function z(a) {
    a.b.style.display = "none";
    a.h.style.backgroundPosition = "-153px -70px";
    a.p.innerHTML = a.z;
    a.k = g[a.c].r = 0;
    google.History.save(l, g)
  }

  function A(a, b, c, e, f) {
    var k = c > 0 ? 150 : 75,
      h = google.time() - f;
    k = h < k && i ? h / k * c : e > 1 ? c - 10 : c;
    h = Math.max(a.s, b + k);
    var p = h - a.s;
    x(a, p);
    a.d.style.height = h < 0 ? 0 : p ? h + "px" : "";
    o(a, Math.max(0, p - 5));
    google.rhs();
    Math.abs(k) < Math.abs(c) ? window.setTimeout(function() {
      A(a, b, c, e - 1, f)
    }, 30) : window.setTimeout(function() {
      c < 0 ? z(a) : y(a);
      if (!google.isIE && a.H) a.b.style.width = "100px";
      a.b.style.position = a.d.style.height = "";
      o(a, 0);
      google.rhs();
      a.d.w = 0
    }, 0)
  }

  function u(a) {
    a.u = 0;
    if (!a.d.w) {
      a.d.w = 1;
      var b;
      if (a.k) {
        if (b = a.f && a.f.getAttribute("mbclose")) {
          eval(b);
          a.onclose(a.f)
        }
        b = a.s - google.getHeight(a.d);
        a.g.style.display = "none";
        o(a, a.n);
        a.b.style.position = "absolute"
      } else {
        a.s = google.getHeight(a.d);
        v(a);
        o(a, 0);
        a.n = 0;
        m(function(c) {
          c.h.title = ""
        });
        a.h.style.backgroundPosition = "-153px -84px";
        a.p.innerHTML = a.o;
        x(a, 1);
        a.b.style.position = "absolute";
        a.b.style.display = "";
        a.k = g[a.c].r = 1;
        google.History.save(l, g);
        b = a.b.offsetHeight
      }
      A(a, google.getHeight(a.d), b, google.isSafari ?
        2 : 1, google.time())
    }
  }
  google.dstr && google.dstr.push(w);
})();
(function() {
  var j, k;

  function o() {
    j = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(j);
    k = j.sheet;
  }
  google.addCSSRule = function(a, b) {
    j || o();
    c = a + "{" + b + "}";
    k.insertRule(c, k.cssRules.length);
  };
  google.acrs = function(a) {
    a = a.split(/{|}/);
    for (var b = 1; b < a.length; b += 2) google.addCSSRule(a[b - 1], a[b])
  };
  google.Toolbelt.ascrs = function() {};
  var p, q;

  function r() {
    google.nav(document.getElementById("tbpi").href)
  }

  function t(a) {
    google.srp.updateLinksWithParam("tbo", a ? "1" : "", google.srp.isSerpLink, google.srp.isSerpForm)
  }

  function u() {
    mbtb1.insert = function(b) {
      try {
        v(eval(b))
      } catch (c) {
        r()
      }
    };
    var a = google.xhr();
    if (a) {
      a.open("GET", [google.base_href.indexOf("/images?") == 0 ? google.base_href.replace(/^\/images\?/, "/mbd?") : google.base_href.replace(/^\/search\?/, "/mbd?"), "&mbtype=29&resnum=1&tbo=1", mbtb1.tbs ? "&tbs=" + mbtb1.tbs : "", "&docid=", mbtb1.docid, "&usg=", mbtb1.usg, "&zx=", google.time()].join(""), true);
      a.onreadystatechange = function() {
        if (a.readyState == 4)
          if (a.status == 200) try {
            eval(a.responseText)
          } catch (b) {
            r()
          } else r()
      };
      a.send(null)
    }
  }

  function v(a) {
    for (var b = 0, c = 0, d, e;
      (d = a[b]) && (e = q[c]); b++, c++)
      if (google.Toolbelt.pti[c]) e.id != d[0] && b--;
      else {
        if (d[2]) {
          e.className = "tbos";
          google.listen(e, "click", google.Toolbelt.tbosClk)
        } else e.className = "tbou";
        e.id = d[0];
        e.innerHTML = d[1]
      }
  }

  function x(a) {
    for (var b = 0, c; c = google.Toolbelt.pbt[b++];)
      if (c[0] == a) return true;
    return false
  }
  google.Toolbelt.initializeToolElements = function() {
    p = [];
    q = [];
    var a = document.getElementById("tbd");
    if (a) {
      for (var b = a.getElementsByTagName("ul"), c = 0, d; d = b[c++];) {
        p.push(d);
        d = d.getElementsByTagName("li");
        for (var e = 0, f; f = d[e++];) q.push(f)
      }
    }
  };

  function y() {
    var a = document.getElementById("tbd");
    if (!a.getAttribute("data-loaded")) {
      a.setAttribute("data-loaded", 1);
      var b = [],
        c = 0;
      var d = '<li style="opacity:0">';
      for (var e = 0, f = google.Toolbelt.atg.length; e < f; ++e) {
        var h = google.Toolbelt.atg[e],
          g = google.style.hasClass(p[e], "tbpd");
        b.push('<li><ul class="tbt' + (g ? " tbpd" : "") + '">');
        for (var n;
          (n =
            google.Toolbelt.pbt[c]) && n[0] == e; c++) {
          for (g = 0; g++ < n[1];) b.push(d);
          b.push('<li class="' + q[c].className + '" id=' + q[c].id + ">" + q[c].innerHTML)
        }
        for (g = 0; g++ < h;) b.push(d);
        b.push("</ul>")
      }
      a.innerHTML = b.join("");
      google.Toolbelt.initializeToolElements();
      u()
    }
  }

  function z(a) {
    for (var b = [], c = [], d = a ? 0 : 1, e = a ? 1 : 0, f = null, h = 0, g; g = p[h]; h++) {
      google.style.hasClass(g, "tbpd") || b.push([g, "marginBottom", d * 8, e * 8]);
      if (x(h)) f = g;
    }
    google.style.hasClass(f, "tbpd") && b.push([f, "marginBottom", d * 8, e * 8]);
    for (h = 0; f = q[h]; h++)
      if (!google.Toolbelt.pti[h]) {
        b.push([f, "height", d * 1.2, e * 1.2, 0, "em"]);
        b.push([f, "paddingBottom", d * 3, e * 3]);
        c.push([f, "opacity", d, e, 0, ""]);
        f.style.overflow = "hidden";
      }
    d = a ? b : c;
    var C = a ? c : b;
    google.fx.animate(300, d, function() {
      document.body.className =
        document.body.className.replace(/\btbo\b/, "") + (a ? " tbo" : "");
      google.fx.animate(200, C, function() {
        var s = a ? "" : "none";
        for (m = 0; i = q[m]; m++) {
          if (a) {
            i.style.height =
              "";
            i.style.overflow = "visible";
            i.style.opacity = "";
          }
        }
      })
    })
  }
  google.Toolbelt.togglePromotedTools = function() {
    var a = !google.style.hasClass(document.body, "tbo");
    a && y();
    t(a);
    z(a);
    google.log("toolbelt", (a ? "0" : "1") + "&ei=" + google.kEI);
    return false
  };
  google.rein.push(google.Toolbelt.initializeToolElements);

  function A(a) {
    for (; a && !google.hasClass(a, "tbt");) a = a.parentNode;
    return a
  }
  google.Toolbelt.ctlClk = function(a, b, c) {
    a = a || "cdr_opt";
    if (a == "cdr_opt") {
      c && c.stopPropagation();
    }
    google.Toolbelt.maybeLoadCal && google.Toolbelt.maybeLoadCal();
    b = b || "cdr_min";
    if (a = document.getElementById(a)) {
      a.className = "tbots";
      if (a = A(a)) {
        c = 0;
        for (var d; d = a.childNodes[c++];)
          if (d.className == "tbos") d.className = "tbotu";
        (b = document.getElementById(b)) &&
        b.focus()
      }
    }
    return false
  };
  google.Toolbelt.cdrClk = google.Toolbelt.ctlClk;

  function B(a) {
    return a.replace(/_/g, "_1").replace(/,/g, "_2").replace(/:/g, "_3")
  }
  google.Toolbelt.cdrSbt = function() {
    return D("ctbs", {
      cdr_min: "cd_min",
      cdr_max: "cd_max"
    })
  };
  google.Toolbelt.clSbt = function() {
    return D("ltbs", {
      l_in: "cl_loc"
    })
  };
  google.Toolbelt.prcSbt = function() {
    D("prcbs", {
      prc_min: "pr_min",
      prc_max: "pr_max"
    });
    var a = document.getElementById("prc_frm");
    if (a) {
      var b = document.getElementById("tsf");
      if (b) a.elements.q.value = b.elements.q.value
    }
  };

  function D(a, b) {
    var c = document.getElementById(a);
    if (c)
      for (var d in b) {
        var e = B(document.getElementById(d).value),
          f = new RegExp("(" + b[d] + ":)([^,]*)");
        c.value = c.value.replace(f, "$1" + e)
      }
    return true
  }
  google.Toolbelt.tbosClk = function(a) {
    a = a || window.event;
    if ((a = a.target || a.srcElement) && a.className == "tbotu") {
      a.className = "tbos";
      if (a = A(a))
        for (var b = 0, c; c = a.childNodes[b++];)
          if (c.className == "tbots") c.className = "tbou"
    }
  };
})();
if (!window.gbar || !gbar.close) {
  window.gbar = {};
  (function() {
    var e = window.gbar,
      g, k;

    function l(a) {
      var b = window.encodeURIComponent && (document.forms[0].q || "").value;
      if (b) a.href = a.href.replace(/([?&])q=[^&]*|$/, function(c, d) {
        return (d || "&") + "q=" + encodeURIComponent(b)
      })
    }
    e.qs = l;

    function m(a, b, c, d, j, h) {
      var f = document.getElementById(a),
        i = f.style;
      if (f) {
        i.left = d ? "auto" : b + "px";
        i.right = d ? b + "px" : "auto";
        i.top = c + "px";
        i.visibility = k ? "hidden" : "visible";
        if (j && h) {
          i.width = j + "px";
          i.height = h + "px"
        } else {
          m(g, b, c, d, f.offsetWidth, f.offsetHeight);
          k = k ? "" : a
        }
      }
    }
    e.tg = function(a) {
      a = a || window.event;
      var b = a.target || a.srcElement;
      a.cancelBubble = true;
      if (g != null) n(b);
      else {
        a = document.createElement(Array.every || window.createPopup ? "iframe" : "div");
        a.frameBorder = "0";
        a.src = "#";
        g = b.parentNode.appendChild(a).id = "gbs";
        document.onclick = e.close;
        n(b);
        e.alld && e.alld(function() {
          var c = document.getElementById("gbli");
          if (c) {
            var d = c.parentNode;
            d.removeChild(c);
            o(d)
          }
        })
      }
    };

    function p(a) {
      var b, c = document.defaultView;
      if (c && c.getComputedStyle) {
        if (a = c.getComputedStyle(a, "")) b = a.direction
      } else b = a.currentStyle ? a.currentStyle.direction : a.style.direction;
      return b == "rtl"
    }

    function n(a) {
      var b = 0;
      if (a.className != "gb3") a = a.parentNode;
      var c = a.getAttribute("aria-owns") || "gbi",
        d = a.offsetWidth,
        j = a.offsetTop > 20 ? 46 : 24,
        h = false;
      do b += a.offsetLeft || 0; while (a = a.offsetParent);
      a = (document.documentElement.clientWidth || document.body.clientWidth) - b - d;
      d = p(document.body);
      if (c == "gbi") {
        var f = document.getElementById("gbi");
        e.alli && e.alli(f);
        o(f);
        if (d) {
          b = a;
          h = true
        }
      } else if (!d) {
        b = a;
        h = true
      }
      k != c && e.close();
      m(c, b, j, h)
    }
    e.close = function() {
      k && m(k, 0, 0)
    };

    function q(a, b) {
      var c = a.firstChild ? a.firstChild.className : "gb2";
      a.insertBefore(b, a.firstChild).className = c
    }

    function o(a) {
      for (var b, c = window.navExtra; c && (b = c.pop());) q(a, b)
    }
  })();;
};
if (!window.google) window.google = {};
window.google.crm = {};
window.google.cri = 0;
window.clk = function(e, f, g, k, l, b, m) {
  if (document.images) {
    var a = encodeURIComponent || escape,
      c = new Image,
      h = window.google.cri++;
    window.google.crm[h] = c;
    c.onerror = c.onload = c.onabort = function() {
      delete window.google.crm[h]
    };
    var d, i, j;
    if (google.v6) {
      d = google.v6.src;
      i = google.v6.complete || google.v6s ? 2 : 1;
      j = (new Date).getTime() - google.v6t;
      delete google.v6
    }
    if (b != "" && b.substring(0, 6) != "&sig2=") b = "&sig2=" + b;
    c.src = ["/url?sa=T", "&source=" + google.sn, f ? "&oi=" + a(f) : "", g ? "&cad=" + a(g) : "", "&ct=", a(k || "res"), "&cd=", a(l), "&ved=", a(m), e ? "&url=" + a(e.replace(/#.*/, "")).replace(/\+/g, "%2B") : "", "&ei=", google.kEI, d ? "&v6u=" + a(d) + "&v6s=" + i + "&v6t=" + j : "", b].join("")
  }
  return true
};
window.rwt = function(a, i, j, o, p, k, c, q) {
  try {
    if (a === window)
      for (a = window.event.srcElement; a;) {
        if (a.href) break;
        a = a.parentNode
      }
    var b = encodeURIComponent || escape,
      d = 0;
    if (!google.njr)
      for (var e = location.href.split("#"), l = 0; l < 2 && !d; l++) {
        d = e && e[1] && e[1].match("(^|&)q=(.*?)(&|$)");
        e = location.href.split("?")
      }
    var f;
    f = a.getAttribute("href");
    var g, m, n;
    if (google.v6) {
      g = google.v6.src;
      m = google.v6.complete || google.v6s ? 2 : 1;
      n = (new Date).getTime() - google.v6t;
      delete google.v6
    }
    if (c != "" && c.substring(0, 6) != "&sig2=") c = "&sig2=" + c;
    var h = ["/url?sa=t", "&source=" + google.sn,
      i ? "&oi=" + b(i) : "", j ? "&cad=" + b(j) : "", "&ct=", b(o || "res"), "&cd=", b(p), "&ved=", b(q), "&url=", b(f).replace(/\+/g, "%2B"), "&ei=", google.kEI, g ? "&v6u=" + b(g) + "&v6s=" + m + "&v6t=" + n : "", k ? "&usg=" + k : "", c
    ].join("");
    if (!google.njr && d) {
      var r = ("&rct=j&q=" + d[2]).substring(0, 1948 - h.length);
      a.href = h.replace(/&ei=/, r + "&ei=")
    } else a.href = h;
    a.onmousedown = ""
  } catch (s) {}
  return true
};
(function() {
  var f = true,
    g = false;
  window.google.rt = {};
  var h, i, j, k, m, n, o, p, q, r, s, t, u, v, w, aa, x;

  function ba() {
    h = 30;
    i = [];
    k = j = g;
    m = "";
    o = 0;
    p = g;
    q = (new Date).getTime();
    r = 100;
    s = 0;
    t = g;
    x = []
  }
  google.rt.init = function(a, c, b) {
    ba();
    if (n = document.getElementById(a)) {
      if (b)
        if (b.maxResults) r = b.maxResults;
      document.onmousemove = function() {
        p = f
      };
      document.onkeydown = function() {
        p = f
      };
      c && ca(c);
      s += n.getElementsByTagName("li").length;
      i.length == 0 && window.setTimeout(y, 3E3);
      da(n, x);
      z(y, h);
      if (ea("sbu", "sbd", "sbb", a)) {
        A.push(function() {
          k = f
        });
        B.push(function() {
          k = g
        });
        C(0, f)
      }
      fa(ga, 3E3, 6E3)
    }
  };
  google.rt.pause = function() {
    ha();
    D();
    var a = document.getElementById("rth");
    a = a.getElementsByTagName("span");
    E(a[0]);
    F(a[1]);
    aa = (new Date).getTime()
  };
  google.rt.resume = function() {
    var a = ((new Date).getTime() - aa) / 1E3;
    if (a > 10) i = [];
    y();
    z(y, h);
    fa(ga, 2E3, 6E3);
    a = document.getElementById("rth");
    a = a.getElementsByTagName("span");
    E(a[1]);
    F(a[0])
  };

  function E(a) {
    a.style.display = "none"
  }

  function F(a) {
    a.style.display = ""
  }

  function z(a, c) {
    var b = c;
    if (o) {
      b = Math.pow(2, o) * 5;
      b = (Math.random() + 0.5) * b;
      b = Math.min(7200, b)
    }
    w = window.setTimeout(function() {
      a();
      z(a, c)
    }, b * 1E3)
  }

  function ha() {
    window.clearTimeout(w)
  }

  function fa(a, c, b) {
    u = window.setTimeout(function() {
      a();
      v = window.setInterval(a, b)
    }, c)
  }

  function D() {
    window.clearTimeout(u);
    window.clearInterval(v)
  }

  function ga() {
    if (!i.length || k) {
      if (t) {
        D();
        var a = document.getElementById("rth");
        a = a.getElementsByTagName("span");
        if (a.length > 2) {
          E(a[0]);
          E(a[1]);
          F(a[2])
        }
      }
    } else {
      var c = i.shift();
      a = c.e;
      var b = a.getElementsByTagName("li")[0];
      n.insertBefore(a, n.firstChild);
      c.updateDate();
      google.History.save(ia, {
        r: n.innerHTML,
        u: m,
        n: s,
        s: x,
        t: G()
      });
      var d = -google.getComputedStyle(b, "height") - google.getComputedStyle(b, "margin-bottom");
      c = n.scrollTop;
      if (c < 20) {
        C(c);
        a = [
          [a, "marginTop", d, 0, google.fx.easeInAndOut]
        ];
        google.fx.animate(1200, a)
      } else C(c - d)
    }
  }

  function ca(a) {
    if (a.results) {
      var c = a.results.length;
      s += c;
      c = c;
      for (var b; b = a.results[--c];) i.push(ja(b))
    }
    if (a.nextRequest) m = a.nextRequest;
    if (a.pollSeconds) h = a.pollSeconds
  }
  window.mbrt0 = window.mb0rt = {
    insert: function(a) {
      a = eval("(" + a + ")");
      ca(a)
    }
  };

  function y() {
    if (p) {
      p = g;
      q = (new Date).getTime()
    } else if ((new Date).getTime() - q > 24E4) return;
    t = s + 5 > r;
    if (!(j || t || !m)) {
      var a = google.xhr();
      a.open("GET", m);
      a.onreadystatechange = function() {
        if (a.readyState == 4) {
          if (a.status == 200) {
            eval(a.responseText);
            o = 0
          } else o++;
          j = g
        }
      };
      j = f;
      a.send(null)
    }
  }

  function ja(a) {
    var c = document.createElement("div");
    c.innerHTML = a.html;
    return {
      e: c,
      updateDate: ka(c, x)
    }
  }
  var ia = google.History.client(function(a) {
    n.innerHTML = a.r;
    m = a.u;
    s = a.n;
    x = a.s;
    H(n, x, a.t);
    C(0, f);
    i = [];
    y()
  });
  google.dstr.push(function() {
    D();
    ha()
  });
  var I, J, K, M, N, O, P, A, B, Q, R, S = g;

  function T(a) {
    var c = google.getComputedStyle(a, "height");
    return c
  }

  function U(a) {
    a = a.offsetTop;
    a -= M.offsetTop;
    return a
  }

  function V(a) {
    if (a)
      for (var c = 0, b; b = A[c++];) b();
    else if (P)
      for (c = 0; b = B[c++];) b();
    P = a
  }

  function W(a) {
    var c = la(a);
    if (c) {
      var b = U(c);
      a || (b += T(c) - R);
      ma(b, f, 300, function() {
        na(a)
      })
    }
  }

  function ma(a, c, b, d) {
    var e = M.scrollHeight - R;
    e = e == 0 ? 0 : oa(a * (Q - Math.max(R / M.scrollHeight * Q, 20)) / e);
    e = [
      [K, "marginTop", google.getComputedStyle(K, "margin-top"), e, google.fx.easeInAndOut]
    ];
    if (c) e.push([M, "scrollTop", M.scrollTop, a, google.fx.easeInAndOut, ""]);
    else M.scrollTop = a;
    google.fx.animate(b, e, d)
  }

  function na(a) {
    setTimeout(function() {
      P && W(a)
    }, 200)
  }

  function la(a) {
    var c = M.childNodes;
    if (a)
      for (a = c.length - 1; a >= 0; --a) {
        var b = c[a],
          d = U(b);
        if (b.nodeType == 1 && d < M.scrollTop) return b
      } else
        for (a = 0; b = c[a++];) {
          d = U(b);
          if (b.nodeType == 1 && d + T(b) > M.scrollTop + R) return b
        }
  }

  function X(a) {
    var c = a.clientY - N;
    c = oa(google.getComputedStyle(K, "margin-top") + c);
    K.style.marginTop = c + "px";
    M.scrollTop = c * (M.scrollHeight - R) / (Q - T(K));
    N = a.clientY
  }

  function oa(a) {
    return Math.max(0, Math.min(Q - T(K), a))
  }

  function C(a, c) {
    if (S) {
      var b = T(K),
        d = Math.max(R / M.scrollHeight * Q, 20),
        e = document.getElementById("sbbb");
      b = [
        [K, "height", b, d],
        [e, "marginTop", b - 7, d - 7]
      ];
      if (!O) {
        e = d = 0;
        for (var l; l = M.childNodes[e++];)
          if (l.nodeType == 1) d += T(l);
        if (d > R) {
          b.push([document.getElementById("sb"), "opacity", 0, 1, google.fx.linear, ""]);
          O = f
        }
      }
      d = c ? 0 : 1200;
      ma(a, g, d);
      google.fx.animate(d, b, function() {
        if (O) K.style.position = "absolute"
      })
    }
  }

  function Y(a, c) {
    if (a.parentNode == K) a = K;
    var b = 70 * (c ? 1 : -1);
    pa(a, b);
    for (var d = 0, e; e = a.childNodes[d++];) e.nodeType == 1 && pa(e, b)
  }

  function pa(a, c) {
    var b = a.style.backgroundPosition.match(/^-?\d+/),
      d = a.style.backgroundPosition.match(/\s+.*$/);
    a.style.backgroundPosition = parseInt(b, 10) + c + "px " + (d ? d : "")
  }

  function ea(a, c, b, d) {
    I = document.getElementById(a);
    J = document.getElementById(c);
    K = document.getElementById(b);
    M = document.getElementById(d);
    if (!(I && J && K && M)) return S = g;
    P = O = g;
    A = [];
    B = [];
    Q = google.getComputedStyle(document.getElementById("sbc"), "height") - 1;
    R = google.getComputedStyle(M, "height");
    a = [I, J, K];
    for (c = 0; b = a[c++];) {
      google.bind(b, "mouseover", function(e) {
        Y(e.target)
      });
      google.bind(b, "mouseout", function(e) {
        Y(e.target, f)
      });
      b.onmousedown = function() {
        return g
      };
    }
    google.bind(I, "mousedown", function() {
      V(f);
      W(f)
    });
    google.bind(J, "mousedown", function() {
      V(f);
      W()
    });
    google.bind(K, "mousedown", function(e) {
      V(f);
      N = e.clientY;
      google.bind(document, "mousemove", X)
    });
    return S = f
  }
  google.bind(document, "mouseup", function() {
    document.removeEventListener("mousemove", X, g);
    V(g)
  });
  google.dstr.push(function() {
    A = B = [];
    S = g
  });
  var qa = -1,
    Z, ra = {
      Hour: "%I %p",
      HourMinute: "%I:%M%p",
      FullMonth: "%B",
      ShortMonth: "%b",
      MonthDay: "%b %d",
      FullDate: "%b %d, %Y %I:%M:%S %p"
    },
    sa = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ta = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
      "October", "November", "December"
    ];

  function ua(a, c) {
    for (var b = a.getElementsByTagName("div"), d = 0, e; e = b[d++];)
      if (e.className == "rtdelta") {
        b = parseInt(e.innerHTML, 10);
        return c - b
      }
    return g
  }

  function G() {
    return Math.round((new Date).getTime() / 1E3)
  }

  function va(a, c, b) {
    return b ? function(d) {
      return google.rt.formatTime(d, "FullDate")
    } : wa
  }

  function wa(a, c) {
    var b = c - a;
    if (b < 86400)
      if (b < 45) return "seconds ago";
      else if (b < 105) return "1 minute ago";
    else if (b < 3345) {
      b = Math.floor(b / 60) + (b % 60 >= 45 ? 1 : 0);
      return "1 minutes ago".replace("1", b + "")
    } else if (b < 6600) return "1 hour ago";
    else {
      b = Math.floor(b / 3600) + (b % 3600 >= 3E3 ? 1 : 0);
      return "1 hours ago".replace("1", b + "")
    }
    return g
  }

  function xa(a, c, b, d) {
    if (c)
      if (c = d(c, b)) a.innerHTML = c
  }

  function $(a) {
    var c = [];
    a = a.getElementsByTagName("span");
    for (var b = 0, d; d = a[b++];) d.className.match("rtd") && c.push(d);
    return c
  }

  function ya(a) {
    a = $(a);
    if (a.length > 0) return a[0];
    return g
  }

  function H(a, c, b) {
    a = $(a);
    b = b || G();
    for (var d = 0, e; e = a[d]; d++) xa(e, c[d], b, Z)
  }

  function ka(a, c, b) {
    var d = b || G();
    return function() {
      var e = ya(a);
      if (e) {
        var l = ua(e, d);
        if (l) {
          xa(e, l, G(), Z);
          c.unshift(l)
        }
      }
    }
  }

  function da(a, c, b, d) {
    var e = $(a);
    b = b || G();
    for (var l = 0, L; L = e[l++];)(L = ua(L, b)) && c.push(L);
    Z = va(c[c.length - 1], c[0], d);
    if (d) H(a, c);
    else qa = window.setInterval(function() {
      H(a, c)
    }, 6E4)
  }
  google.dstr.push(function() {
    window.clearInterval(qa)
  });
  if (!window.google.rt) window.google.rt = {};
  google.rt.formatTimeString = function(a, c) {
    var b = new Date(a * 1E3),
      d = c;
    d = d.replace("%Y", b.getFullYear() + "");
    var e = b.getMonth();
    d = d.replace("%b", sa[e]);
    d = d.replace("%B", ta[e]);
    d = d.replace("%m", (1 + e < 10 ? "0" : "") + (1 + e));
    e = b.getDate();
    d = d.replace("%d", (e < 10 ? "0" : "") + e);
    d = d.replace("%H", b.getHours() + "");
    e = (e = b.getHours() % 12) ? e + "" : "12";
    d = d.replace("%I", e);
    d = d.replace("%p", b.getHours() / 12 < 1 ? "am" : "pm");
    e = b.getMinutes();
    d = d.replace("%M", (e < 10 ? "0" : "") + e);
    b = b.getSeconds();
    return d = d.replace("%S", (b < 10 ?
      "0" : "") + b)
  };
  google.rt.formatTime = function(a, c) {
    var b = ra[c];
    return google.rt.formatTimeString(a, b)
  };
  google.rt.replayinit = function(a) {
    n = document.getElementById(a);
    x = [];
    if (n) {
      da(n, x, null, f);
      google.History.save(ia, {
        r: n.innerHTML,
        s: x,
        t: G()
      })
    }
  };
})();
(function() {
  var e = false;

  function h(a) {
    google.srp.updateLinksWithParam("prmdo", a ? "1" : "", google.srp.isSerpLink, google.srp.isSerpForm)
  }

  function i(a, c, b) {
    return [
      [c, "height", a ? b : 0, a ? 0 : b],
      [c, "opacity", a ? 1 : 0, a ? 0 : 1, null, ""]
    ]
  }

  function j(a) {
    if (!a) return null;
    var c = a.offsetHeight,
      b = google.style.getComputedStyle(a, "overflow", 1);
    a.style.overflow = "hidden";
    return {
      height: c,
      overflow: b
    }
  }

  function l(a, c, b) {
    if (c) a.style.height = b.height + "px";
    else a.style.removeAttribute && a.style.removeAttribute("filter");
    a.style.overflow = b.overflow
  }
  google.srp.toggleModes = function() {
    if (!e) {
      e = true;
      var a = document.getElementById("ms"),
        c = document.getElementById("hidden_modes"),
        b = document.getElementById("hmp"),
        d = google.style.hasClass(a, "open");
      a.className = "open";
      var k = j(c),
        f = j(b),
        g = i(d, c, k.height);
      if (f) g = g.concat(i(d, b, f.height));
      h(!d);
      google.fx.animate(227, g, function() {
        if (d) a.className = "";
        l(c, d, k);
        b && l(b, d, f);
        e = false
      })
    }
  };
})();
(function() {
  google.Tbpr = {};
  var d = {},
    g = /\bl\b/;

  function h(a) {
    return g.test(a.className)
  }

  function i() {
    for (var a = document.getElementsByTagName("h3"), b = 0, c; c = a[b++];)
      if (c.className == "tbpr") {
        var e = Number(c.id.substr(5));
        d[e] = c;
        j(c, e)
      }
  }

  function j(a, b) {
    for (; a && a.nodeName != "LI";) a = a.parentNode;
    if (a)
      for (var c = a.getElementsByTagName("a"), e = 0, f; f = c[e++];)
        if (h(f)) {
          f.result_index = b;
          return
        }
  }

  function k() {
    for (var a in d) d[a].style.display = "none"
  }

  function l(a) {
    if (d[a]) d[a].style.display = "block"
  }

  function m(a) {
    var b = "";
    k();
    if (a.lastClicked >= 0) {
      l(a.lastClicked);
      b = "tbpr:idx=" + a.lastClicked
    }
    return b
  }

  function n(a, b) {
    b.lastClicked = a.result_index || -1
  }
  google.Tbpr.init = function() {
    i();
    google.event.back.init();
    google.event.back.register(h, n, m, "tbpr")
  };
})();
(function ggxjs29sk() {
  var f = true,
    h = null,
    i = false;
  if (!google.j) window.google.j = {};
  var j = window.google.j,
    aa = j.en == 2,
    ba = !aa,
    da = i;

  function ea(a) {
    a = sessionStorage.getItem("web-" + a);
    if (typeof a == "undefined" || a === h) return a;
    if (typeof a.value == "string") return a.value;
    return a
  }
  var l = i;
  try {
    if (ba && window.sessionStorage && !sessionStorage.readonly) {
      var m = google.time().toString(),
        fa = "web-s" + m;
      sessionStorage[fa] = m;
      l = ea("s" + m) === m;
      sessionStorage.removeItem(fa);
      if (l)
        if (j.bv) {
          var ga = sessionStorage["web-v"];
          if (ga != j.bv) {
            var n, o, ha = p("s");
            for (n = 0; o = ha[n++];) sessionStorage.removeItem("web-s" + o);
            sessionStorage.removeItem("web-s");
            ha = p("c");
            for (n = 0; o = ha[n++];) sessionStorage.removeItem("web-c" + o);
            sessionStorage.removeItem("web-c");
            sessionStorage["web-v"] = j.bv
          }
        }
    }
  } catch (ia) {}
  var r, s = i,
    t, ja = google.j.mc || 4E5,
    u = {};

  function ka() {
    if (window.opera) return "opera";
    if (document.all) return "ie";
    if (/Gecko/.test(navigator.userAgent)) return "gecko";
    return ""
  }
  u[ka()] = 1;
  var v = 0;
  if (u.ie)
    if (document.documentMode) v = document.documentMode;
    else {
      v = parseInt((navigator.userAgent.match(/MSIE (.)/) || {
        1: ""
      })[1], 10);
      if (isNaN(v)) v = 0
    }
  var w = v && v <= 7 ? 1 : 0,
    y = window.frames.wgjf,
    z = location,
    A;
  j.ss = 1;
  var C = i,
    la = i,
    ma, D = "1",
    na = "1",
    E = {
      c: {
        1: google.j[1]
      },
      s: {}
    },
    F = {
      c: {},
      s: {}
    },
    G, oa, pa, H, qa = i,
    I, ra, J = 0,
    K = [];

  function L(a, b, c) {
    b._sn = a;
    b._t = "jesr";
    b._ls = A;
    b._fr = !!y;
    b._ph = J;
    if (j.m != j.ss) b._ss = j.ss + "," + j.m;
    try {
      b._wlt = typeof z.href;
      b._flt = typeof y.location.href;
      b._wl = encodeURIComponent(z.href);
      b._fl = encodeURIComponent(y.location.href)
    } catch (d) {}
    google.ml(c || new Error("jesr"), i, b)
  }
  var M, N, O = 0,
    sa = function(a, b) {
      if (a.removeEventListener) {
        a.removeEventListener("load", b, i);
        a.removeEventListener("error", b, i)
      } else {
        a.detachEvent("onload", b);
        a.detachEvent("onerror", b)
      }
    },
    P = function(a, b) {
      if (b || j.ss == j.m && ++N == M)
        if (google.timers && google.timers.load.t && google.timers.load.e) {
          google.timers.load.t.iml = google.time();
          google.timers.load.e.imn = M;
          if (O > 1) google.timers.load.e.alm = O - 1;
          google.report(google.timers.load, google.timers.load.e);
          google.dph && google.dph();
          O = 0
        }
      if (!b) {
        a = a || window.event;
        var c =
          a.target || a.srcElement;
        sa(c, P)
      }
    },
    ta = function() {
      try {
        ++O;
        var a = document.getElementsByTagName("img");
        M = a.length;
        for (var b = N = 0, c; b < M; ++b) {
          c = a[b];
          sa(c, P);
          if (c.complete || typeof c.src != "string" || !c.src) ++N;
          else if (c.addEventListener) {
            c.addEventListener("load", P, i);
            c.addEventListener("error", P, i)
          } else {
            c.attachEvent("onload", P);
            c.attachEvent("onerror", P)
          }
        }
        google.timers.load.e = {
          ei: google.kEI,
          e: google.kEXPI,
          cp: Q,
          imp: M - N
        };
        N == M && P(h, f)
      } catch (d) {
        L("SCSI", {
          n: M,
          i: b,
          s: c ? typeof c.src == "string" ? c.src.substr(0, 40) : 1 : 0,
          c: c ? c.complete : 0
        }, d)
      }
    };

  function R(a, b, c) {
    try {
      c ? a.replace(b) : (a.href = b)
    } catch (d) {
      L("SL", {
        v: b,
        r: c
      }, d)
    }
  }
  var S = i,
    T = i,
    ua = i,
    Q = i,
    va = "";

  function wa(a, b, c) {
    if (a[b]) {
      if (!a.__handler) {
        a.__handler = a[b];
        a[b] = function(d) {
          return this.__handler(d) != i && c.call(this, d)
        }
      }
    } else a.__handler = a[b] = function(d) {
      return c.call(this, d)
    }
  }

  function _trap() {
    for (var a = document.getElementsByTagName("form"), b = 0, c; c = a[b++];) G.test(c.action) && !/\bnj\b/.test(c.className) && wa(c, "onsubmit", function(d) {
      return xa(this, i, d)
    })
  }
  j.trap = _trap;

  function U(a, b) {
    if (E[a][b] === 1) E[a][b] = eval(ea(a + b));
    return E[a][b]
  }

  function ya(a, b) {
    delete E[a][b];
    if (l) {
      for (var c = a + b, d = p(a), e = -1, g = 0, k; k = d[g++];)
        if (k == c) {
          e = g - 1;
          break
        }
      if (e >= 0) {
        d.splice(e, 1);
        try {
          za(a, d);
          sessionStorage.removeItem("web-" + c)
        } catch (q) {
          L("RCI", {
            k: d ? d.length : -1,
            s: typeof sessionStorage.remainingSpace == "number" ? sessionStorage.remainingSpace : -1
          }, q)
        }
      }
    }
  }

  function p(a) {
    return (a = ea(a)) ? eval(a) : []
  }

  function za(a, b) {
    for (var c = {}, d = [], e = b.length - 1; e >= 0; e--)
      if (!c[b[e]]) {
        c[b[e]] = 1;
        d.push(b[e])
      }
    d.reverse();
    sessionStorage["web-" + a] = "(" + google.stringify(d) + ")"
  }

  function V() {
    return W > j.ss ? W : j.ss + 1
  }

  function X(a) {
    if (!a) return a === 0;
    return a == j.ss && j.ss > j.m
  }

  function Aa(a) {
    function b(c, d) {
      var e = document.createElement("script");
      e.text = d;
      google.append(e)
    }
    a.replace(/\x3cscript[\s\S]*?\x3e([\s\S]*?)\x3c\/script/ig, b)
  }

  function _bc(a, b) {
    try {
      b || Y("bc", [a]);
      document.body.className = a || ""
    } catch (c) {
      L("BC", {
        name: a
      }, c)
    }
  }
  j.bc = _bc;

  function _p(a, b, c, d, e) {
    if (w == 1 || X(d)) {
      try {
        e || Y("p", [b, c, 0]);
        if ((b == "sdb" || b == "taw") && S) {
          document.body.style.height = document.body.offsetHeight + 4 + "px";
          Z(D);
          window.scroll(0, 0);
          S = i
        }
        var g = document.getElementById(b),
          k = g.cloneNode(i);
        k.innerHTML = c;
        g.parentNode.replaceChild(k, g);
        /Firefox/.test(navigator.userAgent) || Aa(c);
        if (b == "main") {
          var q = $("q") || $("as_q");
          a = 0;
          for (var x; x = ["gs", "bgs", "f"][a++];)
            if (document[x]) document[x].q.value = q
        }
        document.getElementById(b).style.visibility = "visible"
      } catch (B) {
        L("P", {
            id: b
          },
          B)
      }
      J = 21
    }
  }
  j.p = _p;

  function _ph(a, b, c) {
    if (w == 1 || X(c)) {
      var d, e;
      try {
        Y("ph", [b, 0]);
        for (d in b) {
          e = b[d];
          document.getElementById(d).href = e
        }
      } catch (g) {
        L("PH", {
          id: d,
          href: e
        }, g)
      }
    }
  }
  j.ph = _ph;

  function _pah(a, b, c) {
    if (w == 1 || X(c)) {
      var d, e;
      try {
        Y("pah", [b, 0]);
        for (d in b) {
          e = b[d];
          var g = document.getElementById(d);
          if (g) {
            if (!g.orighref) {
              var k = g.href.indexOf("?");
              g.orighref = k >= 0 ? g.href.substr(0, k + 1) : g.href
            }
            g.href = g.orighref + e
          }
        }
      } catch (q) {
        L("PAH", {
          id: d,
          suffix: e
        }, q)
      }
    }
  }
  j.pah = _pah;

  function _pa(a, b, c, d) {
    if (w == 1 || X(d)) {
      try {
        Y("pa", [b, c, 0]);
        var e = document.getElementById(b),
          g = document.createElement("div");
        g.innerHTML = c;
        for (var k; k = g.firstChild;) e.appendChild(k);
        u.ie && Aa(c)
      } catch (q) {
        L("PA", {
          id: b
        }, q)
      }
      J = 22
    }
  }
  j.pa = _pa;

  function Ba(a, b) {
    for (var c in b) {
      var d = b[c];
      if (d && typeof d == "object") {
        if (!a[c] || typeof a[c] != "object") a[c] = {};
        Ba(a[c], d)
      } else a[c] = d
    }
  }

  function _sa(a, b, c, d) {
    if (w == 1 || X(d)) try {
      Y("sa", [b, c, 0]);
      var e = document.getElementById(b);
      Ba(e, c)
    } catch (g) {
      L("SA", {
        id: b,
        elt: e,
        attbs: google.stringify(c)
      }, g)
    }
  }
  j.sa = _sa;
  var Ca = 1,
    Da = ["wgjc"],
    W, Ea = 1;

  function Fa() {
    return /#.+/.test(Ga()) ? Ga() : z.href.substr(z.href.indexOf("?")).replace(/#.*/, "")
  }

  function $(a, b) {
    try {
      var c = b || Fa(),
        d = c.match("[?&#]" + a + "=(.*?)([&#]|$)");
      if (d) return decodeURIComponent(d[1].replace(/\+/g, " ").replace(/[\n\r]+/g, " "))
    } catch (e) {
      L("GQC", {
        c: a
      }, e)
    }
    return ""
  }
  var Ha = google.j.b;

  function _ad(a, b, c, d, e, g, k) {
    var q = i;
    C = i;
    if (!k && w == 1) {
      A = a;
      j.ss = V();
      R(z, A)
    }
    if (w == 1 || X(e)) {
      K = [];
      Y("ad", [b, c, d, 0, 0, 1]);
      k || Ia();
      if (google.med)
        if (Ha) Ha = i;
        else google.med("dispose");
      qa && Ja();
      try {
        y.document.title = document.title = b
      } catch (x) {}
      google.kEI = c;
      if (g) {
        google.kCSI = g;
        google.kEXPI = g.expi
      }
      q = D != d ? Ka(d, a) : f;
      ma = $("q", a) || ma;
      j.bc("", f);
      J = 20
    }
    return q
  }
  j.ad = _ad;

  function _xx(a, b, c) {
    if (w == 1 || X(c)) try {
      C = f;
      Z(D);
      j.p(A, "sdb", "", j.ss);
      j.p(A, "search", b, j.ss)
    } catch (d) {
      L("_xx", {}, d)
    }
  }
  j.xx = _xx;

  function _zd(a, b, c) {
    var d = b,
      e = c;
    if (typeof e == "number") {
      e = {
        s: b,
        e: c,
        n: arguments[3],
        h: arguments[4]
      };
      d = arguments[5]
    }
    if (w == 1 || X(d)) {
      Y("zd", [0, e]);
      ra = e.s;
      H = e.e;
      I = e.n;
      pa = e.h;
      document.body.style.height = ""
    }
  }
  j.zd = _zd;

  function _zz(a, b, c, d) {
    if (w == 1 || X(b)) {
      Y("zz", [0, 1, C]);
      if (!c) google.timers && google.timers.load.t && (google.timers.load.t.prt = google.time());
      !C && !d && U("c", D).nb && La();
      Ma();
      if (!c) google.timers && google.timers.load.t && (google.timers.load.t.pprt = google.time());
      !c && w == 0 && Na(a);
      Ca = 1;
      j.m = j.ss;
      if (!C && !c && google.timers && google.timers.load.t) {
        google.timers.load.t.ol = google.time();
        google.timers.load.t.jsrt = W;
        T && ta()
      }
      if (!c && w == 0) y.src = "about:blank"
    }
    T = C = i;
    J = 0
  }
  j.zz = _zz;

  function Oa() {
    google.pageState = A;
    for (var a = 0, b; b = google.rein[a++];) try {
      b(A == "#", ua)
    } catch (c) {
      L("INJS", {
        i: a
      }, c)
    }
    qa = f
  }

  function Ja() {
    if (google.y.x) google.x = google.y.x;
    for (var a = 0, b; b = google.dstr[a++];) try {
      b()
    } catch (c) {
      L("DEJS", {
        i: a
      }, c)
    }
  }

  function _l() {
    if (s) {
      try {
        if (t) {
          var a = t;
          t = "";
          if (v) {
            window.history.back();
            R(z, a)
          } else R(z, a, 1);
          return
        }
        a = y.location.href;
        var b = v <= 7 || y.document.readyState == "complete"
      } catch (c) {
        Pa(A);
        return
      }
      try {
        if (!(/\/blank\.html$/.test(a) || /about:blank$/.test(a)) && !(y.google && y.google.loc) && b) G.test(a) ? Pa(Fa()) : R(z, a, 1)
      } catch (d) {
        L("_l", {}, d)
      }
    }
  }
  j.l = _l;

  function _bvch(a) {
    var b = a.indexOf("?") + 1;
    if (b >= 1) a = a.substr(0, b) + a.substr(b).replace(/(^|&)fp\=[^&]*/g, "") + "&cad=cbv";
    if (w == 0) {
      j.ss = V();
      j.m = j.ss;
      y.location.replace("about:blank");
      t = a
    } else R(z, a)
  }
  j.bvch = _bvch;

  function Pa(a) {
    a = "/search?" + a.substr(1).replace(/(^|&)fp\=[^&]*/g, "") + "&emsg=NCSR&ei=" + window.google.kEI;
    try {
      google.ml(new Error("jesr"), i, {
        _sn: "NCSR",
        _t: "jesr",
        _g: !!y.google,
        _lg: W ? google.time() - W : "NA",
        _sl: Ea,
        _wl: z.href,
        _fl: y.location.href
      })
    } catch (b) {}
    R(z, a, 1)
  }

  function _e(a) {
    L("IFE", {}, a || window.event)
  }
  j.e = _e;

  function xa(a, b) {
    if (!r || da) return f;
    var c = "#";
    try {
      if (b) c += a.match(/\?(.*)/)[1];
      else {
        var d = [];
        a.q && a.q.blur();
        for (var e = 0, g; g = a.elements[e++];)
          if (!((g.type == "radio" || g.type == "submit") && !g.checked)) {
            if (g.name == "btnI") return f;
            g.name && d.push(g.name + "=" + encodeURIComponent(g.value))
          }
        c += d.join("&").replace(/\%20/g, "+")
      }
      c = c.replace(/\'/g, "%27");
      var k = $("q", c);
      if (!k) return i;
      if (/(^| )(r?phonebook|define|cache):/.test(k) || /(\?|&)pb=(r|f)/.test(c) || /(\?|&)swm=2/.test(c)) return f
    } catch (q) {
      L("HSA", {
          t: a.tagName
        },
        q);
      return f
    }
    c += "&fp=" + (D == "1" ? na : D);
    w == 0 && R(z, c);
    T = f;
    ya("s", c);
    document.getElementById("csi").value = "";
    Qa(c);
    w == 1 && R(z, c);
    return i
  }

  function Ra(a, b) {
    var c = Ga(a);
    if (!la && c != "#" && !/[&#]q=/.test(c)) {
      L("BF", {
        o: a,
        f: b,
        s: c
      });
      la = f
    }
    if (Ca && c != A && oa.test(z.href)) {
      T = !(c in E.s);
      document.gs && document.gs.q.blur();
      document.bgs && document.bgs.q.blur();
      document.f && document.f.q.blur();
      if (w == 0 || a || c == "#") {
        try {
          if (a && c != "#")
            if (w == 1 && A == "#" || w == 0 && b) {
              c = Sa(c, "fp", "1");
              if (c.indexOf("&fp=") == -1) c += "&fp=1";
              if (c.indexOf("&cad=") == -1) c += "&cad=b";
              ya("s", c);
              w == 0 && R(z, c, 1)
            }
        } catch (d) {}
        Qa(c, a)
      }
      w == 1 && R(z, c)
    }
  }

  function Ta(a, b) {
    Ra(a, b);
    window.setTimeout(Ta, 100)
  }

  function Qa(a, b) {
    W = google.time();
    Q = ua = S = i;
    if (google.timers) {
      google.timers.load.t = h;
      google.timers.load.e = h
    }
    if (a != "#" && a.indexOf("&fp=") == -1) {
      a += "&fp=" + D;
      R(z, a, 1)
    }
    A = a;
    if (w == 0) j.ss = V();
    Ea = 0;
    try {
      Ca = 0;
      var c = a.substr(1);
      if (w == 1 && a == "#") {
        if (a in E.s) {
          Z(D);
          Ua(a)
        }
      } else if (w == 1 && !b) {
        s = S = f;
        R(y.location, "/search?" + c)
      } else if (w == 0 && a in E.s) {
        Z(D);
        Ua(a)
      } else if (a != "#") {
        s = S = f;
        R(y.location, "/search?" + c, f)
      }
    } catch (d) {
      Ea = 1;
      L("GO", {
        o: b,
        s: a
      }, d)
    }
    window.setTimeout(function() {
      Ea = 1
    }, 50)
  }

  function Z(a) {
    try {
      for (var b = U("c", a), c = 0, d; d = b.cc[c++];) document.getElementById(d).style.visibility = "hidden"
    } catch (e) {
      L("C", {
        fp: a,
        c: d
      }, e)
    }
  }

  function Va() {
    var a = "#";
    if (!U("s", a)) try {
      K = [];
      Y("ad", [document.title, window.google.kEI, D, 0, 0, 1]);
      for (var b = U("c", D), c = 0, d; d = b.co[c++];) Y("p", [d, document.getElementById(d).innerHTML, 0]);
      Y("zz", [0, 1]);
      Na(a)
    } catch (e) {
      L("IS", {}, e)
    }
  }

  function Na(a) {
    if (!U("s", a)) {
      if (/[&#]deb=/.test(a)) {
        K = [];
        return
      }
      E.s[a] = K;
      K = []
    }
    Wa(D, a)
  }

  function Y(a, b) {
    K.push({
      n: a,
      a: b
    })
  }

  function Xa(a, b) {
    if (b.d) {
      b.n = b.g;
      b.a = b.d
    } else if (b.h) {
      b.n = b.h;
      b.a = b.g
    }
    var c;
    c = b.n != "bc" ? [a].concat(b.a) : b.a;
    try {
      j[b.n].apply(h, c)
    } catch (d) {
      L("ECF", {
        n: b.n,
        a: b.a,
        s: a
      }, d)
    }
  }

  function Wa(a, b) {
    if (l) {
      F.c[a] = 1;
      if (b) F.s[b] = 1
    }
    F.stale = 1;
    setTimeout(Ya, 0)
  }

  function Za(a) {
    var b = [];
    for (var c in F[a]) {
      sessionStorage["web-" + a + c] = "(" + google.stringify(U(a, c)) + ")";
      b.push(c)
    }
    if (b.length > 0) {
      c = p(a);
      c = c.concat(b);
      za(a, c)
    }
  }

  function $a(a) {
    try {
      Za(a)
    } catch (b) {
      var c = p("s"),
        d = Math.floor(c.length * google.j.sc);
      d = c.splice(1, d);
      za("s", c);
      c = 0;
      for (var e; e = d[c++];) {
        delete E.s[e];
        sessionStorage.removeItem("web-s" + e)
      }
      try {
        Za(a)
      } catch (g) {
        L("SCSTSSAC", {
          p: a
        }, g);
        throw g;
      }
    }
  }

  function Ya() {
    if (F.stale) try {
      if (l) {
        $a("c");
        $a("s")
      } else {
        var a = google.stringify(E);
        if (a.length > ja) {
          da = f;
          try {
            var b = 0,
              c = 0;
            for (var d in E.s) b++;
            for (d in E.c) c++;
            google.ml(new Error("jesr"), i, {
              _sn: "JMCSE",
              _t: "jesr",
              _s: b,
              _c: c,
              _l: a.length
            })
          } catch (e) {}
        }
        document.getElementById("wgjc").value = "(" + a + ")"
      }
    } catch (g) {
      document.getElementById("wgjc").value = "({})";
      L("SE", {
        ss: !!window.sessionStorage
      }, g)
    } finally {
      F = {
        c: {},
        s: {}
      }
    }
  }

  function ab() {
    var a = i;
    try {
      if (l) {
        E = {
          s: {},
          c: {
            1: j[1]
          }
        };
        for (var b = p("s"), c = p("c"), d = 0, e; e = b[d++];) E.s[e] = 1;
        e = 0;
        for (var g; g = c[e++];) E.c[g] = 1;
        a = b.length > 0 || c.length > 0
      } else {
        d = document.getElementById("wgjc").value;
        if (d.length > ja) da = f;
        a = d != "";
        E = eval(d)
      }
    } catch (k) {
      L("RC", {}, k)
    }
    E || (E = {
      s: {},
      c: {
        1: j[1]
      }
    });
    return a
  }

  function Ia() {
    bb();
    if (google.timers && !google.timers.load.t) {
      google.rph && google.rph();
      google.timers.load.t = {
        start: google.time()
      }
    }
  }

  function bb() {
    if (!va) va = google.sn;
    google.sn = A == "#" ? va : "web"
  }

  function _ac(a, b, c, d, e, g) {
    if (w == 1 || X(g)) {
      if (!d) {
        E.c[b] = {};
        for (var k in a) E.c[b][k] = a[k]
      }
      if (c) {
        Q = ua = f;
        Ia();
        if (u.ie) document.styleSheets[0].cssText = U("c", b).css;
        else document.getElementsByTagName("style")[0].textContent = U("c", b).css
      }
      J = 10
    }
  }
  j.ac = _ac;

  function _pc(a, b, c, d, e, g, k) {
    if (w == 1 || X(k)) {
      try {
        e || (U("c", c)[a] = b);
        if (d) {
          j.p(A, a, b, k, f);
          document.body.style.visibility = ""
        }
      } catch (q) {
        L("PC", {
          c: a,
          f: c
        }, q)
      }
      J = 11
    }
  }
  j.pc = _pc;

  function _zc(a, b, c, d, e, g) {
    if (w == 1 || X(g)) {
      if (!d) {
        d = U("c", b);
        for (var k in a) d[k] = a[k];
        w == 1 && Wa(b)
      }
      if (c) D = b;
      else na = b;
      J = 12
    }
  }
  j.zc = _zc;

  function Ka(a, b) {
    if (U("c", a)) {
      j.ac({}, a, f, f, A, 0);
      Q = i;
      j.pc("main", U("c", a).main, a, f, f, A, 0);
      j.zc({}, a, f, f, A, 0)
    } else {
      var c = $("fp", b) || "1";
      L("CM", {
        fp: c
      });
      c != "1" ? Qa(Sa(b, "fp", "1")) : Pa(b);
      return i
    }
    return f
  }

  function Ua(a) {
    try {
      for (var b = U("s", a), c = 0, d; d = b[c++];) Xa(a, d);
      if (u.ie) {
        var e = document.getElementById("pmocntr");
        if (e) e.style.display = "none"
      }
    } catch (g) {
      L("DPFC", {
        s: a
      }, g)
    }
  }

  function _xi() {
    if (google.y.first) {
      for (var a = 0, b; b = google.y.first[a]; ++a) b();
      google.y.first = []
    }
    google.x = function(c, d) {
      d && d.apply(c);
      return i
    };
    Oa()
  }
  j.xi = _xi;

  function cb() {
    try {
      var a = y.location.href,
        b = a.indexOf("?");
      return b >= 0 ? "#" + a.substr(b + 1) : "#"
    } catch (c) {
      L("FQS", {}, c);
      return A || "#"
    }
  }

  function Ga(a) {
    return !a && w == 1 ? cb() : z.hash ? z.href.substr(z.href.indexOf("#")) : "#"
  }

  function Sa(a, b, c) {
    b = new RegExp("([?&]" + b + "=).*?([&#]|$)");
    return a.replace(b, "$1" + encodeURIComponent(c).replace(/\%20/g, "+") + "$2")
  }

  function Ma() {
    try {
      for (var a = $("q") || $("as_q") || ma, b = 0, c; c = ["gs", "bgs", "f"][b++];)
        if (document[c]) document[c].q.value = a
    } catch (d) {
      L("PQ", {}, d)
    }
    j.trap()
  }
  var db = [24, 0, 53, 74, 96, 96],
    eb = [28, 53, 20,
      20, 71, 45
    ];

  function fb(a, b, c, d) {
    a = {
      a: a.getElementsByTagName("a")[0],
      e: a,
      s: a.getElementsByTagName("span")[0],
      l: a.getElementsByTagName("span")[1]
    };
    a.a.href = pa.replace(/start=\d*/, "start=" + b);
    a.s.style.backgroundPosition = -db[c] + "px 0";
    a.s.style.width = eb[c] + "px";
    a.s.className = c == 2 ? "csb" : "csb ch";
    a.l.style.display = d;
    return a
  }

  function La() {
    try {
      var a = $("start") || 0;
      if (H < a) a = H;
      var b = document.getElementById("nav"),
        c = document.getElementById("foot");
      if (b) {
        var d = b.getElementsByTagName("td"),
          e = Math.floor(ra / I) + 1,
          g = Math.floor(a / I) + 1,
          k = Math.ceil(H / I);
        a = a < I;
        var q = g >= k;
        if (e < k) {
          b.style.display = "";
          var x = d[1],
            B = d[d.length - 1];
          fb(d[0], Math.max((g - 2) * I, 0), a ? 0 : 1, a ? "none" : "block");
          fb(B, g * I, q ? 5 : 4, q ? "none" : "block");
          b = 1;
          for (var gb = d.length - 1; b < gb; b++) B.parentNode.removeChild(d[1]);
          for (b = e; b <= k; b++) {
            d = b == g;
            var ca = fb(x.cloneNode(f), (b - 1) * I, d ?
              2 : 3, "");
            ca.e.className = d ? "cur" : "";
            ca.a.style.textDecoration = d ? "none" : "";
            ca.l.innerHTML = b;
            B.parentNode.insertBefore(ca.e, B)
          }
        } else b.style.display = "none"
      }
      c.style.visibility = "visible"
    } catch (hb) {
      L("RNB", {}, hb)
    }
  }

  function ib(a) {
    oa = new RegExp("^" + a);
    G = new RegExp("(^" + a + "|^)/search(\\?|$)")
  }

  function jb() {
    if (window.event && typeof window.event.button == "number") kb = window.event.button
  }
  var kb;

  function lb(a) {
    if (!r) return f;
    a = a || window.event;
    if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || a.button && a.button != 0 || kb > 1) return f;
    for (var b = a.target || a.srcElement; b && b.nodeName.toLowerCase() != "body";) {
      if (b.nodeName.toLowerCase() == "a") {
        if (b.target) return f;
        else if (G.test(b.href) && !/\bnj\b/.test(b.className)) {
          b = xa(b.href, f);
          if (b === i) {
            a.preventDefault && a.preventDefault();
            a.cancelBubble = f
          }
          return b
        } else if (/&rct=j/.test(b.href)) try {
          s = f;
          j.oldNav(b.href, w == 0 ? y : undefined);
          a.preventDefault && a.preventDefault();
          a.cancelBubble = f;
          return i
        } catch (c) {
          return f
        }
        break
      }
      b = b.parentNode
    }
  }

  function mb() {
    if (w == 0 && v >= 8)
      for (var a = document.getElementsByTagName("iframe"), b = 0, c = a.length; b < c; b++)
        if (a[b].contentWindow == y) {
          c = document.createElement("div");
          c.style.display = "none";
          a[b].parentNode.insertBefore(c, a[b]);
          return
        }
  }

  function nb() {
    if (r = j.en && j[1] && encodeURIComponent && y && google.rein && google.dstr && (w == 0 || aa))
      for (var a = Da.concat(U("c", "1").co), b = 0; b < a.length; b++) r &= !!document.getElementById(a[b]);
    try {
      if (r) {
        A = w == 0 ? "#" : Ga();
        W = google.time();
        j.ss = j.m = V();
        var c = z.href.match(/.*?:\/\/[^\/]*/)[0];
        ib(c);
        j.trap();
        google.bind(document, "click", lb);
        u.ie && google.bind(document, "mousedown", jb);
        z.hash && z.hash != "#" && Z(D);
        var d = !ab();
        Va();
        window.wgjp && window.wgjp();
        if (w == 1) {
          a = 0;
          for (var e; e = j.pl[a++];) {
            var g = j[e[0]].apply(h, e[1]);
            if (e[0] == "ad" && !g) j.pl = []
          }
        }
        if (w == 1 && A == "#") try {
          y.document.title = document.title
        } catch (k) {}
        j.oldNav = google.nav;
        google.nav = function(x, B) {
          if (!G.test(x) || xa(x, f)) j.oldNav && j.oldNav(x, B)
        };
        google.getURIPath = function() {
          return pa
        };
        if (v >= 8) {
          Ra(1, d);
          window.onhashchange = Ra
        } else Ta(1, d);
        if (A == "#") {
          document.body.style.visibility = "";
          qa = f
        }
        mb()
      } else {
        google.j.en != 0 && w == 0 && L("INIT1", {});
        window._gjp && window._gjuc && window._gjp()
      }
    } catch (q) {
      L("INIT2", {}, q);
      r = i;
      window._gjp && window._gjuc && window._gjp()
    }
  }
  nb();
})();
if (google.y.first) {
  for (var a = 0, b; b = google.y.first[a]; ++a) b();
  delete google.y.first
}
for (a in google.y) google.y[a][1] ? google.y[a][1].apply(google.y[a][0]) : google.y[a][0].go();
google.y.x = google.x;
google.x = function(d, c) {
  c && c.apply(d);
  return false
};
google.y.first = [];
(function() {
  if (window.google) {
    window.google.a = {};
    window.google.c = 1;
    var k = function(a, b, d) {
      b = a.t[b];
      a = a.t.start;
      if (b && (a || d)) {
        if (d != undefined) a = d;
        return b > a ? b - a : a - b
      }
    };
    window.google.report = function(a, b, d) {
      var e = "";
      if (window.google.pt) {
        e += "&srt=" + window.google.pt;
        delete window.google.pt
      }
      var c = document.getElementById("csi");
      if (c) {
        var f;
        if (window.google._bfr != undefined) f = window.google._bfr;
        else {
          f = c.value;
          window.google._bfr = f;
          c.value = 1
        }
        if (f) return ""
      }
      c = "chrome.loadTimes";
      if (window.chrome && window[c] && window[c]().wasFetchedViaSpdy) e +=
        "&p=s";
      if (a.b) e += "&" + a.b;
      if (window.parent != window) e += "&wif=1";
      c = a.t;
      f = c.start;
      var h = [];
      for (var g in c) g != "start" && f && h.push(g + "." + k(a, g));
      delete c.start;
      if (b)
        for (var i in b) e += "&" + i + "=" + b[i];
      a = [d ? d : "/csi", "?v=3", "&s=" + (window.google.sn || "GWS") + "&action=", a.name, "", e, "&rt=", h.join(",")].join("");
      b = new Image;
      var j = window.google.c++;
      window.google.a[j] = b;
      b.onload = b.onerror = function() {
        delete window.google.a[j]
      };
      b.src = a;
      b = null;
      return a
    }
  };
  if (google.timers && google.timers.load.t) {
    if (!google.nocsixjs) google.timers.load.t.xjsee = google.time();
    window.setTimeout(function() {
      if (google.timers.load.t) {
        google.timers.load.t.xjs = google.time();
        google.timers.load.t.ol && google.report(google.timers.load, google.kCSI)
      }
    }, 0)
  };
})();
