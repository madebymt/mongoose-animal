const express = require("express")
const router = express.Router()
const Model = require("../models/Model")


// home page setting
router.get("/", function(req, res) {
  Model.find().then(function(animals) {
    res.render("index", {
        animals : animals
    })
  })
})

// set up for adding the new things in
router.get("/animals/add", function(req, res) {
  res.render("add")
})

// adding form submitting router setting
router.post("/animals", function(req, res) {
  const name = req.body.name
  const breed = req.body.breed
  const food = req.body.food
  const animal = new Model()
  animal.name = name
  animal.breed = breed
  animal.food = food
  animal
    .save()
    .then(function(animals) {
      res.redirect("/")
    })
    .catch(function(error) {
      console.log("error", error)
      res.render("add", {
        animals: animals,
        errors: error.errors
      })
    })
})


// each sigle item unique page, so can edit or delete later on
router.post("/animals/:id", function(req, res) {
  Model.findOne({ _id: req.params.id }).then(function(animals) {
      const name = req.body.name
      const breed = req.body.breed
      const food = req.body.food
      animal.name = name
      animal.breed = breed
      animal.food = food
    animal
      .save() //update, create or change
      .then(function(animals) {
        res.redirect("/")
      })
      .catch(function(error) {
        res.render("edit", {
          animals: animals,
          errors: error.errors
        })
      })
  })
})


//// i just edit here /////
router.get("/animals/:id", function(req, res) {
  Model.findOne({ _id: req.params.id })
  .then(function(animals) {
    res.render("detail", {
     animals: animals
    })
  })
})

router.get("/animals/:id/edit", function(req, res) {
  Model.findOne({ _id: req.params.id })
  .then(function(animals) {
    res.render("edit", {
      animals: animals
    })
  })
})

router.get("/animals/:id/delete", function(req, res) {
  Model.deleteOne({ _id: req.params.id }).then(function() {
    res.redirect("/")
  })
})

module.exports = router;
