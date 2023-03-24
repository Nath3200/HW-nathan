const HTML = {
    toggleBtned : document.getElementById("text-choosed"),
    toggleBtn: document.getElementById("choice-text"), 
    sections: {
      homePage: document.getElementById("home-page"),
      authPage: document.getElementById("auth-page"),
    },
    register: {  // s inscrire
      form: document.getElementById("register"),
    },
    login: {  // se connecter
      form: document.getElementById("login"),
    },
    refresh:{
      form: document.getElementById("refresh"),}
  };
  
  var next = 10
  var missed = 0
  var levels = 1;
  var point = 0;
  var secondes = 60;

  var score1 = 50;
  var score2 = 40;
  var score3 = 30;
  var score4 = 20;
  var score5 = 10;

  var scan = document.getElementById("scan");
  var button = document.querySelector("button");

  var chrono = document.getElementById("chrono");
  // chrono.innerHTML = ` Timer : <br> ${secondes}`;
  var s = document.getElementById("s");
  // s.innerHTML = ` Score : <br> ${point}`;
  var l = document.getElementById("l");
  // l.innerHTML = ` Level : <br> ${levels}`;
  var m = document.getElementById("m");
  // m.innerHTML = ` Missed Clicks : <br> ${missed}`;
  var n = document.getElementById("n");
  // n.innerHTML = ` Points Next Level : <br> ${next}`;

  var p1 = document.getElementById("p1");
  var name1 = "Player 1";
  p1.innerHTML = score1 + " - " + name1; 
  var p2 = document.getElementById("p2");
  var name2 = "Player 2";
  p2.innerHTML = score2 + " - " +  name2; 
  var p3 = document.getElementById("p3");
  var name3 = "Player 3";
  p3.innerHTML = score3 + " - " +  name3; 
  var p4 = document.getElementById("p4");
  var name4 = "Player 4";
  p4.innerHTML = score4 + " - " +  name4;
  var p5 = document.getElementById("p5"); 
  var name5 = "Player 5"; var score5 = 10;
  p5.innerHTML = score5 + " - " + name5;

  const start = ()=>{
    if(confirm("Ready to start")){
       rotate();
       defilerTemps();
     }}

  const reset = ()=>{ 
  
   button.style.top = 110 + "px";
   button.style.left = 128 + "px";
   button.style.animation = "none";
   s.innerHTML = " Score : <br> 0";
   n.innerHTML = " Points Next Level : <br> 10";
   l.innerHTML = " Level : <br> 1";
   m.innerHTML = " Missed Clicks : <br> 0";
   chrono.innerHTML = " Timer : <br> 60";
   HTML.login.form.style.display = "none";
   HTML.register.form.style.display = "none";
   HTML.refresh.form.style.display = "block";
   score();
  }

  

  let score = ()=>{
  
  if(point>=score1 && point>score2 && point>score3 && point>score4 && point>score5){    
      p2.innerHTML = score1 + " - " +name1;
      p3.innerHTML = score2 + " - " +name2; 
      p4.innerHTML = score3 + " - " +name3; 
      p5.innerHTML = score4 + " - " +name4; 
      score1=point;
      name1 = prompt("What is your name ?");
      p1.innerHTML = score1 + " - " +name1;    
  };
  
  if(point<score1 && point>=score2 && point>score3 && point>score4 && point>score5){
      p1.innerHTML = score1 + " - " +name1;
      p3.innerHTML = score2 + " - " +name2; 
      p4.innerHTML = score3 + " - " +name3; 
      p5.innerHTML = score4 + " - " +name4; 
      score2=point  ;
      name2 = prompt("What is your name ?");
      p2.innerHTML = score2 + " - "+name2;  
  };
 
  if(point<score1 && point<score2 && point>=score3 && point>score4 && point>score5){
      p1.innerHTML = score1 + " - " +name1;
      p2.innerHTML = score2 + " - " +name2; 
      p4.innerHTML = score3 + " - " +name3; 
      p5.innerHTML = score4 + " - " +name4; 
      score3=point ;
      name3 = prompt("What is your name ?");
      p3.innerHTML = score3 + " - "+name3; 
  };
 
  if(point<score1 && point<score2 && point<score3 && point>=score4 && point>score5){
    p1.innerHTML = score1 + " - " +name1;
    p2.innerHTML = score2 + " - " +name2; 
    p3.innerHTML = score3 + " - " +name3; 
    p5.innerHTML = score4 + " - " +name4;
    score4=point ;
    name4 = prompt("What is your name ?");
    p4.innerHTML = score4 + " - "+name4; 
  };

  if(point<score1 && point<score2 && point<score3 && point<score4 && point>=score5){
    p1.innerHTML = score1 + " - " +name1;
    p2.innerHTML = score2 + " - " +name2; 
    p3.innerHTML = score3 + " - " +name3; 
    p4.innerHTML = score4 + " - " +name4;
    score5 = point;
    name5 = prompt("What is your name ?");
    p5.innerHTML = score5 + " - " +name5; 
  };
  
    

    p1.innerHTML = score1 + " - " +name1;
    p2.innerHTML = score2 + " - " +name2;
    p3.innerHTML = score3 + " - " +name3; 
    p4.innerHTML = score4 + " - " +name4; 
    // p5.addEventListener("mouseover", date);

    localStorage.setItem("players",JSON.stringify(user));
  };

  const local = JSON.parse(localStorage.getItem("user"));
  let user = [
    {Player1 : "Max",
      Scoere : 100
  }]
  
  const date = ()=>{
    alert( Date.now());
  }

  const afficher = ()=>{
    if (HTML.login.form.style.display == "none") {
      HTML.login.form.style.display = "block";
      HTML.register.form.style.display = "none";
    } else {
      HTML.login.form.style.display = "none";
      HTML.register.form.style.display = "block";
    }
  }

  const defilerTemps = ()=>{
    if(HTML.login.form.style.display == "block" && HTML.register.form.style.display == "none" && secondes > -1){
    secondes = parseInt(secondes);
    secondes -- ;
    chrono.innerHTML = ` Timer : <br> ${secondes}`;
    setTimeout(defilerTemps, 100);
    button.addEventListener("mouseover" , moove);
    button.addEventListener("click" , plus);
    scan.addEventListener("click" , moins);
    if(secondes == -1){     
      alert("Game over, your score is : " + point);
      reset();  
    }; return point;
  }}
  
