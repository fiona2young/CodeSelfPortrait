/************************************************
CodeSketchPortrait
  by Fiona Young
Overview – This project is a coded version of an
originally drawn self portrait on paper.

------------------------------------------------
Notes: 
(1) The functions drawn are all seperate features.
************************************************/


//Global Variables
var numColumns = 8;
var numRows = 8;
var bubbleWH = 60;


// Setup code
function setup() {
    createCanvas(600, 700);
 }


// Draw code
function draw() {
    background(160, 210, 180);
    
    for(let i = 0; i < numColumns; i++) {
        for (let j = 0; j < numRows; j++) {
            drawBubble(100 * (i+0.25), 110 * (j+0.25));
            drawBubble(85 * (i+1), 155 * (j+1));
            drawBubble2(100 * i, 100 * j);
            drawBubble3(175 * i, 145 * (j+.5));
        }
    }
    
    hairBack();
  
    neck();
    
    pullover();
    
    face(); 
    
    hairFront();
  
    features();
}

function drawBubble(x,y) {
    noStroke();
    fill(0, 100, 150, 55);
    ellipse(x, y, bubbleWH, bubbleWH);
    fill(0, 60, 180, 20);
    ellipse(x, y, bubbleWH - 20, bubbleWH - 20);
}

function drawBubble2(x,y) {
    noStroke();
    fill(0, 160, 120, 45);
    ellipse(x, y, bubbleWH/2, bubbleWH/2);
}

function drawBubble3(x,y) {
    noStroke();
    fill(0, 20, 190, 25);
    ellipse(x, y, bubbleWH*2, bubbleWH*2);
}


function hairBack() {
    noStroke();
    fill(21, 55, 116);
    arc(295, 400, 430, 560, PI, 0, OPEN);
    arc(295, 400, 430, 480, 0, PI, OPEN);
  
  
    fill(20, 27, 48);
    beginShape();  //collar front
    vertex(200, 520);
    bezierVertex(200, 480, 400, 480, 400, 520);
    vertex(410, 630);
    vertex(190, 630);
    endShape();
}

function neck() {
    fill(89, 188, 212);
    beginShape();
    vertex(220, 450);
    vertex(385, 450);
    vertex(395, 620);
    vertex(205, 620);
    endShape();
}

function pullover() {
    fill(25, 33, 60);
    arc(295, 700, 560, 190, PI, 0, OPEN);  //body
    
    //collar back is above
  
    beginShape();  //collar front
    vertex(200, 520);
    bezierVertex(200, 580, 400, 580, 400, 520);
    vertex(410, 630);
    vertex(190, 630);
    endShape();
    
    strokeWeight(5);
    stroke(19, 25, 46);
    line(300, 568, 300, 700);  //zipper
}

function face() {
    noStroke();
    fill(95, 198, 222);
    beginShape();  //face
    vertex(140, 350);
    bezierVertex(230, 560, 380, 590, 460, 350);
    bezierVertex(520, 80, 60, 80, 140, 350);
    endShape();
  
    noFill();
    strokeWeight(3);
    stroke(62, 144, 163);
    beginShape();  //jaw outline
    vertex(206, 460);
    bezierVertex(260, 525, 365, 580, 450, 375);
    endShape();
    
    noStroke();
    fill(95, 198, 222);
    beginShape();  //ear
    vertex(132, 295);
    bezierVertex(105, 290, 105, 405, 152, 375);
    endShape();
  
    noFill();
    strokeWeight(2);
    stroke(44, 110, 72);
    beginShape();  //earring1
    vertex(140, 370);
    bezierVertex(130, 375, 140, 400, 140, 382);
    endShape();
  
    stroke(44, 110, 72);
    beginShape();  //earring2
    vertex(128, 370);
    bezierVertex(125, 375, 120, 380, 120, 370);
    endShape();
}

function hairFront() {
    noStroke();
    fill(21, 55, 116);
    beginShape();  //bangs left
    vertex(129, 295);
    bezierVertex(120, 300, 315, 240, 290, 145);
    bezierVertex(240, 100, 100, 200, 130, 280);
    endShape();
  
    //bangs right is below
  
    beginShape();  //hair bottom left
    vertex(80.75, 420);
    bezierVertex(80, 800, 250, 710, 194, 613);
    endShape();
  
    beginShape();  //hair bottom right
    vertex(509.5, 420);
    bezierVertex(510, 800, 351, 710, 400, 614);
    endShape();
}

function features() {
    noFill();
    strokeWeight(5);
    stroke(29, 81, 158);
    beginShape();  //left brow
    vertex(175, 285);
    bezierVertex(180, 280, 250, 260, 260, 280);
    endShape();
  
    beginShape();  //right brow
    vertex(415, 290);
    bezierVertex(420, 280, 420, 280, 330, 285);
    endShape();

    noFill();
    strokeWeight(4);
    stroke(62, 144, 163);
    beginShape();  //left eye lid
    vertex(185, 305);
    bezierVertex(200, 290, 245, 290, 250, 305);
    endShape();
  
    arc(222.5, 300, 45, 50, 0, PI, OPEN);  //left eye
    fill(62, 144, 162);
    strokeWeight(3);
    arc(222.5, 295.625, 35, 47, 0, PI);
  
    noFill();
    strokeWeight(4);
    beginShape();  //right eye lid
    vertex(340, 305);
    bezierVertex(345, 290, 390, 290, 405, 305);
    endShape();
    
    arc(367.5, 300, 45, 50, 0, PI, OPEN);  //right eye
    fill(62, 144, 162);
    strokeWeight(3);
    arc(367.5, 295.625, 35, 47, 0, PI);
  
    
    noStroke();
    fill(21, 55, 116);
    beginShape();  //bangs right
    vertex(480, 325);
    bezierVertex(320, 300, 245, 210, 290, 145);
    bezierVertex(350, 100, 500, 200, 480, 325);
    endShape();
    
    
    noFill();
    strokeWeight(4);
    stroke(62, 144, 163);
    beginShape();  //nose
    vertex(305, 350);
    bezierVertex(310, 370, 320, 380, 305, 390);
    endShape();
  
    beginShape();  //mouth
    vertex(270, 450);
    bezierVertex(270, 450, 320, 440, 330, 450);
    endShape();
}