
function menuShow () {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");    
} else {
    menuMobile.classList.add("open");
}

}

document.addEventListener('DOMContentLoaded', function(){
let menuMobile = document.querySelector(".mobile-menu")
let closeMenu = document.getElementById("header")
let myObserver = new IntersectionObserver ((entries) => { 
   entries.forEach(entry => {
    if(entry.isIntersecting === false){

        menuMobile.classList.remove("open");

    }
   })
        
})

myObserver.observe(closeMenu)



});


