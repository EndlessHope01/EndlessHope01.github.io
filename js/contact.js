// Basic Form Validation for Contact Page
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        
        // Here you can implement form submission logic, e.g., sending the data to a server.
    }
})