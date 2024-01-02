// let msg = prompt("whats ur name")
// let welcome = ("welcome   " + msg)
// alert(welcome);


let btnTranslet = document.querySelector("#btn-translet")
let txtinput = document.querySelector("#btn-input")



function clickHandler() {

    console.log("clicked");
    console.log("input", txtinput.value);
}


btnTranslet.addEventListener('click', clickHandler)
