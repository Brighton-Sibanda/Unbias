import React from 'react';
import './Input.css'; // We'll use CSS to style the layout

function Input() {
	return (
		<div className="input-page">
			<div className="left-pane">
				<h2>History</h2>
				{/* This will be populated later */}
			</div>

			<div className="main-content">
				<textarea
					className="problem-input"
					placeholder="Enter your problem here"
				/>
			</div>
		</div>
	);
}

export default Input;
