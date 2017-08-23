const express = require("express")
const app = express()
const mustache = require("mustache-express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.Promise = require("bluebird")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(bodyParser.urlencoded({ extended: false }))

const MONGO_URL = "mongodb://127.0.0.1:27017/animal"
mongoose.connect(MONGO_URL)
const animal = require("./models/Model")
const animalRoutes = require("./routes/animal")

app.use(animalRoutes)

app.listen(3000, function() {
  console.log("Listening on 3000")
})
