# Banking Technology & Governance — Study hub

Static study site (HTML/CSS, no build step) published with GitHub Pages.

## Structure

```
.
├── index.html                       # hub: articles, tracker, glossary, about
├── assets/style.css
├── articles/
│   ├── 01-digital-identity-vneid-ekyc.html
│   ├── 02-technology-assessment-7-layer.html
│   ├── 03-vay-online-vs-mo-the-online.html
│   └── 04-ai-law-banking-2026.html
├── notes/
│   ├── vn-regulations-tracker.html
│   └── glossary.html
└── assets/
    ├── style.css
    ├── Article2_7Layer_Framework_Carousel.pdf   # LinkedIn carousel (10 pages, 1080x1350)
    └── AI_Banking_Law_2026_Carousel.pdf         # LinkedIn carousel (8 pages, 1080x1350)
```

## Publish with GitHub Pages

```bash
# from this folder
git init
git add .
git commit -m "Add banking technology study hub"
git branch -M main
git remote add origin https://github.com/dinhchung82/banking-tech-study.git
git push -u origin main
```

Then GitHub → repo → **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save**.
Site URL: `https://dinhchung82.github.io/banking-tech-study/`

To publish at `https://dinhchung82.github.io/` instead, name the repository `dinhchung82.github.io`.

## Adding content

1. Copy an article page in `articles/`, change the title/body, keep the header/footer.
2. Link it from `index.html` (section `#articles`).
3. Update the "Last updated" date in the footer.

## Editorial rules

- Only public information; cite the original source for numbers and legal documents.
- No employer-confidential data, internal figures, project names or vendor contracts.
- Each note carries an update date and the line "Views are my own."
- Regulations change: verify against the original legal text before relying on it.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
