import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Scoreboard.css';

function Scoreboard({ refresh }) {
    const [scores, setScores] = useState([]);

    const fetchScores = async () => {
        try {
            const response = await axios.get('/api/play/recent');
            setScores(response.data);
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    };

    useEffect(() => {
        fetchScores();
    }, [refresh]);

    const resetScores = async () => {
        await axios.post('/api/play/reset');
        setScores([]);
    };

    return (
        <div className="scoreboard-container">
            <button onClick={resetScores} className="reset-button">Reset Scores</button>
            <h2>Recent Results</h2>
            <ul>
                {scores.length > 0 ? (
                    scores.map((score, index) => (
                        <li key={score.id || index} className={`result-${score.result.toLowerCase()}`}>
                            <span className="result-timestamp">{new Date(score.timestamp).toLocaleString()}</span>
                            <div>
                                <span className="label">Player:</span> <span>{score.playerChoice}</span>
                            </div>
                            <div>
                                <span className="label">Computer:</span> <span>{score.computerChoice}</span>
                            </div>
                            <div className="result-final">
                                <span className="label">Result:</span> <span>{score.result}</span>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No recent results</li>
                )}
            </ul>
        </div>
    );
}

export default Scoreboard;