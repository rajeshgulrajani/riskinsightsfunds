module.exports = app => {
    const funds = require("../controllers/funds.controller.js");
  
    var router = require("express").Router();
  // a middleware function with no mount path. This code is executed for every request to the router
    router.use(function (req, res, next) {
      //console.log('Time:', Date.now() + req)
      next()
    })
    // Create a new Tutorial
    router.post("/", funds.create);
  
    // Retrieve all Tutorials
    router.get("/", funds.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", funds.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", funds.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", funds.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", funds.delete);
  
    // Delete all Tutorials
    router.delete("/", funds.deleteAll);
  
    app.use('/funds', router) ;
  };