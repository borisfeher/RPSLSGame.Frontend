import React, { useState } from 'react';
import ChoiceButton from './ChoiceButton';
import Result from './Result';
import Scoreboard from './Scoreboard';
import axios from 'axios';
import '../styles/Game.css';

const choices = [
    { id: 1, name: 'Rock', image: '/images/rock.png' },
    { id: 2, name: 'Paper', image: '/images/paper.png' },
    { id: 3, name: 'Scissors', image: '/images/scissors.png' },
    { id: 4, name: 'Lizard', image: '/images/lizard.png' },
    { id: 5, name: 'Spock', image: '/images/spock.png' },
];

function Game() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshScores, setRefreshScores] = useState(false);

    const handleChoice = async (playerChoiceId) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/play', { choiceId: playerChoiceId });
            setResult(response.data);
            setRefreshScores(true);
        } catch (error) {
            console.error('Error during game play:', error);
            alert('An error occurred while playing. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetGame = () => {
        setResult(null);
        setRefreshScores(false);
    };

    return (
        <div className="game-container">
            <h1>Rock, Paper, Scissors, Lizard, Spock</h1> {}
            {!result ? (
                <div className="choices-container">
                    <h2>Make your choice:</h2>
                    <div className="choices-grid">
                        {choices.map((choice) => (
                            <ChoiceButton key={choice.id} choice={choice} onChoose={handleChoice} />
                        ))}
                    </div>
                </div>
            ) : (
                <Result result={result} onPlayAgain={resetGame} />
            )}
            {loading && <div className="loading">Loading...</div>}
            <Scoreboard refresh={refreshScores} />
        </div>
    );
}

export default Game;