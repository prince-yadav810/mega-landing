#!/usr/bin/env python3
"""
replace-image.py
----------------
Product image replacement tool.

Interactive mode:
    python3 scripts/replace-image.py

Direct mode (no prompts):
    python3 scripts/replace-image.py "Product Name" /path/to/image.jpg

Examples:
    python3 scripts/replace-image.py "AC Motors" ~/Downloads/motor.jpg
    python3 scripts/replace-image.py "Electrical Motors" /tmp/img.png
"""

import os
import sys
import re
import shutil
import subprocess

BASE_DIR = "/Users/princeyadav/Downloads/coding-lang/projects/MEGA/mega-landing"
SRC_DIR  = os.path.join(BASE_DIR, "src", "app", "products")
PUB_DIR  = os.path.join(BASE_DIR, "public", "images", "products")
PLACEHOLDER = "https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop"


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]


def collect_products():
    """Walk all page.js files and extract products with their page context."""
    products = []
    for root, _, files in os.walk(SRC_DIR):
        for file in files:
            if file != "page.js":
                continue
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(root, SRC_DIR)
            parts = rel_path.split("/")
            if len(parts) < 2:
                continue
            cat, subcat = parts[0], parts[1]

            with open(filepath, "r") as f:
                content = f.read()

            for match in re.finditer(
                r'\{\s*name:\s*[\'"]([^\'"]+)[\'"].*?image:\s*[\'"]([^\'"]+)[\'"].*?\}',
                content, re.DOTALL
            ):
                name = match.group(1)
                current_image = match.group(2)
                products.append({
                    "name": name,
                    "cat": cat,
                    "subcat": subcat,
                    "filepath": filepath,
                    "current_image": current_image,
                    "slug": slugify(name),
                })
    return products


def find_pub_dir(cat, subcat):
    """Resolve the best matching public image directory."""
    pub_cats = os.listdir(PUB_DIR) if os.path.exists(PUB_DIR) else []
    best_cat = cat
    if cat not in pub_cats:
        for pc in pub_cats:
            if pc.replace("-", "") == cat.replace("-", ""):
                best_cat = pc
                break

    pub_target = os.path.join(PUB_DIR, best_cat)
    pub_subcats = os.listdir(pub_target) if os.path.isdir(pub_target) else []
    best_subcat = subcat
    if best_subcat not in pub_subcats:
        clean_subcat = subcat.replace('and', '').replace('-', '')
        for ps in pub_subcats:
            if ps.replace('-', '') in clean_subcat or clean_subcat in ps.replace('-', ''):
                best_subcat = ps
                break

    return os.path.join(PUB_DIR, best_cat, best_subcat), best_cat, best_subcat


def update_page(filepath, product_name, new_image_path):
    """Update the image field for a specific product in its page.js."""
    with open(filepath, "r") as f:
        content = f.read()

    pattern = re.compile(
        r'(\{\s*name:\s*[\'"]' + re.escape(product_name) + r'[\'"].*?image:\s*)[\'"][^\'"]+[\'"]',
        re.DOTALL
    )
    new_content = pattern.sub(lambda m: m.group(1) + f"'{new_image_path}'", content)

    if new_content == content:
        print(f"  ⚠️  Could not find '{product_name}' in {os.path.basename(filepath)} to update.")
        return False

    with open(filepath, "w") as f:
        f.write(new_content)
    return True


