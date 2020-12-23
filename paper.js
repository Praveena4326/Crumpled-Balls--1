class Paper {
    constructor (x,y,diameter) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            friction:0.5,
            density: 1.2

        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
       
        World.add(world, this.body);
        
     
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(40,1000,90);
        ellipse(0,0, this.diameter);
        pop();
      }
    

}