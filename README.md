# 🥗 FIT BITE — Fresh, Healthy & Delicious

A modern, high-converting landing page for **FIT BITE** (Chennai) — serving freshly prepared overnight oats, macro-balanced salad bowls, and cold-pressed juices delivered chilled across Chennai.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## ✨ Features

- **Hero & Value Proposition**: Engaging typography, dynamic pre-order CTAs, and key metrics.
- **Menu & Product Showcase**: Interactive product cards with pricing, descriptions, and dietary tags for:
  - 🥣 Overnight Oats (Slow-soaked breakfast jars)
  - 🥗 Healthy Salad Bowls (Freshly tossed protein & veggie bowls)
  - 🧃 Cold-Pressed Juices (100% natural juices with zero added sugar)
- **Interactive Meal Plans**: Weekly, monthly, and trial subscription options.
- **Customer Reviews & Testimonials**: Real feedback with social proof and verified ratings.
- **Floating & Mobile Action Bar**: Back-to-top button and persistent WhatsApp pre-order buttons optimized for mobile and desktop.
- **WhatsApp Direct Order Integration**: One-click routing to pre-order fresh meals directly on WhatsApp.
- **Fast & Lightweight**: Single-file bundle support via `vite-plugin-singlefile` and optimized styling with Tailwind CSS v4.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Utilities**: `clsx`, `tailwind-merge`
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)

---

## 📁 Project Structure

```text
fit-bite-landing-page-design/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular UI components
│   │   ├── Benefits.tsx    # Why Choose Us & nutrition highlights
│   │   ├── CTA.tsx         # Bottom call-to-action banner
│   │   ├── FAQ.tsx         # Frequently asked questions accordion
│   │   ├── Features.tsx    # Core feature highlights
│   │   ├── Footer.tsx      # Footer with quick links and contact info
│   │   ├── Hero.tsx        # Hero section with headline and imagery
│   │   ├── Icons.tsx       # SVG icon components
│   │   ├── Navbar.tsx      # Responsive header navigation
│   │   ├── Pricing.tsx     # Meal plan pricing tiers
│   │   ├── Products.tsx    # Product catalog and details
│   │   ├── Reveal.tsx      # Scroll reveal / animation wrapper
│   │   ├── SectionHeading.tsx # Reusable section title component
│   │   ├── SocialProof.tsx # Social proof & statistics strip
│   │   └── Testimonials.tsx# Customer reviews & ratings
│   ├── utils/
│   │   └── cn.ts           # Classnames merging utility
│   ├── assets.ts           # Image assets and photography URLs
│   ├── data.ts             # Menu items, contact info, FAQs, and pricing data
│   ├── index.css           # Global Tailwind CSS and custom utilities
│   ├── App.tsx             # Main application layout
│   └── main.tsx            # React entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build and plugin setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the page.

### Production Build

To build the optimized static production bundle:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Customization

### Updating Menu, Pricing & Contact Details
All content is centralized in [`src/data.ts`](src/data.ts):
- **Contact details & WhatsApp link**: Update the `CONTACT` object.
- **Menu items & pricing**: Modify the `PRODUCTS` array.
- **Subscription plans**: Update the `PRICING_PLANS` array.
- **FAQs**: Edit questions and answers in `FAQS`.

---

## 📄 License

This project is private and proprietary.
