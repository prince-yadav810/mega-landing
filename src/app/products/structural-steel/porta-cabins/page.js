import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Office Cabin', description: 'Pre-fabricated portable office cabins for construction sites, temporary offices, and remote locations.', image: '/images/products/structural-steel/porta-cabins/portable-site-office-cabin.jpg', specs: ['Size: 10x10–40x12 ft', 'Structure: MS Frame', 'Insulation: PUF/EPS'] },
    { name: 'Security Cabin', description: 'Compact security guard cabins for gate houses, parking lots, and site security checkpoints.', image: '/images/products/structural-steel/porta-cabins/security-guard-cabin-portable.jpg', specs: ['Size: 4x4–8x8 ft', 'Window: Sliding Glass', 'AC Provision: Yes'] },
    { name: 'Toilet Cabin', description: 'Portable toilet cabins with plumbing provisions for construction sites and outdoor events.', image: '/images/products/structural-steel/porta-cabins/security-guard-cabin-portable.jpg', specs: ['Type: Western/Indian', 'Plumbing: Complete', 'Water Tank: Optional'] },
    { name: 'Labor Camp', description: 'Multi-room labor accommodation cabins with bunk beds and common facilities for worker housing.', image: '/images/products/structural-steel/porta-cabins/labour-camp-portable-cabin.jpg', specs: ['Capacity: 4–20 persons', 'Ventilation: Yes', 'Electrical: Pre-wired'] },
    { name: 'Site Office', description: 'Spacious site office containers with furniture provisions for project management and meetings.', image: '/images/products/structural-steel/porta-cabins/portable-site-office-cabin.jpg', specs: ['Size: 20–40 ft Container', 'AC Ready: Yes', 'Partitions: Available'] },
    { name: 'Storage Container', description: 'Secure storage containers for tools, equipment, and material storage on construction sites.', image: '/images/products/structural-steel/porta-cabins/storage-container-portable.jpg', specs: ['Size: 10–40 ft', 'Lock: Heavy Duty', 'Weatherproof: Yes'] },
];

export default function PortaCabinsPage() {
    return (
        <ProductListing title="Porta Cabins" description="Pre-fabricated portable cabins for offices, security, accommodation, and storage — quick to install and relocate." benefits={['Quick Installation', 'Customizable', 'Weather Resistant', 'Relocatable']} products={products} categoryBackLink="/products" />
    );
}
