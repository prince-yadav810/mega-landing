import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'White Cement Putty', description: 'White cement-based wall putty for smooth finishing of interior and exterior plastered surfaces before painting.', image: '/images/products/construction-chemicals/wall-putty-primers/white-cement-wall-putty.jpg', specs: ['Base: White Cement', 'Coats: 2', 'Coverage: 12–15 sqft/kg'] },
    { name: 'Acrylic Putty', description: 'Ready-mix acrylic wall putty for hairline crack filling and ultra-smooth finish on interior walls.', image: '/images/products/construction-chemicals/wall-putty-primers/acrylic-wall-putty.jpg', specs: ['Base: Acrylic', 'Ready Mix: Yes', 'Finish: Ultra Smooth'] },
    { name: 'Wall Primer', description: 'Water-based and solvent-based wall primers for sealing surfaces and enhancing paint adhesion.', image: '/images/products/construction-chemicals/wall-putty-primers/interior-wall-primer.jpg', specs: ['Type: Water/Solvent', 'Coverage: 100–130 sqft/L', 'Drying: 4–6 Hours'] },
    { name: 'Metal Primer', description: 'Anti-corrosive metal primers for iron, steel, and galvanized surfaces before topcoat application.', image: '/images/products/construction-chemicals/wall-putty-primers/metal-primer-red-oxide.jpg', specs: ['Type: Red Oxide/Zinc', 'Anti-Rust: Yes', 'Coverage: 60–80 sqft/L'] },
    { name: 'Wood Primer', description: 'Sanding sealer and wood primers for preparing timber surfaces before enamel or polyurethane coating.', image: '/images/products/construction-chemicals/wall-putty-primers/wood-primer-water-based.jpg', specs: ['Base: Alkyd/NC', 'Sandable: Yes', 'Coverage: 80–100 sqft/L'] },
    { name: 'Universal Primer', description: 'Multi-surface primer compatible with concrete, wood, metal, and previously painted surfaces.', image: '/images/products/construction-chemicals/wall-putty-primers/interior-wall-primer.jpg', specs: ['Surface: Multi', 'Base: Acrylic', 'Coverage: 100–120 sqft/L'] },
];

export default function WallPuttyPrimersPage() {
    return (
        <ProductListing title="Wall Putty & Primers" description="Surface preparation products including wall putty, primers, and sealers for achieving perfect paint finishes on all substrates." benefits={['Smooth Finish', 'Anti-Fungal Options', 'Quick Drying', 'All Surfaces']} products={products} categoryBackLink="/products" />
    );
}
