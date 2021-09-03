const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});