import axios from 'axios';
import style from './ListPlayer.module.css';
const ListPlayer = ({players, error, deletePlayer}) => {

    const deletingPlayer = (id) => {
        axios.delete(`http://localhost:8080/api/delete/player/${id}`)
        .then(response => {
            console.log(response.data);
            deletePlayer(id);
        })
        .catch(error => {
            console.log(error);
        })
    }

    
    return(
        <div>
            <h1>Players</h1>
            <div className={style.tablecontainer}>
                <table className={style.playertable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td ><button className={style.button} onClick={() => deletingPlayer(player._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {error && <p>{error}</p>}
        </div>

    )

}

export default ListPlayer;