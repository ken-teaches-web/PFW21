let rectX = 0; 
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3); 
}

function draw () {
    background('yellow');
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY +  rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('blue');
    rect(rectX, rectY, rectWidth, rectHeight);
}