console.log("test...")

var c = document.getElementById("myCanvas")
var ctx = c.getContent("2d");

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();