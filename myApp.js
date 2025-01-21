let express = require('express');
let app = express();


function functionGet(req, res)
{
    res.send("Hello Express");
}


console.log("Hello World");


app.get('/', functionGet)



























 module.exports = app;
