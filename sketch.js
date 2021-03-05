const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var heroImg, hero;
var monsterImg, monster;
var ground;
var rope;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20;

function preload() {
  bg = loadImage("images/GamingBackground.png");
  heroImg = loadImage("images/Superhero-01.png");
  monsterImg = loadImage("images/Monster-01.png");
}

function setup() {
  createCanvas(1700, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750, 650, 1500, 50);
  hero = new Hero(500, 100, 100);
  monster = new Monster(1200, 600, 150);
  rope = new Fly(hero.body, {x:750, y:200});

  b1 = new Box(750, 100);
  b2 = new Box(750, 110);
  b3 = new Box(750, 120);
  b4 = new Box(750, 140);
  b5 = new Box(750, 160);
  b6 = new Box(750, 170);
  b7 = new Box(750, 180);
  b8 = new Box(750, 190);
  b9 = new Box(750, 200);
  b10 = new Box(750, 210);
  b11 = new Box(750, 220);
  b12 = new Box(750, 230);
  b13 = new Box(750, 240);
  b14 = new Box(750, 250);
  b15 = new Box(750, 260);
  b16 = new Box(750, 270);
  b17 = new Box(750, 280);
  b18 = new Box(750, 290);
  b19 = new Box(750, 300);
  b20 = new Box(750, 310);
  b21 = new Box(750, 280);
  b22 = new Box(750, 290);
  b23 = new Box(750, 300);
  b24 = new Box(750, 310);

  b25 = new Box(850, 100);
  b26 = new Box(850, 110);
  b27 = new Box(850, 120);
  b28 = new Box(850, 140);
  b29 = new Box(850, 90);
  b30 = new Box(850, 160);
  b31 = new Box(850, 170);
  b32 = new Box(850, 180);
  b33 = new Box(850, 190);
  b34 = new Box(850, 200);
  b35 = new Box(850, 210);
  b36 = new Box(850, 220);
  b37 = new Box(850, 230);
  b38 = new Box(850, 240);
  b39 = new Box(850, 250);
  b40 = new Box(850, 260);
  b41 = new Box(850, 270);
  b42 = new Box(850, 280);
  b43 = new Box(850, 290);
  b44 = new Box(850, 300);
  b45 = new Box(850, 310);
  b46 = new Box(850, 280);
  b47 = new Box(850, 290);
  b48 = new Box(850, 300);
  b49 = new Box(850, 310);
}

function draw() {
  Engine.update(engine);

  background(bg);

  ground.display();
  hero.display();
  monster.display();
  rope.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();
  b47.display();
  b48.display();
  b49.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}

