const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
     "first_name": String,
     "last_name": String,
     "date_of_birth": Date,
     "gender": String,
     "contact": {
          "email": String,
          "phone": String
     },
     "address": {
          "city": String,
          "state": String,
          "zip": String
     },
     "medical_history": [
          {
               "condition": String,
               "diagnosis_date": Date,
               "treatments": [
                    {
                         "date": Date,
                         "treatment": String
                    }
               ]
          }
     ]
});   

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;