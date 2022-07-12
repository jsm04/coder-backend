import ProductsManager from './managers/manager.js';
const productsService = new ProductsManager();

const enviroment = async () => {
	let products = await productsService.getAllProducts();
	let product = {
		title: 'Prueba',
		price: 444,
		thumbnail: 'https://picsum.photos/id/650/200/300',
		id: 1,
	};
	// await productsService.saveProduct(product);
	// await productsService.getById();
	// await productsService.deleteById();
	// await productsService.deleteAll();
};

enviroment();
