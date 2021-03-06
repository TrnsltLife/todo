import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
		</div>
	</Router>,
	document.getElementById('root')
);
