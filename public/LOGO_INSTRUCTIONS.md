# Logo Placement Instructions

## Where to place your logo

Place your logo image file in this `/public` folder.

Supported formats:
- PNG (recommended for transparency)
- SVG (recommended for crisp scaling)
- JPG/JPEG
- WebP

## Recommended logo specifications

- **Size**: 200x200px or larger (will be scaled down to 44x44px)
- **Format**: PNG with transparent background or SVG
- **File name**: `logo.png` or `logo.svg` (or any name you prefer)

## How to use your logo

After placing your logo file here, update the Navbar component at:
`src/components/layout/Navbar.jsx` (line 76-79)

Replace the current placeholder with:

```jsx
<div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-1.5">
  <Image
    src="/logo.png"
    alt="MEGA Enterprise Logo"
    width={44}
    height={44}
    className="object-contain w-full h-full"
  />
</div>
```

**Note**: If you remove the gradient background, use `p-0` instead of `p-1.5`:

```jsx
<div className="w-11 h-11 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
  <Image
    src="/logo.png"
    alt="MEGA Enterprise Logo"
    width={44}
    height={44}
    className="object-contain w-full h-full"
  />
</div>
```
