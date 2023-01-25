function gmail() {
     var mail = prompt("enter your mail").toLowerCase();
     if (mail.includes("gmail")) {
         var point = mail.split("@");
         mail = point[0].replaceAll(".","") + "@" + point[1];
     }
     return mail
 }
 alert(gmail());



// git add . ; git commit -m "message" ; git push ;