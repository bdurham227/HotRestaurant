// res.send("Welcome to the Star Wars Page!")
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

//setup path
const path = require('path');

// routes

module.exports = (app) => {
    //html get requests

    // res.send("Welcome to the Star Wars Page!")
    // app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
   
    app.get('/view', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/view.html'));
    });

    app.get('/add', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/add.html'));
    });

    //one more for no table found?

    app.get('/', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/home.html'));
    });
}