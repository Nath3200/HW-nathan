const Students = [];
const Results = [];
const Passed = [];
var avgPassed = 0;
var avgFailed = 0;
while (!qty) var qty = parseInt(prompt("how many students ?"));  // pour eviter le NaN
for (let i = 0; i<qty; i++) {
     var fName = prompt("enter the student s name");
     var note = parseInt(prompt("enter the student s result"));
     Students.push(fName);
     Results.push(note);
     if(note>=70) {
          Passed.push(fName);
          avgPassed += note;
          continue;
     }
     avgFailed += note;   
}
alert(
     "The students who passed are : " + Passed.join(", ") + ".\n The average of the students who passed is : " +
     avgPassed / Passed.length + "\nThe average of the students who failed is: " +
     avgFailed / (qty - Passed.length)
);





// git add . ; git commit -m "message" ; git push ;