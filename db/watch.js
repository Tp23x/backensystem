const mongoose = require('mongoose')

const Watch = new mongoose.Schema({ // type => String, Number, Boolean, Date
  carid: {
    type: String,
    required: true,
  },
  watch: [
    { 
      "mac_address":"",
      "rssi":"",
      "name":"",
    },
  ],
  // "type": "Interger",
  // "watch":{
  //   "type":"String",
  //         "color":"", 
  //         "mac_address":"",
  //         "studyID":"", 
  //         "name":""

  // } 
})


const WatchModel = mongoose.model('Watch', Watch)

module.exports = WatchModel