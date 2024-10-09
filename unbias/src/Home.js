import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [preference, setPreference] = useState('factual'); // Default setting
    const [profession, setProfession] = useState('');

    const handleSubmit = () => {
        console.log('Preference:', preference);
        console.log('Profession:', profession);
        // TODO: Deal with logic later.
    };

    return (
        <div className="home-wrapper">
            <h1>Welcome to Unbias</h1>
            <p>Select your preferred perspective:</p>
            <div className="toggle-buttons">
                <button onClick={() => setPreference('optimistic')} className={preference === 'optimistic' ? 'active' : ''}>Optimistic</button>
                <button onClick={() => setPreference('factual')} className={preference === 'factual' ? 'active' : ''}>Factual</button>
                <button onClick={() => setPreference('pessimistic')} className={preference === 'pessimistic' ? 'active' : ''}>Pessimistic</button>
            </div>
            <input
                type="text"
                placeholder="Enter your profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="profession-input"
            />
            <div className="home-button">
                <button onClick={handleSubmit}>Proceed</button>
                <button onClick={handleSubmit}>Skip</button>
            </div>
        </div>
    );
}

export default Home;
