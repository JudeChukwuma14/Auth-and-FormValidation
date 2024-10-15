// selecting form field
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retypePassword");
const signupBtn = document.getElementById("signupBtn");

// selecting error message
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const retypePasswordError = document.getElementById("retypePasswordError");

// function to show loading effect
function showLoading() {
  signupBtn.innerHTML = '<i class="fa-solid fa-spinner"></i> Loading...';
}
// validation of the entire form

function validateForm() {
  let isFormVaild = true;

  // Username validation: Ensure username is at least 3 characters long

  if (username.value.length < 3) {
    usernameError.innerHTML = "Username must be at least 3 characters";
    usernameError.style.display = "block";
    isFormVaild = false;
  } else {
    usernameError.style.display = "none";
  }

  // Email validation: Simple regex to check email format
  const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!checkEmail.test(email.value)) {
    emailError.innerHTML = "Invaild email format";
    emailError.style.display = "block";
    isFormVaild = false;
  } else {
    emailError.style.display = "none";
  }

  // Password validation: Check for uppercase, lowercase, number, and special character

  const checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (!checkPassword.test(password.value)) {
    passwordError.innerHTML =
      "Password must contain uppercase, lowercase, number, and special character";
    passwordError.style.display = "block";
    isFormVaild = false;
  } else {
    passwordError.style.display = "none";
  }

  // Retype password validation: Ensure the passwords match
  if (password.value !== retypePassword.value) {
    retypePasswordError.innerHTML = "Password do not match";
    retypePasswordError.style.display = "block";
    isFormVaild = false;
  } else {
    retypePasswordError.style.display = "none";
  }

  signupBtn.disabled = !isFormVaild;
  return isFormVaild;
}

// document.getElementById("signupForm").addEventListener("submit", function(e){
//     e.preventDefault()  // Prevent form from submitting
//     validateForm()  // Validate the form before showing loading effect

//     if(!signupBtn.disabled){
//         showLoading()

//         setTimeout(()=>{
//             alert("Form submitted successfully")

//             // Store the user's details in localStorage (optional)
//             localStorage.setItem("username", username.value)
//             localStorage.setItem("email", email.value)
//             localStorage.setItem("password", password.value)
//             window.location.href = "login.html"
//         },2000)
//     }
// })

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    showLoading();

     // Store the user's details in localStorage (optional)
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);


    setTimeout(()=>{
        alert("Form submitted successfully")
        window.location.href = "login.html";
    })

  }
});
