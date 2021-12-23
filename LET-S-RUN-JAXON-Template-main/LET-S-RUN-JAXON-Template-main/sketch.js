var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var powerimg,energydrink;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  powerimg= loadAnimation("power.png");
  energydrink=loadAnimation("energyDrink.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(10,0,100,800);
 leftBoundary.visible = false;
 edges= createEdgeSprites();
  boy.collide(edges);
  

 powerimg=createSprite(25,200,30,20);

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }
 
  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  drawSprites();
}

