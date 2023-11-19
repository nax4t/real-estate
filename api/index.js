import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.js'

const port = process.env.PORT

const app = express()

app.use('/api/user', userRoutes)

app.listen(port, () => console.log(`Api is running on port ${port}`))
