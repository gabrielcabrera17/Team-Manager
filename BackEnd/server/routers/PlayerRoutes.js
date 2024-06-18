const PlayerController = require("../controllers/PlayerController");

module.exports = (app) => {
    app.post('/api/create/player', PlayerController.createPlayer);
    app.get('/api/get/players', PlayerController.getPlayers);
    app.delete('/api/delete/player/:id', PlayerController.deletePlayer);
}