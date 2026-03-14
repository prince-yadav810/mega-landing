import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Fe-415 TMT', description: 'Standard grade TMT reinforcement bars for general construction, slabs, and foundations.', image: '/images/products/structural-steel/tmt-bars/stainless-steel-tmt-bar.jpg', specs: ['Grade: Fe-415', 'Size: 8mm–32mm', 'Standard: IS 1786'] },
    { name: 'Fe-500 TMT', description: 'High-strength TMT bars for multi-storey buildings, bridges, and earthquake-resistant structures.', image: '/images/products/structural-steel/tmt-bars/tmt-bar-fe500d-reinforcement.jpg', specs: ['Grade: Fe-500', 'Elongation: >12%', 'Weldable: Yes'] },
    { name: 'Fe-500D TMT', description: 'Ductile grade TMT bars with superior elongation for seismic zones and earthquake-resistant construction.', image: '/images/products/structural-steel/tmt-bars/tmt-bar-fe500d-reinforcement.jpg', specs: ['Grade: Fe-500D', 'Elongation: >16%', 'UTS/YS Ratio: >1.08'] },
    { name: 'Fe-550D TMT', description: 'Extra high-strength TMT bars for critical infrastructure, flyovers, and heavy-load structures.', image: '/images/products/structural-steel/tmt-bars/tmt-bar-fe550d-high-strength.jpg', specs: ['Grade: Fe-550D', 'Strength: 550 MPa', 'Seismic Resistant'] },
    { name: 'CRS TMT Bars', description: 'Corrosion-resistant TMT bars with special alloy composition for coastal and marine structures.', image: '/images/products/structural-steel/tmt-bars/stainless-steel-tmt-bar.jpg', specs: ['Type: Corrosion Resistant', 'Environment: Coastal', 'Life: Enhanced'] },
    { name: 'Quench Tempered TMT', description: 'Quench and self-tempered TMT bars with uniform properties and excellent bendability.', image: '/images/products/structural-steel/tmt-bars/stainless-steel-tmt-bar.jpg', specs: ['Process: Quench Tempered', 'Bendability: Superior', 'Weldable: Yes'] },
];

export default function TMTBarsPage() {
    return (
        <ProductListing title="TMT Bars" description="High-quality TMT reinforcement bars in all grades for residential, commercial, and infrastructure construction projects." benefits={['BIS Certified', 'All Grades', 'Mill Test Certificate', 'Bulk Supply']} products={products} categoryBackLink="/products" />
    );
}
