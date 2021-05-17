const express = require("express");
const router = express.Router();
const db = require('../../config/database');
const User = require('../../models/user');
const { Op } = require('sequelize');

router.get("/test", (req, res) => res.json({ msg: "This is the user route" }));




router.get('/', async (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get('/', async (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get(`/:email`, async (req, res) => {

    await User.findOne({where: { email: req.params.email }})
        .then(user => {
            res.json(user)
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
})

router.patch(`/edit`, (req, res) => {

    User.update(
        {
            full_name: req.body.full_name,
            gender: req.body.gender,
            cell_phone: req.body.cell_phone,
            date_of_birth: req.body.date_of_birth,
            zip_code: req.body.zip_code,
            email: req.body.email.toLowerCase()
        }, 

        { where: {id: req.body.id} }
    )
    .then(user => res.json(user))
    .catch(err => res.status(404).json(err))
})
router.get(`/search/:query`, (req, res) => {

    
    const term   = req.params.query;
    console.log(term)

    User.findAll({where:{
                    [Op.or]: [
                        {full_name: {[Op.like]: `%${term}%`}},
                        {cell_phone: {[Op.like]: `%${term}%`}},
                        {email: {[Op.like]: `%${term}%`}},
                    ]
                }
            })
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
    })



module.exports = router;