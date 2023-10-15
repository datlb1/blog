const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/add', courseController.addGet);
router.post('/add', courseController.addPost);
router.get('/list', courseController.showList);
router.get('/edit/:videoId', courseController.editGet);
router.post('/edit', courseController.editPost);
router.get('/:slug', courseController.detail);

module.exports = router;
