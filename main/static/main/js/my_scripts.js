let cart = [1,2,3,4]
let sum = 0
for (let i=0; i< cart.length; i++){
    sum += cart[i]
}
document.getElementById("demo").innerHTML = sum

let btn = document.getElementById("my_btn");
btn.onclick = function() {
    alert("Hello Friend");
}

/*window.onload = function() {
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahrenheit");
    c.onchange = function() {
        f.value = (c.value * 9/5) + 32;
    };
    f.onchange = function() {
        c.value = (f.value - 32) * 5/9;
    };
}*/
/*let c = document.getElementById("celsius");
let f = document.getElementById("fahrenheit");
function cel() {
    console.log("hei")
    f.value = (c.value * 9/5) + 32;
};
function fah() {
    c.value = (f.value - 32) * 5/9;
};
let cels = document.querySelector("#celcius");
let fahr = document.querySelector("#fahrenheit");
cels.addEventListener("change", cel);
fahr.addEventListener("change", fah);*/