const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Templete engine
app.engine('.hbs', hbs.engine(
    {
        extname: '.hbs'
    }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
