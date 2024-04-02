const moongose = require('mongoose');

const connectToDB = (url) => {
    return moongose.connect(url);
}

module.exports = connectToDB;