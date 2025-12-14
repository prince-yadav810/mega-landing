import ProductListing from '@/components/products/ProductListing';

export default function EyeProtectionPage() {
    const products = [
        {
            name: 'Safety Spectacles',
            description: 'Lightweight polycarbonate safety glasses with anti-scratch and anti-fog coating.',
            image: 'https://images.unsplash.com/photo-1596496356906-12188ab6670a?w=800&q=80', // Safety glasses
            specs: ['ANSI Z87.1', '99.9% UV Protection', 'Adjustable Temples'],
        },
        {
            name: 'Chemical Splash Goggles',
            description: 'Indirect vented goggles providing hermetic seal against chemical splashes and fumes.',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', // Goggles
            specs: ['Soft PVC Frame', 'Fits Over Glasses', 'Wide Field of Vision'],
        },
        {
            name: 'Face Shield',
            description: 'Full face protection visor with ratchet headgear for grinding and medical applications.',
            image: 'https://images.unsplash.com/photo-1584634731362-e17f516a57cf?w=800&q=80', // Face shield
            specs: ['Polycarbonate Visor', 'Aluminum Bound Edge', 'Impact Resistant'],
        },
        {
            name: 'Welding Goggles',
            description: 'Flip-up welding goggles with IR lenses for gas welding and cutting operations.',
            image: 'https://images.unsplash.com/photo-1504305886482-143bb09ecdfa?w=800&q=80', // Welding
            specs: ['Shade 5 / Shade 11', 'Indirect Ventilation', 'Soft Comfort Fit'],
        },
    ];

    const benefits = [
        'Optical Class 1 Clarity',
        'Anti-Fog Technology',
        'Comfortable Fit',
        'Prescription Options'
    ];

    return (
        <ProductListing
            title="Eye & Face Protection"
            description="Protect your vision with our high-quality eye protection range. Engineered for clarity, comfort, and impact resistance in harsh industrial environments."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
