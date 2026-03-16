import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'SS 304 Pipe', description: 'Austenitic stainless steel 304 pipes for food processing, chemical, and architectural applications.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS 304 Pipe.png', specs: ['Grade: SS 304', 'Type: Seamless/Welded', 'Finish: Mirror/Matt'] },
    { name: 'SS 316 Pipe', description: 'Marine-grade SS 316 pipes for pharmaceutical, marine, and highly corrosive environments.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS 316 Pipe.png', specs: ['Grade: SS 316/316L', 'Molybdenum: Yes', 'Corrosion: Superior'] },
    { name: 'SS Elbow', description: 'Stainless steel butt-weld and threaded elbows for hygienic and corrosion-resistant piping.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS Elbow.png', specs: ['Grade: 304/316', 'Angle: 45°/90°', 'Type: BW/Threaded'] },
    { name: 'SS Tee', description: 'Stainless steel tee fittings for branching in pharmaceutical, food, and chemical piping.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS Tee.png', specs: ['Grade: 304/316', 'Type: Equal/Reducing', 'Standard: ASTM'] },
    { name: 'SS Reducer', description: 'Stainless steel concentric and eccentric reducers for pipe size transitions.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS Reducer.png', specs: ['Type: Concentric/Eccentric', 'Grade: 304/316', 'Schedule: 10/40/80'] },
    { name: 'SS Flange', description: 'Stainless steel flanges — SORF, WNRF, blind, and lap joint types for bolted connections.', image: '/images/products/pipes-fittings_new/SS Pipes & Fittings/SS Flange.png', specs: ['Type: SORF/WNRF/Blind', 'Grade: 304/316', 'Standard: ANSI B16.5'] },
];

export default function SSPipesPage() {
    return (
        <ProductListing title="SS Pipes & Fittings" description="Stainless steel pipes and fittings in 304 and 316 grades for pharmaceutical, food, chemical, and marine applications." benefits={['Grade 304 & 316', 'Hygienic Finish', 'Mill TC Available', 'Custom Sizes']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
