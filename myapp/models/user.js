const mongoose = require('mongoose');
const userSchema = mongoose.Schema;


const users = new userSchema({
    name :{ type : String,
           required : true}  
});

module.exports = User = mongoose.model("users", users);
