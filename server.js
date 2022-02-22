const express = require('express');
const app = express();

const PORT = 12345;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})