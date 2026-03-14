#!/usr/bin/env python3
import os
import re

BASE_DIR = "/Users/princeyadav/Downloads/coding-lang/projects/MEGA/mega-landing"
SRC_DIR = os.path.join(BASE_DIR, "src", "app", "products")
PUB_DIR = os.path.join(BASE_DIR, "public", "images", "products")
PLACEHOLDER = "https://images.unsplash.com/photo-1581092334241-cb19ecef850f?w=600&h=600&fit=crop"

def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]

def fix_pages():
    total_fixed = 0
    total_placeholders = 0
    total_files = 0
    
    for root, _, files in os.walk(SRC_DIR):
        for file in files:
            if file.endswith("page.js"):
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(root, SRC_DIR)
                parts = rel_path.split("/")
                if len(parts) < 2:
                    continue
                    
                cat, subcat = parts[0], parts[1]
                
                with open(filepath, "r") as f:
                    content = f.read()
                
                def replacer(match):
                    nonlocal total_fixed, total_placeholders
                    full_match = match.group(0)
                    
                    name_match = re.search(r"name:\s*['\"]([^'\"]+)['\"]", full_match)
                    if not name_match: return full_match
                    product_name = name_match.group(1)
                    
                    # Logic to find the best matching image in the correct public directory
                    best_cat = cat
                    pub_cats = os.listdir(PUB_DIR) if os.path.exists(PUB_DIR) else []
                    if best_cat not in pub_cats:
                        for pc in pub_cats:
                            if pc.replace("-", "") == cat.replace("-", ""):
                                best_cat = pc; break
                                
                    pub_target = os.path.join(PUB_DIR, best_cat)
                    pub_subcats = os.listdir(pub_target) if os.path.isdir(pub_target) else []
                    best_subcat = subcat
                    if best_subcat not in pub_subcats:
                        clean_subcat = subcat.replace('and', '').replace('-', '')
                        for ps in pub_subcats:
                            clean_ps = ps.replace('-', '')
                            if clean_ps in clean_subcat or clean_subcat in clean_ps:
                                best_subcat = ps; break
                                
                    target_dir = os.path.join(PUB_DIR, best_cat, best_subcat)
                    
                    found_img = None
                    if os.path.isdir(target_dir):
                        available_files = [f for f in os.listdir(target_dir) if f.endswith('.jpg')]
                        
                        # 1. Exact match attempt
                        exact_slug = slugify(product_name) + ".jpg"
                        if exact_slug in available_files:
                            found_img = exact_slug
                        
                        # 2. Smart fallback match
                        if not found_img:
                            # Try matching first word + second word
                            words = slugify(product_name).split("-")
                            search_words = [w.rstrip('s') for w in words] # basic un-plural
                            
                            best_match_score = 0
                            best_file = None
                            
                            for f in available_files:                                
                                score = 0
                                f_slug = f.replace('.jpg', '')
                                f_words = f_slug.split('-')
                                
                                # Count how many search words are in the filename
                                for sw in search_words:
                                    if len(sw) > 2 and sw in f_slug:
                                        score += 1
                                
                                # Extra weight if the first word matches the start of the filename
                                if len(search_words) > 0 and len(search_words[0]) > 2 and f.startswith(search_words[0]):
                                    score += 2
                                    
                                if score > best_match_score:
                                    best_match_score = score
                                    best_file = f
                                    
                            if best_match_score >= 1: # Require at least 1 strong word match
                                found_img = best_file

                    if found_img:
                        new_img = f"/images/products/{best_cat}/{best_subcat}/{found_img}"
                        total_fixed += 1
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
    print(f"Fixed {total_fixed} products with matched Leonardo images.")
    print(f"Used {total_placeholders} placeholders.")
    print("-" * 40)

if __name__ == "__main__":
    fix_pages()
