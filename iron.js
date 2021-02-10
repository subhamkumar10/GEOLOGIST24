class Iron {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':2
    }
    this.body = Bodies.rectangle(x, y,80,40, options);
    this.width =80;
    this.height = 40;
    
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
    stroke("red");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
