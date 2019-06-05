const Test = require('../models/test.model.js');


// Create and Save a new Test
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
      return res.status(400).send({
        message: "Test content can not be empty"
      });
    }

    // Create a Test
    const test = new Test({
        title:req.body.title || "Untitled Note",
        content:req.body.content,
        expectedScore:req.body.expectedScore,
        getScore:req.body.getScore
    });

    // Save Test in the database
    test.save()
      .then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Test."
        });
      });
  };

  // Retrieve and return all notes from the database.
  exports.findAll = (req, res) => {
     test.find()
     .then((data)=>{
         console.log('Test',data);
         res.send(data);
     })
     .catch(()=>{});
  };

  // Find a single Test with a testid
  exports.findOne = (req, res) => {
    console.log('test on the request',Test);
      Test.findById(req.params.testid)
      .then(test => {
          if(!test) {
              return res.status(404).send({
                  message: "Test not found with id " + req.params.testid
              });
          }
          res.send(test);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Test not found with id " + req.params.testid
              });
          }
          return res.status(500).send({
              message: "Error retrieving Test with id " + req.params.testid
          });
      });
  };

  // Update a Test identified by the testid in the request
  exports.update = (req, res) => {
   // Validate Request
   if(!req.body.content) {
      return res.status(400).send({
          message: "Test content can not be empty"
      });
  }

  // Find Test and update it with the request body
  Test.findByIdAndUpdate(req.params.testid, {
      title: req.body.title || "Untitled Test",
      content: req.body.content,
      expectedScore:req.body.expectedScore,
      getScore:req.body.getScore
  }, {new: true})
  .then(Test => {
      if(!Test) {
          return res.status(404).send({
              message: "Test not found with id " + req.params.testid
          });
      }
      res.send(Test);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Test not found with id " + req.params.testid
          });
      }
      return res.status(500).send({
          message: "Error updating Test with id " + req.params.testid
      });
  });
  };

  // Delete a Test with the specified testid in the request
  exports.delete = (req, res) => {
      Test.findByIdAndRemove(req.params.testid)
      .then(test => {
          if(!test) {
              return res.status(404).send({
                  message: "Test not found with id " + req.params.testid
              });
          }
          res.send({message: "Test deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Test not found with id " + req.params.testid
              });
          }
          return res.status(500).send({
              message: "Could not delete Test with id " + req.params.testid
          });
      });
  };
