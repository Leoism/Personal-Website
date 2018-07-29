function loadGame() {
	setTimeout(function() {
		window.location.href = 'game/game_start.html'
	}, 3000)
}

let points = 0
function addPoints() {
	points = points + 1
	document.getElementById("points").innerHTML = 'Points: ' + points
}