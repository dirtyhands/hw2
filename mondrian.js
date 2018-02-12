//var firstCol, firstRow, sw, horBottomDiv, verBottomDiv;
//var r, g, b;

function setup() {
  createCanvas(500, 500);
  background(255);
  //noLoop();
  sw = 10;
}

function draw() {
  firstCol = random(0, 100);
  firstRow = random(0, 100);
  
  //r = map(0, 0, width, 0, 255);
  //g = map(0, height, 0, 0, 255);
  //b = map(1 / 2, 0, width + height, 0, 255);
  
  var number = random(0,10);
  print(number);
  
  // set fill to white
  fill(255);
  strokeWeight(sw);
  // first 2 white rectangles
  //rect(-sw, -sw, firstCol, firstRow/2);
  //rect(-sw, firstRow/2, firstCol, firstRow/2);
  
  // blue
  if(number<3){
  	fill("blue");
  } //else if(number>3 && number<4){
    //fill("red");
    
  //}
  rect(-sw, firstRow, firstCol, height);
  
  // red
  if(number<2){
  	fill("red");
  } else {
    fill(255);
  }
  rect(firstCol-sw, -sw, width, firstRow + sw);
  
  // white
  fill(250);
  horBottomDiv = (width - firstCol) * 3 / 4;
  verBottomDiv = (height - firstRow) / 2;
  rect(firstCol-sw, firstRow, horBottomDiv+sw, height);
  rect(firstCol + horBottomDiv, firstRow, width, verBottomDiv);
  
  // yellow
  var y = ("yellow")
  fill(y);
  rect(firstCol + horBottomDiv, firstRow + verBottomDiv, width, height);

}
