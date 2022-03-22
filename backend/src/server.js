const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(routes)

app.listen(3333, () => console.log('Server is running'))