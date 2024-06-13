const axios = require('axios');
const {itemService,getItemService} = require('./item.service.js');

module.exports = {
    itemController: async (req, res) => {
        const data = req.body;
        console.log(data, "===============")

        itemService(data, (err, results) => {
            if (err) {
                console.log(err, "Error=====")
                return res.status(500).json({ message: "Error=====", error: err });
            }
            res.status(200).json({ message: 'Item added successfully' })
        });
    },
    getItemController: async (req, res) => {
        getItemService((err, results) => {
            if (err) {
                console.error(err, "Error fetching items");
                return res.status(500).json({ message: "Error fetching items", error: err });
            }
            res.status(200).json(results);
        });
    }

}