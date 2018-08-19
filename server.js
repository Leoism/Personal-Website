var express = require("express");
var app = express();
var router = express.Router();
var path = require('path')


app.use('/bootstrap', express.static(__dirname + '/bootstrap'))
app.use('/ribble_game/css', express.static(__dirname + '/ribble_game/css'))
app.use('/ribble_game/images', express.static(__dirname + '/ribble_game/images'))
app.use('/ribble_game/scripts', express.static(__dirname + '/ribble_game/scripts'))
app.use('/ribble_game/game', express.static(__dirname + '/ribble_game/game'))
app.use('/ribble_game/game/css', express.static(__dirname + '/ribble_game/game/css'))
app.use('/ribble_game/game/Libraries', express.static(__dirname + '/ribble_game/game/Libraries'))
app.use('/ribble_game/game/scripts', express.static(__dirname + '/ribble_game/game/scripts'))
app.use('/ribble_game/game/sprites', express.static(__dirname + '/ribble_game/game/sprites'))

app.get('/',  function(req, res) {
	res.sendFile('index.html', {
		root: path.join(__dirname + '/')
	})
})

app.get('/menu', function(req, res) {
	res.sendFile('/ribble_game/menu.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/about', function(req, res) {
	res.sendFile('/ribble_game/about.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/loading', function(req, res) {
	res.sendFile('/ribble_game/loading.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/game_start', function(req, res) {
	res.sendFile('/ribble_game/game/game_start.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/ribble_drop', function(req, res) {
	res.sendFile('/ribble_game/game/ribble_drop.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/ribble_catch', function(req, res) {
	res.sendFile('/ribble_game/game/ribble_catch.html', {
		root: path.join(__dirname, '/')
	})
})


app.listen(80,function(){
  console.log("Live at Port 80");
});