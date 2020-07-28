const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
    username: String,
    email: String,
    password:String
})

userSchema.methods.encryptPassword = async (password) =>{

    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = async function(password)
{
   // console.log("////",password,this.password)
return bcrypt.compare(password,this.password)
}

module.exports = model('User', userSchema);