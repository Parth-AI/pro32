class Polygon{
     constructor(x, y, radius, angle) {
          var options = {
              'restitution':0.8,
              'friction':1.0,
              'density':1.0
          }
          //fill("yelllow");
          this.body = Bodies.circle(x, y, /*width, height,*/radius, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          //rectMode(CENTER);
          circle( 0, 0, /*this.width, this.height*/this.radius);
          pop();
        }
}