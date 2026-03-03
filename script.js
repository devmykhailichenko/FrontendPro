const agreeCheckbox = document.querySelector("#agreeCheckbox");
const citySelect = document.querySelector("#citySelect");
const radioContainer = document.querySelector("#radioContainer");

agreeCheckbox.addEventListener("change", function () {
    console.log("Checkbox changed.", this.checked);
});

citySelect.addEventListener("change", function () {
    console.log("Checkbox changed.", this.value);
});

radioContainer.addEventListener("change", function (e) {
    if(e.target.type === 'radio') {
        console.log("Radio changed.", e.target.value);
    }
});

// Form simple
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#emailInput");
const passInput = document.querySelector("#passInput");
const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    if(!email) {
        console.log("Email is empty!");
        return;
    }

    if(password.length < 8) {
        console.log("Password is weak!");
        return;
    }

    console.log("Sending data... ->", email, password);

    this.reset();
});

clearButton.addEventListener("click", function () {
    console.log(
        loginForm.checkValidity(),
        loginForm.reportValidity()
    );

    loginForm.reset();
});

// FormData
const formWithData = document.querySelector("#formWithData");
const result = document.querySelector("#result");

formWithData.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(formWithData);
    const username = formData.get("username");
    const email = formData.get("email");

    const skills = formData.getAll("skills");

    const errors = [];

    if(!username || !username.trim()) {
        errors.push("Username is required");
    }

    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Email is required");
    }

    if(skills.length === 0) {
        errors.push("You should have at least 1 skill!");
    }

    if(errors.length > 0) {
        result.innerHTML = '<p class="error">' + errors.join("<br>") + '</p>';
        return;
    }

    result.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills.join(" ")}</p>
    `;

    this.reset();
});

//RegEx – Regular Expression
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const PHONE_RE = /^\+?\d{10,15}$/;

const email = "myEmailgmail.com";
const phone = "+38099934232";

console.log(
    EMAIL_RE.test(email),
    PHONE_RE.test(phone),
    PASSWORD_RE.test("dsafas5asdf"),
);

