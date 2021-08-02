//variables
    var garden,rabbit;
    var gardenImg,rabbitImg;
    var apple;
    var orange;
    var leaf;

//imagenes
function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    orangeImg = loadImage("orangeLeaf.png");
    leafImg = loadImage("leaf.png");
}

function setup(){
//canvas  
    createCanvas(400,400);
  
//jardin
    garden=createSprite(200,200);
    garden.addImage(gardenImg);

//conejo
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);
}

//movimiento
function draw() {
    background(0);
    rabbit.x = World.mouseX;
    edges= createEdgeSprites();
    rabbit.collide(edges);

//math,round
drawSprites();
    var opciones = Math.round(random(1,3));
     if(frameCount%70===0) {
       if(opciones===1) {
         createApples();
}
    else if(opciones===2) {
      createOranges();
}
    else {
      createLeafs();
}
}
  
  
  
}
//funciones
function createApples() {
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage("manzana", appleImg);
    apple.velocityY = 3;
    apple.scale = 0.1;
    apple.lifetime = 100;
}
function createOranges() {
    orange = createSprite(random(50,350),40,10,10);
    orange.addImage("naranja", orangeImg);
    orange.velocityY = 3;
    orange.scale = 0.1;
    orange.lifetime = 100;
}
function createLeafs() {
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage("hoja", leafImg);
    leaf.velocityY = 3;
    leaf.scale = 0.1;
    leaf.lifetime = 100;
}