const colorButtons = document.querySelectorAll('.color-button');
const stickerButtons = document.querySelectorAll('.sticker-button');
const carBody = document.querySelector('.car-body');
const stickerImage = document.getElementById('sticker');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        carBody.style.backgroundColor = color;
    });
});

stickerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sticker = button.getAttribute('data-sticker');
        stickerImage.src = sticker;
    });
});
