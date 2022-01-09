const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Example todo app on port http://localhost:${port}`)
})