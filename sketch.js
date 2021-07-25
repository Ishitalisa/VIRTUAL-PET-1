var dog,happyDog,dataBase,foodS,foodStock,dogImg,happyDogimg

function preload()
{
	dogImg=loadImage("images/dog.png")
  
  happyDogimg=loadImage("images/happy.png")
}

function setup() {
	createCanvas(800, 700);
  dataBase=firebase.database();
  dog=createSprite(250,300,150,100);
  dog.scale=0.5
dog.addImage(dogImg);
foodStock=dataBase.ref('Food')
foodStock.on("value",readStock)

  
}


function draw() {  
background(46, 139, 87)
textSize(20);
fill("white")


if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogimg)
}
  drawSprites();
  text("Note:Press Up Arrow Key to feed Drago milk",20,22)

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  dataBase.ref('/').update({
   Food:x 
  })
}



