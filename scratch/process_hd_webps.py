import os
from PIL import Image

brain_dir = "/home/kobby/.gemini/antigravity-ide/brain/99f636c2-074b-476f-a60c-0bbf2d142dd8"
public_img_dir = "/home/kobby/Documents/dev/hoskey-v2/public/images"

# HD generated images
hd_files = {
    "lights-of-africa.webp": "lights_of_africa_hd_1787272440671.png",
    "switcher-monitor.webp": "switcher_monitor_hd_1787272474418.png",
    "director-pointing.webp": "director_pointing_hd_1787272513046.png",
    "control-booth.webp": "control_booth_hd_1787272555275.png",
    "control-room-beam.webp": "control_room_beam_hd_1787272605665.png",
}

for out_name, in_name in hd_files.items():
    in_path = os.path.join(brain_dir, in_name)
    img = Image.open(in_path).convert("RGB")
    out_path = os.path.join(public_img_dir, out_name)
    img.save(out_path, "WEBP", quality=86, method=6)
    size_kb = os.path.getsize(out_path) / 1024.0
    print(f"Compressed HD WebP: {out_name} ({img.width}x{img.height}, {size_kb:.1f} KB)")

print("HD WebP compression complete!")
