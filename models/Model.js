
// require magical mongoose
const mongoose = require("mongoose")
// defind the shema for our form submit
const pet = new mongoose.Schema(
{
  name: { type: String, required: true, unique: true },
  food: { type: String },
  breed :{ type: String, required: true},
  home: {
      zipcode:{ type: Number },
      Address: { type: String },
      city: { type: String },
      State:{ type: String},
      country: { type: String}
  }
})

const Animal = mongoose.model("Animal", pet)
// create a model using that schema

// export the stuff
module.exports = Animal
