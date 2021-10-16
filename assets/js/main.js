const toTop = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})