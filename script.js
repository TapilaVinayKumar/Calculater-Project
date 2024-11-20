// Get the display element
let display = document.getElementById("display");

// Append a value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculateResult() {
    try {
        // Use eval to evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
