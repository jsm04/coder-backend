class User {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = [];
		this.mascotas = [];
	}
	getFullName = () => {
		return `${this.nombre} ${this.apellido}`;
	};

	addMascota = (mascota) => {
		this.mascotas.push(mascota);
	};

	countMascotas = () => {
		return Number(this.mascotas.length);
	};

	addBook = (nombre, autor) => {
		this.libros.push({
			nombre,
			autor,
		});
	};

	getBooksNames() {
		return this.libros.map((libro) => libro.nombre);
	}

	// test
	displayAll() {
		return `${this.getFullName()} tiene ${
			this.countMascotas() > 1
				? this.countMascotas() + ' mascotas'
				: this.countMascotas() + ' mascota'
		} y le gustan los siguientes libros: ${this.getBooksNames()}`;
	}
}

const cl = (arg) => {
	console.log(arg);
};

const User1 = new User('Pedro', 'Lopez');
User1.addMascota('Perro');
User1.addMascota('Gato');
User1.addBook('Pulp fiction', 'Quentin Tarantino');
User1.addBook('Bastardos sin gloria', 'Quentin Tarantino');
cl(User1.countMascotas());
cl(User1.getBooksNames());
cl(User1.displayAll());
