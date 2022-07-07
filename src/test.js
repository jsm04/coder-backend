const ProductsManager = require('./managers/manager.js');
const productsService = new ProductsManager();
const enviroment = async () => {
	let products = await productsService.getAllProducts();
	let product = {
		title: 'Prueba',
		price: 444,
		thumbnail: 'https://picsum.photos/id/650/200/300',
		id: 1,
	};
	// await productsService.showAllProducts();
	// await productsService.saveProduct(product);
	// await productsService.getById(5);
	// await productsService.deleteById(7);
	// await productsService.deleteAll();
};

enviroment();
