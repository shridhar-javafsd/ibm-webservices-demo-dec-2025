const router = require('express').Router();
const { Project } = require('../models');

router.post('/', async (req, res) => {
    res.status(201).json(await Project.create(req.body));
});

router.get('/', async (req, res) => {
    res.json(await Project.findAll());
});

module.exports = router;
