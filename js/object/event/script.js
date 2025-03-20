function change(){
    let name=document.getElementById('fname');
    name.value=name.value.toUpperCase();
};
function date(){
    document.getElementById("time").innerHTML=Date();
};
function color(){
    document.getElementById('blue').style.backgroundColor='red';
};
function pressed(){
    document.getElementById('press').innerHTML=Date();
};
function onload(){
    document.write("HELLOOOOOOO....................");
}