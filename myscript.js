// Get the current date and time
const currentDate = new Date();

// Display the current date and time in the header
const headerDate = document.querySelector('#header-date');
headerDate.textContent = currentDate.toLocaleString();

// Add an event listener to the contact form submit button
const contactForm = document.querySelector('#contact-form');
const submitButton = contactForm.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the form data
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // Send the form data to the server
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Display a success message to the user
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Your message has been sent!';
        successMessage.classList.add('success-message');
        contactForm.appendChild(successMessage);

        // Clear the form fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    })
    .catch(error => {
        // Display an error message to the user
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.classList.add('error-message');
        contactForm.appendChild(errorMessage);
    });
});
const xhr = new XMLHttpRequest();
xhr.open('POST', '/path/to/php/script.php');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  if (xhr.status === 200) {
    // Handle the response from the server
  }
};
xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
