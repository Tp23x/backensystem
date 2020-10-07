const mongoose = require('mongoose')

const Temp = new mongoose.Schema({ // type => String, Number, Boolean, Date
  temp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
})

const TempModel = mongoose.model('Temp', Temp)

module.exports = TempModel
