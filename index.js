const express = require('express');
const app = express();
const PORT = 3000

const fs = require('fs');

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log('App available on port', PORT);
})


app.get('/',  (request, response) => {
  const filePath = './home.html';

   fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      response.status(500).send('Sorry, the server is currently unavailable.');
    } else {
      response.send(html);
    }
  });
});