const mongoose = require("mongoose");

const Clients = mongoose.model('clients',{
    company: String,
    user_id: String,
    manager: String,
    nif: String,
    Email: String,
    license_id: String,
    city: String,
    address: String,
    road: String,
    ActiveLicense: String,
    ExpirationDate: String,
    LicenseType: String,
    state: String,
})

module.exports = Clients