OpeningScene.prototype = new Scene("OpeningScene");       			// Here's where the inheritance occurs 

function OpeningScene()
{
	
}

OpeningScene.prototype.draw = function()
{
	game.ctx.font = "40px Jing Jing";
	game.ctx.fillText("Lonely Road Ahead", 400, 300);
	game.ctx.fillText("Created By:", 200, 400);
	game.ctx.fillText("John Kavanagh & Eoghan Gibbons", 200, 500);
	game.ctx.fillText("Press Enter to continue", 290, 600);
	document.body.style.backgroundColor = "#00aeff";
}