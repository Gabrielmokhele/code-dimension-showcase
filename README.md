# CodeDimension

A modern, responsive website showcasing software development, IT consulting, and VR solutions.

## Technologies

- **Vite** - Lightning-fast build tool
- **React** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

Install Node.js using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended)

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd code-dimension-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
code-dimension-showcase/
├── public/              # Static assets
│   ├── logo.png        # Company logo
│   └── favicon.ico     # Site favicon
├── src/
│   ├── components/     # Reusable components
│   │   ├── ui/        # UI component library
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Page components
│   │   ├── Index.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

- **Multi-page Navigation** - Separate pages for Services, Products, About, and Contact
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Performance** - Optimized with Vite for lightning-fast load times
- **SEO Ready** - Proper meta tags and semantic HTML

## Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Various Platforms

**Vercel:**

```bash
npm install -g vercel
vercel
```

**Netlify:**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages:**

```bash
npm run build
# Push dist/ directory to gh-pages branch
```

##Configuration

### Custom Domain

Update the base URL in `vite.config.js` if deploying to a subdirectory:

```javascript
export default defineConfig({
  base: "/your-subdirectory/",
  // ... other config
});
```

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=hello@codedimension.site

```

## License

Copyright © 2026 CodeDimension. All rights reserved.
