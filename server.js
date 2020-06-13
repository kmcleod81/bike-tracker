const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080; // use for heroku

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware that is needed to use POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// added some comment
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});