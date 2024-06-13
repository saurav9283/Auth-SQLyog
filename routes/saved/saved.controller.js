const axios = require('axios');
const { saveService, GetSaveService,DeleteService } = require('./saved.service.js');

module.exports = {
    saveController: async (req, res) => {
        const data = req.body;
        // console.log(data, "Saved data===============")

        saveService(data, (err, results) => {
            if (err) {
                console.log(err, "Error=====")
                return res.status(500).json({ message: "Error=====", error: err });
            }
            res.status(200).json({ message: 'Item saved successfully' })
        });
    },
    GetSaveController: async (req, res) => {
        const id = req.params.id;
        // console.log(id, "Saved data===============")

        GetSaveService(id, (err, results) => {
            if (err) {
                console.log(err, "Error=====")
                return res.status(500).json({ message: "Error=====", error: err });
            }
            res.status(200).json(results)
        });
    },
    DeleteSaveController: async (req, res) => {
        const {id,itemId} = req.params;
        // console.log(id,itemId, "Saved data==============")

        DeleteService(id,itemId, (err, results) => {
            if (err) {
                console.log(err, "Error=====")
                return res.status(500).json({ message: "Error=====", error: err });
            }
            res.status(200).json({ message: 'Item deleted successfully' })
        });
    }

}