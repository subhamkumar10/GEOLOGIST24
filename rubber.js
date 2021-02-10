class Rubber {
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1
    }
    this.body = Bodies.circle(x, y,80, options);
    this.radius=80;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("white");
    fill("blue");
    ellipse(0, 0, this.radius);
    pop();
  }
};
