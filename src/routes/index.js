const express = require('express');
const { loginAdmin } = require('../controllers/admin');
const {
    creatingUser,
    getAllUser,
    deletingUser,
    updatingUser,
} = require('../controllers/users');

const router = express.Router();

// Auth
router.post('/login', loginAdmin);

// Users
router.post('/createUser', creatingUser);
router.get('/getUserList', getAllUser);
router.delete('/deleteUser/:id', deletingUser);

module.exports = router;
