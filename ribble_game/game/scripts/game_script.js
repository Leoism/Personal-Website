let roko
let toko
let coco
let myGamePiece

function startGame() {
	myGameArea.start()
	myGamePiece = new component(300, 300, "red", 10, 120)
}

function component (width, height, color, x, y) {
	this.width = width
	this.height = height
	this.x = x
	this.y = y
	ctx = myGameArea.context
	ctx.fillStyle = color
	ctx.fillRect(this.x, this.y, this.width, this.height)
}

let myGameArea = {
	canvas : document.createElement("canvas"),
	start : function () {
		this.canvas.width = 480;
		this.canvas.height = 480;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas,
			document.body.childNodes[0])
	}
}
