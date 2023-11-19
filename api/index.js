import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Api is running on port ${port}`))
