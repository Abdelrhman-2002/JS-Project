let addTaskBox = document.querySelector(".box");
let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
let Users=JSON.parse(window.localStorage.getItem("Users"));
let profileImage = document.getElementById("profileImage");
let container=document.getElementById("container");


//................................................................................................................................
let productsContainer = document.getElementsByClassName("products")[0];
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products");
xhr.send();

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4 ) {
        let products = JSON.parse(xhr.response);

        // console.log(products.products[0]);
        let str = ``;
        for (let i = 0; i < products.products.length; i++) {
            str += `
                <div class="product">
                    <img src="${products.products[i].thumbnail}">
                    <p>${products.products[i].title}</p>
                    <p><b>$${products.products[i].price}</b></p>
                    <p><del>$${parseInt((products.products[i].price*(products.products[i].discountPercentage/100))+products.products[i].price )}</del></p>
                    <p>rating: ${products.products[i].rating}</p>
                </div>
            `;
        }

        productsContainer.innerHTML = str;
    }
});













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

