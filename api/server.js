const express = require('express');

const Users = require('../users/usersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ users: ['bobby', 'danielle', 'milo'] })
})

server.get('/users', (req, res) => {
    Users.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = server;