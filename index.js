function imgChange(source) {
    document.querySelector('.starbucks').src = source;
}

function colorChange(color) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}