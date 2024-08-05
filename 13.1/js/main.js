document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById('messageError').innerText = 'Message must be at least 5 characters long.';
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must start with +380 and contain 9 digits after it.';
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Email must be valid and contain "@" and "."';
        isValid = false;
    }

    if (isValid) {
        console.log({
            name: name,
            message: message,
            phone: phone,
            email: email
        });

        const formData = new FormData();
        formData.append('name', name);
        formData.append('message', message);
        formData.append('phone', phone);
        formData.append('email', email);

        fetch('send_mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Form submitted successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('phone').addEventListener('focus', function() {
    if (!this.value.startsWith('+380')) {
        this.value = '+380';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/(?!^\+380)\D/g, '');

    if (!this.value.startsWith('+380')) {
        this.value = '+380' + this.value.replace(/^\D+/g, '');
    }
});
