const express = require('express')
const routes = require('./routes')

const app = express()


app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(routes)

app.listen(3333, () => console.log('Server is running'))