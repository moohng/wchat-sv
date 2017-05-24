const mongoose = require('mongoose');

module.exports = mongoose.model('message', {
    username: String,
    password: String,
    token: String
});
