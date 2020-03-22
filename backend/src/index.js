const express = require('express');
const app = express();

require('./database');

app.use('/api', require('./routes/index'));

// starting the server
app.listen(3000);
console.log('server on port', 3000);