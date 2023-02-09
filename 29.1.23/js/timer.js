const $ = {
    start: document.createElement("button"),
    stop : document.createElement("button"),
    reset : document.createElement("button"),
    sec : document.createElement("span"),
    min : document.createElement("span"),
    hours : document.createElement("span"),
    colon1 : document.createElement("span"),
    colon2 : document.createElement("span"),
    main: document.getElementById("main"),
}


const Timer = {
    s:0,
    m:0,
    h:0,
    int: null,
start: function(){
    theLogic();
    $.start.removeEventListener("click",Timer.start);
    $.stop.addEventListener("click",Timer.stop);
    $.reset.addEventListener("click",Timer.reset);
    console.log(Started);
    },
stop: function(){
    clearInterval(Timer.int);
    $.start.addEventListener("click",Timer.start);
    $.stop.removeEventListener("click",Timer.stop);
    $.reset.addEventListener("click",Timer.reset);
    console.log(Stopped);
},
reset: function(){
    $.start.addEventListener("click",Timer.start);
    $.reset.removeEventListener("click",Timer.reset);
    clearInterval(Timer.int);
    Timer.s = 0;
    Timer.m=0;
    Timer.h=0;
    $.hours.innerText="00";
    $.m.innerText="00";
    $.s.innerText="00";
    console.log(Reset);
}   }
function init(){
    $.main.append($.start,$.stop,$.reset,$.hours,$.colon1,$.min,$.colon2,$.sec);
    $.start.innerText="start";
    $.stop.innerText="stop";
    $.reset.innerText="reset";
    $.colon1.innerText=":";
    $.colon2.innerText=":"
    Timer.reset();
}

function theLogic() {
    Timer.int = setInterval(function(){
        Timer.s ++;
        $.sec.innerText = Timer.s < 10 ?"0"+ Timer.s : Timer.s;
        if(Timer.s == 59){
            Timer.m ++;
            Timer.s = -1;
            $.min.innerText = Timer.m < 10 ? "0"+ Timer.m : Timer.m;
        }
        if(Timer.m == 59){
            Timer.h ++;
            Timer.m = -1;
            $.hours.innerText = Timer.h < 10 ? "0"+ Timer.h : Timer.h;
        }
    },1000)
}
init()