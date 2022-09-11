const maincontainer = document.querySelector(".main-container");
const thankscontainer = document.querySelector(".thank-you");
const submitbutton = document.getElementById("submit");
const ratebutton = document.getElementById("rate");



function clickable() {
    thankscontainer.style.display = "block";
}


ratebutton.addEventListener("click",() =>{
    maincontainer.style.display="block"
    thankscontainer.style.display = "none";
    
})

