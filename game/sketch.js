let myBox
let picked
let type = 'recycle'

let coco
let roko
let toko

let ribble1
let ribble2
let ribble3

let banana

let chosenImage

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    ribble1 = loadImage('sprites/Toko.png')
    ribble2 = loadImage('sprites/Roko.png')
    ribble3 = loadImage('sprites/Coco.png')
    banana  = loadImage('sprites/Banana.png')
    bgnd = loadImage('sprites/background.jpg')

    myBox = {
      'box': new Box(width /2, height/9, 15, {r: 255, b: 255, g:255}),
      'color': type
    }

    coco = new Box(width -100, height-50, 30, {r :0, g :248, b :95})

    roko = new Box(width /2-30, height-50, 30, {r :0, g :38, b :255})

    toko = new Box(width /8, height-50, 30, {r :255, g :38, b :0})
}

let points = 0

function draw() {
  console.log(type)
  step()

  background(bgnd)
  myBox.box.show()
  items()
  coco.show()
  roko.show()
  toko.show()
  text(points, 10, 30)
  // loads img which is Toko
  image(ribble1, width/9, height-60, 50, 50)
  // Roko
  image(ribble2, width/2-40, height-60, 50, 50)
  //Coco
  image(ribble3, width - 110, height-60, 50, 50)

}

function items() {
  if(type == 'recycle') {
    
  } else if (type == 'trash') {

  } else if (type == 'compost') {
    image(banana, myBox.box.x-13, myBox.box.y-13, 50, 50)
  }
}

function step() {
  control()
  collisions()
  applyGravity()
  keyIsDown()  
}

function randomSpawn() {
  let yellow = {
    r:255,
    b:0,
    g:255
  }

  let white = {
    r:255,
    b:255,
    g:255
  }

  let brown = {
    r:139,
    b:19,
    g:69
  }


  let colors = [yellow,white,brown]
  let index = Math.floor(Math.random() * colors.length)
  picked = colors[index]

  // set type
  types = ['compost','recycle','trash']
  type = types[index]

  myBox = {
      'box': new Box(width /2, height/9, 15, picked),
      'color': type
    }
}

function collisions() {
  if (myBox.box.x >= 47 && myBox.box.x <= 82 && myBox.box.y >= 632 && type == "trash") {
    points += 1 
    reset()
  } else if (myBox.box.x >= 208 && myBox.box.x <= 244 && myBox.box.y >= 632 && type == "recycle") {
    points += 1 
    reset()
  } else if (myBox.box.x >= 394 && myBox.box.x <= 430 && myBox.box.y >= 632 && type == "compost") {
    points += 1 
    reset()
  }
  
}

setInterval(function() {
  VertMv += 1
}, 1000)
function applyGravity() {
  if (VertMv >= 9) {
    VertMv = 9
  } 
  
  if (myBox.box.y <= 645) {
    myBox.box.y += VertMv
  } else {
    myBox.box.y = height/9
  }

  if (myBox.box.x <= 0) {
    myBox.box.x = width
  } else if (myBox.box.x >= width) {
    myBox.box.x = 0
  }
}

function control() {
    if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
      myBox.box.x -= HorizMv;
      myBox.box.y += 3
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
      myBox.box.x += HorizMv;
      myBox.box.y += 3
    } else if (keyIsDown(DOWN_ARROW)) {
      myBox.box.y += 3
    } else if (keyIsDown(RIGHT_ARROW)) {
      myBox.box.x += HorizMv
    } else if (keyIsDown(LEFT_ARROW)) {
      myBox.box.x -= HorizMv
    }
}

function reset() {
    myBox.box.y = 0
    myBox.box.x = Math.floor(Math.random() * width)
    randomSpawn()
}