const Participants = [
    { fName : "Bob", lName: "Sanders", email: "bob@mail.com", tz: 123456789 },
    { fName : "Tim", lName: "Sanders", email: "tim@mail.com", tz: 123456789 },
    { fName : "Joe", lName: "Sanders", email: "joe@mail.com", tz: 123456789 },
    { fName : "Randy", lName: "Sanders", email: "randy@mail.com", tz: 123456789 },
    { fName : "Sally", lName: "Sanders", email: "sally@mail.com", tz: 123456789 },
];

init();
function init() {
var table = document.createElement("table");
table.className = "table table-hover";
var thead = document.createElement ("thead");
thead.innerHTML = `
        <tr>
           <th scope="col">ID</th>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Email</th>
           <th scope="col">Teudat Zeut</th>
           <th scope="col">Actions</th>
         </tr>          
`;
var tbody = document.createElement("tbody");
tbody.innerHTML = Participants.map(function (x,i) {
    return `
    <tr>
         <th scope="row">${i+1}</th>
         <td>${x.fName}</td>
         <td>${x.lName}</td>
         <td>${x.email}</td>
         <td>${x.tz}</td>
         <td id="participants_${i}">
             <i class="fa-solid fa-check"></i>
             <i class="fa-solid fa-plus"></i> 
             <i class="fa-solid fa-recycle"></i> 
             <i class="fa-solid fa-star"></i>
        </td>
    </tr>  
   `;
}).join("");
table.append(thead, tbody);
document.getElementById("main").append(table);
}