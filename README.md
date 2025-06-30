# Mikkel Jarlund - Portfolio

A modern, responsive portfolio website built with SvelteKit, TailwindCSS, and TypeScript. This project showcases my work as a software engineer with a clean, professional design and smooth user experience.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Modular Architecture**: Clean component-based structure
- **Feature Flags**: Toggle sections on/off using environment variables or URL parameters
- **Skills Showcase**: Interactive skill bars with proficiency levels
- **Professional Timeline**: Career experience with technology highlights
- **Contact Integration**: Email form with pre-filled templates
- **Modern UI**: Clean design with smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Pre-rendered for optimal loading speeds

## 🎛️ Feature Flags

The portfolio supports feature flags to toggle sections on and off:

### Environment Variables (Production)
Set these in your Vercel dashboard or deployment environment:
```env
PUBLIC_ENABLE_SKILLS_SECTION=true
PUBLIC_ENABLE_EXPERIENCE_SECTION=true
PUBLIC_ENABLE_EDUCATION_SECTION=true
PUBLIC_ENABLE_CONTACT_SECTION=true
```

### URL Parameters (Development/Testing)
Test different configurations using URL parameters:
```
https://yoursite.com?skills=false&experience=false
https://yoursite.com?education=false
https://yoursite.com?contact=false
```

### Development Panel
In development mode, a feature flag panel appears in the bottom-right corner for easy testing.

**Note**: Hero and About sections are always visible and cannot be toggled.

## 🏗️ Architecture

### Component Structure
```
src/lib/
├── HeroSection.svelte      # Landing/intro section
├── AboutSection.svelte     # Personal introduction
├── SkillsSection.svelte    # Technical skills with progress bars
├── ExperienceSection.svelte # Professional timeline
├── EducationSection.svelte # Academic background
├── ContactSection.svelte   # Contact form and links
├── HoverIcon.svelte       # Reusable animated icons
├── ContactForm.svelte     # Email contact form
└── index.ts              # Component exports
```

### Sections Overview
- **Hero**: Name, title, and social links with animated hover effects
- **About**: Personal background and interests
- **Skills**: Technical expertise organized by category (Frontend, Backend, Cloud & DevOps, Tools)
- **Experience**: Professional timeline with role descriptions and tech stacks
- **Education**: Academic credentials and continuous learning
- **Contact**: Direct communication via email form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The site will be available at `http://localhost:5173`

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint and Prettier

## 🚀 Deployment

This project is configured for deployment on Vercel using the `@sveltejs/adapter-vercel` adapter. The site is pre-rendered for optimal performance.

### Vercel Setup

1. **Connect Repository**: Push to your repository and connect to Vercel
2. **Configure Environment Variables**: Set feature flags in Vercel dashboard:
   ```
   PUBLIC_ENABLE_SKILLS_SECTION=true
   PUBLIC_ENABLE_EXPERIENCE_SECTION=true
   PUBLIC_ENABLE_EDUCATION_SECTION=true
   PUBLIC_ENABLE_CONTACT_SECTION=true
   ```
3. **Deploy**: Automatic deployment on every push

### Feature Flag Testing on Vercel
- **Preview Deployments**: Use URL parameters to test different configurations
- **Environment Variables**: Toggle sections globally across all deployments
- **Branch Deployments**: Different configurations for different branches

### Manual Deployment
```bash
npm run build
npm run preview
```

## 📧 Contact

The portfolio includes a contact form that opens the user's default email client with pre-filled subject and body text.

## 🔧 Customization

### Adding New Sections
To add new sections to the portfolio:
1. Create a new component in `src/lib/YourSection.svelte`
2. Export it in `src/lib/index.ts`
3. Import and use it in `src/routes/+page.svelte`

### Modifying Skills
Update the skills data in `src/lib/SkillsSection.svelte`:
- Add/remove skill categories
- Adjust proficiency levels
- Change icons and colors

### Updating Experience
Modify the experience timeline in `src/lib/ExperienceSection.svelte`:
- Add new positions
- Update company names and descriptions
- Adjust technologies used

### Colors
The project uses a custom Tailwind color scheme with amber accents. Modify the colors in `src/app.css` and component files.

### Fonts
Custom fonts are defined in `src/app.css`:
- Display font: Pacifico
- Body font: Fira Sans

### Content
Update personal information in the respective component files in `src/lib/`.

## 📄 License

This project is personal portfolio code. Feel free to use it as inspiration for your own portfolio!

---

Built with ❤️ by [Mikkel Jarlund](https://github.com/mjarlund)
