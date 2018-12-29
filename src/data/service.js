const mongoose = require('mongoose');
const moment = require('moment');

const dataSchema = mongoose.Schema({
  plantId: String,
  measuredAt: Date,
  humidity: String,
  moisture: String,
  temprature: String,
  sunlight: String
});

const dataModel = mongoose.model('data', dataSchema);

class DataService {
  constructor() {
    
  }
  
  async create(data) {
    const newData = new dataModel({
      ...data,
      measuredAt: new moment(),
      plantId: '0000000001'
    });
    return newData.save();
  }
  
  read() {
    return dataModel.find().exec();
  }
  
  // update () {}
  // delete() { }
  
}

module.exports = DataService;