const cookieSession = require('cookie-session');
const passport = require('passport');

const { COOKIE_KEY } = require('../config/keys');

const MAX_AGE = 30 * 24 * 60 *1000; // 30 days

const setCookies = (app) => {
    app.use(
      cookieSession({
        maxAge: MAX_AGE,
        keys: [COOKIE_KEY]
      })
    );

    app.use(passport.initialize());

    app.use(passport.session());
};

module.exports = setCookies;