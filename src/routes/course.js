const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/add', courseController.addGet);
router.post('/add', courseController.addPost);
router.get('/list', courseController.showList);
router.get('/trash', courseController.showTrash);
router.get('/edit/:id', courseController.editGet);
router.post('/edit', courseController.editPost);
router.post('/delete/:id', courseController.delete);
router.post('/restore/:id', courseController.restore);
router.get('/:slug', courseController.detail);

module.exports = router;
