const express = require('express');
const app = express();

const PORT = 8080;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`server is listening at https://localhost:${PORT}`);
});