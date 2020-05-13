const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const {routes} = require('./routes/routes')


app.get('/', routes)

app.get('*', (req, res) => {
    res.status(404).json({"message" : "Not Found"})
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})