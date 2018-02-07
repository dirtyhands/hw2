background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(250, 300), 100, 100);
  ellipse(random(width), random(height), random(2, 20));
}
