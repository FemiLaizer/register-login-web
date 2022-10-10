let registerBtn = document.querySelector(".registerbtn");
let loginBtn = document.querySelector(".loginbtn");
let username = document.getElementById("username");
let regEmail = document.getElementById("reg-email");
let regPassword = document.getElementById("reg-password");
let logMail = document.getElementById("log-email");
let logPass = document.getElementById("log-password");
let signIn = document.getElementById("sign-in");
let signUp = document.getElementById("sign-up");
let text = document.querySelector(".text");



signUp.addEventListener('click', function () {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "flex";
    text.textContent = "Please fill all compulsory fields to register";
})

registerBtn.addEventListener('click', function () {
    checkInput();
})

loginBtn.addEventListener('click', function () {
    checkLogin();
    clearInput();
})

signIn.addEventListener('click', function () {
    text.textContent = "Please enter your email and password to login";
    if (regEmail.value !== "" && regPassword.value !== "") {
        checkInput();
    }
    document.querySelector(".login").style.display = "flex";
    document.querySelector(".register").style.display = "none";
})

function checkInput() {
    if (username.value !== "" && regEmail.value !== "" && regPassword.value !== "") {
        document.querySelector(".text").textContent = "Registartion sucessful! " + username.value + ", Please login";
        document.querySelector(".register").style.display = "none";
        document.querySelector(".login").style.display = "flex";
    } else {
        text.textContent = "Please fill all compulsory fields";
    }
}

function checkLogin() {
    if (logMail.value === regEmail.value && logPass.value === regPassword.value) {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".text").textContent = "Welcome Your Username is: " + username.value;
        document.querySelector(".text").classList.add("welcome");
        document.querySelector(".main-container").style.display = "flex";
    } else {
        text.textContent = "Invalid email or password!";
    }
}

function clearInput() {
    text.style.display = "none";
}
