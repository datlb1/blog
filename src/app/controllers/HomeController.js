const Course = require('../models/Course');

class HomeController {

    // GET /home
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', { courses: courses }))
            .catch(error => next(error));
    }
}

module.exports = new HomeController;