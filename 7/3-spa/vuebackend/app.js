const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = 3333;




app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 (async () => {
    await app.listen(PORT, () => {
        console.log(`Server start listen on port ${PORT}`);
    });
})();
