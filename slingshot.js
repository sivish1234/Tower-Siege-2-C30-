class Slingshot{
    constructor(bodyA, point) {
      var options ={
         bodyA: bodyA,
         pointB: point,
         stifness: 0.9,
         length: 3
      }  
  
      this.slingshot = Constraint.create(options);
      World.add(world,this.slingshot);
    }
    
    attach(body) {
      this.slingshot.bodyA = body;
    }
  
    fly() {
      this.slingshot.bodyA=null;
    }
  
    display() {
      if(this.slingshot.bodyA) {
        var posA = this.slingshot.bodyA.position
        var posB = this.slingshot.pointB
        strokeWeight(4);
        line(posA.x,posA.y,posB.x, posB.y);
      }   
    }
  
  }