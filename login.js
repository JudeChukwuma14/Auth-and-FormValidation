const storedEmail = localStorage.getItem("email");
const storedPassword = localStorage.getItem("password");

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the input values from the login form
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Get the error display elements
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  // Check if the input email matches the stored email
  if (loginEmail !== storedEmail) {
    emailError.innerText = "Incorrect email address";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Check if the input password matches the stored password
  if (loginPassword !== storedPassword) {
    passwordError.innerText = "Incorrect email address";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }


  if(isValid){
    alert("Login successfully")
    window.location.href = "main.html";
  }
});
