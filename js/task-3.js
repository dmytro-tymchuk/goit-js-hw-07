const userInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
userInput.addEventListener("input", handleInput);

function handleInput(event) {
    const input = event.target.value.trim();
    if (input === "") {
        span.textContent = "Anonymous";
    } else {
        span.textContent = input;
    }
    
}