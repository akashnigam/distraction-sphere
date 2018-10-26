/*global noLoop,degrees,PI,lerpColor,resizeCanvas,CLOSE,vertex,rectMode,CORNER,RGB,ARROW,HAND,cursor,createSlider,createButton,rect,HSB,colorMode,ambientMaterial,pop,cylinder,specularMaterial,radians,rotateX,rotateY,rotateZ,push,box,sphere,directionalLight,texture,orbitControl,createGraphics,WEBGL,createCanvas,color,translate,triangle,frameRate,beginShape,endShape,curveVertex,shuffle,sin,cos,floor,rotate,textAlign,LEFT,RIGHT,CENTER,text,textSize,stroke,noStroke,strokeWeight,keyCode,keyIsDown,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,mouseIsPressed,fill,noFill,mouseX,mouseY,line,ellipse,background,displayWidth,displayHeight,windowWidth,windowHeight,height,width,dist,loadSound,loadImage,image,random,angleMode,RADIANS,DEGREES*/
// create variables up here
var side = 5;
var theta = 0;
function setup(){ 
  createCanvas(windowWidth,windowHeight,WEBGL);  
  // noFill();
}
function draw(){ 
  background(0);
  rotateX(radians(theta));
  rotateY(radians(theta));
  makeBox(50);
  theta += 0.5;
}
function makeBox(sideLen) {
  fill(0,50,255,20);
  if(sideLen == 350) {
     stroke("#c4fcff");
  } else if(sideLen == 50) {
     stroke("#000000");
  } else {
     stroke("#c4fcff");
  }
  if(sideLen<400) {
    sphere(sideLen);
    makeBox(sideLen+150);
  } 
}
