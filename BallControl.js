#pragma strict

var rotationSpeed = 200;
static var jumpHeight = 8;

var distToGround : float;

function Start ()
{
// Getting distance from center to grounds
distToGround = GetComponent.<Collider>().bounds.extents.y;
}
function Update () 
{
    // Handle ball rotation
    var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
    rotation *= Time.deltaTime;
    GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
    
    if (Input.GetKeyDown(KeyCode.W) && IsGrounded()) 
    {
    
    GetComponent.<Rigidbody>().velocity.y = jumpHeight;
    
    }
    
}

function IsGrounded () : boolean { //Check if we are on the ground. Return true if we are
return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}


function OnCollisionEnter () {

}