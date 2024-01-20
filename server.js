const express = require('express')

const PORT = 5000

const app = express()

const pokemon = require('./models/pokemon')

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!<h1>')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})