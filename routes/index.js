var express = require('express');
var router = express.Router();
var models = require('../models');

function getUsers() {
    return models.users
        .findAll()
        .then(function (users) {
            if (users.length) {
                return users;
            }
            return {message: 'No user exists with this ID'};
        });
}

/* GET home page. */
router.get('/', function (req, res) {
    getUsers().then(function (users) {
        res.render('index', {title: 'Express', users: users});
    })
    .catch(function (err) {
        res.render('index', {title: 'Express', error:err});
    });
});

module.exports = router;
