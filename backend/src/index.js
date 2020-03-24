const express = require('express');
const app = express();
const cors = require('cors');

require('./database');


app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'));

// starting the server
app.listen(3000);
console.log('server on port', 3000);