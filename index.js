
const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const db = require('./data/db');
const authRoutes = require('./routes/authRoutes');
const recetaRoutes = require('./routes/recetaRoutes');
const ingredienteRoutes = require('./routes/ingredienteRoutes')

const app = express();
const port = process.env.PORT || 3030;

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Cambiar a la URL del frontend cuando se haga el despliegue
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());


// Conecta la base de datos
db.authenticate().then(() => {
  console.log('Conectado a la base de datos');
  db.sync(); // Sincroniza los modelos
}).catch(err => {
  console.error('Error al conectar a la base de datos', err);
});

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas de recetas
app.use('/recetas', recetaRoutes);
app.use('/ingredientes', ingredienteRoutes);

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
