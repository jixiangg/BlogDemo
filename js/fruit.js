var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random()*0.05 + 0.05;
		this.born(i);
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		//draw
		//find an ane,grow,fly up
		if(this.alive[i]){
			if(this.l[i]<=10){
				this.l[i]+= this.spd[i]*0.1*deltaTime;
			}else{
				this.y[i] -= this.spd[i]*deltaTime;
			}
			ctx2.drawImage(this.orange,this.x[i] - this.l[i]*0.5,this.y[i] - this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10){
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.l[i] = 0;
	this.alive[i] = true;
}
function fruitMonitor(){
	var num = 0;
	for(var i = 0;i<fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
