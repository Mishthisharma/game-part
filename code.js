var PLAY = 1;
var END = 0;
var gameState = PLAY;
var man 
var ground, invisibleGround, groundImage;
var obstaclesGroup, GARBAGE1, GARBAGE2, GARBAGE3, GARBAGE4 , GARBAGE5, GARBAGE6 , OBSTACLE1 , OBSTACLE2 
var backgroundImg;
var garbageGroup;
var score=0;
var gameOver, restart;
function preload()
{
    man = createImg("Images/Man with broom.png")
    //ground = createImg("Images/ground.Png")
    backgroundImg = loadImage("Images/background Image.jpg")
    obstacle1 = loadImage("Images/plasticBottle.jpg.png")
	obstacle2 = loadImage("Images/plasticBag.jpg.png")
	obstacle3 = loadImage("Images/rottenVegetable.jpg.png")
	obstacle4 = loadImage("Images/ketchupBottle.png")
	obstacle5 = loadImage("Images/fishCan.jpg.png")
	obstacle6 = loadImage("Images/crushedCan.jpg.png")
    gameOver  = loadImage("Images/gameOver.jpg")
    //restart   = loadImage("Images/restartImg.png")
    OBSTACLE1 = loadImage("Images/NO PLASTIC.png")
    OBSTACLE2 = loadImage("Images/dustbin.jpg.png")
    
}
function setup()
{
    background(backgroundImg)
    createCanvas(displayWidth -48 , displayHeight-201);
    man.position(0 , 30)
    man.scale = 0.08
    backgroundImg.x = width/2
    backgroundImg.velocityX = -(6 + 3*score/100);
    garbageGroup = new Group();
    score = 0;
    
  
  
}
function draw()
{
    background(backgroundImg);
  textSize(20);
  fill("black")
  text("Score: "+ score,30,50);
  if (gameState === 1)
  {
    OBSTACLE1.velocityX = 5;
    OBSTACLE2.velocityX = 2;
    spawnGarbage();
  man.velocityX = -11
  
  if(keyDown("space")) {
    man.velocityY = -16;
  }
  
    drawSprites();
    console.log(man.y)
}
function spawnGarbage()
{
	// for chossing the obstacles
	if (frameCount%80===0) 
	{

	  var garbage = createSprite(200 , 200 , 20 , 20)
	  garbage.velocityX = -4
      
	  //background(ground)
	  
	  var rand = Math.round(random(1, 6))
	  switch (rand) {
		  case 1: garbage.addImage(GARBAGE1); break;
		  case 2: garbage.addImage(GARBAGE2); break;
		  case 3: garbage.addImage(GARBAGE3); break;
		  case 4: garbage.addImage(GARBAGE4); break;
		  case 5: garbage.addImage(GARBAGE5); break;
	      case 6: garbage.addImage(GARBAGE6); break;
		  default:
			  break;
	  }
      garbageGroup.add(garbage)
    }
}
}
