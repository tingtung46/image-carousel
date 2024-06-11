#Image Carousel with Autoplay

Bulit in HTML, CSS, and Javascript. Using array's index and transform to move each image in slider container.

Each image was built by insert image into div background, not using `img` tag attribute, so it will be able to automatically adjust with the slider container's size along with the position of slider (all of images) is set to `absolute`.

Indexes were defined by setting the value of index in arrow buttons (left and right). When number of index increase, slider will move to next image and vice versa by using calculated `transform`.

It also has autoplay feature when the cursor is not hovered on slider container. Autoplay is set to 5 seconds by using `setInterval()`. It will stop if the cursor was pointed on outside slider container.