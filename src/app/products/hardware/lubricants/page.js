import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Brake Oil', description: 'DOT 3 and DOT 4 brake fluids for hydraulic braking systems in automotive and industrial vehicles.', image: '/images/products/hardware/lubricants/brake-oil.jpg', specs: ['Standard: DOT 3/DOT 4', 'Boiling Point: 230–260°C', 'Pack: 500ml–20L'] },
    { name: 'Engine Oil', description: 'Multi-grade engine oils for petrol, diesel, and gas engines in automotive and generator applications.', image: '/images/products/hardware/lubricants/engine-oil-synthetic.jpg', specs: ['Grade: 15W40/20W50', 'Type: Mineral/Synthetic', 'API: SN/CI-4'] },
    { name: 'Compressor Oil', description: 'Specialty compressor oils for reciprocating, rotary, and screw air compressors.', image: '/images/products/hardware/lubricants/compressor-oil.jpg', specs: ['ISO Grade: 68/100/150', 'Type: Mineral/Synthetic', 'Pack: 5L–210L'] },
    { name: 'Gear Oil', description: 'Extreme pressure gear oils for industrial gearboxes, differentials, and transmission systems.', image: '/images/products/hardware/lubricants/gear-oil-industrial.jpg', specs: ['Grade: EP 90/140/220', 'API: GL-4/GL-5', 'Pack: 1L–210L'] },
    { name: 'Hydraulic Oil', description: 'Anti-wear hydraulic oils for hydraulic power packs, presses, and mobile hydraulic equipment.', image: '/images/products/hardware/lubricants/hydraulic-oil.jpg', specs: ['ISO Grade: 32/46/68', 'Type: AW/HLP', 'Pack: 5L–210L'] },
    { name: 'Rust Oil', description: 'Rust preventive oils and coatings for metal surface protection during storage and transit.', image: '/images/products/hardware/lubricants/rust-preventive-oil-spray.jpg', specs: ['Type: Thin Film/Thick Film', 'Application: Spray/Dip', 'Duration: 6–24 Months'] },
    { name: 'Power Transmission Oil', description: 'Transformer and power transmission oils for electrical transformers and switchgear.', image: '/images/products/hardware/lubricants/power-transmission-oil.jpg', specs: ['Standard: IS 335', 'BDV: >60kV', 'Pack: 20L–210L'] },
    { name: 'Spindle Oil', description: 'Low-viscosity spindle oils for high-speed spindles, CNC machines, and textile machinery.', image: '/images/products/hardware/lubricants/spindle-oil.jpg', specs: ['ISO Grade: 10/22/32', 'Type: Mineral', 'Temp: -20 to 80°C'] },
    { name: 'Neat Oil', description: 'Neat cutting oils for heavy-duty machining, grinding, and metal cutting operations.', image: '/images/products/hardware/lubricants/neat-oil.jpg', specs: ['Type: Neat/Undiluted', 'Application: Machining', 'Viscosity: Low/Medium'] },
    { name: 'Grease', description: 'Multi-purpose and specialty greases for bearings, gears, chassis, and high-temperature applications.', image: '/images/products/hardware/lubricants/grease-nlgi-lithium.jpg', specs: ['Type: Lithium/Calcium', 'NLGI Grade: 2/3', 'Pack: 500g–180kg'] },
    { name: 'Cutting Oil', description: 'Soluble and semi-synthetic cutting fluids for turning, milling, drilling, and grinding operations.', image: '/images/products/hardware/lubricants/cutting-oil-coolant.jpg', specs: ['Type: Soluble/Semi-Synthetic', 'Dilution: 5–10%', 'Biostable: Yes'] },
    { name: 'Cleaner', description: 'Industrial degreasers, parts washers, and equipment cleaning chemicals for maintenance operations.', image: '/images/products/hardware/lubricants/cleaner.jpg', specs: ['Type: Degreaser/Solvent', 'Application: Spray/Soak', 'Biodegradable Options'] },
];

export default function LubricantsPage() {
    return (
        <ProductListing title="Lubricants" description="Complete range of industrial oils, greases, cutting fluids, and specialty lubricants for all machinery and automotive applications." benefits={['OEM Approved', 'All Grades', 'Bulk Supply', 'Technical Support']} products={products} categoryBackLink="/products" />
    );
}
