const Course = require('../models/Course');

class HomeController {

    // GET /new
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', { courses: courses }))
            .catch(error => next(error));
        //res.render('home');
    }
}

module.exports = new HomeController;