class Slingshot{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = body;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(10,239,233);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop();
    }
}