const mongoose = require('mongoose')
require('dotenv').config()

const db = () => {
  try {
    //  Connect with MongoDB version 6.9.2
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error connecting to MongoDB', error)
  }
}

module.exports = db
