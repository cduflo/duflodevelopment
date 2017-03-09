window.google = {
  kEI: "Quz2S63qIYeglAfw8oHGCg",
  kEXPI: "17259,23663,24477,24661,24745,24770,24808",
  kCSI: {
    e: "17259,23663,24477,24661,24745,24770,24808",
    ei: "Quz2S63qIYeglAfw8oHGCg",
    expi: "17259,23663,24477,24661,24745,24770,24808"
  },
  ml: function() {},
  pageState: "#",
  kHL: "en",
  time: function() {
    return (new Date).getTime()
  },
  log: function(b, d, c) {
    var a = new Image,
      e = google,
      g = e.lc,
      f = e.li;
    a.onerror = (a.onload = (a.onabort = function() {
      delete g[f]
    }));
    g[f] = a;
    c = c || "/gen_204?atyp=i&ct=" + b + "&cad=" + d + "&zx=" + google.time();
    a.src = c;
    e.li = f + 1
  },
  lc: [],
  li: 0,
  j: {
    en: 1,
    l: function() {},
    e: function() {},
    b: location.hash && location.hash != "#",
    bv: 3,
    pl: [],
    mc: 0,
    sc: 0.5
  },
  Toolbelt: {}
};
(function() {
  for (var d = 0, c; c = ["ad", "bc", "p", "pa", "zd", "ac", "pc", "pah", "ph", "sa", "xx", "zc", "zz"][d++];)(function(a) {
    google.j[a] = function() {
      google.j.pl.push([a, arguments])
    }
  })(c)
})();
window.google.sn = "webhp";
window.google.timers = {
  load: {
    t: {
      start: (new Date).getTime()
    }
  }
};
try {
  window.google.pt = window.gtbExternal && window.gtbExternal.pageT();
} catch (u) {}
window.google.jsrt_kill = 1;
