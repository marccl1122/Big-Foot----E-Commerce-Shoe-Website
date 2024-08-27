import ApiService from './ApiService.js';
import Cart from './Cart.js';

class Shop {
    constructor() {
        this.products = [];
        this.cart = new Cart();
    }

    async render() {
        try {
            await this.fetchProducts();
            this.displayProducts();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error in render:', error);
        }
    }

    async fetchProducts() {
        this.products = await ApiService.fetchProducts();
    }

    displayProducts() {
        const productsList = document.getElementById('products-list');
        if (!productsList) {
            console.error("Element with id 'products-list' not found.");
            return;
        }

        productsList.innerHTML = '';  // Clear any existing content

        this.products.forEach(product => {
            const productElement = document.createElement('li');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <div class="product__img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product__contents">
                    <div class="product__details">
                        <h4>${product.title}</h4>
                        <p>${product.description}</p>
                        <p class="product__price">$${product.price}</p>
                    </div>
                    <button class="button add-to-cart-btn" data-id="${product.id}">Quick Add</button>
                </div>
            `;
            productsList.appendChild(productElement);
        });
    }

    setupEventListeners() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                this.addToCart(productId);
            });
        });
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        this.cart.addItem(product);
        this.cart.updateCartUI();
    }
}

export default Shop;
