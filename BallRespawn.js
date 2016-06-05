#pragma strict

var maxFallDistance = -10;
function Update () {
         if(transform.position.y <= maxFallDistance)
{
    Application.LoadLevel("TryAgain");
    GameMaster.currentScore = 0;
  
}
}

