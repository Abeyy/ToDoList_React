// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './App.jsx';


ReactDOM.render(<div>
	<Board />
	</div>
	, document.getElementById('react-root'));
