import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
	const [perspective, setPerspective] = useState('factual');
	const [profession, setProfession] = useState('');
	const navigate = useNavigate()

	const handleProceed = () => {
		console.log('Proceeding with:', { perspective, profession });
		// Navigate to the Input page when the Proceed button is clicked
		navigate('/Input', { state: { perspective, profession } });

	};

	const handleSkip = () => {
		console.log('Skipping preferences');
		// TODO: Add skip logic here
	};

	return (
		<div className="home-wrapper">
			<div className="home-content">
				<h1>Unbias</h1>
				<p>Get advice from multiple perspectives</p>

				<div className="preference-section">
					<label className="text-lg font-semibold mb-2">Choose your perspective:</label>
					<div className="radio-group">
						<label>
							<input
								type="radio"
								value="optimistic"
								checked={perspective === 'optimistic'}
								onChange={() => setPerspective('optimistic')}
							/>
							Optimistic
						</label>
						<label>
							<input
								type="radio"
								value="factual"
								checked={perspective === 'factual'}
								onChange={() => setPerspective('factual')}
							/>
							Factual
						</label>
						<label>
							<input
								type="radio"
								value="pessimistic"
								checked={perspective === 'pessimistic'}
								onChange={() => setPerspective('pessimistic')}
							/>
							Pessimistic
						</label>
					</div>
				</div>

				<div className="profession-section">
					<label htmlFor="profession" className="text-lg font-semibold mb-2">Your profession:</label>
					<input
						type="text"
						id="profession"
						placeholder="Enter your profession"
						value={profession}
						onChange={(e) => setProfession(e.target.value)}
						className="profession-input"
					/>
				</div>

				<div className="action-buttons">
					<button onClick={handleProceed} className="proceed-button">
						Proceed
						<span className="arrow-right">→</span>
					</button>
					<button onClick={handleSkip} className="skip-button">
						Skip
						<span className="skip-forward">⏭</span>
					</button>
				</div>
			</div>
		</div>
	);
}