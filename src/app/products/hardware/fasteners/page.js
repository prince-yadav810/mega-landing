import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Hex Bolts', description: 'High-tensile hexagonal bolts in various grades for structural connections and mechanical assemblies.', image: '/images/products/hardware/fasteners/hex-bolt-steel-grade.jpg', specs: ['Grade: 4.6/8.8/10.9', 'Size: M6–M36', 'Material: MS/SS'] },
    { name: 'Carriage Bolts', description: 'Round-head carriage bolts with square neck for wood-to-metal and wood-to-wood fastening.', image: '/images/products/hardware/fasteners/carriage-bolts.jpg', specs: ['Grade: 4.6/8.8', 'Size: M6–M20', 'Head: Round/Dome'] },
    { name: 'U-Bolts', description: 'U-shaped bolts for clamping pipes, conduits, and round sections to flat surfaces.', image: '/images/products/hardware/fasteners/u-bolts.jpg', specs: ['Pipe Size: 15–200mm', 'Material: MS/GI/SS', 'Thread: Full/Partial'] },
    { name: 'Anchor Bolts', description: 'Foundation anchor bolts for securing structural columns, machinery, and equipment to concrete.', image: '/images/products/hardware/fasteners/anchor-bolts.jpg', specs: ['Type: J/L/Wedge', 'Size: M10–M36', 'Embed Length: Custom'] },
    { name: 'Hex Nuts', description: 'Standard hexagonal nuts in various grades for bolted connections and fastening assemblies.', image: '/images/products/hardware/fasteners/hex-nut-zinc-plated.jpg', specs: ['Grade: 4/8/10', 'Size: M4–M36', 'Material: MS/SS'] },
    { name: 'Lock Nuts', description: 'Self-locking and nylon-insert lock nuts for vibration-resistant fastening in machinery.', image: '/images/products/hardware/fasteners/lock-nuts.jpg', specs: ['Type: Nylon Insert/Prevailing', 'Size: M4–M30', 'Anti-Vibration'] },
    { name: 'Flat Washers', description: 'Plain flat washers for load distribution and surface protection under bolt heads and nuts.', image: '/images/products/hardware/fasteners/spring-washer-flat-washer.jpg', specs: ['Material: MS/SS/Brass', 'Size: M4–M36', 'Standard: DIN 125'] },
    { name: 'Spring Washers', description: 'Split spring washers for preventing loosening of bolted joints due to vibration.', image: '/images/products/hardware/fasteners/spring-washers.jpg', specs: ['Material: Spring Steel', 'Size: M4–M36', 'Finish: Zinc Plated'] },
    { name: 'Self-Tapping Screws', description: 'Self-tapping and self-drilling screws for fastening sheet metal, roofing, and cladding.', image: '/images/products/hardware/fasteners/self-tapping-screws.jpg', specs: ['Point: Self-Drill/Sharp', 'Head: Hex/Pan/CSK', 'Size: #6–#14'] },
    { name: 'Machine Screws', description: 'Precision machine screws for assembling equipment, panels, and mechanical components.', image: '/images/products/hardware/fasteners/machine-screws.jpg', specs: ['Head: Pan/CSK/Cheese', 'Drive: Phillips/Slotted', 'Size: M3–M12'] },
    { name: 'Rivets', description: 'Pop rivets, solid rivets, and blind rivets for permanent fastening of sheet metal and fabrication.', image: '/images/products/hardware/fasteners/rivets.jpg', specs: ['Type: Pop/Solid/Blind', 'Material: Aluminum/Steel', 'Size: 3.2–6.4mm'] },
    { name: 'Threaded Rods', description: 'Full-thread and partially-threaded rods for structural anchoring and suspension systems.', image: '/images/products/hardware/fasteners/threaded-rod-studding.jpg', specs: ['Grade: 4.6/8.8', 'Size: M6–M36', 'Length: 1m/2m/3m'] },
];

export default function FastenersPage() {
    return (
        <ProductListing title="Nuts, Bolts & Fasteners (All Types)" description="Complete range of fasteners including bolts, nuts, screws, washers, and rivets for construction, industrial, and mechanical applications." benefits={['All Grades Available', 'ISI Standards', 'Bulk Pricing', 'Quick Delivery']} products={products} categoryBackLink="/products" />
    );
}
