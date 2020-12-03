const mongoose = require('mongoose');
const Message = mongoose.model('Message', new mongoose.Schema());

exports.getMessages = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    Message.find({}, function(err, message) {
        if (message) {
            res.send(message)
        } else {
            console.error('msg retreval error: ', err)
            res.send([{msg: ''}])
        }
    })
};
