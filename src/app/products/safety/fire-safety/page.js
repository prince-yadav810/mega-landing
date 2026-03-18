import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Fire Extinguisher', description: 'ABC dry powder, CO2, foam, and clean agent fire extinguishers for all fire classes.', image: '/images/products/safety/fire-safety/fire-hose-reel-cabinet.jpg', specs: ['Type: ABC/CO2/Foam', 'Capacity: 1–10 kg', 'Standard: IS 15683'] },
    { name: 'Fire Blanket', description: 'Fire-resistant blankets for smothering small fires and protecting persons during evacuation.', image: '/images/products/safety/fire-safety/fire-blanket-safety.jpg', specs: ['Material: Fiberglass', 'Size: 1x1–1.8x1.8m', 'Temp: Up to 550°C'] },
    { name: 'Fire Hose', description: 'Canvas and rubber-lined fire hoses with couplings for fire-fighting systems.', image: '/images/products/safety/fire-safety/fire-hose-reel-cabinet1.jpg', specs: ['Diameter: 63–75mm', 'Length: 15–30m', 'Pressure: 10–15 bar'] },
    { name: 'Smoke Detector', description: 'Optical and ionization smoke detectors for early fire warning in commercial and residential properties.', image: '/images/products/safety/fire-safety/fire-alarm-system-smoke-detector1.jpg', specs: ['Type: Optical/Ionization', 'Coverage: 60 sqm', 'Power: Battery/Mains'] },
    { name: 'Fire Alarm', description: 'Manual call points, hooters, and fire alarm panels for building fire detection and alert systems.', image: '/images/products/safety/fire-safety/fire-alarm-system-smoke-detector.jpg', specs: ['Type: Conventional/Addressable', 'Zones: 2–32', 'Power: 24V DC'] },
    { name: 'Fire Sprinkler', description: 'Automatic fire sprinkler heads for wet, dry, pre-action, and deluge fire suppression systems.', image: '/images/products/safety/fire-safety/fire-sprinkler-system-head.jpg', specs: ['Type: Pendant/Upright', 'Temp Rating: 68–141°C', 'K-Factor: 5.6/8.0'] },
];

export default function FireSafetyPage() {
    return (
        <ProductListing title="Fire Safety" description="Fire protection equipment including extinguishers, alarms, sprinklers, and detection systems for commercial and industrial fire safety." benefits={['BIS Certified', 'AMC Available', 'Expert Installation', 'All Fire Classes']} products={products} categoryBackLink="/products" />
    );
}
