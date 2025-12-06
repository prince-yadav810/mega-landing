# MEGA Enterprise Landing Page - Setup Guide

## 🚀 Quick Start (5 Minutes)

Follow these steps to get your landing page running:

### Step 1: Prerequisites Check

Make sure you have installed:
- ✅ Node.js 18 or higher ([Download](https://nodejs.org/))
- ✅ npm (comes with Node.js)

Check versions:
```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 6.x or higher
```

### Step 2: Install Dependencies

```bash
cd mega-landing
npm install
```

This will install all required packages (~2-3 minutes).

### Step 3: Run Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your landing page! 🎉

## 📝 Customization Checklist

### Priority 1: Replace Dummy Content

#### 1. Logo & Branding
- [ ] Replace logo at `public/images/logo.png`
- [ ] Update company name in `src/components/layout/Navbar.jsx`
- [ ] Update company name in `src/components/layout/Footer.jsx`

#### 2. Contact Information
Update in these files:
- [ ] `src/components/layout/Footer.jsx` (lines 15-25)
- [ ] `src/app/contact/page.js` (lines 10-30)
- [ ] `src/app/layout.js` (line 59 - WhatsApp link)

Replace:
```
Phone: +91 750 6070 157
Email: megaenterprise.info@gmail.com
Address: Plot No. 57, TALOJA, Navi Mumbai
WhatsApp: wa.me/917506070157
```

#### 3. Brand & Client Logos
- [ ] Add brand logos to `public/images/brands/`
- [ ] Add client logos to `public/images/clients/`
- [ ] Update image paths in:
  - `src/components/home/BrandsShowcase.jsx`
  - `src/components/home/ClientsShowcase.jsx`

#### 4. Product Images
- [ ] Add product images to `public/images/products/`
- [ ] Update image URLs in `src/components/home/FeaturedProducts.jsx`

### Priority 2: Content Updates

#### 1. Homepage Content
File: `src/components/home/Hero.jsx`
- [ ] Update main headline
- [ ] Update subtitle
- [ ] Update statistics (20+ years, 50+ clients, etc.)

#### 2. About Page
File: `src/app/about/page.js`
- [ ] Update company story
- [ ] Update timeline/milestones
- [ ] Update values and mission

#### 3. Products Page
File: `src/app/products/page.js`
- [ ] Add your actual product categories
- [ ] Add real product names and descriptions
- [ ] Link to actual product pages (if needed)

### Priority 3: SEO & Meta Tags

File: `src/app/layout.js` (lines 8-30)

Update:
- [ ] Page title
- [ ] Meta description
- [ ] Keywords
- [ ] OpenGraph tags
- [ ] Twitter card info

### Priority 4: Functional Features

#### 1. Contact Form Integration
File: `src/components/shared/ContactForm.jsx`

Currently set to demo mode. To connect to your backend:

```javascript
// Line 20: Replace this
await new Promise((resolve) => setTimeout(resolve, 2000));

// With your API call:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

#### 2. Google Maps
File: `src/app/contact/page.js` (line 95)

Replace the iframe src with your actual Google Maps embed URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

#### 3. Analytics (Optional)
To add Google Analytics:

1. Create `.env.local` file
2. Add: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Uncomment analytics code in `src/app/layout.js`

## 🎨 Design Customization

### Change Color Scheme

File: `tailwind.config.js` (lines 6-45)

The current colors are:
- Primary: Blues (#7AB2D3, #4A628A)
- Accent: Greens (#DFF2EB)

To change:
1. Find your desired hex colors
2. Update the `primary` color values
3. Save and refresh browser

### Adjust Animations

File: `tailwind.config.js` (lines 58-95)

Adjust animation durations, delays, or create new animations.

## 🚀 Deployment

### Deploy to Vercel (Recommended - FREE)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"
- Done! Your site is live 🎉

3. **Custom Domain:**
- Go to Project Settings → Domains
- Add your domain (e.g., megaenterprise.com)
- Update DNS records as instructed

### Alternative: Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

## 🐛 Troubleshooting

### Issue: "Module not found" errors
**Solution:** Delete `node_modules` and reinstall
```bash
rm -rf node_modules
npm install
```

### Issue: Port 3000 already in use
**Solution:** Run on different port
```bash
npm run dev -- -p 3001
```

### Issue: Images not loading
**Solution:** 
1. Check image paths in `public/images/`
2. Make sure file names match exactly
3. Restart dev server

### Issue: GSAP animations not working
**Solution:**
1. Check browser console for errors
2. Make sure GSAP is imported correctly
3. Try disabling browser extensions

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [React Hook Form](https://react-hook-form.com/)

## 💡 Tips

1. **Test on mobile devices** - The design is responsive, but always test on real devices
2. **Optimize images** - Use WebP format and compress images before uploading
3. **Regular backups** - Commit changes to GitHub regularly
4. **Monitor performance** - Use Lighthouse in Chrome DevTools

## 🆘 Need Help?

If you encounter issues:
1. Check the README.md file
2. Search for error messages online
3. Contact: megaenterprise.info@gmail.com

---

**Next Steps After Setup:**
1. [ ] Replace all placeholder content
2. [ ] Add real images
3. [ ] Test contact form
4. [ ] Deploy to production
5. [ ] Set up custom domain
6. [ ] Submit to Google Search Console
7. [ ] Set up analytics

Good luck! 🚀
