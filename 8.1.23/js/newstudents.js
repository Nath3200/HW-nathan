const students = [];
for (let i =1; i<=5; i++) {
    var fName = prompt("yours names ?" + (i)).toLowerCase();
    students.push(fName)
}
students.sort();
var result = students.join (", ");
alert(result);