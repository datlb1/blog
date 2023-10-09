
class HomeController {

    // GET /new
    index(req, res) {
        res.render('home');
    }
}

module.exports = new HomeController;