import ApiService from '../services/ApiService.js';
import ProductItem from './ProductItem.js';

class ProductList {
    constructor() {
        this.products = [];
    }

    async loadProducts() {
        try {
            const data = await ApiService.fetchProducts();
            this.products = data.map(item => new ProductItem(item.id, item.title, item.price, item.description, item.image));
            this.displayProducts();
        } catch (error) {
            console.error(error);
        }
    }

    displayProducts() {
        const productContainer = document.getElementById('product-container');
        this.products.forEach(product => {
            productContainer.appendChild(product.render());
        });
    }
}

export default ProductList;
