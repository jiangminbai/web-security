const express = require('express')

const app = express()

app.use(express.static('./server-hacker/public'))

app.listen(3001, () => {
  console.log('listening to 3001')
})