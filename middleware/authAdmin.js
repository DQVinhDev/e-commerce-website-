const Users = require('../models/userModels')

const AuthAdmin = async(req,res)=> {
    try {
        //get user information by id
        const user = await Users.findOne({
            _id : req.user.id
        })

        if(user.role == 0 ) return res.status(400).json({msg: "Khong duoc phep truy cap"})

        next()


    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = AuthAdmin