
var btntranslator=document.querySelector("#btn-trans");
btntranslator.addEventListener("click",clickCall);

var inArea=document.querySelector("#text-area");
var outarea=document.querySelector("#out-area");

// var apiurl='https://api.funtranslations.com/translate/minion.json';

// function urltranslation(text){
//   return apiurl+"?"+"text="+text
// }


function clickCall(){
    outarea.innerText=inArea.value;
    console.log("clicked")

// fetch(urltranslation)
// .then((response)=>{
//  return response.json();
// })
// .then((actualdata)=>{
//     return console.log(actualdata.contents.translated)
// })
// .catch((error)=>{
//     console.log(error);
//     alert("something broke down");
// })
}
fetch('https://kitsu.io/api/edge')
.then((apidata)=>{
    console.log(apidata.json())    
})
.then((response)=>{
    console.log("2nd clicked")
    console.log(response)})
.catch((error)=>{
    console.log("error aagya bhaiya",error);
})





