function searchProducts() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const products = document.querySelectorAll('.swiper-slide');
    
    products.forEach(product => {
        const categoryElement = product.querySelector('.btn-1');
        if (categoryElement) {
            const category = categoryElement.textContent.toUpperCase();
            if (input === "ALL" || category.includes(input) || input === "") {
                product.style.visibility = 'visible';
            } else {
                product.style.visibility = 'hidden';
            }
        }
    });
}