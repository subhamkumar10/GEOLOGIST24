const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer,iron;
var stone,rubber;
var sand,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    hammer=new Hammer(700,380,70,70);
    iron=new Iron(900,380,70,70);
    ground=new Ground(200,height,2000,20);
    stone=new Stone(800,320,300,PI/2);
    rubber=new Rubber(500,350);

    sand=new Sand(400,320);
    sand1=new Sand(420,320);
    sand2=new Sand(450,320);
    sand3=new Sand(380,320);
    sand4=new Sand(460,320);
    sand5=new Sand(350,320);
    sand6=new Sand(410,320);
    sand7=new Sand(505,320);
    sand8=new Sand(300,320);
    sand9=new Sand(320,320);
    sand10=new Sand(390,320);
  
    }

    function draw(){
    background("pink");
    Engine.update(engine);
    hammer.display();
    iron.display();
    ground.display();
    stone.display();
    rubber.display();
    sand.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    


 
}