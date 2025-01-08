 // Get references to HTML elements
const nameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const errorMessage = document.getElementById('errorMessage');
// Add click event listener to the button
greetButton.addEventListener('click', () => {
  // Get the trimmed value from the input field
  const name = nameInput.value.trim();
  // Check if the input is empty
  if (name === '') {
    // Display an error message if the input is empty
    errorMessage.textContent = 'Please enter your name.';
    greetingMessage.textContent = '';
    greetingMessage.classList.remove('show');
  } else {
    // Clear any previous error message
    errorMessage.textContent = '';
    // Display the personalized greeting message
    greetingMessage.textContent = `Hello, ${name}! Welcome on Board.`;
    // Add the class to show the greeting message with animation
    greetingMessage.classList.add('show');
    }
  });