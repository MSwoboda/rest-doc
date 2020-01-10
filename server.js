const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Passport & strategy
// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuthStrategy

// passport.use(new GoogleStrategy({
//   consumerKey: GOOGLE_CONSUMER_KEY,
//   consumerSecret: GOOGLE_CONSUMER_SECRET,
//   callbackURL: "/auth/google/callback"
// },
// function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
// ));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rest-doc");

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));

