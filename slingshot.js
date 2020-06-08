class Slingshot{
     constructor(bodyA,pointB)
     {
          var options={
               bodyA:bodyA,
               pointB:pointB,
               stiffness:0.4,
               length:20
          }
          this.pointB = pointB;
          this.body = Constraint.create(options);
          World.add(world,this.body);
     }
     attach(body)
    {
        this.body.bodyA = body;
    }
     display(){
          if(this.body.bodyA){
               var pointA = this.body.bodyA.position;
               var pointB = this.pointB;
               push();
            
               stroke(48,22,8);
               if(pointA.x < 220) {
                   strokeWeight(7);
                  // line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                   line(pointA.x , pointA.y, pointB.x , pointB.y );
                   //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
               }
               else{
                   strokeWeight(3);
                  // line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                   line(pointA.x, pointA.y, pointB.x, pointB.y);
                   //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
               }
              
               pop();

               //strokeWeight(4);

               //line(pointA.x,pointA.y,pointB.x,pointB.y);
          } 
     }

     fly(){
          this.body.bodyA = null;
     }
}