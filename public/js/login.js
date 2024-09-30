// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const user = { email: 'user@example.com', password: '1234' };

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === user.email && password === user.password) {
        res.json({ message: 'Login exitoso' });
    } else {
        res.status(401).json({ message: 'Email o contraseña incorrectos' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
