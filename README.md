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

The portfolio supports feature flags to toggle sections on/off using SvelteKit's `$env/static/public` for clean, build-time environment variable management.

### Environment Variables
Set these environment variables to control section visibility:

```env
PUBLIC_FEATURE_SKILLS_SECTION=true
PUBLIC_FEATURE_EXPERIENCE_SECTION=true
PUBLIC_FEATURE_EDUCATION_SECTION=true
PUBLIC_FEATURE_CONTACT_SECTION=true
```

- Set to `true` to show a section
- Any other value (or undefined) hides the section
- Variables are embedded at build time for optimal performance

### Local Development
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` to configure which sections to show:
   ```env
   PUBLIC_FEATURE_SKILLS_SECTION=true
   PUBLIC_FEATURE_EXPERIENCE_SECTION=false
   PUBLIC_FEATURE_EDUCATION_SECTION=true
   PUBLIC_FEATURE_CONTACT_SECTION=false
   ```
3. Restart the development server

### Production Deployment
Set environment variables in your hosting platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Other platforms**: Follow their environment variable documentation

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

2. **Configure Environment Variables**: 
   - Go to your project settings in Vercel dashboard
   - Navigate to "Environment Variables" section
   - Add the feature flag variables:
   ```
   PUBLIC_FEATURE_SKILLS_SECTION=true
   PUBLIC_FEATURE_EXPERIENCE_SECTION=true
   PUBLIC_FEATURE_EDUCATION_SECTION=true
   PUBLIC_FEATURE_CONTACT_SECTION=true
   ```
   - Set them for "Production", "Preview", and "Development" environments as needed

3. **Deploy**: Automatic deployment on every push

   **Important Notes:**
   - Only the exact value `true` shows sections
   - Any other value (including `false`, empty, or undefined) hides sections
   - Changes to environment variables require a new deployment

### Manual Deployment
```bash
npm run build
npm run preview
```

## � Troubleshooting Feature Flags

### Sections Not Showing/Hiding as Expected

1. **Check Environment Variable Values**:
   - Only the exact string `"true"` shows sections
   - Any other value (`"false"`, `""`, `undefined`) hides sections
   - Variable names must match exactly: `PUBLIC_FEATURE_SKILLS_SECTION`, etc.

2. **Verify Environment Variable Setup**:
   - **Vercel**: Check Project Settings → Environment Variables
   - **Local**: Check your `.env` file
   - Variables must be set for the correct environment (Production/Preview/Development)

3. **Redeploy After Changes**:
   ```bash
   # Trigger a new deployment
   git commit --allow-empty -m "Trigger deployment"
   git push
   ```

4. **Debug Issues**:
   - Check that your build completed successfully
   - Verify environment variables are set correctly
   - Ensure variable names match exactly (case-sensitive)

### Common Issues
- **Case Sensitivity**: Environment variable names are case-sensitive
- **Exact String Match**: Only `"true"` shows sections, not `"True"` or `"TRUE"`
- **Deployment Timing**: Environment variable changes require redeploy

## �📧 Contact

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
