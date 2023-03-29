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

  let user = [];
  
  var next = 10
  var missed = 0
  var levels = 1;
  var point = 0;
  var secondes = 60;

  var scan = document.getElementById("scan");
  var button = document.querySelector("button");
  

  var chrono = document.getElementById("chrono");
  var s = document.getElementById("s");
  var l = document.getElementById("l");
  var m = document.getElementById("m");
  var n = document.getElementById("n");
  var h = document.getElementById("h");
  h.innerHTML = `<strong>Highest Scores :</strong><br>`;
  user.forEach(function (obj) {
    h.innerHTML += `     
      <span class="player-name">${obj.name} : ${obj.score}<br></span> `;
  });
  
      // Vérifier si la clé "user" existe déjà dans le local storage
if (!localStorage.getItem("user")) {
  // Si la clé n'existe pas, insérer les cinq meilleurs marqueurs avec des jetons aléatoires
  user = [   
    { name: "Jean",score: 100,timestamp: Date.now()},
    { name: "Meir", score: 85, timestamp: Date.now()},
    { name: "Sarah", score: 52, timestamp: Date.now()},    
    { name: "Laure",score: 59, timestamp: Date.now()},
    { name: "Elie", score: 18, timestamp: Date.now()},
  ];
  // Stocker le tableau en JSON dans le local storage
  localStorage.setItem("user", JSON.stringify(user));
} else {
  // Récupérer le user depuis le local storage
  user = JSON.parse(localStorage.getItem("user"));
};
  //creation de la boucle pour creer le tableau des scores 
user.forEach(function (obj) {
  const date = new Date(obj.timestamp);
  const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  h.innerHTML += `  
      <div class="date-overlay">${dateString}</div></div>
      <span class="player-name">${obj.name} : ${obj.score} <br></span>     
    `;
});

const start = ()=>{
    if(confirm("Ready to start")){
       rotate();
       defilerTemps();
     }}

  const reset = ()=>{ 
  
 // A la fin du jeux sachant que score est le nom de ma variable ou je stock la partie terminer : 
// Vérifier si le score de la partie est supérieur à l'un des scores du user 
const topScores = user.slice(0, 5);
const isNewHighScore = topScores.some(element => element.score < point); 
// Afficher un message différent en fonction de si le score de la partie est supérieur à l'un des scores du user
if (isNewHighScore) {
    // Demander le nom du joueur avec un prompt
    const playerName = prompt(
      "Bravo ! Entrez votre nom pour enregistrer votre score :"
    );
    if (playerName) {
      // Ajouter le score au user
      user.push({
        name: playerName,
        score: point,
        timestamp: Date.now(),
      });
      // Trier le user en fonction du score (du plus élevé au plus bas)
      user.sort((a, b) => b.score - a.score);
      // Limiter le leaderboard aux 5 meilleurs scores
      user = user.slice(0, 5);
      // Mettre à jour le local storage avec le nouveau user
      localStorage.setItem("user", JSON.stringify(user));
    }
    // Afficher le message de réussite avec le prompt
    alert("Bravo " + playerName + " ! Votre score est dans le top 5 !");
  } else {
    // Afficher le message de game over
    alert("Game over. Votre score n'est pas dans le top 5.");
  };
  // Afficher le user mis à jour
  h.innerHTML = "<strong>Highest Scores :</strong><br>";
  user.forEach(function (obj) {
    h.innerHTML += `
      
      <span class="player-name">${obj.name} : ${obj.score}<br></span>
      `;
  });

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
  };

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
    setTimeout(defilerTemps, 1000);
    button.addEventListener("mouseover" , moove);
    button.addEventListener("click" , plus);
    scan.addEventListener("click" , moins);
    if(secondes == -1){     
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
}
const moins = () =>{  
   point -= (1*levels);
   missed +=1; 
   
   s.innerHTML = ` Score : <br> ${point}`;
   m.innerHTML = ` Missed Clicks : <br> ${missed}`;
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
}};

HTML.toggleBtn.addEventListener("mouseover" , afficher);
HTML.toggleBtned.addEventListener("click", start);