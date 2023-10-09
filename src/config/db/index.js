const mongoose = require('mongoose');

async function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/nodejs_dev')
        .then(() => console.log('Connect successfully!!!'))
        .catch(() => console.log('Connect failure!!!'));
}

module.exports = { connect };
