module.exports=(app)=>{

    const environments=require('../controllers/env.controller.js');

    //create a new environment
    app.post('/environments',environments.create);

    //Retrieve all environments
    app.get('/environments',environments.findAll);

    //Retrieve a single environment with name
    app.get('/environments/:envName',environments.findOne);

    //Update a single environment with the envionment name
    app.put('/environments/:envName',environments.update);

    //Delete a environment with the environment name
    app.delete('/environments/:envName',environments.delete);


}

