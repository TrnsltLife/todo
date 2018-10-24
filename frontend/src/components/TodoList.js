import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoCreate from './TodoCreate';

class TodoList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			items: []
		};
	}
	
	componentDidMount()
	{
		//Load data with GET request to /todo
		axios.get("/todo")
		.then(response => {
			this.setState({items: response.data});
		});
	}
	
	render()
	{
		return (
			<div>
				<h2>To-Do List</h2>
				<table>
					{
						this.state.items.map(t =>
							<TodoItem text={t.text} completed={t.completed} />
						)
					}
				</table>
				<br/>
				<TodoCreate />
			</div>
		);
	}
}

export default TodoList