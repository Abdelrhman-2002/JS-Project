let image=document.getElementById("image");
let Users=JSON.parse(window.localStorage.getItem("Users"));
let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
let passwordREGEX=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let first=document.getElementById("fname");
let last=document.getElementById("lname");
let email=document.getElementById("email");
let currentPassword=document.getElementById("password");
let password=document.getElementById("newPassword");
function setTheData(){
    image.setAttribute("src",Users[currentUser.UserIndex].Image);
    first.setAttribute("placeholder",Users[currentUser.UserIndex].First);
    last.setAttribute("placeholder",Users[currentUser.UserIndex].Last);
    email.setAttribute("placeholder",Users[currentUser.UserIndex].Email);
}
setTheData();
function save(){
    if(Users[currentUser.UserIndex].Password==currentPassword.value){
        if (passwordREGEX.test(password.value)&&password.value!=Users[currentUser.UserIndex].Password){
            Users[currentUser.UserIndex].Password=password.value;
            window.localStorage.setItem("Users",JSON.stringify(Users));
            password.value='';
            currentPassword.value='';
            alert("Data updated successfully ;)")
        }else{
            alert("the new password should be different :(")
        }
    }else{
        alert("wrong password :(");
    }
}
password.addEventListener('change', function () {
    if (!passwordREGEX.test(password.value)){
        password.nextElementSibling.innerHTML="password should has at least one special character and capital letter and number";
        password.nextElementSibling.style.color = 'red';
        password.nextElementSibling.style.fontSize = '12px';
        password.style.outline = '1px solid red';
    }
    if (passwordREGEX.test(password.value)){
        password.nextElementSibling.innerHTML="";
        password.style.outline = 'none';
    }
});