import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Plate Compactor', description: 'Vibratory plate compactors for soil, gravel, and asphalt compaction in trenches and confined areas.', image: '/images/products/construction-equipment/compactors-rollers/plate-compactor-vibratory.jpg', specs: ['Force: 10–25 kN', 'Plate: 400–600mm', 'Engine: Petrol/Diesel'] },
    { name: 'Rammer', description: 'Jumping rammer compactors for deep soil compaction in narrow trenches and backfill areas.', image: '/images/products/construction-equipment/compactors-rollers/tamping-rammer-jumping-jack.jpg', specs: ['Impact: 10–15 kN', 'Shoe: 280x330mm', 'Engine: Petrol'] },
    { name: 'Tandem Roller', description: 'Double drum tandem vibratory rollers for asphalt and bitumen road surface compaction.', image: '/images/products/construction-equipment/compactors-rollers/smooth-drum-roller-compactor.jpg', specs: ['Weight: 1–3 Ton', 'Drum: Double', 'Width: 800–1200mm'] },
    { name: 'Single Drum Roller', description: 'Single drum vibratory rollers for soil, gravel, and sub-base compaction in road construction.', image: '/images/products/construction-equipment/compactors-rollers/smooth-drum-roller-compactor.jpg', specs: ['Weight: 3–14 Ton', 'Drum: Single', 'Vibration: Variable'] },
    { name: 'Pneumatic Roller', description: 'Pneumatic tire rollers for finishing compaction of asphalt and soil surfaces.', image: '/images/products/construction-equipment/compactors-rollers/pneumatic-tire-roller.jpg', specs: ['Weight: 8–27 Ton', 'Tires: 7–11', 'Type: Static/Vibratory'] },
    { name: 'Vibratory Roller', description: 'Walk-behind vibratory rollers for compacting small areas, footpaths, and driveways.', image: '/images/products/construction-equipment/compactors-rollers/smooth-drum-roller-compactor.jpg', specs: ['Weight: 500–1000 kg', 'Width: 600–700mm', 'Operation: Walk-Behind'] },
];

export default function CompactorsRollersPage() {
    return (
        <ProductListing title="Compactors & Rollers" description="Soil and asphalt compaction equipment for road construction, trenching, and earthwork projects." benefits={['All Capacities', 'Sale & Rental', 'Spare Parts', 'Operator Training']} products={products} categoryBackLink="/products" />
    );
}
