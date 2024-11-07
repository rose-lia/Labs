console.log("hello world")


/*
Write a function named getAreaOfCircle. It takes a radius parameter. It calculates and returns the area of a circle with that radius.
Write a function named getCircumferenceOfCircle. It takes a radius parameter. It calculates and returns the circumference of a circle with that radius.
Write a function named getAreaOfSquare. It takes a side parameter. It calculates and returns the area of a square with that side length.
Write a function named getAreaOfTriangle. It takes two parameters: base and height. It calculates and returns the area of a triangle with that base and height.
*/


const getAreaOfCircle = (radius) => {
    return Math.PI * radius * radius 
}
    console.log(getAreaOfCircle(6))


const getCircumferenceOfCircle = (radius) => {
    return Math.PI * 2 * radius
}
    console.log(getCircumferenceOfCircle(10))


const getAreaOfSquare = (side) => {
    return side * side
}
    console.log(getAreaOfSquare(3))


const getAreaOfTriangle = (base, height) => {
    return (base * height)/2
}
    console.log(getAreaOfTriangle(17, 12))
