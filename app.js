// let msg = prompt("whats ur name")
// let welcome = ("welcome   " + msg)
// alert(welcome);


let btnTranslet = document.querySelector("#btn-translet")
let txtinput = document.querySelector("#btn-input")
let output = document.querySelector("#output")

//let url1 = "https://api.funtranslations.com/translate/yoda.json/"

let url = "https://api.funtranslations.com/translate/minion.json"
function gettranslationurl(input) {

    return url + "?" + "text=" + input

}

function errorhandler(error) {

    console.log("their is error try aftersome time", error)
}

function clickHandler() {


    if (txtinput.value == "") {

        alert("please enter");


    }


    else {

        alert("Please wait...");
        let inputtext = txtinput.value;

        fetch(gettranslationurl(inputtext))
            .then(response => response.json())
            .then(json => {
                let translatedtxt = json.contents.translated;

                output.innerText = translatedtxt;

            })
            .catch(errorhandler)

    }
    // console.log("clicked");
    //console.log("input", txtinput.value);
    //output.innerText = txtinput.value;






}


btnTranslet.addEventListener('click', clickHandler)
