const wrapper = document.querySelector(".wrapper");
const inputPass = document.querySelector(".inp1 input");
const inputConfirm = document.querySelector(".inp2 input");
const icon = document.querySelector(".inp2 i");
const btnCheck = document.querySelector(".check");
const checking = document.querySelector(".checking_validation");

// window.addEventListener('load', () => {
//    inputPass.focus();
// })

inputPass.addEventListener("input", () => {
  let value1 = inputPass.value;
  if (value1.length) {
    inputPass.style.border = "2px solid red";
    btnCheck.style.opacity = 1;
    btnCheck.style.pointerEvents = "auto";
  } else {
    inputPass.style.border = "2px solid #000";
    btnCheck.style.opacity = 0.5;
    btnCheck.style.pointerEvents = "none";
  }

  if (inputPass.value == "") {
    wrapper.classList.remove("active");
    checking.textContent = "Enter at least 8 characters";
    inputConfirm.value = "";
  }
});

const confirmPassword = () => {
  if (inputPass.value === inputConfirm.value && inputPass.value.length >= 8) {
    checking.textContent = "This is a valid password";
    checking.style.color = "green";
  } else {
    checking.textContent = "Enter a valid password!";
    checking.style.color = "red";
  }
};

inputPass.addEventListener("click", () => {
  wrapper.classList.add("active");
});

icon.addEventListener("click", () => {
  inputPass.type = inputPass.type == "password" ? "text" : "password";
  inputConfirm.type = inputPass.type;
});
btnCheck.addEventListener("click", confirmPassword);
