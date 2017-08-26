
// require magical mongoose
const mongoose = require("mongoose")
// defind the shema for our form submit
const pet = new mongoose.Schema(
{
  id : { type: String },
  name: { type: String, required: true },
  food: { type: String },
  breed :{ type: String },
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
