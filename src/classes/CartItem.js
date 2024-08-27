class CartItem {
    constructor(product) {
        this.product = product;
        this.quantity = 1;
    }

    increaseQuantity() {
        this.quantity += 1;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity -= 1;
        }s
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

export default CartItem;
