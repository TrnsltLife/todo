package com.example.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner
{

	@Autowired
	TodoItemRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception
	{
		repository.deleteAll();
		
		//Initialize the database with some todo items
		repository.save(new TodoItem("Phone screen", true));
		repository.save(new TodoItem("Learn Spring Boot"));
		repository.save(new TodoItem("Learn React"));
		repository.save(new TodoItem("Build a Todo App"));
	}
}
