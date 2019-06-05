module.exports = (app)=>{
    const tests = require('../controllers/test.controller.js');
    app.post('/tests',tests.create);
    app.get('/tests',tests.findAll);
    app.get('/tests/:testid',tests.findOne);
    app.put('/tests/:testid',tests.update);

    app.delete('/tests/:testid',tests.delete);
};


