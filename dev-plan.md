# Portfolio Website Development Plan

## Goal
Create a premium, visually appealing portfolio website for a software engineer with 2+ years of experience.
**Inspiration**: [Brittany Chiang](https://brittanychiang.com/)
**Key Features**:
- 2-column layout (Fixed Left Sidebar, Scrollable Right Content)
- "Experience" and "Projects" sections
- Greenish theme + Dark Mode
- High-quality animations using Framer Motion
- Built with Next.js and shadcn/ui

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (or similar clean sans-serif)

## Design System

### Colors
- **Background**: Dark Navy/Slate (e.g., `#0f172a` or similar deep dark color)
- **Primary**: Greenish/Teal accent (e.g., `#64ffda` - Brittany's style, or a custom emerald variation)
- **Text**: Slate/Gray scale for hierarchy (White for headings, Slate-400 for body)
- **Theme**: Dark Mode default (or only Dark Mode as per "greenish theme and dark mode" request)

### Typography
- Clean sans-serif (Inter via `next/font/google`)
- Distinct hierarchy: Large name, subtitles for roles, readable body text.

### Layout
- **Desktop**: Two columns.
    - **Left (Sticky)**: Name, Job Title, Tagline, Navigation (anchors), Social Links.
    - **Right (Scrollable)**: About (brief), Experience (Timeline/List), Projects (Cards).
- **Mobile**: Single column, stacked.

## Components Breakdown

### 1. Setup & Config
- Tailwind config for custom colors.
- `globals.css` for base styles and scrollbar customization.

### 2. Layout Wrapper
- `AppLayout`: Handles the 2-column grid.
- `MouseSpotlight`: (Optional but nice) specific cursor tracking radial gradient effect often seen in these portfolios.

### 3. Left Column (Header)
- `Header`: Contains Name, Title, Bio.
- `Nav`: Inner page navigation (Experience, Projects) that highlights active section.
- `Socials`: GitHub, LinkedIn, etc. icons.

### 4. Right Column (Content)
- `Section`: Reusable wrapper with IDs for navigation.
- `ExperienceCard`: Job title, company, date, description, tags.
- `ProjectCard`: Title, screenshot/icon, description, tech stack tags, links.

### 5. UI/UX
- Smooth scrolling.
- Hover effects on cards (lift, glow, or text highlight).
- Reveal animations on scroll.

## Implementation Steps

### Phase 1: Foundation
1.  **Install Dependencies**: `shadcn-ui`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
2.  **Configure Theme**: Set up Tailwind colors in `tailwind.config.ts`.
3.  **Global Styles**: Reset and basic dark theme application.

### Phase 2: Core Structure
4.  **Layout**: Create the responsive grid layout.
5.  **Left Column**: Build the Header and Nav components.

### Phase 3: Content Sections
6.  **Experience**: Create data structure and `ExperienceCard`.
7.  **Projects**: Create data structure and `ProjectCard`.
8.  **Data**: Create `data/resume.ts` with sample data.

### Phase 4: Polish & Animations
9.  **Framer Motion**: Add entry animations and hover states.
10. **Refinement**: Adjust spacing, fonts, and responsive behavior.
