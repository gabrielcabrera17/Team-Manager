const express = require("express");
const cors = require("cors");
const app = express();
const rutasPlayer = require('./server/routers/PlayerRoutes');

//requerimos la base de datos
require('./server/config/baseDato');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//le pasamos la app a nuestra ruta
rutasPlayer(app);


//listen
app.listen(8080, () => {
    console.log("Corriendo servidor en el puerto 8080");
})