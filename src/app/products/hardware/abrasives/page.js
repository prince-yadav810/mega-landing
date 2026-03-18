import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Cutting Wheels', description: 'Thin abrasive cutting wheels for cutting metal, stainless steel, and stone with angle grinders.', image: '/images/products/hardware/abrasives/cutting-disc-angle-grinder.jpg', specs: ['Size: 4"–14"', 'Thickness: 1–3mm', 'RPM: Up to 13000'] },
    { name: 'Grinding Wheels', description: 'Depressed center grinding wheels for surface grinding and weld preparation on metal surfaces.', image: '/images/products/hardware/abrasives/grinding-disc-metal.jpg', specs: ['Size: 4"–9"', 'Thickness: 6mm', 'Grit: 24–80'] },
    { name: 'Flap Discs', description: 'Overlapping sandpaper flap discs for blending, finishing, and deburring metal surfaces.', image: '/images/products/hardware/abrasives/flap-disc-sanding.jpg', specs: ['Size: 4"–7"', 'Grit: 40–120', 'Backing: Fiberglass'] },
    { name: 'Sanding Belts', description: 'Abrasive sanding belts for belt sanders, edge sanders, and industrial sanding machines.', image: '/images/products/hardware/abrasives/sanding-belts.jpg', specs: ['Size: Various', 'Grit: 40–400', 'Material: AO/Zirconia'] },
    { name: 'Sanding Sheets', description: 'Sandpaper sheets in various grits for hand sanding, finishing, and surface preparation.', image: '/images/products/hardware/abrasives/sandpaper-sheet-abrasive.jpg', specs: ['Size: 230x280mm', 'Grit: 60–2000', 'Type: Dry/Wet'] },
    { name: 'Wire Brushes', description: 'Steel and brass wire brushes for cleaning, deburring, and surface preparation.', image: '/images/products/hardware/abrasives/wire-brush-cup-wheel.jpg', specs: ['Type: Cup/Wheel/Hand', 'Wire: Steel/Brass/SS', 'Size: 3"–6"'] },
    { name: 'Polishing Pads', description: 'Felt, wool, and foam polishing pads for buffing and polishing metal and stone surfaces.', image: '/images/products/hardware/abrasives/buffing-wheel-polishing.jpg', specs: ['Material: Felt/Foam/Wool', 'Size: 4"–7"', 'Application: Metal/Stone'] },
    { name: 'Diamond Blades', description: 'Diamond-tipped cutting blades for cutting concrete, granite, marble, and ceramic tiles.', image: '/images/products/hardware/abrasives/diamond-cutting-blade-concrete.jpg', specs: ['Size: 4"–14"', 'Type: Segmented/Continuous', 'Application: Concrete/Stone'] },
];

export default function AbrasivesPage() {
    return (
        <ProductListing title="Abrasives" description="Full range of abrasive products for cutting, grinding, sanding, and polishing applications in metalworking and construction." benefits={['Premium Quality', 'All Grits Available', 'Bulk Discounts', 'Safety Rated']} products={products} categoryBackLink="/products" />
    );
}
