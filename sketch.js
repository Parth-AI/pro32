const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world,constraint;
var score = 0;

function setup() {
  var canvas = createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;

  //first set
  fill("yellow");
  ground1 = new Ground(540,400,150,10);

  //fourth layer
  box1 = new Box(480,380,20,40)
  box2 = new Box(500,380,20,40);
  box3 = new Box(520,380,20,40);
  box4 = new Box(540,380,20,40);
  box5 = new Box(560,380,20,40);
  box6 = new Box(580,380,20,40);
  box7 = new Box(600,380,20,40);

  //third layer
  box8  = new Box(500,340,20,40);
  box9  = new Box(520,340,20,40);
  box10 = new Box(540,340,20,40);
  box11 = new Box(560,340,20,40);
  box12 = new Box(580,340,20,40);

  //second layer
  box13 = new Box(520,300,20,40);
  box14 = new Box(540,300,20,40);
  box15 = new Box(560,300,20,40);

  //first layer
  box16 = new Box(540,270,20,40);

  //second set
  ground2 = new Ground(1040,300,130,10);

   //third layer
   box17 = new Box(1000,270,20,40);
   box18 = new Box(1020,270,20,40);
   box19 = new Box(1040,270,20,40);
   box20 = new Box(1060,270,20,40);
   box21 = new Box(1080,270,20,40);
  
   //second layer
   box22 = new Box(1020,230,20,40);
   box23 = new Box(1040,230,20,40);
   box24 = new Box(1060,230,20,40);

   //first layer
   box25 = new Box(1040,190,20,40);

   //polygon
   polygon1 = new Polygon(200,200,10);

   //sling
   slingshot1 = new Slingshot(polygon1.body,{x:200,y:190});

}

function draw() {

  back1();

  textSize(18);
  fill("red");
  text("SCORE : "+score,750,40);

  Engine.update(engine);

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  polygon1.display();

  slingshot1.display();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed() {
  if(keyCode === 32){
      slingshot1.attach(polygon1.body);
  }
}

async function back1(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var DateTime = responseJSON.datetime;
  var hour = DateTime.slice(11,13);

  if(hour>=06&&hour<=18){
    background("black");
}
  else{
    background("white");
  }

}