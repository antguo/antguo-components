(window._iconfont_svg_string_4033181 =
  '<svg><symbol id="icon-dagou1" viewBox="0 0 1024 1024"><path d="M440.64 747.306667l-194.986667-215.466667a27.904 27.904 0 0 1 1.173334-38.698667 31.36 31.36 0 0 1 40.704-2.688l168.042666 125.610667 318.378667-285.44a25.6 25.6 0 0 1 35.285333 1.066667c9.642667 9.749333 10.090667 25.301333 1.024 35.584L475.477333 747.136c-8.533333 9.664-23.253333 10.602667-32.917333 2.090667l-0.042667-0.064-0.106666 0.128-1.706667-1.92-0.064-0.042667z"  ></path></symbol><symbol id="icon-dagou" viewBox="0 0 1024 1024"><path d="M0 1024L1024 0v1024H0z m942.08-522.24s-90.112 68.608-185.344 145.408c-101.376 81.92-159.744 167.936-159.744 167.936L458.752 676.864 389.12 747.52l210.944 204.8S706.56 783.36 807.936 680.96c94.208-94.208 133.12-122.88 133.12-122.88V501.76z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
    e = t.getAttribute('data-injectcss');
    t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        c,
        d,
        a,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      (o = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_4033181),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            // (e = e),
            (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (a = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), l())
            }))
    }
    function l() {
      a || ((a = !0), c())
    }
    function r() {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      l()
    }
  })(window)
