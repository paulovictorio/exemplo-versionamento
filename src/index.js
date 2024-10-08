const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello worlds!');
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de test'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Endpoint de teste 233'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;