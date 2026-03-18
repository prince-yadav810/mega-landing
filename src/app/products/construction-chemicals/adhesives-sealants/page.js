import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Tile Adhesive', description: 'Polymer-modified tile adhesives for fixing ceramic, vitrified, and natural stone tiles on walls and floors.', image: '/images/products/construction-chemicals/adhesives-sealants/tile-adhesive-cementitious.jpg', specs: ['Type: C1/C2', 'Coverage: 4–6 kg/sqm', 'Open Time: 20–30 min'] },
    { name: 'Epoxy Adhesive', description: 'Two-component epoxy adhesives for structural bonding of concrete, metal, and stone.', image: '/images/products/construction-chemicals/adhesives-sealants/epoxy-adhesive-structural.jpg', specs: ['Components: 2-Part', 'Cure: 24 Hours', 'Strength: >20 MPa'] },
    { name: 'Silicone Sealant', description: 'RTV silicone sealants for glass, aluminum, and sanitary joint sealing with excellent flexibility.', image: '/images/products/construction-chemicals/adhesives-sealants/silicone-sealant-rtv.jpg', specs: ['Cure: Acetoxy/Neutral', 'Movement: ±25%', 'Life: 20+ Years'] },
    { name: 'PU Sealant', description: 'Polyurethane sealants for construction joints, expansion joints, and concrete crack sealing.', image: '/images/products/construction-chemicals/adhesives-sealants/pu-sealant.jpg', specs: ['Type: 1-Part/2-Part', 'Elongation: >600%', 'Paintable: Yes'] },
    { name: 'Construction Adhesive', description: 'Heavy-duty construction adhesives for bonding wood, drywall, panels, and building materials.', image: '/images/products/construction-chemicals/adhesives-sealants/construction-adhesive-multipurpose.jpg', specs: ['Type: Solvent/Water Based', 'Bond: High Strength', 'Gap Filling: Yes'] },
    { name: 'Acrylic Sealant', description: 'Paintable acrylic sealants for interior gaps, cracks, and joints around windows and doors.', image: '/images/products/construction-chemicals/adhesives-sealants/acrylic-sealant-paintable.jpg', specs: ['Paintable: Yes', 'Indoor/Outdoor: Both', 'Cure: 24–48 Hours'] },
];

export default function AdhesivesSealantsPage() {
    return (
        <ProductListing title="Adhesives & Sealants" description="Professional adhesives and sealants for construction, glazing, tiling, and structural bonding applications." benefits={['Premium Brands', 'Long Life', 'All Joint Types', 'Color Options']} products={products} categoryBackLink="/products" />
    );
}
