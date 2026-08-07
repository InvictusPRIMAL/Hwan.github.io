# Danisy Hazwan - Next.js & GSAP Radial Portfolio

A modern, interactive developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn UI components**, and **GSAP ScrollTrigger RadialScrollGallery**.

## 📁 File Structure

```
danisy-portfolio-react/
├── app/
│   ├── layout.tsx                              # Root layout with fonts & metadata
│   ├── page.tsx                                # Main page bringing hero, skills & gallery together
│   └── globals.css                             # Tailwind directives & CSS variables
├── components/
│   ├── ui/
│   │   ├── portfolio-and-image-gallery.tsx     # RadialScrollGallery component (GSAP)
│   │   └── badge.tsx                           # shadcn Badge component (cva)
│   └── demo.tsx                                # DemoRadialScrollGalleryBento component
├── lib/
│   └── utils.ts                                # cn helper function (clsx + tailwind-merge)
├── components.json                             # shadcn CLI configuration
├── tailwind.config.ts                          # Tailwind CSS config
├── tsconfig.json                               # TypeScript path aliases (@/*)
└── package.json                                # Project dependencies
```

---

## 💻 Setup Instructions

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

---

## 🚀 Pushing to GitHub

To push this repository to your GitHub account (`InvictusPRIMAL/InvictusPRIMAL.github.io` or a new repository):

```bash
git init
git add .
git commit -m "Initial commit: Next.js GSAP Radial Portfolio"
git branch -M main
git remote add origin https://github.com/InvictusPRIMAL/danisy-portfolio-react.git
git push -u origin main
```
