const axios = require('axios');
const { loginUser } = require('./login.service.js');

module.exports = {
    loginController: async (req, res) => {
        try {
            const data = req.body;

            loginUser(data, (err, result) => {
                if (err) {
                    // console.log(err,"Error=====")
                    return res.status(400).json({ message: err.message })
                }
                const { token, id } = result;
                console.log(result, "result=====")
                res.status(200).json({ message: 'User logged in successfully', token: token, id: id })
            });

        } catch (error) {
            console.log('error: ', error);
            res.status(500).json(error);
        }
    }
}