from PIL import Image
import numpy


def imageToBW(img_path, threshold=170):
    image_file = Image.open(img_path)
    image = image_file.convert('L')  # convert image to monochrome
    image = numpy.array(image)
    image = bwArray(image, threshold)
    return Image.fromarray(image, 'L')


def bwArray(numpy_array, threshold):
    for i in range(len(numpy_array)):
        for j in range(len(numpy_array[0])):
            if numpy_array[i][j] > threshold:
                numpy_array[i][j] = 255
            else:
                numpy_array[i][j] = 0
    return numpy_array


def reScale(im,width,height):
    return ""