const rotate = ()=>{
  button.className= "rotate"
}

const moove = ()=>{
button.style.top = x(130 , 500);
button.style.left = x(118,853);
};

function x(min, max) {
  return (Math.random() * (max - min)  + min) + "px";
}

const plus = () =>{ 
   point += (10*levels) +(1*levels);
   next -=1;
   missed -=1;
   
   
   m.innerHTML = ` Missed Clicks : <br> ${missed}`;
   s.innerHTML = ` Score : <br> ${point}`;
   n.innerHTML = ` Points Next Level : <br> ${next}`;nextLevel();
  // return point;
}
const moins = () =>{  
   point -= (1*levels);
   missed +=1; 
   
   s.innerHTML = ` Score : <br> ${point}`;
   m.innerHTML = ` Missed Clicks : <br> ${missed}`;
  // return point;
}

const nextLevel = ()=>{
  if(next == 0){
    levels +=1;
    point += 1;
    next = 10;
    secondes +=10;
    chrono.innerHTML = ` Timer : <br> ${secondes}`;
    l.innerHTML = ` Level : <br> ${levels}`;
    n.innerHTML = ` Points Next Level : <br> ${next}`;
    button.style.transitionDuration = 3-(0.5*(levels-1))+"s";
    button.style.animationDuration = 2-(0.25*(levels-1))+"s";
    if(levels == 6){
      point -= 6;
      s.innerHTML = ` Score : <br> ${point+50}`;
      alert(`Winner !! Your score is ${point}`);
      reset();
      point += 6;
      secondes = "";
      
    }
    return point;
}
}

HTML.toggleBtn.addEventListener("mouseover" , afficher);
HTML.toggleBtned.addEventListener("click", start);
