const Logs = require('../models/log.model.js');


// Create and Save a new Logs
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
      return res.status(400).send({
        message: "Logs content can not be empty"
      });
    }

    // Create a Logs
    const log = new Logs({
        title:req.body.title || "Untitled Note",
        content:req.body.content,
        expectedScore:req.body.expectedScore,
        getScore:req.body.getScore
    });

    // Save Logs in the database
    log.save()
      .then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Logs."
        });
      });
  };

  // Retrieve and return all notes from the database.
  exports.findAll = (req, res) => {
     Logs.find()
     .then((data)=>{
         console.log('Logs',data);
         res.send(data);
     })
     .catch(()=>{});
  };

  // Find a single Logs with a logid
  exports.findOne = (req, res) => {
    console.log('log on the request',Logs);
      Logs.findById(req.params.logid)
      .then(log => {
          if(!log) {
              return res.status(404).send({
                  message: "Logs not found with id " + req.params.logid
              });
          }
          res.send(log);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Logs not found with id " + req.params.logid
              });
          }
          return res.status(500).send({
              message: "Error retrieving Logs with id " + req.params.logid
          });
      });
  };

  // Update a Logs identified by the logid in the request
  exports.update = (req, res) => {
   // Validate Request
   if(!req.body.content) {
      return res.status(400).send({
          message: "Logs content can not be empty"
      });
  }

  // Find Logs and update it with the request body
  Logs.findByIdAndUpdate(req.params.logid, {
      title: req.body.title || "Untitled Logs",
      content: req.body.content,
      expectedScore:req.body.expectedScore,
      getScore:req.body.getScore
  }, {new: true})
  .then(Logs => {
      if(!Logs) {
          return res.status(404).send({
              message: "Logs not found with id " + req.params.logid
          });
      }
      res.send(Logs);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Logs not found with id " + req.params.logid
          });
      }
      return res.status(500).send({
          message: "Error updating Logs with id " + req.params.logid
      });
  });
  };

  // Delete a Logs with the specified logid in the request
  exports.delete = (req, res) => {
      Logs.findByIdAndRemove(req.params.logid)
      .then(log => {
          if(!log) {
              return res.status(404).send({
                  message: "Logs not found with id " + req.params.logid
              });
          }
          res.send({message: "Logs deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Logs not found with id " + req.params.logid
              });
          }
          return res.status(500).send({
              message: "Could not delete Logs with id " + req.params.logid
          });
      });
  };
