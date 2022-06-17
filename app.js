const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require("body-parser");

const port = process.env.PORT || 1000


// connecting mongoDB local
//.connect() method returns promise 

mongoose.connect('mongodb://localhost:27017/sellBuyDB1',{

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>
    {
        console.log("mongoDB Local Connected")
    }

    )
    .catch((err)=> 
    {
        console.log(`no connection`)
    });



// Importing Document.js , where model is already imported 

const any2 = require('./Document/document')


app.use(bodyparser.urlencoded({ extended : true}))

  
app.use('/', require('./Route/routes'))







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
