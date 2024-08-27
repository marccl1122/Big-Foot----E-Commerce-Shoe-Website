import ProductItem from '../src/classes/ProductItem.js';

test('creates a product item', () => {
    const product = new ProductItem(1, 'Sneaker', 100, 'A cool sneaker', 'image.jpg');
    expect(product.id).toBe(1);
    expect(product.title).toBe('Sneaker');
    expect(product.price).toBe(100);
    expect(product.description).toBe('A cool sneaker');
    expect(product.image).toBe('image.jpg');
});
