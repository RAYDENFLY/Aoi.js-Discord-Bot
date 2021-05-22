//ex[ress
const express = require('express');
const app = express();
const port = 18273;

app.get('/', (req, res) => res.send('Yurika ON'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
