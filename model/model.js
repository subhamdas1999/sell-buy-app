// In model.js we are building schema
// schema is a structure of a document

// once the collection and document is created in mongodb compass....new modification will not alter the database
// if you want to modify then  

const mongoose = require('mongoose');

var schema2 = new mongoose.Schema({

    productName : {
        type : String,
        required: true,
        minlength:4
    },
    costPrice: {
        type:Number,
        required: true,
        min:1
    },


    soldPrice : 
    {
        type: Number,
        min:1
    }
})


/* 

What is Model 
-> a mongoose model is the wrapper on the mongoose schema, It provides an inteface to
the database for creating, updating, deleting record   

*/


// here collection name is MyuserDB2 pass the scheme variable
// schema2 is the document 

const sellBuy = mongoose.model('sellBuy_2', schema2);

module.exports = sellBuy;

