function fixEmail (address) {
    address= address.toLowerCase().replaceAll(" ", "");
    if (address.includes("@gmail.com")) {
        var arr = address.split ("@");
        address = arr[0].replaceaAll(".","") + "@gmail.com";
    }
    return address;
}

alert(fixEmail(prompt("enter your address")));
console.log(fixEmail("nath32@gmail.com"));

var x = prompt("enter an address");
console.log(fixEmail(x));