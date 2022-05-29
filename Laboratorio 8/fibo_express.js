const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.send("Test")
})

app.post('/other', function (req, res){
    res.send("Test")
})

app.listen(3000)