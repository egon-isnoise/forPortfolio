
function setup(){
    w = min(windowWidth, windowHeight);
    createCanvas(w,w);
    noiseSeed(69);
}

function draw(){
    background(251);
    movingFurry(0.035, 20, 150);
}

function movingFurry(inc, scl, pad){
    this.i = inc;
    this.s = scl;
    this.p =  pad;
    var cols, rows;

    cols = int(width/this.s);
    rows = int(height/this.s);

    rotate(-0.2);
    translate(-this.p/2.7, this.p/1.8);
    var yoff = 0;
    var fun = map(mouseX, 0, width, 0, 3);
    noiseDetail(14, 0.6);

    for(var y = this.p; y <= height-this.p; y+= this.s){
        var xoff = 0;
        for(var x = this.p; x <= width-this.p; x += this.s){
           
            var angle = noise(xoff, yoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
        
            xoff += this.i;
            stroke(0);
            push();
            translate(x, y);
            rotate(v.heading() + fun);
            lastShifterX = map(x, 0, width, 0, 38);
            lastShifterY = map(y, 0, height, 0, 38);
            rect(0, 0, this.s +25, 10, 5, 3, 0, 2);
            ellipse(0, 0, this.s +65, 5);
            ellipse(lastShifterX, 0, this.s +65, angle *1.3);
            
            pop();
        }
        yoff +=this.i;
    }
}
