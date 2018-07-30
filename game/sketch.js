let myBox

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    myBox = new Box(width /2, height /2, 30, {r :150, g :48, b :95})
    //This is the function used for the gravity
    setInterval( () => applyGravity(), timer )
}

function draw() {
  background(backgroundColor)
  myBox.show()
}

let applyGravity = () => {
    myBox.y += boxDimension
}
