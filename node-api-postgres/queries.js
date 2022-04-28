const Pool = require("pg").Pool;
const db = new Pool({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "postgres",
	port: 5432,
});

const getItems = (_request, response) => {
	db.query("SELECT * FROM menu ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getItem = (request, response) => {
	const id = parseInt(request.params.id);
	db.query("SELECT * FROM menu WHERE id= $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const createItem = (request, response) => {
	const { id, price, name } = request.body;
	console.log(id, price, name);

	db.query("INSERT INTO menu (id, price, name) VALUES ($1, $2, $3)", [id, price, name], (error) => {
		if (error) {
			throw error;
		}
		response.status(201).send(`Item added`);
	});
};

const updateItem = (request, response) => {
	const id = parseInt(request.params.id);
	const { name, price } = request.body;

	db.query("UPDATE menu SET name = $1, price = $2 WHERE id = $3", [name, price, id], (error) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User modified with ID: ${id}`);
	});
};

const deleteItem = (request, response) => {
	const id = parseInt(request.params.id);
	console.log(id);

	db.query("DELETE FROM menu WHERE id= $1", [id], (error) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User Deleted`);
	});
};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
