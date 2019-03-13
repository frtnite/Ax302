console.log("test...");


var ctx = document.getElementById('myCanvas').getContext('2d');
var ps4 = new Image();
var chungus = new Image();
var face = new Image();
chungus.src = 'chungus.jpg';
face.src = 'face.jpg';
ps4.src = 'ps4.jpg';

chungus.onload = function(){
  ctx.drawImage(chungus,300,200,100,200);
};

ps4.onload = function(){
  ctx.drawImage(ps4,600,200,150,200);
};

face.onload = function(){
  ctx.drawImage(face,200,200,200,200);
};

ctx.beginPath();
ctx.arc(100,100,50,0,6,28);
ctx.closePath();
ctx.fillStyle= "red";
ctx.fill();


