/* Study hub analytics — GoatCounter (privacy-friendly, no cookies, no personal data).
 *
 * SETUP (one line): register a free code at https://www.goatcounter.com
 * (e.g. code "chungvu"), then set it below:
 *     window.STUDY_ANALYTICS = { goatcounter: "chungvu" };
 *
 * Views appear at https://<code>.goatcounter.com . Until a code is set this
 * script does nothing.
 */
window.STUDY_ANALYTICS = window.STUDY_ANALYTICS || { goatcounter: "" };
(function () {
  var cfg = window.STUDY_ANALYTICS;
  var code = (cfg.goatcounter || "").trim();
  if (!code) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(s);
})();
