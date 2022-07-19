const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.listen(
	PORT,
	() => console.log(`its working on http://localhost:${PORT}`)
)

// //GET http://localhost:8080/tshirt
// app.get('/tshirt')

//GET http://localhost:8080/tshirt - and fire a callback to handle the request
app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: 'BTC',
		size: 'Large'
	})
});

//post request to create new data on the server
app.post('/tshirt/:id', (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
		res.status(418).send({ message: 'we need a logo!'})
	}

	res.send({
		tshirt: ` tshirt with your ${logo} and ID of ${id}`,
	})

});


// // test the apis above running curl commands
//// get request
// curl -include http://localhost:8080/tshirt
//// post request with json
// curl -d '{"logo": "dude"}' -H "Content-Type: application/json" -X POST http://localhost:8080/tshirt/23