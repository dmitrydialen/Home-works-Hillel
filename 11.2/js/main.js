document.getElementById('color-toggle-button').addEventListener('click', function() {
    var elements = document.querySelectorAll('.text');
    elements.forEach(function(element) {
        element.classList.toggle('toggle');
    });
});