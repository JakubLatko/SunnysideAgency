const button = document.querySelector(".mobileMenuButton")
const icon = document.querySelector(".mobileMenuIcon")
const list = document.querySelector(".navigationList")
const triangle = document.querySelector(".triangle")

button.addEventListener("click", ()=>{
    if(list.ariaExpanded == "false"){
        list.classList.add("opened")
        list.classList.remove("closed")
        triangle.classList.add("triangleSolution")
        triangle.classList.remove("closed")
        list.setAttribute("aria-expanded", "true")
    } else if(list.ariaExpanded == "true"){
        list.classList.remove("opened")
        list.classList.add("closed")
        triangle.classList.remove("triangleSolution")
        triangle.classList.add("closed")
        list.setAttribute("aria-expanded", "false")
    }

})