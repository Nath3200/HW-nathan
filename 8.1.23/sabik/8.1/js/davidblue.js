var fname = "";
var blue = false;
var index = 0;
while(fname !== "david" || blue !== true) {
    index ++;
    fname = prompt("what is your name ?").toLowerCase();
    blue = confirm("press OK if your eyes are blue");
}

alert("it took " + index + " tries until we found him !"); 