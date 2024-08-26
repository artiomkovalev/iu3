from PIL import Image

file = "teacher.png"

image = Image.open(file)

pixels = image.load()


image.save(file[:-4] + ".webp", "webp", optimize=True)
