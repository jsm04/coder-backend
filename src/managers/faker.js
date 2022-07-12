import { faker } from '@faker-js/faker';
import ProductosManager from './manager.js';

class FakeProductsManager extends ProductosManager {
	createRandomProduct() {
		faker.locale = 'es';
		return {
			product: faker.commerce.productName(),
			price: faker.commerce.price(),
			productImage: faker.image.cats(640, 480, true),
			userId: faker.datatype.uuid(),
			description: faker.lorem.paragraph(),
		};
	}

	async addFakeProduct() {
		try {
			await this.saveProduct(this.createRandomProduct());
		} catch (error) {
			console.log('setFakeProducts: ' + error);
		}
	}

	async addFakeProductsInNumbers(number) {
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

export default FakeProductsManager;
