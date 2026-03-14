import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Dust Mask', description: 'Disposable dust masks for protection against non-toxic dust, pollen, and airborne particles.', image: '/images/products/safety/respiratory-protection/dust-mask-n95-respirator.jpg', specs: ['Class: FFP1/FFP2', 'Valve: Optional', 'Disposable: Yes'] },
    { name: 'Gas Mask', description: 'Full-face gas masks with cartridge filters for chemical, biological, and toxic gas protection.', image: '/images/products/safety/respiratory-protection/dust-mask-n95-respirator.jpg', specs: ['Type: Full Face', 'Filter: Multi-Gas', 'Visor: Panoramic'] },
    { name: 'Half Face Respirator', description: 'Reusable half-face respirators for paint spraying, chemical handling, and dust environments.', image: '/images/products/safety/respiratory-protection/half-face-respirator-cartridge.jpg', specs: ['Type: Half Face', 'Filter: Dual Cartridge', 'Reusable: Yes'] },
    { name: 'Full Face Respirator', description: 'Full-face respiratory protection with integrated eye protection for hazardous environments.', image: '/images/products/safety/respiratory-protection/full-face-gas-mask-respirator.jpg', specs: ['Type: Full Face', 'Vision: Wide Field', 'Filter: A1B1E1K1P3'] },
    { name: 'Cartridge Filter', description: 'Replacement cartridge filters for reusable respirators — organic vapor, acid gas, and particulate.', image: '/images/products/safety/respiratory-protection/half-face-respirator-cartridge.jpg', specs: ['Type: OV/AG/P100', 'Life: 40 Hours', 'Compatible: Standard'] },
    { name: 'PAPR (Powered Air)', description: 'Powered air-purifying respirators for continuous filtered air supply in extended work conditions.', image: '/images/products/safety/respiratory-protection/powered-air-purifying-respirator-papr.jpg', specs: ['Flow: 170 L/min', 'Battery: 8 Hours', 'Filter: HEPA'] },
];

export default function RespiratoryProtectionPage() {
    return (
        <ProductListing title="Respiratory Protection" description="Respiratory protection equipment from disposable masks to powered air systems for dust, chemical, and toxic environments." benefits={['CE Certified', 'All Protection Levels', 'Comfortable Seal', 'Replacement Filters']} products={products} categoryBackLink="/products" />
    );
}
