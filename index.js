const express = require("express");
const recetaRoutes = require('./routes/recetaRoutes');
const ingredienteRoutes = require('./routes/ingredienteRoutes');
const cors = require("cors");
const app = express();
const port = 3030;

const db = require("./data/db");

app.use(cors()); // Habilita CORS
app.use(express.json());

app.use('/recetas', recetaRoutes);
app.use('/ingredientes', ingredienteRoutes);


app.get("/", (req, res) => {
    res.send("Estás en el home");
});

const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log(`Conectado Ok a la Base de datos`);
        await db.sync();  // Sincroniza los modelos
        console.log("Modelos sincronizados");
    } catch (error) {
        console.log(`Hay un error y es el siguiente: ${error}`);
    }
};

app.listen(port, () => {
    conexionDB();
    console.log(`Servidor Ok en el puerto ${port}`);
});
