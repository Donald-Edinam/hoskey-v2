import os
from PIL import Image

brain_dir = "/home/kobby/.gemini/antigravity-ide/brain/99f636c2-074b-476f-a60c-0bbf2d142dd8"
public_img_dir = "/home/kobby/Documents/dev/hoskey-v2/public/images"

in_path = os.path.join(brain_dir, "studio_interior_hd_1787273745801.png")
out_path = os.path.join(public_img_dir, "studio-interior.webp")

img = Image.open(in_path).convert("RGB")
img.save(out_path, "WEBP", quality=86, method=6)
size_kb = os.path.getsize(out_path) / 1024.0
print(f"Compressed studio-interior.webp: ({img.width}x{img.height}, {size_kb:.1f} KB)")
