import os
from PIL import Image, ImageEnhance

brain_dir = "/home/kobby/.gemini/antigravity-ide/brain/99f636c2-074b-476f-a60c-0bbf2d142dd8"
public_img_dir = "/home/kobby/Documents/dev/hoskey-v2/public/images"

os.makedirs(public_img_dir, exist_ok=True)

# The 5 new images
img1_path = os.path.join(brain_dir, "media__1787271995434.png") # Control room with beam & ATEM
img2_path = os.path.join(brain_dir, "media__1787272002885.jpg") # Close up ATEM monitor
img3_path = os.path.join(brain_dir, "media__1787272009368.png") # Outdoor director pointing
img4_path = os.path.join(brain_dir, "media__1787272018427.png") # Outdoor control booth 2 engineers
img5_path = os.path.join(brain_dir, "media__1787272093612.jpg") # Arena stage "Lights of Africa" with camera jib

def process_and_save(img_path, out_name, max_w=1200, quality=85, contrast=1.06, sharpness=1.12):
    img = Image.open(img_path).convert("RGB")
    w, h = img.size
    if w > max_w:
        ratio = max_w / float(w)
        new_h = int(float(h) * ratio)
        img_resized = img.resize((max_w, new_h), Image.Resampling.LANCZOS)
    else:
        img_resized = img

    enhancer_c = ImageEnhance.Contrast(img_resized)
    img_c = enhancer_c.enhance(contrast)

    enhancer_s = ImageEnhance.Sharpness(img_c)
    img_final = enhancer_s.enhance(sharpness)

    out_path = os.path.join(public_img_dir, out_name)
    img_final.save(out_path, "WEBP", quality=quality, method=6)
    size_kb = os.path.getsize(out_path) / 1024.0
    print(f"Saved: {out_name} ({img_final.width}x{img_final.height}, {size_kb:.1f} KB)")

# Process each new asset
process_and_save(img1_path, "control-room-beam.webp", max_w=1200, quality=85)
process_and_save(img2_path, "switcher-monitor.webp", max_w=1200, quality=88)
process_and_save(img3_path, "director-pointing.webp", max_w=1200, quality=85)
process_and_save(img4_path, "control-booth.webp", max_w=1200, quality=85)
process_and_save(img5_path, "lights-of-africa.webp", max_w=1200, quality=85)

print("Batch optimization of 5 new production stills complete!")
