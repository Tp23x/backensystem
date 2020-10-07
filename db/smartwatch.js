const mongoose = require('mongoose')

const Band = new mongoose.Schema({ // type => String, Number, Boolean, Date
  studyID: {
    type: String,
    unique: true,
    required: true,
  },
  nameS: {
    type: String,
    required: true,
  },
  mac_address: {
    type: String,
    required: true,
  },
})

const BandModel = mongoose.model('Band', Band)

module.exports = BandModel
