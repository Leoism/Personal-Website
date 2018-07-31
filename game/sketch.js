let myBox

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    myBox = new Box(width /2, height/9, 30, {r :150, g :48, b :95})
    myBox2 = new Box(width /2, height-50, 30, {r :0, g :248, b :95})

}

function draw() {
  step()

  background(backgroundColor)
  myBox.show()
  myBox2.show()


}

function step() {
  control()
  applyGravity()
  keyIsDown()
}

function applyGravity() {
  if (myBox.y <= 645) {
    myBox.y += VertMv
  } else {
    myBox.y = height/9
  }
}

function control() {
    if (keyIsDown(RIGHT_ARROW)) {
      myBox.x += HorizMv
    } else if (keyIsDown(LEFT_ARROW)) {
      myBox.x -= HorizMv
    } else {

    }
}
