'use strict'

const express = require('express');
const horizon = require('@horizon/server');
const path = require('path');

const app = express();
const http_server = app.listen(8181);
const options = { auth: { token_secret: 'Grnj6MFd/GLS1GJhooFepNqCL6dgfsF3Uj6kPwiBF8wIVyrSCC5TvGzKqHLVvegLjMFV14U/yg/CPy0Nrei0FA==' } };
const horizon_server = horizon(http_server, options);

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
    res.send(path.join(__dirname + '/index.html'));
})

console.log('Listening on port 8181.');