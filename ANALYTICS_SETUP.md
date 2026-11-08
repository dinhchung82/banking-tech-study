# Analytics & lead capture — setup

The site is static on GitHub Pages, which provides **no visitor analytics**.
This repo uses two small, privacy-friendly switches you can turn on later.

## 1) GoatCounter — visitor analytics (no cookies, no personal data) ✅ ACTIVE

**Status: activated with code `dinhchung82` — dashboard: https://dinhchung82.goatcounter.com**

1. Register a free code at https://www.goatcounter.com (e.g. `chungvu`).
2. Edit `assets/analytics.js` and set one line:

```js
window.STUDY_ANALYTICS = window.STUDY_ANALYTICS || { goatcounter: "chungvu" };
```

3. Commit and push. Views then appear at `https://<code>.goatcounter.com`.
   GoatCounter records: page views, referrers, country, device — **not identities**.
   Until a code is set, the script does nothing.

**What it can and cannot tell you:** it shows *how many* and *where from*; it never
shows *who* someone is. To learn who is interested, use the CTA / form below.

## 2) Google Search Console — how people find the site on Google

1. Open https://search.google.com/search-console → add property →
   **URL prefix**: `https://dinhchung82.github.io/banking-tech-study/`
2. Choose verification:
   - **HTML file**: download `googleXXXXXXXX.html` and send it to me — I commit it
     at the repo root, so it is served at
     `https://dinhchung82.github.io/banking-tech-study/googleXXXXXXXX.html`; or
   - **HTML tag**: copy the `<meta name="google-site-verification" ...>` line and
     send it — I add it to every page.
3. After verification: **Performance** shows impressions, clicks and queries.
   This is the only free way to see the search terms that bring visitors.

## 3) Lead-capture form (optional, picks up interest) ✅ ACTIVE — Tally `https://tally.so/r/5X4Op6`

The CTA blocks already offer email + LinkedIn. To add a real form, set one URL in
`assets/cta.js`:

```js
window.STUDY_CTA = window.STUDY_CTA || { formUrl: "https://tally.so/r/XXXXXX" };
```

Every `[data-study-form]` slot then shows "Điền form nhận bản đầy đủ".

Options (all free to start):
- **Tally** — https://tally.so (fast, clean, account required)
- **Google Forms** — account required
- **FormSubmit** — no account; post a form to `https://formsubmit.co/<email>` and
  confirm the first submission by email. Example:

```html
<form action="https://formsubmit.co/dinhchung82@gmail.com" method="POST">
  <input type="email" name="email" required placeholder="Email của bạn">
  <input type="hidden" name="_subject" value="Study hub — yêu cầu bảng chấm điểm">
  <button type="submit">Nhận bảng chấm điểm</button>
</form>
```

## 4) UTM links — know which channel works

Share links with UTM parameters, e.g.:

```
https://dinhchung82.github.io/banking-tech-study/articles/04-ai-law-banking-2026.html
  ?utm_source=linkedin&utm_medium=post&utm_campaign=ai-law-2026
```

GoatCounter and Search Console both separate these sources, so you can compare
LinkedIn posts, comments, and referral shares.

## 5) Privacy note

- No cookies, no personal data collected by default.
- GoatCounter is cookieless and GDPR-friendly.
- The form (if enabled) collects only what the visitor chooses to submit; add a
  one-line notice near it if you keep it.
