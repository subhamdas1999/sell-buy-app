
//var Userdb = require('../model/model');

const sellBuy = require('../model/model')





exports.create = (req,res)=>{

    // validate request
// to use req.body or req.body.productName ....** remember import body-parser and use it app.use(bodyparser.urlencoded({ extended : true}))***

    if(!req.body)
    {
       // console.log(req.body)
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    
    // new user
    const user = new sellBuy( {
        productName : req.body.productName,
        costPrice : req.body.costPrice,
        soldPrice: req.body.soldPrice
        
    })
    
    // save user in the database
    
    user
            .save(user)
            .then(data => {
                
                res.status(201).send({data, message : "Product Added"})
                
               // res.redirect('/add-user');
            })
            .catch(err =>{
                res.status(400).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            });
         
        }
    
    

















//sellBuys is the variable name of imported model file, check the top of this page


exports.displayAllData = (req, res)=>{
 
     
    if(req.query.product)
    {
    
         var p = req.query.product
        // console.log({p})

       sellBuy.findOne({productName : p })
            .then (data =>{
              //  console.log( {data})
                    if(!data){
                    res.status(404).send({ message : "Not found user with productName "+ p})
                }
                else
                {
                    res.status(200).send(data)
                   
                }
            })
            .catch(err =>{
               // console.log("message =",err.msg)
                res.status(500).send({ message: "Erro retrieving user with productName " + p})
            })
       
    }
       
else if(req.query.sortBy)
{
const typeOfSort = req.query.sortBy
// console.log({typeOfSort})


    if(typeOfSort=="lowerCostPrice" ||  typeOfSort=="higherCostPrice" )
    {
        //find().sort(['updatedAt', 1]);

        sellBuy.find().sort([['costPrice', typeOfSort ==='lowerCostPrice'?1:-1 ]])
        .then(user => {
            res.status(200).send(user)
            
        })
        .catch(err => {
            res.status(404).send({ message : err.message || "Error Occurred while retriving user information" })
        })



    }
 
    else if (typeOfSort=="lowerSoldPrice" ||  typeOfSort=="higherSoldPrice" )
{

    sellBuy.find().sort([['soldPrice', typeOfSort ==='lowerSoldPrice'?1:-1 ]])
    .then(user => {
        res.status(200).send(user)
        
    })
    .catch(err => {
        res.status(404).send({ message : err.message || "Error Occurred while retriving user information" })
    })


}




}



else{

   // .find() is a method comes from mongoose module
  // if we write only bellow code it will return all the data from the database
  sellBuy.find()
            .then(user => {
                res.status(200).send(user)
               
            })
            .catch(err => {
                res.status(404).send({ message : err.message || "Error Occurred while retriving user information" })
                
            })
  
    

}
}











//sellBuys is the variable name of imported model file, check the top of this page


exports.update = (req, res)=>{

    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }



    const id = req.query.id;
    sellBuy.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.status(200).send({data, message : "updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })


}









// Delete a user with specified user id in the request
exports.delete = (req, res)=>{



    const id = req.query.id;

    sellBuy.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                console.log(data)
                res.status(400).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.status(200).send({
                    message : "Deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(400).send({
                message: "Could not delete User with id=" + id
            });
        });




}