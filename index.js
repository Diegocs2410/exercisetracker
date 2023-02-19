const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const { getUser } = require('./controllers')
db()

require('dotenv').config()
app.use(cors())
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', urlencodedParser, getUser)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
