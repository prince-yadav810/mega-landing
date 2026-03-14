import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Aluminum Armored Cable', description: 'Heavy-duty aluminum armored cables for underground and direct burial applications with excellent corrosion resistance.', image: '/images/products/electrical/wires-cables/aluminum-armored-cable.jpg', specs: ['Voltage: Up to 33kV', 'Armor: Aluminum Strip', 'Application: Underground'] },
    { name: 'House Wires', description: 'PVC insulated copper house wiring for residential and commercial electrical installations.', image: '/images/products/electrical/wires-cables/house-wires.jpg', specs: ['Conductor: Copper', 'Insulation: PVC', 'Sizes: 0.75–6 sq mm'] },
    { name: 'Multicore Flexible Cables', description: 'Multi-strand flexible cables for industrial machinery, control panels, and moving equipment connections.', image: '/images/products/electrical/wires-cables/multicore-flexible-cables.jpg', specs: ['Cores: 2–37', 'Conductor: Flexible Copper', 'Application: Industrial'] },
    { name: 'High Tension Cables', description: 'High voltage power cables rated for transmission and distribution networks with XLPE or PVC insulation.', image: '/images/products/electrical/wires-cables/high-tension-cables.jpg', specs: ['Voltage: 11kV–33kV', 'Insulation: XLPE', 'Standard: IS 7098'] },
    { name: 'CCTV Cables', description: 'Coaxial and composite cables specifically designed for CCTV surveillance camera installations.', image: '/images/products/electrical/wires-cables/cctv-cables.jpg', specs: ['Type: 3+1 / 4+1', 'Core: Copper', 'Shielding: Braided'] },
    { name: 'Coaxial Cables', description: 'Low-loss coaxial cables for signal transmission in television, internet, and communication systems.', image: '/images/products/electrical/wires-cables/coaxial-cables.jpg', specs: ['Impedance: 50/75 Ohm', 'Type: RG-6/RG-59', 'Shielding: Double'] },
    { name: 'Copper Armoured Cable', description: 'Steel wire armored copper cables for power distribution in harsh environments and underground installations.', image: '/images/products/electrical/wires-cables/copper-armoured-cable.jpg', specs: ['Conductor: Copper', 'Armor: Steel Wire', 'Voltage: Up to 33kV'] },
    { name: 'Fiber Optical Cable', description: 'High-speed fiber optic cables for data communication, telecom networks, and internet backbone.', image: '/images/products/electrical/wires-cables/fiber-optical-cable.jpg', specs: ['Type: Single/Multi Mode', 'Core Count: 2–288', 'Application: Telecom'] },
    { name: 'JFTC Cables', description: 'Jelly-filled telephone cables for outdoor telecommunication lines with moisture protection.', image: '/images/products/electrical/wires-cables/jftc-cables.jpg', specs: ['Pairs: 2–100', 'Fill: Petroleum Jelly', 'Application: Telecom'] },
    { name: 'LAN Cables', description: 'Category 5e/6/6a Ethernet cables for local area networks and structured cabling.', image: '/images/products/electrical/wires-cables/lan-cables.jpg', specs: ['Category: Cat5e/Cat6/Cat6a', 'Speed: 1–10 Gbps', 'Length: Up to 305m'] },
    { name: 'Single Core Flexible Cables', description: 'Single conductor flexible cables for panel wiring, internal connections, and appliance wiring.', image: '/images/products/electrical/wires-cables/single-core-flexible-cables.jpg', specs: ['Core: 1', 'Conductor: Flexible Copper', 'Sizes: 0.5–400 sq mm'] },
    { name: 'Speaker Cables', description: 'Oxygen-free copper speaker cables for audio systems, PA systems, and sound installations.', image: '/images/products/electrical/wires-cables/speaker-cables.jpg', specs: ['Conductor: OFC', 'Gauge: 14–18 AWG', 'Application: Audio'] },
    { name: 'Submersible Cables', description: 'Water-resistant cables designed for submersible pumps and underwater electrical connections.', image: '/images/products/electrical/wires-cables/submersible-cables.jpg', specs: ['Rating: Up to 1.1kV', 'Cores: 3–4', 'Insulation: XLPE/PVC'] },
    { name: 'Telephone Switchboard Cables', description: 'Multi-pair cables for EPABX systems, telephone switchboards, and internal communication.', image: '/images/products/electrical/wires-cables/telephone-switchboard-cables.jpg', specs: ['Pairs: 2–50', 'Conductor: Copper', 'Application: EPABX'] },
    { name: 'Winding Wires', description: 'Enameled copper and aluminum winding wires for motors, transformers, and coils.', image: '/images/products/electrical/wires-cables/winding-wires.jpg', specs: ['Material: Copper/Aluminum', 'Insulation: Enamel', 'Grade: H/F'] },
    { name: 'Braided Cables', description: 'Tinned copper braided shielded cables for EMI/RFI protection in sensitive equipment.', image: '/images/products/electrical/wires-cables/braided-cables.jpg', specs: ['Shielding: Braided Copper', 'Coverage: 85–95%', 'Application: Industrial'] },
    { name: 'Fire Survival Cable', description: 'Fire-resistant cables that maintain circuit integrity during fire for emergency systems and alarms.', image: '/images/products/electrical/wires-cables/fire-survival-cable.jpg', specs: ['Rating: 2 hrs at 950°C', 'Standard: IEC 60331', 'Application: Fire Alarm'] },
    { name: 'Welding Cables', description: 'Highly flexible rubber-insulated cables for arc welding machines and heavy-duty welding applications.', image: '/images/products/electrical/wires-cables/welding-cables.jpg', specs: ['Insulation: Rubber', 'Conductor: Fine Stranded', 'Sizes: 16–120 sq mm'] },
    { name: 'Solar DC Cables', description: 'UV-resistant DC cables for solar panel interconnection and photovoltaic system wiring.', image: '/images/products/electrical/wires-cables/solar-dc-cables.jpg', specs: ['Voltage: 1.8kV DC', 'UV Resistant: Yes', 'Standard: EN 50618'] },
];

export default function WiresCablesPage() {
    return (
        <ProductListing
            title="Wires & Cables"
            description="Complete range of electrical wires and cables for residential, commercial, industrial, and telecom applications. Quality products from leading manufacturers."
            benefits={['ISI Certified', 'Fire Retardant Options', 'Custom Lengths Available', 'All Voltage Ratings']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
