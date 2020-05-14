module.exports=(app)=>{

    const environments=require('../controllers/env.controller.js');

    //create a new environment
    app.post('/api/v1/environments',environments.create);

    //Retrieve all environments
    app.get('/api/v1/environments',environments.findAll);

    //Retrieve a single environment with name
    app.get('/api/v1/environments/:envName',environments.findOne);

    //Update a single environment with the envionment name
    app.put('/api/v1/environments/:envName',environments.update);

    //Delete a environment with the environment name
    app.delete('/api/v1/environments/:envName',environments.delete);


}

