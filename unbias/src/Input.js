import React from 'react';
import './Input.css';

function Input() {
	return (
		<div className="input-page">
			<div className="left-pane">
				<h2>History</h2>
				{/* This will be populated later */}
			</div>

			<div className="main-content">
				<div className="input-section">
					<textarea
						className="problem-input"
						placeholder="Enter your problem here"
					/>
					<button className="submit-button">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Input;