def main():
    print("\n" + "="*55)
    print("   🖼️   MEGA Product Image Replacement Tool")
    print("="*55)
    print("Loading all products...\n")

    products = collect_products()
    if not products:
        print("No products found. Exiting.")
        return

    # Group by category for display
    by_cat = {}
    for p in products:
        key = f"{p['cat']} / {p['subcat']}"
        by_cat.setdefault(key, []).append(p)

    # Print numbered list
    index = 1
    idx_map = {}
    for group_name in sorted(by_cat.keys()):
        print(f"\n  📁 {group_name.upper()}")
        for p in by_cat[group_name]:
            has_image = not p['current_image'].startswith('http')
            status = "✅" if has_image else "⬜"
            print(f"    [{index:>3}] {status}  {p['name']}")
            idx_map[index] = p
            index += 1

    print(f"\n  Total: {index-1} products")
    print("\n" + "-"*55)

    # Product selection
    while True:
        raw = input("\n  Enter product number (or 'q' to quit): ").strip()
        if raw.lower() == 'q':
            print("  Goodbye! 👋")
            return
        if raw.isdigit() and int(raw) in idx_map:
            selected = idx_map[int(raw)]
            break
        print(f"  ❌ Invalid choice. Enter a number between 1 and {index-1}.")

    print(f"\n  Selected: \"{selected['name']}\"")
    print(f"  Category: {selected['cat']} / {selected['subcat']}")
    current = selected['current_image']
    if current.startswith('http'):
        print(f"  Current:  [placeholder — no image set]")
    else:
        print(f"  Current:  {current}")

    # Image path input
    print("\n  💡 Tip: You can drag & drop the image file into this terminal window.")
    while True:
        raw_path = input("\n  Path to your new image file: ").strip().strip("'\"")
        if not raw_path:
            continue
        if not os.path.isfile(raw_path):
            print(f"  ❌ File not found: {raw_path}")
            continue
        ext = os.path.splitext(raw_path)[1].lower()
        if ext not in ('.jpg', '.jpeg', '.png', '.webp'):
            print(f"  ❌ Unsupported format '{ext}'. Use .jpg, .png, or .webp")
            continue
        break

    # Determine destination
    dest_dir, best_cat, best_subcat = find_pub_dir(selected['cat'], selected['subcat'])
    os.makedirs(dest_dir, exist_ok=True)

    dest_filename = selected['slug'] + ".jpg"
    dest_path = os.path.join(dest_dir, dest_filename)

    # Convert to JPG if needed, else just copy
    if ext in ('.png', '.webp'):
        print(f"\n  🔄 Converting {ext} → .jpg ...")
        result = subprocess.run(
            ['sips', '-s', 'format', 'jpeg', raw_path, '--out', dest_path],
            capture_output=True, text=True
        )
        if result.returncode != 0:
            print(f"  ❌ Conversion failed: {result.stderr}")
            return
    else:
        shutil.copy2(raw_path, dest_path)

    # Build the public URL path
    new_image_url = f"/images/products/{best_cat}/{best_subcat}/{dest_filename}"

    # Update the page.js
    success = update_page(selected['filepath'], selected['name'], new_image_url)

    if success:
        print(f"\n  ✅ Done!")
        print(f"     Image saved → {dest_path}")
        print(f"     Page updated → {os.path.relpath(selected['filepath'], BASE_DIR)}")
        print(f"     URL → {new_image_url}")
        print("\n  🔃 Refresh your browser to see the change!\n")
    else:
        print(f"\n  ⚠️  Image saved but page update failed. Run fix-product-images.py manually.\n")


def direct_replace(product_name_query: str, image_path: str):
    """Non-interactive mode: find best matching product and replace its image."""
    image_path = os.path.expanduser(image_path.strip().strip("'\""))
    if not os.path.isfile(image_path):
        print(f"❌ File not found: {image_path}")
        return

    ext = os.path.splitext(image_path)[1].lower()
    if ext not in ('.jpg', '.jpeg', '.png', '.webp'):
        print(f"❌ Unsupported format '{ext}'. Use .jpg, .png, or .webp")
        return

    products = collect_products()
    query_slug = slugify(product_name_query)
    query_words = [w for w in query_slug.split('-') if len(w) > 2]

    # Score each product by how many words match
    best_score = 0
    best_match = None
    for p in products:
        score = sum(1 for w in query_words if w in p['slug'])
        # Bonus for exact slug match
        if p['slug'] == query_slug:
            score += 10
        if score > best_score:
            best_score = score
            best_match = p

    if not best_match or best_score == 0:
        print(f"❌ Could not find a product matching: '{product_name_query}'")
        print("   Try running the interactive mode to browse all products.")
        return

    print(f"\n✅ Matched product: \"{best_match['name']}\"")
    print(f"   Category: {best_match['cat']} / {best_match['subcat']}")

    dest_dir, best_cat, best_subcat = find_pub_dir(best_match['cat'], best_match['subcat'])
    os.makedirs(dest_dir, exist_ok=True)

    dest_filename = best_match['slug'] + ".jpg"
    dest_path = os.path.join(dest_dir, dest_filename)

    if ext in ('.png', '.webp'):
        print(f"   Converting {ext} → .jpg ...")
        result = subprocess.run(
            ['sips', '-s', 'format', 'jpeg', image_path, '--out', dest_path],
            capture_output=True, text=True
        )
        if result.returncode != 0:
            print(f"❌ Conversion failed: {result.stderr}")
            return
    else:
        shutil.copy2(image_path, dest_path)

    new_image_url = f"/images/products/{best_cat}/{best_subcat}/{dest_filename}"
    success = update_page(best_match['filepath'], best_match['name'], new_image_url)

    if success:
        print(f"   Image saved  → {dest_path}")
        print(f"   URL          → {new_image_url}")
        print(f"   Page updated → {os.path.relpath(best_match['filepath'], BASE_DIR)}")
        print("\n🔃 Refresh your browser to see the change!\n")
    else:
        print("⚠️  Image saved but page update failed.")


if __name__ == "__main__":
    args = sys.argv[1:]
    if len(args) == 2:
        # Direct mode: python3 replace-image.py "Product Name" /path/to/img.jpg
        direct_replace(args[0], args[1])
    elif len(args) == 1:
        print("❌ Please provide both a product name and an image path.")
        print('   Example: python3 scripts/replace-image.py "AC Motors" ~/Downloads/motor.jpg')
    else:
        main()
