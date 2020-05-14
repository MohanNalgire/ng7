module.exports = (app)=>{
    const logger = require('../controllers/logs.controller.js');
    app.post('/api/v1/logger',logger.create);
    app.get('/api/v1/logger',logger.findAll);
    app.get('/api/v1/logger/:testid',logger.findOne);
    app.put('/api/v1/logger/:testid',logger.update);

    app.delete('/logger/:testid',logger.delete);
};

