var fullName = prompt("enter your full name").toLowerCase()
.replaceAll(" ","")
.split("")
.sort();

var vowelMessage = "Your string contains the following vowels";
var consonantMessage = "Your string contains the following consonants";
var vArr = [];
var cArr = [];

for (let i = 0; i < fullName.length; i++) {   
    const x = fullName[i];
    if("aeiouy".includes(x)) {
        vArr.push(x);
        continue;
    }
    cArr.push(x);
}

var message = vowelMessage + vArr.join(", ") + "\n" + consonantMessage + cArr.join(", ");
alert(message);

// ou fonction

function splitVowelsCons(toto) {
    var arr = toto.toLowerCase()
    .replaceAll(" ","")
    .split("")
    .sort(); }
    
    var message ="";
    var vowelMessage = "Your string containes the following vowels";
    var consonantMessage = "Your string containes the following consonants";
    var vArr = [];
    var cArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if("aeiouy".includes(x)) {
            vArr.push(x);
            continue;
        }
        cArr.push(x);
    }
    
    var message = vowelMessage + vArr.join(", ") + "\n" + consonantMessage + cArr.join(", ");
    alert(message);
    

// fait par moi

const voyelles = [];
const consonnes = [];
var fullname = prompt("what s your full name?").toLowerCase().replaceAll(" ","").split("").sort();

for (let i = 0; i < fullname.length ; i++) {
    const x = fullname[i]
    if ("aeiouy".includes(x)){
        voyelles.push(x);
        continue;
}  consonnes.push(x);
    }

alert("les voyelles sont: " + voyelles + ".\nLes consonnes sont: " + consonnes );