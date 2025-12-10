# Supratik Chakraborty - Portfolio

A minimal, accessible, and responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Inspired by [Brittany Chiang's v4 design](https://brittanychiang.com/).

## Features

- **2-Column Layout**: Sticky sidebar with navigation and scrollable content area.
- **Dark Mode**: Deep navy background with teal accents.
- **Responsive**: Adapts gracefully from mobile to desktop.
- **Interactive**:
    - "Mouse Spotlight" effect revealing background texture.
    - Smooth scrolling with active section highlighting.
    - Hover effects on project/experience cards.
- **Accessibility**: Semantic HTML and focus management.
- **Performance**: Optimized with Next.js App Router and static generation.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Deployment**: Vercel (recommended)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/deagleSC/portfolio-v2.git
    cd portfolio-v2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Data**: Update `src/data/resume.ts` to modify experience and projects.
- **Theme**: Adjust colors in `src/app/globals.css`.
- **Bio/Header**: Edit `src/components/header.tsx`.

## License

[MIT](LICENSE)
