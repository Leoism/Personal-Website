var express = require("express");
var app = express();
var router = express.Router();
var path = require('path')

app.use('/css', express.static(__dirname + '/css'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/scripts', express.static(__dirname + '/scripts'))
app.use('/game', express.static(__dirname + '/game'))
app.use('/game/css', express.static(__dirname + '/game/css'))
app.use('/game/Libraries', express.static(__dirname + '/game/Libraries'))
app.use('/game/scripts', express.static(__dirname + '/game/scripts'))
app.use('/game/sprites', express.static(__dirname + '/game/sprites'))

app.get('/', function(req, res) {
	res.sendFile('index.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/about', function(req, res) {
	res.sendFile('about.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/loading', function(req, res) {
	res.sendFile('loading.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/game_start', function(req, res) {
	res.sendFile('/game/game_start.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/ribble_drop', function(req, res) {
	res.sendFile('/game/ribble_drop.html', {
		root: path.join(__dirname, '/')
	})
})

app.get('/ribble_catch', function(req, res) {
	res.sendFile('/game/ribble_catch.html', {
		root: path.join(__dirname, '/')
	})
})


app.listen(80,function(){
  console.log("Live at Port 80");
});