var resultats = [];
var listeEleves = [];
for (let i=0; i <5;i++) {
     var nomEleve = prompt("prenom de l eleve" + i);
     var noteEleve = prompt("note de l eleve" + i);
     listeEleves.push(nomEleve);
     resultats.push(noteEleve);
}
for(let i=0; i<resultats.length; i++) {
     if(resultats[i]>=70) {
          document.write("<h2>Indice : " + (i) + "- Prenom de l eleve : " + listeEleves[i] + " - Notes :" + resultats[i] + "</h2>");
     }
}





// git add . ; git commit -m "message" ; git push ;