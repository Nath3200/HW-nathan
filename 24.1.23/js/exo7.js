createForm();

function createForm() {
    var model = myInput("model-input","Enter the model name","text");
    var brand = myInput("brand-input","Enter the brand name","text");
    var price = myInput("price-input","Enter the price","number");
    var sale = myInput("sale-input","","checkbox","form-check-input");
    var btn = myButton("submit","","Add this product", addProduct);
    var formDiv = document.getElementById("form-div");
    formDiv.append(model,brand,price,sale,btn);
 
    function addProduct() {
     console.log("added a product");
    }
 }
 
 function myInput (_id,_placeholder,_type,_class="") {
     var div = document.createElement("div");
     var input = document.createElement("input");
     input.className = "form-control" + _class;
     input.id = _id;
     input.placeholder=_placeholder;
     input.type = _type;
     div.append(input);
     return div;
 }
 
 function myButton(_id,_class="",_text,_callback) {
     var div = document.createElement("div");
     var btn = document.createElement("button");
     btn.className = "btn btn-success" +_class;
     btn.id= _id;
     btn.innerText=_text;
     btn.addEventListener("click",_callback);
     div.append(btn);
     return div;
 }