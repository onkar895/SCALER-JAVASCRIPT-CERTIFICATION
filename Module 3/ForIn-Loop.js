// In JavaScript, the 'for in' loop allows you to loop through the properties of an object and elements of an arrays.

// for in With Objects:
var colors = {
  primary: 'Blue',
  secondary: 'Red',
  tertiary: 'White'
}

// for in Syntax :
for (var color in colors) {
  console.log(color + ` -> ` + colors[color])
}

// Also Used with Arrays :
var colorsArray = ['Orange', 'Red', 'Pink']

for (var arrColor in colorsArray) {
  console.log(arrColor + ` -> ` + colorsArray[arrColor])
}

var number = [10, 9, 8, 7, 6, 5]

for (var num in number) {
  console.log(num + `->` + number[num])
}
