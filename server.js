const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.post("/register", (req, res) => {
	const { username, password } = req.body;
	res.send({
		username,
		password,
	});
});

app.listen(port, () => {
	console.log(`Example app listening`);
});
