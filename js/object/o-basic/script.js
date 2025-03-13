let person={
    name:"sharanya",
    age:32,
    salary:400000
};


function list(){
    document.getElementById("details").innerHTML=`The list of object is:<br> ${person.name}<br>
    ${person.age}<br> ${person.salary}`;
}
 function addnew(){
    person.nationality="Indian";
    document.getElementById('details').innerHTML=`The list after adding new properties is:<br> ${person.nationality}<br>`
 }
 function deleteObj(){
    delete person.salary;
    document.getElementById("details").innerHTML=`The list of objects after deleting are:<br>
    ${person.age}<br>${person.name}<br>${person.salary}`

 }