const homeRouter = require('./home');
const courseRouter = require('./course');

function route(app) {
    app.use('/home', homeRouter);
    app.use('/course', courseRouter);
}

module.exports = route;
