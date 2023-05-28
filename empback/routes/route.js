const express=require("express")

const router =express.Router()
const {addUser,getUsers,getUserById,editUser,deleteUser}=require("../controller/user-controller")


router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;