class Paper{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=y;
		this.y=y;
		this.w=50;
		this.h=50;
		this.body=Bodies.rectangle(x, y, 50,50 , options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			var paperPos=this.body.position;		
			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			this.image(0,0,this.w, this.h);
			pop()
			}
        }