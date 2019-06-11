const Environment = require('../models/env.model.js');


exports.create=(req,res)=>{
    console.log('rest',req.body);
 // Validate request
 if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Create a Note
  const env = new Environment({
    envName:req.body.envName,
    header:req.body.header,
    user:req.body.header,
    admin:req.body.admin,
    login:req.body.login
  });

  // Save Note in the database
  env.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Environment.find()
    .then(env=>{
        console.log('Environments',env);
        res.send(env);
    })
    .catch(error=>{
        console.error('Error env',error);
        res.send(error);
    });

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
