import express from 'express'
import Sequelize from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'votes.db'
})

const Vote = sequelize.define('vote', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  votes: Sequelize.INTEGER
})

await sequelize.sync({ alter: true })

const sampleVotes = [{
  category: 'red',
  votes: 10
}, {
  category: 'green',
  votes: 12
}, {
  category: 'blue',
  votes: 4
}]

try {
  await Vote.bulkCreate(sampleVotes)
} catch (error) {
  console.log('colors already loaded')
}

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('pingpong')
})

app.get('/votes', async (req, res) => {
  try {
    const votes = await Vote.findAll()
    res.status(200).json(votes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'an error has occured' })
  }
})

app.post('/votes', async (req, res) => {
  try {
    await Vote.create(req.body)
    res.status(201).json({ message: 'added vote' })  
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'an error has occured' })    
  }
})

app.listen(8080)