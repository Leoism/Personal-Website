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
let song
let munch



function preload() {
  munch = loadSound('/game/munch.mp3')
  song = loadSound('/game/game_music.mp3')
}

let lives = 5

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    ribble1 = loadImage('/game/sprites/Toko.png')
    ribble2 = loadImage('/game/sprites/Roko.png')
    ribble3 = loadImage('/game/sprites/Coco.png')
    banana  = loadImage('/game/sprites/Banana.png')
    paper   = loadImage('/game/sprites/Crumpled_paper.png')
    trash   = loadImage('/game/sprites/Trash_Bag.png')
    bgnd    = loadImage('/game/sprites/background.jpg')

    

    song.loop()

    myBox = {
      'box': new Box(width /2, height/9, 15, {r: 255, b: 255, g:255}),
      'color': type
    }

    coco = new Box(width -100, height-50, 30, {r :0, g :248, b :95})

    roko = new Box(width /2-30, height-50, 30, {r :0, g :38, b :255})

    toko = new Box(width /8, height-50, 30, {r :255, g :38, b :0})
}

let button

function draw() {
  //

  step()

  background(bgnd)

  if(ended && points >= localStorage.getItem('high_score')) {
        myJSON = JSON.stringify(json)
          localStorage.setItem('high_score', points)

        textSize(50)
        fill(255, 255, 255)
        text('New HighScore!:\n          ' + points, 70, 300)
        button = createButton('Replay Game')
        button.position(width/2-50, height-160)
        button.mousePressed(function() {
           document.location.reload(true)
        })
        return

  } else if(ended) {
    textSize(50)
    fill(255, 255, 255)
    text('Here is your score:\n      ' + points  + '\n\n' + 'Current HighScore: \n      ' + localStorage.getItem('high_score'), 50, 200)
    button = createButton('Replay Game')
    button.position(width/2-50, height-160)
    button.mousePressed(function() {
      document.location.reload(true)
    })
    return
  }

  myBox.box.show()
    items()
    coco.show()
    roko.show()
    toko.show()
    textSize(32)
    fill(255, 255, 255);
    text(points, 10, 50)


    textSize(32)
    fill(255, 0, 0)
    text(lives, 470, 50)
    // loads img which is Toko
    image(ribble1, width/9, height-60, 50, 50)
    // Roko
    image(ribble2, width/2-40, height-60, 50, 50)
    //Coco
    image(ribble3, width - 110, height-60, 50, 50)
  

}

function items() {
  if(type == 'recycle') {
    image(paper, myBox.box.x-13, myBox.box.y-13, 50, 50)
  } else if (type == 'trash') {
    image(trash, myBox.box.x-13, myBox.box.y-13, 50, 50)
  } else if (type == 'compost') {
    image(banana, myBox.box.x-13, myBox.box.y-13, 50, 50)
  }
}

function step() {
  control()
  collisions()
  applyGravity()
  keyIsDown() 
  endGame()
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
      'box': new Box(Math.floor(Math.random() * width), height/9, 15, picked),
      'color': type
    }
}

function collisions() {
  if (myBox.box.x >= 45 && myBox.box.x <= 90 && myBox.box.y >= 632 && type == "trash") {
    points += 1
    VertMv += .5
    munch.play()
    reset()
  } else if (myBox.box.x >= 204 && myBox.box.x <= 246 && myBox.box.y >= 632 && type == "recycle") {
    points += 1 
    VertMv += .5
    munch.play()
    reset()
  } else if (myBox.box.x >= 390 && myBox.box.x <= 434 && myBox.box.y >= 632 && type == "compost") {
    points += 1 
    VertMv += .5
    munch.play()
    reset()
  }
  
}

function applyGravity() {
  if (VertMv >= 14) {
    VertMv = 14
  } 
  
  if (myBox.box.y <= 655) {
    myBox.box.y += VertMv
  } else {
    myBox.box.y = height/9
    removeLives()
  }

  if (myBox.box.x <= 0) {
    myBox.box.x = width
  } else if (myBox.box.x >= width) {
    myBox.box.x = 0
  }
}

function removeLives() {
  lives -= 1
}

function endGame() {
  if(lives <= 0) {
    clear()
    ended = true
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
    } else if (keyIsDown(LEFT_ARROW)) {
      myBox.box.x -= HorizMv
    } else if (keyIsDown(RIGHT_ARROW)) {
      myBox.box.x += HorizMv
    }

    if(mouseIsPressed) {
      if (mouseX <= 256) {
        myBox.box.x -= HorizMv
      } else if (mouseX >= 256) {
        myBox.box.x += HorizMv
      }
    }
  }

function reset() {
    myBox.box.y = 0
    myBox.box.x = Math.floor(Math.random() * width)
    randomSpawn()
}