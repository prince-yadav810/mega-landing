import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'ISMB Beam', description: 'Indian Standard Medium Weight Beams for primary structural members in buildings and bridges.', image: '/images/products/structural-steel/ms-beams/ms-i-beam-ismb-structural.jpg', specs: ['Size: ISMB 100–600', 'Standard: IS 2062', 'Length: 6m/12m'] },
    { name: 'ISWB Beam', description: 'Indian Standard Wide Flange Beams for heavy-load columns and long-span structures.', image: '/images/products/structural-steel/ms-beams/universal-steel-beam-column.jpg', specs: ['Size: ISWB 150–600', 'Flange: Wide', 'Load: Heavy'] },
    { name: 'ISHB Beam', description: 'Indian Standard Heavy Weight Beams for columns and structural members requiring higher section modulus.', image: '/images/products/structural-steel/ms-beams/universal-steel-beam-column.jpg', specs: ['Size: ISHB 150–450', 'Weight: Heavy', 'Standard: IS 2062'] },
    { name: 'NPB Beam', description: 'Narrow parallel flange beams for modern steel construction with efficient bolt connections.', image: '/images/products/structural-steel/ms-beams/universal-steel-beam-column.jpg', specs: ['Flange: Narrow Parallel', 'Size: NPB 100–400', 'Bolting: Easy'] },
    { name: 'Universal Beam', description: 'Universal beam sections (UB) as per European standards for structural and industrial applications.', image: '/images/products/structural-steel/ms-beams/universal-steel-beam-column.jpg', specs: ['Standard: EN/BS', 'Size: UB 127–914', 'Grade: S275/S355'] },
];

export default function MSBeamsPage() {
    return (
        <ProductListing title="MS Beams" description="Structural steel beams in ISMB, ISWB, ISHB, and universal profiles for building frames, bridges, and industrial structures." benefits={['IS 2062 Certified', 'Mill TC Available', 'All Standard Sizes', 'Custom Lengths']} products={products} categoryBackLink="/products" />
    );
}
