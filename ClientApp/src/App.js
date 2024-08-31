// ClientApp/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import './custom.css';

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;