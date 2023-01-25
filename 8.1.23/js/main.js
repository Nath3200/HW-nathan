const students = [];
for (let i =1; i<=5; i++) {
    var fName = prompt("yours names ?" + (i)).toLowerCase();
    students.push(fName)
}
var message= mysort();
alert(message);

function mysort() {
    students.sort();
    students.join(", ")
    
}




// git add . ; git commit -m "message" ; git push ;