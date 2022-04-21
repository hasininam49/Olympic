canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 2;
ctx.rect(250,180,300,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#ff1100";
ctx.lineWidth= 2;
ctx.arc(300,250,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#036bfc";
ctx.lineWidth= 2;
ctx.arc(385,250,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#fff700";
ctx.lineWidth= 2;
ctx.arc(470,250,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#00ff44";
ctx.lineWidth= 2;
ctx.arc(435,290,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#ff00ff";
ctx.lineWidth= 2;
ctx.arc(350,290,40,0,2 * Math.PI)
ctx.stroke();




