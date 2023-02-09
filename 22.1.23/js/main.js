var appDiv = document.getElementById("main");
// const user = {fullNname:"Serge Talla", email: "serge@talla.com", pass: "manitou.123"};
var loginSection = document.createElement("section");

init();
function init () {
   
     var emailDiv = document.createElement("div");
     var emailLabel = document.createElement("label");
     emailLabel.innerText = "Enter your mail";
     var emailInput = document.createElement("input");
     emailLabel.append(emailInput);
     emailDiv.append(emailLabel);
     loginSection.append(emailDiv);

     emailInput.addEventListener("input", checkEmail);

     function checkEmail() {
          if(emailInput.value.includes("@") && emailInput.value.includes(".com")) {
               passDiv.style.display = "block";
          } else {
               passDiv.style.display = "none";
          }
     }

     var passDiv = document.createElement("div");  // <div></div>
     var passLabel = document.createElement("label"); // <label></label>
     passLabel.innerText = "Enter your password";  // <label>Enter your email</label>
     var passInput = document.createElement("input");  // <input>
     passLabel.append(passInput); // <label>Enter your email<input></label>
     passDiv.append(passLabel); // <div><label>Enter your email<input></label></div>
     loginSection.append(passDiv);
     passDiv.style.display = "none";
     passInput.addEventListener("input", checkPass);

     function checkPass   (){
     if (passInput.value.includes(".") && passInput.value.length > 7) {
          btnDiv.style.display = "block";
     } else {
          btnDiv.style.display ="none";
     }
} }

var btnDiv = document.createElement("div");
var btn = document.createElement("button");
btn.innerText = "Login";
btnDiv.append(btn);
loginSection.append(btnDiv);
btnDiv.style.display = "none";

appDiv.append(loginSection);