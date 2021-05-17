
var back,bgImg;
var mouse,mImg1,mImg2,mImg3;
var cat,catImg,catImg2,catImg3,catImg4;


function preload() {
    //load the images here
    back=loadImage("garden.png",bgImg);
   mouse =loadAnimation("mouse1.png",mImage1);
   mouse=loadAnimation("mouse3.png","mouse2.png",mImg2);
   mouse=loadAnimation("mouse4.png",mImg3);
   cat=loadAnimation("cat1.png",catImg);
   cat=loadAnimation("cat2.png",catImg2);
   cat=loadAnimation("cat3.png",catImg3);
   cat=loadAnimation("cat4.png",catImg4);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(1000,800);
    back.addImage("garden.png",bgImg);

    mouse=createSprite(250,600,50,50);
    mouse.addAnimation("run",mImage1);

    cat=createSprite(650,600,50,50);
    cat.addAnimation("sit",catImg);

}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    if(mouse.x-cat.x<cat.width/2+mouse.width/2
        && cat.x-mouse.x<cat.width/2+mouse.width/2
        && mouse.y-cat.y<cat.height/2+mouse.height/2
        && cat.y-mouse.y<cat.height/2+mouse.height/2){
        mouse.addAnimation("move",mImg3);
        cat.addAnimation("walk",catImg4)
      
        }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keydown("LEFT_ARROW")){
     cat.velocityX=-2;
     cat.velocityY=0;
      mouse.addAnimation("laugh",mImg2)
      && cat.addAnimation("running",catImg2);

  }


}
