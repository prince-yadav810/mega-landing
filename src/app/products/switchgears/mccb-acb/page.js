import ProductListing from '@/components/products/ProductListing';

export default function MccbAcbPage() {
    const products = [
        {
            name: 'MCCB (Moulded Case)',
            description: 'Moulded case circuit breakers for higher current applications up to 1600A.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['16A to 1600A', 'Thermal-Magnetic Trip', 'Adjustable Settings'],
        },
        {
            name: 'Electronic MCCB',
            description: 'MCCBs with electronic trip units for precise protection settings.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Microprocessor Based', 'LCD Display', 'Communication Ready'],
        },
        {
            name: 'Air Circuit Breaker',
            description: 'ACBs for main incoming and high current distribution applications.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['800A to 6300A', 'Drawout Type', '65kA/85kA Icu'],
        },
        {
            name: 'Motor Protection MCCB',
            description: 'MCCBs with motor protection characteristics for direct motor connection.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['I²t Protection', '13x Magnetic Trip', 'Rotary Handle Option'],
        },
    ];

    const benefits = ['High Breaking Capacity', 'Adjustable Trip', 'Long Electrical Life', 'Front Accessible'];

    return (
        <ProductListing
            title="MCCB & ACB"
            description="Industrial grade moulded case and air circuit breakers for main distribution, motor protection, and high current applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
