const axios = require('axios');




exports.homeRoutes = (req, res) => {
   
// Make a get request to /api/users
axios.get('http://localhost:1000/sellProduct')
.then(function(response){

    // console code for check in terminal
    console.log(response)
    res.render( { users : response.data });
})
.catch(err =>{
    res.send(err);
})



}