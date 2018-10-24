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
		this.itemAdded = this.itemAdded.bind(this);
	}
	
	componentDidMount()
	{
		//Load data with GET request to /todo
		axios.get("/todo")
		.then(response => {
			this.setState({items: response.data});
		});
	}
	
	itemAdded(newItem)
	{
		let {items} = this.state;
		items.push(newItem);
		this.setState({items: items});
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
				<TodoCreate onAdd={this.itemAdded} />
			</div>
		);
	}
}

export default TodoList