const pool = require('../../config/db.js');

module.exports = {
    saveService: (data, callback) => {
        const getItemQuery = process.env.GET_ITEM_BY_ID;
        pool.query(getItemQuery, [data.itemId], (error, items) => {
            if (error) {
                console.log(error, "Error=====");
                return callback(error);
            }

            const saveItemQuery = process.env.SAVEITEM;
            const values = items?.map(item => [data.id, item.name, item.imageUrl, item.description, item.rating]);
            // console.log(values, "Values=====")

            if (values.length > 0) {
                pool.query(saveItemQuery, [values], (error, results) => {
                    if (error) {
                        console.log(error, "Error=====");
                        return callback(error);
                    }
                    return callback(null, results);
                });
            } else {
                return callback(null, { message: 'No items found with the given itemId' });
            }
        });
    }
}