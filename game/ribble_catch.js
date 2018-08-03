let player
let bgnd
let character
let toxicWaste
let enemy
let pellet
let power
let enemies2
let enemies3
let enemies4
let enemies5
let enemy2
let enemy3
let enemy4

let speed = 3
let score = 0
let lives = 5
let stop = false

let song

function preload() {
  song = loadSound('/game/catch_bgm.mp3')
}

function setup() {
	createCanvas(512, 700)
	bgnd = loadImage('/game/sprites/ribble_catch_bg.jpg')
	character = loadImage('/game/sprites/Toko.png')
	toxicWaste = loadImage('/game/sprites/enemy.png')
  pellet = loadImage('/game/sprites/power.png')
	 song.loop()
   player = {
      'box': new Box(Math.floor(Math.random() * width), height-130, 15, {r: 50, b: 0, g:0})
    }

    enemy = {
      'box': new Box(Math.floor(Math.random() * width), 13, 15, {r: 0, b: 255, g:255})
    }

    enemies2 = {
      'box': new Box(Math.floor(Math.random() * width), -7000, 15, {r: 0, b: 255, g:255})
    }

    enemies3 = {
      'box': new Box(Math.floor(Math.random() * width), -14000, 15, {r: 0, b: 255, g:255})
    }

    enemies4 = {
      'box': new Box(Math.floor(Math.random() * width), -7250, 15, {r: 0, b: 255, g:255})
    }

    enemies5 = {
      'box': new Box(Math.floor(Math.random() * width), -7500, 15, {r: 0, b: 255, g:255})
    }

    enemy2 = {
      'box': new Box(Math.floor(Math.random() * width), -1300, 15, {r: 0, b: 255, g:255})
    }

    enemy3 = {
      'box': new Box(Math.floor(Math.random() * width), -1350, 15, {r: 0, b: 255, g:255})
    }

    enemy4 = {
      'box': new Box(Math.floor(Math.random() * width), -14000, 15, {r: 0, b: 255, g:255})
    }

    power = {
      'box': new Box(Math.floor(Math.random() * width), 13, 15, {r: 0, b: 255, g:255})
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
  enemies4.box.show()
  enemies5.box.show()
  enemy2.box.show()
  enemy3.box.show()
  enemy4.box.show()
  power.box.show()

	image(character, player.box.x-15, player.box.y-15, 50, 50)
	image(toxicWaste, enemy.box.x-15, enemy.box.y-15, 50, 50)
	image(toxicWaste, enemies2.box.x-15, enemies2.box.y-15, 50, 50)
	image(toxicWaste, enemies3.box.x-15, enemies3.box.y-15, 50, 50)
  image(toxicWaste, enemies4.box.x-15, enemies4.box.y-15, 50, 50)
  image(toxicWaste, enemies5.box.x-15, enemies5.box.y-15, 50, 50)
  image(toxicWaste, enemy2.box.x-15, enemy2.box.y-15, 50, 50)
  image(toxicWaste, enemy3.box.x-15, enemy3.box.y-15, 50, 50)
  image(toxicWaste, enemy4.box.x-15, enemy4.box.y-15, 50, 50)
  image(pellet, power.box.x-5, power.box.y-5, 25, 25)

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
  enemies4.box.y += speed
  enemies5.box.y += speed
  enemy2.box.y += speed
  enemy3.box.y += speed
 	enemy4.box.y += speed
  power.box.y += 6
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
  if(enemy2.box.y >= height-140 && (enemy2.box.x >= player.box.x-25 && enemy2.box.x <= player.box.x+25)) {
    lives -= 1
    randomSpawn(enemy2)
    return true
  }

  if(enemies4.box.y >= height-140 && (enemies4.box.x >= player.box.x-25 && enemies4.box.x <= player.box.x+25)) {
    lives -= 1
    randomSpawn(enemies4)
    return true
  }

  if(enemies5.box.y >= height-140 && (enemies5.box.x >= player.box.x-25 && enemies5.box.x <= player.box.x+25)) {
    lives -= 1
    randomSpawn(enemies5)
    return true
  }
  if(enemy3.box.y >= height-140 && (enemy3.box.x >= player.box.x-25 && enemy3.box.x <= player.box.x+25)) {
    lives -= 1
    randomSpawn(enemy3)
    return true
  }

  if(enemy4.box.y >= height-140 && (enemy4.box.x >= player.box.x-25 && enemy4.box.x <= player.box.x+25)) {
    lives -= 1
    randomSpawn(enemy4)
    return true
  }

  if(power.box.y >= player.box.y-40 && (power.box.x >= player.box.x-30 && power.box.x <= player.box.x+30)) {
    score += 10
    randomSpawn(power)
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
  if(enemies4.box.y >= height-110) {
    enemies4.box.y = 13
    randomSpawn(enemies4)
  }
  if(enemies4.box.y >= height-110) {
    enemies4.box.y = 13
    randomSpawn(enemies4)
  }
  if(enemies5.box.y >= height-110) {
    enemies5.box.y = 13
    randomSpawn(enemies5)
  }
  if(enemy2.box.y >= height-110) {
    enemy2.box.y = 13
    randomSpawn(enemy2)
  }
  if(enemy3.box.y >= height-110) {
    enemy3.box.y = 13
    randomSpawn(enemy3)
  }
  if(enemy4.box.y >= height-110) {
    enemy4.box.y = 13
    randomSpawn(enemy4)
  }
  if(power.box.y >= height-110) {
    power.box.y = 13
    lives -= 1
    randomSpawn(power)
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