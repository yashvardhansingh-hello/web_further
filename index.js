const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

// app.get

app.listen(port, (err) => {
    if (err) console.log('there is an error.');
    console.log(`Blog App is listening on server: http://localhost:${port}`);
})

