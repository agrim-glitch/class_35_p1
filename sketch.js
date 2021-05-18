//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
	d1 = loadImage("dog1.png");
  d2 = loadImage("dog2.png");
  h1 = loadImage("house.png")
  

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(230,330,200,200)
  dog.addImage(d2)
  dog.scale = 0.6

  foodStock = database.ref('food');
  foodStock.on("value",readStock)
  
}


function draw() {  

  background(h1)

 
  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(d1)
  }
  drawSprites();
  textSize(20)
    fill('pink')  
   text("food left : "+ foodS,20,20);
   text("press up arrow key to feed courage",100,460)
}

function readStock(data){
foodS = data.val();

}

function writeStock(x)
{
if(x<=0){

  x =0
}else{

  x= x-1
}
  database.ref('/').update({
    food:x
  })
}}