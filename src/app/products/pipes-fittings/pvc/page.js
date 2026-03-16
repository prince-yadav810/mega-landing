import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'SWR Pipes', description: 'Soil, waste, and rainwater PVC pipes for building drainage and sewage systems.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/SWR Pipes.jpg', specs: ['Size: 75–200mm', 'Standard: IS 13592', 'Type: Type A/Type B'] },
    { name: 'Conduit Pipes', description: 'Rigid PVC conduit pipes for concealed electrical wiring in walls and slabs.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/Conduit Pipes.jpg', specs: ['Size: 20–50mm', 'Type: Heavy/Medium', 'Standard: IS 9537'] },
    { name: 'Pressure Pipes', description: 'PVC pressure pipes for water supply, borewell, and irrigation applications.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/Pressure Pipes.jpg', specs: ['Size: 20–315mm', 'Pressure: 2.5–10 kg/cm²', 'Standard: IS 4985'] },
    { name: 'Column Pipes', description: 'PVC column pipes for submersible pump installations in borewells.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/Column Pipes.png', specs: ['Size: 40–200mm', 'Type: Ribbed/Plain', 'Standard: IS 12818'] },
    { name: 'PVC Elbow', description: 'PVC elbow fittings in 45° and 90° for direction changes in pipe runs.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/PVC Elbow.png', specs: ['Angle: 45°/90°', 'Size: 20–200mm', 'Type: Plain/Threaded'] },
    { name: 'PVC Tee', description: 'PVC tee fittings for branching pipe connections in plumbing and drainage systems.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/PVC Tee.png', specs: ['Type: Equal/Reducing', 'Size: 20–200mm', 'Standard: IS compliant'] },
    { name: 'PVC Coupler', description: 'PVC coupling joints for connecting two pipe ends in plumbing installations.', image: '/images/products/pipes-fittings_new/PVC Pipes & Fittings/PVC Coupler.jpeg', specs: ['Type: Plain/Threaded', 'Size: 20–200mm', 'Joint: Solvent Cement'] },
];

export default function PVCPage() {
    return (
        <ProductListing title="PVC Pipes & Fittings" description="Complete range of PVC pipes and fittings for plumbing, drainage, electrical conduit, and water supply applications." benefits={['IS Certified', 'Leak-Proof Joints', 'Corrosion Free', 'Long Life']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
