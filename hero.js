class Hero{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 0.5,
            density : 100
        }
        this.image = heroImg;
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position;
        push();
        translate(p.x, p.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}