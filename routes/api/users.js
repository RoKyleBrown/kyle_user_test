const express = require("express");
const router = express.Router();
const db = require('../../config/database');
const User = require('../../models/user');

router.get("/test", (req, res) => res.json({ msg: "This is the user route" }));




router.get('/', async (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});



module.exports = router;


//login
//logout
//update
//showpage
//index -- user seach (firebase?)