class Monster{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 10,
            density : 50
        }
        this.image = monsterImg;
        this.body = Bodies.circle(x, y, r/1.5, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position;
        var a = this.body.angle;
        push();
        translate(p.x, p.y);
        rotate(a);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}