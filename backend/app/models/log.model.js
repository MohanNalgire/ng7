const mongoose =require('mongoose');

const LogSchema = mongoose.Schema({
    title: String,
    content: String,
    expectedScore:Number,
    getScore:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', LogSchema);