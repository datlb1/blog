const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

router.get('/trang-chu', homeController.index);

module.exports = router;
