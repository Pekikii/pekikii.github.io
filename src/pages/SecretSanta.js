import React, { useState } from 'react';

const SecretSanta = () => {
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState('');

    const addParticipant = () => {
        if (newParticipant && !participants.includes(newParticipant)) {
            setParticipants([...participants, newParticipant]);
            setNewParticipant('');
        }
    };

    const handleChange = (e) => {
        setNewParticipant(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addParticipant();
    };

    const getRandomMatch = () => {
        const shuffled = [...participants].sort(() => Math.random() - 0.5);
        return participants.map((participant, index) => ({
            name: participant,
            match: shuffled[index === shuffled.length - 1 ? 0 : index + 1],
        }));
    };

    const handleDraw = () => {
        const matches = getRandomMatch();
        alert(JSON.stringify(matches, null, 2)); // Show matches in an alert
    };

    return (
        <div className="secretsanta-container">
            <h2>Secret Santa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newParticipant}
                    onChange={handleChange}
                    placeholder="Add a participant"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
            {participants.length > 1 && (
                <button onClick={handleDraw}>Draw Secret Santa</button>
            )}
        </div>
    );
};

export default SecretSanta;
