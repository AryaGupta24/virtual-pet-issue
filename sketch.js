//Create variables here
var dogimg, happyDogimg
var database
var foodS, foodStock

function preload()
{
  //load images here
  dogimg = loadImage("Dog.png");
  happyDogimg = loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  dog = createSprite(200, 600, 50, 50);
  dog.addImage(dogimg);
  if(keyWentDown(UP_ARROW)){
    writeStoke(foodS);
    dog.addImage(happyDogimg);
  }
  drawSprites();
  //add styles here
  
}



