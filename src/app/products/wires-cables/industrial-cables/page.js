import ProductListing from '@/components/products/ProductListing';

export default function IndustrialCablesPage() {
    const products = [
        {
            name: 'Mining Cable',
            description: 'Heavy-duty trailing cables for mining equipment and draglines.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Rubber Sheathed', 'Ground Check Conductor', 'High Flexibility'],
        },
        {
            name: 'Crane & Reeling Cable',
            description: 'Flexible cables for cranes, hoists, and festoon systems.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Flat/Round Type', 'Oil Resistant', 'High Cycle Life'],
        },
        {
            name: 'VFD/VSD Cable',
            description: 'Shielded cables designed for variable frequency drive applications.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Symmetric Design', 'EMI Shielded', 'Low Capacitance'],
        },
        {
            name: 'Fire Survival Cable',
            description: 'Cables that maintain circuit integrity during fire conditions.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['2 Hour Fire Rating', 'IEC 60331', 'Mica Tape Insulation'],
        },
    ];

    const benefits = ['Heavy Duty', 'Harsh Environment', 'Long Life', 'Custom Manufacturing'];

    return (
        <ProductListing
            title="Industrial Cables"
            description="Specialized cables engineered for demanding industrial environments including mining, manufacturing, and process industries."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
