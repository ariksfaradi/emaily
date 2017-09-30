const express = require('express');

const authRoutes = require('./routes/authRoutes');
const setCookies = require('./services/cookieSession');
require('./models/users');
require('./services/mongoose');

const app = express();

require('./services/passport-config');

authRoutes(app);
setCookies(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// Creating app... done, ⬢ enigmatic-hollows-66515
// https://enigmatic-hollows-66515.herokuapp.com///
// | https://git.heroku.com/enigmatic-hollows-66515.git
