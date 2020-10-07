const mongoose = require('mongoose')

const Person = new mongoose.Schema({ // type => String, Number, Boolean, Date
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
})

const PersonModel = mongoose.model('Person', Person)

module.exports = PersonModel
