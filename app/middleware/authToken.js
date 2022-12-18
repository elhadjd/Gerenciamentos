
const jwt = require('jsonwebtoken')
exports.CheckToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({message: 'Aceso negado'})
    }
    try{

        const secret = process.env.SECRET

        jwt.verify(token,secret)

        next()

    }catch(err){
        res.status(400).json({message: 'Token invalido'})
    }
}