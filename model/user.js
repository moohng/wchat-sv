const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    id: String,
    username: String,
    password: String,
    registed_time: String
});
