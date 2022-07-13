import ProductsManager from './managers/manager.js';
import FakerProductsManager from './managers/faker.js';

const enviroment = async () => {
	const productsService = new ProductsManager();
	const fakerProductsService = new FakerProductsManager();
	// fakerProductsService.addFakeProductsAmmount(15);
};

enviroment();
