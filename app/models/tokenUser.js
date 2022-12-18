const mongoose = require("mongoose");

const TokenUser = mongoose.model('tokenUser',{
    users_id: String,
    token: String,
    state: String,
    created_at: String,
    created_at: String,
})

module.exports = TokenUser