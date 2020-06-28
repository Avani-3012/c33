
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Events = Matter.Events;
 var engine,world;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var  variableturn =0;
var gamestate = "PLAY";
 

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill(255)
 text("Score : "+score,20,30);
 text("CHANCES : "+variableturn,620,30);
 text("500",100,520);
 text("500",20,520);
 text("500",180,520);
 text("500",260,520);
 text("100",340,520);
 text("100",420,520);
 text("100",500,520);
 text("200",660,520);
 text("200",740,520);
 text("200",580,520);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle =null;
        if(variableturn>=5) gamestate!="PLAY"

        
      }
    
    }
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100;
        particle =null;
        if(variableturn>=5) gamestate!="PLAY"

        
      }
    
    }
    if(particle.body.position.y>760){
      if(particle.body.position.x>601&&particle.body.position.x<900){
        score = score+200;
        particle =null;
        if(variableturn>=5) gamestate!="PLAY"

        
      }
    
    }
    if(gamestate!== "PLAY"){
      textSize(70)
     text("GameOver",400,400)
    }
   }
function mousePressed(){
  if(gamestate === "PLAY"){
   count ++
   particle =new Particle(mouseX,10,10,10);
  }
}