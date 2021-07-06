const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navbarNav = document.querySelector(".navbar-nav");

window.addEventListener("scroll", function(){
    const scrollHeight =this.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("navbar-fixed");
        
        // navbarBrand.classList.add("navbar-fixed-brand");
        // navbarNav.classList.add("ms-auto");
        // navbar.style.width = "100%";

    }
    else{
        navbar.classList.remove("navbar-fixed");
        // navbarBrand.classList.remove("navbar-fixed-brand");

    }
})


//end of navbar-fixed 

