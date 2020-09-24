const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);
const express = require('express');
const server = express();
const port = 8080;

server.get('/api/users', (req, res) => {
    //res.send('Server responding');
    res.json(data);
});

server.listen(port);
console.log(`Server is running on port: ${port}`);
