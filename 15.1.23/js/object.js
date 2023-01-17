//https://www.yad2.co.il/vehicles/cars?manufacturer=1,53,96,76&model=5,4,1687,1593,1270,1,1792,6,1522,1795,2854,982,3083&price=1000-500000&area=100&hand=1--1&ownerID=1,2,3,5&seats=7,8,9&engineType=9,8,7,6,5,4,3,2,1&group_color=7,9,10,1&gearBox=1//

const obj = {};
var query = prompt("enter a url").split("?")[1]; //"manufacturer=..."
var props = query.split("&"); //["manufacturer=245,116,285,110","year=2018-2023"]
for(let i =0 ;i<props.length; i++) {
    const elem = props[i].split("="); //["manufacturer","245,116,285,110"]
    //var key = elem[0];
    var val = elem[1];
    if (val.includes(",")) {
        val = val.split(",");
    }
    //obj[key] = val;
}
console.log(obj);