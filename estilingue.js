class Estilingue{

    constructor(bodyA,pointB){

        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }

    this.bodyA = bodyA;
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    
    }

display(){
    if(this.sling.bodyA){

   
    var pontoA = this.sling.bodyA.position;
    var pontoB = this.pointB;
    strokeWeight(3);
    line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
   
    }
}


fly()
{
    this.sling.bodyA = null;
    
}
attach(bodyA){
    
    this.sling.bodyA = bodyA;
       
    }
 


}