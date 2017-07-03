const express = require('express');
const port = process.env.PORT || 3000;
app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);
app.use(express.static('img'));

app.get('/', (req, res) => {
  res.render('index', {title: 'my app', img: './logo.png', css: './tianwangba.css'})
});

app.get('/admin', (req, res) => {
  res.render('admin', {title: 'my app'})
});

app.get('/detail', (req, res) => {
  res.render('detail', {title: 'my app'})
});

app.get('/list', (req, res) => {
  res.render('list', {title: 'my app'})
});
