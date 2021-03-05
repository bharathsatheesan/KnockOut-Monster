class Box{
    constructor(x, y){
        var options = {
            isStatic : false,
            restitution : 0.8,
            density : 20,
            friction : 1
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position;
        var a = this.body.angle;
        push();
        translate(p.x, p.y);
        rotate(a);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.w, this.h);
        pop();
    }
}