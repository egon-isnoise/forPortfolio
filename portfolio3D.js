
function setup(){
    w = min(windowWidth, windowHeight);
    createCanvas(w, w, WEBGL);
}

function draw(){
    background(251);
    
    // set lights
    pointLight(0, 205,255, 0, -200, 0);
    pointLight(255, 250, 0, 0, 1200, 0);

    translate(mouseX - width/2, mouseY - height/2);

    // 3D mover
    push();
    rotateX(millis() / 1380);
    rotateY(millis() / 1180);
    translate(89, 100, 50);
    sphere(40, 60);
    rotateX(millis() / 2000);
    rotateY(millis() / 2800);
    translate(130, 120);
    sphere(80, 70, 120);
    translate(140, 20, 120);
    sphere(20, 90, 20);
    pop();

    rotateZ(millis() / 2200);
    rotateX(millis() / 1850);

    fill(0, 0, 0, 80);
    box(100, 100);
    fill(60, 120, 180, 40);
    plane(240, 240, 2);
    rect(200, 200, 200);
    rect(-200,  200, 200);
    rect(-200,  - 400, 200);
}