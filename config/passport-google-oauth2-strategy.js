const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new startegy for google login
passport.use(new googleStrategy({
        clientID: "472624458359-jdl48kjalrtb612mlld3b3ab6t2epjnr.apps.googleusercontent.com",
        clientSecret: "v__GjBgB9zuC3TyY1x-l_1lu",
        callbackURL: "http://localhost:8000/users/auth/google/callback"
      },

      function(accessToken, refreshToken, profile, done){
          User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if(err){console.log('error in google strategy-passport', err); return;}


            if(user){
                // if found, set this user as req.user
                return done(null,user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if(err){console.log('error in creating user google strategy-passport', err); return;}

                    return done (null, user);
                });
            }

          });
      }

))


module.exports = passport;