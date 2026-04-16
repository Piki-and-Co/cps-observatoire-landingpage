/**
 * tarteaucitron.js — Configuration centralisée
 *
 * Ce fichier est importé par toutes les pages du site.
 * Il initialise tarteaucitron et déclare les services (Matomo, futurs Google/Meta).
 *
 * Pré-requis : charger tarteaucitron.js AVANT ce fichier.
 * <script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@latest/tarteaucitron.js"></script>
 * <script src="js/tarteaucitron-init.js"></script>
 */

tarteaucitron.init({
  "privacyUrl":        "/legal/cookies.html",
  "bodyPosition":      "bottom",
  "hashtag":           "#cookies",
  "cookieName":        "tarteaucitron",
  "orientation":       "bottom",
  "groupServices":     false,
  "obligatoryTimer":   0,

  "showAlertSmall":    false,
  "cookieslist":       false,
  "showIcon":          false,

  "adblocker":         false,
  "DenyAllCta":        true,
  "AcceptAllCta":      true,
  "highPrivacy":       true,

  "removeCredit":      false,
  "moreInfoLink":      true,
  "handleBrowserDNTRequest": false,
  "useExternalCss":    false,
  "useExternalJs":     false,

  "readmoreLink":      "/legal/cookies.html",

  "mandatory":         true,
  "mandatoryCta":      true,

  "cookieExpire":      182
});


// Service de mesure d'audience
tarteaucitron.services.matomoCustom = {
  "key":         "matomoCustom",
  "type":        "analytic",
  "name":        "Matomo (mesure d'audience)",
  "uri":         "/legal/cookies.html",
  "needConsent": true,
  "cookies":     ["_pk_id", "_pk_ses", "_pk_ref", "mtm_consent", "mtm_cookie_consent", "SRVGROUP"],

  "js": function () {
    "use strict";
    if (tarteaucitron.services.matomoCustom.added) return;
    tarteaucitron.services.matomoCustom.added = true;

    var _paq = window._paq = window._paq || [];
    _paq.push(["setCookieDomain", "*.piki-and-co.com"]);
    _paq.push(["setDomains", ["*.piki-and-co.com"]]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);

    var u = "https://an.kjbconseil.com/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "6"]);

    tarteaucitron.addScript(u + "matomo.js");
  },

  "fallback": function () {
    "use strict";
  }
};
(tarteaucitron.job = tarteaucitron.job || []).push("matomoCustom");
