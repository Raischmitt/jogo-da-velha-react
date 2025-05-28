import { useState } from 'react';

export default function Player({ initiaName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(initiaName);
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(editing => !editing);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {!isEditing && (
                    <>
                        <span className="player-name">{playerName} </span>

                    </>
                )}
                {isEditing &&
                    <input type="text" required value={playerName} onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>

        </li >

    );

};