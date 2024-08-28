from PIL import Image

file = "teacher.png"

image = Image.open(file)

pixels = image.load() # create the pixel map

#for i in range(image.size[0]): # for every pixel:
    #for j in range(image.size[1]):
        #if pixels[i,j] != (0,0,0,0):
            #pixels[i,j] = (255, 255, 255, 255)


image.save(file[:-4] + ".webp", "webp", optimize=True)
