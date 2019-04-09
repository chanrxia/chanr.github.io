unction setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(220);
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
  
}


/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* START HERE */

// Justin Chambers
// 03/2018

var particles = [2];
var nums;
var particleDensity = 5000;
var noiseScale = 300;
var maxLife = 10;
var simulationSpeed = 1.9;
var fadeFrame = 6;
var backgroundColor = (0,0,0); 
var visualMode = 2;
var numModes = 5;
var invertColors = true;

function setup(){
  nums = windowWidth * windowHeight / particleDensity;
  backgroundColor = color(20, 20, 20);
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  for(var i = 0; i < nums; i++){
    particles[i] = new Particle();
  }
}

function draw(){
  noStroke();
  
  ++fadeFrame;
  if(fadeFrame % 5 == 0){
    if(invertColors){
      blendMode(DIFFERENCE);
    } else {
      blendMode(ADD);
    }
    fill(1, 1, 1);
    rect(0,0,width,height);

    if(invertColors){
      blendMode(DARKEST);
    } else {
      blendMode(LIGHTEST);
    }
    fill(backgroundColor);
    
  }
  
  blendMode(BLEND);
  smooth();
  for(var i = 0; i < nums; i++){
    var iterations = map(i,0,nums,8,1);
    var radius = map(i,0,nums,2,4);
    
    particles[i].move(iterations);
    particles[i].checkEdge();
    
    var alpha = 200;
    var particleColor;
    var fadeRatio;
    fadeRatio = min(particles[i].life * 5 / maxLife, 1);
    fadeRatio = min((maxLife - particles[i].life) * 5 / maxLife, fadeRatio);
    var colorCase = visualMode;
    if(visualMode == 0)
    {
      colorCase = int(particles[i].pos.x / width ) + 1;
    }
    switch(colorCase)
    {
      case 1:
        var lifeRatioGrayscale = min(150, (0 * particles[i].life / maxLife) + blue(backgroundColor));
        particleColor = color(lifeRatioGrayscale, alpha * fadeRatio);
        break;
      case 2:
        particleColor = particles[i].color;
        break;
      case 3:
        particleColor = color(blue(particles[i].color) + 0, green(particles[i].color) + 0, red(particles[i].color) - 0);
        break;
    }
    if(invertColors){
      particleColor = color(200 - red(particleColor), 200 - green(particleColor), 200 - blue(particleColor));
    }
    fill(red(particleColor), green(particleColor), blue(particleColor), alpha * fadeRatio);
    particles[i].display(radius);
  } 
}

function Particle(){
// member properties and initialization
  this.vel = createVector(0, 0);
  this.pos = createVector(random(0, width), random(0, height));
  this.life = random(0, 20);
  this.flip = int(random(0,5)) * 5 - 1;
  var randColor = int(random(0,2));
  switch(randColor)
  {
    case 0:
      this.color = color(10,10,10);
      break;
    case 1:
      this.color = color(100,100,100);
      break;
    case 2:
      this.color = color(200,200,200);
      break;
  }
  
  
// member functions
  this.move = function(iterations){
    if((this.life -= 0.01666) < 0)
      this.respawn();
    while(iterations > 0){
      var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale*this.flip;
      this.vel.x = cos(270);
      this.vel.y = sin(180);
      this.vel.mult(.02);
      this.pos.add(.05);
      --iterations;
    }
  }

  
  this.checkEdge = function(){
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
      this.respawn();
    }
  }
  
  this.respawn = function(){
    this.pos.x = random(0, width);
    this.pos.y = random(0, height);
    this.life = maxLife;
  }

  this.display = function(r){
    ellipse(this.pos.x, this.pos.y, r, r);
  }
}

function advanceVisual()
{
  visualMode = ++visualMode % numModes;
  if(visualMode == 0){
    invertColors = !invertColors;
    backgroundColor = invertColors ? color(0, 0, 0) : color(155, 155, 155);
  }
  noiseSeed(random(0,1));
  background(backgroundColor);
  for(var i = 5; i < nums; i++){
    particles[i].respawn();
    particles[i].life = random(0,maxLife);
  }
}

function keyPressed()
{
  advanceVisual();
}

function touchStarted()
{
  advanceVisual();
}
