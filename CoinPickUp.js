#pragma strict

var CoinEffect : Transform;
var coinValue = 1;

function OnTriggerEnter (info : Collider) 
{
   if (info.name == "Ball")
   {
       GameMaster.currentScore += coinValue;
       GameMaster2.currentScore += coinValue;
       var effect = Instantiate(CoinEffect, transform.position, transform.rotation);
       Destroy(effect.gameObject, 3);
       Destroy(gameObject);
   }
}