import { faker } from '@faker-js/faker';
import ProductosManager from './manager.js';

class FakerProductsManager extends ProductosManager {
	createRandomProduct() {
		faker.locale = 'es';
		return {
			productTitle: faker.commerce.productName(),
			productImage: faker.image.cats(640, 480, true),
			price: faker.commerce.price(),
		};
	}

	async addFakeProduct() {
		try {
			await this.saveProduct(this.createRandomProduct());
		} catch (error) {
			console.log('setFakeProducts: ' + error);
		}
	}

	async addFakeProductsAmmount(number) {
		try {
			let counter = 0;
			while (counter < number) {
				await this.addFakeProduct();
				counter++;
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default FakerProductsManager;
