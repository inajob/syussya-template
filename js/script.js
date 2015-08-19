var gif;
function initGif(){
  gif = new GIF({
    workers: 2,
    quality: 10,
    width:120,
    height:120,
    workerScript:'js/gif.worker.js'
  });
}
function addFrame(ctx){
  gif.addFrame(ctx, {copy:true, delay:30});
}
function render(f){
  gif.on('finished', function(blob){f(blob)})
  gif.render();
}


initGif();
var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

ctx.clearRect(0,0,120,120);

// ここからオリジナルの処理を書く

ctx.fillStyle="white"
ctx.beginPath();
ctx.rect(0,0,120,120);
ctx.fill();

ctx.fillStyle="black";
ctx.font = "12px 'sans-serif'";
ctx.fillText("出社準備、準備完了",0,100);
ctx.fillStyle="green";
ctx.fillText("出社準備、準備完了",1,101);
ctx.fillStyle="blue"
for(var i = 0; i < 10; i ++){
  ctx.beginPath();
  ctx.rect(i * 10,i * 10,10,10);
  ctx.fill();
  addFrame(ctx);
}

// ここまでオリジナルの処理

render(function(blob){
  var img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});


