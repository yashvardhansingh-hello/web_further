const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let name = "yash";


const yashMiddleWare = (req, res, next) => {
    console.log(req);
    next();
}

app.use(express.static(path.join(__dirname, 'public')));
// app.use(yashMiddleWare);

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/about', (req, res) => {
    res.json({'yash': 34});
})

app.get(`/hello/:name`, (req, res) => {
    res.send('hellllo' + req.params.name);
})



app.listen(port, (err) => {
    if (err) console.log('there is an error.');
    console.log('Server is listening on port 3000');
})

