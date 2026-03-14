import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Wood Varnish', description: 'Clear and tinted wood varnishes for enhancing natural grain and protecting wooden surfaces.', image: '/images/products/construction-chemicals/wood-coatings/wood-varnish-clear-coat.jpg', specs: ['Finish: Gloss/Satin/Matt', 'Base: Alkyd/PU', 'Coats: 2–3'] },
    { name: 'Wood Stain', description: 'Penetrating wood stains for coloring and protecting timber while maintaining visible grain.', image: '/images/products/construction-chemicals/wood-coatings/wood-stain-color.jpg', specs: ['Type: Water/Oil Based', 'Shades: Multiple', 'Coverage: 80–100 sqft/L'] },
    { name: 'Melamine Finish', description: 'Melamine clear and pigmented coatings for furniture, cabinets, and interior woodwork.', image: '/images/products/construction-chemicals/wood-coatings/pu-wood-finish-polyurethane.jpg', specs: ['Finish: Gloss/Matt', 'Hardness: High', 'Application: Spray/Brush'] },
    { name: 'PU Wood Finish', description: 'Polyurethane wood finishes for premium-quality, scratch-resistant furniture and interior woodwork.', image: '/images/products/construction-chemicals/wood-coatings/pu-wood-finish-polyurethane.jpg', specs: ['Type: 1K/2K PU', 'Finish: Gloss/Satin/Matt', 'Scratch Resistant'] },
    { name: 'Sealer', description: 'Wood sealers for preparing timber surfaces before topcoat application, ensuring smooth finish.', image: '/images/products/construction-chemicals/wood-coatings/wood-sealer-primer.jpg', specs: ['Type: NC/PU Sealer', 'Sandable: Yes', 'Drying: 2–4 Hours'] },
    { name: 'Wood Preservative', description: 'Anti-termite and anti-fungal wood preservatives for protecting timber from biological attack.', image: '/images/products/construction-chemicals/wood-coatings/wood-preservative-treatment.jpg', specs: ['Protection: Termite/Fungal', 'Type: Water/Oil Borne', 'Standard: IS 401'] },
];

export default function WoodCoatingsPage() {
    return (
        <ProductListing title="Wood Coatings" description="Professional wood finishing products including varnishes, stains, PU finishes, and wood preservatives for all timber applications." benefits={['Premium Finish', 'UV Protection', 'Anti-Termite Options', 'Multiple Shades']} products={products} categoryBackLink="/products" />
    );
}
