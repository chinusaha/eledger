const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    licenceId: { type: String, required: true },
    address: { type: String},
    province: { type: String},
    speciality: { type: String},
    contactNumber: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);