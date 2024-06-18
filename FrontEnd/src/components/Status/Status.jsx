import style from './Status.module.css';
import { useState } from 'react';

const Status = ({ players }) => {
    const [statuses, setStatuses] = useState({});

    const handleClick = (playerId, newStatus) => {
        setStatuses((prevStatuses) => ({
            ...prevStatuses,
            [playerId]: newStatus,
        }));
    };

    return (
        <div>
            <h1>Status</h1>
            <div className={style.statusContainer}>
                <table className={style.statusTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>
                                    <button
                                        className={`${style.button} ${statuses[player._id] === 'playing' ? style.playing : ''}`}
                                        onClick={() => handleClick(player._id, 'playing')}
                                    >
                                        Playing
                                    </button>
                                    <button
                                        className={`${style.button} ${statuses[player._id] === 'not-playing' ? style.notPlaying : ''}`}
                                        onClick={() => handleClick(player._id, 'not-playing')}
                                    >
                                        Not Playing
                                    </button>
                                    <button
                                        className={`${style.button} ${statuses[player._id] === 'undecided' ? style.undecided : ''}`}
                                        onClick={() => handleClick(player._id, 'undecided')}
                                    >
                                        Undecided
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Status;
