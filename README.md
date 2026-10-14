# LixGlo Ventures — Frontend Website

Production-quality frontend prototype for **LixGlo Ventures Limited**, a Kenyan renewable solar energy company founded in 2017.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build (for Vercel or Netlify)
```bash
npm run build
```
The optimized production output will be generated in `dist/`.

---

## Asset & Configuration Handoff Guide

All business logic, company facts, and assets are separated from the UI components:

### 1. Logo Replacement
- The official logo file should be placed at:
  ```
  public/assets/LOGO_LINEDESIGN.png
  ```
- Handled automatically by `src/components/LixGloLogo.tsx` with high-resolution vector fallback.

### 2. Replacing Images & Videos
- All media placeholders are registered in:
  ```
  src/config/mediaAssets.ts
  ```
- To use your real photography or video, add files to `public/assets/` and update the paths in `mediaAssets.ts`:
  - `hero.imageUrl` or `hero.videoUrl`
  - `residential.imageUrl`
  - `commercial.imageUrl`
  - `installation.imageUrl`

### 3. Calculator Assumptions & Pricing Model
- Sizing equations, average Kenya Power tariff benchmarks (KES/kWh), sunlight hours, and payback multipliers are located in:
  ```
  src/config/solarAssumptions.ts
  ```
- Update `CALCULATOR_CONFIG` to modify any sizing or financial values.

### 4. Company Contacts & Phone Numbers
- Official contact details, WhatsApp numbers, email, and service areas are in:
  ```
  src/config/company.ts
  ```

### 5. Social Media Links
- Social media platform links (LinkedIn, Instagram, Facebook, YouTube, TikTok) are defined in:
  ```
  src/components/Footer.tsx
  ```
- Simply paste real URLs into the `SOCIAL_LINKS` array; they will automatically activate and switch from the "(Coming soon)" state.

---

## Project Structure

```text
├── index.html                 # HTML shell with Google Fonts & SEO meta tags
├── public/
│   └── assets/                # Real logo and photo/video assets
├── src/
│   ├── components/            # Clean, reusable UI components
│   │   ├── AssessmentModal.tsx# Solar assessment lead booking dialog
│   │   ├── CustomerTypes.tsx  # Residential vs Commercial solutions
│   │   ├── FinalCTA.tsx       # Minimal conclusion section
│   │   ├── Footer.tsx         # Dark contrast footer with contacts & social
│   │   ├── Header.tsx         # Sticky light navigation bar with mobile drawer
│   │   ├── Hero.tsx           # Daylight hero with direct CTA
│   │   ├── HowItWorks.tsx     # 3-step solar process
│   │   ├── LixGloLogo.tsx     # Official logo component with vector fallback
│   │   ├── MediaPlaceholder.tsx# Bright architectural media slot
│   │   ├── ServicesJourney.tsx# 4-stage lifecycle (Consult, Design, Install, Maintain)
│   │   └── SolarCalculator.tsx# Simplified 3-step consumer estimator
│   ├── config/
│   │   ├── company.ts         # Company contact & record details
│   │   ├── mediaAssets.ts     # Media asset paths and slots
│   │   └── solarAssumptions.ts# Configurable sizing & tariff model
│   ├── App.tsx                # Main application page
│   ├── index.css              # Tailwind CSS imports & theme colors
│   └── main.tsx               # React DOM entry
├── package.json               # Standard npm scripts & dependencies
└── tsconfig.json              # TypeScript configuration
```

---

## Official Brand Colors

- **Energy Green:** `#1FD079`
- **Solar Orange:** `#F37327`
- **Energy Blue:** `#0B9DD6`
- **Near Black:** `#020304`
- **Neutral White:** `#FFFFFF`
