import CartItem from './CartItem.js';

class CartItemList {
    constructor() {
        this.items = [];
    }

    addCartItem(cartItem) {
        this.items.push(cartItem);
    }

    removeCartItem(cartItemId) {
        this.items = this.items.filter(item => item.id !== cartItemId);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

export default CartItemList;
