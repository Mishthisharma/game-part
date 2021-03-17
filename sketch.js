/*var man , bgImg , obstacle1 , obstacle2 , obstacle3 , obstacle4 , obstacle5 , obstacle6
var landObstacleGroup
var ground
var score = 0
function preload()
{
	man = createImg("Images/Man with broom.png")
	obstacle1 = loadImage("Images/plasticBottle.jpg.png")
	obstacle2 = loadImage("Images/plasticBag.jpg.png")
	obstacle3 = loadImage("Images/rottenVegetable.jpg.png")
	obstacle4 = loadImage("Images/ketchupBottle.png")
	obstacle5 = loadImage("Images/fishCan.jpg.png")
	obstacle6 = loadImage("Images/crushedCan.jpg.png")
	ground = loadImage("Images/bgImg.jpg")
}
function setup()
{
	createCanvas(displayWidth -48 , displayHeight-201)
	
	landObstacleGroup = new Group()
	man.position(0 , displayHeight-0)
	background(ground)
	ground.x = width/2
  ground.velocityX = -(6 + 3*score/100);
	

}
function draw()
{
	spawnObstacles();
	drawSprites();
	
}
function spawnObstacles()
{
	// for chossing the obstacles
	if (frameCount%80===0) 
	{

	  var obstacle = createSprite(200 , 200 , 20 , 20)
	  obstacle.velocityX = -4
	  background(ground)
	  
	  var rand = Math.round(random(1, 6))
	  switch (rand) {
		  case 1: obstacle.addImage(obstacle1); break;
		  case 2: obstacle.addImage(obstacle2); break;
		  case 3: obstacle.addImage(obstacle3); break;
		  case 4: obstacle.addImage(obstacle4); break;
		  case 5: obstacle.addImage(obstacle5); break;
	      case 6: obstacle.addImage(obstacle6); break;
		  default:
			  break;
	  }
      landObstacleGroup.add(obstacle)
	}
	
}*/