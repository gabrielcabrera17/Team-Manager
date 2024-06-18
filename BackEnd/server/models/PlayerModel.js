const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({ 
    name:{
        type: String,
        required: [true, "El nombre es obligatorio"],
        minlenght:[2, "El nombre debe tener al menos 3 caracteres"]
    },
    position:{
        type: String,
    }
})

module.exports = mongoose.model("Player", playerSchema);

