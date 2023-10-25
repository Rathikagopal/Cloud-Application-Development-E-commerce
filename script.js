// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 }
];

// Initialize cart and product list
const cart = [];
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Render products
function renderProducts() {
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - $${product.price}
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(li);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Render cart items and calculate total
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}

// Initialize the application
renderProducts();
