const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "password",
	port: 5432,
});

const getUsers = (request, response) => {
	pool.query("SELECT * FROM user_info ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getUser = (request, response) => {
	const id = parseInt(request.params.id);
	pool.query("SELECT * FROM user_info WHERE id= $1 ", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const createUser = (request, response) => {
	const { id, age, name } = request.body;
	console.log(id, age, name);

	pool.query("INSERT INTO user_info (id, age, name) VALUES ($1, $2, $3)", [id, age, name], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(201).send(`User added`);
	});
};

const updateUser = (request, response) => {
	console.log("hits");
	const id = parseInt(request.params.id);
	const { name, age } = request.body;

	pool.query("UPDATE user_info SET name = $1, age = $2 WHERE id = $3", [name, age, id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User modified with ID: ${id}`);
	});
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);
	console.log(id);

	pool.query("DELETE FROM user_info WHERE id= $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User Deleted`);
	});
};

const getAppetizers = (request, response) => {
	pool.query("SELECT * FROM appetizers ORDER BY price DESC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getEntrees = (request, response) => {
	pool.query("SELECT * FROM entrees ORDER BY price DESC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getDrinks = (request, response) => {
	pool.query("SELECT * FROM drinks ORDER BY price DESC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	getAppetizers,
	getEntrees,
	getDrinks,
};
