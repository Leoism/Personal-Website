let player
let bgnd
let character
let toxicWaste
let enemy
let enemies2
let enemies3

let speed = 3
let score = 0
let lives = 5
let stop = false

function setup() {
	createCanvas(512, 700)
	bgnd = loadImage('/game/sprites/ribble_catch_bg.jpg')
	character = loadImage('/game/sprites/Toko.png')
	toxicWaste = loadImage('/game/sprites/enemy.png')
	player = {
      'box': new Box(Math.floor(Math.random() * width), height-130, 15, {r: 50, b: 0, g:0})
    }

    enemy = {
      'box': new Box(Math.floor(Math.random() * width), 13, 15, {r: 0, b: 255, g:255})
    }

    enemies2 = {
      'box': new Box(Math.floor(Math.random() * width), -15000, 15, {r: 0, b: 255, g:255})
    }

    enemies3 = {
      'box': new Box(Math.floor(Math.random() * width), -30000, 15, {r: 0, b: 255, g:255})
    }
}

function draw() {
	background(bgnd)
	
	

	if(ended && score >= localStorage.getItem('high_score')) {
        myJSON = JSON.stringify(json)
          localStorage.setItem('high_score', score)

        textSize(50)
        fill(0, 0, 0)
        text('New HighScore!:\n          ' + score, 70, 300)
        button = createButton('Replay Game')
        button.position(width/2-50, height-160)
        button.mousePressed(function() {
           document.location.reload(true)
        })
        return

  } else if(ended) {
    textSize(50)
    fill(0, 0, 0)
    text('Here is your score:\n      ' + score  + '\n\n' + 'Current HighScore: \n      ' + localStorage.getItem('high_score'), 50, 200)
    button = createButton('Replay Game')
    button.position(width/2-50, height-160)
    button.mousePressed(function() {
      document.location.reload(true)
    })
    return
  }

  player.box.show()
	enemy.box.show()
	enemies2.box.show()
	enemies3.box.show()
	image(character, player.box.x-15, player.box.y-15, 50, 50)
	image(toxicWaste, enemy.box.x-15, enemy.box.y-15, 50, 50)
	image(toxicWaste, enemies2.box.x-15, enemies2.box.y-15, 50, 50)
	image(toxicWaste, enemies3.box.x-15, enemies3.box.y-15, 50, 50)
	step()
	textSize(32)
	fill(255,255,255)
	text(score, 10, 50)
	textSize(32)
	fill(255,0,0)
	text(lives, width-30, 50)
}
	


function step() {
	gravity()
	control()
	collisions()
	hitOrMiss()
	endGame()
}

function control() {
    if (keyIsDown(LEFT_ARROW)) {
      player.box.x -= HorizMv
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.box.x += HorizMv
    }

    if(mouseIsPressed) {
      if (mouseX <= 256) {
        player.box.x -= HorizMv
      } else if (mouseX >= 256) {
        player.box.x += HorizMv
      }
    }
 }

 function gravity() {
 	enemy.box.y += speed
 	enemies2.box.y += speed
 	enemies3.box.y += speed
 	
 }

 function hitOrMiss() {
 	if(enemy.box.y >= height-140 && (enemy.box.x >= player.box.x-25 && enemy.box.x <= player.box.x+25)) {
 		lives -= 1
 		randomSpawn(enemy)
 		return true
 	}

 	if(enemies2.box.y >= height-140 && (enemies2.box.x >= player.box.x-25 && enemies2.box.x <= player.box.x+25)) {
 		lives -= 1
 		randomSpawn(enemies2)
 		return true
 	}

 	if(enemies3.box.y >= height-140 && (enemies3.box.x >= player.box.x-25 && enemies3.box.x <= player.box.x+25)) {
 		lives -= 1
 		randomSpawn(enemies3)
 		return true
 	}
 }

 function randomSpawn(object) {

 	let location = Math.floor(Math.random() * width)

 	// make sure image doesn't go off bounds
 	if (location < 0) {
 		location = 20
 	} else if(location > width - 15) {
 		location = width - 30
 	}
 	object.box.x  = location
 	object.box.y = 13
 }

 function collisions() {
 	if (player.box.x >= width) {
 		player.box.x = 0
 	} else if(player.box.x <= 0) {
 		player.box.x = width
 	}

 	// out of bounds enememy
 	if(enemy.box.y >= height-110) {
 		enemy.box.y = 13
 		randomSpawn(enemy)
 	}
 	if(enemies2.box.y >= height-110) {
 		enemies2.box.y = 13
 		randomSpawn(enemies2)
 	}

 	if(enemies3.box.y >= height-110) {
 		enemies3.box.y = 13
 		randomSpawn(enemies3)
 	}
 }

 function endGame() {
  if(lives <= 0) {
    clear()
    ended = true
  }

}

setInterval(function() {
	if(!ended) {
		score += 1
 		speed += .1
	}
 }, 1000)