import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'HDPE Tarpaulin', description: 'High-density polyethylene tarpaulins for covering construction materials, trucks, and outdoor storage.', image: '/images/products/hardware/tarpaulin/hdpe-tarpaulin-blue.jpg', specs: ['GSM: 70–200', 'Size: Custom', 'UV Stabilized: Yes'] },
    { name: 'PVC Tarpaulin', description: 'Heavy-duty PVC coated tarpaulins for truck covers, industrial roofing, and waterproof applications.', image: '/images/products/hardware/tarpaulin/pvc-coated-tarpaulin-waterproof.jpg', specs: ['GSM: 400–900', 'Waterproof: 100%', 'Strength: High Tear'] },
    { name: 'Canvas Tarpaulin', description: 'Traditional canvas tarpaulins for breathable covering and general-purpose protection applications.', image: '/images/products/hardware/tarpaulin/canvas-tarpaulin-heavy-duty.jpg', specs: ['Material: Cotton Canvas', 'Weight: 8–16 oz', 'Treatment: Water Repellent'] },
    { name: 'Silpaulin', description: 'Cross-laminated silpaulin sheets for temporary shelters, rain protection, and agricultural use.', image: '/images/products/hardware/tarpaulin/silpaulin-tarpaulin-cross-laminated.jpg', specs: ['GSM: 90–200', 'Layer: Cross Laminated', 'Color: Blue/Green/White'] },
    { name: 'Cross Laminated Tarpaulin', description: 'High-strength cross-laminated tarpaulins for demanding industrial and construction applications.', image: '/images/products/hardware/tarpaulin/silpaulin-tarpaulin-cross-laminated.jpg', specs: ['GSM: 120–200', 'Reinforced: Yes', 'Eyelet: Aluminum'] },
    { name: 'Waterproof Tarpaulin', description: 'Fully waterproof tarpaulins for monsoon protection, pond lining, and water containment applications.', image: '/images/products/hardware/tarpaulin/pvc-coated-tarpaulin-waterproof.jpg', specs: ['Material: PE/PVC', 'Waterproof: 100%', 'Custom Sizes Available'] },
];

export default function TarpaulinPage() {
    return (
        <ProductListing title="Tarpaulin (All Types)" description="Complete range of tarpaulins for construction, industrial, agricultural, and general-purpose covering and protection needs." benefits={['All Materials', 'Custom Sizes', 'UV Resistant', 'Quick Delivery']} products={products} categoryBackLink="/products" />
    );
}
