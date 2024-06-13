const pool = require('../../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    loginUser: (data, callback) => {
        pool.query(process.env.CREATEUSER, [data.username], (err, result) => {
            if (err) {
                return callback(err);
            }
            // console.log(result.length,"result.length")
            if (result.length === 0) {
                return callback(new Error("User not found"));
            }
            const user = result[0];
            // console.log(user.password, "876543w45678")
            bcrypt.compare(data.password, user.password.toString(), (err, isMatch) => {
                if (err) {
                    return callback(err);
                }
                if (!isMatch) {
                    return callback(new Error("Password is incorrect"));
                }
                const token = jwt.sign({username: data.username}, 'saurav');
                return callback(null, { token, id: user.id });
            });
        });
    }
}