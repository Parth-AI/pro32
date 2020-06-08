class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.4,
          'friction':10.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width, height, options);
     // fill(62,223,207);
      //fill("blue");

      this.width = width;
      this.height = height;                                   
     // this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      console.log(this.body.speed);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      fill(62,223,207);
      if(this.body.speed <6){
        rect(0,0, this.width, this.height);
      }
      else{
        push();
        World.remove(world,this.body);
        this.visibility  = this.visibility-5;
        tint(255,this.visibility);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
      pop();
    }


score()
{
  if(this.visibility<=0 && this.visibility> -105){
    score++;
    }
  }
};