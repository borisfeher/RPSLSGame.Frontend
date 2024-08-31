import React from 'react';
import '../styles/ChoiceButton.css';

function ChoiceButton({ choice, onChoose }) {
    const images = {
        rock: '/images/rock.png',
        paper: '/images/paper.png',
        scissors: '/images/scissors.png',
        lizard: '/images/lizard.png',
        spock: '/images/spock.png'
    };

    return (
        <button className="choice-button" onClick={() => onChoose(choice.id)}>
            <img src={images[choice.name.toLowerCase()]} alt={choice.name} />
            <span>{choice.name}</span>
        </button>
    );
}

export default ChoiceButton;