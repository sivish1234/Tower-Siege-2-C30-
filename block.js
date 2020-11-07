class Block {
  constructor(x, y, width, height) {
    var options = {
        isState: false,
        friction : 0.6
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    if (this.body.speed < 5) {
      push();
      rectMode(CENTER);
      translate(pos.x, pos.y);
      rect(0, 0, this.width, this.height);
      pop();
    } 
  else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 1;
      tint(255, this.visibility);
      pop();
  }
}
}
  