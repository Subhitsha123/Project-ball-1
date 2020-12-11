class Ground{
    constructor(x,y,width,height){
        var ground_options = {
            'restitution':1,
            'density':15,
            'friction':1,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}