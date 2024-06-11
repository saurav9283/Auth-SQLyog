const pool = require('../../config/db.js');

const { default: axios } = require('axios');

module.exports = {
    insertUser: (data, callback) => {
        pool.query(
            process.env.CREATEUSER,
            [data.username],
            (error, results) => {
                if (error) {
                    return callback(error);
                }
                if (results.length > 0) {
                    return callback(new Error("User already exists"));
                }

                pool.query(
                    `insert into user_list (username, password) values (?,?)`,
                    [data.username, data.password],
                    (error, results) => {
                        if (error) {
                            return callback(error);
                        }
                        return callback(null, results);
                    }
                )
            }
        )
    }
}
