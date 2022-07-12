import fs from 'fs';
import { faker } from '@faker-js/faker';
const path = './src/files/products.json';

class FakeProductsManager {
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

	createRandomProductArray(number) {
		let products = [];
		Array.from({ length: number }).forEach(() => {
			products.push(this.createRandomProduct());
		});
		return products;
	}

	async setFakeProducts() {
		try {
			if (fs.existsSync(path)) {
				let fileData = await fs.promises.readFile(path, 'utf8');
				let products = JSON.parse(fileData);
				products.push(this.createRandomProductArray(20));
				await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
			} else {
				return [];
			}
		} catch (error) {
			console.log('Cannot read File: ' + error);
		}
	}
}

export default FakeProductsManager;
