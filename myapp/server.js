const express = require ('express');
const connect = require('./db.js');
const route = require('./routs/user.js')
const app = express();
const port = 8080

connect()

app.use('/api',route);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 