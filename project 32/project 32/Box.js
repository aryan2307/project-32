class Box{
    constructor(x, y, color) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, 30, 40, this.color, options);
      this.width = 30;
      this.height = 40;
      this.color = color;
      World.add(world, this.body);
    }

    score(){
      if(this.visibility < 0 && this.visibility >-105){
        score++;
      }
    }

    display(){
      var pos =this.body.position;
      if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        pop();
        }
    }
  }