import express from 'express'

const app = express()

app.locals.votes = [{
  category: 'red',
  votes: 10
}, {
  category: 'green',
  votes: 12
}, {
  category: 'blue',
  votes: 4
}]

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('pingpong')
})

app.get('/votes', (req, res) => {
  res.status(200).json(app.locals.votes)
})

app.post('/votes', (req, res) => {
  app.locals.votes.push(req.body)
  res.status(201).send('added')
})

app.listen(8080)