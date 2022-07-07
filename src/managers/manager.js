//  TODO

// get(id): Object: / getById() => recibe un id, devuelve el objeto con ese id, o null si no esta.
// getAll(): / getAllProducts() => Array: devuelve un array con todos los objetos presentes en el archivo.
// delete(id): void / deleteById() => recibe un id, elimina el objeto con ese id, devuelve el id eliminado.
// deleteAll(): void: elimina todos los objetos del archivo.

// OTROS
// saveProduct() => guarda el producto
// showAllProducts() => console.log de todos los productos

const fs = require('fs');
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

	showAllProducts = async () => {
		try {
			let fileData = await fs.promises.readFile(path, 'utf8');
			let products = JSON.parse(fileData);
			console.log(products);
		} catch {
			console.log('Cannot showAll: ' + error);
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
			for (let i = 0; i < products.length; i++) {
				if (products[i].id === itemId) {
					return console.log(products[i]);
				}
			}
			return console.log(null);
		} catch {
			console.log('Cannot getById: ' + error);
		}
	};

	deleteById = async (itemId) => {
		try {
			let products = await this.getAllProducts();
			for (let i = 0; i < products.length; i++) {
				if (products[i].id === itemId) {
					products.splice(i, 1);
					console.log(`item with id ${itemId} was deleted`);
					break;
				}
			}
			await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
		} catch {
			console.log('Cannot deleteById: ' + error);
		}
	};

	deleteAll = async () => {
		try {
			let products = await this.getAllProducts();
			products.splice(0, products.length);
			await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
		} catch {
			console.log('Cannot deleteAll: ' + error);
		}
	};
}

module.exports = ProductosManager;
