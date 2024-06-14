document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.so-luong-gio-hang');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});
sss