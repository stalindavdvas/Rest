const express = require('express');
const app = express();

app.get('/name', (req, res) => {
    res.send('Mi mombre es Stalin Vasco');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
