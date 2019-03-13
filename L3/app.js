console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.goTo(0,0);
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();