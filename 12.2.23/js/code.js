var resultat="";
var btn1 = document.createElement("button");
btn1.innerText="1";
btn1.addEventListener("click",function(){
        console.log(btn1.innerText); 
        resultat = 1;
    console.log(resultat)});
var btn2 = document.createElement("button");
btn2.innerText="2";
btn2.addEventListener("click",function(){
    console.log(btn2.innerText);
    resultat =2 });
var btn3 = document.createElement("button");
btn3.innerText="3";
btn3.addEventListener("click",function(){
    console.log(btn3.innerText); 
    resultat= 3});
var btn4 = document.createElement("button");
btn4.innerText="4";
btn4.addEventListener("click",function(){
    console.log(btn4.innerText);
    resultat=4 });
var btn5 = document.createElement("button");
btn5.innerText="5";
btn5.addEventListener("click",function(){
    console.log(btn5.innerText);
    resultat=5 });
var btn6 = document.createElement("button");
btn6.innerText="6";
btn6.addEventListener("click",function(){
    console.log(btn6.innerText);
    resultat=6 });
var btn7 = document.createElement("button");
btn7.innerText="7";
btn7.addEventListener("click",function(){
    console.log(btn7.innerText);
    resultat=7 });
var btn8 = document.createElement("button");
btn8.innerText="8";
btn8.addEventListener("click",function(){
    console.log(btn8.innerText);
    resultat=8 });
var btn9 = document.createElement("button");
btn9.innerText="9";
btn9.addEventListener("click",function(){
    console.log(btn9.innerText);
    resultat=9 });
var btn0 = document.createElement("button");
btn0.innerText="0";
btn0.addEventListener("click",function(){
    console.log(btn0.innerText);
    resultat=0 });

document.getElementById("main").append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn0);

var code= "4567"; var result = resultat+"";
for (let i = 0; i<4 ; i++) {
    result+= resultat; 
     continue};
if(result==code) {
    alert("this a good code");
}else{alert("this is a false code")}
