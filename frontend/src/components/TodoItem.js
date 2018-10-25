import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Glyphicon} from 'react-bootstrap';

class TodoItem extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			completed: !!this.props.todo.completed
		}
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	onClickDelete(event)
	{
		axios.delete('/todo/' + this.props.todo.id)
		.then(() => {
			this.props.onDelete(this.props.todo);
		});
	}
	
	onChange(event)
	{
		const state = this.state;
		state.completed = event.target.checked;
		
		axios.put('/todo/' + this.props.todo.id, {completed:state.completed})
		.then((result) => {
			this.setState(state);			
		});
	}
	
	render()
	{
		const paddingStyle = {
			"padding-right":"5px"
		}
		
		return (
			<tr><td style={paddingStyle}>
				<input name="completed" type="checkbox" checked={this.state.completed} onChange={this.onChange} />
			</td><td style={paddingStyle}>
				{/*if not completed, display span*/}
				{!this.state.completed &&
						<span>{this.props.todo.text}</span>
				}
				{/*if completed, display del*/}
				{this.state.completed &&
					<del>{this.props.todo.text}</del>
				}
			</td><td>
				<Glyphicon glyph="trash" onClick={this.onClickDelete} />
			</td></tr>
		);
	}
}

export default TodoItem;