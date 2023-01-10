var salary = parseInt(prompt("what is your salary?"));
var tax = 0
if(salary<25000) {
    tax = salary*0.1
} else if(salary<50000) {
    tax = 2500 + (salary - 25000)*0.2
} else if(salary<100000) {
    tax = 7500 + (salary - 50000)*0.3
} else if(salary<150000) {
    tax = 22500 + (salary - 100000)*0.4
} else if(salary>=150000) {
    tax = 42500 + (salary - 150000)*0.5
}
alert("your tax is " + tax) 