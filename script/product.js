let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
document.getElementById("username").innerHTML = currentUser.UserName;
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
    if (window.scrollY > 200) {
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
    let productsContainer = document.getElementsByClassName("products")[0];
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products");
    xhr.send();
    let prod = JSON.parse(window.localStorage.getItem("product-title"));
    
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
            let products = (JSON.parse(xhr.response)).products;
    
            let str = ``;
            for (let i = 0; i < products.length; i++) {
                if (products[i].title === prod) {
                    str = `
                        <div class="products">
                            <div class="product">
                                <div class="slider">
                                    <img src="${products[i].thumbnail}" id="mainSliderImage">
                                    <div class="slides">
                                        <img src="${products[i].images[0]}" onclick="changeSliderImage('${products[i].images[0]}')">
                                        <img src="${products[i].images[1]}" onclick="changeSliderImage('${products[i].images[1]}')">
                                        <img src="${products[i].images[2]}" onclick="changeSliderImage('${products[i].images[2]}')">
                                        <img src="${products[i].images[3]}" onclick="changeSliderImage('${products[i].images[3]}')">
                                    </div>
                                </div>
                                <div class="productData">
                                    <h2 class="product-title">${products[i].title}</h2>
                                    <p>${products[i].description}</p>
                                    <p>brand:${products[i].brand}</p>
                                    <p><del>$${parseInt((products[i].price * (products[i].discountPercentage / 100)) + products[i].price)}</del></p>
                                    <p>$${products[i].price}</p>
                                    <p>rating: ${products[i].rating}</p>
                                    <button id="addtocart">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
    
            productsContainer.innerHTML = str;
        }
    });
    
    function changeSliderImage(newSrc) {
        document.getElementById("mainSliderImage").src = newSrc;
    }
    
    if (localStorage.getItem("theme")){
        let theme = JSON.parse(window.localStorage.getItem("theme"));
        let body = document.body;
        let themeIconImage = document.getElementById('themeIconImage');
        if (theme=="light") {
            document.body.setAttribute("theme", "light");
            themeIconImage.src = '../Logos/night-mode.png';
        } else {
            document.body.setAttribute("theme", "dark");
            themeIconImage.src = '../Logos/brightness.png';
        }
    }
    
    function toggleDarkMode() {
        let themeIconImage = document.getElementById('themeIconImage');
        if (document.body.getAttribute("theme") === "dark") {
            document.body.setAttribute("theme", "light");
            themeIconImage.src = '../Logos/night-mode.png';
            window.localStorage.setItem("theme", JSON.stringify("light"));
        } else {
            document.body.setAttribute("theme", "dark");
            themeIconImage.src = '../Logos/brightness.png';
            window.localStorage.setItem("theme", JSON.stringify("dark"));
        }
    }