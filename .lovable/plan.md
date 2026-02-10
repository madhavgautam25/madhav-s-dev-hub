

# Madhav Gautam — Personal Portfolio Website

## Overview
A modern, dark/light mode personal portfolio website for a B.Tech CSE student, featuring glassmorphism design, smooth animations, and a **black-to-orange gradient accent** color palette.

---

## Design System
- **Color palette**: Black-to-orange gradient accents (deep black → burnt orange → vibrant orange), clean dark/light backgrounds
- **Accent color**: Orange (`hsl(25, 95%, 53%)`) as the primary interactive color
- **Gradients**: Black-to-orange gradients on hero elements, buttons, and decorative accents
- **Typography**: Inter font family, bold headlines, clean body text
- **Style**: Glassmorphism cards with backdrop blur, soft shadows with orange tint, subtle hover animations
- **Theme**: Dark + Light mode toggle in the navbar

---

## Sections (Single-Page Layout)

### 1. Floating Navbar
- Sticky, blurred glass-style navigation bar
- Section links: About, Skills, Projects, Experience, Education, Contact
- Dark/Light mode toggle button
- Active section highlighting on scroll
- Orange accent on active/hover states

### 2. Hero Section
- Bold headline: "Hi, I'm Madhav — Full Stack Developer & AI Enthusiast"
- Animated tagline about building products and exploring AI
- Two CTA buttons with black-to-orange gradient: **View Projects** (scrolls down) and **Download Resume** (downloads a placeholder PDF)
- Profile image placeholder with an orange gradient ring
- Subtle floating/fade-in animations

### 3. About Me
- Friendly, student-focused introduction
- Emphasis on learning, experimenting, and building
- Mentions passion for MERN stack, AI integration, and problem solving
- Clean two-column layout (text + decorative element with orange accents)

### 4. Skills
- Categorized in glassmorphism cards with orange-tinted borders:
  - **Frontend**: React, Tailwind CSS, HTML, CSS, JavaScript
  - **Backend**: Node.js, Express
  - **Database**: MongoDB
  - **Tools**: Git, GitHub, REST APIs, VS Code
  - **AI Basics**: ML APIs, AI integration
- Each skill shown as a badge/chip with orange hover effects

### 5. Projects (Card Grid)
- Glassmorphism project cards with hover lift animation and orange glow
- Each card includes: title, description, tech stack badges, GitHub link button, Live Demo link button
- Four placeholder projects:
  - **SAARTHI Platform** — Student productivity + placement + AI platform
  - **Smart Soil Health Monitor** — IoT + ESP32 + solar-powered soil monitoring
  - **AI Career Advisor** — AI-powered career guidance tool
  - **D2C Ecommerce Website** — Full-stack online store

### 6. Experience
- Timeline-style layout with orange accent line and dots
- Student-focused entries:
  - Hackathon participation
  - Academic/capstone projects
  - Digital Content Incharge (school leadership role)

### 7. Education
- Simple card showing B.Tech CSE at Chitkara University (2023–2027)

### 8. Contact Section
- Contact form with Name, Email, and Message fields (client-side with toast confirmation)
- Orange gradient submit button
- Direct links to Email, LinkedIn, and GitHub
- Clean layout with glassmorphism styling

### 9. Footer
- Simple copyright: "© 2026 Madhav Gautam. All rights reserved."
- Social icon links with orange hover accents

---

## Functional Details
- **Dark/Light mode** via theme toggle (persisted)
- **Smooth scroll** to sections from navbar links
- **Scroll-triggered animations** on all sections (fade-in, slide-up)
- **Hover effects** on cards, buttons, and skill badges (orange glow/highlights)
- **Contact form** with client-side validation and toast notifications
- **Resume download** button (links to a placeholder file)
- **SEO meta tags** in index.html
- **All content stored in a single data file** for easy editing
- **Responsive design** — mobile-first, looks great on all screen sizes

