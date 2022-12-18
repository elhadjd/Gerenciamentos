const Sequelize = require('sequelize')

const connection = ()=>{
    const sequelize = new Sequelize('license','MamoudouLicense','MamoudouLicense',{
        host: 'localhost',
        dialect: 'mysql'
    })
    return sequelize
}

module.exports = connection



// const Clients = sequelize.define('clients',{
//     company: {type: Sequelize.STRING},
//     user_id: {type: Sequelize.INTEGER},
//     manager: {type: Sequelize.STRING},
//     nif: {type: Sequelize.STRING},
//     Email: {type: Sequelize.STRING},
//     license_type_id: {type: Sequelize.INTEGER},
//     license_id: {type: Sequelize.INTEGER},
//     city: {type: Sequelize.STRING},
//     address: {type: Sequelize.STRING},
//     road: {type: Sequelize.STRING},
//     ActiveLicense: {type: Sequelize.STRING},
//     ExpirationDate: {type: Sequelize.STRING},
//     LicenseType: {type: Sequelize.STRING},
//     licenses: {type: Sequelize.STRING},
//     state: {type: Sequelize.STRING},
// });
