import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Exterior Emulsion', description: 'Weather-resistant exterior emulsion paints with excellent durability against sun, rain, and pollution.', image: '/images/products/construction-chemicals/exterior-paints/exterior-emulsion-paint-weatherproof.jpg', specs: ['Finish: Matt/Sheen', 'Life: 5–7 Years', 'UV Resistant: Yes'] },
    { name: 'Apex Paint', description: 'Premium exterior paint with high build formula for maximum protection against extreme weather conditions.', image: '/images/products/construction-chemicals/exterior-paints/apex-exterior-paint-acrylic.jpg', specs: ['Coverage: 100–120 sqft/L', 'Anti-Algal: Yes', 'Dust Pick-Up: Low'] },
    { name: 'Weather Coat', description: 'All-weather exterior paint with hydrophobic technology for water and stain repellence.', image: '/images/products/construction-chemicals/exterior-paints/weather-coat.jpg', specs: ['Technology: Water Repellent', 'Life: 7–10 Years', 'Crack Bridging: Yes'] },
    { name: 'Damp Proof Paint', description: 'Anti-dampness paint for walls affected by moisture seepage and rising dampness.', image: '/images/products/construction-chemicals/exterior-paints/damp-proof-paint.jpg', specs: ['Anti-Damp: Yes', 'Coats: 2–3', 'Coverage: 60–80 sqft/L'] },
    { name: 'Elastomeric Paint', description: 'Highly flexible elastomeric coatings that bridge hairline cracks and prevent water ingress.', image: '/images/products/construction-chemicals/exterior-paints/elastomeric-paint-flexible.jpg', specs: ['Elongation: >300%', 'Crack Bridge: Up to 2mm', 'Waterproof: Yes'] },
    { name: 'Anti-Algal Paint', description: 'Exterior paints with anti-algal and anti-fungal properties for humid and tropical climates.', image: '/images/products/construction-chemicals/exterior-paints/anti-algae-exterior-paint.jpg', specs: ['Anti-Algal: Yes', 'Anti-Fungal: Yes', 'For: Tropical Climate'] },
];

export default function ExteriorPaintsPage() {
    return (
        <ProductListing title="Exterior Paints" description="Durable exterior paints and coatings engineered to withstand harsh weather, UV rays, and environmental pollution." benefits={['Weather Proof', 'UV Resistant', 'Anti-Algal', '5–10 Year Life']} products={products} categoryBackLink="/products" />
    );
}
