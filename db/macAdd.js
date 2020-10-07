const mongoose = require('mongoose')

const Mac = new mongoose.Schema({ // type => String, Number, Boolean, Date
  car: {
    type: String,
    required: true,
  },
  mac_rssi: {
    type: String,
    required: true,
  },
})

const MacModel = mongoose.model('Mac', Mac)

module.exports = MacModel
