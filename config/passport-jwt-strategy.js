const passport = require('passport');
const JWTstartegy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const { Passport } = require('passport');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey: 'codeial'
}

passport.use(new JWTstartegy(opts,function(jwtPayLoad, done){
     
    User.findById(jwtPayLoad._id, function(err, user){
        if(err){console.log('Error in finding user from JWT'); return;}

        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
}));

module.exports = passport;