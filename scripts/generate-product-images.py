#!/usr/bin/env python3
"""
Leonardo.ai Product Image Generator for MEGA Enterprise
Generates photorealistic product images for all 386 products.

Usage: python3 scripts/generate-product-images.py
"""

import json
import os
import time
import urllib.request
import urllib.error
import re

API_KEY = "71a545c7-c119-4c68-b45d-df7824a77e22"
BASE_URL = "https://cloud.leonardo.ai/api/rest/v1"
MODEL_ID = "de7d3faf-762f-48e0-b3b7-9d0ac3a3fcf3"  # Phoenix 1.0
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images", "products")

# All products organized by category/subcategory
PRODUCTS = {
    "electrical": {
        "wires-cables": [
            "Aluminum Armored Cable", "House Wires", "Multicore Flexible Cables",
            "High Tension Cables", "CCTV Cables", "Coaxial Cables",
            "Copper Armoured Cable", "Fiber Optical Cable", "JFTC Cables",
            "LAN Cables", "Single Core Flexible Cables", "Speaker Cables",
            "Submersible Cables", "Telephone Switchboard Cables", "Winding Wires",
            "Braided Cables", "Fire Survival Cable", "Welding Cables", "Solar DC Cables"
        ],
        "switchgears": [
            "ACB Air Circuit Breaker", "MCB Miniature Circuit Breaker",
            "Distribution Board electrical", "MCCB Moulded Case Circuit Breaker",
            "RCCB Residual Current Device", "Electrical Contactor",
            "MPCB Motor Protection Circuit Breaker", "Power Factor Correction Capacitor",
            "Control Relay electrical", "DOL Starter motor", "HRC Fuse electrical",
            "Switch Disconnector", "Industrial Push Button switch",
            "Change Over Switch electrical", "SIMOCODE motor management",
            "DIN Rail Screw Terminal Block", "Industrial Limit Switch",
            "Digital Panel Meter ammeter voltmeter", "Surge Protection Device SPD",
            "Bimetallic Overload Relay", "Industrial Plug and Socket",
            "Modular Switch and Socket", "Under Desk Power Solution",
            "Floor Box power socket", "PIR Motion Sensor detector",
            "PVC Cable Trunking"
        ],
        "motors": [
            "Industrial Electric Motor", "AC Motor three phase",
            "Squirrel Cage Induction Motor", "Servo Motor industrial",
            "Submersible Pump borewell", "Centrifugal Pump industrial",
            "Monoblock Pump water", "Pressure Booster Pump",
            "Sewage Submersible Pump dewatering", "Chemical Dosing Pump metering"
        ],
        "fans": [
            "Industrial Exhaust Fan ventilation", "Ceiling Fan residential",
            "Pedestal Fan standing", "Wall Mounted Fan industrial",
            "Air Circulator Fan drum", "Heavy Duty Industrial Man Cooler Fan"
        ],
        "led": [
            "LED Panel Light office", "LED Tube Light T8", "LED Bulb B22",
            "LED Flood Light outdoor", "LED Street Light pole mounted",
            "LED Highbay Light warehouse", "LED Downlight recessed ceiling",
            "LED Strip Light RGB flexible", "LED Batten Light surface",
            "LED Spotlight track", "Emergency LED Light battery backup",
            "Solar LED Street Light", "Surface Mounted LED Ceiling Light",
            "LED Ceiling Light decorative", "Industrial LED Light fixture",
            "Signal Tower Light indicator", "Explosion Proof LED Light hazardous",
            "Clean Room LED Panel Light", "Flame Proof LED Light fitting",
            "LED Wall Light outdoor"
        ],
        "lugs-glands": [
            "Copper Tubular Cable Lug", "Aluminum Cable Lug crimping",
            "Bimetallic Cable Lug copper aluminum", "Ring Terminal Lug insulated",
            "Pin Terminal Fork Lug", "Bootlace Ferrule insulated",
            "Brass Cable Gland IP68", "Single Compression Cable Gland",
            "Double Compression Cable Gland weatherproof",
            "Flameproof Cable Gland explosion proof",
            "PG Metric Thread Cable Gland", "Nylon Cable Gland PA66"
        ],
        "electrical-panels": [
            "LT Panel power distribution", "HT Panel high tension",
            "PCC Panel power control center", "MCC Panel motor control center",
            "APFC Panel automatic power factor", "VFD Panel variable frequency drive",
            "PLC Panel automation control", "Electrical Distribution Panel board"
        ],
        "cable-tray": [
            "Perforated Cable Tray GI", "Ladder Type Cable Tray heavy duty",
            "Wire Mesh Cable Tray", "Solid Bottom Cable Tray enclosed",
            "Channel Cable Tray slotted", "Cable Tray Fittings bend tee reducer"
        ]
    },
    "hardware": {
        "power-hand-tools": [
            "Angle Grinder power tool", "Electric Drill machine", "Hammer Drill SDS",
            "Circular Saw power tool", "Jigsaw power tool", "Heat Gun industrial",
            "Electric Planer woodworking", "Die Grinder rotary tool",
            "Impact Wrench pneumatic", "Pipe Wrench plumbing",
            "Combination Spanner Set", "Allen Key Hex Set"
        ],
        "tarpaulin": [
            "HDPE Tarpaulin blue", "PVC Coated Tarpaulin waterproof",
            "Canvas Tarpaulin heavy duty", "Silpaulin Tarpaulin cross laminated",
            "Green Net Shade cloth", "Monsoon Tarpaulin construction site"
        ],
        "hessian-cloths": [
            "Jute Hessian Cloth burlap", "LMC Hessian Cloth curing",
            "Jute Gunny Bags sack", "Jute Rope natural fiber",
            "Jute Geotextile erosion control"
        ],
        "fasteners": [
            "Hex Bolt steel grade", "Hex Nut zinc plated", "Spring Washer flat washer",
            "Anchor Bolt foundation", "Self Drilling Screw", "Wood Screw brass",
            "Machine Screw countersunk", "Eye Bolt lifting", "U Bolt pipe clamp",
            "Threaded Rod studding", "Rivet Pop blind", "Cotter Pin split pin"
        ],
        "lubricants": [
            "Engine Oil synthetic", "Gear Oil industrial", "Hydraulic Oil ISO VG",
            "Compressor Oil rotary screw", "Turbine Oil industrial",
            "Cutting Oil coolant", "Transformer Oil electrical",
            "Grease NLGI lithium", "Rust Preventive Oil spray",
            "Penetrating Oil WD40 type", "Chain Lubricant spray", "Silicone Spray lubricant"
        ],
        "abrasives": [
            "Cutting Disc angle grinder", "Grinding Disc metal",
            "Flap Disc sanding", "Wire Brush Cup wheel",
            "Sandpaper Sheet abrasive", "Emery Cloth Roll",
            "Buffing Wheel polishing", "Diamond Cutting Blade concrete"
        ],
        "water-tanks": [
            "PVC Water Tank overhead", "Stainless Steel Water Tank",
            "FRP Water Tank fiberglass", "Underground Water Tank HDPE",
            "Loft Water Tank rectangular", "Insulated Water Tank double wall"
        ]
    },
    "construction-chemicals": {
        "waterproofing": [
            "Waterproofing Membrane liquid applied", "Cementitious Waterproofing coating",
            "Bituminous Waterproofing membrane", "Crystalline Waterproofing admixture",
            "Polyurethane Waterproofing coating", "Water Repellent Silicone coating"
        ],
        "adhesives-sealants": [
            "Epoxy Adhesive structural", "Tile Adhesive cementitious",
            "Silicone Sealant RTV", "PU Sealant polyurethane",
            "Construction Adhesive multipurpose", "Acrylic Sealant paintable"
        ],
        "concrete-admixtures": [
            "Plasticizer Concrete admixture", "Superplasticizer PCE admixture",
            "Retarder Concrete admixture", "Accelerator Concrete admixture",
            "Air Entraining Agent concrete", "Corrosion Inhibitor concrete"
        ],
        "wall-putty-primers": [
            "White Cement Wall Putty", "Acrylic Wall Putty",
            "Cement Primer exterior", "Interior Wall Primer",
            "Metal Primer red oxide", "Wood Primer water based"
        ],
        "interior-paints": [
            "Interior Emulsion Paint", "Premium Emulsion luxury paint",
            "Acrylic Distemper interior", "Texture Paint wall coating",
            "Washable Paint interior", "Antimicrobial Paint hospital grade"
        ],
        "exterior-paints": [
            "Exterior Emulsion Paint weatherproof", "Apex Exterior Paint acrylic",
            "Elastomeric Paint flexible", "Textured Exterior Paint",
            "Anti Algae Exterior Paint", "Heat Reflective Roof Paint"
        ],
        "wood-coatings": [
            "Wood Polish Melamine coating", "PU Wood Finish polyurethane",
            "Wood Stain color", "Wood Varnish clear coat",
            "Wood Sealer Primer", "Wood Preservative treatment"
        ]
    },
    "structural-steel": {
        "tmt-bars": [
            "TMT Bar Fe500D reinforcement", "TMT Bar Fe550D high strength",
            "TMT Bar Fe600 construction", "Stainless Steel TMT Bar",
            "CRS TMT Bar corrosion resistant", "TMT Bar Bundle 12mm construction"
        ],
        "ms-angles": [
            "Mild Steel Angle equal leg", "MS Unequal Angle steel",
            "Galvanized Steel Angle", "Slotted Steel Angle rack",
            "Stainless Steel Angle bar"
        ],
        "ms-channels": [
            "MS Channel ISMC steel", "MS Parallel Flange Channel",
            "Galvanized Steel Channel", "Slotted Steel Channel"
        ],
        "ms-beams": [
            "MS I Beam ISMB structural", "MS H Beam HE steel",
            "Universal Steel Beam column", "Welded Steel Beam fabricated",
            "Galvanized Steel Beam"
        ],
        "ms-plates": [
            "MS Plate hot rolled", "Stainless Steel Plate 304",
            "Galvanized Steel Sheet", "Chequered Steel Plate anti slip",
            "Boiler Quality Steel Plate", "HR Steel Coil hot rolled"
        ],
        "ms-pipes": [
            "MS Round Pipe ERW", "MS Square Pipe hollow section",
            "MS Rectangular Tube hollow section", "Galvanized Steel Pipe GI",
            "Scaffolding Pipe steel", "Structural Steel Tube CHS"
        ],
        "porta-cabins": [
            "Portable Site Office cabin", "Modular Porta Cabin prefab",
            "Security Guard Cabin portable", "Portable Toilet restroom",
            "Storage Container portable", "Labour Camp Portable cabin"
        ]
    },
    "safety": {
        "safety-gloves": [
            "Nitrile Coated Safety Gloves", "Leather Work Gloves industrial",
            "Rubber Insulated Electrical Gloves", "Cut Resistant Safety Gloves",
            "PVC Chemical Resistant Gloves", "Welding Leather Gauntlet Gloves",
            "Cotton Hand Gloves disposable", "Kevlar Heat Resistant Gloves"
        ],
        "fall-protection": [
            "Full Body Safety Harness", "Safety Lanyard shock absorber",
            "Retractable Fall Arrester lifeline", "Safety Net construction",
            "Anchor Point fall protection", "Safety Helmet with Chinstrap"
        ],
        "eye-protection": [
            "Safety Goggles chemical splash", "Safety Spectacles clear lens",
            "Welding Goggles dark lens", "Face Shield full protection",
            "UV Protection Safety Glasses", "Anti Fog Safety Goggles"
        ],
        "fire-safety": [
            "ABC Fire Extinguisher dry chemical", "CO2 Fire Extinguisher",
            "Fire Hose Reel cabinet", "Fire Alarm System smoke detector",
            "Fire Blanket safety", "Fire Sprinkler System head"
        ],
        "road-safety": [
            "Traffic Safety Cone orange", "Road Safety Barrier plastic",
            "Reflective Safety Vest high visibility", "Speed Breaker rubber",
            "Road Warning Sign board", "Retractable Safety Bollard"
        ],
        "respiratory-protection": [
            "Dust Mask N95 respirator", "Half Face Respirator cartridge",
            "Full Face Gas Mask respirator", "Disposable Face Mask FFP2",
            "Powered Air Purifying Respirator PAPR", "Escape Breathing Apparatus"
        ],
        "rainy-season": [
            "Safety Gumboot PVC rain boot", "Raincoat PVC heavy duty",
            "Waterproof Rain Suit jacket pant", "Rain Poncho disposable",
            "Waterproof Shoe Cover rubber", "Non Slip Safety Shoe waterproof"
        ]
    },
    "construction-equipment": {
        "concrete-mixers": [
            "Concrete Mixer Machine drum", "Reversible Drum Mixer concrete",
            "Pan Type Concrete Mixer", "Mobile Concrete Batching Plant",
            "Transit Mixer truck concrete", "Laboratory Concrete Mixer small"
        ],
        "scaffolding": [
            "Cuplock Scaffolding System", "H Frame Scaffolding steel",
            "Ringlock Scaffolding modular", "Shuttering Plate steel formwork",
            "Scaffolding Plank walk board", "Prop Jack adjustable support"
        ],
        "compactors-rollers": [
            "Plate Compactor vibratory", "Roller Compactor ride on",
            "Tamping Rammer jumping jack", "Smooth Drum Roller compactor",
            "Pneumatic Tire Roller", "Mini Road Roller compact"
        ],
        "bar-bending-cutting": [
            "Bar Bending Machine rebar", "Bar Cutting Machine electric",
            "Ring Making Machine stirrup", "Bar Thread Rolling Machine",
            "Manual Bar Cutter hand operated"
        ],
        "concrete-vibrators": [
            "Needle Vibrator concrete immersion", "Surface Vibrator screed",
            "Table Vibrator concrete mould", "Flexible Shaft Vibrator",
            "Backpack Vibrator portable concrete"
        ],
        "welding-machines": [
            "Arc Welding Machine MMA", "MIG Welding Machine wire feed",
            "TIG Welding Machine argon", "Inverter Welding Machine portable",
            "Spot Welding Machine", "Plasma Cutting Machine"
        ],
        "earth-moving": [
            "Excavator machine JCB type", "Backhoe Loader construction",
            "Wheel Loader front end", "Bulldozer earth moving",
            "Motor Grader road construction", "Mini Excavator compact"
        ],
        "tower-cranes": [
            "Tower Crane construction site", "Chain Hoist Block lifting",
            "Electric Wire Rope Hoist", "Mobile Crane truck mounted",
            "Gantry Crane overhead", "Material Hoist construction lift"
        ]
    },
    "pipes-fittings": {
        "pvc": [
            "PVC Pipe SWR drainage", "PVC Pipe Schedule 40 pressure",
            "PVC Elbow Fitting 90 degree", "PVC Tee Fitting equal",
            "PVC Coupler Socket", "PVC Ball Valve threaded",
            "PVC Pipe Casing bore well"
        ],
        "upvc": [
            "UPVC Pipe Column plumbing", "UPVC Pipe Solvent Weld",
            "UPVC Elbow Fitting pressure", "UPVC Tee Fitting plumbing",
            "UPVC Ball Valve socket", "UPVC Pipe Schedule 80"
        ],
        "cpvc": [
            "CPVC Pipe Hot Water plumbing", "CPVC Elbow Fitting 90",
            "CPVC Tee Fitting hot water", "CPVC Ball Valve brass",
            "CPVC Pipe Clip bracket", "CPVC Reducer Coupling"
        ],
        "hdpe": [
            "HDPE Pipe PE100 water supply", "HDPE Coil Pipe irrigation",
            "HDPE Elbow Fitting butt weld", "HDPE Tee Fitting electrofusion",
            "HDPE Ball Valve compression", "HDPE Coupler Fitting"
        ],
        "ms": [
            "MS Pipe ERW Mild Steel", "MS Pipe Seamless Schedule",
            "MS Elbow Fitting butt weld", "MS Tee Fitting welded",
            "MS Reducer Fitting concentric", "MS Flange Slip On mild steel"
        ],
        "gi": [
            "GI Pipe Galvanized iron water", "GI Pipe Schedule 40 threaded",
            "GI Elbow Fitting galvanized", "GI Tee Fitting malleable iron",
            "GI Socket Union galvanized", "GI Nipple Fitting barrel"
        ],
        "ss": [
            "SS Pipe Stainless Steel 304 seamless", "SS Pipe 316 welded",
            "SS Elbow Fitting butt weld", "SS Tee Fitting stainless steel",
            "SS Reducer Fitting concentric", "SS Flange Weld Neck stainless"
        ],
        "valves": [
            "Gate Valve cast iron flanged", "Globe Valve bronze threaded",
            "Ball Valve brass chrome plated", "Butterfly Valve wafer type",
            "Check Valve swing type NRV", "Safety Relief Valve pressure"
        ],
        "flanges": [
            "Slip On Flange mild steel", "Weld Neck Flange stainless",
            "Blind Flange plate", "Socket Weld Flange forged",
            "Lap Joint Flange steel", "Threaded Flange cast iron"
        ]
    }
}


