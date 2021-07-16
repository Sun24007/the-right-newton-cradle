class rope{
		constructor(body1, pointA){
			
		var options ={
			bodyA:body1,
			pointA:pointA
		

		}
		
		this.rope1 = Constraint.create(options);
		World.add(world, this.rope1);
		
		//create rope constraint here


	}
		show(){	
			//var pointA = this.rope.bodyA.position;
			//var pointB = this.rope.bodyB.position;
			
			fill("white");
			strokeWeight(2);
			line(this.rope1.body1.x, this.rope1.body1.y, this.rope1.pointA.x, this.rope1.pointA.y)
		}

			//create display() here 
}
