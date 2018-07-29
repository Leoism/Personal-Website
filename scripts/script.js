function loadGame() {
	setTimeout(function() {
		window.location.href = 'game/game_start.html'
	}, 3000)
}

function addPoints() {
	let points = document.getElementById("points")
	points.innerHTML += 1
}