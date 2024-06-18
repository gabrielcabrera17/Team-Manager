const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/TeamManager_bd')
    .then(res => console.log("Base de datos conectada"))
    .catch(err => console.log(err))