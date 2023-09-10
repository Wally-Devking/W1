// Get references to HTML elements
const screen = document.querySelector('input[name="screen"]');
const numberButtons = document.querySelectorAll('.input-number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clean');

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    screen.value += button.value;
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    screen.value += button.value;
  });
});

// Add event listener to equals button
equalsButton.addEventListener('click', () => {
  try {
    // Try to evaluate the expression in the input field
    screen.value = eval(screen.value);
  } catch (error) {
    // Handle any errors (e.g., division by zero)
    screen.value = 'Error';
  }
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
  screen.value = ''; // Clear the input field
});

// Clear the screen when the user presses any key
document.addEventListener('keydown', () => {
  screen.value = '';
});
