function paint(rooms= ["All rooms"], colors = ["white"]) {
    for (let i = 0; i < rooms.length; i++) {
        console.log("I painted the " + rooms[i] + " in the color " + colors[i]);
        
    }
}

paint(["salon", "kitchen", "brian's room"], ["rose","white","green"]);
paint (["grenier", "piscine", "noa's room"], ["black", "blue", "marron"]);

paint ();

function paint(rooms= ["All rooms"], colors = ["white"]) {

    if (
        rooms instanceof Array &&
        colors instanceof Array &&
        colors.length === rooms.length
    ) {
        
    
    for (let i = 0; i < rooms.length; i++) {
        console.log("I painted the " + rooms[i] + " in the color " + colors[i]);
        
    }
} else {
    alert ("you must pass arrays of the same size");
} }

paint(["salon", "kitchen", "brian's room"], ["rose","white","green"]);
paint (["grenier", "piscine", "noa's room"], ["black", "blue", "marron"]);