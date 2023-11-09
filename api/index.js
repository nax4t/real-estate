import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json('You are at the home page/ Api is working')
})

app.listen(port, () => console.log(`Api is running on port ${3000}`))
