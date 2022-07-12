import fs from 'fs';
const path = './src/files/products.json';

class ProductosManager {
	getAllProducts = async () => {
		try {
			if (fs.existsSync(path)) {
				let fileData = await fs.promises.readFile(path, 'utf8');
				let products = JSON.parse(fileData);
				return products;
			} else {
				return [];
			}
		} catch (error) {
			console.log('Cannot read File: ' + error);
		}
	};

	saveProduct = async (product) => {
		try {
			let products = await this.getAllProducts();
			if (products.length === 0) {
				product.id = 1;
				products.push(product);
				await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
			} else {
				product.id = products[products.length - 1].id + 1;
				products.push(product);
				await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
			}
		} catch (error) {
			console.log('Cannot saveProduct to file: ' + error);
		}
	};

	getById = async (itemId) => {
		try {
			let products = await this.getAllProducts();
			return console.log(products.find((product) => (product.id === itemId ? product : null)));
		} catch {
			console.log('Cannot getById: ' + error);
		}
	};

	deleteById = async (itemId) => {
		try {
			let products = await this.getAllProducts();
			let filteredProducts = products.filter((product) => product.id !== itemId);
			await fs.promises.writeFile(path, JSON.stringify(filteredProducts, null, '\t'));
		} catch {
			console.log('Cannot deleteById: ' + error);
		}
	};

	deleteAll = async () => {
		try {
			let products = [];
			await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
		} catch {
			console.log('Cannot deleteAll: ' + error);
		}
	};
}

export default ProductosManager;
