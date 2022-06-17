
  //const sellBuy = mongoose.model('sellBuy_2', schema2);

        // const <any_document_name> = new <Enter the variable name which is assigning mongoose.model()  in model.js file> 
        //                                            OR
        //    If you import model  ->  const insertOne = new A()   <- A should be import file variable  <-   const A = require('./model/model')



const sellBuy = require('../model/model')

// exports.insertOne = new sellBuy({

//     productName : "flight" ,
//     costPrice:    123,
//     soldPrice : 4445
    

//  })

//  exports.insertOne.save();



// both exports will take one variable(any2) in app.js
