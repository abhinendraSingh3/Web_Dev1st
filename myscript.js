
var btntranslator=document.querySelector("#btn-trans");
btntranslator.addEventListener("click",clickCall);

var inArea=document.querySelector("#text-area");
var outarea=document.querySelector("#out-area");

function clickCall(){
    outarea.innerText=inArea.value;
}


