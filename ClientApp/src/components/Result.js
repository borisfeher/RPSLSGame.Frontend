import React from 'react';
import '../styles/Result.css';

function Result({ result, onPlayAgain }) {
    const playerChoice = result.player?.name || "Unknown";
    const playerImage = result.player?.image || "";
    const computerChoice = result.computer?.name || "Unknown";
    const computerImage = result.computer?.image || "";

    let resultColor;
    if (result.results === "win") {
        resultColor = "green";
    } else if (result.results === "lose") {
        resultColor = "red";
    } else {
        resultColor = "blue";
    }

    return (
        <div className="result-container" style={{ borderColor: resultColor }}>
            <h2 style={{ color: resultColor }}>{result.results}</h2>
            <div className="result-details">
                <div>
                    <h3>Your Choice:</h3>
                    <p>{playerChoice}</p>
                    {playerImage && <img className="choice-icon" src={playerImage} alt={playerChoice} style={{ width: '80px', height: '80px' }} />}
                </div>
                <div>
                    <h3>Computer's Choice:</h3>
                    <p>{computerChoice}</p>
                    {computerImage && <img className="choice-icon" src={computerImage} alt={computerChoice} style={{ width: '80px', height: '80px' }} />}
                </div>
            </div>
            <button className="play-again-button" onClick={onPlayAgain}>
                Play Again
            </button>
        </div>
    );
}

export default Result;