const express = require('express');
const app = express();


app.use(express.static('public'))

app.listen(8800, function() {
	console.log('server is listening')
})
