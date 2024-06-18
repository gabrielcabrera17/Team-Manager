import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './NewPlayer.module.css';
const NewPlayer = ({addplayer}) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const procesaFormPlayer = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/create/player', 
            { name, position },
            { headers: { 
                'Content-Type': 'application/json' 
            } 
            })
            .then(response => {
                setName(response.data.name);
                setPosition(response.data.position);
                addplayer(response.data);
                setError("");
                console.log(response.data);
                navigate("/players/list");
            })
            .catch(error => {
                setError(error.response.data.mensaje);
            })
    }

    return(
        <div className={style.newPlayerContainer}>
            <h1 className={style.newPlayerTitle}> Add Player</h1>
            <form className={style.newplayerForm} onSubmit={procesaFormPlayer}>
                <div className={style.labels}>
                    <div>
                        <label className={style.labelName}>Player Name:</label>
                        <input className={style.inputName} 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Preferred Position:</label>
                        <input className={style.inputPosition}
                        type="text" 
                        name="position" 
                        value={position}
                        onChange={(e) => setPosition(e.target.value)} /> 
                    </div>
                </div>

                <input className={style.buttonAdd}
                type="submit" 
                value="ADD" />
                <span>{error}</span>
            </form>
        </div>
    )
}

export default NewPlayer;