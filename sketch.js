
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1, wall2,wall3
var wallbody1, wallbody2, wallbody3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(310, 595, 20, 100);

	wall2 = createSprite(400, 650, 200, 20);

    wall3 = createSprite(490, 595, 20, 100);
	packageSprite.setCollider("circle",0,0,4)
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	wallbody1 = Bodies.rectangle(310, 595, 20, 100, {isStatic:true})
		World.add(world, wallbody1);

	wallbody2 = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});
	World.add(world, wallbody2);

	wallbody3 = Bodies.rectangle(490, 595, 20, 100, {isStatic:true});
	World.add(world, wallbody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

wall1.shapeColor="red";
wall2.shapeColor="red";
wall3.shapeColor="red";


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wall1.x= wallbody1.position.x
  wall1.y= wallbody1.position.y

  wall2.x= wallbody2.position.x
  wall2.y= wallbody2.position.y

  wall3.x= wallbody3.position.x
  wall3.y= wallbody3.position.y

 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}

