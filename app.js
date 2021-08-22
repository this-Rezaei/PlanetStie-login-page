//select

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

//event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkinput();
});

//check input
const checkinput = () => {
  const usreNamevalue = username.value.trim();
  const passwordvalue = password.value.trim();
  const emailvalue = email.value.trim();

  if (usreNamevalue === "") {
    setError(username, ". Enter the username");
  } else {
    setSuccess(username);
  
  }

  if (emailvalue === "") {
    setError(email, ". Enter Email");
  } else {
    setSuccess(email);
  }

  if (passwordvalue === "") {
    setError(password, ". Enter the password");
  } else {
    setSuccess(password);
  }
};

const setError = (input, massage) => {
  const formControl = input.parentElement;
  const para = formControl.querySelector("p"); 
  formControl.className = "form-control error";
  para.innerText = massage;
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const para = formControl.querySelector("p");
  para.innerText = "";
};
