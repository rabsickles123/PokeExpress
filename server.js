const express = require('express')

const PORT = 5000

const app = express()

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!<h1>')
})