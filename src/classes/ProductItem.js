class ProductItem {
    constructor(id, title, price, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    render() {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${this.image}" alt="${this.title}">
            <div>
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <p>Price: $${this.price}</p>
                <button data-id="${this.id}" class="add-to-cart">Add to Cart</button>
            </div>
        `;
        return productElement;
    }
}

export default ProductItem;
