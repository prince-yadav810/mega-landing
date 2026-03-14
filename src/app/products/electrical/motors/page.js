import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Electrical Motors', description: 'General-purpose electric motors for a wide range of industrial, commercial, and agricultural applications.', image: '/images/products/electrical/motors/ac-motor-three-phase.jpg', specs: ['Power: 0.18kW–375kW', 'Frame: 63–355', 'Efficiency: IE2/IE3'] },
    { name: 'AC Motors', description: 'Three-phase and single-phase AC motors for pumps, compressors, fans, and conveyors.', image: '/images/products/electrical/motors/ac-motor-three-phase.jpg', specs: ['Phase: 1Ø/3Ø', 'Speed: 750–3000 RPM', 'Voltage: 230V/415V'] },
    { name: 'Induction Motors', description: 'Squirrel cage induction motors with robust construction for continuous duty industrial applications.', image: '/images/products/electrical/motors/squirrel-cage-induction-motor.jpg', specs: ['Type: Squirrel Cage', 'Duty: S1 Continuous', 'Enclosure: TEFC'] },
    { name: 'Servo Motors', description: 'High-precision servo motors for CNC machines, robotics, and high-accuracy positioning applications.', image: '/images/products/electrical/motors/servo-motor-industrial.jpg', specs: ['Torque: 0.3–200 Nm', 'Encoder: Absolute/Incremental', 'Speed: Up to 6000 RPM'] },
    { name: 'Submersible Pumps', description: 'Borewell and openwell submersible pumps for groundwater extraction and water supply systems.', image: '/images/products/electrical/motors/submersible-pump-borewell.jpg', specs: ['Power: 0.5–100 HP', 'Head: Up to 500m', 'Type: Borewell/Openwell'] },
    { name: 'Centrifugal Pumps', description: 'End-suction and multi-stage centrifugal pumps for water transfer, boosting, and industrial processes.', image: '/images/products/electrical/motors/centrifugal-pump-industrial.jpg', specs: ['Flow: Up to 500 m³/hr', 'Head: Up to 150m', 'Type: End Suction/Multi-Stage'] },
    { name: 'Monoblock Pumps', description: 'Self-priming and non-self-priming monoblock pumps for domestic and agricultural water supply.', image: '/images/products/electrical/motors/monoblock-pump-water.jpg', specs: ['Power: 0.5–10 HP', 'Type: Self-Priming/Non-SP', 'Head: Up to 60m'] },
    { name: 'Booster Pumps', description: 'Pressure booster pump sets for buildings, apartments, and commercial complexes requiring consistent water pressure.', image: '/images/products/electrical/motors/pressure-booster-pump.jpg', specs: ['Stages: 2–8', 'Pressure: Up to 10 bar', 'Control: VFD/Pressure Switch'] },
    { name: 'Sewage & Dewatering Pumps', description: 'Heavy-duty sewage submersible and dewatering pumps for construction sites and wastewater handling.', image: '/images/products/electrical/motors/sewage-submersible-pump-dewatering.jpg', specs: ['Power: 1–50 HP', 'Solids: Up to 80mm', 'Type: Non-Clog/Cutter'] },
    { name: 'Dosing Pumps', description: 'Chemical dosing pumps for precise metering of chemicals in water treatment and industrial processes.', image: '/images/products/electrical/motors/chemical-dosing-pump-metering.jpg', specs: ['Flow: 0.5–500 LPH', 'Type: Diaphragm/Piston', 'Control: Manual/Auto'] },
];

export default function MotorsPumpsPage() {
    return (
        <ProductListing
            title="Motors & Pumps"
            description="High-performance electric motors and pumps for industrial, commercial, agricultural, and domestic applications. Reliable and energy-efficient products from trusted manufacturers."
            benefits={['Energy Efficient', 'ISI Certified', 'Long Service Life', 'All Power Ranges']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
