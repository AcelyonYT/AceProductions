const express = require('express');
const homepage = require('./routes/expressHome');
const app = express();
const port = 1234;

app.use("/", homepage);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});