import ProductsManager from './managers/manager.js';
import FakeProductsManager from './managers/faker.js';

const productsService = new ProductsManager();
const fakerService = new FakeProductsManager();

const enviroment = async () => {
	let products = await productsService.getAllProducts();
	// await fakerService.addFakeProductsInNumbers(20);
};

enviroment();
