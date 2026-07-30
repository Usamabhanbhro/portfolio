# Muhammad Usama Bhanbhro - Portfolio

A modern, interactive portfolio website showcasing full-stack development and DevOps engineering expertise. Built with React, TypeScript, and advanced animated visual components.

**Live Demo:** [usamafolio-8pfrkt5y.manus.space](https://usamafolio-8pfrkt5y.manus.space)

## 🌟 Features

### Design & Aesthetics
- **Golden Hour Dark Theme** - Warm amber and tan color palette creating an elegant, professional appearance
- **Animated Hero Section** - Interactive LineWaves background with mouse-reactive effects
- **Proximity-Based Navigation** - Smooth LineSidebar with cursor-aware animations
- **Accent Animations** - Strands component for dynamic visual transitions
- **Fully Responsive** - Mobile-first design with dedicated mobile navigation

### Sections
- **Hero** - Eye-catching introduction with animated background and call-to-action buttons
- **About** - Professional background, education (SZABIST University), and expertise overview
- **Skills** - Comprehensive skill categories: Frontend, Backend, DevOps & Infrastructure, Databases
- **Projects** - Showcase of 6 featured projects with technologies and descriptions
- **Contact** - Direct links to email, Instagram, and GitHub profiles

### Technical Highlights
- Built with **React 19** and **TypeScript** for type safety
- **Tailwind CSS 4** for responsive styling
- **shadcn/ui** components for consistent UI
- **Three custom React Bits components** integrated:
  - LineWaves (WebGL-based animated waves)
  - LineSidebar (Interactive proximity-aware navigation)
  - Strands (Flowing animated strands)
- **Smooth animations and transitions** throughout
- **Accessibility-first** approach with semantic HTML

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Vite (build tool)
- Wouter (client-side routing)
- Lucide React (icons)

### Animated Components
- **ogl** - WebGL library for LineWaves and Strands components
- Custom shader-based animations

### Development
- Node.js 22.13.0
- pnpm (package manager)
- ESLint & Prettier (code quality)

## 📦 Installation & Setup

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/usamabhanbhro/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── components/
│   │   │   ├── LineWaves.tsx       # Animated wave background component
│   │   │   ├── LineSidebar.tsx     # Interactive navigation sidebar
│   │   │   ├── Strands.tsx         # Flowing strands animation
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main portfolio page
│   │   │   └── NotFound.tsx
│   │   ├── contexts/               # React contexts
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utility functions
│   │   ├── App.tsx                 # Main app component with routing
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles & theme colors
│   └── index.html
├── server/                 # Backend server (Express)
├── shared/                 # Shared types and constants
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design Philosophy

The portfolio follows a **Modern Technical Elegance** design approach:

- **Golden Hour Color Palette** - Warm ambers (#d4a574), bronze (#c9915f), and light tans (#e8b88a) create a sophisticated, professional aesthetic
- **Asymmetric Layouts** - Avoids generic centered grids for visual sophistication
- **Interactive Elements** - Proximity-based effects, smooth hover states, and scroll-triggered animations
- **Typography** - Geist font family for modern, clean readability
- **Accessibility** - High contrast ratios, semantic HTML, keyboard navigation support

## 🚀 Key Components

### LineWaves Component
Animated WebGL-based wave background with mouse interactivity. Used in the hero section to create a dynamic, engaging first impression.

**Props:**
- `speed` - Animation speed multiplier
- `color1`, `color2`, `color3` - RGB colors for wave channels
- `enableMouseInteraction` - Enable cursor-reactive effects
- `brightness` - Overall brightness control

### LineSidebar Component
Interactive navigation sidebar with proximity-based hover effects. Items shift and change color as the cursor approaches.

**Props:**
- `items` - Navigation labels
- `accentColor` - Hover state color
- `proximityRadius` - Distance for proximity detection
- `maxShift` - Maximum horizontal shift on hover

### Strands Component
Flowing animated strands with customizable colors and wave patterns. Used for accent sections.

**Props:**
- `colors` - Array of hex colors
- `count` - Number of strands
- `speed` - Animation speed
- `amplitude` - Wave height
- `glow` - Glow intensity

## 📝 Contact & Social

- **Email:** mubhanbhro@gmail.com
- **GitHub:** [@usamabhanbhro](https://github.com/usamabhanbhro)
- **Instagram:** [@bhanbhrosia](https://instagram.com/bhanbhrosia)

## 📚 Skills & Expertise

### Frontend Development
React, TypeScript, Tailwind CSS, Next.js, Vue.js, HTML/CSS

### Backend Development
Node.js, Express, Python, Django, RESTful APIs, GraphQL

### DevOps & Infrastructure
Docker, Kubernetes, CI/CD Pipelines, AWS, Linux, Nginx

### Databases
PostgreSQL, MongoDB, Redis, MySQL, Firebase, Elasticsearch

## 🎓 Education

**SZABIST University** - Computer Science Graduate

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

While this is a personal portfolio, feel free to fork it and use it as inspiration for your own portfolio website!

## 📧 Feedback

Have suggestions or found a bug? Feel free to reach out:
- Email: mubhanbhro@gmail.com
- GitHub Issues: [Create an issue](https://github.com/usamabhanbhro/portfolio/issues)

---

**Built with ❤️ by Muhammad Usama Bhanbhro**
