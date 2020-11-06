const  {Router} = require('express')
const router =Router()
const {createUser, getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/userController')

           /*OR 
const express = require('express')
const router = express.Router()
*/

//create =post
router.post('/api/user/new', createUser)




//read =get
router.get('/api/user/find', getAllUsers)

router.get('/api/user/:username', getUser)

//update=put
router.put('/api/user/update', updateUser)

//delete=delete
router.delete('/api/user/delete', deleteUser)



module.exports = router