
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var invisibleground;
var sprite1Image
var obstacle1;
var obstacle1Image;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 sprite1Image = loadImage("sprite_1.png")
  obstacle1Image = loadImage("obstacle.png")
}



function setup() {
  createCanvas(600,550);

  monkey = createSprite(100,350,50,50)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3;

 
 
  
  invisibleground = createSprite(600,500,1200,10)
  invisibleground.visible = false;
    foodGroup = createGroup();
   obstacleGroup = createGroup();
}
Time = 0;

function draw() {
background("white")
  text("Survival Time :"+ Time,240,50);
  Time = Time + Math.round(frameCount/60);
  obstaclesGroup = createGroup();
  if (keyDown("space"))
    {
     monkey.velocityY = -9;
     
    }
    if (monkey.y<100)
      {
        monkey.velocityY = monkey.velocityY + 0.8
      }
   monkey.collide(invisibleground);
  
   if (foodGroup.isTouching(monkey)) 
   {
     foodGroup.destroyEach()
   }
  
  if (obstacleGroup.isTouching(monkey))
{
    monkey.destroy()
  text("gameOVER",300, 250 )
  obstacle.velocityX=0
  
}  
  banana()
 obstacle()
  drawSprites()
}

  

function banana (){
if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage );
    banana.scale = 0.2;
    banana.velocityX = -7;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
   foodGroup.add(banana)
}    
    
   
  }
  function obstacle(){
    if(frameCount % 120 === 0){
    var  obstacle = createSprite(600,465,10,40)
      obstacle.y = Math.round(random(60,60))
  obstacle.addImage( obstacleImage)
  obstacle.scale = 0.4;
  obstacle.velocityX = -7;
      obstacle.lifetime = 200;
  
      banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
      
      obstacleGroup.add(obstacle)
    }
  }
