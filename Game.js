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
	if(e.keyCode == 66)
	{
		sceneM.goToScene("MiddleScene");
	}
	if(e.keyCode == 67)
	{
		sceneM.goToScene("EndScene");
	}
}

Game.prototype.draw = function()
{
	sceneM.getScene().draw();
}

function main()
{
	game = new Game();
	sceneM = new SceneManager();
	document.addEventListener('keydown', move);

	game.initCanvas();
	game.gameLoop();
	//document.addEventListener("keydown", move);
	// game.canvas.addEventListener('mousedown',function()
	// 	{
	// 		sceneM.goToNextScene();
	// 	}
	// );
}