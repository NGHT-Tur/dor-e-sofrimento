const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var mommylonglegs;
var louca, doideira, doida, loucura;
var umamortediferente1;
var umamortepraaprenderanaomeassustarpulandonaminhacabeca1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  louca = new Contencao(10,200,20,400);
  doideira = new Contencao(390,200,20,400);
  doida = new Contencao(200,10,400,20);
  loucura = new Contencao(200,390,400,20);
  var mommylonglegsconfig = {
    restitution: 0.95,
  }
mommylonglegs = Bodies.circle(200,100,50,mommylonglegsconfig);
World.add(world,mommylonglegs);
umamortediferente1= createImg("right.png");
umamortediferente1.position(220,30);
umamortediferente1.size(50,50);
umamortediferente1.mouseClicked(umamortediferente);
umamortepraaprenderanaomeassustarpulandonaminhacabeca1=createImg("up.png")
umamortepraaprenderanaomeassustarpulandonaminhacabeca1.position(20,30);
umamortepraaprenderanaomeassustarpulandonaminhacabeca1.size(50,50);
umamortepraaprenderanaomeassustarpulandonaminhacabeca1.mouseClicked(umamortepraaprenderanaomeassustarpulandonaminhacabeca);
}

function draw() 
{
  background("white");
  Engine.update(engine);

  louca.desenhar();
  doideira.desenhar();
  doida.desenhar();
  loucura.desenhar();
  push();
  fill("DeepPink");
  ellipse(mommylonglegs.position.x,mommylonglegs.position.y, 50);
  pop();
}



function umamortediferente() {
Matter.Body.applyForce(mommylonglegs,{
x:0,
y:0
},{
x:0.8,
y:0
});
}

function umamortepraaprenderanaomeassustarpulandonaminhacabeca() {
  Matter.Body.applyForce(mommylonglegs,{
  x:0,
  y:0
  },{
  x:0,
  y:-0.8
  });
  }