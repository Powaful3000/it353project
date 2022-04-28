// Get - shows all items in database
const getButton = document.getElementById("get-data-button");
getButton.addEventListener("click", () => {
	const result = fetch("http://localhost:3000/items", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});

	result
		.then((res) => {
			console.log("Request complete! response:", res);
			return res.json();
		})
		.then((data) => {
			console.log(data);
			const infoUI = document.getElementById("get-content-area");
			infoUI.innerHTML = "";

			// for (let i = 0; i < data.length; i++) {
			// 	infoUI.innerHTML +=
			// 		"Menu Item:\t" + data[i].name + ",\tID:\t" + data[i].id + ",\t Price: $" + data[i].price + "<br>";
			// }
			data.forEach((item) => {
				infoUI.innerHTML +=
					"Menu Item:\t" + item.name + ",\tID:\t" + item.id + ",\t Price: $" + item.price + "<br>";
			});
		})
		.catch((error) => {
			console.log(error);
		});
});

// Post - inputs new entries into the database
const postButton = document.getElementById("post-button");

postButton.addEventListener("click", () => {
	const postID = document.getElementById("post-id").value;
	const postName = document.getElementById("post-name").value;
	const postprice = document.getElementById("post-price").value;
	const postResponse = document.getElementById("post-content-area");

	const postData = {
		id: postID,
		name: postName,
		price: postprice,
	};

	fetch("http://localhost:3000/items", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(postData),
	})
		.then((res) => {
			console.log("Request complete! response:", res);
			postResponse.innerHTML = res.status;
		})
		.catch((error) => {
			postResponse.innerHTML = error;
		});
});

// PUT - updates the database
const putBotton = document.getElementById("put-button");

putBotton.addEventListener("click", () => {
	const putID = document.getElementById("put-id").value;
	const putName = document.getElementById("put-name").value;
	const putprice = document.getElementById("put-price").value;
	const putResponse = document.getElementById("put-content-area");

	const data = {
		id: putID,
		name: putName,
		price: putprice,
	};
	console.log(data);

	fetch(`http://localhost:3000/items/${data.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((res) => {
			console.log("Request complete! response:", res);
			putResponse.innerHTML = res.status;
		})
		.catch((error) => {
			putResponse.innerHTML = error;
		});
});

// DELETE - deletes the the ID selection in database
const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", () => {
	const deleteID = document.getElementById("delete-id").value;
	const deleteResponse = document.getElementById("delete-content-area");

	console.log(deleteID);
	fetch(`http://localhost:3000/items/${deleteID}`, {
		method: "DELETE",
	})
		.then((res) => {
			console.log("Request complete! response:", res);
			deleteResponse.innerHTML = res.status;
		})
		.catch((error) => {
			deleteResponse.innerHTML = error;
		});
});
