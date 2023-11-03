import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(8080)