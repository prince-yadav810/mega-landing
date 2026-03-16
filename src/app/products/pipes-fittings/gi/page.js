import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'GI Class-B Pipe', description: 'Hot-dip galvanized Class-B (medium) pipes for water supply and fire-fighting systems.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Class-B Pipe.jpeg', specs: ['Class: B (Medium)', 'Size: 15–150mm NB', 'Standard: IS 1239'] },
    { name: 'GI Class-C Pipe', description: 'Heavy-duty galvanized Class-C pipes for high-pressure water and industrial applications.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Class-C Pipe.jpeg', specs: ['Class: C (Heavy)', 'Size: 15–150mm NB', 'Pressure: High'] },
    { name: 'GI Elbow', description: 'Galvanized iron threaded elbows for direction changes in GI pipe plumbing.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Elbow.png', specs: ['Angle: 45°/90°', 'Size: 15–100mm', 'Thread: BSP'] },
    { name: 'GI Tee', description: 'Galvanized iron tee fittings for branching connections in water supply piping.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Tee.png', specs: ['Type: Equal/Reducing', 'Size: 15–100mm', 'Galvanized: Hot Dip'] },
    { name: 'GI Union', description: 'Galvanized threaded unions for easy disconnection of pipe sections during maintenance.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Union.png', specs: ['Size: 15–50mm', 'Type: Threaded', 'Material: MI/GI'] },
    { name: 'GI Nipple', description: 'Galvanized pipe nipples for short connections between threaded fittings.', image: '/images/products/pipes-fittings_new/GI Pipes & Fittings/GI Nipple.png', specs: ['Length: 50–300mm', 'Size: 15–50mm', 'Thread: BSP Both Ends'] },
];

export default function GIPipesPage() {
    return (
        <ProductListing title="GI Pipes & Fittings" description="Galvanized iron pipes and fittings for water supply, fire-fighting, and plumbing installations with corrosion protection." benefits={['IS 1239 Certified', 'Hot-Dip Galvanized', 'Corrosion Resistant', 'All Sizes']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
