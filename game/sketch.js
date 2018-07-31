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
  collisions()
  applyGravity()
  keyIsDown()
}

function collisions() {
  if (myBox.x >= 239 && myBox.x <= 273 && myBox.y >= 632) {
    myBox.x = 67
  }
}

function applyGravity() {
  if (myBox.y <= 645) {
    myBox.y += VertMv
  } else {
    myBox.y = height/9
  }

  if (myBox.x <= 0) {
    myBox.x = width
  } else if (myBox.x >= width) {
    myBox.x = 0
  }
}

function control() {
    if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
      myBox.x -= HorizMv;
      myBox.y += 3
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
      myBox.x += HorizMv;
      myBox.y += 3
    } else if (keyIsDown(DOWN_ARROW)) {
      myBox.y += 3
    } else if (keyIsDown(RIGHT_ARROW)) {
      myBox.x += HorizMv
    } else if (keyIsDown(LEFT_ARROW)) {
      myBox.x -= HorizMv
    }
}
