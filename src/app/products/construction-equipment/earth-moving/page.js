import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Mini Excavator', description: 'Compact mini excavators for confined space digging, trenching, and light earthwork.', image: '/images/products/construction-equipment/earth-moving/mini-excavator-compact.jpg', specs: ['Weight: 1–8 Ton', 'Dig Depth: 2–4m', 'Engine: Diesel'] },
    { name: 'Backhoe Loader', description: 'Versatile backhoe loaders for digging, loading, and material handling on construction sites.', image: '/images/products/construction-equipment/earth-moving/backhoe-loader-construction.jpg', specs: ['Power: 76–100 HP', 'Dig Depth: 4–5m', 'Bucket: 0.2–1 cu m'] },
    { name: 'Bulldozer', description: 'Heavy crawler bulldozers for land clearing, grading, and pushing bulk earthwork.', image: '/images/products/construction-equipment/earth-moving/bulldozer-earth-moving.jpg', specs: ['Power: 100–850 HP', 'Blade: 3–6m', 'Track: Steel/Rubber'] },
    { name: 'Wheel Loader', description: 'Front-end wheel loaders for loading trucks, stockpile management, and material handling.', image: '/images/products/construction-equipment/earth-moving/wheel-loader-front-end.jpg', specs: ['Bucket: 1–5 cu m', 'Power: 80–300 HP', 'Lift: 3–4m'] },
    { name: 'Motor Grader', description: 'Motor graders for road surface leveling, grading, and fine finishing of earthwork.', image: '/images/products/construction-equipment/earth-moving/motor-grader-road-construction.jpg', specs: ['Blade: 3.7–4.3m', 'Power: 140–250 HP', 'Drive: AWD Option'] },
    { name: 'Skid Steer Loader', description: 'Compact skid steer loaders for versatile material handling in tight construction spaces.', image: '/images/products/construction-equipment/earth-moving/wheel-loader-front-end.jpg', specs: ['Capacity: 500–1500 kg', 'Attachments: 50+', 'Power: 50–100 HP'] },
];

export default function EarthMovingPage() {
    return (
        <ProductListing title="Earth Moving Equipment" description="Heavy construction equipment for excavation, loading, grading, and earthwork on infrastructure projects." benefits={['Sale & Rental', 'All Capacities', 'Operator Training', 'Spare Parts']} products={products} categoryBackLink="/products" />
    );
}
