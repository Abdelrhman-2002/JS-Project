let nav=document.querySelector('nav'); 
window.addEventListener("scroll",function(){
    if (window.scrollY > 50) {
        nav.style.position ="fixed";
        nav.style.width="100%";
        nav.style.marginTop="0";
        nav.style.borderRadius="0";
        nav.style.backgroundColor="var(--nv--color)";
    } else {
        nav.style.position ="sticky";
        nav.style.width="80%";
        nav.style.marginTop="50px";
        nav.style.borderRadius="20px";
        nav.style.backgroundColor="var(--text--color)";
    }
});
let btn = document.getElementById("btn");
window.addEventListener("scroll",function(){
    if (window.scrollY > 900) {
        btn.classList.remove("hide");
        btn.classList.add("show");
        btn.addEventListener("click",function(){
            window.scrollTo({
                top: 0,
                behavior:"smooth"
            });
        })
    } else {
        btn.classList.remove("show");
        btn.classList.add("hide");
    }
    });
function discover(){
    window.scrollTo({
        top: 1500,
        behavior:"smooth"
    });
}
function about(){
    window.scrollTo({
        top: 3525,
        behavior:"smooth"
    });
}
let section=document.getElementById("mySection");
let footer=document.getElementById("myFooter");
let men=document.getElementsByClassName("menu")[0];
 function menu(){
    section.classList.toggle("hide");
    footer.classList.toggle("hide");
    men.classList.toggle("hide");
}
