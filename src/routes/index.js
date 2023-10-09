const homeRouter = require('./home');

function route(app) {
    app.use('/home', homeRouter);
}

module.exports = route;
