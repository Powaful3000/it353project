const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "postgres",
	port: 5432,
});

const getUsers = (request, response) => {
	pool.query("SELECT * FROM menu ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getUser = (request, response) => {
	const id = parseInt(request.params.id);
	pool.query("SELECT * FROM menu WHERE id= $1 ", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const createUser = (request, response) => {
	const { id, price, name } = request.body;
	console.log(id, price, name);

	pool.query("INSERT INTO menu (id, price, name) VALUES ($1, $2, $3)", [id, price, name], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(201).send(`Item added`);
	});
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const { name, price } = request.body;

	pool.query("UPDATE menu SET name = $1, price = $2 WHERE id = $3", [name, price, id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User modified with ID: ${id}`);
	});
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);
	console.log(id);

	pool.query("DELETE FROM menu WHERE id= $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User Deleted`);
	});
};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,

};
