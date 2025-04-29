// JavaScript code for handling image click to open in full size
document.querySelectorAll('.profile-img img').forEach((img) => {
    img.addEventListener('click', () => {
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.width = '100%';
        fullImg.style.height = 'auto';
        fullImg.style.position = 'fixed';
        fullImg.style.top = '50%';
        fullImg.style.left = '50%';
        fullImg.style.transform = 'translate(-50%, -50%)';
        fullImg.style.zIndex = '9999';
        fullImg.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
        document.body.appendChild(fullImg);

        fullImg.addEventListener('click', () => {
            fullImg.remove();
        });
    });
});
