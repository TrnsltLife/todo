import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Glyphicon} from 'react-bootstrap';

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
			</td><td>
				<Glyphicon glyph="trash" />
			</td></tr>
		);
	}
}

export default TodoItem;