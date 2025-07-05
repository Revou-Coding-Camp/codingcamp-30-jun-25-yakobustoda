document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to our website.`;
});