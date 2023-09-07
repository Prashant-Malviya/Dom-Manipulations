// 1. Selection Of an Element 
// 2. Changing <HTML>
// 3. Changing CSS
// 4. Event Listner 



// document.querySelector("h1").innerHTML = "hi"
var a = document.querySelector("h1");
console.log(a);

a.innerHTML = "hiiiiiiiiiiiiii";

var b = document.querySelector("h1");
b.style.color = "yellow"
a.style.backgroundColor = "black"

a.addEventListener("click",function(){
    a.innerHTML = "Namaste Bharat";
    console.log("bharat");
    a.style.color = 'blue';
})

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){
    bulb.style.backgroundColor = "yellow";
    flag = 1;
    }else{
        bulb.style.backgroundColor = "white";
        flag = 0;
    }
})