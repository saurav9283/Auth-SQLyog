const axios = require('axios');
const { insertUser } = require('./register.service.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    registerController: async (req, res) => {
        try {
            const data = req.body;

            bcrypt.hash(data.password, saltRounds, function (err, hash) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Error=====", error: err })
                }
                data.password = hash;
                insertUser(data, (err, results) => {
                    if (err) {
                        console.log(err, "Error=====")
                        if (err.message === 'User already exists') {
                            return res.status(400).json({ message: 'User already exists' });
                        }
                        return res.status(500).json({ message: "Error=====", error: err });
                    }
                    res.status(200).json({ message: 'User registered successfully' })
                });
            })

        } catch (error) {
            res.status(500).json({ message: "Error=====", error: error });
        }
    }
}