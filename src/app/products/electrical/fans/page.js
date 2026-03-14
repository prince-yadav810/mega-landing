import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Industrial Exhaust Fans', description: 'High-volume exhaust fans for factories, warehouses, and industrial ventilation systems.', image: '/images/products/electrical/fans/industrial-exhaust-fan-ventilation.jpg', specs: ['Size: 9"–36"', 'Material: Metal/Plastic', 'Application: Industrial'] },
    { name: 'Ceiling Fans', description: 'Energy-efficient ceiling fans for residential, commercial, and industrial spaces with superior air delivery.', image: '/images/products/electrical/fans/ceiling-fan-residential.jpg', specs: ['Sweep: 600–1400mm', 'Speed: 3/5 Speed', 'Star Rating: Up to 5 Star'] },
    { name: 'Pedestal Fans', description: 'Adjustable height pedestal fans for offices, shops, and outdoor covered areas.', image: '/images/products/electrical/fans/pedestal-fan-standing.jpg', specs: ['Size: 16"–26"', 'Speed: 3 Speed', 'Oscillation: Yes'] },
    { name: 'Wall Mounted Fans', description: 'Space-saving wall-mounted fans for workshops, kitchens, and commercial establishments.', image: '/images/products/electrical/fans/wall-mounted-fan-industrial.jpg', specs: ['Size: 12"–24"', 'Mounting: Wall', 'Oscillation: Yes'] },
    { name: 'Air Circulator Fans', description: 'Powerful air circulator fans for improved air movement and cooling in large spaces.', image: '/images/products/electrical/fans/air-circulator-fan-drum.jpg', specs: ['Type: Drum/Blower', 'Airflow: High Volume', 'Application: Industrial'] },
    { name: 'Heavy Duty Industrial Fans', description: 'Heavy-duty man cooler and HVLS fans for maximum air circulation in factories and large facilities.', image: '/images/products/electrical/fans/heavy-duty-industrial-man-cooler-fan.jpg', specs: ['Type: Man Cooler/HVLS', 'Diameter: Up to 24ft', 'Motor: Heavy Duty'] },
];

export default function FansPage() {
    return (
        <ProductListing
            title="Fans"
            description="Complete range of industrial and commercial fans for ventilation, cooling, and air circulation. Energy-efficient products from trusted brands."
            benefits={['Energy Efficient', 'BIS Certified', 'Heavy Duty Options', 'All Sizes Available']}
            products={products}
            categoryBackLink="/products"
        />
    );
}
