README FOR MINIMALIST GRADIENT GENERATOR

This is a simple app that generates a random gradient background, and allows you to copy the CSS code.

The color is generated by first generating two random colors. This is done by putting all the hexidecimal characters into an array, looping over it six times and pulling random characters using Math.random() = It then concatenates those characters together in front of a # sign, which makes it a valid hex color code for css. This process happens twice. 

There are also a few possible choices for the layout of the gradient, which is selected at random in the same way from a seperate array of strings.

Once two colors and the layout are stored in variables, they are concatenated together to make a valid line of CSS.

That new line of CSS is then applied to the background of the body using jQuery dom maniupulation.

Feel free to play around, and have fun!
