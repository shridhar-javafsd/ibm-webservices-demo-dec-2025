const router = require('express').Router();
const { Department } = require('../models');

router.post('/', async (req, res) => {
    res.status(201).json(await Department.create(req.body));
});

router.get('/', async (req, res) => {
    res.json(await Department.findAll());
});

module.exports = router;
