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

