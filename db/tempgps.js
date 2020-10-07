const mongoose = require('mongoose')

const sumdata = new mongoose.Schema({ // type => String, Number, Boolean, Date
  temp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },
  carId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
})

const sumdataModel = mongoose.model('sumdata', sumdata)

module.exports = sumdataModel