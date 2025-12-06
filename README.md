# MEGA Enterprise Landing Page

A stunning Apple-inspired landing page with liquid glass UI effects, built with Next.js 14, Tailwind CSS, and GSAP animations.

## 🎨 Features

- **Apple-inspired Design**: Clean, minimalist design with premium aesthetics
- **Liquid Glass UI**: Beautiful glass morphism effects throughout
- **GSAP Animations**: Smooth scroll-triggered animations and pinned sections
- **Fully Responsive**: Works perfectly on all devices
- **Multiple Pages**: Home, Products, About, and Contact pages
- **SEO Optimized**: Built-in SEO best practices and meta tags
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Contact Form**: Functional form with validation using React Hook Form
- **GeM Compliance Section**: Highlighting government certifications

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP 3.12 + ScrollTrigger
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
mega-landing/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── products/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── BrandsShowcase.jsx
│   │   │   ├── ClientsShowcase.jsx
│   │   │   ├── GeMCompliance.jsx
│   │   │   └── CTASection.jsx
│   │   ├── ui/
│   │   │   ├── GlassSurface.jsx
│   │   │   └── GlassSurface.css
│   │   └── shared/
│   │       └── ContactForm.jsx
│   └── lib/
├── public/
│   └── images/
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
cd mega-landing
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### 1. GlassSurface Component
Located at `src/components/ui/GlassSurface.jsx`

A reusable glass morphism component with customizable properties:

```jsx
<GlassSurface 
  width={300} 
  height={200}
  borderRadius={24}
  brightness={98}
  opacity={0.6}
>
  <YourContent />
</GlassSurface>
```

### 2. Hero Section
Located at `src/components/home/Hero.jsx`

Features:
- Animated title with gradient text
- Trust badges
- Glass morphism stats cards
- Smooth GSAP animations

### 3. Featured Products with GSAP
Located at `src/components/home/FeaturedProducts.jsx`

Features:
- Pinned section with scroll-triggered cards
- 3D rotation effects
- Hover interactions

### 4. Contact Form
Located at `src/components/shared/ContactForm.jsx`

Features:
- React Hook Form validation
- Real-time error messages
- Success/error states
- Glass morphism container

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: {
    50: '#DFF2EB',   // Lightest green
    100: '#B9E5E8',  // Light blue-green
    500: '#7AB2D3',  // Medium blue
    600: '#6BA4C7',  // Slightly darker blue
    700: '#4A628A',  // Dark blue
    // ... more shades
  }
}
```

### Replace Placeholder Images

1. Navigate to `public/images/`
2. Replace dummy images with your actual assets:
   - Logo: `logo.png`
   - Brand logos: `brands/`
   - Client logos: `clients/`
   - Product images: `products/`

### Update Contact Information

Edit the following files:
- `src/components/layout/Footer.jsx`
- `src/app/contact/page.js`
- `src/app/layout.js` (WhatsApp button)

Update:
- Phone numbers
- Email addresses
- Physical address
- Social media links

### Google Maps Integration

In `src/app/contact/page.js`, replace the Google Maps iframe with your actual location coordinates.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Configure environment variables (if any)
4. Deploy!

### Environment Variables

If you integrate backend APIs, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-maps-key
```

## 📦 NPM Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 SEO

The site includes:
- Optimized meta tags
- OpenGraph tags for social sharing
- Structured data (JSON-LD)
- Sitemap support
- Robots.txt support

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🤝 Support

For issues or questions:
- Email: megaenterprise.info@gmail.com
- Phone: +91 750 6070 157
- WhatsApp: [Click to Chat](https://wa.me/917506070157)

## 📄 License

© 2025 MEGA Enterprise. All Rights Reserved.

---

Built with ❤️ using Next.js, Tailwind CSS, and GSAP
