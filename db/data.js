const mongoose = require('mongoose')

const Data = new mongoose.Schema({ // type => String, Number, Boolean, Date
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  id: {
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
  temp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },

})

const DataModel = mongoose.model('Data', Data)

module.exports = DataModel