var canvas;
var music;
var smallbox;
var box1;
var box2;
var box3 ;
var box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //smallbox
    smallbox = createSprite(random(20,750));
    smallbox.shapeColor = "white";
    smallbox.velocityX = 1;
    smallbox.velocityY = 1; 

    //box1
    box1 = createSprite(550,150,150,50);
     box1.shapeColor = rgb(255,0,0);

    //box2
     box2 = createSprite(550,300,150,50);
     box2.shapeColor = rgb(0,255,0);

     //box3
     box3 = createSprite(550,450,150,50);
     box3.shapeColor = rgb(255,255,0);

     //box4
     box4 = createSprite(550,600,150,50);
     box4.shapeColor =  rgb(0,0,255);



    

}

function draw() {
    background(rgb(169,169,169));
     
    createEdgeSprites();

    if ( smallbox.isTouching(box1) && smallbox.bounceOff(box1)){
        smallbox.shapeColor = rgb(255,0,0);
      }

    if ( smallbox.isTouching(box2) && smallbox.bounceOff(box2)){
        smallbox.shapeColor = rgb(0,255,0);
        playSound("music.mp3");
    }

    if ( smallbox.isTouching(box3) && smallbox.bounceOff(box3)){
        smallbox.shapeColor = rgb(255,255,0);     
    }

    if ( smallbox.isTouching(box4) && smallbox.bounceOff(box4)){
        smallbox.shapeColor = rgb(0,0,255);
        
    }
}

function bounceOff (){
  
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2){
      smallbox.velocityX = -1;
      smallbox.velocityY = -1;
   
    }  
  
  
    } 

    


    function isTouching(object1,object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2
          && object2.x - object1.x < object2.width/2 + object1.width/2
          && object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object2.y < object2.height/2 + object1.height/2) {
          
          return true;
        }
        else {
          return false;
        } 
      }