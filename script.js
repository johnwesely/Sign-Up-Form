console.log("script loaded");

let passwordCheck = document.querySelector("#password-confirmation").addEventListener("change", () => {
    checkPasswordMatch();
});

function checkPasswordMatch() {
    const password = document.querySelector("#password");
    const confirmedPassword = document.querySelector("#password-confirmation");


    if (password.value !== confirmedPassword.value) {
        password.classList.remove("valid");
        confirmedPassword.classList.remove("valid")
        password.classList.add("invalid");
        confirmedPassword.classList.add("invalid");
    } else {
        password.classList.remove("invalid");
        confirmedPassword.classList.remove("invalid")
        password.classList.add("valid");
        confirmedPassword.classList.add("valid");
    }
}
