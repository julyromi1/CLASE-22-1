const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var sosten;
var jugador;
var flecha;
var tablero;
var arco;
var angle= 15;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  piedra=loadImage ("assets/base.png");
  player=loadImage ("assets/player.png");
  arrow=loadImage ("assets/arrow.png");
  board=loadImage ("assets/board.png");
  playerArcher=loadImage ("assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options={
    isStatic:true
  };

  sosten=Bodies.rectangle(160,350,120,100,options);
  World.add(world,sosten);

  jugador=Bodies.rectangle(180,210,50,150,options);
  World.add(world,jugador);

  flecha=Bodies.rectangle(180,210,20,70,options);
  World.add(world,flecha);

  tablero=Bodies.rectangle(890,210,90,100,options);
  World.add(world,tablero);

  arco=Bodies.rectangle(250,210,50,150,options);
  World.add(world,arco);

  playerArcher=Bodies.rectangle(250,210,50,150,options);
  World.add(world,playerArcher);

  //crear el cuerpo base del jugador

  //crear el cuerpo del jugador



}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  if (keyIsDown (RIGHT_ARROW) && angle<70){
    angle+=1;
    }
    if (keyIsDown (LEFT_ARROW) && angle>-30){
    angle-=1;  
    }
    push ();
    translate(250,210);    //translada.
    rotate (angle);         //rota.
    image (playerArcher,0,0,120,130);
    pop ();

  image(piedra,sosten.position.x,sosten.position.y,120,100);
  image(player,jugador.position.x,jugador.position.y,70,150)
  image(arrow,flecha.position.x,flecha.position.y,20,70);
  image(board,tablero.position.x,tablero.position.y,90,100);
  //image(playerArcher,arco.position.x,arco.position.y,120,130);
  //rotate ();
  

  //mostrar la imagen del jugador utilizando la función image()

  //mostrar la imagen de la base del jugador utilizando la función image()

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
