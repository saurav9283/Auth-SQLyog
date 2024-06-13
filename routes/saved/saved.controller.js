const axios = require('axios');
const { saveService,IdService } = require('./saved.service');

module.exports = {
    saveController: async (req, res) => {
        const data = req.body;
        console.log(data, "Saved data===============")

        saveService(data, (err, results) => {
            if (err) {
                console.log(err, "Error=====")
                return res.status(500).json({ message: "Error=====", error: err });
            }
            res.status(200).json({ message: 'Item saved successfully' })
        });
    }
    
}