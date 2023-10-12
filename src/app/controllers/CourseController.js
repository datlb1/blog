const Course = require('../models/Course');

class CourseController {

    // GET detail coure /course/:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => res.render('course-detail', { course: course }))
            .catch(error => next(error));
    }
}

module.exports = new CourseController;