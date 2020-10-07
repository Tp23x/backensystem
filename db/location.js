const mongoose = require('mongoose')

const Location = new mongoose.Schema({ // type => String, Number, Boolean, Date
  carId: {
    type: String,
    unique: true,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
})

const LocationModel = mongoose.model('Location', Location)

module.exports = LocationModel
