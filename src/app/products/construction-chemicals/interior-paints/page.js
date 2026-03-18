import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Emulsion Paint', description: 'Water-based interior emulsion paints for walls and ceilings with smooth matte or silk finish.', image: '/images/products/construction-chemicals/interior-paints/interior-emulsion-paint.jpg', specs: ['Finish: Matt/Silk', 'Coverage: 120–140 sqft/L', 'Washable: Yes'] },
    { name: 'Premium Emulsion', description: 'Premium-grade interior emulsions with superior coverage, stain resistance, and rich color options.', image: '/images/products/construction-chemicals/interior-paints/premium-emulsion-luxury-paint.jpg', specs: ['Finish: Smooth Sheen', 'Coverage: 130–150 sqft/L', 'Anti-Fungal: Yes'] },
    { name: 'Luxury Emulsion', description: 'Ultra-luxury interior paints with designer finishes, Teflon coating, and superior washability.', image: '/images/products/construction-chemicals/interior-paints/premium-emulsion-luxury-paint.jpg', specs: ['Finish: Luxury Sheen', 'Washability: 20000+ Cycles', 'Teflon Coated'] },
    { name: 'Texture Paint', description: 'Decorative textured paints for creating designer wall patterns and artistic interior finishes.', image: '/images/products/construction-chemicals/interior-paints/texture-paint-wall-coating.jpg', specs: ['Pattern: Multiple', 'Application: Roller/Trowel', 'Finish: Textured'] },
    { name: 'Stainer', description: 'Universal stainers and tinting colors for custom shade mixing with emulsion and enamel paints.', image: '/images/products/construction-chemicals/interior-paints/stainer.jpg', specs: ['Type: Universal', 'Pack: 50ml–1L', 'Compatible: Emulsion/Enamel'] },
    { name: 'Ceiling Paint', description: 'Non-drip ceiling paints formulated for overhead application with bright white finish.', image: '/images/products/construction-chemicals/interior-paints/texture-paint-wall-coating.jpg', specs: ['Finish: Dead Matte', 'Color: Bright White', 'Drip-Free: Yes'] },
];

export default function InteriorPaintsPage() {
    return (
        <ProductListing title="Interior Paints" description="Premium interior wall paints in emulsion, texture, and specialty finishes for beautiful and durable interior spaces." benefits={['Low VOC', 'Anti-Fungal', '1000+ Shades', 'Washable']} products={products} categoryBackLink="/products" />
    );
}
