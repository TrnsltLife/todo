package com.example.todo;

import org.springframework.data.annotation.Id;

public class TodoItem 
{
	@Id Long id;
	String text;
	Boolean completed;
	
	public TodoItem() {}
	public TodoItem(String text)
	{
		this.text = text;
	}
	public TodoItem(String text, Boolean completed)
	{
		this.text = text;
		this.completed = completed;
	}
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	public Boolean getCompleted() {
		return completed;
	}
	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
}
