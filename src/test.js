import ProductsManager from './managers/manager.js';
import FakeProductsManager from './managers/faker.js';

const productsService = new ProductsManager();
const fakerService = new FakeProductsManager();

const enviroment = async () => {
	let products = await productsService.getAllProducts();
	// await fakerService.setFakeProduct();
	await fakerService.createRandomProductArray(10);
	// await productsService.saveProduct(product);
	// await productsService.getById();
	// await productsService.deleteById();
	// await productsService.deleteAll();
};

enviroment();
