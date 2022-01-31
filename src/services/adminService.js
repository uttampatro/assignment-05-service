const Admin = require('../entity/Admin');

const login = async ({ email, password }) => {
    const admin = await Admin.findOne({ email, password });
    return admin;
};

module.exports = { login };
