const ProductsManager = require('./managers/manager.js');
const productsService = new ProductsManager();
const enviroment = async () => {
	console.log('Getting products');
	let products = await productsService.getAllProducts();
	console.log(products);

	console.log('Adding a product');
	let product = {
		name: 'test1',
		url: 'test2',
	};
	await productsService.addProduct(product);
};

enviroment();
