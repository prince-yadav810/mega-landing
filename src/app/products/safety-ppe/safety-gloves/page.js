import ProductListing from '@/components/products/ProductListing';

export default function SafetyGlovesPage() {
    const products = [
        {
            name: 'Cut Resistant Gloves',
            description: 'High-performance gloves offering Level 5 cut protection for handling sharp objects and glass.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Level 5 Cut Resistance', 'Polyurethane Foam Coating', 'Breathable Liner'],
        },
        {
            name: 'Nitrile Chemical Gloves',
            description: 'Heavy-duty chemical resistant gloves for industrial processing and handling hazardous materials.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['EN 374 Certified', 'Diamond Grip Pattern', 'Acid & Alkali Resistant'],
        },
        {
            name: 'Electrical Safety Gloves',
            description: 'Insulating rubber gloves for protection against electrical shock. Available from Class 00 to Class 4.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['IEC 60903 Standard', 'Up to 36,000V Protection', 'Ergonomic Design'],
        },
        {
            name: 'Heat Resistant Gloves',
            description: 'Specialized Kevlar/Leather gloves for welding, foundry work, and high-heat applications.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Up to 500°C Contact Heat', 'Kevlar Stitching', 'Cow Split Leather'],
        },
        {
            name: 'Impact Resistant Gloves',
            description: 'TPR padded gloves providing dorsal impact protection for oil & gas and heavy construction.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['ANSI Impact Level 2', 'High-Viz Color', 'Oil-Resistant Grip'],
        },
        {
            name: 'Disposable Nitrile Gloves',
            description: 'Powder-free examination grade gloves for laboratory, medical, and light industrial use.',
            image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop',
            specs: ['Medical Grade', 'Powder Free', 'Textured Fingertips'],
        },
    ];

    const benefits = [
        'EN / ANSI Certified',
        'Bulk Order Discounts',
        'Sample Testing Available',
        'Custom Branding'
    ];

    return (
        <ProductListing
            title="Industrial Safety Gloves"
            description="Comprehensive range of hand protection solutions designed for various industrial hazards. From cut resistance to chemical protection, we ensure your hands are safe in every environment."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
