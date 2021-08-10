const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var roof2
var roof3
var roop4
var roop5

var bob1,bob2,bob3,bob4,bob5

var rope1,rope2,rope3,rope4,rope5
//Create multiple bobs, mulitple ropes varibale here
rope1=new rope(bob1,roof,-80,0)
rope2=new rope(bob2,roof,-60,0)
rope3=new rope(bob3,roof,-40,0)
rope4=new rope(bob4,roof,-200,0)
rope5=new rope(bob5,roof,-0,0)

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
display()
{
var pointA=this.rope.bodyA.position 
var pointB=this.rope.BodyB.position

strokeWeight(2)

}  
}
