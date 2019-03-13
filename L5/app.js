

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x, y;
var mx, my;
var circleColor = "rgb(255,0,0)"

function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,10);
}

function circle(x,y,r,color){
     ctx.beginPath();
     ctx.arc(x,y,r,0,6.28);
     ctx.closePath();
     ctx.stroke();
     ctx.fillStyle = color;
     ctx.fill();
}
 function clear(){
 	ctx.clearRect(0,0,WIDTH,HEIGHT);
 }

 function draw(){
 	clear();
 	circle(x,y,30,circleColor);

 	if(x + mx < 0 || x + mx > WIDTH){
 		mx = -mx;
 		circleColor = randomColor();
 	}
 	if(y + my < 0 || y + my > HEIGHT){
 	    my = -my;
 	    circleColor = randomColor();
 	}

 	x += mx;
 	y += my;
 }

function randomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    return "rgb(" + r + "," + g +"," + b +")";

}

init();


