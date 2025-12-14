import ProductListing from '@/components/products/ProductListing';

export default function RespiratoryProtectionPage() {
    const products = [
        {
            name: 'N95 Particulate Respirator',
            description: 'NIOSH approved N95 disposable face mask for protection against dust and non-oil based particles.',
            image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80', // Mask
            specs: ['NIOSH N95', 'Adjustable Nose Clip', 'Fluid Resistant'],
        },
        {
            name: 'Half Face reusable Mask',
            description: 'Reusable half facepiece respirators with bayonet connection for dual filters.',
            image: 'https://images.unsplash.com/photo-1586028886369-026857d4512e?w=800&q=80', // Gas mask vibe
            specs: ['Silicone Face Seal', 'Dual Cartridge System', 'Drop-down Feature'],
        },
        {
            name: 'Full Face Mask',
            description: 'Comprehensive face and respiratory protection against gases, vapors, and particles.',
            image: 'https://images.unsplash.com/photo-1603572855519-74d6c466904d?w=800&q=80', // Full face
            specs: ['Wide Field of View', 'Impact Resistant Lens', 'Speaking Diaphragm'],
        },
        {
            name: 'Chemical Cartridges/Filters',
            description: 'Replaceable filters for organic vapors, acid gases, and ammonia.',
            image: 'https://images.unsplash.com/photo-1585842378081-5c02022837bc?w=800&q=80', // Filters
            specs: ['OV / AG / Ammonia', 'P100 Particulate', 'Easy Bayonet Fit'],
        },
    ];

    const benefits = [
        'NIOSH / EN Approved',
        'Fit Testing Support',
        'Wide Range of Filters',
        'Comfortable Designs'
    ];

    return (
        <ProductListing
            title="Respiratory Protection"
            description="Breathe safely with our advanced respiratory protection equipment. From disposable N95 masks to SCBA units, we have solutions for every atmospheric hazard."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
