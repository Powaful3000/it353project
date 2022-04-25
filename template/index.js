window.addEventListener("load", (event) => {
	process("appetizers", "appsArea");
	process("entrees", "entreesArea");
	process("drinks", "drinksArea");

	function process(toFetch, listID) {
		var list = document.getElementById(listID);
		var url = "http://localhost:3000/" + toFetch;
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
					var li = document.createElement("li");
					var str = item.name + "\t\t" + item.price;
					li.appendChild(document.createTextNode(str));
					list.appendChild(li);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
});
