const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const app = express()
const port = 8000

// db CONNECT

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database is connected!!'))
.catch((err) => console.log('Database not connected',err))

// middleware

app.use(express.json());

app.use("/", require('./routes/route'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})