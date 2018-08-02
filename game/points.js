function highScore() {
	console.log(points)
	document.getElementById("points").innerHTML = 'Your High Score: ' + localStorage.getItem('high_score')
}