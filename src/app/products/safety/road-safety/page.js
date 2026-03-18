import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Traffic Cone', description: 'Reflective PVC traffic cones for road diversions, construction zones, and parking management.', image: '/images/products/safety/road-safety/traffic-safety-cone-orange.jpg', specs: ['Height: 500–1000mm', 'Material: PVC', 'Reflective: Yes'] },
    { name: 'Speed Breaker', description: 'Rubber and plastic speed breakers for speed control in parking lots and residential areas.', image: '/images/products/safety/road-safety/speed-breaker-rubber.jpg', specs: ['Material: Rubber/Plastic', 'Width: 350–500mm', 'Reflective: Yellow/Black'] },
    { name: 'Convex Mirror', description: 'Traffic convex mirrors for blind spots, road junctions, and parking garage visibility.', image: '/images/products/safety/road-safety/speed-breaker-rubber1.jpg', specs: ['Diameter: 24"–40"', 'Material: Acrylic/PC', 'View: 130°'] },
    { name: 'Road Barrier', description: 'Water-filled and concrete road barriers for highway construction zones and traffic management.', image: '/images/products/safety/road-safety/road-safety-barrier-plastic.jpg', specs: ['Type: Water-fill/Concrete', 'Length: 1–2m', 'Reflective: Yes'] },
    { name: 'Retro Reflective Tape', description: 'High-visibility reflective tapes for vehicles, road signs, and construction site marking.', image: '/images/products/safety/road-safety/reflective-safety-vest-high-visibility.jpg', specs: ['Width: 25–100mm', 'Type: Diamond Grade', 'Color: Red/White/Yellow'] },
    { name: 'Delineator Post', description: 'Flexible delineator posts with reflective panels for lane marking and road edge guidance.', image: '/images/products/safety/road-safety/speed-breaker-rubber2.jpg', specs: ['Height: 750–1200mm', 'Material: PVC/PE', 'Flexible: Yes'] },
];

export default function RoadSafetyPage() {
    return (
        <ProductListing title="Road Safety" description="Traffic management and road safety products for construction zones, highways, parking areas, and urban roads." benefits={['High Visibility', 'Durable Materials', 'Reflective Options', 'Bulk Supply']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
