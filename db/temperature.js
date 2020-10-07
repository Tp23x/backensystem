const mongoose = require('mongoose')

const Temperature = new mongoose.Schema({ // type => String, Number, Boolean, Date
  tempe: {
    type: String,
    required: true,
  },
  humi: {
    type: String,
    required: true,
  },
  carid: {
    type: String,
    required: true,
  },
})

const TemperatureModel = mongoose.model('Temperature', Temperature)

module.exports = TemperatureModel