const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());

app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/departments', require('./routes/department.routes'));
app.use('/api/projects', require('./routes/project.routes'));

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('EMS API running on port 3000'));
});
