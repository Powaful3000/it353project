window.addEventListener("load", (event) => {
	const list = document.getElementById("menuArea");
	const url = "http://localhost:3000/items";
	fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then((res) => {
			console.log("Request success: ", res);
			return res.json();
		})
		.then((data) => {
			console.log(data);

			data.forEach((item) => {
				// console.log(item);
				const li = document.createElement("li");
				const str = item.name + "\t\t" + item.price;
				li.appendChild(document.createTextNode(str));
				list.appendChild(li);
			});
		})
		.catch((error) => {
			console.log(error);
		});
});
