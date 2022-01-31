const User = require('../entity/User');

const createUser = async ({ username, mobileNumber, email, address }) => {
    const user = new User({
        username,
        mobileNumber,
        email,
        address,
    });
    await user.save();
    return user;
};

const fetchAllUser = async () => {
    const movies = await User.find();
    return movies;
};

const deleteUser = async _id => {
    const user = await User.findByIdAndDelete(_id);
    return user;
};

module.exports = { createUser, fetchAllUser, deleteUser };
