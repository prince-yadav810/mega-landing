#!/usr/bin/env python3
import os
import re

BASE_DIR = "/Users/princeyadav/Downloads/coding-lang/projects/MEGA/mega-landing"
SRC_DIR = os.path.join(BASE_DIR, "src", "app", "products")
PUB_DIR = os.path.join(BASE_DIR, "public", "images", "products")

PLACEHOLDER = "https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop"

def get_images_for_folder(cat, subcat):
    """Find all jpg images for a category/subcategory, fuzzy matching the folder names."""
    images = []
    
    if not os.path.exists(PUB_DIR): return images
    
    pub_cats = os.listdir(PUB_DIR)
    # 1. Try exact match first
    best_cat = cat if cat in pub_cats else None
    
    # 2. Try partial match if exact fails
    if not best_cat:
        for pc in pub_cats:
            if pc.replace("-", "") == cat.replace("-", ""):
                 best_cat = pc
                 break
                 
    # 3. Try prefix match as last resort
    if not best_cat:
        for pc in pub_cats:
            if pc.startswith(cat[:5]) or cat.startswith(pc[:5]):
                 best_cat = pc
                 break
                 
    if not best_cat: return images
    
    cat_dir = os.path.join(PUB_DIR, best_cat)
    if not os.path.isdir(cat_dir): return images
    
    pub_subcats = os.listdir(cat_dir)
    # 1. Try exact subcat
    best_subcat = subcat if subcat in pub_subcats else None
    
    if not best_subcat:
        clean_subcat = subcat.replace('and', '').replace('-', '')
        for ps in pub_subcats:
            clean_ps = ps.replace('-', '')
            if clean_ps in clean_subcat or clean_subcat in clean_ps:
                best_subcat = ps
                break
            
    if not best_subcat: return images
    
    target_dir = os.path.join(cat_dir, best_subcat)
    if os.path.isdir(target_dir):
        for f in os.listdir(target_dir):
            if f.endswith(".jpg"):
                images.append(f"/images/products/{best_cat}/{best_subcat}/{f}")
                
    return sorted(images)

total_files = 0
total_replaced = 0
total_placeholders = 0

for root, _, files in os.walk(SRC_DIR):
    for file in files:
        if file.endswith("page.js"):
            filepath = os.path.join(root, file)
            
            # Determine cat and subcat from src path
            rel_path = os.path.relpath(root, SRC_DIR)
            parts = rel_path.split("/")
            if len(parts) < 2:
                continue
                
            cat, subcat = parts[0], parts[1]
            
            # Get available images for this section
            available_images = get_images_for_folder(cat, subcat)
            
            with open(filepath, "r") as f:
                content = f.read()

            def replacer(match):
                global total_replaced, total_placeholders
                full_match = match.group(0)
                
                # Check if this product already has a moglix image, if so, we might want to replace it too
                # Actually, the user wants to replace EVERYTHING with local or placeholder
                
                if available_images:
                    new_img = available_images.pop(0)
                    total_replaced += 1
                else:
                    new_img = PLACEHOLDER
                    total_placeholders += 1
                    
                return re.sub(r"image:\s*['\"][^'\"]+['\"]", f"image: '{new_img}'", full_match)

            new_content = re.sub(r"\{\s*name:\s*['\"][^'\"]+['\"].*?image:\s*['\"][^'\"]+['\"].*?\}", replacer, content, flags=re.DOTALL)

            if new_content != content:
                with open(filepath, "w") as f:
                    f.write(new_content)
                total_files += 1

print("-" * 40)
print(f"Updated {total_files} page files.")
print(f"Replaced {total_replaced} images with local Leonardo images.")
print(f"Used {total_placeholders} Unsplash placeholders.")
