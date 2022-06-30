class User {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = [];
		this.mascotas = [];
	}
	getFullName = () => {
		console.log(`${this.nombre} ${this.apellido}`);
		return `${this.nombre} ${this.apellido}`;
	};

	addMascota = (...mascota) => {
		this.mascotas.push(...mascota);
	};

	countMascotas = () => {
		console.log(Number(this.mascotas.length));
		return Number(this.mascotas.length);
	};

	addBook = (nombre, autor) => {
		this.libros.push({
			nombre,
			autor,
		});
	};

	getBooksNames() {
		console.log(this.libros.map((libro) => libro.nombre));
		return this.libros.map((libro) => libro.nombre);
	}

	// test
	displayAll() {
		console.log(
			`${this.getFullName()} tiene ${
				this.countMascotas() > 1
					? this.countMascotas() + ' mascotas'
					: this.countMascotas() + ' mascota'
			} y le gustan los siguientes libros: ${
				this.getBooksNames() + '.'
			}`
		);
	}
}


const User1 = new User('Pedro', 'Lopez');
User1.getFullName();
User1.addMascota('Perro', 'Gato');
User1.addMascota('Loro');
User1.addBook('El senor de las moscas', 'William Goldin');
User1.addBook('Don quijote', 'Miguel de Cervantes');
User1.countMascotas();
User1.getBooksNames();
User1.displayAll();
