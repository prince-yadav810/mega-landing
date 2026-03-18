import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'HDPE Water Tank', description: 'High-density polyethylene water tanks for overhead and ground-level water storage with UV protection.', image: '/images/products/hardware/water-tanks/hdpe-water-tank.jpg', specs: ['Capacity: 200–10000L', 'Material: HDPE', 'UV Stabilized: Yes'] },
    { name: 'PVC Water Tank', description: 'PVC water storage tanks for residential and commercial water storage solutions.', image: '/images/products/hardware/water-tanks/pvc-water-tank.jpg', specs: ['Capacity: 200–5000L', 'Material: PVC', 'Food Grade: Yes'] },
    { name: 'FRP Water Tank', description: 'Fiber-reinforced plastic tanks for chemical storage, water treatment, and industrial applications.', image: '/images/products/hardware/water-tanks/frp-water-tank.jpg', specs: ['Capacity: 500–50000L', 'Material: FRP', 'Chemical Resistant'] },
    { name: 'Underground Water Tank', description: 'Buried underground water tanks for rainwater harvesting and space-efficient water storage.', image: '/images/products/hardware/water-tanks/underground-water-tank.jpg', specs: ['Capacity: 1000–25000L', 'Type: Underground', 'Load Bearing: Yes'] },
    { name: 'Overhead Water Tank', description: 'Rooftop overhead water tanks with insulation options for consistent water supply in buildings.', image: '/images/products/hardware/water-tanks/overhead-water-tank.jpg', specs: ['Capacity: 500–10000L', 'Insulation: Optional', 'Lid: Lockable'] },
    { name: 'Loft Water Tank', description: 'Compact loft tanks designed for space-constrained installations in apartments and small buildings.', image: '/images/products/hardware/water-tanks/loft-water-tank.jpg', specs: ['Capacity: 200–2000L', 'Profile: Slim/Flat', 'Material: HDPE'] },
];

export default function WaterTanksPage() {
    return (
        <ProductListing title="Water Tanks" description="Durable water storage tanks in HDPE, PVC, and FRP materials for residential, commercial, and industrial water storage needs." benefits={['Food Grade', 'UV Protected', 'Long Warranty', 'All Capacities']} products={products} categoryBackLink="/products" />
    );
}
