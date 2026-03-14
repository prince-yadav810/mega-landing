import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Copper Tubular Lugs', description: 'Tinned and untinned copper tubular lugs for secure cable termination in panels and switchgear.', image: '/images/products/electrical/lugs-glands/copper-tubular-cable-lug.jpg', specs: ['Material: Copper', 'Size: 1.5–630 sq mm', 'Type: Tubular'] },
    { name: 'Aluminum Lugs', description: 'Aluminum cable lugs for terminating aluminum conductors in power distribution systems.', image: '/images/products/electrical/lugs-glands/aluminum-cable-lug-crimping.jpg', specs: ['Material: Aluminum', 'Size: 16–630 sq mm', 'Type: Ring/Fork'] },
    { name: 'Bimetallic Lugs', description: 'Copper-aluminum bimetallic lugs for connecting aluminum cables to copper bus bars without corrosion.', image: '/images/products/electrical/lugs-glands/bimetallic-cable-lug-copper-aluminum.jpg', specs: ['Material: Cu-Al Bimetal', 'Size: 16–630 sq mm', 'Anti-Corrosion'] },
    { name: 'Ring Lugs', description: 'Ring-type cable lugs for bolt-through connections in panels, motors, and terminal blocks.', image: '/images/products/electrical/lugs-glands/ring-terminal-lug-insulated.jpg', specs: ['Type: Ring', 'Hole: M5–M16', 'Insulated Options'] },
    { name: 'Pin & Fork Lugs', description: 'Pin-type and fork-type lugs for quick-connect terminal block and relay connections.', image: '/images/products/electrical/lugs-glands/pin-terminal-fork-lug.jpg', specs: ['Type: Pin/Fork', 'Size: 0.5–6 sq mm', 'Insulated: Yes'] },
    { name: 'Bootlace Ferrules', description: 'Insulated bootlace ferrules for crimping fine-stranded wires before inserting into terminals.', image: '/images/products/electrical/lugs-glands/bootlace-ferrule-insulated.jpg', specs: ['Size: 0.25–50 sq mm', 'Insulated: Color Coded', 'Twin: Available'] },
    { name: 'Brass Cable Glands', description: 'IP68 rated brass cable glands for weatherproof cable entry into panels, junction boxes, and enclosures.', image: '/images/products/electrical/lugs-glands/brass-cable-gland-ip68.jpg', specs: ['Material: Brass/Nickel Plated', 'Thread: PG/Metric', 'IP Rating: IP68'] },
    { name: 'Single Compression Glands', description: 'Single compression cable glands for indoor use with armored and unarmored cables.', image: '/images/products/electrical/lugs-glands/single-compression-cable-gland.jpg', specs: ['Type: Single Compression', 'Cable: Armored/Unarmored', 'Material: Brass'] },
    { name: 'Double Compression Glands', description: 'Double compression cable glands for outdoor and hazardous area applications with superior sealing.', image: '/images/products/electrical/lugs-glands/double-compression-cable-gland-weatherproof.jpg', specs: ['Type: Double Compression', 'IP Rating: IP68', 'Weatherproof: Yes'] },
    { name: 'Flameproof Cable Glands', description: 'Explosion-proof cable glands certified for use in Zone 1 and Zone 2 hazardous environments.', image: '/images/products/electrical/lugs-glands/flameproof-cable-gland-explosion-proof.jpg', specs: ['Certification: ATEX/IECEx', 'Zone: 1 & 2', 'Material: Brass/SS'] },
    { name: 'PG & Metric Glands', description: 'Standard PG and metric thread cable glands for European specification panels and enclosures.', image: '/images/products/electrical/lugs-glands/pg-metric-thread-cable-gland.jpg', specs: ['Thread: PG7–PG48 / M12–M63', 'Material: Nylon/Brass', 'IP Rating: IP68'] },
    { name: 'Nylon Cable Glands', description: 'Corrosion-free nylon cable glands for lightweight and chemical-resistant cable entry solutions.', image: '/images/products/electrical/lugs-glands/nylon-cable-gland-pa66.jpg', specs: ['Material: PA66 Nylon', 'UV Resistant: Yes', 'Temp: -40 to 100°C'] },
];

export default function LugsGlandsPage() {
    return (
        <ProductListing
            title="Lugs & Glands"
            description="Complete range of cable lugs and cable glands for secure cable termination, panel entry, and weatherproof connections in all types of electrical installations."
            benefits={['All Sizes Available', 'IP68 Rated Options', 'BIS/ATEX Certified', 'Bulk Pricing']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
