var eu;
function setup() {
  createCanvas(400,400);
eu = createSprite(200,200,25,25);

}

function draw() 
{
  background(30);
drawSprites();

if (keyDown("w")){
eu.position.y -=5;
}




}