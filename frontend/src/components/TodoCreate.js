import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TodoCreate extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		return (
			<form>
				<input name="text" type="text" />
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default TodoCreate;