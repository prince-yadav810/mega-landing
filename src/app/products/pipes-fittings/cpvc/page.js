import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Hot Water Pipes', description: 'CPVC pipes rated for hot water supply up to 93°C in residential and commercial plumbing.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/cpvc-hot-water-pipes.jpg', specs: ['Temp: Up to 93°C', 'Size: 15–50mm', 'Standard: ASTM D2846'] },
    { name: 'CPVC SDR 11', description: 'Standard dimension ratio 11 CPVC pipes for hot and cold water distribution systems.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/CPVC SDR 11.jpg', specs: ['SDR: 11', 'Pressure: 28 bar@23°C', 'Size: 15–50mm'] },
    { name: 'CPVC Elbow', description: 'CPVC elbow fittings for hot water pipe direction changes with solvent cement joints.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/CPVC Elbow.jpeg', specs: ['Angle: 45°/90°', 'Size: 15–50mm', 'Joint: Solvent Cement'] },
    { name: 'CPVC Tee', description: 'CPVC tee fittings for branching hot water supply lines in plumbing systems.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/CPVC Tee.jpeg', specs: ['Type: Equal/Reducing', 'Size: 15–50mm', 'Temp Rated: 93°C'] },
    { name: 'CPVC Valve', description: 'CPVC ball valves for hot and cold water flow control in residential plumbing.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/CPVC Valve.jpeg', specs: ['Type: Ball Valve', 'Size: 15–50mm', 'Handle: T-type'] },
    { name: 'CPVC Union', description: 'CPVC union fittings for easy disconnection and maintenance of hot water pipe sections.', image: '/images/products/pipes-fittings_new/CPVC Pipes & Fittings/cpvc-union-2.jpg', specs: ['Type: Union', 'Size: 15–50mm', 'Seal: EPDM O-Ring'] },
];

export default function CPVCPage() {
    return (
        <ProductListing title="CPVC Pipes & Fittings" description="Chlorinated PVC pipes and fittings for hot and cold water plumbing, rated for temperatures up to 93°C." benefits={['Hot Water Rated', 'No Corrosion', 'Easy Installation', 'Lead-Free']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
