let email=document.getElementById('email');
let message=document.getElementById('message');
let emailREGEX=/^([a-z]|[A-Z]|[0-9]){8,20}@(gmail|yahoo|icloud|hotmail)\.com$/;
let feedback=document.getElementsByClassName('feedback')[0];
function submitFeedback(){
    if(email.value!==""&&message.value!==""){
        if(!emailREGEX.test(email.value)){
            alert("please enter a valid email!")
            email.value="";
        }else{
            alert("Feedback submitted successfully! :)")
            feedback.style.backgroundColor = "var(--text--color)";
            feedback.innerHTML=`
            <h3>Thanks ${email.value} for your feedback:</h3>
            <p>${message.value}</p>
            <p>We are going to consider it!</p>
            `
            message.value="";
            email.value="";
        }

    }else{
        alert("please enter all the fields!")
    }

}
let section=document.getElementById("mySection");
let men=document.getElementsByClassName("menu")[0];
 function menu(){
    section.classList.toggle("hide");
    men.classList.toggle("hide");
}