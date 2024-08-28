const express = require('express')
const { v1 } = require('uuid')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('./server-normal/public'))
app.use(bodyParser.json())

app.get('/login', (req, res) => {
  res.cookie('token', 'abc', {
    domain: 'localhost:3000'
  })
  res.send('success')
})

app.get('/logout', (req, res) => {
  res.cookie('token', '')
  res.send('success')
})

app.get('/lax', (req, res) => {
  res.cookie('token', 'abc', {
    sameSite: 'lax'
  })
  res.send('success')
})

app.get('/strict', (req, res) => {
  res.cookie('token', 'abc', {
    sameSite: 'strict'
  })
  res.send('success')
})

app.get('/token', (req, res) => {
  res.cookie('token', 'abc')
  res.send({
    crsf_token: v1()
  })
})

app.get('/transfer', (req, res) => {
  console.log(req.query)
  console.log(req.get('cookie'))
  console.log(req.get('referer')) // 验证referer
  res.send('transfer ' + req.query?.cost)
})

app.post('/transfer_token', (req, res) => {
  const crsf_token = req.body?.crsf_token // 拿去验证crsf token是否一致
  console.log(crsf_token)
  res.send('transfer success')
})

app.listen(3000, () => {
  console.log('listening to 3000')
})