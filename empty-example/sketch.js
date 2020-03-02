
let value = 245;
let fr 

function setup() {
  createCanvas(600, 400);
 background(255);
frameRate (fr)
}


function draw() {
//row 1
  
  //ellipse1.4
noStroke();
  fill(value);
  ellipse(50, 350, 70, 70);

  //ellipse1.3
noStroke();
  fill(value - 10);
  ellipse(50, 250, 70, 70);
  
  //ellipse1.2
noStroke();
  fill(value - 20);
  ellipse(50, 150, 70, 70);
  
  //ellipse1.1
noStroke();
  fill(value - 30);
  ellipse(50, 50, 70, 70);
  
  
  //row 2
  
  //ellipse2.4
noStroke();
  fill(value -10);
  ellipse(150, 350, 70, 70);

  //ellipse2.3
noStroke();
  fill(value - 20);
  ellipse(150, 250, 70, 70);
  
  //ellipse2.2
noStroke();
  fill(value - 30);
  ellipse(150, 150, 70, 70);
  
  //ellipse2.1
noStroke();
  fill(value - 40);
  ellipse(150, 50, 70, 70);
  
  
  //row 3
  
  //ellipse3.4
noStroke();
  fill(value - 20);
  ellipse(250, 350, 70, 70);

  //ellipse3.3
noStroke();
  fill(value - 30);
  ellipse(250, 250, 70, 70);
  
  //ellipse3.2
noStroke();
  fill(value - 40);
  ellipse(250, 150, 70, 70);
  
  //ellipse3.1
noStroke();
  fill(value - 50);
  ellipse(250, 50, 70, 70);
  
  //row 4
  
  //ellipse4.4
noStroke();
  fill(value - 30);
  ellipse(350, 350, 70, 70);

  //ellipse4.3
noStroke();
  fill(value - 40);
  ellipse(350, 250, 70, 70);
  
  //ellipse4.2
noStroke();
  fill(value - 50);
  ellipse(350, 150, 70, 70);
  
  //ellipse4.1
noStroke();
  fill(value - 60);
  ellipse(350, 50, 70, 70);


//row 5
  
  //ellipse5.4
noStroke();
  fill(value - 40);
  ellipse(450, 350, 70, 70);

  //ellipse5.3
noStroke();
  fill(value - 50);
  ellipse(450, 250, 70, 70);
  
  //ellipse5.2
noStroke();
  fill(value - 60);
  ellipse(450, 150, 70, 70);
  
  //ellipse5.1
noStroke();
  fill(value - 70);
  ellipse(450, 50, 70, 70);

//row 6
  
  //ellipse6.4
noStroke();
  fill(value - 50);
  ellipse(550, 350, 70, 70);

  //ellipse6.3
noStroke();
  fill(value - 60);
  ellipse(550, 250, 70, 70);
  
  //ellipse6.2
noStroke();
  fill(value - 80);
  ellipse(550, 150, 70, 70);
  
  //ellipse6.1
noStroke();
  fill(value - 90);
  ellipse(550, 50, 70, 70);

}


function mouseMoved() {
 value = value - 10;
  if (value < 100) {
    value = 220;
  }
}