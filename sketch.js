var thickness, speed, weight;
var damage=0;

var wall, bullet;



function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

   damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);

  wall = createSprite(1500, 200, thickness, 200);
  wall.shapeColor=(80,80,80);

  bullet = createSprite(50,200,50,15);
  bullet.shapeColor = ("white");
  bullet.velocityX=speed;

  console.log(damage);
  console.log(speed);
  console.log(weight);


}

function draw() {
  background(0);
  

  if(bullet.collide(wall)){
 
    bullet.velocityX=0;

  if(damage<10){
    // green color
    wall.shapeColor=rgb(37,246,24);

  }

  if(damage>=10){
    // red color
    wall.shapeColor=("red"); 
     
  }

}
  
  drawSprites();
}