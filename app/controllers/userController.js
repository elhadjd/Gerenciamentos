const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TokenUser = require('../models/tokenUser')



exports.GetUser = async(req,res)=>{
    const id = req.params.id
    const checkUserExist = await User.findById(id,'-password')
    if (!checkUserExist) return res.status(404).json({message: 'Usuario não encontrado'})
    res.status(200).json({checkUserExist})
}

exports.NewUser = async(req,res)=>{
    const {name,email,password,confirmPassword,genre,state,level} = req.body
    // validation
    if (!name || !email || !password) {
        return res.status(422).json({message: 'Por favor preencha todos os campos'})
    }
    // Check User exist
    const userExist = await User.findOne({email:email})
    if (userExist) {
        return res.status(422).json({message: 'Por Utilize outro email'})
    }
    // create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password,salt)

    const user = User({
        name,
        email,
        password:passwordHash,
        state,
        genre,
        level
    })

    try{

        await user.save()
        res.status(200).json({message: 'Usuario creado com succeso'})

    } catch(err){
        console.log(err);
        res.status(500).json({message: 'Aconteçeu um erro no servidor por favor tente novamente mais tarde'})
    }
}

exports.Login = async(req,res)=>{
    const {email, password} = req.body
    if (!email || !password) return res.status(422).json({message: 'Os campos não podem ser vazios'})

    // check user exist
    const user = await User.findOne({email:email})

    if (!user) return res.status(422).json({message: 'Usuario não encontrado!'})
    // check if password math

    const checkPassword = await bcrypt.compare(password,user.password)
    
    if (!checkPassword) return res.status(422).json({message: 'Senha invalida!'})
    
    try{
        const secret = process.env.SECRET


        const token = jwt.sign({
            id: user._id
        },secret)
        CreateTokenDatabase(user,token)
        res.status(200).json({message: 'Autenticação realizada com successo',token: token,user:user})

    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Aconteçeu um erro no servidor por favor tente novamente mais tarde'})
    }

}


const CreateTokenDatabase = (async(user,Token)=>{
    const token = TokenUser({
        users_id: user._id,
        token: Token,
        state: 'connected',
        created_at: new Date(0),
        created_at: new Date(0),
    })

    try{
        await token.save()
    }catch(err){
        return false
    }
})
