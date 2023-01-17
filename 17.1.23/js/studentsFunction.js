var students= [];
 for(let i=0; i<5; i++) 
 { students.push(prompt("Enter a Student:")); }

 alert (sortAndPrint());

 function sortAndPrint() {
    students.sort();
    var list= students.join(", ");
    text= "The students are: " + list;
    return text;}