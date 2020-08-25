const User = require('../models/user.js')

exports.createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }
    catch(err){
        console.error(err);
    }
}