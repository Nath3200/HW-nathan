var f=false
for(let i =0; i<100; i++) {
    var num = parseInt(prompt("give a positive number"));
    var sum =0;
    while(num>0) {
        var last = num%10;
        sum += last;
        num == (num-last)/10;
    }  console.log(sum + "\n");
    if(sum ==26){
        f=true; break
    }
} if(f==true){
    alert("Magic number found !")
}