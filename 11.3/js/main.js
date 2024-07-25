document.getElementById('show-button').addEventListener('click', function() {
    var images = [
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
        '5.webp',
        '6.webp',
        '7.webp',
        '8.webp',
        '9.webp'
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.getElementById('random-image').src = randomImage;
});