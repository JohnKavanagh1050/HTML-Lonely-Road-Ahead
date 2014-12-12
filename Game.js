var game;

function Game()
{
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
	
}

Game.prototype.initCanvas = function()
{
	this.canvas = document.createElement("canvas");
	this.ctx = this.canvas.getContext("2d");
	document.body.appendChild(this.canvas);

	this.canvas.width = this.screenWidth;
	this.canvas.height = this.screenHeight;
}

Game.prototype.gameLoop = function()
{
	console.log("gameLoop");
	window.requestAnimationFrame(game.gameLoop);
	game.ctx.clearRect(0,0,1280,900);
	game.draw();
}

function move(e)
{
	var value = e.keyCode;

	if(e.keyCode == 65)
	{
		sceneM.goToScene("OpeningScene")
	}
	if(e.keyCode == 13)
	{
		sceneM.goToScene("MenuScene");
	}
	if(e.keyCode == 67)
	{
		sceneM.goToScene("GameScene");
	}
}

Game.prototype.draw = function()
{
	sceneM.getScene().draw();

	for(var i = 0; i < 100; i++) {
		var r = Math.random()*255;
		var g = Math.random()*255;
		var b = Math.random()*255;

		var x = Math.random() * this.screenWidth;
		var y = Math.random() * this.screenHeight;

		var width = Math.random() * 100;
		var height = Math.random() * 100;

		this.ctx.fillStyle = rgb(r,g,b);

		this.ctx.fillRect(x, y, width, height);
	}
}

function main()
{
	game = new Game();
	sceneM = new SceneManager();
	document.addEventListener('keydown', move);

	game.initCanvas();
	game.gameLoop();
}