const express = require('express'); // 
const app = express();

const path = require('path');


// Define a route to serve your HTML file
app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
  });

app.listen(3050, () => {
    console.log('Server is up on 3050');
    }
);