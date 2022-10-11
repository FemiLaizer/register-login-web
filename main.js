let register = document.querySelector(".register");
let login = document.querySelector(".login");
let username = register.children[1];
let regEmail = register.children[2];
let regPassword = register.children[3];
let registerBtn = register.children[4];

let logMail = document.getElementById("log-email");
let logPass = document.getElementById("log-password");
let loginBtn = document.querySelector(".loginbtn");

let activeDisplay = document.querySelectorAll(".active-display");
let submitBtn = document.querySelectorAll(".submitBtn");
let text = document.querySelector(".text");

function removeBoxDisplay(){
    if(register.classList.contains("clear")){
        login.classList.add("clear");
        register.classList.remove("clear")
    }else{
        register.classList.add("clear")
        login.classList.remove("clear");
    }
}

activeDisplay.forEach(item =>{
    item.addEventListener('click', () => {
    removeBoxDisplay();
   })
})

const checkUserInput = () => {
    if (username.value && regEmail.value && regPassword.value !== "") {
        person.username = username.value;
        person.email = regEmail.value;
        person.password = regPassword.value;
        text.textContent = `Registration successful! Please login.`;
        console.log(person);
        removeBoxDisplay();
    } else {
        text.textContent = "Please fill all compulsory fields.";
    }
}

submitBtn.forEach(btn=>{
    btn.addEventListener('click', (e) =>{
      if(e.currentTarget.classList.contains("registerbtn")){
        checkUserInput();
      }else{
        allowUserLogin();
      }
      clearInput();
    })
})

function allowUserLogin(){
    if(logMail.value && logPass.value === ""){
       text.textContent = "Please fill all compulsory fields.";
    }else {
        checkLoginDetails();
    }
}

const checkLoginDetails = () =>{
    if (logMail.value === person.email && logPass.value === person.password) {
        console.log(person);
       text.textContent = `Welcome ${person.username}! Please login.`;
        removeBoxDisplay();
    } else {
        text.textContent = "Invalid email or password! Please try again.";
    }
}

function clearInput() {
    const allInput = document.querySelectorAll("input");

    allInput.forEach(input =>{
        input.value = "";
    })
}

const person = {
    id: "",
    username: "",
    email: "",
    password: ""
};
