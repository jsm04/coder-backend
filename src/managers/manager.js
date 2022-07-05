//  TODO
// implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo
// con el que va a trabajar e implmente los siguientes metodos:

// save(Object): Number: recibe un objeto, lo guarda en el archivo, devuelve el id asignado. (El id debe ser siempre uno mas que ultimo objeto agregado(o id 1 si es el primer objeto que se agrega) y no puede estar repetido.

// hay que tomar en consideracion el contenido previo del archivo.
// implementar el manejo de arhivos utilizando promesas con async/await y manejo de errores.
// Probar el modulo creando un contenedor de productos, que se guarde en el archivo: 'productos.txt'
// incluir un llamado de prueba a cada metodo.
// El formato de cada producto debe ser: title,price,thumbnail(url).

// get(id): Object: recibe un id, devuelve el objeto con ese id, o null si no esta.
// getAll(): Array: devuelve un array con todos los objetos presentes en el archivo.
// delete(id): void: recibe un id, elimina el objeto con ese id, devuelve el id eliminado.
// deleteAll(): void: elimina todos los objetos del archivo.

const fs = require('fs');
const pathModule = require('path');
const path = './files/products.json';
console.log(pathModule.resolve(path));

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

	addProduct = async (product) => {
		try {
			let products = await this.getAllProducts();
			if (products.length === 0) {
				product.id = 1;
				products.push(product);
				await fs.promises.writeFile(
					path,
					JSON.stringify(products, null, '\t')
				);
			} else {
				product.id = products[products.length - 1].id + 1;
				products.push(product);
				await fs.promises.writeFile(
					path,
					JSON.stringify(products, null, '\t')
				);
			}
		} catch (error) {
			console.log('Cannot write file: ' + error);
		}
	};
}

module.exports = ProductosManager;
