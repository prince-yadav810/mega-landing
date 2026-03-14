import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Slip-On Flange', description: 'Slip-on flanges for easy pipe alignment and welding in low-pressure piping systems.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: SORF', 'Size: 15–600mm', 'Standard: IS 6392/ANSI'] },
    { name: 'Weld Neck Flange', description: 'Weld neck flanges for high-pressure and high-temperature piping with superior strength.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: WNRF', 'Schedule: Matching Pipe', 'Material: CS/SS'] },
    { name: 'Blind Flange', description: 'Blind flanges for sealing pipe ends, vessel nozzles, and Dead-end pipe runs.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: Blind RF/FF', 'Size: 15–600mm', 'Pressure: PN 16/25/40'] },
    { name: 'Spiral Wound Gasket', description: 'Spiral wound gaskets with inner and outer rings for high-pressure flange sealing.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: Spiral Wound', 'Fill: PTFE/Graphite', 'Standard: ASME B16.20'] },
    { name: 'Ring Joint Gasket', description: 'Metallic ring joint gaskets for extreme pressure and temperature flanged connections.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Type: R/RX/BX', 'Material: SS 304/316', 'Pressure: Very High'] },
    { name: 'Rubber Gasket', description: 'Rubber gaskets in EPDM, Neoprene, Nitrile, and Viton for general sealing applications.', image: 'https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop', specs: ['Material: EPDM/NBR/Viton', 'Thickness: 1.5–6mm', 'Cut to Size: Yes'] },
];

export default function FlangesGasketsPage() {
    return (
        <ProductListing title="Flanges & Gaskets" description="Industrial flanges and gaskets for leak-proof bolted pipe connections in process, utility, and structural piping systems." benefits={['All Pressure Ratings', 'MOC Options', 'Custom Sizes', 'Test Certificate']} products={products} categoryBackLink="/products" />
    );
}
