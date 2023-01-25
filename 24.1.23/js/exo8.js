const Categories = [
    { value : "", text:"--choose a category--", active:true},
    { value : "Sport", text:"Sport", active:true},
    { value : "Casual", text:"Casual", active:true},
    { value : "Evening", text:"Evening", active:true},
    { value : "Relax", text:"Relax", active:true},
];

const Products = [

]

createForm();

function createForm() {
    var model = myInput("model-input","Enter the model name","text");
    var brand = myInput("brand-input","Enter the brand name","text");
    var price = myInput("price-input","Enter the price","number");
    var categories = mySelect("categoty-select","",Categories);
    var sale = myInput("sale-input","","checkbox","form-check-input");
    var btn = myButton("submit","","Add this product", addProduct);
    var formDiv = document.getElementById("form-div");

    formDiv.append(model.div,brand.div,price.div,categories.div,sale.div,btn);
 
    function addProduct() {
     var obj= {};
     obj.model = model.input.value;
     obj.brand = brand.input.value;
     obj.price = price.input.value;
     obj.category = categories.select.value;
     if (obj.model && obj.brand && obj.price && obj.category){
        Products.push(obj);
        model.input.vamue ="";
        brand.input.value= "";
        price.input.value = "";
        category.select.value = "";        
     } else{
        redBorder(obj);
     }
    }
    function redBorder(x) {
        
    }
 
 }
 
 function myInput (_id,_placeholder,_type,_class="") {
     var obj = {}; 
     obj.div = document.createElement("div");
     obj.input = document.createElement("input"); //  HTML obj <input/>
     obj.input.className = "form-control" + _class;
     obj.input.id = _id;
     obj.input.placeholder=_placeholder;
     obj.input.type = _type;
     obj.div.append(obj.input);
     return obj;
 }

 function mySelect(_id,_class="",_arr) {
    var obj = {};
    obj.div = document.createElement("div"); // HTML obj <div></div>
    obj.select = document.createElement("select"); // HTML obj <select></select>
    obj.select.className = "form-select" + _class;
    obj.select.id = _id;
    for (let i = 0; i < _arr.length; i++) {
        const opt = _arr[i];
        if(opt.active) {
            var option = document.createElement("option");  // <option></option>
            option.value = opt.value;  // <option value="..."></option>
            option.innerText=opt.text;  // <option value =...>--Choose a category--</option>
            obj.select.append(option);  // ajoute l option dans select
        }
    }
    obj.div.append(obj.select);
    return obj;
 }
 
 function myButton(_id,_class="",_text,_callback) {
     var div = document.createElement("div"); //  HTML obj <div></div>
     var btn = document.createElement("button"); //  HTML obj <input/>
     btn.className = "btn btn-success" +_class;
     btn.id= _id;
     btn.innerText=_text;
     btn.addEventListener("click",_callback);
     div.append(btn);
     return div;
 }