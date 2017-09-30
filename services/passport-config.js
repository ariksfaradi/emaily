const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const _ = require('lodash');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config/keys');

Users = mongoose.model('users');

async function handleLogin(accessToken, refreshToken, profile, done) {
    const id = profile.id;
    let user = await Users.findOne({ googleId: id });
    if (user) {
    } else {
        user = new Users({ googleId: id }).save()
          // .then(user => )
    }
    done(null, user);
}

// passport.serializeUser((user, done) => done(null, user.id));
//
// passport.deserializeUser((id, done) => Users.findById(id)
//   .then(user => done(null, user)));

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => Users.findOne({ googleId: id })
        .then((existingUser) => {
            if (existingUser) {

            } else {
                new Users({ googleId: id }).save()
                  .then(user => done(null, existingUser));
            }

            done(null, existingUser);
        })
));

module.exports = passport;