const jwt = require('jsonwebtoken')
const User = require('../models/Users')


const handleError  = (err)=>{
    console.log(err.message,err.code)
    let errors = {username:'',email:'',password:''}
    let login_errors = {email:'',password:''}

 
    if(err.message == "invalid email" || err.message == "invalid password" ){
        if(err.message == "invalid email"){   
            login_errors.email = err.message
        }
        else if (err.message == "invalid password") {
            login_errors.password = err.message
        }

        return login_errors
    }
    if (err.message.includes('user validation failed')) {
       Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
       })
       return errors
    }else if(err.code == 11000){
       errors.email = "sorry that email has already been used"

        return errors
    }

}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id)=>{
    return jwt.sign({id},"victor marks secrete",{
        expiresIn:maxAge 
    })
}
const signup_post = async (req,res)=>{
    
    const {firstname,lastname,email,password} = req.body
   try {
    const users = await User.create({firstname,lastname,email,password,role:'user'});
    const token = createToken(users._id)
    console.log(token);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000})
    res.status(201).json({user:users._id,redirect:'/'})
    

   } catch (err) {
    // console.log(err)
		const errors = handleError(err)
        res.json({errors})
   }
    
// console.log(req.body)
}




const login_post = async (req,reps)=>{
    const {email,password} = req.body;

    try {

        const user = await User.login(email,password) 
        const token = createToken(user._id)  
        reps.cookie('jwt',token,{httpOnly:true, maxAge:maxAge * 1000})
        reps.status(200).json({user:user._id,redirect:'/'}) 
        
    } catch (err) {
        
        const errors = handleError(err)
         
        reps.status(400).json({errors:errors})
    }

}
    
const logout = (req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')
}



module.exports = {
    signup_post, login_post,logout
}
