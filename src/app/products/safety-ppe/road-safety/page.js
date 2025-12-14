import ProductListing from '@/components/products/ProductListing';

export default function RoadSafetyPage() {
    const products = [
        {
            name: 'Traffic Cones',
            description: 'Flexible PVC traffic cones with UV stabilization and reflective sleeves.',
            image: 'https://images.unsplash.com/photo-1563606734-e82dec4d8dc3?w=800&q=80', // Traffic cone
            specs: ['750mm Height', 'Heavy Weighted Base', 'High Visibility Orange'],
        },
        {
            name: 'Convex Mirrors',
            description: 'Polycarbonate convex mirrors for eliminating blind spots in parking and roads.',
            image: 'https://images.unsplash.com/photo-1518290297071-6c243a41e976?w=800&q=80', // Mirror reflection
            specs: ['130 Degree View', 'Unbreakable Lens', 'Weather Proof'],
        },
        {
            name: 'Speed Bumps',
            description: 'Modular rubber speed breakers for traffic calming in residential and industrial zones.',
            image: 'https://images.unsplash.com/photo-1625246333900-547dfb66d33f?w=800&q=80', // Road
            specs: ['Heavy Duty Rubber', 'Cat Eyes Embedded', 'Easy Installation'],
        },
        {
            name: 'Barricade Tape',
            description: 'Caution and Danger barricade tapes for cordoning off hazardous areas.',
            image: 'https://images.unsplash.com/photo-1533035332459-d64e0dd7a136?w=800&q=80', // Caution tape
            specs: ['High Strength PE', 'Red/White or Black/Yellow', '300m Rolls'],
        },
    ];

    const benefits = [
        'Durable Materials',
        'High Visibility',
        'Easy Installation',
        'Weather Resistant'
    ];

    return (
        <ProductListing
            title="Road Safety Equipment"
            description="Manage traffic and ensure safety on roads and premises with our durable road safety products. Designed for high visibility and long-lasting performance."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
