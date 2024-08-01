let userLink = '';

document.getElementById('enter-link').addEventListener('click', function() {
    userLink = prompt('Please enter the link:');
});

document.getElementById('redirect').addEventListener('click', function() {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Please enter a link first.');
    }
});