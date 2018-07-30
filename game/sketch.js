let myBox

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    myBox = new Box(width /2, height/9, 30, {r :150, g :48, b :95})
    myBox2 = new Box(width /2, height-50, 30, {r :0, g :248, b :95})
    //This is the function used for the gravity
    setInterval( () => applyGravity(), timer )

}

function draw() {
  background(backgroundColor)
  myBox.show()
  myBox2.show()
}

let applyGravity = () => {
  if (myBox.y <= 645) {
    myBox.y += boxDimension
  } else {
    myBox.y = height/9
  }

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    myBox.x += 5
  } else if (keyCode == LEFT_ARROW) {
    myBox.x -= 5
  }
}
