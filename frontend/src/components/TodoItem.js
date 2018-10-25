import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Glyphicon} from 'react-bootstrap';

class TodoItem extends Component
{
	constructor(props)
	{
		super(props);
		this.onClickDelete = this.onClickDelete.bind(this);
	}
	
	onClickDelete(event)
	{
		//console.log('DELETE: /todo/' + this.props.todo.id);
		axios.delete('/todo/' + this.props.todo.id)
		.then(() => {
			this.props.onDelete(this.props.todo);
		});
	}
	
	render()
	{
		const paddingStyle = {
			"padding-right":"5px"
		}
		
		return (
			<tr><td style={paddingStyle}>
				<input name="completed" type="checkbox" checked={this.props.todo.completed} />
			</td><td style={paddingStyle}>
				<span>{this.props.todo.text}</span>
			</td><td>
				<Glyphicon glyph="trash" onClick={this.onClickDelete} />
			</td></tr>
		);
	}
}

export default TodoItem;