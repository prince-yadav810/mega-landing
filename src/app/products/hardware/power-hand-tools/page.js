import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Angle Grinder', description: 'Heavy-duty angle grinders for cutting, grinding, and polishing metal, stone, and concrete surfaces.', image: '/images/products/hardware/power-hand-tools/angle-grinder-power-tool.jpg', specs: ['Disc: 4"–9"', 'Power: 720W–2400W', 'RPM: 8000–12000'] },
    { name: 'Drill Machine', description: 'Electric drills and hammer drills for drilling holes in wood, metal, concrete, and masonry.', image: '/images/products/hardware/power-hand-tools/electric-drill-machine.jpg', specs: ['Chuck: 10mm/13mm', 'Power: 350W–1100W', 'Type: Rotary/Impact'] },
    { name: 'Impact Wrench', description: 'Pneumatic and electric impact wrenches for heavy-duty bolting and automotive applications.', image: '/images/products/hardware/power-hand-tools/impact-wrench-pneumatic.jpg', specs: ['Drive: 1/2"–1"', 'Torque: Up to 2000 Nm', 'Type: Electric/Pneumatic'] },
    { name: 'Hammer Drill', description: 'Rotary hammer drills for drilling in concrete, brick, and stone with SDS-plus and SDS-max chucks.', image: '/images/products/hardware/power-hand-tools/hammer-drill-sds.jpg', specs: ['Power: 620W–1500W', 'Impact: 2–12 Joules', 'Chuck: SDS-Plus/Max'] },
    { name: 'Jigsaw', description: 'Variable-speed jigsaw for precise cutting of wood, metal, and plastic sheets.', image: '/images/products/hardware/power-hand-tools/jigsaw-power-tool.jpg', specs: ['Strokes: 500–3100/min', 'Cut Depth: Wood 65mm', 'Power: 450W–800W'] },
    { name: 'Circular Saw', description: 'Portable circular saws for straight cutting of wood, plywood, and composite board materials.', image: '/images/products/hardware/power-hand-tools/circular-saw-power-tool.jpg', specs: ['Blade: 7"–10"', 'Power: 1200W–2200W', 'Cut Depth: 55–90mm'] },
    { name: 'Pliers Set', description: 'Complete set of pliers including combination, long nose, side cutter, and water pump pliers.', image: '/images/products/hardware/power-hand-tools/allen-key-hex-set.jpg', specs: ['Set: 5–8 Pcs', 'Material: CrV Steel', 'Insulated Options'] },
    { name: 'Screwdrivers', description: 'Professional screwdriver sets in flat, Phillips, Torx, and insulated variants for electrical work.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Set: 6–12 Pcs', 'Type: Flat/Phillips/Torx', 'Insulated: VDE 1000V'] },
    { name: 'Spanners & Wrenches', description: 'Ring spanners, combination spanners, adjustable wrenches, and socket sets for mechanical work.', image: '/images/products/hardware/power-hand-tools/combination-spanner-set.jpg', specs: ['Size: 6–36mm', 'Material: CrV Steel', 'Type: Ring/Open/Combo'] },
    { name: 'Hammers', description: 'Ball peen, claw, sledge, and rubber hammers for construction, carpentry, and metalwork.', image: '/images/products/hardware/power-hand-tools/hammer-drill-sds.jpg', specs: ['Weight: 200g–5kg', 'Handle: Fiberglass/Wood', 'Type: Ball/Claw/Sledge'] },
    { name: 'Chisels', description: 'Cold chisels, wood chisels, and masonry chisels for cutting, carving, and demolition work.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Material: Chrome Steel', 'Width: 12–25mm', 'Type: Cold/Wood/Masonry'] },
    { name: 'Measuring Tools', description: 'Tape measures, spirit levels, calipers, and laser distance meters for precise measurement.', image: '/images/products/hardware/power-hand-tools/circular-saw-power-tool.jpg', specs: ['Type: Tape/Level/Laser', 'Range: Various', 'Accuracy: ±1mm'] },
];

export default function PowerHandToolsPage() {
    return (
        <ProductListing
            title="Power Tools & Hand Tools"
            description="Professional-grade power tools and hand tools for construction, maintenance, and industrial applications. Quality tools from leading brands."
            benefits={['Premium Brands', 'Warranty Available', 'Accessories Included', 'Bulk Discounts']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
