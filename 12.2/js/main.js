document.getElementById('button-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.getAttribute('data-btn');
        alert(`You clicked on ${buttonText}`);
    }
});