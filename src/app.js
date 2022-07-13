import express from 'express';
import ProductsManager from './managers/manager.js';
const productsService = new ProductsManager();

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
	console.log(`Servidor https listening en el purto ${PORT}`);
});

server.on('error', (error) => console.log(`Error en servicode ${error}`));

app.get('/', (req, res) => {
	res.send(`<h1 style='text-align: center'>This is root</h1>`);
});

app.get('/productos', async (req, res) => {
	let productList = await productsService.getAllProducts();
	res.send({ productos: productList });
});

app.get('/productos-namelist', async (req, res) => {
	let productList = await productsService.getAllProducts();
	let productListNames = productList.map((product) => product.productTitle);
	res.send({ productos: productListNames });
});

app.get('/productos/random', async (req, res) => {
	let productList = await productsService.getAllProducts();
	let randomNumberInRange = Math.floor(Math.random() * (productList.length - 1) + 1);
	let getItemById = await productsService.getById(randomNumberInRange);
	res.send({ item: getItemById.productTitle });
});

app.get('/productos/:itemId', async (req, res) => {
	let productList = await productsService.getAllProducts();
	let request = req.params.itemId;
	if (isNaN(request)) {
		return res.send({ error: 'El id debe ser un numero' });
	}
	let itemId = parseInt(request);
	let getItemById = await productsService.getById(itemId);
	if (productList.length < itemId) {
		return res.send({ error: 'No existe el producto' });
	}

	res.send({ product: getItemById });
});
