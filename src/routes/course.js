const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/add', courseController.addGet);
router.post('/add', courseController.addPost);
router.get('/:slug', courseController.detail);

module.exports = router;
