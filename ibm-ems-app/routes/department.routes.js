const router = require('express').Router();
const { Department } = require('../models');

router.post('/', async (req, res) => {
    console.log(req.body);
    res.status(201).json(await Department.create(req.body));
});

router.get('/', async (req, res) => {
    console.log(req);
    res.json(await Department.findAll());
});

module.exports = router;
