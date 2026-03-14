import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Raincoat', description: 'Waterproof raincoats for construction workers, outdoor personnel, and site supervisors.', image: '/images/products/safety/rainy-season/raincoat-pvc-heavy-duty.jpg', specs: ['Material: PVC/Polyester', 'Size: S–XXXL', 'Waterproof: 100%'] },
    { name: 'Rain Suit', description: 'Two-piece rain suits with jacket and trousers for complete rain protection during outdoor work.', image: '/images/products/safety/rainy-season/raincoat-pvc-heavy-duty.jpg', specs: ['Pieces: 2 (Jacket+Trouser)', 'Material: Nylon/PVC', 'Reflective: Optional'] },
    { name: 'Gumboot', description: 'Waterproof rubber gumboots for working in wet, muddy, and flooded conditions on sites.', image: '/images/products/safety/rainy-season/safety-gumboot-pvc-rain-boot.jpg', specs: ['Height: Ankle/Knee/Thigh', 'Material: PVC/Rubber', 'Sole: Anti-Slip'] },
    { name: 'Waterproof Bag', description: 'Waterproof tool bags and duffle bags for protecting equipment and personal items from rain damage.', image: '/images/products/safety/rainy-season/waterproof-shoe-cover-rubber.jpg', specs: ['Material: PVC/Tarpaulin', 'Capacity: 20–80L', 'Seal: Roll-Top'] },
    { name: 'Rain Cover', description: 'Waterproof rain covers for machinery, equipment, and storage areas during monsoon season.', image: '/images/products/safety/rainy-season/raincoat-pvc-heavy-duty.jpg', specs: ['Material: PE/PVC', 'Size: Custom', 'Eyelets: Reinforced'] },
    { name: 'Umbrella', description: 'Heavy-duty golf and construction umbrellas for site supervisors and security personnel.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Size: 23"–30"', 'Frame: Fiberglass', 'Wind Resistant: Yes'] },
];

export default function RainySeasonPage() {
    return (
        <ProductListing title="Rainy Season Items" description="Monsoon essentials for construction sites and outdoor workers — rainwear, gumboots, waterproof covers, and rain protection gear." benefits={['100% Waterproof', 'Durable Materials', 'All Sizes', 'Quick Delivery']} products={products} categoryBackLink="/products" />
    );
}
