class rope{
		constructor(body1, body2, pointA, pointB){
			this.pointA = pointA
			this.pointB = pointB
			
		var options ={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}

		}
		//World.add(world, this.body);
		rope1 = Constraint.create(options);
		rope2 = Constraint.create(options);
		rope3 = Constraint.create(options);
		rope4 = Constraint.create(options);
		rope5 = Constraint.create(options);
		
		//create rope constraint here


	}
		show(){	
			var pointA = this.rope.bodyA.position;
			var pointB = this.rope.bodyB.position;
			

			strokeWeight(2);
			line(body1, body2, pointA, pointB)
		}

			//create display() here 
}
