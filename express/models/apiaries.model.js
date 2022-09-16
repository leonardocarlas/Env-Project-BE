const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    hiveIndex: {
        required: true,
        type: Number
    },
    nHives: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Apiary', dataSchema);