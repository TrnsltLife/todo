import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<h1>Todo App</h1>
			<Route exact path="/" component={App} />
		</div>
	</Router>,
	document.getElementById('root')
);
