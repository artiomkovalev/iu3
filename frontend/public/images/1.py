from PIL import Image

from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir('.') if isfile(join('.', f))]
onlyfiles = list(filter(lambda x: x.endswith(".png"), onlyfiles))


for file in onlyfiles:
  image = Image.open(file)
  image = image.resize((image.width // 2, image.height // 2))
  image.save(file[:-4] + ".webp", "webp", optimize=True)
