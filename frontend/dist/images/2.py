# cd public/images

from PIL import Image

file = "IMG_20240822_190642.jpg"

image = Image.open(file)
image.save(file[:-4] + ".jpg", "JPEG", optimize=True, quality=90)
