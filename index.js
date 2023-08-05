const express = require('express');
const app = express();
const PORT = 3000

const {readFile, readFileSync} = require('fs');

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log('App available on port', PORT);
})

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) =>{
        if(err){
            response.status(500).send('sorry out of order');
        }
        response.send(html);
    })
});
