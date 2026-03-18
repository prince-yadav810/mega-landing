#!/usr/bin/env python3
"""
batch-replace.py
----------------
Batch product image replacement.

You number your images (1.jpg, 2.jpg, 3.jpg...) in a folder,
then provide the product names in matching order.

Usage:
    python3 scripts/batch-replace.py <folder> <product1> <product2> ...

Example:
    python3 scripts/batch-replace.py ~/Downloads/products \
        "AC Motors" \
        "Electrical Motors" \
        "Copper Tubular Lugs"

The script will:
  - Sort images in the folder numerically (1.jpg → product1, 2.jpg → product2)
  - Convert PNG/WebP to JPG automatically
  - Copy each image to the correct public folder
  - Update the matching page.js immediately
"""

import os
import sys
import re
import shutil
import subprocess

BASE_DIR = "/Users/princeyadav/Downloads/coding-lang/projects/MEGA/mega-landing"
SRC_DIR  = os.path.join(BASE_DIR, "src", "app", "products")
PUB_DIR  = os.path.join(BASE_DIR, "public", "images", "products")


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]


def collect_products():
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
                products.append({
                    "name": match.group(1),
                    "cat": cat,
                    "subcat": subcat,
                    "filepath": filepath,
                    "slug": slugify(match.group(1)),
                })
    return products


def find_pub_dir(cat, subcat):
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
        clean = subcat.replace('and', '').replace('-', '')
        for ps in pub_subcats:
            if ps.replace('-', '') in clean or clean in ps.replace('-', ''):
                best_subcat = ps
                break
    return os.path.join(PUB_DIR, best_cat, best_subcat), best_cat, best_subcat


def find_best_product(query, products):
    query_slug = slugify(query)
    query_words = [w for w in query_slug.split('-') if len(w) > 2]
    best_score, best_match = 0, None
    for p in products:
        score = sum(1 for w in query_words if w in p['slug'])
        if p['slug'] == query_slug:
            score += 10
        if score > best_score:
            best_score = score
            best_match = p
    return best_match if best_score > 0 else None


def update_page(filepath, product_name, new_image_path):
    with open(filepath, "r") as f:
        content = f.read()
    pattern = re.compile(
        r'(\{\s*name:\s*[\'"]' + re.escape(product_name) + r'[\'"].*?image:\s*)[\'"][^\'"]+[\'"]',
        re.DOTALL
    )
    new_content = pattern.sub(lambda m: m.group(1) + f"'{new_image_path}'", content)
    if new_content == content:
        return False
    with open(filepath, "w") as f:
        f.write(new_content)
    return True


def get_sorted_images(folder):
    """Get image files sorted numerically (1.jpg before 2.jpg before 10.jpg)."""
    supported = {'.jpg', '.jpeg', '.png', '.webp'}
    files = [
        f for f in os.listdir(folder)
        if os.path.splitext(f)[1].lower() in supported
    ]
    def sort_key(name):
        stem = os.path.splitext(name)[0]
        # Extract leading number if present
        m = re.match(r'^(\d+)', stem)
        return (int(m.group(1)), name) if m else (float('inf'), name)
    return sorted(files, key=sort_key)


def main():
    if len(sys.argv) < 3:
        print("\nUsage:")
        print('  python3 scripts/batch-replace.py <folder> "Product 1" "Product 2" ...\n')
        print("Example:")
        print('  python3 scripts/batch-replace.py ~/Downloads/products \\')
        print('      "AC Motors" "Electrical Motors" "Copper Tubular Lugs"\n')
        sys.exit(1)

    folder = os.path.expanduser(sys.argv[1])
    product_names = sys.argv[2:]

    if not os.path.isdir(folder):
        print(f"❌ Folder not found: {folder}")
        sys.exit(1)

    images = get_sorted_images(folder)

    print(f"\n{'='*55}")
    print("   🖼️   MEGA Batch Image Replacement")
    print(f"{'='*55}")
    print(f"   Folder : {folder}")
    print(f"   Images : {len(images)} found")
    print(f"   Products: {len(product_names)} provided")

    if len(images) < len(product_names):
        print(f"\n⚠️  Warning: {len(product_names)} products but only {len(images)} images found.")
        print("   Extra product names will be skipped.\n")

    if len(images) > len(product_names):
        print(f"\n⚠️  Warning: {len(images)} images but only {len(product_names)} product names.")
        print("   Extra images will be skipped.\n")

    pairs = list(zip(images, product_names))

    print(f"\n{'─'*55}")
    print("   Mapping:")
    for img, pname in pairs:
        print(f"   {img:<20} →  {pname}")
    print(f"{'─'*55}\n")

    confirm = input("   Proceed? (y/n): ").strip().lower()
    if confirm != 'y':
        print("   Cancelled.")
        sys.exit(0)

    products = collect_products()
    success_count = 0
    fail_count = 0

    for img_file, product_query in pairs:
        img_path = os.path.join(folder, img_file)
        ext = os.path.splitext(img_file)[1].lower()

        matched = find_best_product(product_query, products)
        if not matched:
            print(f"\n  ❌ [{img_file}] No product match for: \"{product_query}\"")
            fail_count += 1
            continue

        dest_dir, best_cat, best_subcat = find_pub_dir(matched['cat'], matched['subcat'])
        os.makedirs(dest_dir, exist_ok=True)

        dest_filename = matched['slug'] + ".jpg"
        dest_path = os.path.join(dest_dir, dest_filename)

        if ext in ('.png', '.webp'):
            result = subprocess.run(
                ['sips', '-s', 'format', 'jpeg', img_path, '--out', dest_path],
                capture_output=True, text=True
            )
            if result.returncode != 0:
                print(f"\n  ❌ [{img_file}] Conversion failed.")
                fail_count += 1
                continue
        else:
            shutil.copy2(img_path, dest_path)

        new_url = f"/images/products/{best_cat}/{best_subcat}/{dest_filename}"
        updated = update_page(matched['filepath'], matched['name'], new_url)

        status = "✅" if updated else "⚠️ "
        print(f"  {status} [{img_file}] \"{matched['name']}\" → {new_url}")
        if updated:
            success_count += 1
        else:
            fail_count += 1

    print(f"\n{'─'*55}")
    print(f"   Done! {success_count} replaced, {fail_count} failed.")
    print("   🔃 Refresh your browser to see all changes!\n")


if __name__ == "__main__":
    main()
