import os
from PIL import Image

# Coordinates for cutting the collage (1000 width x 625 height, scaled from 1500 x 938 approx)
# Image dimensions of media__1780488588668.jpg are read dynamically below.
collage_path = r"C:\Users\Yashvi Rupareliya\.gemini\antigravity\brain\05c94a5d-903f-40bf-9579-f1eca4d13e19\media__1780488588668.jpg"
out_dir = r"C:\Users\Yashvi Rupareliya\.gemini\antigravity\scratch\purvoday-chemicals\images"

os.makedirs(out_dir, exist_ok=True)

img = Image.open(collage_path)
width, height = img.size
print(f"Collage size: {width}x{height}")

# Define the coordinates in normalized coordinates (0 to 1) or scale directly.
# The grid has:
# Row 1 (top):
# - Image 1 (Tanks/Factory): Col 1, left to 40% (approx 0.4 * width)
# - Image 2 (Warehouse forklift): Col 2, 40% to 72%
# - Image 3 (Cargo Ship Port sunset): Col 3, 72% to 100%
# Height of Row 1 is approx 27.5% of total height (from 0% to 27.5%).
#
# Row 2 (middle):
# - Product Drums (Toluene, IPA, Acetone, Ethyl Acetate): 0% to 72% width
#   - Toluene: 0 to 18.5% width
#   - IPA: 18.5% to 37% width
#   - Acetone: 37% to 55.5% width
#   - Ethyl Acetate: 55.5% to 72% width
# - ISO Tank Containers (Blue Frame): 72% to 100% width
# Height of Row 2 is approx 27.5% to 55% of total height.
#
# Row 3 (bottom visual):
# - Forklift warehouse: 0% to 19.3% width
# - Handshake global: 19.3% to 45% width
# - White truck with tank: 45% to 72.3% width
# - Shipping container vessel: 72.3% to 100% width
# Height of Row 3 is approx 55% to 80% of total height.
#
# Row 4 (Footer ribbon details - icons and network map):
# - Left side icons, right side world network map.
# Height of Row 4 is approx 80% to 100% of total height.

def crop_and_save(box, filename):
    # box is (left, top, right, bottom) in pixels
    cropped = img.crop(box)
    save_path = os.path.join(out_dir, filename)
    cropped.save(save_path, "PNG")
    print(f"Saved: {filename} ({cropped.size[0]}x{cropped.size[1]})")

# Generate standard image crops:
# 1. Hero Cover Image (Combine top-left tanks or map)
crop_and_save((0, 0, int(width * 0.40), int(height * 0.275)), "hero-chemical.png")

# 2. Warehouse logistics image
crop_and_save((int(width * 0.40), 0, int(width * 0.72), int(height * 0.275)), "warehouse-logistics.png")

# 3. Product Drums (Four columns)
crop_and_save((0, int(height * 0.275), int(width * 0.185), int(height * 0.55)), "drum-toluene.png")
crop_and_save((int(width * 0.185), int(height * 0.275), int(width * 0.37), int(height * 0.55)), "drum-ipa.png")
crop_and_save((int(width * 0.37), int(height * 0.275), int(width * 0.555), int(height * 0.55)), "drum-acetone.png")
crop_and_save((int(width * 0.555), int(height * 0.275), int(width * 0.72), int(height * 0.55)), "drum-ethyl-acetate.png")

# 4. ISO Tank Container
crop_and_save((int(width * 0.72), int(height * 0.275), width, int(height * 0.55)), "iso-tank.png")

# 5. Global Handshake
crop_and_save((int(width * 0.193), int(height * 0.55), int(width * 0.45), int(height * 0.80)), "global-deal.png")

# 6. Tanker Truck
crop_and_save((int(width * 0.45), int(height * 0.55), int(width * 0.723), int(height * 0.80)), "tanker-truck.png")

# 7. Cargo Vessel
crop_and_save((int(width * 0.723), int(height * 0.55), width, int(height * 0.80)), "cargo-ship.png")

# 8. World Network Map Background
crop_and_save((int(width * 0.68), int(height * 0.80), width, height), "network-map.png")

print("Image cropping completed successfully!")
