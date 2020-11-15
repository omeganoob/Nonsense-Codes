function changeBg() {
    const images = [
        'url("1.jpg")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("4.jpg")',
    ];

    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(changeBg, 3000);