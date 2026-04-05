/**
 * Formspree: create one or two forms at https://formspree.io and paste the
 * form URLs below (or set window.EIPI_FORMSPREE before this script loads).
 */
(function () {
  'use strict';

  var defaults = {
    quote: 'https://formspree.io/f/xlgoarbr',
    contact: 'https://formspree.io/f/xlgoarbr'
  };

  function mergeConfig() {
    var o = window.EIPI_FORMSPREE;
    if (!o || typeof o !== 'object') return defaults;
    return {
      quote: o.quote || o.default || defaults.quote,
      contact: o.contact || o.default || defaults.contact
    };
  }

  function wireForms() {
    var cfg = mergeConfig();
    document.querySelectorAll('form[data-eipi-formspree]').forEach(function (form) {
      var key = form.getAttribute('data-eipi-formspree');
      if (key && cfg[key]) form.setAttribute('action', cfg[key]);
    });
  }

  function showReturnBanner() {
    var params = new URLSearchParams(window.location.search);
    var flag = params.get('eipi');
    if (flag === 'quote-ok') {
      var q = document.getElementById('eipi-quote-form-success');
      if (q) {
        q.removeAttribute('hidden');
        q.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else if (flag === 'contact-ok') {
      var c = document.getElementById('eipi-contact-form-success');
      if (c) {
        c.removeAttribute('hidden');
        c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
    if (flag === 'quote-ok' || flag === 'contact-ok') {
      var url = new URL(window.location.href);
      url.searchParams.delete('eipi');
      var next = url.pathname + url.search + url.hash;
      window.history.replaceState({}, '', next || url.pathname);
    }
  }

  function init() {
    wireForms();
    showReturnBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
