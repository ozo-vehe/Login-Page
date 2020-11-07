let inputs = document.querySelectorAll(".input");
let label = document.querySelector("label");
let eyeIcon = document.querySelector(".eye-icon");
let eyeIconHidden = document.querySelector(".eye-icon-hidden");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let username = document.querySelector("#username");


inputs.forEach(function(input) {
    input.addEventListener("focus", function(e) {
        this.parentElement.children[0].classList.add("animate");
    });
    input.addEventListener("blur", function() {
        if(this.value !== "") {
            this.parentElement.children[0].classList.add("animate");
        }
        else {
            this.parentElement.children[0].classList.remove("animate");
        }
    });
    
});

eyeIcon.addEventListener("click", function() {
    eyeIconHidden.classList.remove("hidden");
    password.setAttribute("type", "text");
});

eyeIconHidden.addEventListener("click", function() {
    eyeIconHidden.classList.add("hidden");
    password.setAttribute("type", "password")
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(`Welcome ${username.value}`);
    inputs.forEach(function(input) {
        input.value = "";
    })
})
