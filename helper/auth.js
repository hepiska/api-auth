var jwt = require('jsonwebtoken');
module.exports = {
  auth:function(req,res,next){
    let token = req.headers.token;
    //console.log(token);
    if(token){
      let decode=jwt.verify(token, 'shhhhh', function(err, decode){
        if(err){
          res.send('token not valid');
        }else{
            next()
        }
      });

    }else{
      res.send('there is no token')
    }
  }

}
