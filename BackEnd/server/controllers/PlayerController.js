const Player = require("../models/PlayerModel");

module.exports.createPlayer = (req, res) => {
    const { name, position } = req.body;
    if(!name){
        return res.status(400).json({mensaje: "El nombre es obligatorio"})
    }
   return Player.create({ name, position })
         .then((Player) => res.status(201).json(Player))
        .catch((err) => res.status(500).json({mensaje: "Ocurrió un error al crear el jugador"}, err));
}

module.exports.getPlayers = (req, res) => {
    Player.find()
        .then((Players) => res.status(200).json(Players))
        .catch((err) => res.status(500).json({mensaje: "Ocurió un error al obtener los jugadores"}, err));
}

module.exports.deletePlayer = (req, res) => {
    const { id } = req.params;
    Player.findByIdAndDelete(id)
        .then((Player) => res.status(200).json(Player))
        .catch((err) => res.status(500).json({mensaje: "Ocurrio un error al eliminar el jugador"}, err));
}