const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { json } = require('express');
const env = require('../../../config/environment');



module.exports.createSession = async function(req, res){

     try{
        let user = User.findOne({email: email.body.email});
        
        if(!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid Username or Password"
            });
        }

        return res.json(200, {
            message: "Sign in Succesfull , here is your token, please keep it safe!",
            data: {
                token: jwt.sign(user.toJSON(),env.jwt_secret, {expiresIn: '100000'})
            }
        })



     }catch(err){
       console.log('********', err);
       return res,json(500, {
            message: "Internal Server Error"
       });
     }


 
}