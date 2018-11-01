const express = require('express');
const userControlRouter = express.Router();

userControlRouter.post('/login', function (req, res) {
	res.send('Router Get ');
});

userControlRouter.put('/reset-password', function (req, res) {
	res.send('Router Put ');
});

userControlRouter.get('/:id', function (req, res) {
	res.send('Router Get ');
});

userControlRouter.get('/', function (req, res) {
	res.send('Router Get ');
});

userControlRouter.post('/signup', function (req, res) {
	res.send('Router Post ');
});


userControlRouter.delete('/', function (req, res) {
	res.send('Router Delete');
});


module.exports = userControlRouter;