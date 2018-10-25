import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoCreate from './TodoCreate';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid, Col, Row, Panel, Table} from 'react-bootstrap';

class TodoList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			items: []
		};
		this.itemAdded = this.itemAdded.bind(this);
		this.itemDeleted = this.itemDeleted.bind(this);
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
		//Add the new element to the list
		let {items} = this.state;
		items.push(newItem);
		this.setState({items: items});
	}
	
	itemDeleted(item)
	{
		//Find the element and delete it from the list
		let {items} = this.state;
		let index = items.findIndex((it) => {
			return it.id === item.id;
		});
		if(index > -1)
		{
			items.splice(index, 1);
		}
		this.setState({items: items});
		
		//TODO: another way would be just to reload the list
	}
	
	render()
	{
		return (
			<div>
				<Grid><Row><Col xs={12} sm={8} md={6} lg={4}>
				<Panel>
					<Panel.Heading>
						<Panel.Title componentClass="h3">To-Do List</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<Table striped>
							{
								this.state.items.map(t =>
									<TodoItem todo={t} onDelete={this.itemDeleted} />
								)
							}
							</Table>
						<br/>
						<TodoCreate onAdd={this.itemAdded} />
					</Panel.Body>
				</Panel>
				</Col></Row></Grid>
			</div>
		);
	}
}

export default TodoList