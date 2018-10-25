import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TodoCreate extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			text: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChange(event)
	{
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit(event)
	{
		const {text} = this.state;
		event.preventDefault();
		axios.post('/todo', {text:text, completed:false})
		.then((result) => {
			this.props.onAdd(result.data)
		});
		
		this.setState({text:''}); //reset text to blank
	}
	
	render()
	{
		const {text} = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<input name="text" type="text" name="text" value={text} onChange={this.onChange} />
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default TodoCreate;