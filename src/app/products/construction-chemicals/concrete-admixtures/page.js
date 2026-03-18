import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Plasticizers', description: 'Water-reducing plasticizers for improving workability of concrete without adding excess water.', image: '/images/products/construction-chemicals/concrete-admixtures/plasticizer-concrete-admixture.jpg', specs: ['Reduction: 5–15%', 'Dosage: 200–400 ml/bag', 'Standard: IS 9103'] },
    { name: 'Superplasticizers', description: 'High-range water reducers for producing high-strength and self-compacting concrete mixes.', image: '/images/products/construction-chemicals/concrete-admixtures/superplasticizer-pce-admixture.jpg', specs: ['Reduction: 15–30%', 'Type: PCE/SNF', 'For: High Strength Concrete'] },
    { name: 'Retarders', description: 'Set retarding admixtures for extending concrete setting time in hot weather and long transit conditions.', image: '/images/products/construction-chemicals/concrete-admixtures/retarder-concrete-admixture.jpg', specs: ['Retardation: 2–6 Hours', 'Dosage: 200–500 ml/bag', 'For: Hot Weather'] },
    { name: 'Accelerators', description: 'Set accelerating admixtures for fast-track construction, cold weather concreting, and early strength gain.', image: '/images/products/construction-chemicals/concrete-admixtures/accelerator-concrete-admixture.jpg', specs: ['Acceleration: 30–70%', 'Chloride Free: Yes', 'For: Cold Weather'] },
    { name: 'Air Entraining Agents', description: 'Air entraining admixtures for improving freeze-thaw resistance and workability of concrete.', image: '/images/products/construction-chemicals/concrete-admixtures/air-entraining-agent-concrete.jpg', specs: ['Air Content: 4–6%', 'Dosage: 50–200 ml/bag', 'For: Frost Resistance'] },
    { name: 'Waterproofing Admixtures', description: 'Integral waterproofing admixtures mixed into concrete to make it water-impermeable from within.', image: '/images/products/construction-chemicals/concrete-admixtures/waterproofing-admixtures.jpg', specs: ['Type: Crystalline/Pore Blocking', 'Dosage: 1–2% by cement', 'Permanent Protection'] },
];

export default function ConcreteAdmixturesPage() {
    return (
        <ProductListing title="Concrete Admixtures" description="Chemical admixtures for enhancing concrete performance — workability, strength, durability, and setting characteristics." benefits={['IS 9103 Compliant', 'All Concrete Grades', 'Technical Guidance', 'Bulk Supply']} products={products} categoryBackLink="/products" />
    );
}
