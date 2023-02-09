var btn1 = document.createElement("button");
btn1.innerText="start";
var btn2 = document.createElement("button");
btn2.innerText="stop";
var btn3 = document.createElement("button");
btn3.innerText="reset";
var btn4 = document.createElement("button");
btn4.innerText="reverse"

var t = null; var e= null;
document.getElementById("main").append(btn1,btn2,btn3,btn4);

var i = 0;
btn1.addEventListener("click",function(){
    t= setInterval(function() {
        console.log(i);
        i++;
    },1000)
})

btn2.addEventListener("click",function(){
       clearInterval(t);
       clearInterval(e);
})
btn3.addEventListener("click",function(){
        i = 0;
        clearInterval(t);
        clearInterval(e);
            })
btn4.addEventListener("click",function(){
    e= setInterval(function(){
        clearInterval(t);
        console.log(i);
        i--;
         },1000)
})