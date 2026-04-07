# Nidhi Mehta Interior Design

A blazing-fast, mobile-first portfolio website built with Astro and Tailwind CSS.

## Features

- **Lightning Fast**: Built with Astro for optimal performance (90+ Lighthouse score)
- **Mobile-First Design**: Responsive design that works perfectly on all devices
- **Exaggerated Minimalism**: Bold, oversized typography with elegant color palette
- **Portfolio Grid**: Filterable project showcase with smooth animations
- **Contact Form**: Easy inquiry submission for potential clients
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimization

## Tech Stack

- **Astro 4.0**: Static site generation
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Vercel**: Hosting and deployment

## Design System

### Typography
- **Headings**: Cinzel (elegant, sophisticated serif)
- **Body**: Josefin Sans (clean, luxury sans-serif)

### Colors
- Primary: `#2563EB` (Blue)
- Secondary: `#3B82F6` (Light Blue)
- CTA: `#F97316` (Orange)
- Accent: `#D4AF37` (Gold)
- Background: `#F8FAFC` (Light Gray)
- Text: `#1E293B` (Dark Slate)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:4321`

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/          # Routes
│       ├── index.astro       # Home page
│       ├── portfolio.astro   # Portfolio grid
│       ├── about.astro       # About page
│       └── contact.astro     # Contact form
├── tailwind.config.mjs # Tailwind configuration
└── astro.config.mjs    # Astro configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Astro and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

## Customization

### Adding Portfolio Projects

Edit `src/pages/portfolio.astro` and update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'residential', // or 'commercial', 'hospitality'
    image: '/images/project.jpg',
    description: 'Project description'
  },
  // ... more projects
];
```

### Updating Contact Information

Edit `src/components/Footer.astro` and `src/pages/contact.astro` to update:
- Email address
- Phone number
- Location
- Office hours

### Configuring Contact Form

The contact form is set up with a placeholder submission. To make it functional:

1. **Option 1: Formspree** (Recommended)
   - Sign up at https://formspree.io
   - Replace form action in `contact.astro`

2. **Option 2: Netlify Forms**
   - Add `netlify` attribute to form
   - Deploy to Netlify

3. **Option 3: Custom API**
   - Update the form submission in `contact.astro` script

### Adding Images

1. Place images in `public/images/`
2. Reference them as `/images/your-image.jpg`
3. Recommended: Use WebP format for best performance

## Performance Optimization

Built-in optimizations:
- Minimal JavaScript (only where needed)
- Font preloading
- Responsive images
- CSS purging via Tailwind
- Static HTML generation

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved - Nidhi Mehta Interior Design

## Support

For issues or questions, contact: hello@idnidhi.com
