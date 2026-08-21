import os
from PIL import Image, ImageEnhance

brain_dir = "/home/kobby/.gemini/antigravity-ide/brain/99f636c2-074b-476f-a60c-0bbf2d142dd8"
public_img_dir = "/home/kobby/Documents/dev/hoskey-v2/public/images"

os.makedirs(public_img_dir, exist_ok=True)

img1_path = os.path.join(brain_dir, "media__1787271572145.jpg")
img2_path = os.path.join(brain_dir, "media__1787271590365.png")

print(f"Loading {img1_path}...")
img1 = Image.open(img1_path).convert("RGB")

print(f"Loading {img2_path}...")
img2 = Image.open(img2_path).convert("RGB")

def enhance_and_save(img, out_path, max_width=1200, quality=85):
    # Resize keeping aspect ratio if max_width is specified
    w, h = img.size
    if w > max_width:
        ratio = max_width / float(w)
        new_h = int(float(h) * ratio)
        img_resized = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
    else:
        img_resized = img

    # Subtle contrast & sharpness boost for rich broadcast aesthetics
    enhancer_contrast = ImageEnhance.Contrast(img_resized)
    img_contrast = enhancer_contrast.enhance(1.08)

    enhancer_sharpness = ImageEnhance.Sharpness(img_contrast)
    img_final = enhancer_sharpness.enhance(1.15)

    img_final.save(out_path, "WEBP", quality=quality, method=6)
    size_kb = os.path.getsize(out_path) / 1024.0
    print(f"Saved: {out_path} ({img_final.width}x{img_final.height}, {size_kb:.1f} KB)")

# Save main production stills
enhance_and_save(img1, os.path.join(public_img_dir, "ziblim-gimbal-1.webp"), max_width=1200, quality=85)
enhance_and_save(img2, os.path.join(public_img_dir, "ziblim-gimbal-2.webp"), max_width=1200, quality=85)

# Save hero carousel WebP slides (16:10 / 16:9 crop or fitted)
enhance_and_save(img2, os.path.join(public_img_dir, "hero-1.webp"), max_width=1400, quality=85)
enhance_and_save(img1, os.path.join(public_img_dir, "hero-2.webp"), max_width=1400, quality=85)

# Save about founder portrait
enhance_and_save(img1, os.path.join(public_img_dir, "about-founder.webp"), max_width=900, quality=88)

# Save process on-set photo
enhance_and_save(img2, os.path.join(public_img_dir, "process-set.webp"), max_width=900, quality=85)

# Save team Ziblim portrait
enhance_and_save(img1, os.path.join(public_img_dir, "team-ziblim.webp"), max_width=800, quality=88)

print("Image enhancement and optimization completed successfully!")
