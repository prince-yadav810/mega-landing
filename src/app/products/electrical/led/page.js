import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'LED Panel Lights', description: 'Slim and energy-efficient LED panel lights for offices, hospitals, and commercial spaces with uniform light distribution.', image: '/images/products/electrical/led/led-panel-light-office.jpg', specs: ['Wattage: 6W–72W', 'Shape: Round/Square', 'Type: Surface/Recessed'] },
    { name: 'LED Tube Lights', description: 'T5 and T8 LED tube lights for replacing fluorescent tubes in offices, factories, and retail spaces.', image: '/images/products/electrical/led/led-tube-light-t8.jpg', specs: ['Length: 2ft/4ft', 'Wattage: 9W–36W', 'Type: T5/T8'] },
    { name: 'LED Bulbs', description: 'High-lumen LED bulbs for residential and commercial lighting with long lifespan and energy savings.', image: '/images/products/electrical/led/led-bulbs.jpg', specs: ['Wattage: 5W–50W', 'Base: B22/E27', 'Lumens: Up to 4500'] },
    { name: 'LED Flood Lights', description: 'High-power LED flood lights for outdoor lighting, sports grounds, building facades, and security.', image: '/images/products/electrical/led/led-flood-light-outdoor.jpg', specs: ['Wattage: 10W–500W', 'IP Rating: IP65/IP66', 'Beam: Wide Angle'] },
    { name: 'LED Street Lights', description: 'Street and area LED lights for roads, highways, parking lots, and public spaces with photocell options.', image: '/images/products/electrical/led/led-street-light-pole-mounted.jpg', specs: ['Wattage: 20W–250W', 'IP Rating: IP65', 'Mounting: Pole/Arm'] },
    { name: 'LED Highbay Lights', description: 'Industrial LED highbay lights for warehouses, factories, and large indoor spaces with high ceilings.', image: '/images/products/electrical/led/led-highbay-lights.jpg', specs: ['Wattage: 50W–500W', 'Height: 6m–15m', 'Beam: 60°/90°/120°'] },
    { name: 'LED Downlights', description: 'Recessed LED downlights for ceilings in homes, offices, hotels, and retail spaces.', image: '/images/products/electrical/led/led-downlight-recessed-ceiling.jpg', specs: ['Wattage: 3W–30W', 'Cut-out: 50–200mm', 'Type: Fixed/Adjustable'] },
    { name: 'LED Strip Lights', description: 'Flexible LED strip lights for decorative, accent, and task lighting in interiors and exteriors.', image: '/images/products/electrical/led/led-strip-light-rgb-flexible.jpg', specs: ['Type: SMD 2835/5050', 'Color: RGB/WW/CW', 'IP Rating: IP20/IP65'] },
    { name: 'LED Batten Lights', description: 'Surface-mounted LED batten lights for corridors, garages, basements, and utility areas.', image: '/images/products/electrical/led/led-batten-lights.jpg', specs: ['Length: 2ft/4ft', 'Wattage: 10W–40W', 'Type: Surface Mount'] },
    { name: 'LED Spotlights', description: 'Directional LED spotlights for accent lighting in retail displays, galleries, and hospitality spaces.', image: '/images/products/electrical/led/led-spotlight-track.jpg', specs: ['Wattage: 3W–30W', 'Beam: 15°–60°', 'Track/Surface Mount'] },
    { name: 'Emergency LED Lights', description: 'Battery-backed emergency LED lights and exit signs for safety compliance and power outage situations.', image: '/images/products/electrical/led/emergency-led-light-battery-backup.jpg', specs: ['Backup: 2–4 hours', 'Battery: Li-ion/Ni-Cd', 'Certification: IS 10360'] },
    { name: 'Solar LED Lights', description: 'Solar-powered LED lights for gardens, pathways, streets, and remote areas without grid electricity.', image: '/images/products/electrical/led/solar-led-street-light.jpg', specs: ['Panel: Integrated/Separate', 'Battery: Li-ion', 'Auto On/Off: Yes'] },
    { name: 'Surface Mounted LED Lights', description: 'Versatile surface-mounted LED fixtures for rooms with concrete ceilings or no false ceiling.', image: '/images/products/electrical/led/surface-mounted-led-ceiling-light.jpg', specs: ['Shape: Round/Square', 'Wattage: 6W–24W', 'Mounting: Surface'] },
    { name: 'LED Ceiling Lights', description: 'Decorative LED ceiling lights and chandeliers for living rooms, lobbies, and architectural spaces.', image: '/images/products/electrical/led/led-ceiling-light-decorative.jpg', specs: ['Type: Flush/Semi-Flush', 'Dimmable: Optional', 'Color Temp: 3000–6500K'] },
    { name: 'Industrial LED Lights', description: 'Rugged industrial LED luminaires for harsh environments, chemical plants, and heavy industry.', image: '/images/products/electrical/led/industrial-led-light-fixture.jpg', specs: ['IP Rating: IP65/IP66', 'IK Rating: IK08', 'Temp Range: -20 to 60°C'] },
    { name: 'Signal Tower Lights', description: 'Multi-color LED signal tower lights for machine status indication in factories and assembly lines.', image: '/images/products/electrical/led/signal-tower-light-indicator.jpg', specs: ['Colors: R/Y/G/B/W', 'Layers: 1–5', 'Type: Steady/Flashing/Buzzer'] },
    { name: 'Explosion Proof LED Lights', description: 'ATEX/IECEx certified LED lights for Zone 1 and Zone 2 hazardous areas in oil, gas, and chemical plants.', image: '/images/products/electrical/led/explosion-proof-led-light-hazardous.jpg', specs: ['Zone: 1/2/21/22', 'Certification: ATEX/IECEx', 'Material: Die-cast Aluminum'] },
    { name: 'Clean Room LED Lights', description: 'Dust-free clean room LED panel lights for pharmaceutical, semiconductor, and food processing facilities.', image: '/images/products/electrical/led/clean-room-led-panel-light.jpg', specs: ['Class: ISO 5–8', 'Sealed: Yes', 'IP Rating: IP54/IP65'] },
    { name: 'Flame Proof LED Lights', description: 'Flameproof LED fittings for mining, refineries, and locations with flammable gases or vapors.', image: '/images/products/electrical/led/flame-proof-led-lights.jpg', specs: ['Type: FLP', 'Gas Group: IIA/IIB/IIC', 'Material: Aluminum Alloy'] },
    { name: 'LED Wall Lights', description: 'Decorative and functional LED wall lights for corridors, staircases, and outdoor facades.', image: '/images/products/electrical/led/led-wall-lights.jpg', specs: ['Wattage: 3W–20W', 'Direction: Up/Down/Both', 'IP Rating: IP44/IP65'] },
];

export default function LEDPage() {
    return (
        <ProductListing
            title="LED"
            description="Complete range of LED lighting solutions for residential, commercial, industrial, and outdoor applications. Energy-efficient, long-lasting products from leading manufacturers."
            benefits={['Energy Efficient', 'BIS/BEE Certified', '50,000+ Hour Lifespan', 'All Color Temperatures']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
