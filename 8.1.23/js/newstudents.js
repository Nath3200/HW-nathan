var students = [""];
for (let i =0; i<5; i++) {
    const student = prompt("yours names ?" + (i+1)).toLowerCase();
    students.push(student)
}
students.sort();
var result = students.join (", ");
alert(result);