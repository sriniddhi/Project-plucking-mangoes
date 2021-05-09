class Throwing{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:1
        }
        this.pointB=pointB;
        this.throwing = Constraint.create(options);
        World.add(world,this.throwing);
    }
    fly(){
        this.throwing.bodyA=null;
    }
    Launch(bodyA){
        this.throwing.bodyA=bodyA;
    }
    display(){

    }

    }
