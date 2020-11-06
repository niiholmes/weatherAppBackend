const User = require('../models/userModel.js')

const userControl = {}

//create user

userControl.createUser = async (req, res)=>{
    try{
        const newUser = new User(req.body)
        let result = await newUser.save()
        res.status(200).send({message: 'Bossu, you dey form. Your account has been created successfully', result})

    } catch(error){
        res.status(400).send({ message: 'Oh Bossu, you no dey form.Your account could not be created', error})

    }
}



//read users details
userControl.getAllUsers = async (req, res)=>{
    try{

        let result = await User.find({})
        res.status(200).send(result)

    } catch (error){
        res.status(500).send({message:'there was an error'})

    }
}

//read user detail

userControl.getUser = async (req, res) =>{
    try{
       let result =  await User.findOne({username:req.params.username})
       res.status(200).send(result)
    } catch(error){
        res.status(404).send({message: 'user not found'})
    }
}

//update
userControl.updateUser= async (req, res) =>{
    //object destructuring
    const {username, email, password} = req.body
    try{
        let result = await User.findByIdAndUpdate({_id:req.params}, {username, email, password})
        res.status(200).send(result)

    } catch(error){
        res.status(404).send({message: 'could not update user'})

    }
}


//delete
userControl.deleteUser= async (req, res) =>{
    try{

        let result = await User.findByIdAndDelete({_id:req.params})
        res.status(200).send({message: 'user deleted successfully'})
    } catch(error){
        res.status(500).send({message: 'there was an error please try again'})

    }
}


module.exports = userControl


    