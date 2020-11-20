const express = require('express')

const db = require('')

const server = express()
server.use(express.json())

module.exports = {
    server
}