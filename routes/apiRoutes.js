// linking the routes to data files
// const { table } = require('node:console'); what is this?
const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData')
module.exports = (app) => {
    //modified route data from star wars app
    // app.get('/api/characters', (req, res) => res.json(characters));
    app.get('/api/tables', (req, res) => res.json(tableData));
    app.get('/api/waitlist', (req, res) => res.json(waitListData));
    // creating new data
    // app.post('/api/characters', (req, res) => {
    // for (let i = 0; i < characters.length; i++) {
    //     if (chosen === characters[i].routeName) {
    //       return res.json(characters[i]);
    //     }
    //   }
    //   return res.json(false);
    // });
    
    app.post('/api/tables', (req, res) => {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false)
        };
    });
}