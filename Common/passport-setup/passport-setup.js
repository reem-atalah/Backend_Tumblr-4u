/*==========================================================================================================*/
/*======================== // <=====> This File Contains Passport Setup  <=====> // ========================*/
/*==========================================================================================================*/

/*--------------------------- // <=====> Variables Declaration  <=====> // ---------------------------*/
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

//const clientId = '633147263244-qjs8lmqb79ohr4ahtulevhh8qpbn0bu3.apps.googleusercontent.com';
//const clientSecret = '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';
//const callbackApi= 'http://localhost:5000/google/callback'

const clientId = '633147263244-de25i1dmnlouuje0l0jcnesjla574bec.apps.googleusercontent.com';
const clientSecret = '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';
const callbackApi= 'http://tumblr4u.eastus.cloudapp.azure.com/google/callback'
/*----------- End ------------*/

/*--------------------------- // <=====> Passport FUnctions  <=====> // ---------------------------*/
passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});


//The Google strategy allows users to sign in to a web application using their Google account.
passport.use(new GoogleStrategy({
    clientID:clientId,
    clientSecret:clientSecret,
    callbackURL:callbackApi,
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // console.log(profile)
    return done(null, profile);
  }
));
/*----------- End ------------*/