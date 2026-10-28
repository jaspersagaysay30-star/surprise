// Interactive Button
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

surpriseBtn.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    surpriseBtn.style.display = 'none';
});

// Lightbox Modal Preview
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});