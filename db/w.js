const mongoose = require('mongoose')

const W = new mongoose.Schema({ // type => String, Number, Boolean, Date
  watch: [
    { 
      "mac_address":"",
      "rssi":"",
      "name":"",
      "carid":"",
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


const WModel = mongoose.model('W', W)

module.exports = WModel