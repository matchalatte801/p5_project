function setup(){
    createCanvas(1000, 750);

}

size = 50;
function draw(){
    background(255, 160, 200);
    fill(0, 180, 255);
    circle(width/2, height/2, size);
    size += 0.5;
}