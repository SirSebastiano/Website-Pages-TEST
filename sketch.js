
var s;
var scl = 20;

var food;


function setup() {
    frameRate(10);
    createCanvas(600,600);
    s = new Snake();
    pickLocation();
}


function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    s.death();
    s.update();
    s.show();

    if (s.eat(food)) {
        pickLocation();
    }
    
    fill(255, 0, 100)
    rect(food.x, food.y, scl, scl)

if (keyIsDown(UP_ARROW)) {
        s.dir(0,-1);
    } else if (keyIsDown(DOWN_ARROW)) {
        s.dir(0,1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        s.dir(1,0);
    } else if (keyIsDown(LEFT_ARROW)) {
        s.dir(-1,0);    
    };
    
}



