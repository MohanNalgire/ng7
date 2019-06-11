const mongoose =require('mongoose');

const TestSchema = mongoose.Schema({
    title: String,
    content: String,
    expectedScore:Number,
    getScore:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Test', TestSchema);