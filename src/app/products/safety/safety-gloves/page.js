import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Leather Gloves', description: 'Genuine leather safety gloves for welding, grinding, and heavy material handling operations.', image: '/images/products/safety/safety-gloves/leather-work-gloves-industrial.jpg', specs: ['Material: Split Leather', 'Length: 10"–16"', 'Lining: Cotton'] },
    { name: 'Nitrile Gloves', description: 'Chemical-resistant nitrile gloves for handling oils, solvents, and hazardous chemicals.', image: '/images/products/safety/safety-gloves/nitrile-coated-safety-gloves.jpg', specs: ['Material: Nitrile', 'Thickness: 0.1–0.3mm', 'Powder Free: Yes'] },
    { name: 'PVC Gloves', description: 'PVC dipped gloves for wet work, chemical handling, and rough surface gripping.', image: '/images/products/safety/safety-gloves/pvc-chemical-resistant-gloves.jpg', specs: ['Coating: PVC', 'Length: 10"–14"', 'Grip: Rough Finish'] },
    { name: 'Kevlar Gloves', description: 'Cut-resistant Kevlar gloves for glass handling, metalworking, and sharp-edge applications.', image: '/images/products/safety/safety-gloves/kevlar-heat-resistant-gloves.jpg', specs: ['Material: Kevlar', 'Cut Level: 3–5', 'Heat Resistant: Yes'] },
    { name: 'Welding Gloves', description: 'Heavy-duty heat-resistant welding gauntlets for MIG, TIG, and arc welding operations.', image: '/images/products/safety/safety-gloves/welding-leather-gauntlet-gloves.jpg', specs: ['Material: Split Leather', 'Length: 14"–16"', 'Heat Resistant: 300°C'] },
    { name: 'Chemical Gloves', description: 'Long-cuff chemical-resistant gloves for handling acids, alkalis, and industrial chemicals.', image: '/images/products/safety/safety-gloves/pvc-chemical-resistant-gloves.jpg', specs: ['Material: Neoprene/PVC', 'Length: 14"–18"', 'Chemical Resistant'] },
    { name: 'Cut Resistant Gloves', description: 'HPPE and steel-fiber cut-resistant gloves for sheet metal, glass, and blade handling.', image: '/images/products/safety/safety-gloves/cut-resistant-safety-gloves.jpg', specs: ['Cut Level: A4–A8', 'Material: HPPE', 'Coating: PU/Nitrile'] },
    { name: 'Electrical Gloves', description: 'Insulated rubber electrical safety gloves for live wire work and high-voltage maintenance.', image: '/images/products/safety/safety-gloves/rubber-insulated-electrical-gloves.jpg', specs: ['Class: 00–4', 'Voltage: Up to 36kV', 'Standard: IS 4770'] },
];

export default function SafetyGlovesPage() {
    return (
        <ProductListing title="Safety Gloves" description="Protective gloves for every hazard — chemical, cut, heat, electrical, and mechanical protection for industrial workers." benefits={['CE Certified', 'All Protection Levels', 'Comfortable Fit', 'Bulk Available']} products={products} categoryBackLink="/products" />
    );
}
