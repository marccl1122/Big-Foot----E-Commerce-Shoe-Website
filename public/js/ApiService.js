class ApiService {
    static async fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const products = await response.json();
            console.log('Fetched Products:', products);
            return products;
        } catch (error) {
            console.error('Failed to fetch products:', error);
            throw error;
        }
    }
}

export default ApiService;
