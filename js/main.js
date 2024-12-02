let currentIndex = 0;
let intervalId;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
function autoSlide() {
    showSlide(currentIndex + 1);
}



dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(currentIndex);
window.addEventListener('mouseover', (e) => {

    if (e.target['alt'] && e.target['alt'].startsWith('Image')) {
        console.log('clear Interval');

        clearInterval(intervalId);
    } else {
        console.log('set Interval');

        intervalId = setInterval(autoSlide, 3500)

    }
});
intervalId = setInterval(autoSlide, 3500)
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});