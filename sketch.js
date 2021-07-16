const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes variable here

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob_options={
		isStatic: false,
		restitution:0.3,
		friction:0, 
		density:1.2
	}
	var roof_options={
		isStatic:true			
	}



	roof = Bodies.rectangle(400,100,400,20,roof_options);
	
	bob1 = Bodies.circle(280, 450, 30, bob_options);
    bob2 = Bodies.circle(340, 450, 30, bob_options);
	bob3 = Bodies.circle(400, 450, 30, bob_options);
	bob4 = Bodies.circle(460, 450, 30, bob_options);
	bob5 = Bodies.circle(520, 450, 30, bob_options);

	rope1 = new rope(roof, bob1,0,0)
	rope2 = new rope(roof, bob2,0,0)
	rope3 = new rope(roof, bob3,0,0)
	rope4 = new rope(roof, bob4,0,0)
	rope5 = new rope(roof, bob5,0,0)

	


	World.add(world,roof);

	World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);



	Engine.run(engine);
	
  console.log(rope1)
  console.log(rope2)

}

function draw() {
  
  
  background("#99004d");

  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,400,20);


//create ellipse shape for multiple bobs here

  ellipseMode(RADIUS);
  ellipse(bob1.position.x,bob1.position.y,30);
  ellipse(bob2.position.x,bob2.position.y,30);
  ellipse(bob3.position.x,bob3.position.y,30);
  ellipse(bob4.position.x,bob4.position.y,30);
  ellipse(bob5.position.x,bob5.position.y,30);
  
  //call display() to show ropes here

 rope.show()  


 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(bob1,{x: 0,y: 0},{x:0.5,y: 0})
	}
  }
  