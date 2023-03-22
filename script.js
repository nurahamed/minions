var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL (input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Some went wrong with server please truy after some time ")
}

function clickHandler(){
    var inputText =textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translateText = json.contents.translated;
        outputDiv.innerText = translateText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)