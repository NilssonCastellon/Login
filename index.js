const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'tu_clave_secreta';

app.use(express.json());

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales recibidas en el cuerpo de la solicitud
  // Por simplicidad, supongamos que las credenciales son válidas
  const user = { id: 1, username: 'usuarioEjemplo' };

  // Genera un token JWT con la información del usuario
  const token = jwt.sign(user, secretKey);

  // Devuelve el token al frontend
  res.json({ token });
});

// Ruta protegida con JWT
app.get('/datos-protegidos', (req, res) => {
  // Verifica la presencia y validez del token en la solicitud
  const token = req.headers.authorization;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Acceso no autorizado
    }

    // Si el token es válido, devuelve los datos protegidos
    res.json({ mensaje: 'Bienvenido a los datos protegidos', usuario: decoded });
  });
});

const port = 3000;
app.listen(port, () => console.log(`Servidor en ejecución en http://localhost:${port}`));
