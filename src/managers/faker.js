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

	// createRandomProductArray(number) {
	// 	let products = [];
	// 	Array.from({ length: number }).forEach(() => {
	// 		products.push(this.createRandomProduct());
	// 	});
	// 	return products;
	// }

	async setFakeProduct() {
		try {
			this.saveProduct(this.createRandomProduct());
		} catch (error) {
			console.log('setFakeProducts: ' + error);
		}
	}
}

export default FakeProductsManager;
