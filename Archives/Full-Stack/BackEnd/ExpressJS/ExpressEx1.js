const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/", (req, res) => {
	res.send([1, 2, 3]);
});

const port = process.env.port || 5000;
app.listen(3000, () => console.log(`Listening ${port}`));

// fetch("http://localhost:3000/").then(console.log("FETCHED"));

// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(function() {
//     // Your code for handling the data you get from the API
// })
// .catch(fusnction() {
//     // This is where you run code if the server returns any errors
// });

// fetch('http://localhost:3000/')
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function(data) {
//     // Create and append the li's to the ul
//     })
//   })
