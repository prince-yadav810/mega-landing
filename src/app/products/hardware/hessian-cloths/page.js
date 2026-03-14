import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Jute Hessian Cloth', description: 'Natural jute hessian cloth for concrete curing, packaging, and erosion control applications.', image: '/images/products/hardware/hessian-cloths/jute-hessian-cloth-burlap.jpg', specs: ['Material: 100% Jute', 'Width: 40"–72"', 'Weight: 7.5–14 oz'] },
    { name: 'Burlap Rolls', description: 'Burlap rolls for agricultural use, decorative applications, and landscape fabric.', image: '/images/products/hardware/hessian-cloths/jute-hessian-cloth-burlap.jpg', specs: ['Width: 36"–72"', 'Length: 50–100 yards', 'Weave: Standard'] },
    { name: 'Curing Hessian', description: 'Hessian cloth specifically treated for concrete curing to maintain moisture and ensure proper setting.', image: '/images/products/hardware/hessian-cloths/lmc-hessian-cloth-curing.jpg', specs: ['Use: Concrete Curing', 'Reusable: Yes', 'Size: Custom'] },
    { name: 'Packaging Hessian', description: 'Heavy-duty hessian fabric for packaging sacks, bales, and industrial goods protection.', image: '/images/products/hardware/hessian-cloths/lmc-hessian-cloth-curing.jpg', specs: ['Weight: 10–14 oz', 'Width: 40"–72"', 'Stitching: Hemmed'] },
    { name: 'Fine Weave Hessian', description: 'Fine-weave hessian cloth for crafts, upholstery, and decorative display applications.', image: '/images/products/hardware/hessian-cloths/lmc-hessian-cloth-curing.jpg', specs: ['Weave: Fine', 'Width: 36"–60"', 'Color: Natural'] },
];

export default function HessianClothsPage() {
    return (
        <ProductListing title="Hessian Cloths" description="Natural jute hessian cloths for construction curing, packaging, agriculture, and decorative applications." benefits={['100% Natural Jute', 'Eco-Friendly', 'Custom Sizes', 'Bulk Available']} products={products} categoryBackLink="/products" />
    );
}