def make_prompt(product_name: str) -> str:
    """Generate an optimized prompt for product image generation."""
    return (
        f"Professional product photograph of {product_name}, "
        f"real industrial equipment product, white clean background, "
        f"studio lighting, sharp focus, e-commerce product listing photo, "
        f"ultra detailed, photorealistic, high quality, no text, no watermark"
    )


def slugify(text: str) -> str:
    """Convert product name to a filename-safe slug."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]


def api_request(method: str, endpoint: str, data: dict = None, retries: int = 3) -> dict:
    """Make an API request to Leonardo.ai with retry logic."""
    url = f"{BASE_URL}{endpoint}"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    for attempt in range(retries):
        try:
            if data:
                req = urllib.request.Request(url, data=json.dumps(data).encode(), headers=headers, method=method)
            else:
                req = urllib.request.Request(url, headers=headers, method=method)

            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode())
        except urllib.error.HTTPError as e:
            error_body = e.read().decode()
            print(f"  ❌ API Error {e.code}: {error_body}")
            return None
        except (ConnectionResetError, urllib.error.URLError, OSError, TimeoutError) as e:
            wait = (attempt + 1) * 5
            print(f"  ⚠️ Network error (attempt {attempt+1}/{retries}): {e}. Retrying in {wait}s...")
            time.sleep(wait)
    print("  ❌ All retries failed")
    return None


def generate_image(prompt: str) -> str:
    """Generate an image and return the download URL."""
    result = api_request("POST", "/generations", {
        "prompt": prompt,
        "modelId": MODEL_ID,
        "width": 512,
        "height": 512,
        "num_images": 1
    })

    if not result:
        return None

    gen_id = result["sdGenerationJob"]["generationId"]
    cost = result["sdGenerationJob"].get("cost", {}).get("amount", "?")
    print(f"  💰 Cost: ${cost} | Gen ID: {gen_id}")

    # Poll for completion
    for attempt in range(30):
        time.sleep(5)
        status = api_request("GET", f"/generations/{gen_id}")
        if not status:
            continue

        gen = status.get("generations_by_pk", {})
        if gen.get("status") == "COMPLETE":
            images = gen.get("generated_images", [])
            if images:
                return images[0]["url"]
            break
        elif gen.get("status") == "FAILED":
            print("  ❌ Generation failed")
            break
        print(f"  ⏳ Waiting... ({attempt + 1})")

    return None


def download_image(url: str, filepath: str, retries: int = 3) -> bool:
    """Download image from URL to local file with retry logic."""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
                "Accept": "image/*, */*",
                "Referer": "https://cloud.leonardo.ai/"
            })
            with urllib.request.urlopen(req, timeout=30) as resp:
                with open(filepath, 'wb') as f:
                    f.write(resp.read())
            size_kb = os.path.getsize(filepath) / 1024
            print(f"  📥 Downloaded: {os.path.basename(filepath)} ({size_kb:.0f}KB)")
            return True
        except (ConnectionResetError, urllib.error.URLError, OSError, TimeoutError) as e:
            wait = (attempt + 1) * 3
            print(f"  ⚠️ Download retry {attempt+1}/{retries}: {e}. Waiting {wait}s...")
            time.sleep(wait)
        except Exception as e:
            print(f"  ❌ Download failed: {e}")
            return False
    print("  ❌ Download failed after all retries")
    return False


def check_balance():
    """Check remaining API credits."""
    result = api_request("GET", "/me")
    if result:
        details = result.get("user_details", [{}])[0]
        paid = details.get("apiPaidTokens", 0)
        print(f"\n💳 Remaining API tokens: {paid}")
        return paid
    return 0


def load_progress(progress_file: str) -> set:
    """Load completed products from progress file."""
    completed = set()
    if os.path.exists(progress_file):
        with open(progress_file, 'r') as f:
            for line in f:
                completed.add(line.strip())
    return completed


def save_progress(progress_file: str, key: str):
    """Save a completed product to progress file."""
    with open(progress_file, 'a') as f:
        f.write(key + '\n')


def main():
    progress_file = os.path.join(OUTPUT_DIR, ".progress")
    completed = load_progress(progress_file)

    # Count total products
    total = sum(len(products) for cat in PRODUCTS.values() for products in cat.values())
    done = len(completed)
    print(f"🎯 Total products: {total} | Already done: {done} | Remaining: {total - done}")
    print(f"📁 Output directory: {OUTPUT_DIR}")

    check_balance()

    generated = 0
    failed = 0

    for category, subcategories in PRODUCTS.items():
        for subcategory, products in subcategories.items():
            # Create output directory
            out_dir = os.path.join(OUTPUT_DIR, category, subcategory)
            os.makedirs(out_dir, exist_ok=True)

            for product in products:
                key = f"{category}/{subcategory}/{product}"

                if key in completed:
                    continue

                slug = slugify(product)
                filepath = os.path.join(out_dir, f"{slug}.jpg")

                # Skip if file already exists
                if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
                    print(f"⏭️  Skipping (exists): {product}")
                    save_progress(progress_file, key)
                    continue

                print(f"\n🖼️  [{generated + done + 1}/{total}] {category}/{subcategory}: {product}")

                prompt = make_prompt(product)
                image_url = generate_image(prompt)

                if image_url:
                    if download_image(image_url, filepath):
                        save_progress(progress_file, key)
                        generated += 1
                    else:
                        failed += 1
                else:
                    failed += 1

                # Rate limiting - wait between requests
                time.sleep(2)

                # Check balance every 50 images
                if generated > 0 and generated % 50 == 0:
                    check_balance()

    print(f"\n{'='*50}")
    print(f"✅ Generated: {generated}")
    print(f"❌ Failed: {failed}")
    print(f"⏭️  Skipped (already done): {done}")
    check_balance()


if __name__ == "__main__":
    main()
