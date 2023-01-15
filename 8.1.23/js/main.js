var students = [""];
for (let i =1; i<=5; i++) {
    const student = prompt("yours names ?" + (i)).toLowerCase();
    students.push(student)
}
students.sort();
var result = students.join (" , ");
alert(result);




// git add . ; git commit -m "message" ; git push ;