const express =require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
//create express app
var app =express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/',function(req,res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// Require Notes routes
require('./app/routes/test.routes.js')(app);

require('./app/routes/env.routes.js')(app);

require('./app/routes/log.routes.js')(app);

const port=3000;
app.listen(port,function(){
    console.log(`Server running on the port ${port}`);
})