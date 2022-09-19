const app = require('express')();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log('Api running at ::3000');
});
