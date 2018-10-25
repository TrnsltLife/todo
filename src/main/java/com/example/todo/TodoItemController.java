package com.example.todo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoItemController 
{
	@Autowired
	TodoItemRepository repository;
	
	@RequestMapping(method=RequestMethod.GET, value="/todo")
	public Iterable<TodoItem> todoItem()
	{
		return repository.findAll();
	}

	@RequestMapping(method=RequestMethod.POST, value="/todo")
	public TodoItem save(@RequestBody TodoItem todo)
	{
		repository.save(todo);
		return todo;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/todo/{id}")
	public Optional<TodoItem> show(@PathVariable String id)
	{
		return repository.findById(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/todo/{id}")
	public TodoItem update(@PathVariable String id, @RequestBody TodoItem todo)
	{
		Optional<TodoItem> optTodo = repository.findById(id);
		TodoItem t = optTodo.get();
		if(todo.text != null) {t.setText(todo.text);}
		if(todo.completed != null) {t.setCompleted(todo.completed);}
		repository.save(t);
		return t;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/todo/{id}")
	public String delete(@PathVariable String id)
	{
		Optional<TodoItem> optTodo = repository.findById(id);
		TodoItem todo = optTodo.get();
		repository.delete(todo);
		return "";
	}
}
