const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

/*
app.get('/', (req, res) => {
  console.log(req);
  res.render('/index.jade', {title: 'my app'})
});
*/
