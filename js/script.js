const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');

const signInForm = document.getElementById('signIn_box');
const signUpForm = document.getElementById('signUp_box');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="flex";

})

signInButton.addEventListener('click',function(){
    signInForm.style.display="flex";
    signUpForm.style.display="none";

})