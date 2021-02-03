var dogImg1,dogImg,dog,database,foodS,foodStock;

function preload()
{
dogImg1=loadImage("Images/dogImg1.png");
dogImg=loadImage("Images/dogImg.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog= createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg1);
}


  drawSprites();
  fill(255,255,254);
  stroke("dark blue");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(food){
  if(food<=0){
    food=0;
  }else{
    food=food-1;
  } 
  database.ref('/').update({
    Food:food
  })
}




