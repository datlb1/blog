const Course = require('../models/Course');

class CourseController {

    // GET detail coure /course/:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                if (course) {
                    res.render('course-detail', { course: course });
                } else {
                    res.set('Content-Type', 'text/html');
                    res.send('<h2 style="text-align: center; margin-top:20px">Oops!! Trang không tồn tại</h2>');
                }
            })
            .catch(error => next(error));

    }

    // GET detail coure /course/add
    addGet(req, res, next) {
        res.render('form-add');
    }

    // POST detail coure /course/add
    async addPost(req, res, next) {
        const course = new Course(req.body);
        await course.save()
            .then(() => res.redirect("../home"))
            .catch(error => next(error));
    }

    // GET show all coure /course/list
    showList(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('list-course', { courses: courses }))
            .catch(error => next(error));
    }

    // GET show edit coure /course/edit/:videoId
    editGet(req, res, next) {
        Course.findOne({ videoId: req.params.videoId }).lean()
            .then(course => res.render('course-edit', { course: course }))
            .catch(error => next(error));
    }

    // POST show edit coure /course/edit
    editPost(req, res, next) {
        //res.json(req.body._id);
        Course.updateOne({ _id: req.body._id }, req.body)
            .then(() => res.redirect('list'))
            .catch(error => next(error));
    }
}
module.exports = new CourseController;
