const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.password.value === "") {
        alert("All form fields must be filled in");
        return
    } 
    const obj = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim()
    };

    console.log(obj);
    form.reset();
    }
