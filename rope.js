class rope{
	constructor(body1,body2,pointA,pointB)
	{
	this.pointA=pointA
	this.pointB=pointB
	//create rope constraint here
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB}
	}
	}


    //create display() here 

}
