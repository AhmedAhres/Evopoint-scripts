#pragma strict

static var currentScore : int = 0; 

var offsetY : float = 40;
var sizeX : float = 80;
var sizeY : float = 25;



function OnGUI () 
{
GUI.Box (new Rect (Screen.width/2-sizeX/2, offsetY, sizeX, sizeY), "Score : " + currentScore);
if (currentScore == 5) {
GameMaster.currentScore = 0;
 Application.LoadLevel("Second");
 }
}

