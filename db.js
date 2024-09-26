document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        firstname: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        address: `${document.getElementById('address-line1').value} ${document.getElementById('address-line2').value} ${document.getElementById('address-line3').value}`,
        password: document.getElementById('password').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipcode: document.getElementById('zipcode').value

    };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});