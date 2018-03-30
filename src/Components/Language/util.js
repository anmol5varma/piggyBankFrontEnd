const gtranslate = function () {
  function d(b) {
    let a = document.getElementsByTagName('head')[0];
    a || (a = document.body.parentNode.appendChild(document.createElement('head')));
    a.appendChild(b);
  }

  function _loadJs(b) {
    const a = document.createElement('script');
    a.type = 'text/javascript';
    a.charset = 'UTF-8';
    a.src = b;
    d(a);
  }

  function _loadCss(b) {
    const a = document.createElement('link');
    a.type = 'text/css';
    a.rel = 'stylesheet';
    a.charset = 'UTF-8';
    a.href = b;
    d(a);
  }

  function _isNS(b) {
    b = b.split('.');
    for (let a = window, c = 0; c < b.length; ++c) { if (!(a = a[b[c]])) return !1; }
    return !0;
  }

  function _setupNS(b) {
    b = b.split('.');
    for (var a = window, c = 0; c < b.length; ++c) a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {} : a = a[b[c]] || (a[b[c]] = {});
    return a;
  }
  window.addEventListener && typeof document.readyState === 'undefined' && window.addEventListener('DOMContentLoaded', () => {
    document.readyState = 'complete';
  }, !1);
  if (_isNS('google.translate.Element')) {
    return;
  }(function () {
    const c = _setupNS('google.translate._const');
    c._cl = 'en';
    c._cuc = 'googleTranslateElementInit';
    c._cac = '';
    c._cam = '';
    c._ctkk = eval('((function(){var a\x3d3471194899;var b\x3d517755403;return 422862+\x27.\x27+(a+b)})())');
    const h = 'translate.googleapis.com';
    const s = `${true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http'}://`;
    const b = s + h;
    c._pah = h;
    c._pas = s;
    c._pbi = `${b}/translate_static/img/te_bk.gif`;
    c._pci = `${b}/translate_static/img/te_ctrl3.gif`;
    c._pli = `${b}/translate_static/img/loading.gif`;
    c._plla = `${h}/translate_a/l`;
    c._pmi = `${b}/translate_static/img/mini_google.png`;
    c._ps = `${b}/translate_static/css/translateelement.css`;
    c._puh = 'translate.google.com';
    _loadCss(c._ps);
    _loadJs(`${b}/translate_static/js/element/main.js`);
  }());
};

export default gtranslate;
