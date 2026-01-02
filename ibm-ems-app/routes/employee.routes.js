const router = require('express').Router();
const { Employee } = require('../models');

router.post('/', async (req, res) => {
    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
});

router.get('/', async (req, res) => {
    res.json(await Employee.findAll());
});

module.exports = router;
