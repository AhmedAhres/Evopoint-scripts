#pragma strict

function OnTriggerEnter (info : Collider) 
{
   if (info.name == "Ball")
   { 
   BallControl.jumpHeight = 30;
   }
  }