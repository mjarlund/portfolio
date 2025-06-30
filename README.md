# Mikkel Jarlund - Portfolio

A modern, responsive portfolio website built with SvelteKit, TailwindCSS, and TypeScript. This project showcases my work as a software engineer with a clean, professional design and smooth user experience.

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

To deploy:

1. Push to your repository
2. Connect to Vercel
3. Deploy automatically on every push

## 📧 Contact

The portfolio includes a contact form that opens the user's default email client with pre-filled subject and body text.

## 🔧 Customization

### Colors
The project uses a custom Tailwind color scheme with amber accents. Modify the colors in `src/app.css` and component files.

### Fonts
Custom fonts are defined in `src/app.css`:
- Display font: Pacifico
- Body font: Fira Sans

### Content
Update personal information, projects, and contact details in `src/routes/+page.svelte`.

## 📄 License

This project is personal portfolio code. Feel free to use it as inspiration for your own portfolio!

---

Built with ❤️ by [Mikkel Jarlund](https://github.com/mjarlund)
