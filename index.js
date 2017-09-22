const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ hi: 'you there' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// Creating app... done, ⬢ enigmatic-hollows-66515
// https://enigmatic-hollows-66515.herokuapp.com///
// | https://git.heroku.com/enigmatic-hollows-66515.git
