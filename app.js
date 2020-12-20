var btnTranslate= document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", ClickHandler)

var input=document.querySelector("#inputText");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function constructURL(text) {

    return serverURL + "?text=" + text;

}

function errorHandler(error){

    console.log("error occured",error);
    alert("Oops! Server down! Try again in sometime")

}

var output=document.querySelector("#outputText");

function ClickHandler() {    
    console.log(input.value);
    var inputText=input.value;

     fetch(constructURL(inputText))
        .then(response=>response.json())
        .then(json=>
            {
                var translated=json.contents.translated
                output.innerText=translated;
            })   
        .catch(errorHandler)
  
}
