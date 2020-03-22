const express = require('express');
const app = express();

require('./database');

// starting the server
app.listen(3000);
console.log('server on port', 3000);