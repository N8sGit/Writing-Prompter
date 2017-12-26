const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(express.static('styles'))

app.get('/', function(req, res) {
    res.sendfile('index.html')
 });

app.use(function(req, res, next){ 
    console.log(req.path) 
    next()
  });

app.get('/build/bundle.js',function(req,res){
    res.sendfile('./build/bundle.js')
})

app.listen(3000, function () {
    console.log('listening on port 3000!')
  })
  