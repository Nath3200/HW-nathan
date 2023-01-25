var students = [""];
for (let i=1;i<6; i++) {
    students.push(prompt("enter the student's name"));
    students.join(" , ");
};
students.sort ()
alert(students)


const students = [];
function five() {
    for (let i = 1; i < 6; i++) {
        students.push(prompt("enter a student's name"));
        } return students.sort()
} alert(five());