import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TodoItem extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		return (
			<tr><td>
				<input name="completed" type="checkbox" checked={this.props.completed} />
			</td><td>
				<span>{this.props.text}</span>
			</td></tr>
		);
	}
}

export default TodoItem;