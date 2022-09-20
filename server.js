// import express
const express = require('express')

// create new instance of an express application object
// 'new' keyword not used in js
const app = express()

// event handler for http requests
let hello = (req, res) => {
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}

// create handler for /goodbye url
let goodbye = (req, res) => {
    res.writeHead(200)
    res.write('Goodbye world')
    res.end()
}

// handler for root (home) page
let index = (req, res) => {
    // if url is not the root, show 404
    if (req.url !== '/') {
        res.writeHead(404)
        res.write('Resource Not Found')
        res.end()
    }
    else {
        res.writeHead(200)
        res.write('Welcome to our first Express site')
        res.end()
    }    
}

// map urls to proper methods.  index is last or it overrides everything else
app.use('/hello', hello)
app.use('/goodbye', goodbye)
app.use('/', index)

// start express server on port 3000
app.listen(3000)
console.log('Express running on port 3000')
