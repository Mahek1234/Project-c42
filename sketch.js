var mainShip;
var defaultPart;
var bothSmokePart;
var leftSidePart;
var rightSidePart;
var thumbsUP;

var mainShipImg;
var defaultPartImg;
var bothSmokePartImg;
var leftSidePartImg;
var rightSidePartImg;
var thumbsUpImg;

var bg;

var invisibleLine;

var hasDocked = false;
function preload(){
  bg = loadImage("pictures/spacebg.jpg");
  mainShipImg = loadImage("pictures/iss.png");
  defaultPartImg = loadImage("pictures/spacecraft1.png");
  bothSmokePartImg = loadImage("pictures/spacecraft2.png");
  leftSidePartImg = loadImage("pictures/spacecraft3.png");
  rightSidePartImg = loadImage("pictures/spacecraft4.png");
}

function setup() {

  createCanvas(800,500);

  defaultPart = createSprite(380,320,50,50)
  defaultPart.addImage(defaultPartImg);
  defaultPart.scale = 0.19;

   mainShip =  createSprite(400, 200, 50, 50);
  mainShip.addImage(mainShipImg);

  invisibleLine = createSprite(320,217,20,5);
  invisibleLine.visible = false;
}

function draw() {
  background(bg);
  
      if(!hasDocked){
        if(keyDown("LEFT_ARROW")){
          defaultPart.velocityX = defaultPart.velocityX-3;
          defaultPart.addImage(leftSidePartImg);
        }
        if(keyWentUp("LEFT_ARROW")){
          defaultPart.velocityX = 0;
          defaultPart.addImage(defaultPartImg);
          
        }
        if(keyDown("RIGHT_ARROW")){
          defaultPart.velocityX = defaultPart.velocityX+3;
          defaultPart.addImage(rightSidePartImg);
        }
        if(keyWentUp("RIGHT_ARROW")){
          defaultPart.velocityX = 0;
          defaultPart.addImage(defaultPartImg);
        }
        if(keyDown("DOWN_ARROW")){
          defaultPart.velocityY = 0;
          defaultPart.addImage(bothSmokePartImg);
        }
        if(keyWentUp("DOWN_ARROW")){
          defaultPart.velocityY = 0;
          defaultPart.addImage(defaultPartImg);
        }
        if(keyDown("UP_ARROW")){
          defaultPart.velocityY = defaultPart.velocityY-3;
        }
        if(keyWentUp("UP_ARROW")){
          defaultPart.velocityY = 0;
        }
      }
      if(defaultPart.isTouching(invisibleLine)){
        defaultPart.addImage(defaultPartImg)
        defaultPart.velocityX=0;
        defaultPart.velocityY=0;
        textSize(25);
        stroke("red")
        text("Docked succesful ",300,400);
        
      }

  drawSprites();
}