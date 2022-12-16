
var btntranslator=document.querySelector("#btn-trans");
btntranslator.addEventListener("click",clickCall);

var inArea=document.querySelector("#text-area");
var outarea=document.querySelector("#out-area");

function clickCall(){
    console.log("Clicked!")
    console.log(inArea.value);
    outarea.innerText=inArea.value;
}


