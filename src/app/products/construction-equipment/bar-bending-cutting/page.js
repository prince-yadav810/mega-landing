import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Manual Bar Cutter', description: 'Hand-operated rebar cutters for cutting TMT bars on small construction sites.', image: '/images/products/construction-equipment/bar-bending-cutting/manual-bar-cutter-hand-operated.jpg', specs: ['Capacity: Up to 32mm', 'Operation: Manual', 'Portable: Yes'] },
    { name: 'Electric Bar Cutter', description: 'Electric rebar cutting machines for fast and precise cutting of TMT bars up to 40mm.', image: '/images/products/construction-equipment/bar-bending-cutting/bar-cutting-machine-electric.jpg', specs: ['Capacity: Up to 40mm', 'Power: 2–3 HP', 'Cuts/Min: 18–25'] },
    { name: 'Bar Bending Machine', description: 'Power-operated bar bending machines for bending reinforcement bars to specified angles.', image: '/images/products/construction-equipment/bar-bending-cutting/bar-bending-machine-rebar.jpg', specs: ['Capacity: Up to 40mm', 'Angle: 0–180°', 'Power: 3–5 HP'] },
    { name: 'Ring Making Machine', description: 'Automatic ring making machines for producing circular stirrups and rings from TMT bars.', image: '/images/products/construction-equipment/bar-bending-cutting/ring-making-machine-stirrup.jpg', specs: ['Bar Size: 6–12mm', 'Diameter: 100–600mm', 'Speed: High'] },
    { name: 'Stirrup Bending Machine', description: 'CNC stirrup bending machines for automated production of stirrups in various shapes and sizes.', image: '/images/products/construction-equipment/bar-bending-cutting/ring-making-machine-stirrup.jpg', specs: ['Bar: 6–16mm', 'Shapes: Multiple', 'Control: CNC/Auto'] },
];

export default function BarBendingCuttingPage() {
    return (
        <ProductListing title="Bar Bending & Cutting Machines" description="Reinforcement bar processing equipment for cutting, bending, and shaping TMT bars on construction sites." benefits={['High Productivity', 'All Bar Sizes', 'Safety Features', 'Spare Parts Support']} products={products} categoryBackLink="/products" />
    );
}
