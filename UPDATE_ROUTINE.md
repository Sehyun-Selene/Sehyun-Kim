# Resume Update Quick Routine

Use this routine whenever you need to update your portfolio quickly.

## 1) Start

```bash
npm run dev
```

Open `http://localhost:5173/`.

## 2) Edit Content (main file)

Update this file first:

- `src/app/data/content.ts`

What to edit there:

- `academics`: school, major, period
- `interests`, `values`
- `languages`, `tools`
- `experiences`: period/title/category/description
- `projects`: title/type/description/imageUrl
- `contact`: instagram/email

## 3) Update Images

Put new images in:

- `public/images/`

Current file names used in UI:

- `profile.jpg`
- `abroad-1.jpg` ~ `abroad-4.jpg`
- `project-floor.jpg`
- `project-anxiety.jpg`

If you add new projects, either:

- reuse existing image names, or
- add a new image file and update `imageUrl` in `content.ts`.

## 4) Fast Visual Check (3 minutes)

- GNB click: `About`, `Skills`, `Experiences`, `Projects` lands with section title visible
- Profile image click opens modal and closes by background click / `X` / `Esc`
- Experiences > Abroad hover text and images look correct
- Projects section:
  - 3 cards per row on desktop
  - empty slots show `Coming Soon`

## 5) Pre-Deploy Check

```bash
npm run build
npm audit
```

Expected:

- build succeeds
- `found 0 vulnerabilities`

## 6) Publish

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Quick Troubleshooting

- If email click does not open a mail app: current behavior opens Gmail compose in new tab.
- If section title looks slightly cut after menu click: tune `visualGap` in `src/app/components/layout/GNB.tsx`.
- If text overflows in project titles: check `src/app/components/sections/ProjectsSection.tsx` title clamp styles.
