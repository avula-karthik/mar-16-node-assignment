const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.get('/', function (req, res) {
    let fullPath = path.join(__dirname, '/homepage.html');
    res.sendFile(fullPath);
});
app.get('/addcar', function (req, res) {
    let fullPath = path.join(__dirname, '/addcar.html');
    res.sendFile(fullPath);
});
app.get('/showcars', function (req, res) {
    let fullPath = path.join(__dirname, '/showcars.html');
    res.sendFile(fullPath);
});
app.get('/login', function (req, res) {
    let fullPath = path.join(__dirname, '/login.html');
    res.sendFile(fullPath);
});
app.post('/login', function (req, res) {
    console.log(req.body);
    if (req.body.username == 'smith' && req.body.password == 'abc') {
        res.send(
            `<style>body{background-color: beige;}</style><h1>Successfully Logged In</h1>`
        );
    } else {
        res.send('Check username and password');
    }
});
app.listen(3001);
console.log('Code running on port : 3001');
