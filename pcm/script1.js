google.pml = function() {
  function d(a) {
    if (!google.pml_installed) {
      google.pml_installed = true;
      if (!a) {
        document.getElementById("logo").style.background = "black";

        window.setTimeout(function() {
          var b = document.getElementById("logo-l");

          if (b) b.style.display = "block"
        }, 400)
      }
      a = document.createElement("script");
      a.type = "text/javascript";


      a.src = "pcm/pacman10-hp.2.js";


      google.dom.append(a)
    }
  }

  function x(id) {

  }

  function e() {
    if (document.f && document.f.btnI) document.f.btnI.onclick = function() {
      typeof google.pacman != "undefined" ? google.pacman.insertCoin() : d(false);
      return false
    }
  }
  if (!google.pml_loaded) {
    google.pml_loaded = true;
    window.setTimeout(function() {
      document.f && document.f.q && document.f.q.value == "" && d(true)
    }, 1E4);
    e();
    google.rein && google.rein.push(e);
    google.dstr && google.dstr.push(function() {
      google.pacman && google.pacman.destroy();
      if (google.pml_installed) {
        for (var a = (document.getElementById("xjsc") || document.body).getElementsByTagName("script"), b = 0, c; c = a[b++];) c.src.indexOf("/logos/js") != -1 && google.dom.remove(c);
        google.pml_installed = false
      }
    });
    google.pacManQuery = function() {
      google.nav(document.getElementById("dlink").href)
    }
  }
};
