if (google.y) google.y.first = [];
if (google.y) google.y.first = [];
if (!google.xjs) {
  google.dstr = [];
  google.rein = [];
  window.setTimeout(function() {
    var a = document.createElement("script");
    a.src = "pcm/jscript.js";


    (document.getElementById("xjsd") || document.body).appendChild(a);
    if (google.timers && google.timers.load.t) google.timers.load.t.xjsls = (new Date).getTime();
  }, 0);
  google.xjs = 1
};
google.neegg = 1;
google.y.first.push(function() {
  google.ac.i(document.f, document.f.q, '', '', 'ZAO1UHON4Cy3HD_vAXF7cQ', {
    o: 1,
    sw: 1
  });
  (function() {
    var h, i, j = 1,
      k = google.time(),
      l = [];
    google.rein.push(function() {
      j = 1;
      k = google.time()
    });
    google.dstr.push(function() {
      google.fade = null
    });

    function m(a, f) {
      var b = [];
      for (var c = 0, e; e = a[c++];) {
        var d = document.getElementById(e);
        d && b.push(d)
      }
      for (var c = 0, g; g = f[c++];) b = b.concat(n(g[0], g[1]));
      for (var c = 0; b[c]; c++) b[c] = [b[c], "opacity", 0, 1, 0, ""];
      return b
    }

    function n(a, f) {
      var b = [],
        c = new RegExp("(^|\\s)" + f + "($|\\s)");
      for (var e = 0, d, g = document.getElementsByTagName(a); d =
        g[e++];) c.test(d.className) && b.push(d);
      return b
    }
    google.fade = function(a) {
      if (google.fx && j) {
        a = a || window.event;
        var f = 1,
          b = google.time() - k;
        if (a && a.type == "mousemove") {
          var c = a.clientX,
            e = a.clientY;
          f = (h || i) && (h != c || i != e) && b > 600;
          h = c;
          i = e
        }
        if (f) {
          j = 0;
          google.fx.animate(600, m(["fctr", "ghead", "pmocntr", "sbl", "tba", "tbe"], [
            ["span", "fade"],
            ["div", "fade"],
            ["div", "gbh"]
          ]));
          for (var d = 0; d <
            l.length; ++d)
            if (typeof l[d] == "function") l[d]()
        }
      }
    };
    google.addFadeNotifier = function(a) {
      l.push(a);
      if (!j) a()
    };
  })();;
  google.History && google.History.initialize('/')
});
if (google.j && google.j.en && google.j.xi) {
  window.setTimeout(google.j.xi, 0);
  google.fade = null;
}
google.pml && google.pml();
