let sign=document.getElementById('signupButton');
let fname=document.getElementById('signupFname');
let lname=document.getElementById('signupLname');
let email=document.getElementById('signupEmail');
let username=document.getElementById('signupUserName');
let password=document.getElementById('signupPassword');
let confpassword=document.getElementById('signupConfirmPassword');
let usernameValidation=document.getElementById('UsernameValidation');
let usernameREGEX=/(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
//username is 8-20 characters long&&no _ or . at the beginning&&no __ or _. or ._ or .. inside&&allowed characters&&no _ or . at the end
let emailREGEX=/^([a-z]|[A-Z]|[0-9]){8,20}@(gmail|yahoo|icloud|hotmail)\.com$/;
let passwordREGEX=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let users=[];
if (window.localStorage.getItem("Users")){
    users=JSON.parse(window.localStorage.getItem("Users"));//get the users data from the local storage
}
username.addEventListener('change', function () {
    if (!usernameREGEX.test(username.value)){
        username.nextElementSibling.innerHTML="invaled username";
        username.nextElementSibling.style.color = 'red';
        username.style.outline = '1px solid red';
    }
    if (usernameREGEX.test(username.value)){
        if(usernameAvailability(users)){
            username.nextElementSibling.innerHTML="";
            username.style.outline = 'none';
        }else{
            username.nextElementSibling.innerHTML="this username is already taken";
            username.nextElementSibling.style.color = 'red';
            username.style.outline = '1px solid red';
        }
    }
    if(usernameAvailability(users)&&usernameREGEX.test(username.value)||username.value==''){
        username.nextElementSibling.innerHTML="";
        username.style.outline = 'none';
    }
});
email.addEventListener('change', function () {
    if (!emailREGEX.test(email.value)){
        email.nextElementSibling.innerHTML="email should be like .......@example.com";
        email.nextElementSibling.style.color = 'red';
        email.style.outline = '1px solid red';
    }
    if (emailREGEX.test(email.value)){
        if(emailAvailability(users)){
            email.nextElementSibling.innerHTML="";
            email.style.outline = 'none';
        }else{
            email.nextElementSibling.innerHTML="this email is already taken";
            email.nextElementSibling.style.color = 'red';
            email.style.outline = '1px solid red';
        }
    }
    if(emailAvailability(users)&&emailREGEX.test(email.value)||email.value==''){
        email.nextElementSibling.innerHTML="";
        email.style.outline = 'none';
    }
});
password.addEventListener('change', function () {
    if (!passwordREGEX.test(password.value)){
        password.nextElementSibling.innerHTML="password should has at least one special character and capital letter and number";
        password.nextElementSibling.style.color = 'red';
        password.nextElementSibling.style.fontSize = '12px';
        password.style.outline = '1px solid red';
    }
    if (passwordREGEX.test(password.value)||password.value==''){
        password.nextElementSibling.innerHTML="";
        password.style.outline = 'none';
    }
});
confpassword.addEventListener('change', function () {
    if (password.value!=confpassword.value){
        confpassword.nextElementSibling.innerHTML="password confirmation should be the same as password";
        confpassword.nextElementSibling.style.color = 'red';
        confpassword.style.outline = '1px solid red';
    }
    if (password.value==confpassword.value){
        confpassword.nextElementSibling.innerHTML="";
        confpassword.style.outline = 'none';
    }
});
sign.addEventListener('click',function(){
    if (usernameREGEX.test(username.value)&&emailREGEX.test(email.value)&&passwordREGEX.test(password.value)&&confpassword.value===password.value&&emailAvailability(users)&&usernameAvailability(users)){
        let user={
            First:fname.value,
            Last:lname.value,
            Username:username.value,
            Email:email.value,
            Image:"../Logos/user.png",
            Password:signupPassword.value
        };
        //create a new product object
        users.push(user);
        //pushing the new product into the products array
        window.localStorage.setItem('Users',JSON.stringify(users));
        clear();        
        window.location.href="../html/login.html"
    }else{
        coloringBoxes();
        confpassword.nextElementSibling.innerHTML="Please enter all the fields!";
        confpassword.nextElementSibling.style.color = 'red';
    }
})
function coloringBoxes(){
    if (fname.value=='')fname.style.outline='1px solid red';
    if (lname.value=='')lname.style.outline='1px solid red';
    if (email.value=='')email.style.outline='1px solid red';
    if (password.value=='')password.style.outline='1px solid red';
    if (confpassword.value=='')confpassword.style.outline='1px solid red';
    if (username.value=='')username.style.outline='1px solid red';
}
function clear(){
    fname.value='';
    lname.value='';
    password.value='';
    confpassword.value='';
    email.value='';
    username.value='';
}
function emailAvailability(users){
    for(let i=0; i<users.length; i++){
        if(users[i].Email==email.value)return false;
    }
    return true;
}
function usernameAvailability(users){
    for(let i=0; i<users.length; i++){
        if(users[i].Username==username.value)return false;
    }
    return true;
}
let section=document.getElementById("mySection");
let men=document.getElementsByClassName("menu")[0];
 function menu(){
    section.classList.toggle("hide");
    men.classList.toggle("hide");
}