
// a few colors
// rgb(34, 76, 53);
// rgb(104, 165, 130);
// rgb(152, 175, 153);

function setup(){
    w = min(windowWidth, windowHeight);
    createCanvas(w, w, WEBGL);
    console.log(w);
}

function draw(){
    background(249, 247, 240);
    
    // set lights
    pointLight(225, 225, 255, 0, -200, 0);
    pointLight(255, 250, 225, 0, 1200, 0);

    moverX = map(mouseX, 0, windowWidth, w/6, w-w/6);
    moverY = map(mouseY, 0, windowHeight, w/6, w-w/6);

    translate(moverX - w/2, moverY - w/2);

    // 3D mover
    push();
    fill(34, 76, 53, 200);
    rotateX(millis() / 1380);
    rotateY(millis() / 1180);
    translate(89, 100, 50);
    sphere(w/20, 60);
    rotateX(millis() / 2000);
    rotateY(millis() / 2800);
    translate(130, 120);
    sphere(w/12, 70, 120);
    translate(140, 20, 120);
    sphere(w/50, 90, 20);
    pop();

    rotateZ(millis() / 2200);
    rotateX(millis() / 1850);

    fill(34, 76, 53, 150);
    box(w/10, w/10);
    fill(104, 165, 130, 80);
    plane(w/4, w/4, 2);
    rect(w/5, w/5, w/5);
    rect(-w/5, w/5, w/5);
    rect(-w/5, (-w/5) *2, w/5);
}

function windowResized() {
    w = min(windowWidth, windowHeight);
    resizeCanvas(w,w);
}