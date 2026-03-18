import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Perforated Cable Trays', description: 'Perforated bottom cable trays for indoor cable routing with ventilation for heat dissipation.', image: '/images/products/electrical/cable-tray/perforated-cable-tray-gi.jpg', specs: ['Material: GI/SS', 'Width: 50–600mm', 'Finish: Hot Dip GI/Pre-GI'] },
    { name: 'Ladder Cable Trays', description: 'Heavy-duty ladder-type cable trays for large scale industrial cable management and routing.', image: '/images/products/electrical/cable-tray/ladder-type-cable-tray-heavy-duty.jpg', specs: ['Load: Heavy Duty', 'Width: 150–900mm', 'Rung Spacing: 150/300mm'] },
    { name: 'Mesh Cable Trays', description: 'Wire mesh cable trays for flexible routing in data centers, offices, and commercial buildings.', image: '/images/products/electrical/cable-tray/wire-mesh-cable-tray.jpg', specs: ['Material: SS/GI', 'Width: 50–600mm', 'Finish: Electro Zinc'] },
    { name: 'Solid Bottom Cable Trays', description: 'Enclosed solid bottom trays for sensitive cable protection in industrial and hazardous environments.', image: '/images/products/electrical/cable-tray/solid-bottom-cable-trays.jpg', specs: ['Material: GI/SS/Aluminum', 'Width: 50–600mm', 'Cover: Optional'] },
    { name: 'Channel Cable Trays', description: 'Compact channel-type cable trays for small cable runs and individual circuit routing.', image: '/images/products/electrical/cable-tray/channel-cable-tray-slotted.jpg', specs: ['Width: 25–100mm', 'Material: GI/SS', 'Type: Slotted/Plain'] },
    { name: 'Cable Tray Accessories', description: 'Complete range of cable tray fittings including bends, tees, reducers, couplers, and supports.', image: '/images/products/electrical/cable-tray/cable-tray-accessories.jpg', specs: ['Types: Bend/Tee/Cross', 'Material: GI/SS', 'Standard: IS 16295'] },
];

export default function CableTrayPage() {
    return (
        <ProductListing
            title="Cable Tray"
            description="Industrial cable tray systems for organized and safe cable routing in factories, buildings, and infrastructure projects. Available in all materials and finishes."
            benefits={['All Materials', 'Custom Sizes', 'IS Certified', 'Fire Rated Options']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
