const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Expert = require("../models/Signed_Up_Experts");
const passport = require("passport");
console.log("" + process.env.CLIENT_ID);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `http://localhost:8080/auth/web/google/callback`,
      scope: ["email", "profile"],
    },
    function (accessToken, refreshToken, profile, callback) {
      console.log("teee");
      console.log(profile);
      Expert.findOne({ email: profile.emails[0].value }).then((x) => {
        if (x) {
          // if (x.toJSON().web_usage_access) callback(null, profile);
          // else {
      callback(null, profile);
          // }
        } else {
          Expert.create({
            email: profile.emails[0].value,
            name: profile.displayName,
          }).then((x) => {
      callback(null, profile);
    });
        }
      });

      // callback(null, profile);

      /////////////////////////////////
      // Expert.findOne(
      //   { email: profile.emails[0].value }).then(existingUser=>{
      //     if(!existingUser){
      //       Expert.create({email:profile.emails[0].value}).then(()=>{
      //         res.send({
      //           code: 1,
      //           msg: "",
      //         });

      //       })
      //     }
      //     else{}
      //   })
      //   function (err, user) {
      //     // return done(err, user);
      //   }
      // );
      // const user = {
      //   username: profile.displayName,
      //   avatar: profile.photos[0],
      // };
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  console.log("deserialize user is called");
  done(null, user);
});
