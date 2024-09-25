const images = document.querySelectorAll('.image-container img');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('#popup-image');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImage.src = img.src;
        currentIndex = index;
    });
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    popupImage.src = images[currentIndex].src;
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    popupImage.src = images[currentIndex].src;
});