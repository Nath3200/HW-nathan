function calculate(a,b) { // function callback
    return a(1,2) + b(3,4)
}

function getFirstNumber(b,d) { // 1, 2
    return b + d
}

function getSecondNumber (e,f) { // 3,4
    return e + f
}
alert(calculate(getFirstNumber, getSecondNumber));
// 10;
// function () {} = une seule utilisation;