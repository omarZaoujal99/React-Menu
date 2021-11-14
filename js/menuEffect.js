const menu = document.querySelector(".secLeft");
const toggleButton = document.querySelector(".btnToggleMenu");

toggleButton.addEventListener("click",()=>{
    menu.classList.toggle("displayMenu");
    toggleButton.classList.toggle("btnToggleMenuEff")
})