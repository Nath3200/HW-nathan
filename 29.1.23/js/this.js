const obj = {
    fName:"Jo",
    lName:"Smith",
    sayMyName: function () {
        // alert(this.fName + " " + this.lName)
        console.log(this.className);
    }
}

obj.sayMyName ()

const btn = document.createElement("button");
btn.innerText = "say My Name";
btn.className = "serge est la";
document.getElementById("main").append(btn);
btn.addEventListener("click",function(){
    obj.sayMyName()
})

toutBete()

btn.addEventListener("click",obj.sayMyName);
btn.addEventListener("click",toutBete);

function toutBete () {
    console.log("je suis smart");
    btn.removeEventListener("click",toutBete);
}
const toutSmart = function (){
    console.log("je suis bete");
}
toutSmart()