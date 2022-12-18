const Clients = require('../models/clients')

exports.RegisterClient = ((req,res)=>{
    const dados = req.body
    if (!dados.company || !dados.manager || !dados.Email || !dados.phone) {
        return res.status(200).json({message: 'Os seguinte campos (Enpresa , Gerente , Email , Telefone) não podem ficar vazios'})
    } else {

        const clients = Clients({
            company: dados.company,
            user_id: 1,
            manager: dados.manager,
            nif: dados.nif,
            Email: dados.Email,
            license_id: 0,
            city: dados.city,
            address: dados.address,
            road: dados.road,
            ActiveLicense: 0,
            ExpirationDate: 0,
            LicenseType: dados.LicenseType,
            state: false,
        })
        try{
            clients.save()
            return res.status(200).json({message: 'Cliente Cadastrado com succeso'})
        }catch(err){
            return res.status(200).json({message: 'Erro ao registrar o cliente'})
        }
    }
})

exports.GetClient = ((req,res)=>{

})

exports.GetClients = (async(req,res)=>{
    const client = await Clients.find({})
    return res.status(200).json({client})
})

exports.updateClient = (()=>{

})
