import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Safety Goggles', description: 'Splash-proof and chemical-resistant safety goggles for laboratory and industrial environments.', image: '/images/products/safety/eye-protection/safety-goggles-chemical-splash.jpg', specs: ['Lens: Polycarbonate', 'Ventilation: Indirect', 'Standard: EN 166'] },
    { name: 'Safety Glasses', description: 'Lightweight safety spectacles with UV protection for general workshop and outdoor use.', image: '/images/products/safety/eye-protection/safety-goggles-chemical-splash.jpg', specs: ['Lens: Clear/Tinted', 'UV Protection: 99.9%', 'Anti-Scratch: Yes'] },
    { name: 'Face Shield', description: 'Full-face protective shields for grinding, cutting, and chemical splash protection.', image: '/images/products/safety/eye-protection/face-shield-full-protection.jpg', specs: ['Visor: Polycarbonate', 'Coverage: Full Face', 'Adjustable: Yes'] },
    { name: 'Welding Helmet', description: 'Auto-darkening welding helmets for arc welding with adjustable shade and sensitivity.', image: '/images/products/safety/eye-protection/welding-goggles-dark-lens.jpg', specs: ['Shade: DIN 9–13', 'Switching: 1/25000s', 'View Area: 98x55mm'] },
    { name: 'Anti-Fog Goggles', description: 'Anti-fog coated safety goggles for humid environments and temperature-changing conditions.', image: '/images/products/safety/eye-protection/anti-fog-safety-goggles.jpg', specs: ['Coating: Anti-Fog', 'Lens: Polycarbonate', 'Seal: Foam Padded'] },
    { name: 'UV Protection Glasses', description: 'UV-blocking safety glasses for outdoor construction and welding flash protection.', image: '/images/products/safety/eye-protection/uv-protection-safety-glasses.jpg', specs: ['UV Block: 99.9%', 'Lens: Amber/Clear', 'Wrap-Around: Yes'] },
];

export default function EyeProtectionPage() {
    return (
        <ProductListing title="Eye Protection" description="Safety eyewear and face protection for grinding, welding, chemical, and UV hazards in industrial environments." benefits={['CE/EN Certified', 'Anti-Scratch Lens', 'Comfortable Fit', 'All Hazard Types']} products={products} categoryBackLink="/products" />
    );
}
