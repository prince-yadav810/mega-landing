import ProductListing from '@/components/products/ProductListing';

export default function FireSafetyPage() {
    const products = [
        {
            name: 'ABC Powder Extinguisher',
            description: 'Multipurpose dry chemical powder extinguishers for Class A, B, and C fires.',
            image: 'https://images.unsplash.com/photo-1582236523992-80512db20b92?w=800&q=80', // Fire extinguisher
            specs: ['ISI Marked', '4kg / 6kg / 9kg', 'Squeeze Grip'],
        },
        {
            name: 'CO2 Fire Extinguisher',
            description: 'Carbon Dioxide extinguishers for electrical fires and sensitive equipment.',
            image: 'https://images.unsplash.com/photo-1527014695078-75d5cc6be829?w=800&q=80', // Industrial setting
            specs: ['Seamless Cylinder', '4.5kg Capacity', 'Non-Corrosive'],
        },
        {
            name: 'Fire Blanket',
            description: 'Fiberglass fire blankets for smothering small fires and kitchen safety.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', // Placeholder
            specs: ['Heat Resistant > 500°C', 'Quick Release Tabs', 'Compact Box'],
        },
        {
            name: 'Hydrant Valve',
            description: 'Single headed hydrant landing valves for fire fighting water systems.',
            image: 'https://images.unsplash.com/photo-1584464871032-9df7fe78427f?w=800&q=80', // Valves
            specs: ['Stainless Steel / Gunmetal', '63mm dia', 'Flanged Inlet'],
        },
    ];

    const benefits = [
        'ISI / BIS Approved',
        'Installation Services',
        'Maintenance Contracts',
        'Expert Consultation'
    ];

    return (
        <ProductListing
            title="Fire Safety Equipment"
            description="Top-grade fire fighting equipment to protect life and property. From extinguishers to hydrant systems, we provide certified solutions for all fire hazards."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
