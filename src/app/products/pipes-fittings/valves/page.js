import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Gate Valve', description: 'Rising and non-rising stem gate valves for full-bore isolation in water and industrial piping.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 15–600mm', 'Pressure: PN 10/16/25', 'Body: CI/CS/SS'] },
    { name: 'Globe Valve', description: 'Globe valves for precise flow regulation and throttling in process and utility systems.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 15–300mm', 'Type: Straight/Angle', 'Disc: Metal/PTFE'] },
    { name: 'Ball Valve', description: 'Quarter-turn ball valves for quick shut-off in water, gas, oil, and chemical applications.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 6–300mm', 'Type: Floating/Trunnion', 'Body: Brass/SS/CS'] },
    { name: 'Butterfly Valve', description: 'Wafer and lug type butterfly valves for flow control in large-diameter piping systems.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 50–1200mm', 'Type: Wafer/Lug', 'Disc: DI/SS/Aluminum'] },
    { name: 'Check Valve', description: 'Swing, lift, and dual-plate check valves for preventing backflow in piping systems.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: Swing/Lift/Dual Plate', 'Size: 15–600mm', 'Cracking: Low Pressure'] },
    { name: 'Pressure Relief Valve', description: 'Spring-loaded and pilot-operated pressure relief valves for overpressure protection.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: Spring/Pilot', 'Set Pressure: Custom', 'Standard: API 520/526'] },
];

export default function ValvesPage() {
    return (
        <ProductListing title="Valves (All Types)" description="Complete range of industrial valves — gate, globe, ball, butterfly, check, and relief valves for all piping applications." benefits={['All Pressure Ratings', 'MOC Options', 'Actuator Ready', 'Test Certificate']} products={products} categoryBackLink="/products" />
    );
}
