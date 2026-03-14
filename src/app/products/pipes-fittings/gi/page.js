import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'GI Class-B Pipe', description: 'Hot-dip galvanized Class-B (medium) pipes for water supply and fire-fighting systems.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Class: B (Medium)', 'Size: 15–150mm NB', 'Standard: IS 1239'] },
    { name: 'GI Class-C Pipe', description: 'Heavy-duty galvanized Class-C pipes for high-pressure water and industrial applications.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Class: C (Heavy)', 'Size: 15–150mm NB', 'Pressure: High'] },
    { name: 'GI Elbow', description: 'Galvanized iron threaded elbows for direction changes in GI pipe plumbing.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Angle: 45°/90°', 'Size: 15–100mm', 'Thread: BSP'] },
    { name: 'GI Tee', description: 'Galvanized iron tee fittings for branching connections in water supply piping.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: Equal/Reducing', 'Size: 15–100mm', 'Galvanized: Hot Dip'] },
    { name: 'GI Union', description: 'Galvanized threaded unions for easy disconnection of pipe sections during maintenance.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 15–50mm', 'Type: Threaded', 'Material: MI/GI'] },
    { name: 'GI Nipple', description: 'Galvanized pipe nipples for short connections between threaded fittings.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Length: 50–300mm', 'Size: 15–50mm', 'Thread: BSP Both Ends'] },
];

export default function GIPipesPage() {
    return (
        <ProductListing title="GI Pipes & Fittings" description="Galvanized iron pipes and fittings for water supply, fire-fighting, and plumbing installations with corrosion protection." benefits={['IS 1239 Certified', 'Hot-Dip Galvanized', 'Corrosion Resistant', 'All Sizes']} products={products} categoryBackLink="/products" />
    );
}
