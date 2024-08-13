const inputEl=document.querySelector("input")
const bodyEl=document.querySelector("body")
inputEl.checked=JSON.parse(localStorage.getItem("mode"));
updateBody()
function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background="black"
    }
    else{
        bodyEl.style.background="white"
    }
}

inputEl.addEventListener("input",()=>{
    updateBody() 
    updateLocalStoage()
})

function updateLocalStoage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}