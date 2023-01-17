function falafelPerso(bread, qty, hummus, toppings){
    var str = "don t worry, you don t have hummus";
    if(hummus){
        str = "I put your hummus";
    }
    if (toppings && toppings.length > 0 && typeof toppings == "object") {
        str +="I added you " + toppings.join(", ") + ", ";
    }
    return "here is your" + bread + " with" + qty + " balls of falafel " + str; 
}
function falafelProdMassive() {
    return "Here is your pita with 6 balls of falafel. Don't worry, I did not add you hummus.";
  }
  
  alert(falafelProdMassive());
  
  alert(falafelPerso("lafa", 10, true, ["olives", "piments fort", "onion"]));
  alert(falafelPerso("baguette", 3, true, "salad, onion"));




// git add . ; git commit -m "message" ; git push ;