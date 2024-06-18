import NewPlayer from '../NewPlayer/NewPlayer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ListPlayer from '../ListPlayer/ListPlayer';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Status from '../Status/Status';
const App = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const isStatusRoute = location.pathname === '/status/game/1';

    useEffect(() => {
        axios.get('http://localhost:8080/api/get/players')
            .then(response => {
                setPlayers(response.data);
                setError("");
            })
            .catch(error => {
                setError(error.response.data.mensaje);
            })
    }, [])

  const addplayer = (Newplayer) => {
    setPlayers([...players, Newplayer]);
  };

  const deletePlayer = (playerId)=>{
    const indicePlayer = players.findIndex(player => player._id === playerId);
    const playersActualizado = [...players];
    playersActualizado.splice(indicePlayer, 1);
    setPlayers(playersActualizado);
  }
  return (
    <div className="ContainerApp">
    <div className='navLinkContainer'>
      <Link to="/players/list">Manage Players</Link>
      <span className='separator'>|</span>
      <Link to="/status/game/1">Manage Players Status</Link>
    </div>
    <div className="SubContainerApp">
      {!isStatusRoute && (
        <div className='navLink'>
          <Link to="/players/list">List</Link>
          <span className='separator'>|</span>
          <Link to="/players/addplayer">Add Player</Link>
        </div>
      )}
      <Routes>
        <Route path="/players/list" element={<ListPlayer players={players} error={error} deletePlayer={deletePlayer} />} />
        <Route path="/players/addplayer" element={<NewPlayer addplayer={addplayer} />} />
        <Route path="/status/game/1" element={<Status players={players} />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
