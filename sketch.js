var bg,bgImg;
var birdImg;




function preload(){
  
  birdImg = loadImage("assets/bird.png")

  pipe1 = loadImage("assets/pipe1.png")
  pipe2 = loadImage("assets/pipe2.png")
  pipe3 = loadImage("assets/pipe3.png")
  pipe4 = loadImage("assets/pipe4.png")
  pipe5 = loadImage("assets/pipe5.png")

  bgImg = loadImage("assets/background.png")

}

function setup() {

  
  createCanvas(1200,800);

  //adding the background image
  bg = createSprite(0,0,800,800)
bg.addImage(bgImg)
bg.scale = 1.1

pipesGroup=new Group();
  



}

function draw() {
  background(0); 



if(keyWentDown("space")){
 
  bird.y=bird.y-1
 
}

spawnTopPipes();
spawnBottomPipes();

drawSprites();

}

function spawnTopPipes(){
  var tPipe=createSprite(800,20,40,200);
  tPipe.velocityX= -2;
  pipesGroup.add(tPipe);
 var r = math.round.random(1,5);
 switch(r){
   case 1: tPipe.addImage(pipe1)
   break;
   case 2: tPipe.addImage(pipe2)
   break;
   case 3: tPipe.addImage(pipe3)
   break;
   case 4: tPipe.addImage(pipe4)
   break;
   case 5: tPipe.addImage(pipe5)
   break;
  
 }
}

function spawnBottomPipes(){
  var bPipe=createSprite(800,20,40,200);
  bPipe.velocityX= -2;
  pipesGroup.add(bPipe);
 var rand = math.round.random(1,5);
 switch(rand){
   case 1: bPipe.addImage(pipe1)
   break;
   case 2: bPipe.addImage(pipe2)
   break;
   case 3: bPipe.addImage(pipe3)
   break;
   case 4: bPipe.addImage(pipe4)
   break;
   case 5: bPipe.addImage(pipe5)
   break;
