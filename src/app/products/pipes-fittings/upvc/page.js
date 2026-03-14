import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'UPVC Pressure Pipes', description: 'Unplasticized PVC pressure pipes for cold water supply and industrial fluid transport.', image: '/images/products/pipes-fittings/upvc/upvc-pipe-solvent-weld.jpg', specs: ['Size: 15–300mm', 'Pressure: 4–16 bar', 'Standard: IS 4985'] },
    { name: 'SCH 40/80 Pipes', description: 'Schedule 40 and 80 UPVC pipes for industrial process piping and chemical handling.', image: '/images/products/pipes-fittings/upvc/upvc-pipe-schedule-80.jpg', specs: ['Schedule: 40/80', 'Size: 15–300mm', 'Chemical Resistant'] },
    { name: 'UPVC Elbow', description: 'UPVC elbow fittings for direction changes in pressure pipe systems.', image: '/images/products/pipes-fittings/upvc/upvc-elbow-fitting-pressure.jpg', specs: ['Angle: 45°/90°', 'Size: 15–300mm', 'Joint: Solvent/Thread'] },
    { name: 'UPVC Tee', description: 'UPVC tee fittings for branching connections in water and chemical piping systems.', image: '/images/products/pipes-fittings/upvc/upvc-tee-fitting-plumbing.jpg', specs: ['Type: Equal/Reducing', 'Pressure: Rated', 'Standard: IS compliant'] },
    { name: 'UPVC Valve', description: 'UPVC ball and butterfly valves for flow control in corrosive and chemical environments.', image: '/images/products/pipes-fittings/upvc/upvc-ball-valve-socket.jpg', specs: ['Type: Ball/Butterfly', 'Size: 15–200mm', 'Pressure: 10 bar'] },
    { name: 'UPVC Reducer', description: 'UPVC reducing fittings for pipe size transitions in plumbing and industrial piping.', image: '/images/products/pipes-fittings/upvc/upvc-tee-fitting-plumbing.jpg', specs: ['Type: Concentric', 'Size: Various', 'Joint: Solvent Cement'] },
];

export default function UPVCPage() {
    return (
        <ProductListing title="UPVC Pipes & Fittings" description="Unplasticized PVC pipes and fittings for high-pressure water supply, industrial piping, and chemical handling." benefits={['Chemical Resistant', 'High Pressure', 'UV Resistant', 'Long Service Life']} products={products} categoryBackLink="/products" />
    );
}
