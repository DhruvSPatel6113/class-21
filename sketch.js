var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(200,300,50,50);
  rect1.velocityX=2;
  rect1.shapeColor="red";
  
  rect2=createSprite(800,400,50,50);

  rect3=createSprite(1000,300,50,50);
  rect3.velocityX=-2;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //rect3.x=World.mouseX;
  //rect3.y=World.mouseY;

 /* if (isTouching(rect3,rect1)){

    .shapeColor = "blue";
    rect1.shapeColor = "blue";

  }
  else{

    rect3.shapeColor = "green";
    rect1.shapeColor = "green";

  }*/

    bounceOff(rect3,rect1);

  drawSprites();
}