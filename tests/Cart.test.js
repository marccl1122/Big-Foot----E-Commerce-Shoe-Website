import Cart from '../src/classes/Cart.js';
import ProductItem from '../src/classes/ProductItem.js';

test('adds item to cart', () => {
    const cart = new Cart();
    const product = new ProductItem(1, 'Sneaker', 100, 'A cool sneaker', 'image.jpg');
    cart.addItem(product);
    expect(cart.items.length).toBe(1);
    expect(cart.total).toBe(100);
});
