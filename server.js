const express = require('express')

const PORT = 5000

const app = express()

const jsxEngine = require('jsx-view-engine')

const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!<h1>')
})

//index route
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

app.get('/pokemon/:index', (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.index]});
})

