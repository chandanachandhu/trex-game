var trex;
var trex_running;
var edges;
var ground_img;
var ground;


function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);


  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(200,180,600,20);
  ground.addImage(ground_img);
  ground.x = ground.width/2
  edges = createEdgeSprites();

}


function draw(){
background("white");
ground.velocityX = -3

console.log(ground.x);

if(ground.x <0);
{
  ground.x = ground.width/2
}

if(keyDown("space")){
  trex.velocityY = -10;
}

trex.velocityY= trex.velocityY + 0.5;
trex.collide(ground);





drawSprites();
}