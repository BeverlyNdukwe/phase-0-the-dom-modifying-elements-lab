// Write your code here!
// Remove the main element with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new h1 element and assign it to newHeader variable
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text content (replace 'Frankline' with your actual name)
newHeader.innerHTML = 'Frankline is the champion';

// Append the new header to the body
document.body.append(newHeader);