const express = require('express');
const route = express.Router()

const controller = require('../controller/controller')


route.get('/sellProduct', controller.displayAllData);
route.post('/sellProduct', controller.create);
route.patch('/sellProduct', controller.update);
route.delete('/sellProduct', controller.delete);

//const services = require('../service/render');
//route.get('/sellProduct/productName', service.homeRoutes);




// this route is for home page 
// @method GET /
//route.get('/',services.homeRoutes);



module.exports=route