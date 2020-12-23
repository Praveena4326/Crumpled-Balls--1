
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage
function preload()
{
	bgImage = loadImage("Background.jpg");
}

function setup() {
	createCanvas(1366, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper (300,570,40);
	ground = new Ground (700,580,1400,10);
	dustbin1 = new Dustbin(1002,475,10,200);
	dustbin2 = new Dustbin(885,570,225,10);
	dustbin3 = new Dustbin(770,475,10,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  push()
  stroke(700);
  pop()
  fill("Yellow");
  text("D U S T B I N",845,400);

  
    
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:280,y:-290})
	}
}



