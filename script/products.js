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
//................................................................................................................................

let productsContainer = document.getElementsByClassName("products")[0];
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products");
xhr.send();

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4) {
        let products = JSON.parse(xhr.response);

        let str = ``;
        for (let i = 0; i < products.products.length; i++) {
            str += `
                <div class="product">
                    <img src="${products.products[i].thumbnail}">
                    <p class="product-title">${products.products[i].title}</p>
                    <p><del>$${parseInt((products.products[i].price * (products.products[i].discountPercentage / 100)) + products.products[i].price)}</del></p>
                    <p>$${products.products[i].price}</p>
                    <p>rating: ${products.products[i].rating}</p>
                </div>
            `;
        }


        productsContainer.innerHTML = str;

        let productElements = document.getElementsByClassName("product");
        for (let i = 0; i < productElements.length; i++) {
            productElements[i].addEventListener("click", function (event) {
                let clickedProductTitle = event.currentTarget.querySelector(".product-title").innerText;
                window.localStorage.setItem("product-title",JSON.stringify(clickedProductTitle));
                window.location.href="../html/product.html"
            });
        }
    }
});
function categorize(category){
    if (xhr.readyState === 4) {
        let products = JSON.parse(xhr.response);

        let str = ``;
        for (let i = 0; i < products.products.length; i++) {
           if(category==products.products[i].category){
            str += `
                <div class="product">
                    <img src="${products.products[i].thumbnail}">
                    <p class="product-title">${products.products[i].title}</p>
                    <p><del>$${parseInt((products.products[i].price * (products.products[i].discountPercentage / 100)) + products.products[i].price)}</del></p>
                    <p>$${products.products[i].price}</p>
                    <p>rating: ${products.products[i].rating}</p>
                </div>
            `;
           }
        }


        productsContainer.innerHTML = str;

        let productElements = document.getElementsByClassName("product");
        for (let i = 0; i < productElements.length; i++) {
            productElements[i].addEventListener("click", function (event) {
                let clickedProductTitle = event.currentTarget.querySelector(".product-title").innerText;
                window.localStorage.setItem("product-title",JSON.stringify(clickedProductTitle));
                window.location.href="../html/product.html"
            });
        }
    }
}













//get the theme that is saved in the memory
if (localStorage.getItem("theme")){
    let theme = JSON.parse(window.localStorage.getItem("theme"));
    let body = document.body;
    let themeIconImage = document.getElementById('themeIconImage');
    if (theme=="light-mode") {
        body.classList.remove('dark-mode');
        themeIconImage.src = '../Logos/night-mode.png';
        body.style.backgroundColor = '#fff'; // Light mode background color
        window.localStorage.setItem("theme",JSON.stringify("light-mode"));//save the theme as light mode in the browser
    } else {
        body.classList.add('dark-mode');
        themeIconImage.src = '../Logos/brightness.png';
        body.style.backgroundColor = '#1a1a1a'; // Dark mode background color
        window.localStorage.setItem("theme",JSON.stringify("dark-mode"));//save the theme as night mode in the browser
    }
}


function toggleDarkMode() {
    let body = document.body;
    let themeIconImage = document.getElementById('themeIconImage');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeIconImage.src = '../Logos/night-mode.png';
        body.style.backgroundColor = '#fff'; // Light mode background color
        window.localStorage.setItem("theme",JSON.stringify("light-mode"));//save the theme as light mode in the browser
    } else {
        body.classList.add('dark-mode');
        themeIconImage.src = '../Logos/brightness.png';
        body.style.backgroundColor = '#1a1a1a'; // Dark mode background color
        window.localStorage.setItem("theme",JSON.stringify("dark-mode"));//save the theme as night mode in the browser
    }
}
let logo = document.getElementById('logo');

if (logo) {
    logo.addEventListener('click', toggleDarkMode);
}

