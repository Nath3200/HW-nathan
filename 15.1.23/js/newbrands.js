var cars = ["honda", "bmw", "toyota", "hyundai"];
var brand = prompt("enter a brand");
var index = cars.indexOf(brand); //-1 si la marque n existe pas
if(index>-1) {
    cars.splice(index, 1, prompt("enter a new car brand") );
} else {
    cars.push(brand);
}