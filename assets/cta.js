/* Study hub CTA — one place to set the lead-capture form URL.
 * Set window.STUDY_CTA.formUrl to a Tally / Google Form / FormSubmit URL.
 * Pages containing <li data-study-form> will show it only when configured.
 */
window.STUDY_CTA = window.STUDY_CTA || { formUrl: "" };
(function () {
  var cfg = window.STUDY_CTA;
  var url = (cfg.formUrl || "").trim();
  var els = document.querySelectorAll("[data-study-form]");
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (!url) { el.style.display = "none"; continue; }
    var a = document.createElement("a");
    a.href = url;
    a.textContent = "Điền form nhận bản đầy đủ";
    el.textContent = "";
    el.appendChild(a);
    el.style.display = "";
  }
})();
