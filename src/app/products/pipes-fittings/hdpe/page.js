import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'PE-80 Pipes', description: 'PE-80 grade HDPE pipes for water supply and low-pressure gas distribution.', image: '/images/products/pipes-fittings/hdpe/hdpe-coil-pipe-irrigation.jpg', specs: ['Grade: PE-80', 'Size: 20–315mm', 'Pressure: 6–12.5 bar'] },
    { name: 'PE-100 Pipes', description: 'PE-100 grade HDPE pipes for high-pressure water mains and gas pipelines.', image: '/images/products/pipes-fittings/hdpe/hdpe-pipe-pe100-water-supply.jpg', specs: ['Grade: PE-100', 'Size: 20–1200mm', 'Pressure: 6–16 bar'] },
    { name: 'HDPE Elbow', description: 'HDPE butt-fusion and electrofusion elbow fittings for direction changes in PE pipe systems.', image: '/images/products/pipes-fittings/hdpe/hdpe-elbow-fitting-butt-weld.jpg', specs: ['Angle: 45°/90°', 'Size: 20–630mm', 'Joint: Butt Fusion'] },
    { name: 'HDPE Tee', description: 'HDPE tee fittings for branching connections in water and gas distribution networks.', image: '/images/products/pipes-fittings/hdpe/hdpe-tee-fitting-electrofusion.jpg', specs: ['Type: Equal/Reducing', 'Size: 20–630mm', 'Joint: Butt/Electrofusion'] },
    { name: 'HDPE Coupler', description: 'HDPE coupler fittings for joining PE pipe sections through butt fusion or electrofusion.', image: '/images/products/pipes-fittings/hdpe/hdpe-coupler-fitting.jpg', specs: ['Type: Butt/Electrofusion', 'Size: 20–630mm', 'Leak-Proof: Yes'] },
    { name: 'Electrofusion Fittings', description: 'Electrofusion fittings with embedded heating elements for reliable PE pipe jointing.', image: '/images/products/pipes-fittings/hdpe/hdpe-tee-fitting-electrofusion.jpg', specs: ['Type: Coupler/Tee/Elbow', 'Size: 20–315mm', 'Barcode: Scannable'] },
];

export default function HDPEPage() {
    return (
        <ProductListing title="HDPE Pipes & Fittings" description="High-density polyethylene pipes and fittings for water supply, gas distribution, and industrial fluid transport." benefits={['Flexible & Tough', 'Leak-Free Joints', 'Corrosion Free', '50+ Year Life']} products={products} categoryBackLink="/products" />
    );
}
