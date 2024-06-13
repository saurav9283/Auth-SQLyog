const pool = require('../../config/db.js');
const bcrypt = require('bcrypt');

module.exports = {
    itemService: (data, callback) => {
        pool.query(process.env.CREATEITEM, [data.name, data.imageUrl, data.rating, data.description], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        });
    },
    getItemService: (callback) => {
        const query = process.env.GETALLITEMS;

        pool.query(query, (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        });
    }
}