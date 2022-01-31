const {
    createUser,
    fetchAllUser,
    deleteUser,
} = require('../services/userService');

const creatingUser = async (req, res) => {
    try {
        const id = req.body.id;
        const username = req.body.username;
        const mobileNumber = req.body.mobileNumber;
        const email = req.body.email;
        const address = req.body.address;
        const user = await createUser({
            username,
            mobileNumber,
            email,
            address,
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const userList = await fetchAllUser();
        return res.json(userList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await deleteUser({
            _id: id,
        });
        return res.json('delete user successfully');
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = { creatingUser, getAllUser, deletingUser };
