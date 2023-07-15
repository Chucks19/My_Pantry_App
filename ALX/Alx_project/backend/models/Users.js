const mongoose = require('mongoose')
const {isEmail} = require('validator')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstname:{
        type:String,
        minlength:[5,"username must be atleast up to five characters"],
        required:[true,"input a user name"],
    },
    lastname:{
        type:String,
        minlength:[5,"username must be atleast up to five characters"],
        required:[true,"input a last name"],
    },
    email:{
        type:String,
        unique:[true,"email already exists"],
        validate:[isEmail,"invalid email"],
        required:[true,"input an email"]
    },
    password:{
        type:String,
        required:[true,"input a password"],
        minlength:[8,"password must contain atleast 8 characters"]
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true})



userSchema.pre('save',async function (next){

    const salt = await bcrypt.genSalt()
    this.password =await bcrypt.hash(this.password, salt)
    next()

})


userSchema.statics.login =async function(email, password){
    const user = await this.findOne({email})

    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if (auth) {
            return user;
        }else{
            throw Error('invalid password')
        }
    }

    throw Error('invalid email')
}

const user = mongoose.model('users',userSchema)

module.exports=user;